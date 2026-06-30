const API_BASE = "http://localhost:3000";

async function fetchIssues(): Promise<void> {
  const response = await fetch(`${API_BASE}/issues`);
  if (!response.ok) {
    throw new Error(`GET /issues failed: ${response.status}`);
  }
  const issues = await response.json();
  console.log(issues);
}

async function main() {
  try {
    await fetchIssues();
  } catch (err) {
    console.error("Error:", err);
  }
}

main();
