import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ReactLenis } from "@/lib/lenis";
import cooking from "@/../public/cooking.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pradeep Tarakar",
  description:
    "Pradeep Tarakar is a full stack developer. This is his personal portfolio to showcase his skills and experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ReactLenis root>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black scroll-smooth`}
        >
          <div className="flex flex-col justify-center items-center h-screen bg-black">
            <Image
              src={cooking}
              width={600}
              height={600}
              className="rounded-2xl"
              alt="cooking"
            />
            <h1 className="text-2xl text-center text-secondary font-mono">Cooking 🧑‍🍳!</h1>
          </div>

          {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
            <Navbar />
          </ThemeProvider>
          <Footer /> */}
        </body>
      </ReactLenis>
    </html>
  );
}
