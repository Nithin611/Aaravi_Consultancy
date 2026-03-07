import { motion } from "framer-motion";
import { BookOpen, ShieldCheck, BarChart3, BadgeCheck } from "lucide-react";

export default function BookkeepingArchitecture() {
  return (
    <div className="bg-rose-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-rose-600 to-red-300 text-white px-6 md:px-16 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Structured Bookkeeping & Financial Reporting Architecture
            </h1>

            <p className="text-lg mb-6">
              Moving beyond simple transaction recording to build structured
              financial systems that provide visibility, compliance readiness,
              and decision-making clarity.
            </p>

            <button className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold">
              Talk to an Advisor
            </button>
          </div>

          <div className="mt-10 overflow-hidden rounded-xl shadow-xl">
  <img
    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
    alt="Accounting bookkeeping records"
    className="w-full h-[360px] object-cover scale-105"
  />
</div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 md:px-16 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Bookkeeping Architecture Includes
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "End-to-End Accounting Management",
            "Financial Statement Preparation",
            "Cash Flow Tracking & Reporting",
            "Monthly MIS Reporting",
            "Expense Analytics & Trend Analysis",
            "Compliance Ready Documentation"
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow"
            >
              <BookOpen className="text-rose-600 mb-4" size={32} />
              <p>{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-white px-6 md:px-16 py-16 text-center">
        <h2 className="text-3xl font-bold mb-12">
          Why Choose Aaravi?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <ShieldCheck className="text-rose-600 mx-auto mb-4" size={36}/>
            <h3 className="font-semibold mb-2">Clean Audit Trails</h3>
            <p className="text-gray-600">Maintain accurate and compliant accounting records.</p>
          </div>

          <div>
            <BarChart3 className="text-rose-600 mx-auto mb-4" size={36}/>
            <h3 className="font-semibold mb-2">Financial Visibility</h3>
            <p className="text-gray-600">Real-time financial data for smarter decisions.</p>
          </div>

          <div>
            <BadgeCheck className="text-rose-600 mx-auto mb-4" size={36}/>
            <h3 className="font-semibold mb-2">Investor Ready Books</h3>
            <p className="text-gray-600">Financial reports aligned with investor expectations.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-rose-600 to-red-300 text-white text-center py-16">
        <h2 className="text-3xl font-bold mb-4">
          Build Financial Clarity For Your Startup
        </h2>
        <p className="mb-6">
          Let our experts design structured financial reporting for your business.
        </p>
        <button className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold">
          Get Started
        </button>
      </section>

    </div>
  );
}