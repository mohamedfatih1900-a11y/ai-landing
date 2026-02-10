"use client";

export default function Contact() {
  return (
    <section className="py-32 bg-black text-white">
      <div className="mx-auto max-w-xl px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Book a free strategy call
        </h2>

        <form className="space-y-6">
          <input
            placeholder="Your name"
            className="w-full rounded-xl bg-white/5 border border-white/10 p-4"
          />
          <input
            placeholder="Your email"
            className="w-full rounded-xl bg-white/5 border border-white/10 p-4"
          />
          <textarea
            placeholder="Tell us about your business"
            className="w-full rounded-xl bg-white/5 border border-white/10 p-4 h-32"
          />
          <button className="w-full rounded-full bg-indigo-600 py-4 text-lg">
            Send request
          </button>
        </form>
      </div>
    </section>
  );
}
