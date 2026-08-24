import Link from "next/link";
import Navigation from "./components/Navigation";
import styles from "./home/home.module.css";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className={styles.page}>
        <h1 className={styles.title}>Martin&apos;s Next.js Playground</h1>
        <p className={styles.intro}>
          This small site is my coursework for Fundamentals of Next.js at
          Metropolia. It is built with the App Router, and each page here
          started life as a separate task: a new route, navigation with the Link
          component, CSS Modules, a nested route, and a shared navigation bar.
        </p>
        <Link className={styles.link} href="/about">
          Go to About Page
        </Link>
      </main>
    </>
  );
}
