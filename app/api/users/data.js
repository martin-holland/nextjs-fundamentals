// Simple in-memory "database". Shared between the collection route and the
// [id] route. It resets whenever the server restarts, which is fine for this
// exercise.
export const users = [
  { id: 1, name: "Martin Holland", email: "martin@example.com" },
  { id: 2, name: "Ada Lovelace", email: "ada@example.com" },
  { id: 3, name: "Alan Turing", email: "alan@example.com" },
];

export function nextId() {
  return users.reduce((max, user) => Math.max(max, user.id), 0) + 1;
}
