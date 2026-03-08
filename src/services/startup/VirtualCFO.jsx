import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Clock, BadgeCheck } from "lucide-react";

export default function VirtualCFO() {

  const services = [
    "Financial Strategy & Budgeting",
    "Forecasting & Scenario Modelling",
    "Fundraising Financial Preparation",
    "Unit Economics Analysis",
    "Burn Rate & Runway Planning",
    "Investor Reporting Dashboards"
  ];

  return (
    <div className="bg-rose-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-rose-400 to-red-300 text-white px-6 md:px-16 py-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div className="mt-6 md:mt-0 text-center md:text-left">

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Virtual CFO & Strategic Finance Leadership
            </h1>

            <p className="text-base md:text-lg mb-6">
              Board-level financial insight without the cost of a full-time CFO.
              We help startups optimise capital allocation, financial planning,
              and investor readiness.
            </p>

            <button className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold w-full sm:w-auto">
              Schedule Consultation
            </button>

          </div>

          {/* HERO IMAGE */}
          <div className="mt-10 md:mt-12 overflow-hidden rounded-xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1554224154-22dec7ec8818"
              alt="Virtual CFO services"
              className="w-full h-[260px] sm:h-[320px] md:h-[360px] object-cover"
            />
          </div>

        </div>

      </section>


      {/* SERVICES */}
      <section className="px-6 md:px-16 py-16">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Strategic Finance Services
        </h2>

        {/* SERVICES IMAGE */}
        <div className="mb-12">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
            alt="financial strategy planning"
            className="rounded-xl shadow-lg w-full object-cover h-[320px]"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl text-center"
            >

              <TrendingUp className="text-rose-600 mb-4 mx-auto" size={32}/>
              <p>{service}</p>

            </motion.div>
          ))}

        </div>

      </section>


      {/* WHY CHOOSE */}
      <section className="bg-white px-6 md:px-16 py-16 text-center">

        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          Why Choose Aaravi?
        </h2>

        {/* WHY IMAGE */}
        <div className="mb-12">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="finance leadership team"
            className="rounded-xl shadow-lg w-full object-cover h-[320px]"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <div>
            <ShieldCheck className="text-rose-600 mx-auto mb-4" size={36}/>
            <h3 className="font-semibold mb-2">Strategic Expertise</h3>
            <p className="text-gray-600">
              Experienced finance professionals guiding your growth strategy.
            </p>
          </div>

          <div>
            <Clock className="text-rose-600 mx-auto mb-4" size={36}/>
            <h3 className="font-semibold mb-2">Cost Efficient</h3>
            <p className="text-gray-600">
              CFO-level financial leadership without full-time hiring costs.
            </p>
          </div>

          <div>
            <BadgeCheck className="text-rose-600 mx-auto mb-4" size={36}/>
            <h3 className="font-semibold mb-2">Investor Ready</h3>
            <p className="text-gray-600">
              Financial models and reporting prepared for investor discussions.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-gradient-to-r from-rose-400 to-red-300 text-white text-center py-16 px-6">

        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Need Strategic Financial Leadership?
        </h2>

        <p className="mb-6">
          Partner with Aaravi's Virtual CFO experts to strengthen financial strategy.
        </p>

        <button className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold w-full sm:w-auto">
          Contact Us
        </button>

      </section>

    </div>
  );
}