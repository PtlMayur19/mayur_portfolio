"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Heart, Star, User, LayoutGrid, Diamond, Menu, X } from "lucide-react";
import { siteData } from "../../data/site";

const NAV_LINKS = [
  { href: "/#home",       label: "HOME",       id: "home",       Icon: Star },
  { href: "/about",       label: "ABOUT",      id: "about",      Icon: User },
  { href: "/#case-study", label: "CASE STUDY", id: "case-study", Icon: LayoutGrid },
  { href: "/#playground", label: "PLAYGROUND", id: "playground", Icon: Diamond },
];

/* ── Circular social icon dot ── */
function SocialDot({ href, label, bg, children }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border-2 border-white transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)] shadow-[1px_1.5px_0_rgba(25,21,16,0.25)]"
      style={{ backgroundColor: bg, color: "var(--ink)" }}
    >
      {children}
    </a>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId]  = useState("home");
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";
  const isContactPage = pathname === "/contact";

  const linkedinUrl = siteData.socials?.linkedin || "#";
  const dribbbleUrl = siteData.socials?.dribbble || siteData.socials?.github || "#";
  const instagramUrl = siteData.socials?.instagram || "#";

  /* ── Active-section tracking on homepage ── */
  useEffect(() => {
    if (isContactPage || isAboutPage) {
      if (isAboutPage) setActiveId("about");
      return;
    }
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
  }, [isContactPage, isAboutPage]);

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
            href="/#home"
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
            {NAV_LINKS.map(({ href, label, id, Icon }) => {
              const isActive = isAboutPage ? id === "about" : (!isContactPage && activeId === id);
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
                  <Icon
                    className={`h-4 w-4 ${isActive ? "fill-current" : ""}`}
                    aria-hidden="true"
                    style={{ filter: "drop-shadow(1px 1.5px 0 rgba(25,21,16,0.25))" }}
                  />
                  {label}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Right: social circles + Contact button + hamburger */}
        <div className="flex items-center gap-2 py-2">

          {/* LinkedIn */}
          <SocialDot href={linkedinUrl} label="LinkedIn" bg="var(--yellow)">
            <svg viewBox="0 0 24 24" width={14} height={14} fill="currentColor" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </SocialDot>

          {/* Dribbble */}
          <SocialDot href={dribbbleUrl} label="Dribbble" bg="var(--pink)">
            <svg viewBox="0 0 24 24" width={14} height={14} fill="currentColor" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
              <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 5.99 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.298zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
            </svg>
          </SocialDot>

          {/* Instagram */}
          <SocialDot href={instagramUrl} label="Instagram" bg="var(--green)">
            <svg viewBox="0 0 24 24" width={14} height={14} fill="currentColor" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
              <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
            </svg>
          </SocialDot>

          {/* CONTACT outlined button (desktop) - hidden on /contact page */}
          {!isContactPage && (
            <a
              href="/contact"
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
          )}

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
          {NAV_LINKS.map(({ href, label, id, Icon }) => {
            const isActive = isAboutPage ? id === "about" : (!isContactPage && activeId === id);
            return (
              <a
                key={id}
                href={href}
                onClick={close}
                aria-current={isActive ? "page" : undefined}
                className="flex items-center gap-3 px-5 py-4 text-xs font-bold uppercase tracking-widest border-b transition-colors"
                style={{
                  fontFamily: "var(--font-mono), 'Space Mono', monospace",
                  borderColor: "rgba(26,24,22,0.08)",
                  backgroundColor: isActive ? "var(--yellow)" : "transparent",
                  color: "var(--ink)",
                }}
              >
                <Icon className={`h-4 w-4 ${isActive ? "fill-current" : ""}`} aria-hidden="true" />
                {label}
              </a>
            );
          })}
          {!isContactPage && (
            <a
              href="/contact"
              onClick={close}
              className="flex items-center gap-3 px-5 py-4 text-xs font-bold uppercase tracking-widest transition-colors"
              style={{
                fontFamily: "var(--font-mono), 'Space Mono', monospace",
                backgroundColor: "var(--ink)",
                color: "#fff",
              }}
            >
              <Heart className="h-4 w-4" aria-hidden="true" />
              CONTACT
            </a>
          )}
        </nav>
      )}
    </header>
  );
}
