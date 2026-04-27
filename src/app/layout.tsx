import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.chabitairealties.ca"),
  title: {
    default: "Chabitai Realties",
    template: "%s | Chabitai Realties",
  },
  description:
    "Montreal's trusted residential & commercial real estate broker. Buy, sell, or lease with confidence.",
  icons: {
    icon: "/logo-cr.svg",
    shortcut: "/logo-cr.svg",
  },
  openGraph: {
    title: "Chabitai Realties",
    description:
      "Montreal's trusted residential & commercial real estate broker. Buy, sell, or lease with confidence.",
    url: "https://www.chabitairealties.ca",
    siteName: "Chabitai Realties",
    images: [
      {
        url: "/CR logo.png",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chabitai Realties",
    description:
      "Montreal's trusted residential & commercial real estate broker. Buy, sell, or lease with confidence.",
    images: ["/CR logo.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0f0f0f] text-[#f0ede8]">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
