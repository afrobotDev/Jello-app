async function fetchIPAddress(domain: string): Promise<string | null> {
  const resp = await fetch(`https://1.1.1.1/dns-query?name=${domain}&type=A`, {
    headers: {
      accept: "application/dns-json",
    },
  });
  const respObject = await resp.json();
  const answers = respObject.Answer;
  if (!Array.isArray(answers) || answers.length === 0) {
    return null;
  }

  const ipAddresses = answers.filter((answer: { type: number }) => answer.type === 1);

  if (ipAddresses.length === 0) {
    return null;
  }

  const randomIp = ipAddresses[Math.floor(Math.random() * ipAddresses.length)];
  return randomIp.data;
}

export { fetchIPAddress };
