import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    // 🔗 n8n PRODUCTION webhook (مش test)
    const N8N_WEBHOOK_URL =
      "http://localhost:5678/webhook-test/contact";

    const res = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        source: "contact-form",
        date: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      throw new Error("n8n webhook failed");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API contact error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
