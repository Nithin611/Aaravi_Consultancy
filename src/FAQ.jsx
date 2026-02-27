import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

// Sample FAQ data
const faqData = [
  {
    question: "What services does Aaravi Consultancy provide?",
    answer: "We provide Financial, Marketing, and HR consulting solutions tailored to your business needs.",
  },
  {
    question: "How can I book a consultation?",
    answer: "You can book a consultation via the 'Book a Consultation' button on our homepage or contact form.",
  },
  {
    question: "Do you offer customized solutions?",
    answer: "Yes, we tailor our strategies based on your company goals, industry, and challenges.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section
      className="py-20 px-4 min-h-screen bg-cover bg-center bg-gray-50 text-gray-900 dark:bg-gray-50 dark:text-gray-900"
      style={{
        backgroundImage: "url('/images/image1.jpeg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <br />
        <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-700 dark:text-gray-700">
          Get quick answers to common questions about our services and process.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg border bg-white border-gray-200 dark:bg-white dark:border-gray-200"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-6 font-semibold text-left text-gray-900 hover:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-100 transition"
            >
              <span>{item.question}</span>
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  exit={{ scaleY: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  style={{ transformOrigin: "top", overflow: "hidden" }}
                  className="px-6 pb-6 text-gray-700 dark:text-gray-700"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-bold mb-4 text-black dark:text-black">Have more questions?</h3>
        <p className="mb-6 text-gray-700 dark:text-gray-700">
          Reach out to our experts for personalized answers.
        </p>
        <button className="px-8 py-4 bg-red-900 text-white rounded-xl hover:bg-red-700 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
}