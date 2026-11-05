// lib/qr.ts
// Integration with your existing QR generator: https://qr.cloudboost.co.za

/**
 * Generates a QR code image URL pointing to the ticket page.
 * Adjust the query parameter name if your generator uses a different one.
 * Current assumption: ?url= or ?data=
 */
export async function generateTicketQR(ticketUrl: string): Promise<string> {
  const encoded = encodeURIComponent(ticketUrl);
  const qrImageUrl = `https://qr.cloudboost.co.za/?url=${encoded}`;
  return qrImageUrl;
}

export async function generateAndStoreQR(
  ticketId: string,
  ticketUrl: string
): Promise<string> {
  const qrUrl = await generateTicketQR(ticketUrl);
  return qrUrl;
}