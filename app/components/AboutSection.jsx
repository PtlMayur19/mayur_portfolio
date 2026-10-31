"use client";

import { useState } from "react";
import Image from "next/image";
import { FadeUp, PopIn } from "./Animations";

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
        {/* Subtle companion sketch stroke */}
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

/* ── Doodle Arrow pointing to "what's up" / bio ── */
function AnnotationArrow() {
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
      className="w-7 h-6 sm:w-8 sm:h-7 text-[var(--ink)] inline-block ml-1 translate-y-2"
      aria-hidden="true"
    >
      <path d="M 6 6 Q 22 8 32 20 Q 38 28 42 32" />
      <path d="M 28 32 L 42 32 L 38 18" />
    </svg>
  );
}

/* ── Polaroid Image Component with tape and fallback ── */
function PolaroidPhoto({
  src,
  alt,
  caption,
  tapeColor = "cyan",
  tapeRotate = "-2deg",
  rotate = "-4deg",
  className = "",
  size = "normal",
}) {
  const [hasError, setHasError] = useState(false);

  const sizeClasses =
    size === "mobile"
      ? "w-36 h-48 sm:w-44 sm:h-56"
      : "w-48 h-60 sm:w-56 sm:h-72 md:w-60 md:h-76 lg:w-60 lg:h-76 xl:w-68 xl:h-84";

  return (
    <div
      className={`relative inline-block transition-transform duration-300 hover:scale-[1.03] hover:rotate-0 hover:z-20 ${className}`}
      style={{ transform: `rotate(${rotate})` }}
    >
      {/* Washi Tape Strip */}
      <div
        className={`absolute -top-3 left-1/2 -translate-x-1/2 z-10 tape tape-${tapeColor}`}
        style={{ transform: `translateX(-50%) rotate(${tapeRotate})` }}
        aria-hidden="true"
      />

      {/* Polaroid Card */}
      <figure className="polaroid bg-white rounded-[2px]">
        <div
          className={`relative ${sizeClasses} overflow-hidden bg-[#ECE6D9] rounded-[2px] border border-black/5`}
        >
          {!hasError ? (
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 640px) 160px, (max-width: 1024px) 240px, 280px"
              className="object-cover transition-transform duration-500 hover:scale-105"
              onError={() => setHasError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-gradient-to-br from-[#F5EADB] to-[#E5D5C1] text-[var(--ink)]">
              <span className="font-display text-3xl mb-1 opacity-50">✦</span>
              <p className="font-mono text-[10px] uppercase tracking-wider font-bold opacity-75">
                {caption}
              </p>
            </div>
          )}
        </div>
        <figcaption>{caption}</figcaption>
      </figure>
    </div>
  );
}

/* ── Skill Tag Data ── */
const SKILL_TAGS = [
  { name: "Full Stack", bg: "var(--yellow)", color: "var(--ink)", rotate: -2 },
  { name: "Backend", bg: "var(--green)", color: "#FFFFFF", rotate: 3 },
  { name: "React", bg: "var(--pink)", color: "#FFFFFF", rotate: -1.5 },
  { name: "Next.js", bg: "var(--blue)", color: "#FFFFFF", rotate: 2.5 },
  { name: "Node.js", bg: "var(--lavender)", color: "var(--ink)", rotate: -3 },
  { name: "AWS", bg: "var(--orange)", color: "#FFFFFF", rotate: 2 },
  { name: "Photography", bg: "var(--yellow)", color: "var(--ink)", rotate: -1.5 },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative px-4 sm:px-6 md:px-8 pb-16 sm:pb-24 paper-sheet w-full overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Hand-drawn curved divider separating Home and About */}
      <CurvedDivider />

      <div className="relative mx-auto max-w-7xl">
        {/* ── Handwritten "about me!" annotation near upper-left ── */}
        <div className="mb-3 sm:mb-5 pl-2 sm:pl-6 md:pl-10">
          <FadeUp delay={0.05}>
            <div className="inline-flex items-center -rotate-6 select-none">
              <span
                id="about-heading"
                className="font-hand text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
                style={{ color: "var(--ink)" }}
              >
                about me!
              </span>
              <AnnotationArrow />
            </div>
          </FadeUp>
        </div>

        {/* ── Centered hand-drawn rectangular label: "what's up" ── */}
        <div className="flex justify-center mb-6 sm:mb-10">
          <FadeUp delay={0.1}>
            <div
              className="px-6 py-1.5 sm:px-8 sm:py-2 bg-white/75 border-[2.5px] border-[var(--ink)] shadow-[2px_3px_0_var(--ink)] -rotate-1 select-none"
              style={{
                borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
              }}
            >
              <h2
                className="font-hand text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide"
                style={{ color: "var(--ink)" }}
              >
                what&apos;s up
              </h2>
            </div>
          </FadeUp>
        </div>

        {/* ── Tablet & Mobile Photo Row (< lg) ── */}
        <div className="flex lg:hidden justify-center items-center gap-4 sm:gap-6 mb-8 pt-2">
          <FadeUp delay={0.15}>
            <PolaroidPhoto
              src="/images/portrait.jpg"
              alt="Portrait of Mayur Patel"
              caption="mayur.jpg"
              tapeColor="cyan"
              tapeRotate="-3deg"
              rotate="-3deg"
              size="mobile"
            />
          </FadeUp>
          <FadeUp delay={0.2}>
            <PolaroidPhoto
              src="/images/lifestyle.jpg"
              alt="Lifestyle photo outside coding"
              caption="outside coding 📸"
              tapeColor="yellow"
              tapeRotate="3deg"
              rotate="4deg"
              size="mobile"
            />
          </FadeUp>
        </div>

        {/* ── Desktop Editorial Composition (lg+) ── */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-start">

          {/* Left Column: Taped Polaroid Portrait (Desktop only) */}
          <div className="hidden lg:flex lg:col-span-3 justify-start pt-6">
            <FadeUp delay={0.15}>
              <PolaroidPhoto
                src="/images/portrait.jpg"
                alt="Portrait of Mayur Patel"
                caption="mayur.jpg"
                tapeColor="cyan"
                tapeRotate="-3deg"
                rotate="-4deg"
              />
            </FadeUp>
          </div>

          {/* Center Column: Biography + Colorful Torn-edge Skill Tags */}
          <div className="lg:col-span-6 flex flex-col items-center text-center px-2 sm:px-4">
            {/* Large handwritten biography */}
            <FadeUp delay={0.15}>
              <p
                className="font-hand text-2xl sm:text-3xl md:text-4xl lg:text-[2.2rem] xl:text-[2.4rem] leading-[1.55] sm:leading-[1.6] md:leading-[1.65] font-medium tracking-wide"
                style={{ color: "var(--ink)" }}
              >
                Hey, I&apos;m Mayur — a Computer Science student at CHARUSAT who
                enjoys turning ideas into real products. I&apos;m interested in
                full-stack development, backend engineering, and understanding
                how software works behind the scenes. Outside coding, I enjoy
                photography, yoga, and exploring new things.
              </p>
            </FadeUp>

            {/* Colorful torn-edge skill tags */}
            <div className="mt-8 sm:mt-12 w-full">
              <FadeUp delay={0.25}>
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-4.5">
                  {SKILL_TAGS.map((tag, idx) => (
                    <PopIn key={tag.name} delay={0.05 * idx}>
                      <span
                        className="torn-tag cursor-default"
                        style={{
                          backgroundColor: tag.bg,
                          color: tag.color,
                          transform: `rotate(${tag.rotate}deg)`,
                        }}
                      >
                        {tag.name}
                      </span>
                    </PopIn>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>

          {/* Right Column: Taped Lifestyle Photo (Desktop only) */}
          <div className="hidden lg:flex lg:col-span-3 justify-end pt-16">
            <FadeUp delay={0.25}>
              <PolaroidPhoto
                src="/images/lifestyle.jpg"
                alt="Lifestyle photo outside coding"
                caption="outside coding 📸"
                tapeColor="yellow"
                tapeRotate="4deg"
                rotate="5deg"
              />
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
