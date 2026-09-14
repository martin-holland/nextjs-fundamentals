import AppLayout from "../components/AppLayout";
import Navigation from "../components/Navigation";
import Title from "../components/Title";

// Regenerate this page at most once every 10 seconds (ISR).
export const revalidate = 10;

// In Next.js 16 fetch is NOT cached by default, so a plain `await fetch(...)`
// would make this page dynamic. `cache: "force-cache"` is what gives the
// build-time (static) behaviour this task is about.
async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=8", {
    cache: "force-cache",
    next: { revalidate: 10 },
  });
  if (!res.ok) throw new Error(`Failed to load posts: ${res.status}`);
  const posts = await res.json();

  // Rotate which posts are shown so a regenerated page is visibly different
  // from the cached one. Done here in the data function rather than during
  // render, and derived from the clock rather than Math.random, so the
  // component stays pure.
  const offset = Math.floor(Date.now() / 10000) % posts.length;
  return [...posts.slice(offset), ...posts.slice(0, offset)].slice(0, 5);
}

export default async function BlogPage() {
  const posts = await getPosts();
  const renderedAt = new Date().toLocaleString("en-GB", {
    timeZone: "Europe/Helsinki",
  });

  return (
    <>
      <Navigation />
      <main style={{ padding: "2rem 1rem" }}>
        <AppLayout>
          <Title>Blog</Title>
          <p>
            These post titles are fetched on the server and baked in at build
            time.
          </p>
          <p>
            <strong>Last updated:</strong> {renderedAt}
          </p>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </AppLayout>
      </main>
    </>
  );
}
