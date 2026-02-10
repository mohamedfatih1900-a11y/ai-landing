export default function Services() {
  return (
    <section id="services" className="py-32 bg-black">
      <h2 className="text-center text-3xl font-bold mb-16">
        What we automate for you
      </h2>

      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-8">
        {[
          {
            title: "AI Workflow Automation",
            desc: "Replace manual tasks with intelligent workflows that work 24/7.",
          },
          {
            title: "Lead Capture & CRM",
            desc: "Automatically capture, qualify, and organize leads from your website.",
          },
          {
            title: "AI Chatbots & Agents",
            desc: "AI assistants that respond to customers and close deals while you sleep.",
          },
        ].map((s, i) => (
          <div
            key={i}
            className="rounded-2xl bg-white/5 p-8 border border-white/10 hover:border-indigo-500/50 transition"
          >
            <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-zinc-400">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
