export default function Card({ backgroundColor = "#1e293b", title, children }) {
  return (
    <div
      style={{
        backgroundColor,
        padding: "1.25rem",
        borderRadius: "0.75rem",
        marginBottom: "1rem",
        color: "#f8fafc",
      }}
    >
      <h2 style={{ margin: 0, fontSize: "1.2rem" }}>{title}</h2>
      <p style={{ margin: "0.5rem 0 0" }}>{children}</p>
    </div>
  );
}
