import { users } from "../data";

export async function GET(request, { params }) {
  const { id } = await params;
  const user = users.find((entry) => entry.id === Number(id));

  if (!user) {
    return Response.json(
      { error: `No user found with id ${id}` },
      { status: 404 }
    );
  }

  return Response.json(user);
}
