"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error("API failed");

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-[#1a1a1a] border border-purple-900 rounded-2xl shadow-2xl p-8 space-y-5"
      >
        <h2 className="text-2xl font-bold text-purple-400 text-center">
          Contact us
        </h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Your name"
          className="w-full bg-black text-purple-200 placeholder-purple-500 border border-purple-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-700"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Your email"
          className="w-full bg-black text-purple-200 placeholder-purple-500 border border-purple-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Message */}
        <textarea
          placeholder="Your message..."
          className="w-full bg-black text-purple-200 placeholder-purple-500 border border-purple-800 rounded-lg px-4 py-2 min-h-[130px] focus:outline-none focus:ring-2 focus:ring-purple-700 resize-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        {/* Button */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-purple-700 text-white py-3 rounded-lg font-semibold hover:bg-purple-800 transition disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "Send message"}
        </button>

        {/* Status */}
        {status === "success" && (
          <p className="text-green-400 text-center font-medium">
            Message sent successfully ✅
          </p>
        )}

        {status === "error" && (
          <p className="text-red-400 text-center font-medium">
            Something went wrong ❌
          </p>
        )}
      </form>
    </div>
  );
}
