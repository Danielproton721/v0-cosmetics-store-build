// Store chave-valor persistente para ambientes serverless (Vercel).
//
// Usa o Upstash Redis via REST API (sem dependência nova — só `fetch`), o que
// funciona de forma confiável entre invocações/instâncias de função. Quando as
// variáveis não estão configuradas (ex.: dev local), cai num Map em memória.
//
// IMPORTANTE: o fallback em memória NÃO é confiável em produção serverless
// (cada lambda tem o seu). Em produção, provisione um Upstash Redis no
// Marketplace da Vercel e conecte ao projeto — isso injeta KV_REST_API_URL e
// KV_REST_API_TOKEN automaticamente.

const REST_URL =
  process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || "";
const REST_TOKEN =
  process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || "";

export const isKvConfigured = Boolean(REST_URL && REST_TOKEN);

// Fallback em memória (só serve para dev local — ver aviso acima).
const globalForKv = globalThis as typeof globalThis & {
  __fionobreKvMem?: Map<string, { value: string; expiresAt: number | null }>;
};
const memStore =
  globalForKv.__fionobreKvMem ?? new Map<string, { value: string; expiresAt: number | null }>();
globalForKv.__fionobreKvMem = memStore;

function memRead(key: string) {
  const entry = memStore.get(key);
  if (!entry) return null;
  if (entry.expiresAt && entry.expiresAt < Date.now()) {
    memStore.delete(key);
    return null;
  }
  return entry;
}

async function command(args: (string | number)[]): Promise<any> {
  const res = await fetch(REST_URL, {
    method: "POST",
    headers: {
      authorization: `Bearer ${REST_TOKEN}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(args),
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`[KV] comando falhou (${res.status}): ${text}`);
  }

  const data = await res.json().catch(() => null);
  return data?.result ?? null;
}

export async function kvGet(key: string): Promise<string | null> {
  if (!isKvConfigured) {
    const entry = memRead(key);
    return entry ? entry.value : null;
  }
  const result = await command(["GET", key]);
  if (result === null || result === undefined) return null;
  return typeof result === "string" ? result : String(result);
}

export async function kvSet(key: string, value: string, ttlSeconds?: number): Promise<void> {
  if (!isKvConfigured) {
    memStore.set(key, {
      value,
      expiresAt: ttlSeconds ? Date.now() + ttlSeconds * 1000 : null,
    });
    return;
  }
  const args: (string | number)[] = ["SET", key, value];
  if (ttlSeconds) args.push("EX", ttlSeconds);
  await command(args);
}

// SET key value NX — retorna true só se a chave ainda não existia.
// Usado como trava de idempotência (ex.: garantir 1 único e-mail por pedido).
export async function kvSetNx(key: string, value: string, ttlSeconds?: number): Promise<boolean> {
  if (!isKvConfigured) {
    if (memRead(key)) return false;
    memStore.set(key, {
      value,
      expiresAt: ttlSeconds ? Date.now() + ttlSeconds * 1000 : null,
    });
    return true;
  }
  const args: (string | number)[] = ["SET", key, value, "NX"];
  if (ttlSeconds) args.push("EX", ttlSeconds);
  const result = await command(args);
  return result === "OK";
}

export async function kvDel(key: string): Promise<void> {
  if (!isKvConfigured) {
    memStore.delete(key);
    return;
  }
  await command(["DEL", key]);
}
