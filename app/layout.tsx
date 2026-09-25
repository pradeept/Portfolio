import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const fraunces = localFont({
  src: "./fonts/fraunces-latin.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-fraunces",
});
const caveat = localFont({
  src: "./fonts/caveat-latin.woff2",
  weight: "400 700",
  display: "swap",
  variable: "--font-caveat",
});
const dmMono = localFont({
  src: [
    { path: "./fonts/dm-mono-400-latin.woff2", weight: "400" },
    { path: "./fonts/dm-mono-500-latin.woff2", weight: "500" },
  ],
  display: "swap",
  variable: "--font-dm-mono",
});
const origin =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  title: "Pradeep Tarakar — A little of everything",
  description:
    "Projects, security side quests, field notes, and a shelf of technical papers from Pradeep Tarakar.",
  metadataBase: new URL(origin),
  openGraph: {
    title: "Pradeep Tarakar — A little of everything",
    description: "Jack of many trades? Guilty.",
    type: "website",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${caveat.variable} ${dmMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
