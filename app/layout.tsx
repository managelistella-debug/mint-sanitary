import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

// Cocogoose Pro Outlined — logo, major section headings (h1/h2)
const cocogooseOutlined = localFont({
  src: "../public/fonts/Cocogoose Pro Outlined Trial.ttf",
  variable: "--font-coco-outlined",
  display: "swap",
});

// Cocogoose Pro Regular — nav items, card titles, pill labels, accordion headings
const cocogooseRegular = localFont({
  src: "../public/fonts/Cocogoose Pro Regular Trial.ttf",
  variable: "--font-coco-regular",
  display: "swap",
});

// Inter — body text, descriptions, buttons
const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Smart Cleaning | Professional Cleaning Services in Metro Vancouver",
  description:
    "Expert strata, commercial, and residential cleaning services across Vancouver, North Vancouver, West Vancouver, Burnaby, Richmond, Coquitlam and more.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cocogooseOutlined.variable} ${cocogooseRegular.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
