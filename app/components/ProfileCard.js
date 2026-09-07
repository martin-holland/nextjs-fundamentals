import styles from "./ProfileCard.module.css";

// Combines three styling approaches:
//   - CSS Module  -> layout and structure (.card, .avatar, .name)
//   - inline style -> the accent colour, which comes from a prop
//   - Tailwind     -> small utility tweaks on the text
export default function ProfileCard({ name, role, accent = "#7dd3fc" }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <div className={styles.card} style={{ borderLeft: `4px solid ${accent}` }}>
      <div className={styles.avatar} style={{ backgroundColor: accent }}>
        {initials}
      </div>
      <div>
        <p className={styles.name}>{name}</p>
        <p className="text-sm uppercase tracking-wide text-slate-400">{role}</p>
      </div>
    </div>
  );
}
