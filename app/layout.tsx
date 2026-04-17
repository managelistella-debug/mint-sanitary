import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Cleaning Services North Vancouver | Mint Sanitary",
  description:
    "Professional cleaning services in North Vancouver. Residential, commercial & more. Eco-friendly, 7-day availability. Free estimate.",
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
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <div className="site-scrolling-bg" aria-hidden="true">
          <div className="site-scrolling-bg-inner" />
        </div>
        <Script
          src="//use.typekit.net/ik/i0a07fpf7uWIz_CNTNWZ96QQmttS9H7Mx1tZHnKDCN6feGjgfFHN4UJLFRbh52jhWDjuZQjXFQj3FRMXjDSUw2jhFQFyjR4cFgGMJ68zdAo8Sku3Scv7fbRgVyMMegw6MKG4fO6rIMMjgfMfH6qJzRtbMg6YJMJ7fbKXVyMMeM66MKG4fwMrIMMjfPMfH6qJ0QtbMg65JMJ7fbKxVyMMegI6MTMg_4c1l3j.js"
          strategy="beforeInteractive"
        />
        <Script id="typekit-load" strategy="beforeInteractive">
          {`try{Typekit.load();}catch(e){}`}
        </Script>
        <SmoothScroll />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
