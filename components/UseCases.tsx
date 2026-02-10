const items = [
  {
    title: "Data Analysis",
    text: "AI-driven insights, predictive analytics, and informed decisions.",
  },
  {
    title: "HR & Talent Management",
    text: "AI screening, engagement, and skill assessment systems.",
  },
  {
    title: "Product Development",
    text: "AI-powered creation, testing, and optimization workflows.",
  },
];

export default function UseCases() {
  return (
    <section className="py-24 bg-black">
      <h2 className="text-center text-3xl font-semibold mb-16">
        How to use AI & Grow your business
      </h2>

      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur border border-white/10"
          >
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-zinc-400">{item.text}</p>
            <span className="mt-6 inline-block text-indigo-400">
              Explore more →
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
