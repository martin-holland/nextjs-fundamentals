// Demo token. A real app would never hard-code this.
const API_TOKEN = "demo-token";

export async function POST(request) {
  // Optional authorization check: if an Authorization header is sent, it has
  // to be valid. Requests without the header are still accepted, so the form
  // in Task 6 keeps working.
  const auth = request.headers.get("authorization");
  if (auth && auth !== `Bearer ${API_TOKEN}`) {
    return Response.json(
      { success: false, error: "Invalid API token." },
      { status: 401 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { success: false, error: "Request body must be valid JSON." },
      { status: 400 }
    );
  }

  const { name, message } = body ?? {};

  const missing = [];
  if (!name) missing.push("name");
  if (!message) missing.push("message");

  if (missing.length > 0) {
    return Response.json(
      {
        success: false,
        error: `Missing required field(s): ${missing.join(", ")}.`,
      },
      { status: 400 }
    );
  }

  return Response.json(
    {
      success: true,
      message: `Thanks ${name}, your message was received.`,
      received: { name, message },
    },
    { status: 201 }
  );
}
