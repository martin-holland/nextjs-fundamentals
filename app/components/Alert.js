export default function Alert({ children = "Tailwind is working." }) {
  return (
    <div className="rounded-lg border border-amber-400 bg-amber-100 px-4 py-3 text-amber-900 shadow-sm">
      <span className="font-semibold">Heads up: </span>
      {children}
    </div>
  );
}
