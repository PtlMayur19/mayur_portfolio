"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FadeUp } from "./Animations";

/* ── Curved Hand-Drawn Divider between sections ── */
function CurvedDivider() {
  return (
    <div className="w-full overflow-hidden leading-none pt-4 pb-6 sm:pb-10" aria-hidden="true">
      <svg
        viewBox="0 0 1200 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-8 sm:h-12 text-[var(--ink)] opacity-60"
        preserveAspectRatio="none"
      >
        <path
          d="M 10 24 C 180 8, 360 40, 560 22 C 760 4, 980 38, 1190 20"
          stroke="currentColor"
          strokeWidth="2.75"
          strokeLinecap="round"
        />
        <path
          d="M 40 28 C 220 16, 400 42, 600 26 C 800 10, 1010 36, 1160 24"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.45"
        />
      </svg>
    </div>
  );
}

/* ── Doodle arrow for header annotation ── */
function HeaderDoodleArrow() {
  return (
    <svg
      viewBox="0 0 48 38"
      width={32}
      height={28}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-7 h-6 sm:w-8 sm:h-7 text-[var(--ink)] inline-block ml-1 translate-y-1.5"
      aria-hidden="true"
    >
      <path d="M 6 6 Q 22 8 32 20 Q 38 28 42 32" />
      <path d="M 28 32 L 42 32 L 38 18" />
    </svg>
  );
}

/* ── Hand-drawn curved arrow pointing to profile info ── */
function CurvedNoteArrow() {
  return (
    <svg
      viewBox="0 0 60 44"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-7 h-5 sm:w-8 sm:h-6 text-[var(--ink)] inline-block select-none -scale-y-100 rotate-12"
      aria-hidden="true"
    >
      <path d="M 6 36 C 22 38, 42 30, 50 12" />
      <path d="M 38 10 L 50 11 L 52 23" />
    </svg>
  );
}

/* ── Spiral Notebook Top Binder Holes (Realistic Paper Punch) ── */
function SpiralBinderHoles() {
  return (
    <div
      className="w-full flex justify-center items-center px-4 sm:px-8 py-2.5 sm:py-3.5 border-b border-black/10 select-none overflow-hidden bg-[#FAF4E6]/90"
      aria-hidden="true"
    >
      <div className="flex items-center justify-center gap-3 sm:gap-5 md:gap-6 w-full max-w-4xl overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#8A8A8A] border border-black/30 shadow-[inset_0_2px_2px_rgba(0,0,0,0.45)] shrink-0"
          />
        ))}
      </div>
    </div>
  );
}

/* ── Polaroid Photo Frame with subtle tilt, washi tape, and realistic shadow ── */
function ProfilePolaroid() {
  const [hasError, setHasError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const motionProps = shouldReduceMotion
    ? {}
    : {
        whileHover: { scale: 1.025, rotate: 0, y: -4 },
        transition: { type: "spring", stiffness: 280, damping: 20 },
      };

  return (
    <motion.div
      {...motionProps}
      className="relative inline-block select-none -rotate-2 cursor-default transition-shadow"
    >
      {/* Washi Tape strip at top */}
      <div
        className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 tape tape-cyan shadow-sm"
        style={{ transform: "translateX(-50%) rotate(2deg)" }}
        aria-hidden="true"
      />

      {/* Polaroid Card Frame */}
      <figure className="bg-white p-3.5 pb-5 sm:p-4 sm:pb-6 rounded-[2px] border border-black/10 shadow-[0_12px_28px_rgba(26,24,22,0.16),0_2px_6px_rgba(26,24,22,0.06)]">
        <div className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-68 md:h-84 overflow-hidden bg-[#ECE6D9] rounded-[2px] border border-black/5">
          {!hasError ? (
            <Image
              src="/images/portrait.jpg"
              alt="Mayur Patel - Computer Science & Engineering Student"
              fill
              priority
              sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 320px"
              className="object-cover object-top transition-transform duration-500 hover:scale-105"
              onError={() => setHasError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-gradient-to-br from-[#F5EADB] to-[#E5D5C1] text-[var(--ink)]">
              <span className="font-display text-3xl mb-1 opacity-50">✦</span>
              <p className="font-mono text-xs uppercase tracking-wider font-bold opacity-75">
                Mayur Patel
              </p>
            </div>
          )}
        </div>

        {/* Handwritten Label and Annotation below photo */}
        <figcaption className="mt-3.5 text-center">
          <span className="font-hand text-2xl sm:text-[1.7rem] font-bold text-[var(--ink)] tracking-wide block leading-tight">
            MAYUR PATEL
          </span>
          <span className="font-mono-label text-[10px] sm:text-[11px] text-[var(--ink)]/65 tracking-widest block mt-1">
            CLASS OF 2028
          </span>
        </figcaption>
      </figure>
    </motion.div>
  );
}

/* ── Academic Snapshot Data ── */
const ACADEMIC_SNAPSHOT = [
  {
    label: "CGPA",
    value: "7.8",
    isLargeNum: true,
    bg: "#FFF9E6",
    accent: "var(--yellow)",
    rotate: "-0.5deg",
  },
  {
    label: "BATCH",
    value: "2024 – 2028",
    isLargeNum: false,
    bg: "#FFF0F5",
    accent: "var(--pink)",
    rotate: "0.5deg",
  },
  {
    label: "DEGREE",
    value: "B.Tech CSE",
    isLargeNum: false,
    bg: "#F0F5FF",
    accent: "var(--blue)",
    rotate: "-0.5deg",
  },
  {
    label: "LOCATION",
    value: "Gujarat, India",
    isLargeNum: false,
    bg: "#F2FAF4",
    accent: "var(--green)",
    rotate: "0.5deg",
  },
];

/* ── Interest Tags Data ── */
const INTEREST_TAGS = [
  { name: "Software Engineering", bg: "var(--yellow)", color: "var(--ink)", rotate: -1.5 },
  { name: "Full Stack Development", bg: "var(--pink)", color: "#FFFFFF", rotate: 1.5 },
  { name: "Backend Engineering", bg: "var(--blue)", color: "#FFFFFF", rotate: -1 },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 px-4 sm:px-6 md:px-8 pb-16 sm:pb-24 paper-sheet w-full overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Hand-drawn curved divider separating Home and About */}
      <CurvedDivider />

      <div className="relative mx-auto max-w-6xl">
        {/* ── Section Header ── */}
        <div className="flex flex-col items-center text-center px-4 mb-10 sm:mb-14">
          {/* Small handwritten annotation: "about me!" */}
          <FadeUp delay={0.05}>
            <div className="inline-flex items-center -rotate-3 select-none mb-1 sm:mb-2">
              <span className="font-hand text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--ink)]">
                about me!
              </span>
              <HeaderDoodleArrow />
            </div>
          </FadeUp>

          {/* Large Pixelify Sans heading: "ABOUT" */}
          <FadeUp delay={0.1}>
            <h2
              id="about-heading"
              className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-[var(--ink)] uppercase leading-none select-none my-2 sm:my-3"
            >
              ABOUT
            </h2>
          </FadeUp>

          {/* Small yellow torn-paper label: "PROFILE" */}
          <FadeUp delay={0.15}>
            <div className="mt-2 inline-block select-none">
              <span
                className="torn-tag-sm"
                style={{
                  backgroundColor: "var(--yellow)",
                  color: "var(--ink)",
                  transform: "rotate(-1.5deg)",
                }}
              >
                PROFILE
              </span>
            </div>
          </FadeUp>
        </div>

        {/* ── Main Centered Notebook-Paper Container ── */}
        <FadeUp delay={0.2}>
          <div
            className="relative mx-auto bg-[#FDF9F0] border-[2.5px] border-[var(--ink)] shadow-[5px_7px_0_var(--ink)] overflow-hidden rounded-[20px] sm:rounded-[36px_14px_30px_14px/14px_30px_14px_36px]"
          >
            {/* Corner Washi Tape Accents pinning the sheet */}
            <div
              className="absolute -top-3 -left-3 tape tape-yellow z-20 pointer-events-none -rotate-45 hidden sm:block opacity-75"
              aria-hidden="true"
            />
            <div
              className="absolute -top-3 -right-3 tape tape-pink z-20 pointer-events-none rotate-45 hidden sm:block opacity-75"
              aria-hidden="true"
            />

            {/* Notebook Spiral Binder Notches along the top edge */}
            <SpiralBinderHoles />

            {/* Inner Content Padding */}
            <div className="p-5 sm:p-8 md:p-10 lg:p-12">
              {/* Desktop Two-Column Composition */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">

                {/* ── LEFT COLUMN: Profile Photograph & Handwritten Note ── */}
                <div className="lg:col-span-5 flex flex-col items-center justify-start text-center">
                  {/* Polaroid Frame */}
                  <ProfilePolaroid />

                  {/* Personal Touch Annotation below photo with hand-drawn arrow */}
                  <div className="mt-5 sm:mt-6 flex flex-col items-center select-none">
                    <div className="inline-flex items-center gap-1.5 -rotate-2 text-[var(--ink)]">
                      <span className="font-hand text-xl sm:text-2xl font-bold text-[var(--ink)]">
                        &ldquo;building, learning &amp; exploring.&rdquo;
                      </span>
                    </div>
                    <div className="mt-1 flex items-center justify-center text-[var(--ink)]/75">
                      <CurvedNoteArrow />
                      <span className="font-hand text-sm sm:text-base font-semibold text-[var(--pink)] ml-1.5 -rotate-2">
                        always curious ✦
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── RIGHT COLUMN: Personal & Academic Information ── */}
                <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-7 text-left">

                  {/* 1. Header & Introduction */}
                  <div>
                    <h3 className="font-hand text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] tracking-tight leading-tight">
                      Hi, I&apos;m Mayur!
                    </h3>

                    <p className="font-mono text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-[var(--blue)] mt-1.5 mb-3 flex items-center gap-1.5">
                      <span className="text-[var(--pink)] font-display text-base">✦</span>
                      COMPUTER SCIENCE &amp; ENGINEERING STUDENT
                    </p>

                    <p className="font-body text-sm sm:text-base text-[var(--ink)]/85 leading-relaxed font-normal">
                      I&apos;m Mayur Patel, a Computer Science and Engineering student at DEPSTAR,
                      CHARUSAT University. I enjoy building web applications, exploring backend
                      technologies and turning ideas into practical digital experiences.
                      I&apos;m continuously learning, experimenting with new technologies and
                      improving my software engineering skills.
                    </p>
                  </div>

                  {/* 2. EDUCATION Block */}
                  <div>
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[var(--green)] inline-block" />
                      <h4 className="font-mono-label text-xs sm:text-sm text-[var(--ink)] tracking-widest">
                        EDUCATION
                      </h4>
                      <div className="h-[1px] flex-1 bg-[var(--ink)]/15 border-b border-dashed border-[var(--ink)]/30" />
                    </div>

                    <div
                      className="bg-white/80 border-2 border-[var(--ink)] p-4 sm:p-5 rounded-[4px] shadow-[3px_3px_0_var(--ink)] relative"
                      style={{
                        borderRadius: "15px 4px 12px 4px / 4px 12px 4px 15px",
                      }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-2">
                        <div className="font-body font-bold text-base sm:text-lg text-[var(--ink)]">
                          B.Tech – Computer Science &amp; Engineering
                        </div>
                        <span className="font-mono text-xs sm:text-sm font-bold text-[var(--ink)] bg-[var(--yellow)]/50 border border-[var(--ink)]/40 px-2.5 py-0.5 rounded-sm self-start sm:self-auto shrink-0">
                          2024 – 2028
                        </span>
                      </div>

                      <p className="font-body text-sm sm:text-base text-[var(--ink)]/80 mt-1">
                        DEPSTAR, CHARUSAT University
                      </p>

                      <div className="mt-3 flex items-center gap-2">
                        <span className="font-mono text-[11px] font-semibold text-[var(--ink)]/75 uppercase tracking-wider bg-[#EDE7D6] px-2.5 py-0.5 rounded-full border border-black/10 inline-flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)]" />
                          Undergraduate Student
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 3. ACADEMIC SNAPSHOT */}
                  <div>
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[var(--pink)] inline-block" />
                      <h4 className="font-mono-label text-xs sm:text-sm text-[var(--ink)] tracking-widest">
                        ACADEMIC SNAPSHOT
                      </h4>
                      <div className="h-[1px] flex-1 bg-[var(--ink)]/15 border-b border-dashed border-[var(--ink)]/30" />
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                      {ACADEMIC_SNAPSHOT.map((item) => (
                        <div
                          key={item.label}
                          className="border-2 border-[var(--ink)] rounded-[2px] shadow-[2px_2.5px_0_var(--ink)] p-2.5 sm:p-3 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[3px_3.5px_0_var(--ink)] cursor-default"
                          style={{
                            backgroundColor: item.bg,
                            transform: `rotate(${item.rotate})`,
                          }}
                        >
                          <span className="font-mono-label text-[10px] text-[var(--ink)]/60 block mb-1">
                            {item.label}
                          </span>
                          <span
                            className={
                              item.isLargeNum
                                ? "font-display text-2xl sm:text-3xl font-bold text-[var(--ink)] leading-none block"
                                : item.label === "BATCH"
                                ? "font-mono text-xs sm:text-[13px] md:text-sm font-bold text-[var(--ink)] leading-tight block pt-1 whitespace-nowrap"
                                : "font-mono text-xs sm:text-sm font-bold text-[var(--ink)] leading-tight block pt-1"
                            }
                          >
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 4. CURRENT INTERESTS */}
                  <div>
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[var(--yellow)] inline-block" />
                      <h4 className="font-mono-label text-xs sm:text-sm text-[var(--ink)] tracking-widest">
                        CURRENTLY INTERESTED IN
                      </h4>
                      <div className="h-[1px] flex-1 bg-[var(--ink)]/15 border-b border-dashed border-[var(--ink)]/30" />
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
                      {INTEREST_TAGS.map((tag) => (
                        <span
                          key={tag.name}
                          className="torn-tag-sm cursor-default select-none shadow-sm transition-transform duration-200 hover:scale-105"
                          style={{
                            backgroundColor: tag.bg,
                            color: tag.color,
                            transform: `rotate(${tag.rotate}deg)`,
                          }}
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
