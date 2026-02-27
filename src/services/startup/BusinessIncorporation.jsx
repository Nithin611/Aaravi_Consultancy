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

export default function BusinessIncorporation() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section
  className={`pt-20 px-4 pb-0 bg-cover bg-center ${
    "bg-gray-50 text-gray-900"
  }`}
  style={{
    backgroundImage: "url('/images/image1.jpeg')",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  }}
>
    </section>
  );
}
