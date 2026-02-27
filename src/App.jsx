/* ---------- YOUR ORIGINAL IMPORTS ---------- */
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

import {
  Briefcase,
  TrendingUp,
  Users,
  CheckCircle,
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ContactUs from "./ContactUs";
import ABOUT from "./about";
import FAQ from "./FAQ";
import Services from "./Service";
import Footer from "./Footer";
import WhyUs from "./whyus";
import BusinessIncorporation from "./services/startup/BusinessIncorporation";
/* ----------------- Reusable Components ----------------- */

const Button = ({ children, className = "", variant, ...props }) => {
  const base = "px-6 py-3 rounded-xl font-medium transition";
  const styles =
    variant === "outline"
      ? "border border-red-300 text-red-900 hover:bg-red-50 dark:text-red-900 dark:hover:bg-red-50"
      : "bg-red-900 hover:bg-red-700 text-white";
  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
};

const GlassCard = ({ icon, title, desc }) => (
  <div className="w-[320px] h-[140px] rounded-3xl bg-white/70 dark:bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_20px_40px_rgba(220,38,38,0.25)] flex transition hover:-translate-y-2">
    <div className="w-1/3 flex items-center justify-center text-red-900">
      {icon}
    </div>
    <div className="w-2/3 flex flex-col justify-center pr-6">
      <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-900">
        {title}
      </h3>
      <p className="text-sm text-gray-700 dark:text-gray-700">{desc}</p>
    </div>
  </div>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl shadow-sm ${className}`}>{children}</div>
);

/* ---------- DROPDOWN OPTIONS ---------- */

const ASSIST_OPTIONS = [
  {
    id: "default",
    label: "Capabilities",
    description:
      "Explore our core areas of expertise across strategy, finance, marketing, and people.",
    image: "./images/assist_default.jpg",
  },
  {
    id: "marketing",
    label: "Marketing ",
    description:
      "Customer centricity is key and made possible through analytics, agile processes, and a test-and-learn culture.",
    image: "./images/assist-marketing.jpg",
  },
  {
    id: "finance",
    label: "Financial Strategy",
    description:
      "Value-focused financial planning, capital optimization, and risk management designed to support long-term growth.",
    image: "./images/assist-finance.webp",
  },
  {
    id: "hr",
    label: "HR Consulting",
    description:
      "People-first strategies that build leadership capability and high-performing teams.",
    image: "./images/assist-hr.png",
  },
];

const Dropdown = ({ options, value, onChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative max-w-md">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-4 rounded-2xl bg-white shadow-lg flex justify-between items-center text-lg font-medium"
      >
        {value.label}
        <span className="text-gray-500">▼</span>
      </button>

      {open && (
        <div className="absolute mt-2 w-full bg-white rounded-2xl shadow-xl overflow-hidden z-20">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className="w-full text-left px-6 py-4 hover:bg-red-50 transition"
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const CardContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

/* ----------------- Home Page ----------------- */

const Home = () => {
  const [selected, setSelected] = useState(ASSIST_OPTIONS[0]);

  return (
    <>
      {/* HERO */}
      <section className="container mx-auto px-6 pt-40 pb-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-900">
            Strategic Thinking
            <span className="block text-red-900">Measurable Growth</span>
          </h1>

          <p className="mt-6 text-lg text-gray-800 dark:text-gray-800">
            Aaravi Consulting partners with organizations to unlock sustainable
            growth through expert Financial, Marketing, and HR consulting solutions.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <Button>Get a Free Consultation</Button>
            <Link to="/services">
              <Button variant="outline">Explore Services</Button>
            </Link>
          </div>
        </motion.div>

        <div className="space-y-6">
          <GlassCard icon={<Briefcase size={28} />} title="Financial Strategy" desc="Value-focused financial planning." />
          <GlassCard icon={<TrendingUp size={32} />} title="Marketing Solutions" desc="Branding & growth strategy." />
          <GlassCard icon={<Users size={28} />} title="HR Consulting" desc="People & leadership excellence." />
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Consulting That Delivers Real Business Impact
        </h2>

        <p className="mt-4 max-w-3xl mx-auto text-gray-700 dark:text-gray-700">
          We combine strategic insight, industry expertise, and data-driven execution.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { title: "Financial Consulting", desc: "Optimizing performance and managing risk." },
            { title: "Marketing Consulting", desc: "Driving brand growth and market positioning." },
            { title: "HR Consulting", desc: "Building high-performing teams." },
          ].map((item) => (
            <Card key={item.title} className="bg-white/80 dark:bg-white/80">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-red-900">{item.title}</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-700">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How can we assist */}
      <section className="relative bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-6xl font-medium">
              How can we assist
              <br />
              you today?
            </p>
            <p className="text-xl mt-6">
              Learn more about our core areas of expertise by selecting your topic of interest.
            </p>

            <div className="mt-16">
              <Dropdown options={ASSIST_OPTIONS} value={selected} onChange={setSelected} />
            </div>
          </div>

          <div className="relative h-[420px] rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1.15 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${selected.image})`,
                }}
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-black/10" />

            <div className="relative z-10 h-full flex items-end justify-center p-6">
              <motion.div
                key={selected.id + "-card"}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="max-w-md rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl p-8"
              >
                <h3 className="text-2xl font-medium text-gray-900">{selected.label}</h3>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  {selected.description}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Aaravi */}
      <section className="py-20 text-center bg-gray-100 dark:bg-gray-100">
        <h2 className="text-3xl font-semibold mb-10">Why Businesses Choose Aaravi</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {["Industry Experts", "Tailored Strategies", "Proven Results", "Clear KPIs", "Client Focused"].map(
            (text) => (
              <div key={text} className="flex flex-col items-center gap-2">
                <CheckCircle className="text-red-900" />
                <span className="text-sm text-gray-700 dark:text-gray-700">{text}</span>
              </div>
            )
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold">Ready to Transform Your Business?</h2>
        <p className="mt-4 text-gray-700 dark:text-gray-700">
          Let’s build smarter strategies and sustainable growth together.
        </p>
        <Button className="mt-8">Schedule Your Consultation</Button>
      </section>
    </>
  );
};

/* ----------------- App Component ----------------- */

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  /* ⭐ ADDED: SERVICE SUBMENU FOR MOBILE */
  const [serviceMobileOpen, setServiceMobileOpen] = useState(false);

  /* ⭐ ADDED: SERVICE DROPDOWN FOR DESKTOP */
  const [serviceHover, setServiceHover] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);   // Hide loader after 1.5 sec
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  const [openService, setOpenService] = useState(null);

  const toggleService = (service) => {
    setOpenService(openService === service ? null : service);
  };
  const [openMobileService, setOpenMobileService] = useState(null);

const toggleMobileService = (service) => {
  setOpenMobileService(openMobileService === service ? null : service);
};

useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = "hidden";   // stop background scroll
  } else {
    document.body.style.overflow = "auto";     // restore scroll
  }
}, [menuOpen]);
  return (
    <> {showLoader ? (<div className="flex items-center justify-center h-screen w-screen bg-white">
    <img
      src="./images/logo.png"
      alt="Loading"
      className="animate-pulse"
      style={{
        height: "20vw",         // Responsive size (based on viewport width)
        maxHeight: "120px",     // Maximum for desktop
        minHeight: "60px",      // Minimum for mobile
        filter: "drop-shadow(0px 0px 6px crimson)"
      }}
    />
  </div>):(
    <div
      className="min-h-screen text-gray-900 dark:text-gray-900 transition-colors duration-300"
      style={{
        backgroundImage: "url('./images/image1.jpeg')",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
{/* NAVBAR */}
<nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-white/90 backdrop-blur border-b">
  <div className="container mx-auto px-6 py-4 flex justify-between items-center">
    <img src="./images/logo.png" alt="Aaravi" className="h-12" />

    {/* ---------- DESKTOP MENU ---------- */}
    <ul className="hidden md:flex gap-8 text-lg font-medium items-center">

      <Link to="/" className="hover:text-red-600">Home</Link>
      <Link to="/about" className="hover:text-red-600">About</Link>
      <Link to="/Whyus" className="hover:text-red-600">Why Us</Link>
      {/* ⭐ SERVICES WITH HOVER DROPDOWN */}
      <div
        className="relative"
        onMouseEnter={() => setServiceHover(true)}
        onMouseLeave={() => setServiceHover(false)}
      >
         <Link
    to="/services"
    className="hover:text-red-600 flex items-center"
  >
    Services
  </Link>

  {serviceHover && (
  <div className="absolute left-0 mt-2 bg-white dark:bg-white shadow-xl rounded-lg w-64 p-2 z-50">
    {/* Startup Advisory */}
    <div className="mt-1">
      <div
        className="flex justify-between items-center px-4 py-2 
                   hover:bg-red-100 dark:hover:hover:bg-red-100 rounded cursor-pointer"
        onClick={() => toggleService("startup")}
      >
        <span>Startup Advisory</span>
        <span className={`transform transition-transform duration-200 
          ${openService === "startup" ? "rotate-180" : ""}`}>
          ▼
        </span>
      </div>
      {openService === "startup" && (
        <div className="ml-4 mt-1">
          <Link className="block px-4 py-1 hover:bg-red-100 dark:hover:bg-red-100 rounded"
            to="/services/startup/BusinessIncorporation">Business Incorporation</Link>
          <Link className="block px-4 py-1 hover:bg-red-100 dark:hover:bg-red-100 rounded"
            to="/services/startup/registrations">Regulatory Registrations</Link>
          <Link className="block px-4 py-1 hover:bg-red-100 dark:hover:bg-red-100 rounded"
            to="/services/startup/esop">ESOP Structuring</Link>
          <Link className="block px-4 py-1 hover:bg-red-100 dark:hover:bg-red-100 rounded"
            to="/services/startup/risk">Risk Advisory</Link>
          <Link className="block px-4 py-1 hover:bg-red-100 dark:hover:bg-red-100 rounded"
            to="/services/startup/vcfo">Virtual CFO Services</Link>
        </div>
      )}
    </div>

    {/* Taxation & Compliance */}
    <div className="mt-1">
      <div
        className="flex justify-between items-center px-4 py-2 
                   hover:bg-red-100 dark:hover:bg-red-100 rounded cursor-pointer"
        onClick={() => toggleService("tax")}
      >
        <span>Taxation & Compliance</span>
        <span className={`transform transition-transform duration-200 
          ${openService === "tax" ? "rotate-180" : ""}`}>
          ▼
        </span>
      </div>

      {openService === "tax" && (
        <div className="ml-4 mt-1">
          <Link className="block px-4 py-1 hover:bg-red-100 dark:hover:bg-red-100 rounded"
            to="/services/tax/gst">GST Filing</Link>
          <Link className="block px-4 py-1 hover:bg-red-100 dark:hover:bg-red-100 rounded"
            to="/services/tax/income-tax">Income Tax Planning</Link>
          <Link className="block px-4 py-1 hover:bg-red-100 dark:hover:bg-red-100 rounded"
            to="/services/tax/tds">TDS Return</Link>
        </div>
      )}
    </div>

    {/* Financial Services */}
    <div className="mt-1">
      <div
        className="flex justify-between items-center px-4 py-2 
                   hover:bg-red-100 dark:hover:bg-red-100 rounded cursor-pointer"
        onClick={() => toggleService("financial")}
      >
        <span>Financial Services</span>
        <span className={`transform transition-transform duration-200 
          ${openService === "financial" ? "rotate-180" : ""}`}>
          ▼
        </span>
      </div>

      {openService === "financial" && (
        <div className="ml-4 mt-1">
          <Link className="block px-4 py-1 hover:bg-red-100 dark:hover:bg-red-100 rounded"
            to="/services/financial/bookkeeping">Bookkeeping</Link>

          <Link className="block px-4 py-1 hover:bg-red-100 dark:hover:bg-red-100 rounded"
            to="/services/financial/revenue">Revenue Leakage Assessments</Link>

          <Link className="block px-4 py-1 hover:bg-red-100 dark:hover:bg-red-100 rounded"
            to="/services/financial/integrity">Accounts Integrity</Link>

          <Link className="block px-4 py-1 hover:bg-red-100 dark:hover:bg-red-100 rounded"
            to="/services/financial/internal-control">Internal Control Assessments</Link>

          <Link className="block px-4 py-1 hover:bg-red-100 dark:hover:bg-red-100 rounded"
            to="/services/financial/inventory">Inventory Accuracy & Aging Report</Link>
        </div>
      )}
    </div>

    {/* Growth Advisory */}
    <div className="mt-1">
      <div
        className="flex justify-between items-center px-4 py-2 
                   hover:bg-red-100 dark:hover:bg-red-100 rounded cursor-pointer"
        onClick={() => toggleService("growth")}
      >
        <span>Growth Advisory</span>
        <span className={`transform transition-transform duration-200 
          ${openService === "growth" ? "rotate-180" : ""}`}>
          ▼
        </span>
      </div>

      {openService === "growth" && (
        <div className="ml-4 mt-1">
          <Link className="block px-4 py-1 hover:bg-red-100 dark:hover:bg-red-100 rounded"
            to="/services/growth/pmf">PMF Consulting (Product Market Fit)</Link>

          <Link className="block px-4 py-1 hover:bg-red-100 dark:hover:bg-red-100 rounded"
            to="/services/growth/cost">Cost Reduction Advisory</Link>

          <Link className="block px-4 py-1 hover:bg-red-100 dark:hover:bg-red-100 rounded"
            to="/services/growth/strategy">Growth Strategy</Link>

          <Link className="block px-4 py-1 hover:bg-red-100 dark:hover:bg-red-100 rounded"
            to="/services/growth/competitive-analysis">Competitive Analysis</Link>
        </div>
      )}
    </div>

    {/* HR Consulting */}
    <div className="mt-1">
      <div
        className="flex justify-between items-center px-4 py-2 
                   hover:bg-red-100 dark:hover:bg-red-100 rounded cursor-pointer"
        onClick={() => toggleService("hr")}
      >
        <span>HR Consulting</span>
        <span className={`transform transition-transform duration-200 
          ${openService === "hr" ? "rotate-180" : ""}`}>
          ▼
        </span>
      </div>

      {openService === "hr" && (
        <div className="ml-4 mt-1">
          <Link className="block px-4 py-1 hover:bg-red-100 dark:hover:bg-red-100 rounded"
            to="/services/hr/talent-acquisition">Talent Acquisition Consulting</Link>

          <Link className="block px-4 py-1 hover:bg-red-100 dark:hover:bg-red-100 rounded"
            to="/services/hr/rpo">Recruitment Process Outsourcing</Link>

          <Link className="block px-4 py-1 hover:bg-red-100 dark:hover:bg-red-100 rounded"
            to="/services/hr/role-architecture">Role Architecture & Designing</Link>
        </div>
      )}
    </div>
  </div>
)}
      </div>

      <Link to="/faq" className="hover:text-red-600">FAQ</Link>
      <Link to="/contactus" className="hover:text-red-600">Contact</Link>
    </ul>

    {/* HAMBURGER */}
    <div className="flex items-center gap-4">
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X /> : <Menu />}
      </button>
    </div>
  </div>

 {/* ---------- MOBILE MENU ---------- */}
{menuOpen && (
  <>
    {/* Background overlay */}
    <div
      className="fixed inset-0 bg-black/30 z-40"
      onClick={() => setMenuOpen(false)}
    ></div>

    {/* Mobile Menu Panel */}
    <div className="md:hidden fixed top-20 left-0 w-full bg-white dark:bg-white shadow-xl z-50 border-t max-h-[80vh] overflow-y-auto">
      <ul className="flex flex-col gap-4 p-6 text-lg font-medium">

        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/Whyus" onClick={() => setMenuOpen(false)}className="hover:text-red-600">Why Us</Link>
        {/* ⚡ SERVICES WITH LIGHTNING ICON + DROPDOWN */}
        <div className="flex justify-between items-center w-full">

          {/* Clicking SERVICES → DROPDOWN ONLY */}
          <button
            onClick={() => setServiceMobileOpen(!serviceMobileOpen)}
            className="text-left font-medium flex-1"
          >
            Services
          </button>

          {/* ⚡ ICON → DIRECT NAVIGATION */}
          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
            className="text-2xl px-2"
            title="Go to Services page"
          >
            ⚡
          </Link>

          {/* ▼ arrow toggle */}
          <button
            onClick={() => setServiceMobileOpen(!serviceMobileOpen)}
            className="text-xl px-1"
          >
            <span
              className={`transition-transform duration-200 ${
                serviceMobileOpen ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
        </div>

        {/* Dropdown Items */}
        {serviceMobileOpen && (
  <div className="pl-4 flex flex-col gap-3 text-base mt-2 
  max-h-[80vh] overflow-y-auto scroll-smooth pr-3">

    {/* Startup Advisory */}
    <div>
      <div className="flex justify-between items-center">
        <Link 
          to="/services?type=accounting"
          onClick={() => setMenuOpen(false)}
        >
          Startup Advisory
        </Link>

        <span 
          className={`cursor-pointer ml-2 transform transition-transform duration-200 
            ${openMobileService === "startup" ? "rotate-180" : ""}`}
          onClick={() => toggleMobileService("startup")}
        >
          ▼
        </span>
      </div>

      {openMobileService === "startup" && (
        <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">

          <Link to="/services/startup/business-inc" onClick={() => setMenuOpen(false)}>
            Business Incorporation
          </Link>

          <Link to="/services/startup/registrations" onClick={() => setMenuOpen(false)}>
            Regulatory Registrations
          </Link>

          <Link to="/services/startup/esop" onClick={() => setMenuOpen(false)}>
            ESOP Structuring
          </Link>

          <Link to="/services/startup/risk" onClick={() => setMenuOpen(false)}>
            Risk Advisory
          </Link>

          <Link to="/services/startup/vcfo" onClick={() => setMenuOpen(false)}>
            Virtual CFO Services
          </Link>
        </div>
      )}
    </div>


    {/* Taxation & Compliance */}
    <div>
      <div className="flex justify-between items-center">
        <Link 
          to="/services?type=tax"
          onClick={() => setMenuOpen(false)}
        >
          Taxation & Compliance
        </Link>
        <span 
          className={`cursor-pointer ml-2 transform transition-transform duration-200 
            ${openMobileService === "tax" ? "rotate-180" : ""}`}
          onClick={() => toggleMobileService("tax")}
        >
          ▼
        </span>
      </div>

      {openMobileService === "tax" && (
        <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
          <Link to="/services/tax/gst" onClick={() => setMenuOpen(false)}>GST Filing</Link>
          <Link to="/services/tax/income-tax" onClick={() => setMenuOpen(false)}>Income Tax Planning</Link>
          <Link to="/services/tax/tds" onClick={() => setMenuOpen(false)}>TDS Return</Link>
        </div>
      )}
    </div>


    {/* Financial Services */}
    <div>
      <div className="flex justify-between items-center">
        <Link 
          to="/services?type=financial"
          onClick={() => setMenuOpen(false)}
        >
          Financial Services
        </Link>
        <span 
          className={`cursor-pointer ml-2 transform transition-transform duration-200 
            ${openMobileService === "financial" ? "rotate-180" : ""}`}
          onClick={() => toggleMobileService("financial")}
        >
          ▼
        </span>
      </div>

      {openMobileService === "financial" && (
        <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
          <Link to="/services/financial/bookkeeping" onClick={() => setMenuOpen(false)}>Bookkeeping</Link>
          <Link to="/services/financial/revenue" onClick={() => setMenuOpen(false)}>Revenue Leakage Assessments</Link>
          <Link to="/services/financial/integrity" onClick={() => setMenuOpen(false)}>Accounts Integrity</Link>
          <Link to="/services/financial/internal-control" onClick={() => setMenuOpen(false)}>Internal Control Assessments</Link>
          <Link to="/services/financial/inventory" onClick={() => setMenuOpen(false)}>Inventory Accuracy & Aging Report</Link>
        </div>
      )}
    </div>


    {/* Growth Advisory */}
    <div>
      <div className="flex justify-between items-center">
        <Link 
          to="/services?type=business"
          onClick={() => setMenuOpen(false)}
        >
          Growth Advisory
        </Link>
        <span 
          className={`cursor-pointer ml-2 transform transition-transform duration-200 
            ${openMobileService === "growth" ? "rotate-180" : ""}`}
          onClick={() => toggleMobileService("growth")}
        >
          ▼
        </span>
      </div>

      {openMobileService === "growth" && (
        <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
          <Link to="/services/growth/pmf" onClick={() => setMenuOpen(false)}>PMF Consulting</Link>
          <Link to="/services/growth/cost" onClick={() => setMenuOpen(false)}>Cost Reduction Advisory</Link>
          <Link to="/services/growth/strategy" onClick={() => setMenuOpen(false)}>Growth Strategy</Link>
          <Link to="/services/growth/competitive-analysis" onClick={() => setMenuOpen(false)}>Competitive Analysis</Link>
        </div>
      )}
    </div>


    {/* HR Consulting */}
    <div>
      <div className="flex justify-between items-center">
        <Link 
          to="/services?type=talent"
          onClick={() => setMenuOpen(false)}
        >
          HR Consulting
        </Link>
        <span 
          className={`cursor-pointer ml-2 transform transition-transform duration-200 
            ${openMobileService === "hr" ? "rotate-180" : ""}`}
          onClick={() => toggleMobileService("hr")}
        >
          ▼
        </span>
      </div>

      {openMobileService === "hr" && (
        <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
          <Link to="/services/hr/talent-acquisition" onClick={() => setMenuOpen(false)}>Talent Acquisition Consulting</Link>
          <Link to="/services/hr/rpo" onClick={() => setMenuOpen(false)}>Recruitment Process Outsourcing</Link>
          <Link to="/services/hr/role-architecture" onClick={() => setMenuOpen(false)}>Role Architecture & Designing</Link>
        </div>
      )}
    </div>

  </div>
)}
        <Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
        <Link to="/contactus" onClick={() => setMenuOpen(false)}>Contact</Link>
      </ul>
    </div>
  </>
)}
</nav>
      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/startup/BusinessIncorporation" element={<BusinessIncorporation />}/>
        <Route path="/about" element={<ABOUT />} />
        <Route path="/Whyus" element={<WhyUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
    )}
    </>
  );
}