import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck, Clock } from "lucide-react";

export default function InternalControl() {

  const services = [
    "Internal Control Reviews",
    "Financial Process Risk Mapping",
    "Delegation & Authorization Matrix Review",
    "Compliance Gap Identification",
    "Fraud Risk Vulnerability Assessment",
    "SOP Documentation Advisory"
  ];

  return (
    <div className="bg-rose-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-rose-600 to-red-300 text-white px-6 md:px-16 py-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Internal Control & Financial Governance
            </h1>

            <p className="text-lg mb-6">
              Strengthen financial discipline, mitigate risks, and build
              governance frameworks that support sustainable business growth.
            </p>

            <button className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold">
              Assess Your Controls
            </button>

          </div>

          {/* IMAGE */}
          <div className="mt-10 overflow-hidden rounded-xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
              alt="Financial governance and internal control"
              className="w-full h-[360px] object-cover"
            />
          </div>

        </div>

      </section>


      {/* SERVICES */}
      <section className="px-6 md:px-16 py-16">

        <h2 className="text-3xl font-bold text-center mb-12">
          Governance Advisory Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl"
            >

              <ShieldCheck className="text-rose-600 mb-4" size={32}/>
              <p>{service}</p>

            </motion.div>
          ))}

        </div>

      </section>


      {/* WHY CHOOSE AARAVI */}
      <section className="bg-white px-6 md:px-16 py-16 text-center">

        <h2 className="text-3xl font-bold mb-12">
          Why Choose Aaravi for Financial Governance?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <ShieldCheck className="text-rose-600 mx-auto mb-4" size={36}/>
            <h3 className="font-semibold mb-2">Strong Control Frameworks</h3>
            <p className="text-gray-600">
              Build structured internal controls to reduce financial risk.
            </p>
          </div>

          <div>
            <Clock className="text-rose-600 mx-auto mb-4" size={36}/>
            <h3 className="font-semibold mb-2">Operational Discipline</h3>
            <p className="text-gray-600">
              Improve process efficiency with clear governance systems.
            </p>
          </div>

          <div>
            <BadgeCheck className="text-rose-600 mx-auto mb-4" size={36}/>
            <h3 className="font-semibold mb-2">Investor Confidence</h3>
            <p className="text-gray-600">
              Strong governance increases valuation and investor trust.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-gradient-to-r from-rose-600 to-red-300 text-white text-center py-16">

        <h2 className="text-3xl font-bold mb-4">
          Strengthen Your Financial Governance
        </h2>

        <p className="mb-6">
          Partner with Aaravi to design robust internal controls and governance frameworks.
        </p>

        <button className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold">
          Schedule Consultation
        </button>

      </section>

    </div>
  );
}