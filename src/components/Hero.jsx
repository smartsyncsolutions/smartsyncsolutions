import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  AudioLines,
  Cctv,
  Home,
  Pause,
  Play,
  ShieldCheck,
  Volume2,
  VolumeX,
  Wifi,
} from "lucide-react";

import heroData from "../data/heroData";

import speakerPoster from "../assets/images/speaker.png";

const VIDEO_SRC = `${import.meta.env.BASE_URL}media/smartsync-speaker-demo.mp4`;

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
  const videoRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const [isPlaying, setIsPlaying] = useState(!reduceMotion);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => setIsPlaying(false));
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);

    if (!video.muted && video.paused) {
      video.play().catch(() => {});
    }
  };

  const handleProgress = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    setProgress((video.currentTime / video.duration) * 100);
  };

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.09, delayChildren: 0.15 },
    },
  };

  const fadeUp = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 26 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative isolate flex min-h-[calc(100svh-64px)] flex-col overflow-hidden bg-[#05070C] text-white lg:min-h-[calc(100svh-80px)]">
      {/* ————— Full-screen speaker demo ————— */}
      <div aria-hidden="true" className="absolute inset-0">
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          poster={speakerPoster}
          autoPlay={!reduceMotion}
          muted
          loop
          playsInline
          preload="metadata"
          tabIndex={-1}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onVolumeChange={(event) => setIsMuted(event.currentTarget.muted)}
          onTimeUpdate={handleProgress}
          onEnded={() => setProgress(0)}
          aria-label="SmartSync speaker product demo"
          className="h-full w-full object-cover object-center"
        />

        {/* Readability layers */}
        <div className="absolute inset-0 bg-[#05070C]/60 lg:bg-[#05070C]/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070C]/95 via-[#05070C]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070C] via-[#05070C]/15 to-[#05070C]/45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_45%,rgba(201,162,39,0.16),transparent_55%)]" />
        <div className="hero-grid absolute inset-0 opacity-20" />
      </div>

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />

      {/* ————— Copy ————— */}
      <div className="relative z-10 flex flex-1 items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto w-full max-w-7xl px-5 pb-10 pt-12 text-center sm:px-8 sm:pb-14 sm:pt-16 lg:px-10 lg:py-20 lg:text-left"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#EBCB74] backdrop-blur sm:text-[11px]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#EDCD7C] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#EDCD7C]" />
            </span>
            {heroData.badge}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mx-auto mt-6 max-w-3xl text-[2.25rem] font-black leading-[1.04] tracking-tight drop-shadow-[0_10px_40px_rgba(0,0,0,0.65)] sm:text-[3rem] lg:mx-0 lg:text-[3.9rem] xl:text-[4.15rem]"
          >
            {heroData.titleLines[0]}
            <br />
            <span className="text-gold-gradient">{heroData.titleLines[1]}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-[0.97rem] leading-relaxed text-slate-300/90 sm:text-base lg:mx-0 lg:text-[1.05rem]"
          >
            {heroData.subtitle}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F2DA95] via-[#D4AF37] to-[#BE9A24] px-7 py-3.5 text-sm font-bold text-[#0A0D14] shadow-[0_20px_45px_-15px_rgba(212,175,55,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_55px_-14px_rgba(212,175,55,0.9)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EDCD7C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070C] sm:text-base"
            >
              {heroData.primaryButton}
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
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
          </motion.div>

          <motion.ul
            variants={fadeUp}
            className="mt-9 hidden flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-400 sm:flex lg:justify-start"
          >
            {solutionPills.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-1.5">
                <Icon size={14} className="text-[#C9A227]" />
                {label}
              </li>
            ))}
          </motion.ul>

          <motion.dl
            variants={fadeUp}
            className="mx-auto mt-8 hidden max-w-md grid-cols-3 gap-4 border-t border-white/15 pt-6 sm:grid lg:mx-0"
          >
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
          </motion.dl>
        </motion.div>
      </div>

      {/* ————— Demo control strip ————— */}
      <div className="relative z-20 border-t border-white/10 bg-black/35 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-5 py-3.5 sm:gap-5 sm:px-8 lg:px-10">
          <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white/90">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-80" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
            </span>
            {heroData.demo.label}
          </span>

          <div className="hidden min-w-0 sm:block">
            <p className="truncate text-xs font-bold tracking-wide text-white">
              {heroData.demo.title}
            </p>
            <p className="truncate text-[10px] text-slate-400">
              {heroData.demo.caption}
            </p>
          </div>

          <div className="ml-auto hidden flex-1 items-center gap-3 md:flex">
            <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/15">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#C9A227] to-[#F2DA95] transition-[width] duration-150 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="w-8 text-right text-[10px] font-medium tabular-nums text-slate-400">
              {String(Math.round(progress))}%
            </span>
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-2 md:ml-0">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause demo" : "Play demo"}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D4AF37] text-[#0A0D14] transition hover:bg-[#E9C766] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              {isPlaying ? <Pause size={15} /> : <Play size={15} className="ml-0.5" />}
            </button>

            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute demo" : "Mute demo"}
              aria-pressed={!isMuted}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 transition hover:border-[#D4AF37]/60 hover:text-[#EDCD7C] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            </button>

            <span className="ml-1 hidden items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500 lg:flex">
              <ShieldCheck size={13} className="text-[#C9A227]" />
              Integrated Security
            </span>
          </div>
        </div>

        {/* Mobile progress */}
        <div className="h-[2px] w-full bg-white/10 md:hidden">
          <div
            className="h-full bg-gradient-to-r from-[#C9A227] to-[#F2DA95] transition-[width] duration-150 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
