import { useState } from "react";

export default function ABOUT() {
  return (
    <section
      className={`py-20 px-6 min-h-screen bg-cover bg-center relative bg-gray-50 text-gray-900 dark:bg-white-900 dark:text-black`}
      style={{
        backgroundImage: "url('/images/image1.jpeg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      {/* 🔥 Glow animation for founder card */}
      <style>
        {`
          @keyframes glowingBorder {
            0% { box-shadow: 0 0 5px rgba(220,20,60,0.4); }
            50% { box-shadow: 0 0 25px rgba(220,20,60,0.9); }
            100% { box-shadow: 0 0 5px rgba(220,20,60,0.4); }
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto">
        {/* ----------- INTRO SECTION ----------- */}
        <div className="text-center mt-6 mb-12">
          <div className="h-6"></div>
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-wide mb-6 select-none"
          >
            <span
              className="inline-block px-4 pb-1 border-b-4 rounded-md tracking-wider"
              style={{ borderColor: "crimson" }}
            >
              Who We Are
            </span>
          </h2>

          <div
            className="mx-auto rounded-xl p-8 shadow-xl backdrop-blur-md text-lg md:text-xl leading-relaxed
              bg-white/80 dark:bg-white-800 animate-fadeIn"
          >
            <p className="font-medium">
              Aaravi Consulting is dedicated to empowering startups and established businesses. Recognizing the common hurdles
              encountered by founders, we established Aaravi Consulting to facilitate the transition from conceptualization
              to successful implementation, fostering growth through optimized financial, marketing, and human resources strategies.
            </p>
          </div>
        </div>

        {/* ----------- FOUNDER SECTION ----------- */}
        <h2 className="text-3xl font-bold mb-6">Founder</h2>

        <div
          className="rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6 backdrop-blur-md transition-all duration-300 
            bg-white/80 dark:bg-white-800 hover:animate-[glowingBorder_2.5s_linear_infinite]"
        >
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="Founder"
            className="w-40 h-40 object-cover rounded-xl shadow-md"
          />

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-1">John Doe</h3>
            <p className="font-medium mb-3 opacity-80">Founder & CEO</p>
            <p className="text-md opacity-90 leading-relaxed">
              John leads with vision, innovation, and a passion for building
              products that truly make a difference. His leadership defines the
              culture, direction, and ambition of our company.
            </p>
          </div>
        </div>

        {/* ----------- TEAM SECTION ----------- */}
        <h2 className="text-3xl font-bold mt-20 mb-6 text-center">Our Team</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TeamCard
            img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
            name="Emily Carter"
            role="Lead Developer"
            text="Emily ensures our systems are stable, scalable, and future-ready."
          />

          <TeamCard
            img="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
            name="Michael Smith"
            role="UI/UX Designer"
            text="Michael designs elegant, intuitive, and user-centered interfaces."
          />

          <TeamCard
            img="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1"
            name="Sophia Williams"
            role="Project Manager"
            text="Sophia drives seamless execution and smooth product delivery."
          />
        </div>
      </div>
    </section>
  );
}

function TeamCard({ img, name, role, text }) {
  return (
    <div
      className="rounded-2xl shadow-lg p-6 text-center backdrop-blur-md hover:scale-[1.05] duration-300
        bg-white/80 dark:bg-white-800"
    >
      <img
        src={img}
        alt={name}
        className="w-32 h-32 mx-auto rounded-full object-cover shadow-md mb-4"
      />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-sm opacity-70 mb-2">{role}</p>
      <p className="text-sm opacity-85">{text}</p>
    </div>
  );
}