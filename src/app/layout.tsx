import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/lib/lenis";
import CookingSplash from "@/components/CookingSplash";

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
          className={`${geistSans.variable} ${geistMono.variable} bg-black antialiased`}
        >
          <CookingSplash />

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
