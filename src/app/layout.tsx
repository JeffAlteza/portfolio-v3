import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import DotField from "@/components/shared/dot-field";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jeffreyalteza.dev"),
  title: "Jeffrey Alteza — Backend Engineer & AI Automation Specialist",
  description:
    "Production backend APIs and AI-powered automation systems. Laravel, Node, n8n, and the modern LLM stack — engineered with agentic precision.",
  openGraph: {
    title: "Jeffrey Alteza — Backend Engineer & AI Automation Specialist",
    description: "Production backend APIs and AI-powered automation systems.",
    type: "website",
    siteName: "Jeffrey Alteza",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeffrey Alteza — Backend Engineer & AI Automation Specialist",
    description: "Production backend APIs and AI-powered automation systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0"
        >
          <DotField
            dotRadius={1.5}
            dotSpacing={13}
            cursorRadius={450}
            cursorForce={0}
            bulgeOnly={true}
            bulgeStrength={32}
            glowRadius={160}
            waveAmplitude={0}
            sparkle={true}
            gradientFrom="#351057"
            gradientTo="#7917d1"
            glowColor="#120f17"
          />
        </div>
        <div
          aria-hidden
          className="pointer-events-none fixed -top-[30%] left-1/2 z-0 h-[80%] w-[70%] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(168,85,247,0.15),transparent_55%)]"
        />
        {children}
      </body>
    </html>
  );
}
