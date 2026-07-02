export function getDomainNameFromURL(url: string): string {
  const urlObj = new URL(url);
  return urlObj.hostname;
}
