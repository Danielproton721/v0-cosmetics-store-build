type PaymentStatusRecord = {
  status: string;
  transactionId: string;
  paymentMethod?: string | null;
  event?: string | null;
  updatedAt: string;
};

const globalForPaymentStatus = globalThis as typeof globalThis & {
  __confortebemPaymentStatuses?: Map<string, PaymentStatusRecord>;
};

const paymentStatuses =
  globalForPaymentStatus.__confortebemPaymentStatuses ?? new Map<string, PaymentStatusRecord>();

globalForPaymentStatus.__confortebemPaymentStatuses = paymentStatuses;

export function normalizePaymentStatus(status: unknown) {
  return String(status ?? "").trim().toLowerCase();
}

export function isGatewayPaidStatus(status: unknown) {
  const normalized = normalizePaymentStatus(status);

  return (
    ["paid", "approved", "authorized"].includes(normalized) ||
    normalized.endsWith(".paid") ||
    normalized.endsWith("_paid") ||
    normalized.endsWith(":paid")
  );
}

export function recordPaymentStatus(status: PaymentStatusRecord) {
  paymentStatuses.set(status.transactionId, status);
}

export function getPaymentStatus(transactionId: string) {
  return paymentStatuses.get(transactionId) ?? null;
}
