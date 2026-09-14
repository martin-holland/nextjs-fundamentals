import AppLayout from "../components/AppLayout";
import Navigation from "../components/Navigation";
import Title from "../components/Title";

// cache: "no-store" means this runs on every request (SSR) rather than being
// prerendered, so the timestamp below changes on each reload.
async function getUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Failed to load user: ${res.status}`);
  return res.json();
}

export default async function ProfilePage() {
  const user = await getUser();
  const renderedAt = new Date().toLocaleTimeString("en-GB", {
    timeZone: "Europe/Helsinki",
  });

  return (
    <>
      <Navigation />
      <main style={{ padding: "2rem 1rem" }}>
        <AppLayout>
          <Title>Welcome, {user.name}!</Title>
          <p>
            This page is server-rendered on every request, so it is never
            cached. Reload and the time below changes each time.
          </p>
          <p>
            <strong>Rendered on the server at:</strong> {renderedAt}
          </p>
          <ul>
            <li>Username: {user.username}</li>
            <li>Email: {user.email}</li>
            <li>Company: {user.company?.name}</li>
          </ul>
        </AppLayout>
      </main>
    </>
  );
}
