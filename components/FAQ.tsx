"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is this platform?",
    answer:
      "It is an AI-powered automation platform that helps you connect tools and build smart workflows.",
  },
  {
    question: "Do I need technical skills?",
    answer:
      "No. The platform is designed to be easy to use for everyone.",
  },
  {
    question: "Can I host it locally?",
    answer:
      "Yes, you can self-host and integrate tools like n8n using Docker.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Frequently Asked{" "}
            <span className="text-primary">Questions</span>
          </h2>
        </div>

        <div className="mt-16 space-y-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="rounded-xl border border-white/10 p-6"
            >
              <h3 className="text-lg font-semibold">
                {faq.question}
              </h3>
              <p className="mt-3 text-gray-400">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
