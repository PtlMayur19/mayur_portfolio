"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import { siteData } from "../../data/site";

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const contactEmail = siteData.socials?.email || "hello@mayurpatel.dev";
  const emailHref = contactEmail.startsWith("mailto:")
    ? contactEmail
    : `mailto:${contactEmail}`;
  const linkedinUrl = siteData.socials?.linkedin || "#";
  const dribbbleUrl = siteData.socials?.dribbble || siteData.socials?.github || "#";
  const instagramUrl = siteData.socials?.instagram || "#";

  const handleNext = (e) => {
    e.preventDefault();
    if (!message.trim()) {
      setError("Please tell me about your project or say hi!");
      return;
    }
    setError("");
    setStep(2);
  };

  const handleBack = () => {
    setError("");
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  const handleReset = () => {
    setMessage("");
    setName("");
    setEmail("");
    setUrl("");
    setStep(1);
    setSubmitted(false);
    setError("");
  };

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />

      <main className="relative flex-1 flex flex-col justify-center px-4 py-10 sm:py-16 paper-sheet w-full overflow-x-clip">
        {/* ── 5. Floating Polaroid Images (Desktop large screens) ── */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block overflow-hidden" aria-hidden="true">
          {/* Left Polaroid: lifestyle / random shot */}
          <div
            className="absolute left-[7%] xl:left-[9%] top-[14%] w-60 xl:w-72"
            style={{ transform: "rotate(-8deg)" }}
          >
            <span className="pointer-events-auto block w-full transition-transform duration-300 hover:scale-105">
              <figure className="relative inline-block bg-white p-2.5 pb-2 shadow-[0_6px_18px_rgba(17,18,18,0.22)] w-full">
                {/* Corner Washi Tapes */}
                <span
                  aria-hidden="true"
                  className="absolute -left-4 -top-2 z-10 h-5 w-16 -rotate-[38deg] bg-[var(--tape-cyan)] opacity-80 shadow-[0_1px_3px_rgba(17,18,18,0.15)]"
                />
                <span
                  aria-hidden="true"
                  className="absolute -right-4 -top-2 z-10 h-5 w-16 rotate-[38deg] bg-[var(--tape-yellow)] opacity-80 shadow-[0_1px_3px_rgba(17,18,18,0.15)]"
                />

                <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-100">
                  <Image
                    src="/images/lifestyle.jpg"
                    alt="random shot"
                    fill
                    sizes="288px"
                    className="object-cover"
                    priority
                  />
                </div>
                <figcaption className="font-hand mt-1.5 text-center text-lg leading-tight text-[var(--ink)]/75 select-none">
                  random shot
                </figcaption>
              </figure>
            </span>
          </div>

          {/* Right Polaroid: portrait / what is this */}
          <div
            className="absolute right-[7%] xl:right-[9%] top-[18%] w-60 xl:w-72"
            style={{ transform: "rotate(9deg)" }}
          >
            <span className="pointer-events-auto block w-full transition-transform duration-300 hover:scale-105">
              <figure className="relative inline-block bg-white p-2.5 pb-2 shadow-[0_6px_18px_rgba(17,18,18,0.22)] w-full">
                {/* Corner Washi Tapes */}
                <span
                  aria-hidden="true"
                  className="absolute -left-4 -top-2 z-10 h-5 w-16 -rotate-[38deg] bg-[var(--tape-cyan)] opacity-80 shadow-[0_1px_3px_rgba(17,18,18,0.15)]"
                />
                <span
                  aria-hidden="true"
                  className="absolute -right-4 -top-2 z-10 h-5 w-16 rotate-[38deg] bg-[var(--tape-yellow)] opacity-80 shadow-[0_1px_3px_rgba(17,18,18,0.15)]"
                />

                <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-100">
                  <Image
                    src="/images/portrait.jpg"
                    alt="what is this"
                    fill
                    sizes="288px"
                    className="object-cover"
                    priority
                  />
                </div>
                <figcaption className="font-hand mt-1.5 text-center text-lg leading-tight text-[var(--ink)]/75 select-none">
                  what is this
                </figcaption>
              </figure>
            </span>
          </div>
        </div>

        {/* ── Central Column Composition ── */}
        <div className="relative z-10 mx-auto my-auto flex w-full max-w-2xl flex-col items-center">
          {/* 4A. "say hi" handwritten label + squiggles */}
          <div className="flex flex-col items-center select-none">
            <p className="font-hand text-2xl text-[var(--ink)] sm:text-3xl">say hi</p>
            <svg
              viewBox="0 0 64 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              className="mt-0.5 h-3 w-20 text-[var(--ink)]"
              aria-hidden="true"
            >
              <path d="M3 4c18-3 40-3 58 0" />
              <path d="M9 9c14-2.5 32-2.5 46 0" />
            </svg>
          </div>

          {/* 4B. CONTACT framed block with 4 blue corner markers */}
          <div className="mt-3 -rotate-2 select-none">
            <div className="relative border-[3px] border-[var(--ink)] px-6 py-1.5 sm:px-10 bg-transparent">
              <span className="absolute -left-2 -top-2 h-4 w-4 bg-[var(--blue)]" />
              <span className="absolute -right-2 -top-2 h-4 w-4 bg-[var(--blue)]" />
              <span className="absolute -bottom-2 -left-2 h-4 w-4 bg-[var(--blue)]" />
              <span className="absolute -bottom-2 -right-2 h-4 w-4 bg-[var(--blue)]" />
              <h1 className="font-display text-6xl uppercase leading-none tracking-tight text-[var(--ink)] sm:text-8xl lg:text-9xl">
                CONTACT
              </h1>
            </div>
          </div>

          {/* ── 6. Central Yellow Contact Form Card ── */}
          <div className="mt-5 w-full max-w-md">
            <div
              className="p-5 sm:p-6 shadow-[3px_5px_16px_rgba(17,18,18,0.16)] rounded-sm border border-[var(--ink)]/10"
              style={{ backgroundColor: "#f3e2ad" }}
            >
              <p className="font-mono text-sm font-bold uppercase tracking-widest text-[var(--ink)] select-none">
                GOT A PROJECT, A HARD PROBLEM, OR JUST WANT TO SAY HI? SEND IT OVER. I READ EVERY MESSAGE.
              </p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  /* Submission success screen */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 pt-2"
                  >
                    <div className="bg-white/70 p-4 border border-[var(--ink)]/15 rounded">
                      <p className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--green)]">
                        MESSAGE READY
                      </p>
                      <p className="font-hand text-xl text-[var(--ink)] mt-1">
                        Thanks for reaching out, {name}! Click below to deliver via your mail app, or copy directly.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <a
                          href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                            `Contact from ${name}`
                          )}&body=${encodeURIComponent(
                            `Hi Mayur,\n\n${message}\n\nFrom: ${name} (${email})${
                              url ? `\nLink: ${url}` : ""
                            }`
                          )}`}
                          className="font-mono inline-flex bg-[var(--ink)] px-4 py-2 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[var(--blue)]"
                        >
                          OPEN EMAIL CLIENT ↗
                        </a>
                        <button
                          type="button"
                          onClick={handleReset}
                          className="font-mono inline-flex border border-[var(--ink)] px-3 py-2 text-xs font-bold uppercase tracking-widest text-[var(--ink)] hover:bg-black/5"
                        >
                          Write Another
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ) : step === 1 ? (
                  /* Step 1: Project message */
                  <motion.form
                    key="step1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleNext}
                    className="mt-3"
                  >
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      id="ca-contact-message"
                      name="message"
                      aria-label="Your project message"
                      placeholder="Tell me a story, or a project idea…"
                      className="w-full border-0 bg-transparent p-0 font-hand text-xl sm:text-2xl text-[var(--ink)] shadow-none placeholder:text-[var(--ink)]/65 focus:outline-none focus:ring-0 resize-none min-h-28"
                    />

                    {error && (
                      <p className="font-mono text-xs font-bold text-red-600 mt-1 uppercase tracking-wide">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      className="font-mono mt-3 inline-flex items-center bg-[var(--ink)] px-4 py-2 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-[var(--blue)] cursor-pointer"
                    >
                      NEXT (1/2)
                    </button>
                  </motion.form>
                ) : (
                  /* Step 2: Contact Details */
                  <motion.form
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    onSubmit={handleSubmit}
                    className="mt-3 flex flex-col gap-3"
                  >
                    <div>
                      <label
                        htmlFor="ca-contact-name"
                        className="block font-mono text-xs font-bold uppercase tracking-widest text-[var(--ink)]/70 mb-1"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="ca-contact-name"
                        name="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jane Doe"
                        className="w-full border-0 border-b-2 border-[var(--ink)]/25 bg-transparent p-0 pb-1 text-base text-[var(--ink)] placeholder:text-[var(--ink)]/65 focus:outline-none focus:border-[var(--blue)] font-body"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="ca-contact-email"
                        className="block font-mono text-xs font-bold uppercase tracking-widest text-[var(--ink)]/70 mb-1"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="ca-contact-email"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jane@example.com"
                        className="w-full border-0 border-b-2 border-[var(--ink)]/25 bg-transparent p-0 pb-1 text-base text-[var(--ink)] placeholder:text-[var(--ink)]/65 focus:outline-none focus:border-[var(--blue)] font-body"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="ca-contact-url"
                        className="block font-mono text-xs font-bold uppercase tracking-widest text-[var(--ink)]/70 mb-1"
                      >
                        Portfolio or reference URL (optional)
                      </label>
                      <input
                        type="url"
                        id="ca-contact-url"
                        name="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="https://..."
                        className="w-full border-0 border-b-2 border-[var(--ink)]/25 bg-transparent p-0 pb-1 text-base text-[var(--ink)] placeholder:text-[var(--ink)]/65 focus:outline-none focus:border-[var(--blue)] font-body"
                      />
                    </div>

                    {error && (
                      <p className="font-mono text-xs font-bold text-red-600 mt-1 uppercase tracking-wide">
                        {error}
                      </p>
                    )}

                    <div className="mt-3 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={handleBack}
                        aria-label="Back to message step"
                        className="font-mono px-2 py-2 text-sm font-bold text-[var(--ink)]/70 transition-colors hover:text-[var(--ink)] cursor-pointer"
                      >
                        ←
                      </button>
                      <button
                        type="submit"
                        className="font-mono inline-flex items-center bg-[var(--ink)] px-4 py-2 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-[var(--blue)] cursor-pointer"
                      >
                        Send (2/2)
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ── 7. Handwritten Availability Message + Arrow ── */}
          <div className="mt-5 flex items-center gap-3 select-none">
            <svg
              viewBox="0 0 48 24"
              fill="none"
              stroke="var(--ink)"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="h-6 w-12 text-[var(--ink)]"
              aria-hidden="true"
            >
              <path d="M2 6c12 10 26 14 40 12" />
              <path d="M36 14l6 4-7 3" />
            </svg>
            <p className="font-hand text-2xl text-[var(--ink)] sm:text-3xl">
              Open to new work and good problems
            </p>
          </div>

          {/* Blue Monospace Email Link */}
          <p className="mt-2 text-sm font-bold">
            <a
              href={emailHref}
              className="font-mono text-[var(--blue)] underline-offset-2 hover:underline"
            >
              {contactEmail}
            </a>
          </p>

          {/* ── 8. Social Media Card (White rounded card with 3 links) ── */}
          <div
            className="mt-4 flex gap-2 rounded-2xl bg-white px-6 py-2.5 shadow-[0_12px_32px_rgba(17,18,18,0.12)] sm:gap-6 sm:px-8 border border-black/5"
            aria-label="Social profiles"
          >
            {/* LinkedIn */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono flex flex-col items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--ink)] transition-colors hover:text-[var(--blue)]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LINKEDIN
            </a>

            {/* Dribbble */}
            <a
              href={dribbbleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono flex flex-col items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--ink)] transition-colors hover:text-[var(--blue)]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 5.99 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.298zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
              </svg>
              DRIBBBLE
            </a>

            {/* Instagram */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono flex flex-col items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--ink)] transition-colors hover:text-[var(--blue)]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
              </svg>
              INSTAGRAM
            </a>
          </div>

          {/* ── Mobile Polaroid Cards (Shown gracefully below on small viewports) ── */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 lg:hidden w-full max-w-sm">
            <figure className="relative bg-white p-2 pb-1 shadow-[0_6px_18px_rgba(17,18,18,0.22)] -rotate-3 w-40">
              <span
                aria-hidden="true"
                className="absolute -left-3 -top-1.5 z-10 h-4 w-12 -rotate-[38deg] bg-[var(--tape-cyan)] opacity-80"
              />
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-100">
                <Image src="/images/lifestyle.jpg" alt="random shot" fill className="object-cover" />
              </div>
              <figcaption className="font-hand mt-1 text-center text-sm text-[var(--ink)]/75">
                random shot
              </figcaption>
            </figure>

            <figure className="relative bg-white p-2 pb-1 shadow-[0_6px_18px_rgba(17,18,18,0.22)] rotate-3 w-40">
              <span
                aria-hidden="true"
                className="absolute -right-3 -top-1.5 z-10 h-4 w-12 rotate-[38deg] bg-[var(--tape-yellow)] opacity-80"
              />
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-100">
                <Image src="/images/portrait.jpg" alt="what is this" fill className="object-cover" />
              </div>
              <figcaption className="font-hand mt-1 text-center text-sm text-[var(--ink)]/75">
                what is this
              </figcaption>
            </figure>
          </div>
        </div>
      </main>
    </div>
  );
}

