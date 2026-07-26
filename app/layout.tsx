import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans = Geist({ variable: "--sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Kazi Md. Tawsif Rahman | Academic Portfolio",
    template: "%s | Kazi Md. Tawsif Rahman",
  },
  description:
    "Academic portfolio of Kazi Md. Tawsif Rahman — privacy-preserving machine learning and network security.",
  keywords: [
    "membership inference",
    "differential privacy",
    "network intrusion detection",
    "privacy-preserving machine learning",
  ],
  authors: [{ name: "Kazi Md. Tawsif Rahman" }],
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
