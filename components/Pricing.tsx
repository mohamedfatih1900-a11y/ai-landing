export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-black">
      <h2 className="text-center text-3xl font-bold mb-20">
        Pricing
      </h2>

      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-8">
        <div className="rounded-3xl bg-white/5 p-10 border border-white/10">
          <h3 className="text-xl mb-4">Starter</h3>
          <p className="text-4xl font-bold">$100</p>
          <p className="mt-4 text-zinc-400">
            Perfect for small businesses starting with automation.
          </p>
        </div>

        <div className="rounded-3xl bg-indigo-600 p-10 scale-105">
          <h3 className="text-xl mb-4">Pro</h3>
          <p className="text-4xl font-bold">$250</p>
          <p className="mt-4">
            Full AI automation system customized for your business.
          </p>
        </div>

        <div className="rounded-3xl bg-white/5 p-10 border border-white/10">
          <h3 className="text-xl mb-4">Enterprise</h3>
          <p className="text-4xl font-bold">$400+</p>
          <p className="mt-4 text-zinc-400">
            Advanced workflows and scaling support.
          </p>
        </div>
      </div>
    </section>
  );
}
