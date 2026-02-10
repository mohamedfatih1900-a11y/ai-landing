export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <div className="font-bold text-lg">
            AI<span className="text-indigo-500">Agency</span>
          </div>
          <p className="text-zinc-400 text-sm mt-2">
            We build AI systems that scale businesses.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-zinc-400">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}
