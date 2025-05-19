import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        {/* Global Header */}
        <Header />
        {/* Page Content */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
