import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SkillAI — Learn AI Tools, Productivity & Business Skills",
  description:
    "Master ChatGPT, Excel, Power BI and more through online classes, live workshops, and certified AI masterclasses.",
  openGraph: {
    title: "SkillAI — Learn AI Tools, Productivity & Business Skills",
    description:
      "Master ChatGPT, Excel, Power BI and more through online classes, live workshops, and certified AI masterclasses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js" strategy="beforeInteractive" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
