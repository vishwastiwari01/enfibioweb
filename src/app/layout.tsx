import type { Metadata } from "next";
import { Orbitron, Barlow, Barlow_Condensed, Share_Tech_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Enfibio Technologies — Mission Control",
  description: "Defense Intelligence · AI Swarm Systems · Frontier Hardware. Building the Intelligence Layer of the Real World.",
  keywords: ["Enfibio", "Defense Tech", "AI", "Swarm Systems", "Drone", "Intelligence", "Hardware"],
  openGraph: {
    title: "Enfibio Technologies — Mission Control",
    description: "Defense Intelligence · AI Swarm Systems · Frontier Hardware",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${orbitron.variable} ${barlow.variable} ${barlowCondensed.variable} ${shareTechMono.variable}`}
    >
      <body className="min-h-full antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div className="bg-mesh-glow">
            <div className="bg-mesh-bubble bg-mesh-bubble-1" />
            <div className="bg-mesh-bubble bg-mesh-bubble-2" />
            <div className="bg-mesh-bubble bg-mesh-bubble-3" />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
