import { nextId, users } from "./data";

export async function GET() {
  return Response.json({ count: users.length, users });
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "Request body must be valid JSON." },
      { status: 400 }
    );
  }

  const { name, email } = body ?? {};

  const missing = [];
  if (!name) missing.push("name");
  if (!email) missing.push("email");

  if (missing.length > 0) {
    return Response.json(
      { error: `Missing required field(s): ${missing.join(", ")}.` },
      { status: 400 }
    );
  }

  if (users.some((user) => user.email === email)) {
    return Response.json(
      { error: `A user with email ${email} already exists.` },
      { status: 409 }
    );
  }

  const user = { id: nextId(), name, email };
  users.push(user);

  return Response.json(user, { status: 201 });
}
