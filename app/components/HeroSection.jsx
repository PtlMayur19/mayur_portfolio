"use client";

import { ScaleIn, DropIn, FadeUp } from "./Animations";
import { useInversionLens } from "./useInversionLens";
import InversionLens from "./InversionLens";

/* ── Inline doodle arrow SVG ── */
function DoodleArrow({ flip = false, className = "w-7 h-7 sm:w-8 sm:h-8" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={32}
      height={32}
      fill="none"
      stroke="var(--ink)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} shrink-0`}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden="true"
    >
      <path d="M34 33 C 25 24, 15 21, 9 9" />
      <path d="M8 21 L 7 7 L 21 11" />
    </svg>
  );
}

/* ── Spinning SVG doodle icons ── */
function SpinTarget() {
  return (
    <svg
      viewBox="0 0 40 40"
      className="inline-block align-[-0.08em] spin-slow"
      style={{ width: "0.85em", height: "0.85em" }}
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="18" fill="var(--green)" stroke="var(--ink)" strokeWidth="2" />
      <circle cx="20" cy="20" r="11" fill="var(--paper)" />
      <circle cx="20" cy="20" r="5" fill="var(--green)" />
      <circle cx="14" cy="9" r="2.4" fill="var(--ink)" />
    </svg>
  );
}

function SpinFlower() {
  const angles = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <svg
      viewBox="0 0 40 40"
      className="inline-block align-[-0.08em] spin-slow"
      style={{ width: "0.85em", height: "0.85em" }}
      aria-hidden="true"
    >
      {angles.map((deg) => (
        <ellipse
          key={deg}
          cx="20"
          cy="8"
          rx="4.6"
          ry="8"
          fill="var(--pink)"
          transform={`rotate(${deg} 20 20)`}
        />
      ))}
      <circle cx="20" cy="20" r="4" fill="var(--ink)" />
    </svg>
  );
}

/* ── Circular scrapbook decorations (icons removed, preserving scrapbook design) ── */
function CircularDecoration({ side = "left" }) {
  const isLeft = side === "left";
  return (
    <div
      className={`absolute top-[48%] ${
        isLeft ? "left-[3%] 2xl:left-[6%]" : "right-[3%] 2xl:right-[6%]"
      } ${isLeft ? "float-l" : "float-r"} hidden xl:block pointer-events-none select-none`}
      aria-hidden="true"
    >
      <span
        className="flex items-center justify-center rounded-full p-1.5 h-16 w-16 2xl:h-20 2xl:w-20 shadow-sm"
        style={{ backgroundColor: "var(--orange)" }}
      >
        <span
          className="h-full w-full rounded-full transition-opacity opacity-90"
          style={{ backgroundColor: isLeft ? "var(--yellow)" : "var(--green)" }}
        />
      </span>
    </div>
  );
}

/* ── Main Hero Section ── */
export default function HeroSection() {
  const { lensRef, onMouseMove } = useInversionLens([3, 97]);

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-20 paper-sheet w-full min-h-[calc(100vh-4.5rem)]"
      aria-labelledby="hero-name"
    >
      {/* Scrapbook circular decorations (desktop) */}
      <CircularDecoration side="left" />
      <CircularDecoration side="right" />

      {/* ── Content column ── */}
      <div className="relative mx-auto flex max-w-5xl w-full flex-col items-center text-center">

        {/* Name composition block with interactive cursor negative inversion reticle */}
        <div
          className="group/name relative flex w-full flex-col items-center"
          onMouseMove={onMouseMove}
        >
          {/* "my name is" handwritten label */}
        <FadeUp delay={0.05}>
          <div className="flex flex-col items-center select-none" style={{ color: "var(--ink)" }}>
            <p className="font-hand text-2xl sm:text-3xl md:text-4xl" aria-hidden="true">
              my name is
            </p>
            {/* Double underline squiggle */}
            <svg
              viewBox="0 0 64 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              className="mt-1 h-3 w-20 sm:w-24"
              aria-hidden="true"
            >
              <path d="M3 4c18-3 40-3 58 0" />
              <path d="M9 9c14-2.5 32-2.5 46 0" />
            </svg>
          </div>
        </FadeUp>

        {/* Sticker pills – mobile/tablet stacked above frame */}
        <div className="mt-4 flex flex-wrap justify-center gap-2.5 sm:gap-3 lg:hidden">
          <DropIn delay={0.25} rotate={-6}>
            <StickerPill bg="var(--green)" textColor="#fff">
              BUILT THINGS
            </StickerPill>
          </DropIn>
          <DropIn delay={0.35} rotate={6}>
            <StickerPill bg="var(--yellow)" textColor="var(--ink)">
              SWEAT THE DETAILS
            </StickerPill>
          </DropIn>
        </div>

        {/* NAME in pixel font + orange hand-drawn frame */}
        <div className="relative mt-5 inline-block max-w-full">
          <ScaleIn delay={0.15}>
            <div className="doodle-frame relative inline-block px-5 py-2 sm:px-8 sm:py-3 md:px-12 md:py-4">
              <span className="corner-tl" aria-hidden="true" />
              <span className="corner-tr" aria-hidden="true" />
              <span className="corner-bl" aria-hidden="true" />
              <span className="corner-br" aria-hidden="true" />

              <h1
                id="hero-name"
                className="font-display leading-[0.94] tracking-tight select-none"
                style={{
                  fontSize: "clamp(2.75rem, 9.5vw, 6.75rem)",
                  color: "var(--ink)",
                }}
              >
                <span className="sr-only">MAYUR PATEL</span>
                <span aria-hidden="true" className="block">
                  MAYUR
                </span>
                <span aria-hidden="true" className="block">
                  PATEL
                </span>
              </h1>

              {/* Desktop sticker labels & tags attached neatly to corners of frame */}
              <div
                className="pointer-events-none absolute inset-0 hidden lg:block"
                aria-hidden="true"
              >
                {/* Top-left: BUILT THINGS */}
                <div className="absolute -top-5 -left-4 xl:-left-8 pointer-events-auto">
                  <DropIn delay={0.45} rotate={-12}>
                    <StickerPill bg="var(--green)" textColor="#fff">
                      BUILT THINGS
                    </StickerPill>
                  </DropIn>
                </div>

                {/* Top-right: SWEAT THE DETAILS */}
                <div className="absolute -top-5 -right-4 xl:-right-8 pointer-events-auto">
                  <DropIn delay={0.55} rotate={12}>
                    <StickerPill bg="var(--yellow)" textColor="var(--ink)">
                      SWEAT THE DETAILS
                    </StickerPill>
                  </DropIn>
                </div>

                {/* Bottom-left: Software Engineer + arrow */}
                <div className="absolute -bottom-8 -left-6 xl:-left-12 pointer-events-auto">
                  <DropIn delay={0.65} rotate={-6}>
                    <span className="relative inline-flex items-center">
                      <span
                        className="font-hand inline-block px-3.5 py-1.5 text-lg xl:text-xl leading-snug shadow-[2px_3px_8px_rgba(26,24,22,0.18)]"
                        style={{
                          backgroundColor: "var(--yellow)",
                          color: "var(--ink)",
                        }}
                      >
                        Software Engineer
                      </span>
                      <span className="absolute -right-8 -top-4">
                        <DoodleArrow flip />
                      </span>
                    </span>
                  </DropIn>
                </div>

                {/* Bottom-right: India + arrow */}
                <div className="absolute -bottom-8 -right-6 xl:-right-12 pointer-events-auto">
                  <DropIn delay={0.75} rotate={5}>
                    <span className="relative inline-flex items-center">
                      <span className="absolute -left-7 -top-5">
                        <DoodleArrow />
                      </span>
                      <span
                        className="font-hand inline-block px-3.5 py-1.5 text-lg xl:text-xl leading-snug shadow-[2px_3px_8px_rgba(26,24,22,0.18)]"
                        style={{
                          backgroundColor: "var(--green)",
                          color: "#fff",
                        }}
                      >
                        India 🇮🇳
                      </span>
                    </span>
                  </DropIn>
                </div>
              </div>
            </div>
          </ScaleIn>
        </div>

        {/* Role + location tags – mobile / tablet stacked below frame */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:hidden">
          <DropIn delay={0.45} rotate={-4}>
            <span className="relative inline-flex items-center">
              <span
                className="font-hand inline-block px-3.5 py-1.5 text-lg sm:text-xl leading-snug shadow-[2px_3px_8px_rgba(26,24,22,0.18)]"
                style={{
                  backgroundColor: "var(--yellow)",
                  color: "var(--ink)",
                }}
              >
                Software Engineer
              </span>
              <span className="absolute -right-7 -top-3 hidden sm:inline-block">
                <DoodleArrow flip className="w-6 h-6" />
              </span>
            </span>
          </DropIn>
          <DropIn delay={0.55} rotate={4}>
            <span className="relative inline-flex items-center">
              <span className="absolute -left-6 -top-3 hidden sm:inline-block">
                <DoodleArrow className="w-6 h-6" />
              </span>
              <span
                className="font-hand inline-block px-3.5 py-1.5 text-lg sm:text-xl leading-snug shadow-[2px_3px_8px_rgba(26,24,22,0.18)]"
                style={{
                  backgroundColor: "var(--green)",
                  color: "#fff",
                }}
              >
                India 🇮🇳
              </span>
            </span>
          </DropIn>
        </div>

        {/* Status line */}
        <FadeUp delay={0.85}>
          <p
            className="mt-6 sm:mt-8 inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.16em] sm:tracking-[0.2em]"
            style={{
              fontFamily: "var(--font-mono), 'Space Mono', monospace",
              color: "var(--ink)",
            }}
          >
            <span
              className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full shrink-0"
              style={{ backgroundColor: "var(--blue)" }}
            />
            OPEN TO NEW WORK AND GOOD PROBLEMS
          </p>
        </FadeUp>

        {/* Cursor-following negative inversion reticle */}
        <InversionLens
          lensRef={lensRef}
          groupHoverClass="group-hover/name:scale-100 group-hover/name:opacity-100"
        />
      </div>

        {/* Tagline */}
        <FadeUp delay={0.95} className="mt-7 sm:mt-9 max-w-3xl px-2">
          <p
            className="text-2xl sm:text-4xl md:text-5xl font-semibold leading-[1.2] tracking-tight"
            style={{ color: "var(--ink)" }}
          >
            I build software <SpinTarget /> that turns ideas into reality.{" "}
            <SpinFlower />
          </p>
        </FadeUp>

        {/* Short intro */}
        <FadeUp delay={1.05} className="mt-4 sm:mt-5 max-w-xl px-2">
          <p
            className="text-sm sm:text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(26,24,22,0.7)" }}
          >
            CS student at CHARUSAT · Full-stack developer · Building products
            that matter.
          </p>
        </FadeUp>

        {/* CTA buttons */}
        <FadeUp delay={1.15} className="mt-7 sm:mt-9">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {/* Primary: Explore My Work */}
            <a
              href="#case-study"
              id="hero-cta-work"
              className="btn-primary group"
            >
              <span className="btn-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </span>
              EXPLORE MY WORK
            </a>

            {/* Secondary: Let's Talk */}
            <a
              href="#contact"
              id="hero-cta-contact"
              className="btn-outline"
            >
              LET&apos;S TALK
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ── Local helper: sticker pill ── */
function StickerPill({ bg, textColor, children }) {
  return (
    <span
      className="sticker-pill inline-block whitespace-nowrap select-none"
      style={{ backgroundColor: bg, color: textColor }}
    >
      {children}
    </span>
  );
}
