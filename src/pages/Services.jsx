import { motion } from "framer-motion";

import SectionTitle from "../components/Common/SectionTitle";
import ServiceDetailCard from "../components/ServiceDetailCard";

import servicesPageData from "../data/servicesPageData";

function Services() {
  return (
    <>
      {/* ================= Hero ================= */}

      <section className="bg-[#050505] text-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-28 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-black"
          >
            Our <span className="text-[#C9A227]">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 mt-6 max-w-3xl mx-auto leading-8"
          >
            We deliver intelligent technology solutions that combine innovation,
            security and luxury to transform homes, offices and commercial
            environments.
          </motion.p>
        </div>
      </section>

      {/* ================= Services ================= */}

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <SectionTitle
            title="What We Offer"
            subtitle="Premium technology solutions designed for modern lifestyles and businesses."
            center
          />

          <div className="space-y-28">
            {servicesPageData.map((service, index) => (
              <ServiceDetailCard
                key={service.id}
                title={service.title}
                shortDescription={service.shortDescription}
                description={service.description}
                image={service.image}
                features={service.features}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
