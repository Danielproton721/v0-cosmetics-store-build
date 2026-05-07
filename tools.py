#!/usr/bin/env python3
"""
tools.py — Ferramentas consolidadas para gerenciar produtos da loja.

Uso:
  python tools.py merge          → Processa CSVs e gera lib/products.ts
  python tools.py analyze        → Analisa categorias dos produtos em products.ts
  python tools.py extract <url>  → Extrai links de produtos de uma URL
  python tools.py get_image <url>→ Busca imagem og:image de um produto
  python tools.py replace_images → Substitui imagens quebradas do Shopify por Unsplash
  python tools.py import_csv <csv> [category] → Importa um único CSV para products.ts
"""

import csv
import re
import json
import random
import sys
import urllib.request
import os

# ══════════════════════════════════════════════════════════════════
# Paths padrão
# ══════════════════════════════════════════════════════════════════
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
TS_FILE = os.path.join(BASE_DIR, 'lib', 'products.ts')
DATA_DIR = os.path.join(BASE_DIR, 'data')


# ══════════════════════════════════════════════════════════════════
# MERGE — Processa múltiplos CSVs → products.ts
# ══════════════════════════════════════════════════════════════════
def cmd_merge():
    products = []
    seen_handles = set()

    def make_unique_slug(slug):
        original = slug
        counter = 1
        while slug in seen_handles:
            slug = f"{original}-{counter}"
            counter += 1
        seen_handles.add(slug)
        return slug

    def process_csv(filepath, category_name, extra_tags=None):
        if extra_tags is None:
            extra_tags = []
        if not os.path.exists(filepath):
            print(f"[SKIP] Arquivo não encontrado: {filepath}")
            return
        temp_dict = {}
        with open(filepath, 'r', encoding='utf-8') as f:
            reader = csv.reader(f)
            try:
                header = next(reader)
            except StopIteration:
                return

            header_lower = [h.lower() for h in header]
            try: handle_col = header_lower.index('handle')
            except ValueError: handle_col = 0
            try: title_col = header_lower.index('title')
            except ValueError: title_col = 1
            try: desc_col = header_lower.index('body (html)')
            except ValueError: desc_col = 2
            try: type_col = header_lower.index('type')
            except ValueError: type_col = -1

            price_col, compare_col, img_col = -1, -1, -1
            for i, h in enumerate(header_lower):
                if h == 'variant price': price_col = i
                elif 'compare at price' in h: compare_col = i
                elif h == 'image src': img_col = i

            for row in reader:
                if not row or len(row) <= handle_col:
                    continue
                handle = row[handle_col]
                if not handle:
                    continue
                if handle not in temp_dict:
                    temp_dict[handle] = {
                        'title': '', 'desc_html': '', 'type': '',
                        'price': 0.0, 'compareAtPrice': 0.0, 'image': ''
                    }
                
                title = row[title_col] if len(row) > title_col else ''
                if title and not temp_dict[handle]['title']:
                    temp_dict[handle]['title'] = title
                
                desc = row[desc_col] if len(row) > desc_col else ''
                if desc and not temp_dict[handle]['desc_html']:
                    temp_dict[handle]['desc_html'] = desc

                if type_col != -1 and len(row) > type_col:
                    product_type = row[type_col]
                    if product_type and not temp_dict[handle]['type']:
                        temp_dict[handle]['type'] = product_type

                if price_col != -1 and len(row) > price_col:
                    price_str = row[price_col]
                    try: p = float(price_str)
                    except ValueError: p = 0.0
                    if p > temp_dict[handle]['price']:
                        temp_dict[handle]['price'] = p

                if compare_col != -1 and len(row) > compare_col:
                    compare_str = row[compare_col]
                    try: cp = float(compare_str)
                    except ValueError: cp = 0.0
                    if cp > temp_dict[handle]['compareAtPrice']:
                        temp_dict[handle]['compareAtPrice'] = cp

                if img_col != -1 and len(row) > img_col:
                    img = row[img_col]
                    if img and not temp_dict[handle]['image']:
                        temp_dict[handle]['image'] = img

        for handle, data in temp_dict.items():
            if not data['title']:
                continue
            desc_clean = re.sub(r'<[^>]+>', '', data['desc_html']).replace('\n', ' ').strip()
            desc_clean = desc_clean[:200] + '...' if len(desc_clean) > 200 else desc_clean
            price = data['price'] if data['price'] > 0 else 99.90
            compare = data['compareAtPrice'] if data['compareAtPrice'] > price else round(price * 1.5, 2)
            slug = make_unique_slug(handle)

            cat = category_name
            if cat == 'AUTO':
                tl = data['title'].lower()
                ptype = data['type'].lower()
                if 'toalha' in tl or 'toalha' in ptype: cat = 'Toalhas'
                elif 'edredom' in tl or 'edredon' in tl or 'edredom' in ptype: cat = 'Edredons'
                elif 'lençol' in tl or 'lencol' in tl or 'lençol' in ptype: cat = 'Jogos de Lençol'
                elif 'colcha' in tl or 'colcha' in ptype or 'cobre leito' in tl: cat = 'Colchas e Cobre-Leito'
                else: cat = 'Diversos'

            products.append({
                'id': len(products) + 1,
                'name': data['title'],
                'price': price,
                'compareAtPrice': compare,
                'image': data['image'],
                'rating': round(random.uniform(3.9, 5.0), 1),
                'reviews': random.randint(12, 245),
                'category': cat,
                'slug': slug,
                'description': desc_clean,
                'isTest': False,
                'tags': extra_tags
            })

    # Processa todos os CSVs na pasta data/
    if not os.path.exists(DATA_DIR):
        print(f"[ERRO] Pasta de dados não encontrada: {DATA_DIR}")
        return

    csv_files = [f for f in os.listdir(DATA_DIR) if f.lower().endswith('.csv')]
    if not csv_files:
        print(f"[AVISO] Nenhum arquivo CSV encontrado em {DATA_DIR}")
        
    for filename in csv_files:
        path = os.path.join(DATA_DIR, filename)
        # Nome da coleção baseado no nome do arquivo (ex: "novidades.csv" -> "Novidades")
        collection_name = filename.replace('.csv', '').replace('_', ' ').replace('-', ' ').title()
        
        # Tags adicionais: a própria coleção sempre entra como tag
        tags = [collection_name]
        
        try:
            print(f"Processing: {filename} (Collection: {collection_name})")
            process_csv(path, 'AUTO', tags)
        except Exception as e:
            print(f"[ERROR] Failed to process {filename}: {e}")

    _write_ts(products)
    print(f"Merge complete. Total: {len(products)} products -> {TS_FILE}")


# ══════════════════════════════════════════════════════════════════
# IMPORT_CSV — Importa um CSV avulso
# ══════════════════════════════════════════════════════════════════
def cmd_import_csv(csv_path, category='Importado'):
    products = []
    seen_handles = set()

    with open(csv_path, 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        header = next(reader)
        for row in reader:
            if not row:
                continue
            handle = row[0]
            if not handle or handle in seen_handles:
                continue
            title = row[1] if len(row) > 1 else ''
            if not title:
                continue
            desc_html = row[2] if len(row) > 2 else ''
            price_str = row[20] if len(row) > 20 else '0'
            image_url = row[25] if len(row) > 25 else ''

            desc_clean = re.sub(r'<[^>]+>', '', desc_html).replace('\n', ' ').strip()
            desc_clean = desc_clean[:200] + '...' if len(desc_clean) > 200 else desc_clean
            try: price = float(price_str)
            except: price = 99.90
            if price == 0: price = 99.90

            cat = category
            tl = title.lower()
            if 'toalha' in tl: cat = 'Toalhas'
            elif 'edredom' in tl or 'edredon' in tl: cat = 'Edredons'
            elif 'lençol' in tl or 'lencol' in tl: cat = 'Jogos de Lençol'

            products.append({
                'id': len(products) + 1,
                'name': title,
                'price': price,
                'image': image_url,
                'rating': 5, 'reviews': 24,
                'category': cat,
                'slug': handle,
                'description': desc_clean,
                'isTest': False,
            })
            seen_handles.add(handle)

    _write_ts(products)
    print(f"✅ Importado {len(products)} produtos de {csv_path}")


# ══════════════════════════════════════════════════════════════════
# ANALYZE — Analisa subcategorias em products.ts
# ══════════════════════════════════════════════════════════════════
def cmd_analyze():
    with open(TS_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    names = re.findall(r'"name":\s*"([^"]+)"', content)
    cats = {
        'Solteiro': [], 'Casal/Queen/King': [], 'Colchas/Cobre leito': [],
        'Toalhas/Tapetes': [], 'Hotelaria': [], 'Bordado Inglês': [],
        'Estampados': [], 'Linha Luxo': [],
    }
    for name in names:
        n = name.lower()
        if 'solteiro' in n: cats['Solteiro'].append(name)
        if any(k in n for k in ('casal', 'queen', 'king')): cats['Casal/Queen/King'].append(name)
        if any(k in n for k in ('colcha', 'cobre leito')): cats['Colchas/Cobre leito'].append(name)
        if any(k in n for k in ('toalha', 'tapete')): cats['Toalhas/Tapetes'].append(name)
        if any(k in n for k in ('hotelaria', 'hotel')): cats['Hotelaria'].append(name)
        if 'bordado' in n: cats['Bordado Inglês'].append(name)
        if any(k in n for k in ('estampado', 'estampa')): cats['Estampados'].append(name)
        if any(k in n for k in ('luxury', 'egipcio', 'seda', 'veludo')): cats['Linha Luxo'].append(name)

    print(f"Total de produtos: {len(names)}\n")
    for cat, items in cats.items():
        print(f"  {cat}: {len(items)}")


# ══════════════════════════════════════════════════════════════════
# EXTRACT — Extrai links de produtos de uma URL
# ══════════════════════════════════════════════════════════════════
def cmd_extract(url=None):
    if not url:
        url = 'https://www.bellaprimavera.com.br/kit-mais-desejado?sort_by=best_sellers'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        links = re.findall(r'href="(https?://www\.bellaprimavera\.com\.br/produtos/[^"]+|/produtos/[^"]+)"', html)
        if not links:
            links = re.findall(r'<a[^>]+href="([^"]+)"[^>]*class="[^"]*js-item-name[^"]*"', html)
        if not links:
            all_links = re.findall(r'<a[^>]+href="([^"]+)"', html)
            links = [l for l in all_links if l.startswith('https://www.bellaprimavera.com.br/produtos/')]

        unique = []
        for l in links:
            if not l.startswith('http'):
                l = 'https://www.bellaprimavera.com.br' + l
            if l not in unique:
                unique.append(l)

        out = os.path.join(TRASH_DIR, 'links_produtos.csv')
        with open(out, 'w', newline='', encoding='utf-8') as f:
            writer = csv.writer(f)
            writer.writerow(['Link'])
            for link in unique:
                writer.writerow([link])
        print(f"✅ {len(unique)} links extraídos → {out}")
    except Exception as e:
        print(f"[ERRO] {e}")


# ══════════════════════════════════════════════════════════════════
# GET_IMAGE — Busca og:image de uma URL de produto
# ══════════════════════════════════════════════════════════════════
def cmd_get_image(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        images = re.findall(r'og:image" content="([^"]+)"', html)
        if images:
            for img in images:
                print(img)
        else:
            print("Nenhuma og:image encontrada.")
    except Exception as e:
        print(f"[ERRO] {e}")


# ══════════════════════════════════════════════════════════════════
# REPLACE_IMAGES — Substitui imagens quebradas por Unsplash
# ══════════════════════════════════════════════════════════════════
def cmd_replace_images():
    unsplash = [
        "https://images.unsplash.com/photo-1522771731478-44eb10e42d76?w=800&q=80",
        "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
        "https://images.unsplash.com/photo-1574634534894-89d7576c8d59?w=800&q=80",
        "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?w=800&q=80",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
        "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&q=80",
        "https://images.unsplash.com/photo-1536882240095-0379873feb4e?w=800&q=80",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
        "https://images.unsplash.com/photo-1541123437800-141315123d53?w=800&q=80",
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
        "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800&q=80",
        "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80",
        "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80",
    ]
    with open(TS_FILE, 'r', encoding='utf-8') as f:
        content = f.read()
    new_content = re.sub(
        r'"https://cdn\.shopify\.com/s/files/1/0818/1540/4758/[^"]+"',
        lambda _: f'"{random.choice(unsplash)}"',
        content
    )
    with open(TS_FILE, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("✅ Imagens quebradas substituídas.")


# ══════════════════════════════════════════════════════════════════
# Helper — Escreve products.ts
# ══════════════════════════════════════════════════════════════════
def _write_ts(products):
    # Coleta categorias únicas para gerar collections dinâmicas
    categories = []
    seen_cats = set()
    for p in products:
        cats_to_add = [p['category']] + p.get('tags', [])
        for c in cats_to_add:
            if c not in seen_cats:
                seen_cats.add(c)
                slug = c.lower().replace(' ', '-').replace('ç', 'c').replace('ã', 'a').replace('ê', 'e')
                categories.append({
                    'slug': slug,
                    'name': c,
                    'image': p.get('image', '/images/product-1.jpg'),
                    'productCount': sum(1 for x in products if x['category'] == c or (x.get('tags') and c in x.get('tags', []))),
                    'description': f"Nossa coleção de {c}",
                })

    has_compare = any('compareAtPrice' in p for p in products)
    compare_field = "\n  compareAtPrice?: number;" if has_compare else ""

    ts = f'''export interface Product {{
  id: number;
  name: string;
  price: number;{compare_field}
  image: string;
  rating: number;
  reviews: number;
  category: string;
  slug: string;
  description?: string;
  isTest?: boolean;
  tags?: string[];
}}

export interface Collection {{
  slug: string;
  name: string;
  image: string;
  productCount: number;
  description: string;
}}

export const collections: Collection[] = {json.dumps(categories, indent=2, ensure_ascii=False)};

export const products: Product[] = {json.dumps(products, indent=2, ensure_ascii=False)};

export function getProductBySlug(slug: string) {{
  return products.find(p => p.slug === slug);
}}

export function getProductsByCategory(category: string) {{
  return products.filter(p => p.category === category || (p.tags && p.tags.includes(category)));
}}

export function getCollectionBySlug(slug: string) {{
  return collections.find(c => c.slug === slug);
}}

export function getProductsByCollection(slug: string) {{
  const col = collections.find(c => c.slug === slug);
  if (col) return products.filter(p => p.category === col.name || (p.tags && p.tags.includes(col.name)));
  return products;
}}
'''
    with open(TS_FILE, 'w', encoding='utf-8') as f:
        f.write(ts)


# ══════════════════════════════════════════════════════════════════
# CLI
# ══════════════════════════════════════════════════════════════════
def main():
    if len(sys.argv) < 2:
        print(__doc__)
        return

    cmd = sys.argv[1].lower()

    if cmd == 'merge':
        cmd_merge()
    elif cmd == 'analyze':
        cmd_analyze()
    elif cmd == 'extract':
        url = sys.argv[2] if len(sys.argv) > 2 else None
        cmd_extract(url)
    elif cmd == 'get_image':
        if len(sys.argv) < 3:
            print("Uso: python tools.py get_image <url>")
            return
        cmd_get_image(sys.argv[2])
    elif cmd == 'replace_images':
        cmd_replace_images()
    elif cmd == 'import_csv':
        if len(sys.argv) < 3:
            print("Uso: python tools.py import_csv <csv_path> [category]")
            return
        cat = sys.argv[3] if len(sys.argv) > 3 else 'Importado'
        cmd_import_csv(sys.argv[2], cat)
    else:
        print(f"Comando desconhecido: {cmd}")
        print(__doc__)

if __name__ == '__main__':
    main()
