const { readFileSync, writeFileSync } = require("node:fs");
const { resolve } = require("node:path");

type Product = Record<string, unknown> & {
  id: number;
  slug: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  category?: string;
};

type ProductSpan = {
  product: Product;
  start: number;
  end: number;
  text: string;
};

const PRODUCTS_PATH = resolve(process.cwd(), "lib/products.ts");
const PRODUCTS_MARKER = "export const products: Product[] =";
const REVIEW_FIELD = "customerReviews";
const EDITABLE_FIELDS = new Set([
  "name",
  "price",
  "compareAtPrice",
  "image",
  "images",
  "rating",
  "reviews",
  "category",
  "slug",
  "description",
  "isTest",
  "tags",
  "variants",
  "hairTypes",
  "needs",
  "benefits",
  "howToUse",
  "touchTest",
  "precautions",
]);

function usage(): never {
  console.log(`
Uso:
  pnpm products list [--search texto] [--category categoria]
  pnpm products show <id-ou-slug>
  pnpm products set <id-ou-slug> <campo> <valor>
  pnpm products set-json <id-ou-slug> <campo> <json>

Exemplos:
  pnpm products list --search cortina
  pnpm products show 56
  pnpm products set 56 price 219.9
  pnpm products set 56 name "Novo nome"
  pnpm products set-json 56 tags '["promo","cama"]'

Reviews ficam fora deste editor por enquanto.
`);
  process.exit(1);
}

function findMatchingBracket(source: string, openIndex: number): number {
  const open = source[openIndex];
  const close = open === "[" ? "]" : "}";
  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let i = openIndex; i < source.length; i++) {
    const char = source[i];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === "\"") {
        inString = false;
      }
      continue;
    }

    if (char === "\"") {
      inString = true;
    } else if (char === open) {
      depth++;
    } else if (char === close) {
      depth--;
      if (depth === 0) return i;
    }
  }

  throw new Error("Nao foi possivel encontrar o fechamento do array/objeto.");
}

function findProductsArray(source: string): { start: number; end: number; text: string } {
  const markerIndex = source.indexOf(PRODUCTS_MARKER);
  if (markerIndex === -1) throw new Error("Array products nao encontrado em lib/products.ts.");

  const start = source.indexOf("[", markerIndex + PRODUCTS_MARKER.length);
  if (start === -1) throw new Error("Inicio do array products nao encontrado.");

  const end = findMatchingBracket(source, start) + 1;
  return { start, end, text: source.slice(start, end) };
}

function stripTrailingCommas(jsonish: string): string {
  return jsonish.replace(/,\s*([\]}])/g, "$1");
}

function parseJson<T>(jsonish: string): T {
  return JSON.parse(stripTrailingCommas(jsonish)) as T;
}

function collectProductSpans(source: string): ProductSpan[] {
  const array = findProductsArray(source);
  const spans: ProductSpan[] = [];
  let depth = 0;
  let inString = false;
  let escaped = false;
  let objectStart = -1;

  for (let i = array.start + 1; i < array.end - 1; i++) {
    const char = source[i];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === "\"") {
        inString = false;
      }
      continue;
    }

    if (char === "\"") {
      inString = true;
      continue;
    }

    if (char === "{" || char === "[") {
      if (depth === 0 && char === "{") objectStart = i;
      depth++;
    } else if (char === "}" || char === "]") {
      depth--;
      if (depth === 0 && objectStart !== -1) {
        const end = i + 1;
        const text = source.slice(objectStart, end);
        spans.push({ product: parseJson<Product>(text), start: objectStart, end, text });
        objectStart = -1;
      }
    }
  }

  return spans;
}

function findProduct(source: string, lookup: string): ProductSpan {
  const spans = collectProductSpans(source);
  const found = spans.find(({ product }) => {
    return String(product.id) === lookup || product.slug === lookup;
  });

  if (!found) throw new Error(`Produto nao encontrado: ${lookup}`);
  return found;
}

function parseArgs(argv: string[]): { command: string; values: string[]; flags: Record<string, string> } {
  const [command, ...rest] = argv;
  const values: string[] = [];
  const flags: Record<string, string> = {};

  for (let i = 0; i < rest.length; i++) {
    const arg = rest[i];
    if (arg.startsWith("--")) {
      const key = arg.slice(2);
      const next = rest[i + 1];
      flags[key] = next && !next.startsWith("--") ? rest[++i] : "true";
    } else {
      values.push(arg);
    }
  }

  if (!command) usage();
  return { command, values, flags };
}

function discount(product: Product): string {
  const price = Number(product.price);
  const compareAtPrice = Number(product.compareAtPrice);
  if (!price || !compareAtPrice || compareAtPrice <= price) return "-";
  return `${Math.round(((compareAtPrice - price) / compareAtPrice) * 100)}%`;
}

function listProducts(source: string, flags: Record<string, string>): void {
  const search = flags.search?.toLowerCase();
  const category = flags.category?.toLowerCase();
  const products = collectProductSpans(source)
    .map((span) => span.product)
    .filter((product) => {
      const haystack = `${product.id} ${product.slug} ${product.name}`.toLowerCase();
      const matchesSearch = !search || haystack.includes(search);
      const matchesCategory = !category || String(product.category ?? "").toLowerCase().includes(category);
      return matchesSearch && matchesCategory;
    });

  for (const product of products) {
    const price = Number(product.price).toFixed(2);
    const compare = product.compareAtPrice ? Number(product.compareAtPrice).toFixed(2) : "-";
    console.log(`${product.id}\tR$ ${price}\tR$ ${compare}\t${discount(product)}\t${product.slug}\t${product.name}`);
  }

  console.log(`\nTotal: ${products.length}`);
}

function showProduct(source: string, lookup: string): void {
  const { product } = findProduct(source, lookup);
  const visibleProduct = { ...product };
  delete visibleProduct[REVIEW_FIELD];
  console.log(JSON.stringify(visibleProduct, null, 2));
}

function findValueEnd(text: string, valueStart: number): number {
  const first = text[valueStart];

  if (first === "\"") {
    let escaped = false;
    for (let i = valueStart + 1; i < text.length; i++) {
      const char = text[i];
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === "\"") {
        return i + 1;
      }
    }
  }

  if (first === "{" || first === "[") {
    return findMatchingBracket(text, valueStart) + 1;
  }

  const match = /[\r\n,}]/.exec(text.slice(valueStart));
  if (!match) return text.length;
  return valueStart + match.index;
}

function findPropertyValueSpan(objectText: string, field: string): { start: number; end: number; propIndent: string } | null {
  const propertyPattern = new RegExp(`(^[ \\t]*)"${field.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"\\s*:`, "m");
  const match = propertyPattern.exec(objectText);
  if (!match || match.index === undefined) return null;

  const colon = objectText.indexOf(":", match.index);
  let start = colon + 1;
  while (/\s/.test(objectText[start])) start++;

  return {
    start,
    end: findValueEnd(objectText, start),
    propIndent: match[1],
  };
}

function coerceValue(field: string, rawValue: string, currentValue: unknown, forceJson: boolean): unknown {
  if (forceJson) return JSON.parse(rawValue);

  if (typeof currentValue === "number" || ["price", "compareAtPrice", "rating", "reviews"].includes(field)) {
    const parsed = Number(rawValue.replace(",", "."));
    if (!Number.isFinite(parsed)) throw new Error(`Valor numerico invalido: ${rawValue}`);
    return parsed;
  }

  if (typeof currentValue === "boolean" || field === "isTest") {
    if (rawValue !== "true" && rawValue !== "false") {
      throw new Error(`Valor booleano invalido: ${rawValue}. Use true ou false.`);
    }
    return rawValue === "true";
  }

  if (Array.isArray(currentValue)) {
    throw new Error(`Campo ${field} e um array. Use set-json com um JSON valido.`);
  }

  return rawValue;
}

function formatValue(value: unknown, propIndent: string): string {
  const json = JSON.stringify(value, null, 2);
  if (!json.includes("\n")) return json;
  return json
    .split("\n")
    .map((line, index) => (index === 0 ? line : propIndent + line))
    .join("\n");
}

function setProductField(source: string, lookup: string, field: string, rawValue: string, forceJson: boolean): string {
  if (field === REVIEW_FIELD) {
    throw new Error("Reviews ficam fora deste editor por enquanto.");
  }

  if (!EDITABLE_FIELDS.has(field)) {
    throw new Error(`Campo nao permitido: ${field}`);
  }

  const span = findProduct(source, lookup);
  const currentValue = span.product[field];
  const nextValue = coerceValue(field, rawValue, currentValue, forceJson);
  const valueSpan = findPropertyValueSpan(span.text, field);

  let nextObjectText: string;
  if (valueSpan) {
    const nextValueText = formatValue(nextValue, valueSpan.propIndent);
    nextObjectText = span.text.slice(0, valueSpan.start) + nextValueText + span.text.slice(valueSpan.end);
  } else {
    const closingBrace = span.text.lastIndexOf("}");
    const propIndentMatch = /\n([ \t]+)"[^"]+"\s*:/.exec(span.text);
    const propIndent = propIndentMatch?.[1] ?? "    ";
    const beforeClose = span.text.slice(0, closingBrace).replace(/\s*$/, "");
    const afterClose = span.text.slice(closingBrace);
    const nextValueText = formatValue(nextValue, propIndent);
    nextObjectText = `${beforeClose},\n${propIndent}"${field}": ${nextValueText}\n${afterClose}`;
  }

  return source.slice(0, span.start) + nextObjectText + source.slice(span.end);
}

function main(): void {
  const { command, values, flags } = parseArgs(process.argv.slice(2));
  const source = readFileSync(PRODUCTS_PATH, "utf8");

  if (command === "list") {
    listProducts(source, flags);
    return;
  }

  if (command === "show") {
    const [lookup] = values;
    if (!lookup) usage();
    showProduct(source, lookup);
    return;
  }

  if (command === "set" || command === "set-json") {
    const [lookup, field, ...valueParts] = values;
    if (!lookup || !field || valueParts.length === 0) usage();
    const rawValue = valueParts.join(" ");
    const nextSource = setProductField(source, lookup, field, rawValue, command === "set-json");
    writeFileSync(PRODUCTS_PATH, nextSource, "utf8");
    console.log(`Produto ${lookup}: campo ${field} atualizado.`);
    return;
  }

  usage();
}

main();
