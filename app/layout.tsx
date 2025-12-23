// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const BASE_URL = process.env.BASE_URL || "https://nextjs-video-embed-test.vercel.app/";

export const metadata: Metadata = {
  title: "Stellicast Video",
  description: "Watch Stellicast videos",
  openGraph: {
    type: "video.other",
    title: "Stellicast Video",
    description: "Watch Stellicast videos",
    url: BASE_URL,
    images: [
      {
        url: `${BASE_URL}/videos/poster.jpg`,
        width: 1280,
        height: 720,
      },
    ],
    videos: [
      {
        url: `${BASE_URL}/api/embed`,
        type: "text/html",
        width: 1280,
        height: 720,
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    {children}
    </body>
    </html>
  );
}
