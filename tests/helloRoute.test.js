/**
 * Route handlers run on the server and use the Web Request/Response globals,
 * so this suite uses the node environment rather than jsdom.
 *
 * @jest-environment node
 */
import { GET, POST } from "../app/api/hello/route";

describe("GET /api/hello", () => {
  it("greets the name from the query string", async () => {
    const res = await GET(new Request("http://localhost/api/hello?name=Martin"));
    expect(res.status).toBe(200);
    await expect(res.json()).resolves.toEqual({ message: "Hello, Martin!" });
  });

  it("falls back to 'world' when no name is given", async () => {
    const res = await GET(new Request("http://localhost/api/hello"));
    await expect(res.json()).resolves.toEqual({ message: "Hello, world!" });
  });

  it("responds with JSON", async () => {
    const res = await GET(new Request("http://localhost/api/hello"));
    expect(res.headers.get("content-type")).toMatch(/application\/json/);
  });
});

describe("POST /api/hello", () => {
  it("returns 201 with a greeting for a valid body", async () => {
    const res = await POST(
      new Request("http://localhost/api/hello", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Ada" }),
      })
    );
    expect(res.status).toBe(201);
    await expect(res.json()).resolves.toEqual({ message: "Hello, Ada!" });
  });

  it("returns 400 when name is missing", async () => {
    const res = await POST(
      new Request("http://localhost/api/hello", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      })
    );
    expect(res.status).toBe(400);
  });

  it("returns 400 for a malformed body", async () => {
    const res = await POST(
      new Request("http://localhost/api/hello", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: "not json",
      })
    );
    expect(res.status).toBe(400);
  });
});
