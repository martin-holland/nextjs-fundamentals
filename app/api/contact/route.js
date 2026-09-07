export async function POST(request) {
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

  return Response.json({
    success: true,
    message: `Thanks ${name}, your message was received.`,
    received: { name, message },
  });
}
