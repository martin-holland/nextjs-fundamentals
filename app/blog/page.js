import AppLayout from "../components/AppLayout";
import Navigation from "../components/Navigation";
import Title from "../components/Title";

// In Next.js 16 fetch is NOT cached by default, so a plain `await fetch(...)`
// would make this page dynamic. `cache: "force-cache"` is what gives the
// build-time (static) behaviour this task is about.
async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=8", {
    cache: "force-cache",
  });
  if (!res.ok) throw new Error(`Failed to load posts: ${res.status}`);
  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

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
