async function fetchIPAddress(domain: string): Promise<string | null> {
  const resp = await fetch(`https://1.1.1.1/dns-query?name=${domain}&type=A`, {
    headers: {
      accept: "application/dns-json",
    },
  });
  const respObject = await resp.json();
  const answers = respObject.Answer;
  if (!answers || answers.length === 0) {
    return null;
  }
  const randomIp = answers[Math.floor(Math.random() * answers.length)];

  return randomIp.data;
}

export { fetchIPAddress };
