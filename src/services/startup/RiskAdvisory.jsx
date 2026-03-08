import { motion } from "framer-motion";
import { Shield, ShieldCheck, Clock, BadgeCheck } from "lucide-react";

export default function RiskArchitecture() {

  const services = [
    "Compliance Calendar Design",
    "ROC Filings & Statutory Compliance",
    "FEMA Reporting Advisory",
    "Internal Control Systems",
    "Board Governance Documentation",
    "Investor Due Diligence Preparation"
  ];

  return (
    <div className="bg-rose-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-rose-400 to-red-300 text-white px-6 md:px-16 py-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div className="mt-6 md:mt-0">

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Risk Architecture & Compliance Intelligence
            </h1>

            <p className="text-lg mb-6">
              Build governance frameworks that strengthen investor
              confidence and ensure long-term regulatory compliance.
            </p>

            <button className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold">
              Talk to Compliance Expert
            </button>

          </div>

          {/* HERO IMAGE */}
          <div className="mt-10">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
              alt="risk management"
              className="rounded-xl shadow-xl w-full object-cover h-[350px]"
            />
          </div>

        </div>

      </section>


      {/* SERVICES */}
      <section className="px-6 md:px-16 py-16">

        <h2 className="text-3xl font-bold text-center mb-12">
          Compliance & Risk Advisory
        </h2>

        {/* SERVICES IMAGE */}
        <div className="mb-12">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            alt="risk analysis meeting"
            className="rounded-xl shadow-lg w-full object-cover h-[320px]"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl"
            >
              <Shield className="text-rose-600 mb-4" size={32}/>
              <p>{service}</p>
            </motion.div>
          ))}

        </div>

      </section>


      {/* WHY CHOOSE */}
      <section className="bg-white px-6 md:px-16 py-16 text-center">

        <h2 className="text-3xl font-bold mb-12">
          Why Choose Aaravi
        </h2>

        {/* WHY IMAGE */}
        <div className="mb-12">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="governance planning"
            className="rounded-xl shadow-lg w-full object-cover h-[320px]"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <ShieldCheck className="text-rose-600 mx-auto mb-4" size={36}/>
            <h3 className="font-semibold">Governance Focus</h3>
            <p className="text-gray-600">
              Investor-grade governance and compliance frameworks.
            </p>
          </div>

          <div>
            <Clock className="text-rose-600 mx-auto mb-4" size={36}/>
            <h3 className="font-semibold">Risk Monitoring</h3>
            <p className="text-gray-600">
              Structured compliance monitoring and reporting systems.
            </p>
          </div>

          <div>
            <BadgeCheck className="text-rose-600 mx-auto mb-4" size={36}/>
            <h3 className="font-semibold">Investor Readiness</h3>
            <p className="text-gray-600">
              Prepare your business for institutional due diligence.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-gradient-to-r from-rose-400 to-red-300 text-white text-center px-6 md:px-16 py-16">

        <h2 className="text-3xl font-bold mb-4">
          Strengthen Your Governance Framework
        </h2>

        <p className="mb-6">
          Build compliance systems that support sustainable growth.
        </p>

        <button className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold">
          Contact Compliance Team
        </button>

      </section>

    </div>
  );
}