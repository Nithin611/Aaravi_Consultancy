import { motion } from "framer-motion";
import { Calculator, ShieldCheck, Clock, BadgeCheck } from "lucide-react";

export default function IncomeTaxServices() {
  return (
    <div className="bg-rose-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-rose-600 to-red-300 text-white px-6 md:px-16 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Income Tax Planning & Filing
            </h1>

            <p className="text-lg mb-6">
              Reduce tax liabilities legally and ensure full compliance
              with expert income tax services.
            </p>

            <button className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold">
              Get Tax Consultation
            </button>
          </div>

          <div className="mt-10">
            <img
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e"
              alt="Income Tax Services"
              className="rounded-xl shadow-xl w-full object-cover h-[350px]"
            />
          </div>

        </div>
      </section>


      {/* SERVICES */}
      <section className="px-6 md:px-16 py-16">

        <h2 className="text-3xl font-bold text-center mb-12">
          Income Tax Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            "ITR Filing for Individuals",
            "Corporate Tax Filing",
            "Advance Tax Calculation",
            "Tax Planning & Advisory",
            "Capital Gains Tax Planning",
            "Income Tax Notice Handling"
          ].map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl"
            >
              <Calculator className="text-rose-600 mb-4" size={32}/>
              <p>{service}</p>
            </motion.div>
          ))}

        </div>

      </section>


      {/* WHY CHOOSE */}
      <section className="bg-white px-6 md:px-16 py-16 text-center">

        <h2 className="text-3xl font-bold mb-12">
          Why Choose Aaravi for Income Tax Services?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <ShieldCheck className="text-rose-600 mx-auto mb-4" size={36}/>
            <h3 className="font-semibold">Expert Tax Professionals</h3>
            <p className="text-gray-600">Handling complex tax cases efficiently.</p>
          </div>

          <div>
            <Clock className="text-rose-600 mx-auto mb-4" size={36}/>
            <h3 className="font-semibold">Timely Filing</h3>
            <p className="text-gray-600">Ensure accurate and timely returns.</p>
          </div>

          <div>
            <BadgeCheck className="text-rose-600 mx-auto mb-4" size={36}/>
            <h3 className="font-semibold">Tax Saving Strategies</h3>
            <p className="text-gray-600">Maximize deductions legally.</p>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-gradient-to-r from-rose-600 to-red-300 text-white text-center px-6 md:px-16 py-16">

        <h2 className="text-3xl font-bold mb-4">
          Need Help With Income Tax Filing?
        </h2>

        <p className="mb-6">
          Connect with our tax consultants today.
        </p>

        <button className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold">
          Contact Us
        </button>

      </section>

    </div>
  );
}