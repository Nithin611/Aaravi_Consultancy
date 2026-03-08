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
      <section className="bg-gradient-to-r from-rose-400 to-red-300 text-white px-6 md:px-16 py-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div className="mt-10 md:mt-0 text-center md:text-left">

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Internal Control & Financial Governance
            </h1>

            <p className="text-base md:text-lg mb-6">
              Strengthen financial discipline, mitigate risks, and build
              governance frameworks that support sustainable business growth.
            </p>

            <button className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold w-full sm:w-auto">
              Assess Your Controls
            </button>

          </div>

          {/* HERO IMAGE */}
          <div className="mt-10 md:mt-12 overflow-hidden rounded-xl shadow-xl">

            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
              alt="Financial governance and internal control"
              className="w-full h-[260px] sm:h-[320px] md:h-[360px] object-cover"
            />

          </div>

        </div>

      </section>


      {/* SERVICES */}
      <section className="px-6 md:px-16 py-16">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Governance Advisory Services
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl text-center"
            >

              <ShieldCheck className="text-rose-600 mb-4 mx-auto" size={32}/>
              <p>{service}</p>

            </motion.div>
          ))}

        </div>

      </section>


      {/* INTERNAL CONTROL PROCESS IMAGE */}
      <section className="px-6 md:px-16 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
            alt="Internal control audit process"
            className="rounded-xl shadow-lg h-[320px] object-cover w-full"
          />

          <div className="pt-6 md:pt-0">
            <h2 className="text-3xl font-bold mb-4">
              Internal Control Reviews
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Strong internal controls help organizations maintain financial
              integrity and operational discipline. Our team evaluates
              financial processes, authorization structures, and risk areas
              to identify gaps and strengthen governance systems.
            </p>
          </div>

        </div>
      </section>


      {/* GOVERNANCE FRAMEWORK IMAGE */}
      <section className="px-6 md:px-16 py-16 bg-white">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="pt-6 md:pt-0">
            <h2 className="text-3xl font-bold mb-4">
              Governance & Risk Frameworks
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Effective governance frameworks provide clarity in decision
              making, accountability, and financial discipline. We help
              businesses design SOPs, delegation matrices, and risk
              monitoring systems that improve operational transparency
              and investor confidence.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1554224154-26032ffc0d07"
            alt="Corporate governance strategy"
            className="rounded-xl shadow-lg h-[320px] object-cover w-full"
          />

        </div>
      </section>


      {/* WHY CHOOSE */}
      <section className="bg-white px-6 md:px-16 py-16 text-center">

        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          Why Choose Aaravi for Financial Governance?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

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
      <section className="bg-gradient-to-r from-rose-400 to-red-300 text-white text-center py-16 px-6">

        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Strengthen Your Financial Governance
        </h2>

        <p className="mb-6">
          Partner with Aaravi to design robust internal controls and governance frameworks.
        </p>

        <button className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold w-full sm:w-auto">
          Schedule Consultation
        </button>

      </section>

    </div>
  );
}