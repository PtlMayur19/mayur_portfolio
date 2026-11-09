import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CaseStudySection from "./components/CaseStudySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

/**
 * Homepage — Home, About Me, Case Study (Featured Works), Contact, and Footer.
 */
export default function HomePage() {
  return (
    <div className="w-full">
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <CaseStudySection />

        {/* ── Placeholder anchor for upcoming Playground section ── */}
        <div id="playground" style={{ height: 1, visibility: "hidden" }} aria-hidden="true" />

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
