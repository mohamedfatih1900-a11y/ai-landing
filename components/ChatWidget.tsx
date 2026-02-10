"use client";

import { useState } from "react";

type Msg = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const userMsg: Msg = { role: "user", content: input };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMsg.content,
          history: messages,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Chat failed");

      setMessages((m) => [
        ...m,
        { role: "assistant", content: data.reply },
      ]);
    } catch (e) {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: "❌ وقع مشكل، عاود حاول.",
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-purple-700 text-white px-4 py-2 rounded-full shadow-lg"
      >
        💬 Chat
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-black border border-purple-800 rounded-xl shadow-xl flex flex-col">
          <div className="p-3 text-purple-400 font-bold border-b border-purple-800">
            AI Assistant
          </div>

          <div className="flex-1 p-3 space-y-2 overflow-y-auto text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg ${
                  m.role === "user"
                    ? "bg-purple-900 text-purple-100 text-right"
                    : "bg-purple-700 text-white"
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="text-purple-500 text-xs">typing...</div>
            )}
          </div>

          <div className="p-2 border-t border-purple-800 flex gap-2">
            <input
              className="flex-1 bg-black text-purple-200 placeholder-purple-500 border border-purple-800 rounded px-2 py-1 text-sm focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ecrit....."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-purple-700 text-white px-3 rounded"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
