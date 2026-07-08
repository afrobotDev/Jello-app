import { z } from "zod";

const JelloIssueSchema = z
  .object({
    id: z.string(),
    title: z.string().min(1),
    status: z.string(),
  })
  .strip();

export type JelloIssue = z.infer<typeof JelloIssueSchema>;

export async function fetchJelloIssue(): Promise<JelloIssue[]> {
  const res = await fetch("https://api.boot.dev/v1/courses_rest_api/learn-http/issues");
  const data = await res.json();
  if (!Array.isArray(data)) {
    throw new Error("Invalid response");
  }
  return data.map((issue) => JelloIssueSchema.parse(issue));
}
