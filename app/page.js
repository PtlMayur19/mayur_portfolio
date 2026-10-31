import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CaseStudySection from "./components/CaseStudySection";

/**
 * Homepage — Home, About Me, and Case Study (Featured Works) sections.
 * Subsequent sections (Playground, Contact) will be added after review.
 */
export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-[1400px] shadow-2xl">
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <CaseStudySection />

        {/* ── Placeholder anchors so nav links don't 404 ── */}
        {/* These will be replaced with real sections in upcoming phases */}
        <div id="playground" style={{ height: 1, visibility: "hidden" }} aria-hidden="true" />
        <div id="contact"    style={{ height: 1, visibility: "hidden" }} aria-hidden="true" />
      </main>
    </div>
  );
}
