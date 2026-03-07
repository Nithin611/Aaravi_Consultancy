import { motion } from "framer-motion";
import { BookOpen, BarChart3, ShieldCheck, BadgeCheck } from "lucide-react";

export default function BookkeepingArchitecture() {

  const services = [
    "End-to-End Accounting Management",
    "Financial Statement Preparation",
    "Cash Flow Tracking & Reporting",
    "Monthly MIS Reporting",
    "Expense Analytics & Trend Analysis",
    "Compliance-Ready Documentation",
  ];

  return (
    <div className="bg-rose-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-rose-400 to-red-300 text-white px-6 md:px-16 py-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div className="mt-10 md:mt-0 text-center md:text-left">

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Structured Bookkeeping & Financial Reporting
            </h1>

            <p className="text-base md:text-lg mb-6">
              Transform accounting records into financial intelligence with
              structured reporting systems designed for startups and SMEs.
            </p>

            <button className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold w-full sm:w-auto">
              Talk to an Advisor
            </button>

          </div>

          {/* IMAGE */}
          <div className="mt-10 md:mt-12 overflow-hidden rounded-xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
              alt="Bookkeeping financial reporting"
              className="w-full h-[260px] sm:h-[320px] md:h-[360px] object-cover"
            />
          </div>

        </div>

      </section>


      {/* SERVICES */}
      <section className="px-6 md:px-16 py-16">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Our Bookkeeping Architecture Includes
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl text-center"
            >

              <BookOpen className="text-rose-600 mb-4 mx-auto" size={32}/>
              <p>{item}</p>

            </motion.div>
          ))}

        </div>

      </section>


      {/* WHY CHOOSE */}
      <section className="bg-white px-6 md:px-16 py-16 text-center">

        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          Why Choose Aaravi?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <div>
            <ShieldCheck className="text-rose-600 mx-auto mb-4" size={36}/>
            <h3 className="font-semibold mb-2">Clean Audit Trails</h3>
            <p className="text-gray-600">
              Maintain compliant accounting records.
            </p>
          </div>

          <div>
            <BarChart3 className="text-rose-600 mx-auto mb-4" size={36}/>
            <h3 className="font-semibold mb-2">Financial Visibility</h3>
            <p className="text-gray-600">
              Real-time insights for better decisions.
            </p>
          </div>

          <div>
            <BadgeCheck className="text-rose-600 mx-auto mb-4" size={36}/>
            <h3 className="font-semibold mb-2">Investor Ready Books</h3>
            <p className="text-gray-600">
              Structured reports aligned with investor needs.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-gradient-to-r from-rose-400 to-red-300 text-white text-center py-16 px-6">

        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Build Financial Clarity
        </h2>

        <p className="mb-6">
          Let us design structured financial systems.
        </p>

        <button className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold w-full sm:w-auto">
          Get Started
        </button>

      </section>

    </div>
  );
}