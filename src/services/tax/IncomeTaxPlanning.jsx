import { motion } from "framer-motion";
import { Calculator, ShieldCheck, Clock, BadgeCheck } from "lucide-react";

export default function IncomeTaxServices() {
  return (
    <div className="bg-rose-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-rose-400 to-red-300 text-white px-6 md:px-16 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div className="pt-6 md:pt-0">
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

            {/* IMAGE */}
            <div className="mt-10 md:mt-6">
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


      {/* TAX ADVISORY IMAGE */}
      <section className="px-6 md:px-16 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
            alt="Tax Planning"
            className="rounded-xl shadow-lg h-[320px] object-cover w-full"
          />

          <div className="pt-6 md:pt-0">
            <h2 className="text-3xl font-bold mb-4">
              Strategic Tax Planning
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Proper tax planning ensures businesses and individuals minimize
              liabilities while staying compliant with tax regulations.
              Our advisors analyze income structures, deductions,
              exemptions, and investments to design optimized tax strategies.
            </p>
          </div>

        </div>
      </section>


      {/* TAX COMPLIANCE IMAGE */}
      <section className="px-6 md:px-16 py-16 bg-white">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="pt-6 md:pt-0">
            <h2 className="text-3xl font-bold mb-4">
              Compliance & Accurate Filing
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Income tax compliance requires accurate documentation,
              proper return filing, and adherence to deadlines.
              Our experts ensure error-free filings, proper
              documentation management, and handling of tax notices.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
            alt="Tax Compliance"
            className="rounded-xl shadow-lg h-[320px] object-cover w-full"
          />

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
      <section className="bg-gradient-to-r from-rose-400 to-red-300 text-white text-center px-6 md:px-16 py-16">

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