try {
  const leaderboard = await fetchLeaderBoard();
  console.log(leaderboard);
} catch (err) {
  console.log("Our severs are down, but we will be up and running soon");
}

async function fetchLeaderBoard(): Promise<any> {
  const response = await fetch("https://jello.servers");
  return response.json();
}

export {};
