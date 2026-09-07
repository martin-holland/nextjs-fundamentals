import Link from "next/link";
import AppLayout from "./components/AppLayout";
import Button from "./components/Button";
import Card from "./components/Card";
import Navigation from "./components/Navigation";
import Title from "./components/Title";
import styles from "./home/home.module.css";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className={styles.page}>
        <AppLayout>
          <Title>Martin&apos;s Next.js Playground</Title>
          <p className={styles.intro}>
            This small site is my coursework for Fundamentals of Next.js at
            Metropolia. It is built with the App Router, and each page here
            started life as a separate task: a new route, navigation with the
            Link component, CSS Modules, a nested route, and a shared navigation
            bar.
          </p>
          <Link className={styles.link} href="/about">
            Go to About Page
          </Link>
          <p>
            <Button>Hover over me</Button>
          </p>
          <Card backgroundColor="#1e3a8a" title="Inline styles">
            This card gets its background colour from a prop.
          </Card>
          <Card backgroundColor="#4c1d95" title="Same component, different prop">
            Passing a different value changes the style without any CSS file.
          </Card>
        </AppLayout>
      </main>
    </>
  );
}
