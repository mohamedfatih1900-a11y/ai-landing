import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "No message" },
        { status: 400 }
      );
    }

    const N8N_WEBHOOK_URL =
      "http://localhost:5678/webhook-test/chat";

    const res = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message,
        history,
        source: "chat-widget",
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error("n8n error");
    }

    return NextResponse.json({
      reply: data.reply || "ما لقيتش جواب دابا.",
    });
  } catch (err) {
    console.error("CHAT API ERROR:", err);
    return NextResponse.json(
      { error: "Chat error" },
      { status: 500 }
    );
  }
}
