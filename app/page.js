import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "4rem 2rem", maxWidth: "40rem", margin: "0 auto" }}>
      <h1>Martin&apos;s Next.js Playground</h1>
      <p>
        This small site is my coursework for Fundamentals of Next.js at
        Metropolia. It is built with the App Router, and each page here started
        life as a separate task: a new route, navigation with the Link
        component, CSS Modules, a nested route, and a shared navigation bar.
      </p>
      <p>
        <Link href="/about">Go to About Page</Link>
      </p>
    </main>
  );
}
