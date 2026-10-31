"use client";

import { useState, useEffect } from "react";
import { Heart, Star, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#home",       label: "HOME",       id: "home" },
  { href: "#about",      label: "ABOUT",      id: "about" },
  { href: "#case-study", label: "CASE STUDY", id: "case-study" },
  { href: "#playground", label: "PLAYGROUND", id: "playground" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId]  = useState("home");

  /* ── Active-section tracking ── */
  useEffect(() => {
    const ids = ["home", "about", "case-study", "playground", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveId(e.target.id); });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  /* ── ESC closes mobile menu ── */
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backgroundColor: "var(--paper)",
        borderBottom: "1px solid rgba(26,24,22,0.08)",
        backdropFilter: "blur(4px)",
      }}
    >
      {/* ── Desktop / shared bar ── */}
      <div className="flex items-stretch justify-between pl-4 pr-3 sm:pl-5">

        {/* Left: logo + nav tabs */}
        <div className="flex items-stretch gap-0">

          {/* Smiley logo */}
          <a
            href="#home"
            aria-label="Mayur Patel – back to top"
            onClick={close}
            className="flex items-center pr-3 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)]"
          >
            <svg
              viewBox="0 0 24 24"
              width={28}
              height={28}
              className="h-7 w-7 shrink-0"
              aria-hidden="true"
              style={{ width: 28, height: 28, filter: "drop-shadow(1px 1.5px 0 rgba(25,21,16,0.28))" }}
            >
              <circle cx="12" cy="12" r="10" fill="var(--pink)" stroke="#fff" strokeWidth="2.5" paintOrder="stroke" />
              <circle cx="8.5"  cy="10.5" r="1.35" fill="#fff" />
              <circle cx="15.5" cy="10.5" r="1.35" fill="#fff" />
              <path d="M8 14 Q12 18 16 14" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-stretch md:flex" aria-label="Main navigation">
            {NAV_LINKS.map(({ href, label, id }) => {
              const isActive = activeId === id;
              return (
                <a
                  key={id}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className="flex items-center justify-center gap-2 px-5 py-4 text-xs leading-none tracking-widest transition-colors duration-150"
                  style={{
                    fontFamily: "var(--font-mono), 'Space Mono', monospace",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    backgroundColor: isActive ? "var(--yellow)" : "transparent",
                    color: "var(--ink)",
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.backgroundColor = "rgba(26,24,22,0.05)"; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.backgroundColor = "transparent"; }}
                >
                  {isActive && (
                    <Star
                      className="h-4 w-4 fill-current"
                      aria-hidden="true"
                      style={{ filter: "drop-shadow(1px 1.5px 0 rgba(25,21,16,0.25))" }}
                    />
                  )}
                  {label}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Right: social circles + Contact button + hamburger */}
        <div className="flex items-center gap-2 py-2">

          {/* LinkedIn */}
          <SocialDot href="#contact" label="LinkedIn" bg="var(--yellow)">
            <svg viewBox="0 0 24 24" width={14} height={14} fill="currentColor" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </SocialDot>

          {/* GitHub */}
          <SocialDot href="#contact" label="GitHub" bg="var(--pink)">
            <svg viewBox="0 0 24 24" width={14} height={14} fill="currentColor" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </SocialDot>

          {/* Email */}
          <SocialDot href="#contact" label="Email" bg="var(--green)">
            <svg viewBox="0 0 24 24" width={14} height={14} fill="none" stroke="currentColor" strokeWidth="2.2" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M2 7l10 7 10-7" />
            </svg>
          </SocialDot>

          {/* CONTACT outlined button (desktop) */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 border-2 px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors duration-200 hover:bg-[var(--ink)] hover:text-white"
            style={{
              fontFamily: "var(--font-mono), 'Space Mono', monospace",
              borderColor: "var(--ink)",
              color: "var(--ink)",
            }}
          >
            <Heart className="h-3.5 w-3.5" aria-hidden="true" />
            CONTACT
          </a>

          {/* Hamburger (mobile) */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center border-2 md:hidden"
            style={{ borderColor: "var(--ink)", backgroundColor: "var(--paper)" }}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      {menuOpen && (
        <nav
          id="mobile-nav"
          className="md:hidden"
          aria-label="Mobile navigation"
          style={{ borderTop: "1px solid rgba(26,24,22,0.08)", backgroundColor: "var(--paper)" }}
        >
          {NAV_LINKS.map(({ href, label, id }) => (
            <a
              key={id}
              href={href}
              onClick={close}
              className="flex items-center gap-3 px-5 py-4 text-xs font-bold uppercase tracking-widest border-b transition-colors"
              style={{
                fontFamily: "var(--font-mono), 'Space Mono', monospace",
                borderColor: "rgba(26,24,22,0.07)",
                backgroundColor: activeId === id ? "var(--yellow)" : "transparent",
                color: "var(--ink)",
              }}
            >
              {activeId === id && <Star className="h-4 w-4 fill-current" aria-hidden="true" />}
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={close}
            className="flex items-center gap-3 px-5 py-4 text-xs font-bold uppercase tracking-widest transition-colors"
            style={{
              fontFamily: "var(--font-mono), 'Space Mono', monospace",
              color: "var(--ink)",
            }}
          >
            <Heart className="h-4 w-4" aria-hidden="true" />
            CONTACT
          </a>
        </nav>
      )}
    </header>
  );
}

/* ── Helper: small circular social icon button ── */
function SocialDot({ href, label, bg, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-white text-[var(--ink)] transition-transform duration-200 hover:-translate-y-0.5"
      style={{
        width: 36,
        height: 36,
        backgroundColor: bg,
        boxShadow: "1.5px 1.5px 0 rgba(25,21,16,0.25)",
      }}
    >
      {children}
    </a>
  );
}
