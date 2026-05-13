#!/usr/bin/env python3
"""
tools.py — Ferramentas consolidadas para gerenciar produtos da loja.

Uso:
  python tools.py import <csv>    → Importa um CSV da Shopify e gera lib/products.ts
  python tools.py analyze        → Analisa categorias dos produtos em products.ts
  python tools.py extract <url>  → Extrai links de produtos de uma URL
  python tools.py get_image <url>→ Busca imagem og:image de um produto
  python tools.py replace_images → Substitui imagens quebradas do Shopify por Unsplash
"""

import csv
import hashlib
import html
import re
import json
import random
import sys
import unicodedata
import urllib.request
import os

# ══════════════════════════════════════════════════════════════════
# Paths padrão
# ══════════════════════════════════════════════════════════════════
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
TS_FILE = os.path.join(BASE_DIR, 'lib', 'products.ts')
# BASE_DIR/lib/products.ts é o alvo principal
TS_FILE = os.path.join(BASE_DIR, 'lib', 'products.ts')


def _slugify(value):
    value = unicodedata.normalize('NFD', value or '')
    value = ''.join(ch for ch in value if unicodedata.category(ch) != 'Mn')
    value = re.sub(r'[^a-z0-9]+', '-', value.lower()).strip('-')
    return value or 'produto'


def _clean_html(value):
    text = re.sub(r'<[^>]+>', ' ', value or '')
    text = html.unescape(text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text[:200] + '...' if len(text) > 200 else text


def _parse_money(value):
    raw = str(value or '').strip().replace('R$', '').replace(' ', '')
    if ',' in raw and '.' in raw:
        raw = raw.replace('.', '').replace(',', '.')
    elif ',' in raw:
        raw = raw.replace(',', '.')
    try:
        return float(raw)
    except ValueError:
        return 0.0


def _read_existing_products():
    if not os.path.exists(TS_FILE):
        return []

    with open(TS_FILE, 'r', encoding='utf-8-sig') as f:
        content = f.read()

    match = re.search(r'export const products: Product\[] = (\[.*?\]);', content, re.S)
    if not match:
        return []

    try:
        products = json.loads(match.group(1))
    except json.JSONDecodeError as exc:
        raise RuntimeError(f'Nao foi possivel ler produtos existentes em {TS_FILE}: {exc}')

    return products if isinstance(products, list) else []


def _make_unique_slug(slug, seen_slugs):
    original = _slugify(slug)
    current = original
    counter = 1
    while current in seen_slugs:
        current = f'{original}-{counter}'
        counter += 1
    seen_slugs.add(current)
    return current


def _infer_category(title, product_type, filename):
    text = f'{title} {product_type} {filename}'.lower()
    if any(k in text for k in ('decoracoes', 'decoracao', 'decoração', 'decorações')):
        return 'Decorações'
    if 'cortina' in text:
        return 'Cortinas'
    if any(k in text for k in ('jogo de banho', 'toalha', 'tapete de banheiro', 'banheiro', 'banho')):
        return 'Toalhas'
    if 'cama posta' in text:
        return 'Kit Cama Posta'
    if 'edredom' in text or 'edredon' in text:
        return 'Edredons'
    if any(k in text for k in ('lençol', 'lencol', 'fronha')):
        return 'Jogos de Lençol'
    if 'colcha' in text or 'cobre leito' in text:
        return 'Colchas e Cobre-Leito'
    return 'Diversos'


def _filename_tag(filename):
    stem = os.path.splitext(os.path.basename(filename))[0]
    stem = re.sub(r'[-_\s]+products?[-_\s]+export$', '', stem, flags=re.I)
    stem = re.sub(r'_products$', '', stem, flags=re.I)
    stem = re.sub(r'_links$', '', stem, flags=re.I)
    stem = re.sub(r'[-_\s]+export$', '', stem, flags=re.I)
    stem = re.sub(r'\s+products?$', '', stem, flags=re.I)
    stem = re.sub(r'\s+produtos?$', '', stem, flags=re.I)
    stem = re.sub(r'[-_]+', ' ', stem).strip()
    tag = ' '.join(part.capitalize() for part in stem.split()) if stem else ''
    if _slugify(tag) == 'decoracoes':
        return 'Decorações'
    if _slugify(tag) == 'banho':
        return 'Toalhas'
    if _slugify(tag) == 'cortina':
        return 'Cortinas'
    if _slugify(tag) == 'cama':
        return ''
    return tag


def _merge_product_import(existing, imported_data):
    existing_images = existing.get('images') or ([existing.get('image')] if existing.get('image') else [])
    merged_images = []
    for image in existing_images + imported_data['images']:
        if image and image not in merged_images:
            merged_images.append(image)

    if merged_images:
        existing['image'] = merged_images[0]
        existing['images'] = merged_images

    existing['price'] = imported_data['price']
    existing['compareAtPrice'] = imported_data['compareAtPrice']
    if imported_data['description']:
        existing['description'] = imported_data['description']

    current_category = existing.get('category')
    new_category = imported_data['category']
    title_slug = _slugify(existing.get('name', ''))
    is_bath_item = any(word in title_slug for word in ('banho', 'banheiro', 'toalha'))
    if new_category == 'Toalhas' and is_bath_item:
        existing['category'] = new_category
    elif current_category != new_category:
        tags = existing.setdefault('tags', [])
        if new_category and new_category not in tags:
            tags.append(new_category)

    tags = existing.setdefault('tags', [])
    for tag in imported_data['tags']:
        if tag and tag not in tags and tag != existing.get('category'):
            tags.append(tag)


def _build_tags(raw_tags, filename, category):
    tags = []
    for tag in re.split(r'[,|;]', raw_tags or ''):
        tag = tag.strip()
        if tag and tag not in tags:
            tags.append(tag)

    file_tag = _filename_tag(filename)
    if file_tag and file_tag != category and file_tag not in tags:
        tags.append(file_tag)

    lower_filename = os.path.basename(filename).lower()
    if 'novidades' in lower_filename and 'Novidades' not in tags:
        tags.append('Novidades')
    if 'vendidos' in lower_filename and 'Mais Vendidos' not in tags:
        tags.append('Mais Vendidos')

    return tags


def _rating_reviews(slug):
    digest = int(hashlib.sha256(slug.encode('utf-8')).hexdigest()[:8], 16)
    return round(3.9 + (digest % 12) / 10, 1), 12 + (digest % 234)


# ══════════════════════════════════════════════════════════════════
# IMPORT — Importa um único CSV da Shopify
# ══════════════════════════════════════════════════════════════════
def cmd_import(csv_path):
    if not os.path.exists(csv_path):
        print(f"[ERROR] File not found: {csv_path}")
        return

    temp_dict = {}
    with open(csv_path, 'r', encoding='utf-8-sig', newline='') as f:
        reader = csv.DictReader(f)
        for row in reader:
            handle = (row.get('Handle') or '').strip()
            if not handle:
                continue

            if handle not in temp_dict:
                temp_dict[handle] = {
                    'title': '',
                    'desc_html': '',
                    'type': '',
                    'raw_tags': '',
                    'price': 0.0,
                    'compareAtPrice': 0.0,
                    'image': '',
                    'images': [],
                }

            data = temp_dict[handle]
            title = (row.get('Title') or '').strip()
            if title and not temp_dict[handle]['title']:
                data['title'] = title

            desc = (row.get('Body (HTML)') or '').strip()
            if desc and not temp_dict[handle]['desc_html']:
                data['desc_html'] = desc

            ptype = (row.get('Type') or row.get('Product Category') or '').strip()
            if ptype and not data['type']:
                data['type'] = ptype

            raw_tags = (row.get('Tags') or '').strip()
            if raw_tags and not data['raw_tags']:
                data['raw_tags'] = raw_tags

            price = _parse_money(row.get('Variant Price'))
            if price > data['price']:
                data['price'] = price

            compare = _parse_money(row.get('Variant Compare At Price'))
            if compare > data['compareAtPrice']:
                data['compareAtPrice'] = compare

            image = (row.get('Image Src') or row.get('Variant Image') or '').strip()
            if image:
                if not data['image']:
                    data['image'] = image
                if image not in data['images']:
                    data['images'].append(image)

    existing_products = _read_existing_products()
    seen_slugs = {p.get('slug') for p in existing_products if p.get('slug')}
    existing_by_slug = {p.get('slug'): p for p in existing_products if p.get('slug')}
    existing_by_name = {_slugify(p.get('name', '')): p for p in existing_products if p.get('name')}
    next_id = max((int(p.get('id', 0)) for p in existing_products), default=0) + 1

    filename = os.path.basename(csv_path).lower()
    imported = []
    skipped = 0
    merged = 0
    for handle, data in temp_dict.items():
        if not data['title']:
            continue

        base_slug = _slugify(handle)
        desc_clean = _clean_html(data['desc_html'])
        price = data['price'] if data['price'] > 0 else 99.90
        compare = data['compareAtPrice'] if data['compareAtPrice'] > price else round(price * 1.5, 2)
        cat = _infer_category(data['title'], data['type'], filename)
        tags = _build_tags(data['raw_tags'], filename, cat)
        images = data['images'] or ([data['image']] if data['image'] else ['/images/product-1.jpg'])

        duplicate = existing_by_slug.get(base_slug) or existing_by_name.get(_slugify(data['title']))
        if duplicate:
            _merge_product_import(duplicate, {
                'price': price,
                'compareAtPrice': compare,
                'description': desc_clean,
                'category': cat,
                'tags': tags,
                'images': images,
            })
            merged += 1
            continue

        slug = _make_unique_slug(base_slug, seen_slugs)
        rating, reviews = _rating_reviews(slug)

        imported.append({
            'id': next_id + len(imported),
            'name': data['title'],
            'price': price,
            'compareAtPrice': compare,
            'image': images[0],
            'images': images,
            'rating': rating,
            'reviews': reviews,
            'category': cat,
            'slug': slug,
            'description': desc_clean,
            'isTest': False,
            'tags': tags
        })

    products = existing_products + imported
    _write_ts(products)
    print(f"Import complete. Added: {len(imported)} | Merged existing: {merged} | Skipped existing: {skipped} | Total: {len(products)} -> {TS_FILE}")


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
# GET_IMAGE — Busca og:image de um produto
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
# REPLACE_IMAGES — Substitui imagens quebradas do Shopify por Unsplash
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


def _product_matches_collection(product, collection_name):
    return (
        product.get('category') == collection_name or
        collection_name in product.get('tags', [])
    )


def _product_image_candidates(product):
    images = []
    for image in [product.get('image')] + product.get('images', []):
        if image and image not in images:
            images.append(image)
    return images


def _pick_collection_image(collection_name, products, used_images):
    matching_products = [
        product for product in products
        if _product_matches_collection(product, collection_name)
    ]

    for product in matching_products:
        for image in _product_image_candidates(product):
            if image not in used_images:
                used_images.add(image)
                return image

    for product in matching_products:
        images = _product_image_candidates(product)
        if images:
            return images[0]

    return '/images/product-1.jpg'


# ══════════════════════════════════════════════════════════════════
# Helper — Escreve products.ts
# ══════════════════════════════════════════════════════════════════
def _write_ts(products):
    # Coleta categorias únicas para gerar collections dinâmicas
    categories = []
    seen_cats = set()
    used_collection_images = set()
    for p in products:
        cats_to_add = [p['category']] + p.get('tags', [])
        for c in cats_to_add:
            if not c:
                continue
            if c not in seen_cats:
                seen_cats.add(c)
                slug = _slugify(c)
                categories.append({
                    'slug': slug,
                    'name': c,
                    'image': _pick_collection_image(c, products, used_collection_images),
                    'productCount': sum(1 for x in products if x['category'] == c or (x.get('tags') and c in x.get('tags', []))),
                    'description': f"Nossa coleção de {c}",
                })

    ts = f'''export interface Product {{
  id: number;
  name: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  images?: string[];
  rating: number;
  reviews: number;
  category: string;
  slug: string;
  description: string;
  isTest?: boolean;
  tags?: string[];
  customerReviews?: ProductReview[];
  variants?: ProductVariant[];
  hairTypes?: string[];
  needs?: string[];
  benefits?: string[];
  howToUse?: string[];
  touchTest?: string[];
  precautions?: string[];
}}

export interface ProductReview {{
  id: string;
  author: string;
  comment: string;
  rating: number;
  photo?: string;
  date?: string;
}}

export interface ProductVariant {{
  id: number;
  label: string;
  price: number;
  compareAtPrice?: number;
  image?: string;
  images?: string[];
  available?: boolean;
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

const collectionSlugAliases: Record<string, string> = {{
  "jogo-de-lencol": "jogos-de-lencol",
  "cortina": "cortinas",
  "decoracao": "decoracoes",
}};

function normalizeCollectionValue(value: string) {{
  return value
    .normalize("NFD")
    .replace(/[\\u0300-\\u036f]/g, "")
    .toLowerCase()
    .trim();
}}

function toCollectionSlug(value: string) {{
  return normalizeCollectionValue(value)
    .replace(/&/g, "e")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}}

function canonicalCollectionSlug(value: string) {{
  const slug = toCollectionSlug(value);
  return collectionSlugAliases[slug] ?? slug;
}}

function matchesCollectionValue(value: string, target: string) {{
  return (
    normalizeCollectionValue(value) === normalizeCollectionValue(target) ||
    canonicalCollectionSlug(value) === canonicalCollectionSlug(target)
  );
}}

function productMatchesCollection(product: Product, collection: Collection) {{
  const productValues = [product.category, ...(product.tags ?? [])];

  return productValues.some(
    (value) =>
      matchesCollectionValue(value, collection.name) ||
      matchesCollectionValue(value, collection.slug)
  );
}}

export function getProductsByCategory(category: string) {{
  return products.filter((p) =>
    [p.category, ...(p.tags ?? [])].some((value) =>
      matchesCollectionValue(value, category)
    )
  );
}}

export function getCollectionBySlug(slug: string) {{
  const targetSlug = canonicalCollectionSlug(slug);

  return collections.find(
    (c) =>
      canonicalCollectionSlug(c.slug) === targetSlug ||
      canonicalCollectionSlug(c.name) === targetSlug
  );
}}

export function getProductsByCollection(slug: string) {{
  const col = getCollectionBySlug(slug);
  if (col) return products.filter((p) => productMatchesCollection(p, col));
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

    if cmd == 'import' and len(sys.argv) >= 3:
        cmd_import(sys.argv[2])
    elif cmd == 'analyze':
        cmd_analyze()
    elif cmd == 'extract' and len(sys.argv) >= 3:
        cmd_extract(sys.argv[2])
    elif cmd == 'get_image' and len(sys.argv) >= 3:
        cmd_get_image(sys.argv[2])
    elif cmd == 'replace_images':
        cmd_replace_images()
    else:
        print("Comando inválido ou argumentos faltando.")

if __name__ == "__main__":
    main()
