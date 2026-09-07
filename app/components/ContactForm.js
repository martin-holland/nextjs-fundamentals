"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);
  const [sending, setSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setSending(true);
    setResult(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message }),
      });
      const data = await response.json();

      setResult({
        ok: response.ok,
        text: response.ok ? data.message : data.error,
      });
    } catch {
      setResult({ ok: false, text: "Could not reach the API." });
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <label className="flex flex-col gap-1">
        <span>Name</span>
        <input
          className="rounded border border-slate-600 bg-slate-900 px-3 py-2 text-slate-100"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label className="flex flex-col gap-1">
        <span>Message</span>
        <textarea
          className="rounded border border-slate-600 bg-slate-900 px-3 py-2 text-slate-100"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>

      <button
        type="submit"
        disabled={sending}
        className="self-start rounded-full bg-sky-300 px-5 py-2 font-medium text-slate-900 disabled:opacity-50"
      >
        {sending ? "Sending…" : "Send message"}
      </button>

      {result && (
        <p
          role="status"
          className={
            result.ok
              ? "rounded border border-emerald-500 bg-emerald-950 px-3 py-2 text-emerald-300"
              : "rounded border border-red-500 bg-red-950 px-3 py-2 text-red-300"
          }
        >
          {result.text}
        </p>
      )}
    </form>
  );
}
