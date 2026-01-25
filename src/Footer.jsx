import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative mt-24"
    >
      {/* Glass background */}
      <div className="absolute inset-0 backdrop-blur-xl bg-white/60 dark:bg-gray-900/70 border-t border-white/30 dark:border-gray-700/40" />

      <div className="relative max-w-5xl mx-auto px-6 py-10 text-center space-y-6">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold tracking-wide text-red-900 dark:text-red-500">
            Aaravi Consulting
          </h2>
        </div>

        {/* Quick Links */}
        <nav className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-700 dark:text-gray-300">
          {["Home", "Services", "FAQ", "Contact"].map((item) => (
            <span
              key={item}
              className="cursor-pointer hover:text-red-600 transition"
            >
              {item}
            </span>
          ))}
        </nav>

        {/* Legal Links */}
        <div className="flex justify-center gap-6 text-xs text-gray-500 dark:text-gray-400">
          <span className="cursor-pointer hover:text-red-600 transition">
            Terms & Conditions
          </span>
          <span className="cursor-pointer hover:text-red-600 transition">
            Privacy Policy
          </span>
        </div>

{/* Social Icons */}
<div className="flex justify-center gap-8 pt-3">
  {[Facebook, Linkedin, Instagram, Twitter].map((Icon, i) => (
    <div
      key={i}
      className="w-11 h-11 flex items-center justify-center rounded-full
      bg-white/70 dark:bg-gray-800/60
      backdrop-blur-md border border-gray-300/40 dark:border-gray-700/40
      text-gray-700 dark:text-gray-300
      hover:text-red-600 hover:scale-110 hover:shadow-lg
      transition-all duration-300 cursor-pointer"
    >
      <Icon size={18} />
    </div>
  ))}
</div>


        {/* Copyright */}
        <div className="pt-2 text-xs text-gray-500 dark:text-gray-400">
          © 2026 Aaravi Consulting
        </div>
      </div>
    </motion.footer>
  );
}
