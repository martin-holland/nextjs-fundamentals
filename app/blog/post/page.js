import Link from "next/link";

export default function Post() {
  return (
    <main style={{ padding: "4rem 2rem", maxWidth: "40rem", margin: "0 auto" }}>
      <h1>Nested routing in the App Router</h1>
      <p>
        This page lives at app/blog/post/page.js, so its URL is /blog/post. In
        the App Router every folder inside app/ becomes a URL segment, and a
        page.js file inside that folder makes the segment publicly routable.
        Nesting folders nests the route, with no router configuration needed.
      </p>
      <p>
        <Link href="/">Back to Home</Link>
      </p>
    </main>
  );
}
