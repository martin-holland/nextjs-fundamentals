import AppLayout from "../components/AppLayout";
import Navigation from "../components/Navigation";
import Title from "../components/Title";

// Static / ISR section: cached, regenerated at most once a minute.
async function getLatestPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=4", {
    cache: "force-cache",
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error(`Failed to load posts: ${res.status}`);
  return res.json();
}

// Dynamic / SSR section: never cached, re-fetched on every request.
async function getDashboard() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=4", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Failed to load todos: ${res.status}`);
  return res.json();
}

export default async function HybridPage() {
  const [posts, todos] = await Promise.all([getLatestPosts(), getDashboard()]);
  const requestTime = new Date().toLocaleTimeString("en-GB", {
    timeZone: "Europe/Helsinki",
  });

  return (
    <>
      <Navigation />
      <main style={{ padding: "2rem 1rem" }}>
        <AppLayout>
          <Title>Hybrid rendering</Title>
          <p>
            This page mixes both strategies in one render: the news list is
            cached and regenerated on a timer, while the dashboard is fetched
            fresh on every request.
          </p>

          <h2>Latest posts — cached (ISR, revalidate 60s)</h2>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>

          <h2>Your dashboard — server rendered (no-store)</h2>
          <p>
            <strong>Fetched at:</strong> {requestTime}
          </p>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                {todo.completed ? "done" : "todo"} — {todo.title}
              </li>
            ))}
          </ul>
        </AppLayout>
      </main>
    </>
  );
}
