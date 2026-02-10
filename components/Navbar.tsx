"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-bold text-xl">
          AI<span className="text-indigo-500">Agency</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-sm text-zinc-300">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#process" className="hover:text-white">Process</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="rounded-full bg-indigo-600 px-5 py-2 text-sm text-white"
        >
          Book a call
        </a>
      </div>
    </nav>
  );
}
