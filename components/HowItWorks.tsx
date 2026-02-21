export default function HowItWorks() {
  return (
    <section id="process" className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold mb-20">
          How it works .
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "We analyze your business",
              desc: "Identify bottlenecks and automation opportunities.",
            },
            {
              title: "We build your AI system",
              desc: "Custom workflows designed for your operations.",
            },
            {
              title: "You scale on autopilot",
              desc: "Your business runs faster with less effort.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="rounded-xl bg-white/5 p-8 border border-white/10 text-center"
            >
              <div className="text-indigo-400 text-4xl font-bold mb-4">
                {i + 1}
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-zinc-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
