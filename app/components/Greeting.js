export default function Greeting({ name }) {
  return (
    <div>
      <h2>Hello, {name ?? "stranger"}!</h2>
      <p>Welcome to the Next.js fundamentals course project.</p>
    </div>
  );
}
