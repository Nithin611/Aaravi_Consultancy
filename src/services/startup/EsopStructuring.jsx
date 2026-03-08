import { motion } from "framer-motion";
import { Users, ShieldCheck, Clock, BadgeCheck } from "lucide-react";

export default function EsopStructuring() {

  const services = [
    "ESOP Pool Sizing & Equity Planning",
    "Cap Table & Dilution Impact Forecasting",
    "ESOP Accounting under Ind AS",
    "Tax Planning for Founders & Employees",
    "ESOP Policy & Documentation",
    "Board & Shareholder Compliance"
  ];

  return (
    <div className="bg-rose-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-rose-400 to-red-300 text-white px-6 md:px-16 py-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div className="mt-6 md:mt-0">

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ESOP Structuring & Accounting
            </h1>

            <p className="text-lg mb-6">
              Align employee incentives with long-term valuation strategy
              while protecting founder equity and ensuring regulatory
              compliance.
            </p>

            <button className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold">
              Speak With ESOP Expert
            </button>

          </div>

          {/* HERO IMAGE */}
          <div className="mt-10">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
              alt="ESOP planning"
              className="rounded-xl shadow-xl w-full object-cover h-[350px]"
            />
          </div>

        </div>

      </section>


      {/* SERVICES */}
      <section className="px-6 md:px-16 py-16">

        <h2 className="text-3xl font-bold text-center mb-12">
          ESOP Advisory Services
        </h2>

        {/* SERVICES IMAGE */}
        <div className="mb-12">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
            alt="equity planning"
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
              <Users className="text-rose-600 mb-4" size={32}/>
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
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="startup team meeting"
            className="rounded-xl shadow-lg w-full object-cover h-[320px]"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <ShieldCheck className="text-rose-600 mx-auto mb-4" size={36}/>
            <h3 className="font-semibold">Equity Expertise</h3>
            <p className="text-gray-600">
              Startup-focused ESOP and equity structuring expertise.
            </p>
          </div>

          <div>
            <Clock className="text-rose-600 mx-auto mb-4" size={36}/>
            <h3 className="font-semibold">Funding Alignment</h3>
            <p className="text-gray-600">
              ESOP frameworks aligned with venture capital funding.
            </p>
          </div>

          <div>
            <BadgeCheck className="text-rose-600 mx-auto mb-4" size={36}/>
            <h3 className="font-semibold">Compliance Ready</h3>
            <p className="text-gray-600">
              Structured accounting and regulatory documentation.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-gradient-to-r from-rose-400 to-red-300 text-white text-center px-6 md:px-16 py-16">

        <h2 className="text-3xl font-bold mb-4">
          Planning an ESOP Plan for Your Team?
        </h2>

        <p className="mb-6">
          Design an equity program that motivates talent and protects founder ownership.
        </p>

        <button className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold">
          Consult ESOP Advisors
        </button>

      </section>

    </div>
  );
}