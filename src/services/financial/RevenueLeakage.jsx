import { motion } from "framer-motion";
import { LineChart, ShieldCheck, Clock, BadgeCheck } from "lucide-react";

export default function RevenueLeakage() {

  const services = [
    "Process Walkthrough & Control Testing",
    "Billing & Collection Cycle Evaluation",
    "Pricing Structure Analysis",
    "Contract-to-Cash Review",
    "Margin Variance Diagnostics",
    "Revenue Monitoring Framework"
  ];

  return (
    <div className="bg-rose-50">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-rose-400 to-red-300 text-white px-6 md:px-16 py-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div className="mt-10 md:mt-0 text-center md:text-left">

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Revenue Leakage & Profitability Diagnostics
            </h1>

            <p className="text-base md:text-lg mb-6">
              Identify hidden financial erosion and improve profitability
              through structured financial diagnostics.
            </p>

            <button className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold w-full sm:w-auto">
              Start Assessment
            </button>

          </div>

          {/* IMAGE */}
          <div className="mt-10 md:mt-12 overflow-hidden rounded-xl shadow-xl">

            <img
              src="https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1200&q=80"
              alt="Revenue analytics dashboard"
              className="w-full h-[260px] sm:h-[320px] md:h-[360px] object-cover"
            />

          </div>

        </div>

      </section>


      {/* SERVICES */}
      <section className="px-6 md:px-16 py-16">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Our Diagnostics Process
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl text-center"
            >

              <LineChart className="text-rose-600 mb-4 mx-auto" size={32}/>
              <p>{service}</p>

            </motion.div>
          ))}

        </div>

      </section>


      {/* WHY CHOOSE */}
      <section className="bg-white px-6 md:px-16 py-16 text-center">

        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          Why Choose Aaravi for Revenue Diagnostics?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <div>
            <ShieldCheck className="text-rose-600 mx-auto mb-4" size={36}/>
            <h3 className="font-semibold mb-2">Deep Financial Analysis</h3>
            <p className="text-gray-600">
              Identify hidden revenue leakage and operational inefficiencies.
            </p>
          </div>

          <div>
            <Clock className="text-rose-600 mx-auto mb-4" size={36}/>
            <h3 className="font-semibold mb-2">Structured Diagnostics</h3>
            <p className="text-gray-600">
              Systematic evaluation of pricing, billing and financial controls.
            </p>
          </div>

          <div>
            <BadgeCheck className="text-rose-600 mx-auto mb-4" size={36}/>
            <h3 className="font-semibold mb-2">Profitability Focus</h3>
            <p className="text-gray-600">
              Improve margins and strengthen financial performance.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-gradient-to-r from-rose-400 to-red-300 text-white text-center py-16 px-6">

        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Stop Silent Revenue Loss
        </h2>

        <p className="mb-6">
          Improve profitability with expert diagnostics.
        </p>

        <button className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold w-full sm:w-auto">
          Book Consultation
        </button>

      </section>

    </div>
  );
}