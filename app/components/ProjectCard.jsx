"use client";

import Image from "next/image";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

/* ── Inline GitHub Icon ── */
function GithubIcon({ className = "w-4 h-4 shrink-0" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={16}
      height={16}
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

/**
 * ProjectCard — Single project article utilizing native CSS sticky positioning
 * on desktop with progressive folder tab alignment matching the reference.
 */
export default function ProjectCard({ project, index, totalCards }) {
  const [imgError, setImgError] = useState(false);
  const { cardTheme } = project;

  // Progressive horizontal positioning for folder tabs matching reference HTML:
  // Card 0: 0
  // Card 1: min(calc(21% - 72px), calc(100% - 340px))
  // Card 2: min(calc(42% - 72px), calc(100% - 340px))
  // Card 3: min(calc(63% - 72px), calc(100% - 340px))
  const tabMargins = [
    "0",
    "min(calc(21% - 72px), calc(100% - 340px))",
    "min(calc(42% - 72px), calc(100% - 340px))",
    "min(calc(63% - 72px), calc(100% - 340px))",
  ];
  const tabMargin = tabMargins[index % tabMargins.length];

  return (
    <article
      id={`project-${project.id}`}
      className="lg:sticky lg:top-28 transition-none"
      style={{
        zIndex: 10 + index * 10,
      }}
      aria-label={`${project.tabLabel}: ${project.title}`}
    >
      {/* ── Progressive Folder Tab ── */}
      <div className="flex" style={{ marginLeft: tabMargin }}>
        <span
          className={`font-mono inline-flex items-center gap-2 py-3.5 pr-14 text-xs font-bold uppercase tracking-[0.2em] sm:gap-3.5 sm:py-6 sm:pr-28 sm:text-base select-none ${index === 0
            ? "pl-5 sm:pl-9 [clip-path:polygon(0_0,calc(100%-44px)_0,100%_100%,0_100%)] sm:[clip-path:polygon(0_0,calc(100%-76px)_0,100%_100%,0_100%)]"
            : "pl-16 sm:pl-[6.75rem] [clip-path:polygon(44px_0,calc(100%-44px)_0,100%_100%,0_100%)] sm:[clip-path:polygon(76px_0,calc(100%-76px)_0,100%_100%,0_100%)]"
            }`}
          style={{
            backgroundColor: cardTheme.tabBg,
            color: cardTheme.tabText,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-3 w-3 sm:h-4 sm:w-4"
            aria-hidden="true"
          >
            <path d="M12 2c1 5 4 8 9 9-5 1-8 4-9 9-1-5-4-8-9-9 5-1 8-4 9-9Z" />
          </svg>
          {project.tabLabel}
        </span>
      </div>

      {/* ── Card Interior / Main Body ── */}
      <div
        className="grid grid-cols-1 gap-6 p-6 sm:p-10 lg:grid-cols-[0.78fr_1fr] lg:gap-8 lg:px-14 lg:py-12 lg:min-h-[580px] xl:min-h-[600px] shadow-[0_16px_40px_-10px_rgba(26,24,22,0.35),0_4px_16px_rgba(26,24,22,0.18)]"
        style={{
          backgroundColor: cardTheme.bg,
          color: cardTheme.text,
        }}
      >
        {/* Left Column: Project Details & Actions */}
        <div className="flex flex-col justify-between">
          <div>
            {/* Meta row: Dot + Date */}
            <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold tracking-wider uppercase mb-3 sm:mb-4 select-none">
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: project.dotColor }}
                aria-hidden="true"
              />
              <span style={{ color: cardTheme.textMuted }}>{project.date}</span>
              <span style={{ color: cardTheme.textMuted }}>·</span>
              <span style={{ color: cardTheme.textMuted }}>INDEX {project.id}</span>
            </div>

            {/* Project Title */}
            <h3
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight uppercase leading-[0.95] mb-4 select-none"
              style={{ color: cardTheme.text }}
            >
              {project.title}
            </h3>

            {/* Project Description */}
            <p
              className="text-sm sm:text-base lg:text-lg leading-relaxed mb-5 font-normal max-w-xl"
              style={{ color: cardTheme.textMuted }}
            >
              {project.description}
            </p>

            {/* Technology Tags */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-4 lg:mb-0">
              {project.tags.map((tag, tIdx) => {
                const tagRotations = [-2, 2.5, -1.5];
                const rot = tagRotations[tIdx % tagRotations.length];
                return (
                  <span
                    key={tag.name}
                    className="torn-tag-sm select-none cursor-default shadow-sm transition-transform duration-200 hover:scale-105"
                    style={{
                      backgroundColor: tag.bg,
                      color: tag.color,
                      transform: `rotate(${rot}deg)`,
                    }}
                  >
                    {tag.name}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            {/* Primary: VIEW PROJECT */}
            <a
              href={project.projectUrl}
              className="inline-flex items-center gap-2.5 px-5 py-3 border-[2.5px] border-[var(--ink)] font-mono text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[3px_4px_0_var(--ink)] active:translate-y-0"
              style={{
                backgroundColor: cardTheme.buttonBg,
                color: cardTheme.buttonText,
              }}
            >
              VIEW PROJECT
              <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>

            {/* Secondary: GITHUB */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 border-2 font-mono text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-black/10 active:translate-y-0"
                style={{
                  borderColor: cardTheme.outlineColor,
                  color: cardTheme.text,
                }}
              >
                <GithubIcon className="w-4 h-4 shrink-0" />
                GITHUB
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Polaroid Visual Frame with Tape */}
        <div className="lg:self-center flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[720px] transition-transform duration-300 hover:scale-[1.02]">
            {/* Translucent Corner Washi Tapes */}
            <span
              className={`absolute -top-3.5 -left-3 sm:-left-4 z-20 tape tape-${cardTheme.tapeLeft}`}
              style={{ transform: "rotate(-16deg)" }}
              aria-hidden="true"
            />
            <span
              className={`absolute -top-3.5 -right-3 sm:-right-4 z-20 tape tape-${cardTheme.tapeRight}`}
              style={{ transform: "rotate(14deg)" }}
              aria-hidden="true"
            />

            {/* Polaroid Frame */}
            <figure className="bg-white p-3 sm:p-4 pb-6 sm:pb-8 rounded-[2px] shadow-[0_12px_28px_rgba(0,0,0,0.28)] border border-black/10">
              <div className="relative aspect-square sm:aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden rounded-[2px] bg-[#0E172A]">
                {!imgError ? (
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 540px"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-stone-800 to-stone-900 text-white">
                    <span className="font-display text-4xl mb-2 text-amber-400">✦</span>
                    <p className="font-mono text-xs uppercase tracking-wider font-bold">
                      {project.title} MOCKUP
                    </p>
                  </div>
                )}
              </div>

              <figcaption className="font-hand text-center text-sm sm:text-base text-stone-600 mt-2.5 font-medium select-none">
                {project.imageCaption}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </article>
  );
}
