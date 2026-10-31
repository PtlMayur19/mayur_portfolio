"use client";

import { FadeUp } from "./Animations";
import ProjectStack from "./ProjectStack";
import { featuredProjects } from "../../data/projects";

/* ── Curved Hand-Drawn Divider separating About and Featured Works ── */
function CurvedDivider() {
  return (
    <div className="w-full overflow-hidden leading-none pt-4 pb-8 sm:pb-12" aria-hidden="true">
      <svg
        viewBox="0 0 1200 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-8 sm:h-12 text-[var(--ink)] opacity-60"
        preserveAspectRatio="none"
      >
        <path
          d="M 10 20 C 220 38, 440 6, 660 30 C 880 50, 1050 12, 1190 26"
          stroke="currentColor"
          strokeWidth="2.75"
          strokeLinecap="round"
        />
        <path
          d="M 30 26 C 240 42, 460 12, 680 34 C 890 52, 1070 18, 1170 28"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.45"
        />
      </svg>
    </div>
  );
}

/* ── Doodle arrow pointing downward from annotation ── */
function ExploreArrow() {
  return (
    <svg
      viewBox="0 0 44 40"
      width={30}
      height={28}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline-block ml-1.5 translate-y-2 text-[var(--ink)]"
      aria-hidden="true"
    >
      <path d="M 6 6 Q 22 10 28 22 Q 32 30 34 34" />
      <path d="M 22 34 L 34 34 L 34 20" />
    </svg>
  );
}

export default function CaseStudySection() {
  return (
    <section
      id="case-study"
      className="relative px-4 sm:px-6 md:px-8 pb-24 sm:pb-36 paper-sheet w-full overflow-visible"
      aria-labelledby="case-study-heading"
    >
      {/* Hand-drawn divider separating previous section */}
      <CurvedDivider />

      <div className="relative mx-auto max-w-7xl">
        {/* ── Section Header ── */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20 md:mb-28">

          {/* Small handwritten annotation: "explore my work!" */}
          <FadeUp delay={0.05}>
            <div className="inline-flex items-center -rotate-3 select-none mb-2">
              <span className="font-hand text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--ink)]">
                explore my work!
              </span>
              <ExploreArrow />
            </div>
          </FadeUp>

          {/* Large Pixelify Sans heading: "FEATURED WORKS" */}
          <FadeUp delay={0.12}>
            <h2
              id="case-study-heading"
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--ink)] uppercase leading-none select-none my-3"
            >
              FEATURED WORKS
            </h2>
          </FadeUp>

          {/* Small yellow paper-note subtitle */}
          <FadeUp delay={0.2}>
            <div
              className="mt-3 inline-block px-5 sm:px-6 py-2 sm:py-2.5 bg-[var(--yellow)] border-2 border-[var(--ink)] shadow-[2px_3px_0_var(--ink)] rotate-1 select-none"
              style={{
                borderRadius: "2px 8px 3px 6px / 6px 2px 7px 3px",
              }}
            >
              <p className="font-hand text-lg sm:text-xl md:text-2xl font-bold text-[var(--ink)]">
                A collection of things I&apos;ve been building.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* ── Sticky Stacking Project Cards ── */}
        <ProjectStack projects={featuredProjects} />

      </div>
    </section>
  );
}

