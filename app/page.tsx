import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ChatWidget from "@/components/ChatWidget";



export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.35),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.35),transparent_40%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block mb-4 rounded-full bg-white/10 px-4 py-1 text-sm">
              AI Automation Agency
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              We build AI systems <br />
              that run your business for you.
            </h1>

            <p className="mt-6 text-zinc-400 max-w-xl">
              Automate lead capture, operations, and customer support
              using custom AI workflows built for your business.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="rounded-full bg-indigo-600 px-6 py-3 font-medium hover:bg-indigo-500">
                Book a free strategy call
              </button>
              <button className="rounded-full border border-white/20 px-6 py-3 hover:bg-white/5">
                See how it works
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-indigo-500/20 blur-3xl"></div>
            <div className="relative rounded-3xl bg-white/5 p-10 backdrop-blur border border-white/10">
              <div className="h-64 flex items-center justify-center text-zinc-400">
                AI Automation Preview
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <HowItWorks />
      <Pricing />
      <CTA />
      <Footer />
      <ContactForm />
       <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">AI Automation Agency</h1>
      </main>
      <ChatWidget />
      
    </main>
  );
}
