import Hero from "../components/Hero";
import TechnologyCard from "../components/TechnologyCard";
import ServicesCard from "../components/ServicesCard";

import SectionTitle from "../components/Common/SectionTitle";

import technologies from "../data/technologies";
import services from "../data/servicesData";
import AboutSection from "../components/AboutSection";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Technologies Section */}
      <motion.section
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="bg-[#F8F7F4] pt-8 pb-20"
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-[#111827]">
              Our Technologies
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto mt-5 rounded-full"></div>

            <p className="text-gray-600 mt-5 max-w-2xl mx-auto leading-7">
              SmartSync delivers premium automation, surveillance, networking
              and audio visual solutions for modern homes and businesses.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <TechnologyCard
                key={tech.id}
                icon={tech.icon}
                title={tech.title}
                description={tech.description}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= Services ================= */}

      <motion.section
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="bg-white py-20"
      >
        <div className="max-w-7xl mx-auto px-5">
          <SectionTitle
            title="Our Services"
            subtitle="Complete automation, surveillance and networking solutions designed for modern homes and businesses."
            center
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServicesCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </motion.section>
      <AboutSection />
    </>
  );
}

export default Home;
