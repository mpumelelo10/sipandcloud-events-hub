// QR via your CloudBoost generator – tickets always branded for Sip & Cloud

export async function generateTicketQR(ticketUrl: string): Promise<string> {
  const encoded = encodeURIComponent(ticketUrl);
  // Primary: your QR tool
  return `https://qr.cloudboost.co.za/?url=${encoded}`;
}
