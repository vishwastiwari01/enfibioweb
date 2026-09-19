import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enfibio Technologies | Intelligent Hardware & Emerging Technology",
  description:
    "Enfibio Technologies develops intelligent hardware, AI systems, and emerging technologies to address real-world challenges across agriculture, infrastructure, and beyond.",
  keywords: [
    "Enfibio",
    "THAND.AI",
    "Smart Portable Freezer",
    "AgriTech",
    "Intelligent Hardware",
    "AI Systems",
    "Nanobiotechnology",
    "Deep Tech",
    "India",
  ],
  openGraph: {
    title: "Enfibio Technologies | Intelligent Hardware & Emerging Technology",
    description:
      "Developing intelligent hardware, AI systems, and emerging technologies for real-world impact.",
    type: "website",
    url: "https://www.enfibio.me",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-full antialiased bg-[#FAFCFB] text-[#102F3D]">
        {children}
      </body>
    </html>
  );
}
