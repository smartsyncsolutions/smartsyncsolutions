import heroData from "../data/heroData";
import Button from "./Common/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";

import Hero1 from "../assets/images/speaker.png";
import Hero2 from "../assets/images/demo-room.png";
import Hero3 from "../assets/images/cctv.png";

function Hero() {
  return (
    <motion.section
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
  className="relative overflow-hidden bg-gradient-to-br from-[#0B1120] via-[#111827] to-[#1B2433] text-white border-b border-[#202938]"
>
      <div className="relative max-w-7xl mx-auto min-h-[calc(100vh-80px)] flex items-center px-5 sm:px-8 lg:px-10 pt-8 pb-10 lg:py-0">
        {" "}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16 w-full">
          {/* LEFT */}

          <div className="order-2 lg:order-1 text-center lg:text-left">
            <span className="inline-flex items-center px-5 py-2 rounded-full border border-gold bg-gold/10 text-gold uppercase tracking-widest text-xs font-semibold">
              {heroData.badge}
            </span>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-black leading-tight">
              Connecting Technology.
              <br />
              <span className="text-gold">Securing Tomorrow.</span>
            </h1>

            <p className="mt-5 text-gray-400 text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              {heroData.subtitle}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button text={heroData.primaryButton} />

              <Button text={heroData.secondaryButton} variant="secondary" />
            </div>

            {/* Stats */}

            <div className="mt-8 flex justify-center lg:justify-start gap-12">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-gold">24×7</h3>

                <p className="text-gray-500 text-sm mt-2">Support</p>
              </div>

              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-gold">100%</h3>

                <p className="text-gray-500 text-sm mt-2">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="order-1 lg:order-2 flex justify-center">
            <div
              className="relative w-full max-w-lg h-[240px]
sm:h-[320px]
md:h-[380px]
lg:h-[430px]
xl:h-[500px] rounded-3xl overflow-hidden border border-[#2a2a2a] shadow-[0_20px_70px_rgba(212,175,55,0.15)]"
            >
              <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                loop={true}
                speed={1800}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                className="h-full"
              >
                {[Hero1, Hero2, Hero3].map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`Hero ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Fade */}
    </motion.section>
  );
}

export default Hero;
