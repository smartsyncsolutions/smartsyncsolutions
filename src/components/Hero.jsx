import { Link } from "react-router-dom";
import { ArrowRight, AudioLines, Cctv, Home, Play, Wifi } from "lucide-react";

import HeroCarousel from "./HeroCarousel";
import heroData from "../data/heroData";

const solutionPills = [
  { icon: Home, label: "Home Automation" },
  { icon: AudioLines, label: "AV Systems" },
  { icon: Wifi, label: "Enterprise WiFi" },
  { icon: Cctv, label: "CCTV" },
];

const stats = [
  { value: "24×7", label: "Support" },
  { value: "100%", label: "Satisfaction" },
  { value: "360°", label: "Integration" },
];

function Hero() {
  return (
    <HeroCarousel badge={heroData.badge}>
      <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
        <Link
          to="/contact"
          className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#F2DA95] via-[#D4AF37] to-[#BE9A24] px-7 py-3.5 text-sm font-bold text-[#0A0D14] shadow-[0_20px_45px_-15px_rgba(212,175,55,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_55px_-14px_rgba(212,175,55,0.9)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EDCD7C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070C] sm:text-base"
        >
          {/* CTA sheen — the hover flourish from the reference shot */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
          />
          <span className="relative">{heroData.primaryButton}</span>
          <ArrowRight
            size={18}
            className="relative transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

        <Link
          to="/services"
          className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-white/[0.06] px-7 py-3.5 text-sm font-semibold text-white/90 backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37]/60 hover:bg-white/[0.1] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:text-base"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/15 text-[#EDCD7C] transition-colors duration-300 group-hover:bg-[#D4AF37]/25">
            <Play size={11} className="ml-0.5" />
          </span>
          {heroData.secondaryButton}
        </Link>
      </div>

      <ul className="mt-9 hidden flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-400 sm:flex lg:justify-start">
        {solutionPills.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-center gap-1.5">
            <Icon size={14} className="text-[#C9A227]" />
            {label}
          </li>
        ))}
      </ul>

      <dl className="mx-auto mt-8 hidden max-w-md grid-cols-3 gap-4 border-t border-white/15 pt-6 sm:grid lg:mx-0">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center lg:text-left">
            <dt className="sr-only">{stat.label}</dt>
            <dd className="text-2xl font-extrabold text-white drop-shadow sm:text-3xl">
              {stat.value}
            </dd>
            <dd className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              {stat.label}
            </dd>
          </div>
        ))}
      </dl>
    </HeroCarousel>
  );
}

export default Hero;
