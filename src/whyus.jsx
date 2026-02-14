import { useState } from "react";

export default function WhyUs({ darkMode }) {
  const [selected, setSelected] = useState(0);

  const approachData = [
    {
      title: "Understanding the Business",
      points: [
        "In-depth discussion to understand business model, goals and challenges",
        "Assessment of current financial, accounting and compliance status",
        "Identification of gaps and risk areas"
      ],
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216"
    },
    {
      title: "Analyze & Diagnose",
      points: [
        "Review of accounting records, cash flow and profitability",
        "Evaluation of compliance and regulatory exposure",
        "Industry and competitor benchmarking"
      ],
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
    },
    {
      title: "Design Tailored Solutions",
      points: [
        "Customized financial planning and accounting frameworks",
        "Selection of suitable compliance and tax strategies",
        "Process improvemnet and control structuring"
      ],
      img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc"
    }
  ];

  return (
    <section
      className={`py-20 px-6 min-h-screen bg-cover bg-center relative ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
      style={{
        backgroundImage: darkMode
          ? "url('/images/dark_background_img.png')"
          : "url('/images/image1.jpeg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="h-6"></div>

        {/* ---------- PAGE TITLE ---------- */}
        <h1
          className={`text-4xl md:text-5xl font-extrabold tracking-wide text-center mb-14 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Why Choose Us
        </h1>

        {/* ---------- VISION ---------- */}
        <div
          className={`rounded-2xl shadow-lg p-6 md:p-8 mb-12 backdrop-blur-md transition-all duration-300 ${
            darkMode ? "bg-gray-800/50" : "bg-white/75"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              alt="Vision"
              className="w-full h-72 object-cover rounded-xl shadow-md"
            />
            <div>
              <h2 className="text-3xl font-bold mb-3">Our Vision</h2>
              <p className="text-lg opacity-90 leading-relaxed">
                To help businesses move forward with confidence.
              </p>
            </div>
          </div>
        </div>

        {/* ---------- MISSION ---------- */}
        <div
          className={`rounded-2xl shadow-lg p-6 md:p-8 mb-12 backdrop-blur-md transition-all duration-300 ${
            darkMode ? "bg-gray-800/50" : "bg-white/75"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center md:flex-row-reverse">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-3">Our Mission</h2>
              <p className="text-lg opacity-90 leading-relaxed">
              To stand beside entrepreneurs not just as consultants but as partners - guiding them from validating ideas to
streamlining operations, structuring finances, building strong teams and finding true market fit
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Mission"
              className="w-full h-72 object-cover rounded-xl shadow-md order-1 md:order-2"
            />
          </div>
        </div>

        {/* ---------- OUR APPROACH ---------- */}
        <h2 className="text-4xl font-extrabold text-center mb-10">
          Our Approach
        </h2>

        {/* ⭐ FIXED GRID CENTERING ⭐ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:items-center">

          {/* ---------- LEFT SELECTOR (Perfect Center Alignment Now) ---------- */}
          <div
            className={`
              rounded-2xl p-6 shadow-xl backdrop-blur-md flex flex-col justify-start
              md:self-center
              ${darkMode ? "bg-gray-800/50" : "bg-white/80"}
            `}
          >
            <h3 className="text-2xl font-bold mb-4">Select Approach</h3>

            <div className="flex flex-col gap-4">
              {approachData.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelected(index)}
                  className={`
                    text-left px-4 py-3 rounded-xl font-semibold transition-all duration-300
                    ${
                      selected === index
                        ? "bg-[#DC143C] text-white shadow-lg scale-[1.05]"
                        : darkMode
                        ? "bg-gray-700/40 hover:bg-gray-700/60"
                        : "bg-gray-100 hover:bg-gray-200"
                    }
                  `}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          {/* ---------- RIGHT SIDE DYNAMIC CARD ---------- */}
          <div
            className={`
              md:col-span-2 rounded-2xl shadow-xl overflow-hidden 
              backdrop-blur-md transition-all duration-500
              ${darkMode ? "bg-gray-800/50" : "bg-white/90"}
            `}
          >
            {/* Image */}
            <div className="flex justify-center py-6">
              <img
                key={approachData[selected].img}
                src={approachData[selected].img}
                alt="approach-img"
                className="
                  w-2/3 h-56 object-cover rounded-xl shadow-md
                  transition-all duration-700 ease-out
                "
              />
            </div>

            {/* Title + Points */}
            <div className="px-8 pb-10 text-center">
              <h3 className="text-3xl font-bold text-[#DC143C] mb-4">
                {approachData[selected].title}
              </h3>

              <ul className="text-lg leading-relaxed opacity-90 list-disc list-inside space-y-2">
                {approachData[selected].points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
