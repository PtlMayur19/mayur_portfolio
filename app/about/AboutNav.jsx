"use client";

import { useState, useEffect } from "react";
import { FileText, Sparkles, MessageCircle } from "lucide-react";

export default function AboutNav() {
  const [activeSection, setActiveSection] = useState("resume");

  useEffect(() => {
    const sections = ["resume", "highlights", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-25% 0px -50% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { id: "resume", label: "01. RESUME", icon: FileText },
    { id: "highlights", label: "02. HIGHLIGHTS", icon: Sparkles },
    { id: "contact", label: "03. LET'S TALK", icon: MessageCircle },
  ];

  return (
    <>
      {/* ── Desktop Left-Side Floating Scrapbook Bookmark ── */}
      <aside
        aria-label="About page sections navigation"
        className="hidden lg:block fixed left-4 xl:left-8 top-32 z-40 select-none"
      >
        <div
          className="relative bg-[#FFFDF7] border-[2.5px] border-[var(--ink)] shadow-[4px_5px_0_var(--ink)] p-3 rounded-[6px] w-48"
          style={{
            borderRadius: "10px 4px 12px 4px / 4px 12px 4px 10px",
          }}
        >
          {/* Top Washi Tape Strip */}
          <div
            className="absolute -top-3 left-1/2 -translate-x-1/2 tape tape-cyan h-4 w-20 opacity-85 shadow-sm -rotate-2"
            aria-hidden="true"
          />

          {/* Bookmark Header */}
          <div className="pt-1.5 pb-2 border-b border-dashed border-[var(--ink)]/20 text-center">
            <span className="font-hand text-xl font-bold text-[var(--ink)]">
              on this page ✦
            </span>
          </div>

          {/* Nav List */}
          <nav className="mt-2.5 flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  aria-current={isActive ? "true" : undefined}
                  className="font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 px-2.5 py-2 rounded-sm border transition-all duration-150 cursor-pointer text-left w-full"
                  style={{
                    backgroundColor: isActive ? "var(--yellow)" : "transparent",
                    borderColor: isActive ? "var(--ink)" : "transparent",
                    color: "var(--ink)",
                    boxShadow: isActive ? "2px_2.5px_0_var(--ink)" : "none",
                    transform: isActive ? "translate(-1px, -1px)" : "none",
                  }}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[var(--ink)]" : "text-[var(--ink)]/60"}`} />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* ── Mobile/Tablet Sticky Sub-Bar ── */}
      <div
        className="lg:hidden sticky top-[57px] z-30 w-full bg-[#FAF5E6]/95 backdrop-blur-md border-b border-[var(--ink)]/15 px-3 py-2 flex items-center justify-center gap-1.5 sm:gap-3 select-none"
        aria-label="About page mobile section navigation"
      >
        {navItems.slice(0, 2).map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              aria-current={isActive ? "true" : undefined}
              className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm border flex items-center gap-1.5 transition-all cursor-pointer"
              style={{
                backgroundColor: isActive ? "var(--yellow)" : "transparent",
                borderColor: isActive ? "var(--ink)" : "rgba(26,24,22,0.2)",
                color: "var(--ink)",
                boxShadow: isActive ? "1.5px_2px_0_var(--ink)" : "none",
              }}
            >
              <Icon className="w-3 h-3" />
              {item.label}
            </button>
          );
        })}
      </div>
    </>
  );
}

