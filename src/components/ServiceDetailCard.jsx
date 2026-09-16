import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

function ServiceDetailCard({
  title,
  shortDescription,
  description,
  image,
  features,
  reverse,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className={`grid lg:grid-cols-2 gap-12 items-center ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image */}

      <div>
        <img
          src={image}
          alt={title}
          className="w-full rounded-3xl shadow-xl object-cover"
        />
      </div>

      {/* Content */}

      <div>
        <span className="inline-block px-4 py-2 rounded-full bg-[#C9A227]/10 text-[#C9A227] font-medium text-sm mb-4">
          SmartSync Solutions
        </span>

        <h2 className="text-4xl font-bold text-[#111827] mb-4">{title}</h2>

        <p className="text-lg text-gray-600 mb-4">{shortDescription}</p>

        <p className="text-gray-600 leading-8 mb-8">{description}</p>

        {/* Features */}

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle2 className="text-[#C9A227]" size={20} />

              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <button className="bg-[#C9A227] hover:bg-[#b18e1e] transition text-white px-8 py-3 rounded-xl font-semibold">
          Get Consultation
        </button>
      </div>
    </motion.div>
  );
}

export default ServiceDetailCard;
