import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ResumeSection from "./ResumeSection";

export const metadata = {
  title: "About & Resume – Mayur Patel",
  description:
    "Creative scrapbook resume and background of Mayur Patel, Computer Science student and Software Developer.",
};

/**
 * Dedicated About page (/about)
 * Houses the physical scrapbook-style Resume presentation.
 */
export default function AboutPage() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 w-full">
        <ResumeSection />
      </main>

      <Footer />
    </div>
  );
}

