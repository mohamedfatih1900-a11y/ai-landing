"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "http://localhost:5678/webhook-test/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );

      if (!res.ok) throw new Error("failed");

      alert("Message sent ✅");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      alert("Something went wrong ❌");
      console.error(err);
    }

    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 space-y-4 bg-black text-purple-300"
    >
      <input
        className="w-full p-2 bg-black border border-purple-700"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        className="w-full p-2 bg-black border border-purple-700"
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <textarea
        className="w-full p-2 bg-black border border-purple-700"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      <button
        disabled={loading}
        className="w-full bg-purple-700 text-white py-2"
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
