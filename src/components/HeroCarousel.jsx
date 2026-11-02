import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";

import heroData from "../data/heroData";

import homeAutomationPoster from "../assets/images/home-automation.png";
import speakerPoster from "../assets/images/speaker.png";
import lightingPoster from "../assets/images/demo-room.png";
import networkingPoster from "../assets/images/networking.png";
import cctvPoster from "../assets/images/cctv.png";

/* ------------------------------------------------------------------
   Slide data — edit everything here.
   - video:  put your files in /public/media and reference them as
             `${MEDIA_BASE}media/slide-1.mp4` (already prefixed below).
             Set video: null to show the poster image only.
   - poster: bundled image, also used as the video poster / fallback.
   - tint:   optional per-slide colour wash (Tailwind class string).
   - filter: optional CSS filter, used to tone footage up or down.
   - startAt: seconds into the clip where that slide should begin.
   ------------------------------------------------------------------ */
const MEDIA_BASE = import.meta.env.BASE_URL;

// Only two clips exist so far, so both are spread across the five slides
// at different start points. Drop more files into /public/media and add
// a `video` path below to give a slide its own footage.
const THEATER_VIDEO = `${MEDIA_BASE}media/hero-automation.mp4`; // 1080×1920, speaker / AV room
const SECURITY_VIDEO = `${MEDIA_BASE}media/hero-brand.mp4`; // 4096×2160, camera + phone

// The AV-room clip is graded very dark; lift it so the speaker reads.
const THEATER_FILTER = "brightness(1.28) contrast(1.02) saturate(1.12)";

// The studio clip is shot on white; a light tone-down stops it glaring.
const SECURITY_FILTER = "brightness(0.9) contrast(1.05) saturate(0.85)";

const heroSlides = [
  {
    id: "home-theater",
    label: "Home Theater",
    title: "Cinema at Home.",
    accent: "Tuned to Perfection.",
    subtitle:
      "Dolby-calibrated home theaters with immersive surround and invisible integration.",
    video: THEATER_VIDEO,
    poster: speakerPoster,
    startAt: 0.4,
    position: "lg:object-[center_42%]",
    zoom: "lg:scale-[1.02]",
    filter: THEATER_FILTER,
    tint: "bg-[radial-gradient(circle_at_78%_40%,rgba(245,158,11,0.22),transparent_55%)]",
  },
  {
    id: "home-automation",
    label: "Home Automation",
    title: heroData.titleLines[0],
    accent: heroData.titleLines[1],
    subtitle: heroData.subtitle,
    video: SECURITY_VIDEO,
    poster: homeAutomationPoster,
    startAt: 6.4,
    position: "lg:object-[72%_30%]",
    zoom: "lg:scale-[1.18]",
    filter: "sepia(0.28) hue-rotate(-8deg) brightness(0.82) contrast(1.08) saturate(1.05)",
    tint: "bg-[radial-gradient(circle_at_72%_45%,rgba(201,162,39,0.20),transparent_58%)]",
  },
  {
    id: "architectural-lighting",
    label: "Architectural Lighting",
    title: "Light That Shapes.",
    accent: "Space That Breathes.",
    subtitle:
      "Scene-based architectural lighting that shapes mood, focus and atmosphere.",
    video: THEATER_VIDEO,
    poster: lightingPoster,
    startAt: 2,
    position: "lg:object-[center_4%]",
    zoom: "lg:scale-[1.14]",
    filter: "brightness(1.5) contrast(1.08) saturate(1.15) hue-rotate(-8deg)",
    tint: "bg-[radial-gradient(circle_at_70%_60%,rgba(253,224,71,0.18),transparent_60%)]",
  },
  {
    id: "smart-wifi",
    label: "Smart WiFi & Networking",
    title: "Seamless Coverage.",
    accent: "Every Corner.",
    subtitle:
      "Enterprise-grade mesh WiFi with seamless roaming across every room and floor.",
    video: SECURITY_VIDEO,
    poster: networkingPoster,
    startAt: 10.2,
    position: "lg:object-[28%_45%]",
    zoom: "lg:scale-[1.35]",
    filter: "hue-rotate(18deg) saturate(0.68) brightness(0.8) contrast(1.12)",
    tint: "bg-[radial-gradient(circle_at_75%_35%,rgba(56,189,248,0.18),transparent_58%)]",
  },
  {
    id: "cctv",
    label: "CCTV & Security",
    title: "Always Watching.",
    accent: "Always Secure.",
    subtitle:
      "AI-assisted surveillance with crystal-clear imaging and instant mobile alerts.",
    video: SECURITY_VIDEO,
    poster: cctvPoster,
    startAt: 0.8,
    position: "lg:object-[center_50%]",
    zoom: "lg:scale-[1.02]",
    filter: SECURITY_FILTER,
    tint: "bg-[radial-gradient(circle_at_72%_55%,rgba(148,163,184,0.20),transparent_60%)]",
  },
];

const SLIDE_EASE = [0.76, 0, 0.24, 1];

const pad = (value) => String(value).padStart(2, "0");

/* Autoplay progress for the active indicator. Lives in its own
   component so the 60fps rAF tick never re-renders the carousel. */
function SlideProgress({ duration, paused, onComplete }) {
  const fillRef = useRef(null);
  const elapsed = useRef(0);
  const completeRef = useRef(onComplete);

  useEffect(() => {
    completeRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (paused) return undefined;

    let frame;
    let last = performance.now();

    const tick = (now) => {
      elapsed.current += now - last;
      last = now;

      const ratio = Math.min(elapsed.current / duration, 1);
      if (fillRef.current) {
        fillRef.current.style.transform = `scaleX(${ratio})`;
      }

      if (ratio >= 1) {
        completeRef.current?.();
        return;
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, paused]);

  return (
    <span
      ref={fillRef}
      style={{ transform: "scaleX(0)" }}
      className="block h-full w-full origin-left rounded-full bg-gradient-to-r from-[#C9A227] to-[#F2DA95]"
    />
  );
}

/* Video with poster + gradient fallback. Muted state is kept in sync
   imperatively because the `muted` attribute is unreliable after mount. */
function SlideMedia({ slide, muted, startAt = 0 }) {
  const videoRef = useRef(null);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted;
  }, [muted]);

  // Skip past the opening frames so each slide starts on a readable shot.
  const handleLoadedMetadata = (event) => {
    const video = event.currentTarget;
    if (startAt > 0 && Number.isFinite(video.duration) && video.duration > 0) {
      video.currentTime = startAt % video.duration;
    }
  };

  const showVideo = Boolean(slide.video) && !videoFailed;
  const mediaStyle = slide.filter ? { filter: slide.filter } : undefined;
  // Crop and zoom are desktop-only so phones keep the subject centred.
  const mediaClass = `absolute inset-0 h-full w-full object-cover object-center ${slide.position ?? ""} ${slide.zoom ?? ""}`;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Placeholder gradient — always present, visible if assets fail */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#111827] to-[#1B2433]" />

      {showVideo ? (
        <video
          ref={videoRef}
          src={slide.video}
          poster={slide.poster}
          muted={muted}
          autoPlay
          loop
          playsInline
          preload="metadata"
          tabIndex={-1}
          style={mediaStyle}
          onLoadedMetadata={handleLoadedMetadata}
          onError={() => setVideoFailed(true)}
          className={mediaClass}
        />
      ) : (
        slide.poster && (
          <img
            src={slide.poster}
            alt=""
            style={mediaStyle}
            className={`animate-kenburns origin-center ${mediaClass}`}
          />
        )
      )}

      {slide.tint && (
        <div className={`absolute inset-0 ${slide.tint}`} aria-hidden="true" />
      )}
    </div>
  );
}

function HeroCarousel({
  slides = heroSlides,
  badge = heroData.badge,
  interval = 6000,
  children,
  className = "",
}) {
  const reduceMotion = useReducedMotion();
  const total = slides.length;

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [muted, setMuted] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);
  const [dragging, setDragging] = useState(false);

  const pointer = useRef(null);
  const active = slides[index];

  const goTo = useCallback(
    (target, dir = 1) => {
      if (total < 2) return;
      setDirection(dir);
      setIndex(((target % total) + total) % total);
    },
    [total],
  );

  const next = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1, -1), [goTo, index]);

  useEffect(() => {
    const onVisibility = () => setTabHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const canAutoplay = total > 1 && !reduceMotion;
  const paused = !canAutoplay || hovered || focused || tabHidden || dragging;

  // Keyboard navigation — ArrowLeft / ArrowRight, Home / End.
  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      prev();
    } else if (event.key === "Home") {
      event.preventDefault();
      goTo(0, -1);
    } else if (event.key === "End") {
      event.preventDefault();
      goTo(total - 1, 1);
    }
  };

  // Touch / pointer swipe. Vertical scrolling is left to the browser
  // via `touch-action: pan-y`, so only horizontal intent changes slides.
  const handlePointerDown = (event) => {
    if (event.target.closest("button, a")) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;

    pointer.current = { x: event.clientX, y: event.clientY };
    setDragging(true);

    // Keep receiving pointerup even if the finger leaves the hero.
    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      /* synthetic pointer events have no capture target — safe to ignore */
    }
  };

  const endPointer = (event) => {
    const start = pointer.current;
    pointer.current = null;
    setDragging(false);

    if (!start) return;

    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;

    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.2) {
      if (dx < 0) next();
      else prev();
    }
  };

  /* Slide transition: outgoing slide slides away, dims and scales
     slightly; incoming slide arrives from the opposite edge with a
     subtle scale settle. Transform + opacity only (GPU friendly). */
  const slideVariants = reduceMotion
    ? {
        enter: { opacity: 0 },
        center: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        enter: (dir) => ({
          x: dir >= 0 ? "100%" : "-100%",
          scale: 1.06,
        }),
        center: { x: 0, scale: 1 },
        exit: (dir) => ({
          x: dir >= 0 ? "-14%" : "14%",
          scale: 1.04,
          opacity: 0,
        }),
      };

  const slideTransition = {
    duration: reduceMotion ? 0.4 : 1,
    ease: SLIDE_EASE,
  };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
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
    <section
      role="region"
      aria-roledescription="carousel"
      aria-label="SmartSync solutions carousel. Use the left and right arrow keys to change slides."
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={(event) => {
        // Only keyboard focus pauses autoplay — a mouse click on a control
        // would otherwise stop the carousel until the user clicked away.
        if (event.target.matches(":focus-visible")) setFocused(true);
      }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setFocused(false);
        }
      }}
      onPointerDown={handlePointerDown}
      onPointerUp={endPointer}
      onPointerCancel={endPointer}
      style={{ touchAction: "pan-y" }}
      className={`relative isolate flex min-h-[calc(100svh-64px)] flex-col overflow-hidden bg-[#05070C] text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D4AF37]/70 lg:min-h-[calc(100svh-80px)] ${className}`}
    >
      {/* ————— Animated media ————— */}
      <div aria-hidden="true" className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={active.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTransition}
            className="absolute inset-0 z-0 will-change-transform"
          >
            <SlideMedia slide={active} muted={muted} startAt={active.startAt} />
          </motion.div>
        </AnimatePresence>

        {/* Readability layers sit above the media, below the copy */}
        <div className="absolute inset-0 bg-[#05070C]/25 lg:bg-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070C]/85 via-[#05070C]/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070C]/85 via-transparent to-[#05070C]/20" />
        <div className="hero-grid absolute inset-0 opacity-20" />
      </div>

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />

      {/* ————— Copy ————— */}
      <div className="relative z-10 flex flex-1 items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto w-full max-w-7xl px-5 pb-10 pt-12 text-center sm:px-8 sm:pb-14 sm:pt-16 lg:px-10 lg:py-10 lg:text-left"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#EBCB74] backdrop-blur sm:text-[11px]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#EDCD7C] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#EDCD7C]" />
            </span>
            {badge}
          </motion.span>

          {/* min-height keeps the CTAs anchored while slide copy swaps */}
          <div
            aria-live={paused ? "polite" : "off"}
            aria-atomic="true"
            className="relative mt-6 min-h-[11.75rem] sm:min-h-[11.5rem] lg:min-h-[13.5rem]"
          >
            <p className="sr-only">
              Slide {index + 1} of {total}: {active.label}
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: reduceMotion ? 0.25 : 0.45,
                    delay: reduceMotion ? 0 : 0.05,
                    ease: SLIDE_EASE,
                  },
                }}
                exit={
                  reduceMotion
                    ? { opacity: 0, transition: { duration: 0.2 } }
                    : {
                        opacity: 0,
                        y: -12,
                        transition: { duration: 0.2, ease: "easeIn" },
                      }
                }
              >
                <h1 className="mx-auto max-w-3xl text-[2.25rem] font-black leading-[1.04] tracking-tight drop-shadow-[0_10px_40px_rgba(0,0,0,0.65)] sm:text-[3rem] lg:mx-0 lg:text-[3.9rem] xl:text-[4.15rem]">
                  {active.title}
                  <br />
                  <span className="text-gold-gradient">{active.accent}</span>
                </h1>

                <p className="mx-auto mt-6 max-w-xl text-[0.97rem] leading-relaxed text-slate-300/90 sm:text-base lg:mx-0 lg:text-[1.05rem]">
                  {active.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTAs, pills and stats are passed in from Hero and keep their
              staggered entrance */}
          {Array.isArray(children)
            ? children.map((child, i) =>
                child ? (
                  <motion.div key={i} variants={fadeUp}>
                    {child}
                  </motion.div>
                ) : null,
              )
            : children && <motion.div variants={fadeUp}>{children}</motion.div>}
        </motion.div>
      </div>

      {/* ————— Side arrows (wide screens) ————— */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 hidden items-center justify-between px-4 min-[1400px]:flex lg:px-6">
        <button
          type="button"
          data-carousel-prev
          onClick={prev}
          aria-label="Previous slide"
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white/80 backdrop-blur-md transition hover:border-[#D4AF37]/70 hover:bg-black/55 hover:text-[#EDCD7C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EDCD7C]"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          type="button"
          data-carousel-next
          onClick={next}
          aria-label="Next slide"
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white/80 backdrop-blur-md transition hover:border-[#D4AF37]/70 hover:bg-black/55 hover:text-[#EDCD7C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EDCD7C]"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* ————— Control bar ————— */}
      <div className="relative z-20 mt-auto border-t border-white/10 bg-black/35 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-5 py-3 sm:px-8 lg:px-10">
          <div className="hidden shrink-0 items-center gap-2.5 sm:flex">
            <span className="text-[11px] font-bold tabular-nums text-[#EDCD7C]">
              {pad(index + 1)}
            </span>
            <span className="h-px w-5 bg-white/25" />
            <span className="text-[11px] tabular-nums text-slate-500">
              {pad(total)}
            </span>
          </div>

          {/* Numbered indicators double as the autoplay progress */}
          <div
            role="group"
            aria-label="Slide indicators"
            className="mr-auto flex items-center gap-0.5 sm:mx-auto sm:gap-1"
          >
            {slides.map((slide, i) => {
              const isActive = i === index;

              return (
                <button
                  key={slide.id}
                  type="button"
                  data-carousel-dot={i}
                  onClick={() => goTo(i, i >= index ? 1 : -1)}
                  aria-label={`Go to slide ${i + 1}: ${slide.label}`}
                  aria-current={isActive ? "true" : undefined}
                  className="group relative px-1.5 pb-2 pt-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EDCD7C]"
                >
                  <span
                    className={`block text-[10px] font-semibold tabular-nums tracking-[0.16em] transition-colors ${
                      isActive
                        ? "text-[#EDCD7C]"
                        : "text-white/35 group-hover:text-white/75"
                    }`}
                  >
                    {pad(i + 1)}
                  </span>

                  <span className="absolute inset-x-1.5 bottom-0.5 h-[2px] overflow-hidden rounded-full bg-white/10">
                    {isActive && (
                      <SlideProgress
                        key={active.id}
                        duration={interval}
                        paused={paused}
                        onComplete={next}
                      />
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex shrink-0 items-center gap-1.5">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/75 transition hover:border-[#D4AF37]/60 hover:text-[#EDCD7C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EDCD7C] min-[1400px]:hidden"
            >
              <ChevronLeft size={15} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/75 transition hover:border-[#D4AF37]/60 hover:text-[#EDCD7C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EDCD7C] min-[1400px]:hidden"
            >
              <ChevronRight size={15} />
            </button>

            <button
              type="button"
              onClick={() => setMuted((value) => !value)}
              aria-label={muted ? "Unmute background video" : "Mute background video"}
              aria-pressed={!muted}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/75 transition hover:border-[#D4AF37]/60 hover:text-[#EDCD7C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EDCD7C]"
            >
              {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroCarousel;
