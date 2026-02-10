

export default function CTA() {
  return (
    <section id="contact" className="py-32 text-center">
        <section className="bg-black py-24 px-6">
  <div className="max-w-6xl mx-auto text-center">
    
    <h2 className="text-4xl font-bold mb-4 gradient-text">
      Simple Pricing. Real Results.
    </h2>

    <p className="text-gray-400 mb-16">
      Choose the plan that fits your growth stage.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      {/* STARTER */}
      <div className="glass rounded-2xl p-8 border border-zinc-800">
        <h3 className="text-xl font-semibold mb-2">Starter</h3>
        <p className="text-3xl font-bold mb-4">$99</p>
        <ul className="text-gray-400 space-y-2 mb-6 text-left">
          <li>✔ AI Contact Form</li>
          <li>✔ n8n Automation</li>
          <li>✔ Discord Alerts</li>
          <li>✔ Google Sheets</li>
        </ul>
        <button className="w-full bg-white text-black py-2 rounded font-semibold">
          Get Started
        </button>
      </div>

      {/* GROWTH */}
      <div className="glass rounded-2xl p-8 border border-white scale-105">
        <h3 className="text-xl font-semibold mb-2">Growth</h3>
        <p className="text-3xl font-bold mb-4">$250</p>
        <ul className="text-gray-400 space-y-2 mb-6 text-left">
          <li>✔ Everything in Starter</li>
          <li>✔ Lead Qualification</li>
          <li>✔ Auto Follow-ups</li>
          <li>✔ CRM Integration</li>
        </ul>
        <button className="w-full bg-white text-black py-2 rounded font-semibold">
          Book a Call
        </button>
      </div>

      {/* SCALE */}
      <div className="glass rounded-2xl p-8 border border-zinc-800">
        <h3 className="text-xl font-semibold mb-2">Scale</h3>
        <p className="text-3xl font-bold mb-4">$500+</p>
        <ul className="text-gray-400 space-y-2 mb-6 text-left">
          <li>✔ Custom AI Systems</li>
          <li>✔ Advanced Automation</li>
          <li>✔ Team Training</li>
          <li>✔ Priority Support</li>
        </ul>
        <button className="w-full bg-white text-black py-2 rounded font-semibold">
          Contact Us
        </button>
      </div>

    </div>
  </div>
</section>
<p className="text-center text-gray-500 mt-12">
  🚀 Limited spots available — we work with a small number of clients each month.
</p>

      <h2 className="text-4xl font-bold mb-6">
        Book a free AI strategy call
      </h2>

      <p className="text-zinc-400 mb-12">
        Fill the form below and we’ll analyze your business for free.
      </p>

    
    </section>
    
  );
}
