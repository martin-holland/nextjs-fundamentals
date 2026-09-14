import Image from "next/image";
import Link from "next/link";
import AppLayout from "../components/AppLayout";
import Navigation from "../components/Navigation";
import Title from "../components/Title";

export default function About() {
  return (
    <>
      <Navigation />
      <main style={{ padding: "2rem 1rem" }}>
        <AppLayout>
          <Title>About this course</Title>

          {/* next/image serves a modern format at the right size and reserves
              the space up front, so the layout does not jump while it loads. */}
          <Image
            src="/hero.jpg"
            alt="Desk with a laptop and notebook"
            width={1200}
            height={600}
            priority
            style={{ width: "100%", height: "auto", borderRadius: "0.75rem" }}
          />

          <p>
            Fundamentals of Next.js is a 3 ECTS non-stop course at Metropolia.
            It covers the App Router, file-based routing, navigation with the
            built-in Link component, reusable React components, and styling
            with CSS Modules. Each task builds on the previous one, ending with
            a small multi-page site.
          </p>
          <p>
            <Link href="/">Back to Home</Link>
          </p>
        </AppLayout>
      </main>
    </>
  );
}
