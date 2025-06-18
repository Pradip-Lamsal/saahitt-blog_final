import type { Metadata } from "next";
import { Domine, Geist, Geist_Mono, Manrope } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { recoleta } from "./fonts";
import "./globals.css";

/**
 * Font configuration
 */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const domine = Domine({
  variable: "--font-domine",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/**
 * Metadata for the website
 */
export const metadata: Metadata = {
  title: "Saahitt Blog",
  description: "A blog platform for Saahitt",
};

/**
 * Root Layout
 *
 * This component wraps all pages and includes:
 * - Global fonts
 * - Header component
 * - Main content
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${manrope.variable} ${domine.variable} ${geistMono.variable} ${recoleta.variable} antialiased bg-white`}
      >
        {/* Global Header */}
        <Header />
        {/* Page Content */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
