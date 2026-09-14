export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name") ?? "world";

  return Response.json({ message: `Hello, ${name}!` });
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

  if (!body?.name) {
    return Response.json({ error: "name is required." }, { status: 400 });
  }

  return Response.json({ message: `Hello, ${body.name}!` }, { status: 201 });
}
