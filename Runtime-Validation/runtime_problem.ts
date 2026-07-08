interface JelloIssue {
  id: string;
  title: string;
}

export function validateIssue(data: any): JelloIssue {
  if (!data || typeof data !== "object") {
    throw new Error("Invalid data");
  } else if (!data.id || typeof data.id !== "string") {
    throw new Error("Invalid ID");
  } else if (!data.title || typeof data.title !== "string") {
    throw new Error("Invalid Title");
  }
  return data;
}
