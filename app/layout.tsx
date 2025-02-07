import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tasks Pro",
  description: "Organize Your Tasks With Morden Minimalistic UI",
  openGraph: {
    title: "Tasks Pro",
    description: "Organize Your Tasks With Morden Minimalistic UI",
    type: "website",
    url: "https://tasks-pro.vercel.app/",
    images: [{
      url: 'https://tasks-pro.vercel.app/tasks-pro.avif',
      width: 1200,
      height: 630,
      alt: "Image of a Tasks Pro webpage"
    }]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-bar" lang="en" suppressHydrationWarning>
      <head>
        <meta name="darkreader-lock" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
