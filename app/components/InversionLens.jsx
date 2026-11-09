"use client";

/**
 * InversionLens — Cursor-responsive negative/inversion reticle.
 *
 * Implements the 1:1 visual recreation of the interactive negative lens
 * from Portfoliofy Creative Artsy.
 *
 * Features:
 * - backdrop-filter: invert(1) for real-time negative color inversion
 * - 4 corner squares / framing markers matching the scrapbook design
 * - Smooth scale and opacity transitions on enter/leave
 * - pointer-events: none so it never blocks clicks, links, or text selection
 * - Hidden on mobile/touch, active on lg screens (desktop)
 */
export default function InversionLens({
  lensRef,
  groupHoverClass = "group-hover/name:scale-100 group-hover/name:opacity-100",
  className = "",
}) {
  return (
    <span
      ref={lensRef}
      aria-hidden="true"
      className={`pointer-events-none absolute left-1/2 top-1/2 z-30 hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 scale-[0.35] opacity-0 transition-[opacity,scale] duration-300 ease-out [backdrop-filter:invert(1)] [-webkit-backdrop-filter:invert(1)] ${groupHoverClass} lg:block ${className}`}
    >
      {/* 4 corner marker handles */}
      <span className="absolute -left-2 -top-2 h-4 w-4 bg-[var(--ink)]" />
      <span className="absolute -right-2 -top-2 h-4 w-4 bg-[var(--ink)]" />
      <span className="absolute -bottom-2 -left-2 h-4 w-4 bg-[var(--ink)]" />
      <span className="absolute -bottom-2 -right-2 h-4 w-4 bg-[var(--ink)]" />
    </span>
  );
}

