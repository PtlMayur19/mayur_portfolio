"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Award, Trophy, Camera, Activity, ChevronDown } from "lucide-react";

/* ---------------------------------------------------------------
   Helper: Header doodle arrow (hand‑drawn style – unchanged)
   --------------------------------------------------------------- */
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

/* ---------------------------------------------------------------
   Curved divider – unchanged
   --------------------------------------------------------------- */
export function CurvedDivider() {
  return (
    <div className="w-full overflow-hidden leading-none pt-2 pb-8 sm:pb-12" aria-hidden="true">
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

/* ---------------------------------------------------------------
   Data – highlights entries (metadata removed)
   --------------------------------------------------------------- */
const HIGHLIGHTS_DATA = [
  {
    id: "01",
    title: "CERTIFICATIONS",
    subtitle: "AWS Certified AI Practitioner",
    description:
      "Professional certifications and continuous learning in technology.",
    rightLabel: "AWS CERTIFIED",
    markerColor: "var(--yellow)",
    badgeBg: "var(--yellow)",
    badgeColor: "var(--ink)",
    badgeRotate: "-1deg",
    icon: Award,
    // placeholder – real certifications are rendered from a separate array
  },
  {
    id: "02",
    title: "HACKATHONS & COMPETITIONS",
    subtitle: "Collaborative Building & Rapid Prototyping",
    description:
      "Participating in hackathons, collaborating with teams and building practical solutions to real-world problems.",
    rightLabel: "PARTICIPANT",
    markerColor: "var(--pink)",
    badgeBg: "var(--pink)",
    badgeColor: "#FFFFFF",
    badgeRotate: "1.5deg",
    icon: Trophy,
  },
  {
    id: "03",
    title: "CHARUSAT MEDIA CREW",
    subtitle: "Official Campus Visuals & Event Production",
    description:
      "Contributing to university media through photography, videography, event coverage and creative content.",
    rightLabel: "CMC",
    markerColor: "var(--blue)",
    badgeBg: "var(--blue)",
    badgeColor: "#FFFFFF",
    badgeRotate: "-1.5deg",
    icon: Camera,
  },
  {
    id: "04",
    title: "AIU NATIONAL-LEVEL YOGA ATHLETE",
    subtitle: "All India University Yoga Championship",
    description:
      "Represented CHARUSAT University at the All India University Yoga Championship.",
    rightLabel: "UNIVERSITY PLAYER",
    markerColor: "var(--green)",
    badgeBg: "var(--green)",
    badgeColor: "#FFFFFF",
    badgeRotate: "1deg",
    icon: Activity,
  },
];

/* ---------------------------------------------------------------
   Data – dummy certifications (future‑proof structure)
   --------------------------------------------------------------- */
const CERTIFICATIONS = [
  {
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    // url: "https://example.com/cert/aws-ai", // optional
    // date: "2024-06-15", // optional
  },
  { name: "AWS Certified Cloud Practitioner", issuer: "Placeholder" },
  { name: "Generative AI Fundamentals", issuer: "Placeholder" },
  { name: "Introduction to Cloud Computing", issuer: "Placeholder" },
  { name: "Full Stack Web Development", issuer: "Placeholder" },
];

export default function HighlightsSection() {
  const shouldReduceMotion = useReducedMotion();
  const [certExpanded, setCertExpanded] = useState(false);

  const rowMotionProps = shouldReduceMotion
    ? {}
    : {
        whileHover: { y: -2, x: 2 },
        transition: { type: "spring", stiffness: 300, damping: 25 },
      };

  const toggleCert = () => setCertExpanded((prev) => !prev);

  return (
    <section
      id="highlights"
      className="relative scroll-mt-20 px-3 sm:px-6 md:px-8 pt-4 pb-12 sm:pb-20 paper-sheet w-full overflow-hidden"
      aria-labelledby="highlights-heading"
    >
      <CurvedDivider />
      <div className="relative mx-auto max-w-4xl">
        {/* SECTION HEADING */}
        <div className="flex flex-col items-center text-center px-4 mb-8 sm:mb-12 select-none">
          <div className="inline-flex items-center -rotate-2 select-none mb-1 sm:mb-2">
            <span className="font-hand text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--ink)]">
              “A collection of achievements and experiences beyond the classroom.”
            </span>
            <HeaderDoodleArrow />
          </div>
          <h2
            id="highlights-heading"
            className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-[var(--ink)] uppercase leading-none my-2 sm:my-3 drop-shadow-[2px_3px_0_rgba(255,255,255,0.7)]"
          >
            HIGHLIGHTS
          </h2>
          <div className="mt-2 inline-block select-none">
            <span
              className="torn-tag-sm"
              style={{ backgroundColor: "var(--yellow)", color: "var(--ink)", transform: "rotate(-1.5deg)" }}
            >
              ACHIEVEMENTS · 2026
            </span>
          </div>
        </div>

        {/* COMPACT LIST OF ENTRIES */}
        <div className="space-y-4">
          {HIGHLIGHTS_DATA.map((entry) => {
            const IconComponent = entry.icon;
            const isCert = entry.id === "01";
            return (
              <div key={entry.id} className="group">
                {/* Row – interactive only for Certifications */}
                <motion.div
                  {...rowMotionProps}
                  className="flex items-start gap-4 p-3 rounded-md hover:bg-white/60 transition-colors cursor-pointer"
                  onClick={isCert ? toggleCert : undefined}
                  role={isCert ? "button" : undefined}
                  aria-expanded={isCert ? certExpanded : undefined}
                  tabIndex={isCert ? 0 : undefined}
                  onKeyDown={(e) => {
                    if (isCert && (e.key === "Enter" || e.key === " ")) {
                      e.preventDefault();
                      toggleCert();
                    }
                  }}
                >
                  {/* Marker */}
                  <div className="flex flex-col items-center shrink-0">
                    <div
                      className="w-4 h-4 rounded-[2px] border-2 border-[var(--ink)] shadow-[1.5px_1.5px_0_var(--ink)] transition-transform duration-200 group-hover:scale-110"
                      style={{ backgroundColor: entry.markerColor }}
                      aria-hidden="true"
                    />
                    <span className="font-mono text-[9px] text-[var(--ink)]/60 mt-0.5">
                      {entry.id}
                    </span>
                  </div>
                  {/* Main content */}
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2">
                      <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-[var(--ink)]">
                        {entry.title}
                      </h3>
                      <span className="font-mono text-xs text-[var(--ink)]/70 uppercase">
                        {entry.rightLabel}
                      </span>
                      {/* Expand indicator for Certifications */}
                      {isCert && (
                        <ChevronDown
                          className="w-4 h-4 ml-1 text-[var(--ink)] transition-transform duration-200"
                          style={{
                            transform: certExpanded ? "rotate(180deg)" : "rotate(0deg)",
                          }}
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <p className="font-body text-sm text-[var(--ink)]/85 mt-1">
                      {entry.description}
                    </p>
                  </div>
                  {/* Right‑side icon */}
                  <div className="shrink-0 flex items-center">
                    <IconComponent className="w-5 h-5 text-[var(--ink)]" />
                  </div>
                </motion.div>

                {/* Expandable certifications list – only for the first entry */}
                {isCert && (
                  <AnimatePresence>
                    {certExpanded && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-12 mt-2 space-y-2 text-sm text-[var(--ink)]/90"
                      >
                        {CERTIFICATIONS.map((cert, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="font-mono font-bold text-[var(--ink)]/80">•</span>
                            <span>
                              {cert.name} — {cert.issuer}
                              {cert.url && (
                                <a
                                  href={cert.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline ml-1"
                                >
                                  view
                                </a>
                              )}
                            </span>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-6 pt-4 border-t border-dashed border-[var(--ink)]/20 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left select-none">
          <span className="font-hand text-xl font-bold text-[var(--ink)] -rotate-1">
            “continuously learning, competing &amp; building.”
          </span>
          <span className="font-mono text-xs uppercase font-bold text-[var(--ink)]/60 bg-[var(--yellow)]/30 border border-[var(--ink)]/20 px-2.5 py-1 rounded-sm">
            DOCUMENT 002 · CONFIRMED
          </span>
        </div>
      </div>
    </section>
  );
}
