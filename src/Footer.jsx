import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative mt-24 bg-cover bg-center"
      style={{
        backgroundImage:"url('/images/image1.jpeg')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Glass background overlay */}
      <div className="absolute inset-0 backdrop-blur-xl bg-white/60 dark:bg-white/70 border-t border-white/30 dark:border-white/30" />

      <div className="relative max-w-5xl mx-auto px-6 py-10 text-center space-y-6">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold tracking-wide text-red-900 dark:text-red-900">
            Aaravi Consulting
          </h2>
        </div>

        {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-700 dark:text-gray-700">
          {[
            { name: "Home", to: "/" },
            { name: "About", to: "/about" },
            { name: "Why Us", to: "/Whyus" },
            { name: "Services", to: "/services" },
            { name: "FAQ", to: "/faq" },
            { name: "Contact", to: "/contactus" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="cursor-pointer hover:text-red-600 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Legal Links */}
        <div className="flex justify-center gap-6 text-xs text-gray-500 dark:text-gray-500">
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
              bg-white/70 dark:bg-white/70
              backdrop-blur-md border border-gray-300/40 dark:border-gray-300/40
              text-gray-700 dark:text-gray-700
              hover:text-red-600 hover:scale-110 hover:shadow-lg
              transition-all duration-300 cursor-pointer"
            >
              <Icon size={18} />
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-2 text-xs text-gray-500 dark:text-gray-500">
          © 2026 Aaravi Consulting
        </div>
      </div>
    </motion.footer>
  );
}