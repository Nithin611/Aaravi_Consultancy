import { motion } from "framer-motion";
import { Boxes, ShieldCheck, Clock, BadgeCheck } from "lucide-react";

export default function InventoryIntelligence() {

  const services = [
    "Inventory Reconciliation Assessments",
    "Ageing Analysis Reports",
    "Obsolescence Identification",
    "Slow Moving Stock Diagnostics",
    "Inventory Control Framework Design",
    "Working Capital Efficiency Analysis"
  ];

  return (
    <div className="bg-rose-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-rose-600 to-red-300 text-white px-6 md:px-16 py-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Inventory Accuracy & Ageing Intelligence
            </h1>

            <p className="text-lg mb-6">
              Improve working capital efficiency with structured inventory
              monitoring, ageing diagnostics, and financial insights.
            </p>

            <button className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold">
              Improve Inventory Control
            </button>

          </div>

          {/* IMAGE */}
          <div className="mt-10 overflow-hidden rounded-xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
              alt="Inventory warehouse management"
              className="w-full h-[360px] object-cover"
            />
          </div>

        </div>

      </section>


      {/* SERVICES */}
      <section className="px-6 md:px-16 py-16">

        <h2 className="text-3xl font-bold text-center mb-12">
          Inventory Intelligence Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl"
            >

              <Boxes className="text-rose-600 mb-4" size={32}/>
              <p>{service}</p>

            </motion.div>
          ))}

        </div>

      </section>


      {/* WHY CHOOSE AARAVI */}
      <section className="bg-white px-6 md:px-16 py-16 text-center">

        <h2 className="text-3xl font-bold mb-12">
          Why Choose Aaravi for Inventory Intelligence?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <ShieldCheck className="text-rose-600 mx-auto mb-4" size={36}/>
            <h3 className="font-semibold mb-2">Accurate Inventory Insights</h3>
            <p className="text-gray-600">
              Identify discrepancies and maintain reliable inventory records.
            </p>
          </div>

          <div>
            <Clock className="text-rose-600 mx-auto mb-4" size={36}/>
            <h3 className="font-semibold mb-2">Improved Cash Flow</h3>
            <p className="text-gray-600">
              Optimize working capital through better stock management.
            </p>
          </div>

          <div>
            <BadgeCheck className="text-rose-600 mx-auto mb-4" size={36}/>
            <h3 className="font-semibold mb-2">Operational Efficiency</h3>
            <p className="text-gray-600">
              Reduce losses from slow-moving or obsolete inventory.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-gradient-to-r from-rose-600 to-red-300 text-white text-center py-16">

        <h2 className="text-3xl font-bold mb-4">
          Gain Better Control Over Your Inventory
        </h2>

        <p className="mb-6">
          Let Aaravi help you improve inventory accuracy and working capital efficiency.
        </p>

        <button className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold">
          Schedule Consultation
        </button>

      </section>

    </div>
  );
}