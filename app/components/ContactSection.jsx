"use client";

import { siteData } from "../../data/site";
import { useInversionLens } from "./useInversionLens";
import InversionLens from "./InversionLens";

export default function ContactSection() {
  const { lensRef, onMouseMove } = useInversionLens([3, 97]);
  const email = siteData.socials?.email || "hello@mayurpatel.dev";
  const emailHref = email.startsWith("mailto:") ? email : `mailto:${email}`;

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 paper-sheet w-full overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div
        className="group/talk relative mx-auto flex max-w-3xl flex-col items-center gap-5 px-4 pb-4 pt-16 text-center sm:gap-6 sm:pt-20"
        onMouseMove={onMouseMove}
      >
        {/* ── B. Smiley Illustration ── */}
        <div className="select-none">
          <svg
            viewBox="0 0 200 200"
            className="overflow-visible h-52 w-52 sm:h-64 sm:w-64"
            aria-hidden="true"
          >
            {/* Main yellow circular face with thin black stroke */}
            <circle
              cx="100"
              cy="100"
              r="88"
              fill="var(--yellow)"
              stroke="var(--ink)"
              strokeWidth="3"
            />
            {/* Soft pink cheeks */}
            <circle
              cx="56"
              cy="120"
              r="12"
              fill="var(--pink)"
              opacity="0.45"
            />
            <circle
              cx="144"
              cy="120"
              r="12"
              fill="var(--pink)"
              opacity="0.45"
            />
            {/* Vertical black oval eyes with blinking animation */}
            <g className="ca-blink">
              <rect
                x="65"
                y="68"
                width="16"
                height="42"
                rx="8"
                fill="var(--ink)"
              />
              <rect
                x="119"
                y="68"
                width="16"
                height="42"
                rx="8"
                fill="var(--ink)"
              />
            </g>
            {/* Curved black smile */}
            <path
              d="M62 130 Q100 172 138 130"
              fill="none"
              stroke="var(--ink)"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* ── C. LET'S TALK Heading ── */}
        <h2
          id="contact-heading"
          className="font-display text-7xl uppercase leading-[0.9] tracking-tight text-[var(--ink)] sm:text-9xl select-none"
        >
          LET&apos;S TALK
        </h2>

        {/* ── D. Handwritten Description ── */}
        <div>
          <p className="font-hand mx-auto max-w-xl text-2xl leading-snug text-[var(--ink)]/80 sm:text-3xl select-none">
            Got a project, a hard problem, or just want to say hi? Send it over.
            I read every message.
          </p>
        </div>

        {/* Interactive scrapbook reticle appearing on hover over the talk group */}
        <InversionLens
          lensRef={lensRef}
          groupHoverClass="group-hover/talk:scale-100 group-hover/talk:opacity-100"
        />
      </div>

      {/* ── E. Large Yellow Contact Card ── */}
      <div className="px-4 pb-20 pt-10 sm:px-8 lg:px-20">
        <div className="relative mx-auto max-w-4xl">
          <a
            aria-label="Drop a line"
            className="group block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--blue)] rounded-[15px]"
            href="/contact"
          >
            {/* White translucent washi tape strips on top corners */}
            <span
              aria-hidden="true"
              className="absolute -left-5 -top-3 z-10 h-6 w-28 -rotate-[8deg] bg-white/60 shadow-[0_1px_3px_rgba(26,24,22,0.15)] pointer-events-none"
            />
            <span
              aria-hidden="true"
              className="absolute -right-5 -top-3 z-10 h-6 w-28 rotate-[8deg] bg-white/60 shadow-[0_1px_3px_rgba(26,24,22,0.15)] pointer-events-none"
            />

            {/* Main yellow doodle card */}
            <div className="ca-doodle-box relative flex flex-col items-center gap-2 border-[3px] border-[var(--ink)] bg-[var(--yellow)] px-6 py-16 text-center shadow-[8px_12px_0_var(--ink)] sm:gap-3 sm:py-24 transition-transform duration-200 group-hover:-translate-y-1 group-hover:shadow-[10px_16px_0_var(--ink)]">
              <p className="font-hand text-3xl text-[var(--ink)] sm:text-4xl select-none">
                let&apos;s make something together
              </p>

              <span className="font-display text-7xl uppercase leading-none tracking-tight text-[var(--ink)] sm:text-[9rem] select-none">
                CONTACT
              </span>

              <span className="font-mono-label mt-3 inline-flex items-center gap-2 border-b-2 border-[var(--ink)] pb-1 text-sm font-bold uppercase tracking-[0.2em] text-[var(--ink)] transition-transform duration-200 group-hover:translate-x-1">
                DROP A LINE
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
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

