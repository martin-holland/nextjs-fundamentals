export async function POST(request) {
  const { name, message } = await request.json();

  return Response.json({
    success: true,
    message: `Thanks ${name}, your message was received.`,
    received: { name, message },
  });
}
