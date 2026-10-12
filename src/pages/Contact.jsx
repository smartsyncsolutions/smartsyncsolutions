import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

function Contact() {
  return (
    <main className="bg-black text-white">

      {/* ================= CONTACT HERO ================= */}
      <section className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm font-medium mb-6">
              Contact Us
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Let's Create
              <span className="block text-[#D4AF37]">
                Something Smarter.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-gray-400 text-lg leading-relaxed">
              Have a project in mind? Whether you need smart home
              automation, premium audio, video solutions, or advanced
              security systems, we'd love to hear from you.
            </p>
          </motion.div>

        </div>
      </section>


      {/* ================= CONTACT SECTION ================= */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">

            {/* ================= CONTACT INFO ================= */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2"
            >

              <h2 className="text-3xl font-bold mb-8">
                Get In Touch
              </h2>

              <p className="text-gray-400 leading-relaxed mb-10">
                Tell us about your requirements and our team will
                get back to you with the right solution for your space.
              </p>


              {/* PHONE */}
              <div className="flex items-start gap-5 mb-7">
                <div className="w-12 h-12 rounded-full border border-[#D4AF37]/40 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#D4AF37]" />
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Phone
                  </p>

                  <a
                    href="tel:+919999999999"
                    className="text-lg hover:text-[#D4AF37] transition"
                  >
                    +91 83560 87223 
                  </a>
                </div>
              </div>


              {/* EMAIL */}
              <div className="flex items-start gap-5 mb-7">
                <div className="w-12 h-12 rounded-full border border-[#D4AF37]/40 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#D4AF37]" />
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Email
                  </p>

                  <a
                    href="mailto:info@smartsyncsolutions.com"
                    className="text-lg hover:text-[#D4AF37] transition"
                  >
                    smartsyncsolutions2018@gmail.com

                  </a>
                </div>
              </div>


              {/* LOCATION */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full border border-[#D4AF37]/40 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Location
                  </p>

                  <p className="text-lg">
                    Mumbai, Maharashtra
                  </p>
                </div>
              </div>


              {/* GOLD LINE */}
              <div className="mt-12 w-20 h-[2px] bg-[#D4AF37]" />

            </motion.div>


            {/* ================= CONTACT FORM ================= */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >

              <div className="bg-[#111111] border border-white/10 rounded-2xl p-7 md:p-10">

                <h2 className="text-2xl font-bold mb-2">
                  Send Us a Message
                </h2>

                <p className="text-gray-500 mb-8">
                  Fill out the form and we'll get back to you.
                </p>


                <form className="space-y-6">

                  {/* NAME + PHONE */}
                  <div className="grid md:grid-cols-2 gap-6">

                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Your Name
                      </label>

                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-[#D4AF37] transition"
                      />
                    </div>


                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        placeholder="Enter your phone"
                        className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-[#D4AF37] transition"
                      />
                    </div>

                  </div>


                  {/* EMAIL */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-[#D4AF37] transition"
                    />
                  </div>


                  {/* SERVICE */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Service Required
                    </label>

                    <select
                      className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-gray-400 outline-none focus:border-[#D4AF37] transition"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      <option>Audio Solutions</option>
                      <option>Video Solutions</option>
                      <option>Home Automation</option>
                      <option>CCTV & Surveillance</option>
                      <option>Other</option>
                    </select>
                  </div>


                  {/* MESSAGE */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Message
                    </label>

                    <textarea
                      rows="5"
                      placeholder="Tell us about your project..."
                      className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-[#D4AF37] transition resize-none"
                    />
                  </div>


                  {/* BUTTON */}
                  <button
                    type="submit"
                    className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#D4AF37] text-black font-semibold px-7 py-3.5 rounded-lg hover:bg-[#e5c45a] transition duration-300"
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5" />
                  </button>

                </form>

              </div>

            </motion.div>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Contact;
