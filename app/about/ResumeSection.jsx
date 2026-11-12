"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Download, FileText, CheckCircle2, Sparkles } from "lucide-react";
import { siteData } from "../../data/site";

/* ── Realistic Silver Clipboard Clamp at the top of the scrapbook board ── */
function ClipboardClamp() {
  return (
    <div
      className="absolute -top-7 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center select-none pointer-events-none"
      aria-hidden="true"
    >
      {/* Hanging metallic ring / loop */}
      <div className="w-12 h-6 rounded-t-full border-[3px] border-[#8a8d91] bg-transparent shadow-[0_2px_4px_rgba(0,0,0,0.25)] -mb-1" />

      {/* Main metal clamp body */}
      <div className="relative w-44 sm:w-56 h-10 bg-gradient-to-b from-[#e3e6e8] via-[#cbd0d4] to-[#9aa0a6] rounded-md border-2 border-[#5c6166] shadow-[0_6px_14px_rgba(26,24,22,0.35),inset_0_1px_0_rgba(255,255,255,0.8)] flex items-center justify-between px-6">
        {/* Left rivet */}
        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#ffffff] to-[#7a7f85] border border-[#4a4e52] shadow-[inset_0_1px_1px_rgba(0,0,0,0.5)]" />

        {/* Center cutout grip slot */}
        <div className="w-20 sm:w-28 h-2 rounded-full bg-[#3d4247] shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]" />

        {/* Right rivet */}
        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#ffffff] to-[#7a7f85] border border-[#4a4e52] shadow-[inset_0_1px_1px_rgba(0,0,0,0.5)]" />

        {/* Clamp bottom shadow bevel */}
        <div className="absolute -bottom-1.5 left-4 right-4 h-1.5 bg-[#2a2d30] rounded-b-sm opacity-60" />
      </div>
    </div>
  );
}

/* ── Realistic Silver Metal Paperclip ── */
function MetalPaperclip({ className = "" }) {
  return (
    <svg
      viewBox="0 0 32 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-12 text-[#9da3a8] drop-shadow-[1px_2px_2px_rgba(0,0,0,0.3)] ${className}`}
      aria-hidden="true"
    >
      <path
        d="M 16 4 C 8 4, 8 16, 8 22 L 8 56 C 8 64, 24 64, 24 56 L 24 16 C 24 10, 14 10, 14 16 L 14 50 C 14 54, 20 54, 20 50 L 20 22"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 16 4 C 8 4, 8 16, 8 22 L 8 56 C 8 64, 24 64, 24 56 L 24 16 C 24 10, 14 10, 14 16 L 14 50 C 14 54, 20 54, 20 50 L 20 22"
        stroke="#ffffff"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />
    </svg>
  );
}

/* ── Spiral Notebook Top Binding Rings ── */
function SpiralBindingRings() {
  return (
    <div
      className="w-full flex items-center justify-center gap-3 sm:gap-4 md:gap-5 px-4 py-3 bg-[#f7f2e4] border-b border-[var(--ink)]/15 select-none overflow-hidden"
      aria-hidden="true"
    >
      {[...Array(14)].map((_, i) => (
        <div key={i} className="relative flex flex-col items-center shrink-0">
          {/* Double wire spiral loops */}
          <div className="w-2.5 sm:w-3 h-5 sm:h-6 rounded-full bg-gradient-to-r from-[#d1d5db] via-[#ffffff] to-[#9ca3af] border border-[#4b5563] shadow-[0_2px_3px_rgba(0,0,0,0.35)] -my-1" />
          {/* Paper punch hole */}
          <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#3d3830] shadow-[inset_0_1.5px_2px_rgba(0,0,0,0.8)] mt-0.5" />
        </div>
      ))}
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

/* ── Action Arrow pointing to View & Download buttons ── */
function ActionCurvedArrow() {
  return (
    <svg
      viewBox="0 0 70 34"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-6 sm:w-12 sm:h-7 text-[var(--ink)] inline-block select-none -rotate-6"
      aria-hidden="true"
    >
      <path d="M 4 8 C 22 6, 46 14, 58 24" />
      <path d="M 48 24 L 59 24 L 56 14" />
    </svg>
  );
}

export default function ResumeSection() {
  const [imgError, setImgError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const resumePdfPath = siteData.socials?.resume || "/Mayur_Patel_Resume.pdf";
  const downloadFileName = "Mayur_Patel_Resume.pdf";

  const boardMotionProps = shouldReduceMotion
    ? {}
    : {
        whileHover: { y: -3 },
        transition: { type: "spring", stiffness: 260, damping: 25 },
      };

  const polaroidMotionProps = shouldReduceMotion
    ? {}
    : {
        whileHover: { scale: 1.03, rotate: 0, y: -4 },
        transition: { type: "spring", stiffness: 280, damping: 22 },
      };

  return (
    <section
      id="resume"
      className="relative scroll-mt-20 px-3 sm:px-6 md:px-8 py-10 sm:py-16 paper-sheet w-full overflow-hidden"
      aria-labelledby="resume-heading"
    >
      <div className="relative mx-auto max-w-6xl">
        {/* ── 1. SECTION HEADING ── */}
        <div className="flex flex-col items-center text-center px-4 mb-10 sm:mb-14 select-none">
          {/* Handwritten Subtitle: "A little document about what I've been building." */}
          <div className="inline-flex items-center -rotate-2 select-none mb-1 sm:mb-2">
            <span className="font-hand text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--ink)]">
              &ldquo;A little document about what I&apos;ve been building.&rdquo;
            </span>
            <HeaderDoodleArrow />
          </div>

          {/* Large Pixelify Sans Display Heading: "MY RESUME" */}
          <h1
            id="resume-heading"
            className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-[var(--ink)] uppercase leading-none my-2 sm:my-3 drop-shadow-[2px_3px_0_rgba(255,255,255,0.7)]"
          >
            MY RESUME
          </h1>

          {/* Decorative Tag: "DOCUMENT 001 · 2026" */}
          <div className="mt-2 inline-block select-none">
            <span
              className="torn-tag-sm"
              style={{
                backgroundColor: "var(--yellow)",
                color: "var(--ink)",
                transform: "rotate(-1.5deg)",
              }}
            >
              DOCUMENT 001 · 2026
            </span>
          </div>
        </div>

        {/* ── 2. MAIN PHYSICAL SCRAPBOOK BOARD ── */}
        <motion.div
          {...boardMotionProps}
          className="relative mx-auto w-full pt-6 sm:pt-8"
        >
          {/* Wood / Kraft Clipboard Backing */}
          <div
            className="relative rounded-2xl sm:rounded-3xl border-[3.5px] border-[var(--ink)] shadow-[0_22px_45px_rgba(26,24,22,0.22),6px_9px_0_var(--ink)] p-3 sm:p-6 md:p-8 lg:p-10"
            style={{
              backgroundColor: "#dfceb4",
              backgroundImage: `
                radial-gradient(circle at 15% 20%, rgba(255,255,255,0.25) 0%, transparent 40%),
                radial-gradient(circle at 85% 80%, rgba(0,0,0,0.06) 0%, transparent 45%),
                repeating-linear-gradient(45deg, rgba(168,140,105,0.08) 0px, rgba(168,140,105,0.08) 2px, transparent 2px, transparent 8px)
              `,
            }}
          >
            {/* Realistic Top Metal Clipboard Clamp */}
            <ClipboardClamp />

            {/* Corner Washi Tape Pins */}
            <div
              className="absolute -top-3 -left-3 tape tape-cyan z-20 pointer-events-none -rotate-45 hidden sm:block opacity-85 shadow-sm"
              aria-hidden="true"
            />
            <div
              className="absolute -top-3 -right-3 tape tape-yellow z-20 pointer-events-none rotate-45 hidden sm:block opacity-85 shadow-sm"
              aria-hidden="true"
            />

            {/* Inner Layout Grid: Left Sidebar (Polaroid & Info Card) + Central/Right Document Area */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

              {/* ── LEFT COLUMN: Tilted Polaroid + Mini Info Card ── */}
              <div className="lg:col-span-4 flex flex-col items-center lg:items-start gap-6 select-none">

                {/* 1. Polaroid Photo Card */}
                <motion.div
                  {...polaroidMotionProps}
                  className="relative w-full max-w-[280px] sm:max-w-[300px] mx-auto lg:mx-0 cursor-default"
                  style={{ transform: "rotate(-3.5deg)" }}
                >
                  {/* Top Pink Washi Tape strip */}
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 tape tape-pink shadow-sm"
                    style={{ transform: "translateX(-50%) rotate(2deg)" }}
                    aria-hidden="true"
                  />

                  {/* Polaroid Paper Frame */}
                  <figure className="bg-white p-3.5 pb-4 rounded-[3px] border border-black/15 shadow-[0_10px_24px_rgba(26,24,22,0.18)]">
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#ECE6D9] rounded-[2px] border border-black/10">
                      {!imgError ? (
                        <Image
                          src="/images/portrait.jpg"
                          alt="Mayur Patel - Software Engineer"
                          fill
                          priority
                          sizes="(max-width: 640px) 280px, 320px"
                          className="object-cover object-top transition-transform duration-500 hover:scale-105"
                          onError={() => setImgError(true)}
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-[#F5EADB] to-[#E5D5C1] text-[var(--ink)]">
                          <span className="font-display text-4xl mb-1 text-[var(--orange)]">✦</span>
                          <p className="font-mono text-xs uppercase tracking-wider font-bold">
                            Mayur Patel
                          </p>
                        </div>
                      )}
                    </div>

                    <figcaption className="mt-3 text-center">
                      <span className="font-hand text-2xl sm:text-[1.7rem] font-bold text-[var(--ink)] tracking-wide block leading-tight">
                        MAYUR PATEL
                      </span>
                      <span className="font-mono text-[11px] font-bold text-[var(--blue)] tracking-widest block uppercase mt-0.5">
                        SOFTWARE DEVELOPER
                      </span>
                    </figcaption>
                  </figure>
                </motion.div>

                {/* 2. Mini Clipped Contact / Details Card (Inspired by Amru's contact card) */}
                <div
                  className="relative w-full max-w-[280px] sm:max-w-[300px] mx-auto lg:mx-0 bg-[#fffdfa] border-2 border-[var(--ink)] p-4 sm:p-4.5 rounded-[4px] shadow-[4px_5px_0_var(--ink)] -rotate-1 transition-transform duration-200 hover:rotate-0"
                  style={{
                    borderRadius: "14px 4px 10px 4px / 4px 10px 4px 14px",
                  }}
                >
                  {/* Metal Paperclip on top-left edge */}
                  <div className="absolute -top-5 left-6 z-20 pointer-events-none">
                    <MetalPaperclip />
                  </div>

                  {/* Header */}
                  <div className="flex items-center justify-between mb-2.5 pt-1 pl-7">
                    <span className="font-display text-base font-bold text-[var(--pink)] tracking-wider uppercase">
                      DETAILS
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[var(--green)] animate-pulse" />
                  </div>

                  {/* Contact / Academic items */}
                  <div className="space-y-2 text-xs font-mono text-[var(--ink)]/85">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--yellow)] shrink-0" />
                      <span className="font-bold">ROLE:</span>
                      <span className="truncate">Software Engineer</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue)] shrink-0" />
                      <span className="font-bold">EDU:</span>
                      <span className="truncate">B.Tech CSE (CHARUSAT)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] shrink-0" />
                      <span className="font-bold">STATUS:</span>
                      <span className="text-[var(--green)] font-bold">Open to work</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--orange)] shrink-0" />
                      <span className="font-bold">LOC:</span>
                      <span>Gujarat, India</span>
                    </div>
                  </div>

                  {/* Handwritten sticker note inside */}
                  <div className="mt-3 pt-2.5 border-t border-dashed border-[var(--ink)]/20 flex items-center justify-between">
                    <span className="font-hand text-base font-bold text-[var(--ink)] -rotate-1">
                      verified &amp; updated ✦
                    </span>
                    <span className="font-mono text-[10px] uppercase font-bold text-[var(--ink)]/60 bg-[var(--yellow)]/40 px-1.5 py-0.5 rounded">
                      2026
                    </span>
                  </div>
                </div>

                {/* 3. Small Decorative Tape Note */}
                <div className="hidden lg:flex items-center gap-2 text-xs font-hand text-[var(--ink)]/75 pl-2 select-none -rotate-2">
                  <Sparkles className="w-4 h-4 text-[var(--orange)]" />
                  <span className="text-base font-bold">
                    full-page PDF document attached
                  </span>
                </div>
              </div>

              {/* ── RIGHT COLUMN: Large Spiral-Bound Document Sheet with REAL PDF ── */}
              <div className="lg:col-span-8 flex flex-col w-full">
                {/* White/Cream Paper Sheet Container */}
                <div
                  className="relative w-full bg-[#FCF9F2] border-[3px] border-[var(--ink)] rounded-lg shadow-[5px_7px_0_var(--ink)] overflow-hidden"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle, rgba(26,24,22,0.06) 1px, transparent 1px)
                    `,
                    backgroundSize: "20px 20px",
                  }}
                >
                  {/* Spiral binding rings along the top of the paper */}
                  <SpiralBindingRings />

                  {/* Document Header Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 py-2.5 bg-white/80 border-b-2 border-[var(--ink)]/15 select-none">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[var(--blue)]" />
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
                        Mayur_Patel_Resume.pdf
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-[var(--green)] bg-[var(--green)]/10 px-2 py-0.5 rounded border border-[var(--green)]/30">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        PAGE 1 OF 1
                      </span>
                      <a
                        href={resumePdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:inline-flex items-center gap-1 font-mono text-[11px] font-bold uppercase text-[var(--blue)] hover:underline"
                        title="Open in new window"
                      >
                        EXPAND <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* ── ACTUAL PDF VIEWER CONTAINER ── */}
                  <div className="relative w-full p-2.5 sm:p-4 md:p-5 bg-[#ebe6d8]/60">
                    {/* Inner Paper Mount Frame */}
                    <div className="relative w-full bg-white rounded-[2px] border-2 border-[var(--ink)] shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.12)] overflow-hidden">
                      {/* Embedded PDF iframe viewer */}
                      <div className="relative w-full h-[520px] sm:h-[620px] md:h-[720px] bg-white">
                        <iframe
                          src={`${resumePdfPath}#view=FitH&toolbar=0&navpanes=0`}
                          className="w-full h-full border-0"
                          title="Mayur Patel Resume Viewer"
                        />
                      </div>
                    </div>

                    {/* Bottom torn-paper zig-zag decoration edge */}
                    <div
                      className="w-full h-3 mt-3 opacity-30 select-none pointer-events-none"
                      style={{
                        backgroundImage: `repeating-linear-gradient(45deg, var(--ink) 0, var(--ink) 4px, transparent 4px, transparent 8px)`,
                      }}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* ── 3. BOTTOM AREA: FUNCTIONAL BUTTONS & ANNOTATION ── */}
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 pt-2">
                  {/* Handwritten Annotation: "take a closer look →" */}
                  <div className="flex items-center gap-2 select-none -rotate-1">
                    <span className="font-hand text-2xl sm:text-3xl font-bold text-[var(--ink)]">
                      take a closer look
                    </span>
                    <ActionCurvedArrow />
                  </div>

                  {/* Two Functional Buttons */}
                  <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-4 w-full sm:w-auto">
                    {/* Button 1: VIEW FULL RESUME ↗ */}
                    <a
                      href={resumePdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono inline-flex items-center justify-center gap-2 bg-white text-[var(--ink)] border-2 border-[var(--ink)] px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-widest shadow-[3px_3.5px_0_var(--ink)] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4.5px_5px_0_var(--ink)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1.5px_0_var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)] cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4 text-[var(--blue)]" />
                      VIEW FULL RESUME ↗
                    </a>

                    {/* Button 2: DOWNLOAD RESUME ↓ */}
                    <a
                      href={resumePdfPath}
                      download={downloadFileName}
                      className="font-mono inline-flex items-center justify-center gap-2 bg-[var(--yellow)] text-[var(--ink)] border-2 border-[var(--ink)] px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-widest shadow-[3px_3.5px_0_var(--ink)] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4.5px_5px_0_var(--ink)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1.5px_0_var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] cursor-pointer"
                    >
                      <Download className="w-4 h-4 text-[var(--ink)]" />
                      DOWNLOAD RESUME ↓
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
