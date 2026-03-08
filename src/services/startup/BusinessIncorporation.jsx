import { motion } from "framer-motion";
import { Building2, ShieldCheck, Clock, BadgeCheck } from "lucide-react";

export default function BusinessIncorporation() {

  const services = [
    "Choosing the Optimal Entity Structure",
    "Founder Equity Allocation & Vesting Frameworks",
    "Cap Table Modelling for Future Fundraising",
    "Regulatory Registrations & Compliance Setup",
    "Startup Recognition & Tax Positioning",
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
              Business Incorporation & Structural Advisory
            </h1>

            <p className="text-lg mb-6">
              Build the right legal and equity framework from day one to
              support long-term growth, investor readiness, and governance.
            </p>

            <button className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold">
              Talk to Startup Advisor
            </button>
          </div>

          {/* HERO IMAGE */}
          <div className="mt-10">
            <img
              src="https://images.unsplash.com/photo-1554224155-1696413565d3"
              alt="Business Incorporation"
              className="rounded-xl shadow-xl w-full object-cover h-[350px]"
            />
          </div>

        </div>

      </section>


      {/* SERVICES */}
      <section className="px-6 md:px-16 py-16">

        <h2 className="text-3xl font-bold text-center mb-12">
          Incorporation Advisory Services
        </h2>

        {/* SERVICES IMAGE */}
        <div className="mb-12">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
            alt="Startup advisory"
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
              <Building2 className="text-rose-600 mb-4" size={32}/>
              <p>{service}</p>
            </motion.div>
          ))}

        </div>

      </section>


      {/* WHY CHOOSE */}
      <section className="bg-white px-6 md:px-16 py-16 text-center">

        <h2 className="text-3xl font-bold mb-12">
          Why Founders Choose Aaravi
        </h2>

        {/* WHY IMAGE */}
        <div className="mb-12">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Startup team planning"
            className="rounded-xl shadow-lg w-full object-cover h-[320px]"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <ShieldCheck className="text-rose-600 mx-auto mb-4" size={36}/>
            <h3 className="font-semibold">Strategic Structuring</h3>
            <p className="text-gray-600">
              Legal structures aligned with long-term business growth.
            </p>
          </div>

          <div>
            <Clock className="text-rose-600 mx-auto mb-4" size={36}/>
            <h3 className="font-semibold">Funding Readiness</h3>
            <p className="text-gray-600">
              Investor-friendly documentation and cap tables.
            </p>
          </div>

          <div>
            <BadgeCheck className="text-rose-600 mx-auto mb-4" size={36}/>
            <h3 className="font-semibold">Expert Advisory</h3>
            <p className="text-gray-600">
              Startup specialists guiding your incorporation journey.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-gradient-to-r from-rose-400 to-red-300 text-white text-center px-6 md:px-16 py-16">

        <h2 className="text-3xl font-bold mb-4">
          Planning to Incorporate Your Startup?
        </h2>

        <p className="mb-6">
          Start with the right legal and equity structure.
        </p>

        <button className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold">
          Contact Our Advisors
        </button>

      </section>

    </div>
  );
}