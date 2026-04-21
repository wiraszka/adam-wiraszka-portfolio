import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adam Wiraszka",
  description: "Software Engineer — portfolio and project showcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-screen bg-outer-bg flex flex-col">
        <Nav />
        {/* mt-12 matches the fixed nav height (h-12 in Nav.tsx) — keep in sync */}
        <div className="mt-12 mx-4 mb-4 rounded-3xl bg-card-bg flex-1 card-reveal">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
