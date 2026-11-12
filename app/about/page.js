import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import ResumeSection from "./ResumeSection";
import HighlightsSection from "./HighlightsSection";
import AboutNav from "./AboutNav";

export const metadata = {
  title: "About, Resume & Highlights – Mayur Patel",
  description:
    "Explore Mayur Patel's creative scrapbook resume, certifications, hackathons, media crew, and yoga achievements.",
};

/**
 * Dedicated About page (/about)
 * Houses the physical scrapbook-style Resume presentation,
 * followed directly by the Highlights section and Let's Talk.
 */
export default function AboutPage() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <AboutNav />

      <main className="flex-1 w-full">
        <ResumeSection />
        <HighlightsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
