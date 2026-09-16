import { motion } from "framer-motion";
import aboutImage from "../assets/images/about.png";

function About() {
  return (
    <main className="bg-black text-white">

      {/* ================= ABOUT HERO ================= */}
      <section className="min-h-[calc(100vh-80px)] flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-4xl">

            {/* Small Label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm font-medium mb-6"
            >
              About SmartSync Solutions
            </motion.p>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Technology That
              <span className="block text-[#D4AF37]">
                Makes Life Smarter.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 max-w-2xl text-gray-400 text-lg leading-relaxed"
            >
              SmartSync Solutions brings together innovative technology,
              thoughtful design, and reliable solutions to create smarter
              spaces and better experiences.
            </motion.p>

          </div>
        </div>
      </section>


      {/* ================= WHO WE ARE ================= */}
      <section className="py-24 lg:py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* LEFT - IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-3 border border-[#D4AF37]/20 rounded-2xl" />

              <img
                src={aboutImage}
                alt="SmartSync Solutions"
                className="relative w-full h-[500px] object-cover rounded-2xl"
              />
            </motion.div>


            {/* RIGHT - CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              {/* Small Label */}
              <p className="text-[#D4AF37] uppercase tracking-[0.25em] text-sm font-medium mb-5">
                Who We Are
              </p>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Smart Technology,
                <span className="block text-[#D4AF37]">
                  Designed For You.
                </span>
              </h2>

              {/* Paragraph */}
              <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                SmartSync Solutions is focused on creating intelligent,
                connected, and secure environments through modern technology.
                We combine quality products with professional installation
                and thoughtful solutions tailored to every space.
              </p>

              <p className="mt-5 text-gray-400 leading-relaxed">
                From immersive audio and visual experiences to home
                automation and advanced security systems, we help transform
                ordinary spaces into smarter and more comfortable
                environments.
              </p>


              {/* SERVICES */}
              <div className="grid grid-cols-2 gap-4 mt-10">

                {/* Audio */}
                <div className="border border-white/10 rounded-xl p-5 hover:border-[#D4AF37]/50 transition duration-300">
                  <h3 className="text-lg font-semibold">
                    Audio Solutions
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    Premium sound experiences
                  </p>
                </div>

                {/* Video */}
                <div className="border border-white/10 rounded-xl p-5 hover:border-[#D4AF37]/50 transition duration-300">
                  <h3 className="text-lg font-semibold">
                    Video Solutions
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    Immersive visual experiences
                  </p>
                </div>

                {/* Automation */}
                <div className="border border-white/10 rounded-xl p-5 hover:border-[#D4AF37]/50 transition duration-300">
                  <h3 className="text-lg font-semibold">
                    Home Automation
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    Intelligent connected spaces
                  </p>
                </div>

                {/* CCTV */}
                <div className="border border-white/10 rounded-xl p-5 hover:border-[#D4AF37]/50 transition duration-300">
                  <h3 className="text-lg font-semibold">
                    CCTV & Security
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    Reliable security solutions
                  </p>
                </div>

              </div>

            </motion.div>

          </div>

        </div>
      </section>

    </main>
  );
}

export default About;