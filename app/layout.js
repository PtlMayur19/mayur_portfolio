import { Pixelify_Sans, Caveat, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

/* ── Google Fonts via next/font ── */
const pixelFont = Pixelify_Sans({
  variable: "--font-pixel",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const handFont = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

/* ── Site metadata ── */
export const metadata = {
  title: "Mayur Patel – Software Engineer & Full Stack Developer",
  description:
    "Portfolio of Mayur Patel, a CS student at CHARUSAT building full-stack products including GrowVeda, Deepfake Audio Detection, and AlmaSetu.",
  openGraph: {
    title: "Mayur Patel – Software Engineer & Full Stack Developer",
    description:
      "CS student at CHARUSAT · Full-Stack Developer · Building products that matter.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
        ${pixelFont.variable}
        ${handFont.variable}
        ${bodyFont.variable}
        ${monoFont.variable}
        h-full antialiased
      `}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
