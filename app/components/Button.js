import styles from "./Button.module.css";

export default function Button({ children = "Click me", type = "button" }) {
  return (
    <button className={styles.button} type={type}>
      {children}
    </button>
  );
}
