import { useEffect, useState, useRef } from "react";
import { Pause, Play, ChevronLeft, ChevronRight, Briefcase, TrendingUp, Users } from "lucide-react";

const services = [
  {
    title: "Financial Consulting",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
    desc: "Optimizing financial performance and managing risk.",
    icon: <Briefcase size={28} className="text-red-600 mx-auto" />,
  },
  {
    title: "Marketing Consulting",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312",
    desc: "Driving brand growth and market positioning.",
    icon: <TrendingUp size={28} className="text-red-600 mx-auto" />,
  },
  {
    title: "HR Consulting",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    desc: "Building high-performing teams and leadership.",
    icon: <Users size={28} className="text-red-600 mx-auto" />,
  },
];

const companies = [
  {
    name: "TechCorp",
    logo: "https://dummyimage.com/200x200/000/fff&text=TechCorp",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
    desc: "Delivering advanced software solutions and IT services.",
    services: ["Financial Consulting", "Marketing Consulting"],
  },
  {
    name: "HealthPlus",
    logo: "https://dummyimage.com/200x200/000/fff&text=HealthPlus",
    image: "https://images.unsplash.com/photo-1586772006610-2f4e4d07137a",
    desc: "Innovative healthcare services for patient well‑being.",
    services: ["HR Consulting", "Financial Consulting"],
  },
  {
    name: "EcoEnergy",
    logo: "https://dummyimage.com/200x200/000/fff&text=EcoEnergy",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
    desc: "Sustainable energy solutions for a greener tomorrow.",
    services: ["Marketing Consulting", "HR Consulting"],
  },
];

export default function Services({ darkMode }) {
  const [paused, setPaused] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);
  const containerRef = useRef(null);
  const posRef = useRef(0); // track slider position
  const animationRef = useRef(null);
  const speed = 0.7; // adjust speed

  // Desktop + Mobile Slider Animation
  useEffect(() => {
    const animate = () => {
      if (!paused && containerRef.current) {
        const width = containerRef.current.scrollWidth / 2;
        posRef.current += speed;
        if (posRef.current >= width) posRef.current = 0;
        containerRef.current.style.transform = `translateX(-${posRef.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [paused]);

  const moveLeft = () => {
    if (containerRef.current) {
      posRef.current = Math.max(posRef.current - 200, 0);
      containerRef.current.style.transform = `translateX(-${posRef.current}px)`;
    }
  };

  const moveRight = () => {
    if (containerRef.current) {
      posRef.current += 200;
      containerRef.current.style.transform = `translateX(-${posRef.current}px)`;
    }
  };

  return (
    <section
      className={`py-32 px-4 bg-cover bg-center min-h-screen ${darkMode ? "dark" : ""}`}
      style={{
        backgroundImage: darkMode
          ? "url('/images/dark_background_img.png')"
          : "url('/images/image1.jpeg')",
      }}
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white drop-shadow-lg">
          Our Expertise
        </h2>
        <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full" />
      </div>

      {/* Slider */}
      <div
        className="relative max-w-5xl mx-auto bg-white/70 dark:bg-gray-800/70 rounded-3xl shadow-2xl overflow-hidden p-4 backdrop-blur-md"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="slider-track flex gap-4"
          ref={containerRef}
          style={{ willChange: "transform" }} // improves performance
        >
          {[...services, ...services].map((service, i) => (
            <div
              key={i}
              className="service-card min-w-[300px] max-w-[350px] rounded-xl overflow-hidden cursor-pointer relative"
            >
              <img src={service.image} alt={service.title} className="w-full h-64 object-cover" />
              <div className="service-overlay absolute inset-0 bg-black/50 flex justify-center items-center text-white text-center p-4 opacity-0 transition-opacity duration-300 hover:opacity-100">
                <p className="text-lg md:text-xl">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="mt-4 flex justify-center gap-4">
          <button onClick={moveLeft} className="glass-btn">
            <ChevronLeft size={17} />
          </button>
          <button onClick={() => setPaused(!paused)} className="glass-btn">
            {paused ? <Play size={17} /> : <Pause size={17} />}
          </button>
          <button onClick={moveRight} className="glass-btn">
            <ChevronRight size={17} />
          </button>
        </div>
      </div>

      {/* Highlights */}
      <div className="mt-16 flex flex-wrap justify-center gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-6 rounded-xl shadow-lg w-72 text-center"
          >
            {service.icon}
            <h3 className="font-semibold text-lg text-black dark:text-white">{service.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Company Section */}
      <div className="mt-20 max-w-6xl mx-auto">
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row gap-8 items-start">
          {/* Left: Dropdown + services */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
              Select a company to see its services:
            </h3>
            <select
              value={selectedCompany.name}
              onChange={(e) =>
                setSelectedCompany(companies.find((c) => c.name === e.target.value))
              }
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 w-full focus:outline-none focus:ring-2 focus:ring-red-600 dark:bg-gray-800 dark:text-white"
            >
              {companies.map((company) => (
                <option key={company.name} value={company.name}>
                  {company.name}
                </option>
              ))}
            </select>

            <p className="mt-4 text-gray-700 dark:text-gray-300">
              Choose from a selection of companies to view their key offerings and details. The information updates automatically as you select different companies.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedCompany.services.map((s) => {
                const service = services.find((svc) => svc.title === s);
                return (
                  <div
                    key={s}
                    className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 p-4 rounded-xl flex flex-col items-center text-center shadow-md"
                  >
                    {service.icon}
                    <p className="mt-2 font-semibold">{service.title}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Company Card */}
          <div
            className="flex-1 rounded-2xl overflow-hidden shadow-lg p-6 relative"
            style={{
              backgroundImage: `url(${selectedCompany.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-black/60 dark:bg-black/50 p-6 rounded-2xl text-center text-white">
              <img
                src={selectedCompany.logo}
                alt={selectedCompany.name}
                className="w-28 h-28 object-contain mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">{selectedCompany.name}</h3>
              <p>{selectedCompany.desc}</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-28 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Let’s Build Your Growth Strategy
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Speak with our experts and discover what’s possible.
        </p>
        <button className="mt-8 px-8 py-4 bg-red-900 text-white rounded-xl hover:bg-red-700 transition">
          Book a Consultation
        </button>
      </div>
    </section>
  );
}
