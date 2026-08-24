import Link from "next/link";
import Navigation from "../components/Navigation";

export default function About() {
  return (
    <>
      <Navigation />
      <main
        style={{ padding: "4rem 2rem", maxWidth: "40rem", margin: "0 auto" }}
      >
        <h1>About this course</h1>
        <p>
          Fundamentals of Next.js is a 3 ECTS non-stop course at Metropolia. It
          covers the App Router, file-based routing, navigation with the
          built-in Link component, reusable React components, and styling with
          CSS Modules. Each task builds on the previous one, ending with a small
          multi-page site.
        </p>
        <p>
          <Link href="/">Back to Home</Link>
        </p>
      </main>
    </>
  );
}
