import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MapFuture - Discover Your Career Roadmap",
  description: "Stop searching. Start progressing. MapFuture helps students, graduates, and career changers discover the exact paths to their target careers with interactive roadmaps, verified certifications, and portfolio projects.",
  keywords: "career roadmap, learning path, AI engineer, data analyst, cybersecurity analyst, tech careers, certifications, coding projects",
  openGraph: {
    title: "MapFuture - Discover Your Career Roadmap",
    description: "Stop searching. Start progressing. Discover interactive career pathways, verified course recommendations, and portfolio-worthy projects.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#030712] text-gray-100 font-sans selection:bg-violet-500/30 selection:text-violet-200">
        {/* Glow effect at top header */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent pointer-events-none" />
        <Navbar />
        <main className="flex-grow relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
