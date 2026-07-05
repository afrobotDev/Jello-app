export function getContentType(resp: Response): string {
  const responseHeader = resp.headers;
  return responseHeader.get("Content-Type") ?? "";
}
