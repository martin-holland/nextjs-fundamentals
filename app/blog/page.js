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
  return res.json();
}

export default async function BlogPage() {
  const allPosts = await getPosts();
  // Shuffle so a regenerated page is visibly different from the cached one.
  const posts = [...allPosts].sort(() => Math.random() - 0.5).slice(0, 5);
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
