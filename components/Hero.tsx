import { useLanguage } from "@/components/lib/LangagueContext";
export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden gradient-bg">
      <h1>{t.hero.title}</h1>
      <p>{t.hero.subtitle}</p>
      <div className="mx-auto max-w-7xl px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left */}
        <div>
          <span className="inline-block mb-4 rounded-full bg-white/10 px-4 py-1 text-sm">
            Archive your business goals
          </span>

          <h1 className="text-5xl font-bold leading-tight">
            Start your enterprise <br />
            with <span className="text-indigo-400">AI</span> in just a few minutes!
          </h1>

          <p className="mt-6 text-zinc-400 max-w-xl">
            Begin your AI-driven enterprise swiftly—initiate with advanced
            technology in just a few minutes for enhanced efficiency.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-full bg-indigo-600 px-6 py-3 font-medium hover:bg-indigo-500">
              Get Started
            </button>
            <button className="rounded-full border border-white/20 px-6 py-3">
              How it works
            </button>
          </div>
        </div>

        {/* Right (Robot / Visual placeholder) */}
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-indigo-500/20 blur-3xl"></div>
          <div className="relative rounded-3xl bg-white/5 p-10 backdrop-blur">
            <img
              src="/robot.png"
              alt="AI Robot"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
