import { UserProfile } from "./types";

async function getUsers(url: string, apiKey: string): Promise<UserProfile[]> {
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "X-API-KEY": apiKey,
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

const generatedKey = generateKey();
const url = "https://api.boot.dev/v1/courses_rest_api/learn-http/users";
const users = await getUsers(url, generatedKey);
logUsers(users);

function generateKey(): string {
  const characters = "ABCDEF0123456789";
  let result = "";
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function logUsers(users: UserProfile[]) {
  for (const user of users) {
    console.log(
      `User name: ${user.user.name}, Role: ${user.role}, experience: ${user.experience}, Remote: ${user.remote}`,
    );
  }
}
