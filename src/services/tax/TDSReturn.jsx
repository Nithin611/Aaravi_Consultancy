import { motion } from "framer-motion";
import { FileText, ShieldCheck, Clock, BadgeCheck } from "lucide-react";

export default function TdsCompliance() {
  return (
    <div className="bg-rose-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-rose-600 to-red-300 text-white px-6 md:px-16 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              TDS Return Filing & Compliance
            </h1>

            <p className="text-lg mb-6">
              Ensure accurate deduction, payment and filing of TDS returns
              with expert compliance support.
            </p>

            <button className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold">
              Contact TDS Expert
            </button>
          </div>

          <div className="mt-10">
            <img
              src="https://images.unsplash.com/photo-1554224154-22dec7ec8818"
              alt="TDS Compliance"
              className="rounded-xl shadow-xl w-full object-cover h-[350px]"
            />
          </div>

        </div>
      </section>


      {/* SERVICES */}
      <section className="px-6 md:px-16 py-16">

        <h2 className="text-3xl font-bold text-center mb-12">
          TDS Compliance Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            "Quarterly TDS Return Filing",
            "TDS Calculation & Deduction",
            "TDS Payment Compliance",
            "Form 16 & Form 16A Issuance",
            "TDS Reconciliation",
            "Handling TDS Notices"
          ].map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl"
            >
              <FileText className="text-rose-600 mb-4" size={32}/>
              <p>{service}</p>
            </motion.div>
          ))}

        </div>

      </section>


      {/* WHY CHOOSE */}
      <section className="bg-white px-6 md:px-16 py-16 text-center">

        <h2 className="text-3xl font-bold mb-12">
          Why Choose Aaravi for TDS Compliance?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <ShieldCheck className="text-rose-600 mx-auto mb-4" size={36}/>
            <h3 className="font-semibold">Accurate Compliance</h3>
            <p className="text-gray-600">Proper deduction and statutory compliance.</p>
          </div>

          <div>
            <Clock className="text-rose-600 mx-auto mb-4" size={36}/>
            <h3 className="font-semibold">Timely Returns</h3>
            <p className="text-gray-600">Avoid penalties with timely filing.</p>
          </div>

          <div>
            <BadgeCheck className="text-rose-600 mx-auto mb-4" size={36}/>
            <h3 className="font-semibold">Expert Support</h3>
            <p className="text-gray-600">Professional support for notices and corrections.</p>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-gradient-to-r from-rose-600 to-red-300 text-white text-center px-6 md:px-16 py-16">

        <h2 className="text-3xl font-bold mb-4">
          Need Help With TDS Compliance?
        </h2>

        <p className="mb-6">
          Speak with our experts today.
        </p>

        <button className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold">
          Contact Us
        </button>

      </section>

    </div>
  );
}