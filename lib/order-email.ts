export type OrderEmailItem = {
  id: number | string;
  name: string;
  image?: string;
  price: number;
  compareAtPrice?: number;
  quantity: number;
};

export type OrderEmailAddress = {
  cep: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  stateUF: string;
};

export type OrderEmailInput = {
  orderCode: string;
  customer: {
    name: string;
    email: string;
    phone?: string;
    cpf?: string;
  };
  address: OrderEmailAddress;
  items: OrderEmailItem[];
  subtotal: number;
  shipping: number;
  total: number;
  paymentMethod: "pix" | "card";
};

const BRAND = {
  name: "Confortebem",
  primary: "#1a1a1a",
  accent: "#d4a017",
  green: "#15803d",
  text: "#333333",
  muted: "#737373",
  border: "#eadfca",
  bg: "#fbfaf7",
  card: "#ffffff",
};

const formatBRL = (value: number) =>
  `R$ ${value.toFixed(2).replace(".", ",")}`;

const escapeHtml = (value: string) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export function renderOrderConfirmationEmail(order: OrderEmailInput) {
  const methodLabel = order.paymentMethod === "pix" ? "Pix" : "Cartão de Crédito";
  const addressLine1 = [
    order.address.street,
    order.address.number,
    order.address.complement ? `— ${order.address.complement}` : null,
  ]
    .filter(Boolean)
    .join(", ");
  const addressLine2 = [
    order.address.neighborhood,
    `${order.address.city} — ${order.address.stateUF}`,
    `CEP ${order.address.cep}`,
  ]
    .filter(Boolean)
    .join(" · ");

  const itemRows = order.items
    .map((item) => {
      const lineTotal = item.price * item.quantity;
      const imgCell = item.image
        ? `<td width="64" style="padding:12px 12px 12px 0;vertical-align:top;">
             <img src="${escapeHtml(item.image)}" width="64" height="64" alt="" style="display:block;width:64px;height:64px;border-radius:8px;border:1px solid ${BRAND.border};object-fit:cover;" />
           </td>`
        : "";
      return `
        <tr>
          ${imgCell}
          <td style="padding:12px 0;vertical-align:top;color:${BRAND.text};font-size:14px;line-height:20px;">
            <strong style="display:block;color:${BRAND.primary};font-size:14px;font-weight:700;">${escapeHtml(item.name)}</strong>
            <span style="display:inline-block;margin-top:4px;color:${BRAND.muted};font-size:12px;">Qtd: ${item.quantity}</span>
          </td>
          <td align="right" style="padding:12px 0 12px 12px;vertical-align:top;color:${BRAND.text};font-size:14px;font-weight:700;white-space:nowrap;">
            ${formatBRL(lineTotal)}
          </td>
        </tr>
      `;
    })
    .join("");

  const subject = `Pedido confirmado · ${order.orderCode} · ${BRAND.name}`;

  const html = `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:0;background:${BRAND.bg};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:${BRAND.text};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.bg};padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
          <tr>
            <td align="center" style="padding-bottom:24px;">
              <span style="font-family:Georgia,'Times New Roman',serif;font-size:24px;font-weight:700;color:${BRAND.primary};letter-spacing:0.3px;">conforte<span style="color:${BRAND.accent};">bem</span></span>
            </td>
          </tr>

          <tr>
            <td style="background:${BRAND.card};border:1px solid ${BRAND.border};border-radius:16px;padding:32px;">
              <h1 style="margin:0 0 8px;font-size:22px;font-weight:800;color:${BRAND.primary};">Pedido confirmado, ${escapeHtml(order.customer.name.split(" ")[0] || order.customer.name)}! 🎉</h1>
              <p style="margin:0 0 24px;color:${BRAND.muted};font-size:14px;line-height:22px;">
                Recebemos o seu pagamento e seu pedido está em preparação. Use o código abaixo para acompanhar o envio.
              </p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.primary};border-radius:12px;padding:20px;color:#ffffff;">
                <tr>
                  <td>
                    <span style="display:block;font-size:11px;font-weight:700;letter-spacing:1px;color:${BRAND.accent};text-transform:uppercase;">Código do pedido</span>
                    <strong style="display:block;margin-top:6px;font-size:22px;font-weight:800;letter-spacing:1px;">${escapeHtml(order.orderCode)}</strong>
                  </td>
                </tr>
              </table>

              <h2 style="margin:32px 0 12px;font-size:14px;font-weight:800;color:${BRAND.primary};text-transform:uppercase;letter-spacing:1px;">Itens do pedido</h2>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid ${BRAND.border};">
                ${itemRows}
              </table>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:8px;border-top:1px solid ${BRAND.border};">
                <tr>
                  <td style="padding:12px 0;color:${BRAND.muted};font-size:13px;">Subtotal</td>
                  <td align="right" style="padding:12px 0;color:${BRAND.text};font-size:13px;font-weight:600;">${formatBRL(order.subtotal)}</td>
                </tr>
                <tr>
                  <td style="padding:0 0 12px;color:${BRAND.muted};font-size:13px;">Frete</td>
                  <td align="right" style="padding:0 0 12px;color:${BRAND.text};font-size:13px;font-weight:600;">${order.shipping > 0 ? formatBRL(order.shipping) : "Grátis"}</td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-top:1px solid ${BRAND.border};color:${BRAND.primary};font-size:15px;font-weight:800;">Total pago</td>
                  <td align="right" style="padding:12px 0;border-top:1px solid ${BRAND.border};color:${BRAND.green};font-size:18px;font-weight:800;">${formatBRL(order.total)}</td>
                </tr>
                <tr>
                  <td style="padding:0;color:${BRAND.muted};font-size:12px;">Forma de pagamento</td>
                  <td align="right" style="padding:0;color:${BRAND.text};font-size:12px;font-weight:600;">${methodLabel}</td>
                </tr>
              </table>

              <h2 style="margin:32px 0 12px;font-size:14px;font-weight:800;color:${BRAND.primary};text-transform:uppercase;letter-spacing:1px;">Endereço de entrega</h2>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.bg};border:1px solid ${BRAND.border};border-radius:12px;padding:16px;">
                <tr>
                  <td style="color:${BRAND.text};font-size:14px;line-height:22px;">
                    <strong style="display:block;font-weight:700;color:${BRAND.primary};">${escapeHtml(order.customer.name)}</strong>
                    ${addressLine1 ? `<span style="display:block;margin-top:4px;">${escapeHtml(addressLine1)}</span>` : ""}
                    ${addressLine2 ? `<span style="display:block;color:${BRAND.muted};font-size:13px;">${escapeHtml(addressLine2)}</span>` : ""}
                    ${order.customer.phone ? `<span style="display:block;margin-top:6px;color:${BRAND.muted};font-size:12px;">Telefone: ${escapeHtml(order.customer.phone)}</span>` : ""}
                  </td>
                </tr>
              </table>

              <p style="margin:32px 0 0;color:${BRAND.muted};font-size:12px;line-height:18px;">
                Em caso de dúvidas, responda este e-mail. Estamos à disposição.
              </p>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding:24px 0 0;color:${BRAND.muted};font-size:11px;line-height:16px;">
              © ${new Date().getFullYear()} ${BRAND.name}. Todos os direitos reservados.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { subject, html };
}
