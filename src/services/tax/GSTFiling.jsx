import { motion } from "framer-motion";
import { Landmark, ShieldCheck, Clock, BadgeCheck } from "lucide-react";

export default function GstServices() {
  return (
    <div className="bg-rose-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-rose-400 to-red-300 text-white px-6 md:px-16 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div className="pt-10 md:pt-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              GST Registration & Filing Services
            </h1>

            <p className="text-lg mb-6">
              Aaravi provides complete GST solutions including registration,
              return filing, reconciliation and advisory services.
            </p>

            <button className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold">
              Talk to GST Expert
            </button>
          </div>

          {/* IMAGE */}
          <div className="mt-10 overflow-hidden rounded-xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1554224154-26032ffc0d07"
              alt="GST Registration and Filing Services"
              className="w-full h-[360px] object-cover scale-105"
            />
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 md:px-16 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our GST Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "GST Registration & Amendment",
            "Monthly / Quarterly GST Filing",
            "Annual GST Return (GSTR-9)",
            "GST Reconciliation",
            "GST Notice Handling",
            "Input Tax Credit Optimization"
          ].map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl"
            >
              <Landmark className="text-rose-600 mb-4" size={32} />
              <p>{service}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-white px-6 md:px-16 py-16 text-center">
        <h2 className="text-3xl font-bold mb-12">
          Why Choose Aaravi for GST Services?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <ShieldCheck className="text-rose-600 mx-auto mb-4" size={36} />
            <h3 className="font-semibold">100% Compliance</h3>
            <p className="text-gray-600">
              Accurate GST filing and regulatory compliance.
            </p>
          </div>

          <div>
            <Clock className="text-rose-600 mx-auto mb-4" size={36} />
            <h3 className="font-semibold">Timely Filing</h3>
            <p className="text-gray-600">
              Avoid penalties with on-time filing.
            </p>
          </div>

          <div>
            <BadgeCheck className="text-rose-600 mx-auto mb-4" size={36} />
            <h3 className="font-semibold">Expert Advisory</h3>
            <p className="text-gray-600">
              Professional GST consultation.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-rose-400 to-red-300 text-white text-center px-6 md:px-16 py-16">
        <h2 className="text-3xl font-bold mb-4">
          Need Help With GST Compliance?
        </h2>

        <p className="mb-6">
          Speak with our GST experts today.
        </p>

        <button className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold">
          Contact Us
        </button>
      </section>

    </div>
  );
}