import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import FooterPage from "@/anindo/components/footer/FooterPage";
import Navbar from "@/anindo/components/navbar/Navbar";
import FadeInSection from "@/anindo/shared/FadeInSection";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Anindo-Next.js-Portfolio",
  description: "Generated by Anindo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth `}
      >
        {/* navbar */}
        <Navbar />
        {/* <FadeInSection> */}
        {children}

        {/* footer */}
        <FooterPage />
        {/* </FadeInSection> */}
      </body>
    </html>
  );
}
