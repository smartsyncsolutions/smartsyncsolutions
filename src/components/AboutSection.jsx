import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "./Common/SectionTitle";
import aboutData from "../data/aboutData";

import AboutImage from "../assets/images/about.png";

function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="bg-[#F8F7F4] py-20"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <SectionTitle
          title={aboutData.title}
          subtitle={aboutData.description}
          center
        />

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image */}

          <div>
            <img
              src={AboutImage}
              alt="About SmartSync"
              className="w-full rounded-3xl shadow-xl"
            />
          </div>

          {/* Features */}

          <div>
            <h3 className="text-3xl font-bold text-[#111827] mb-8">
              Why Choose Us
            </h3>

            <div className="space-y-6">
              {aboutData.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-200 hover:border-[#C9A227] hover:shadow-lg transition"
                >
                  <CheckCircle2 className="text-[#C9A227]" size={26} />

                  <p className="text-gray-700 font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default AboutSection;
