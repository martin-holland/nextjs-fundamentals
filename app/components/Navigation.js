import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} href="/">
        Home
      </Link>
      <Link className={styles.link} href="/about">
        About
      </Link>
      <Link className={styles.link} href="/blog/post">
        Blog Post
      </Link>
    </nav>
  );
}
