import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from "next/font/google";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";

// Setup task
// Customize your font { watch the video }
// Customize your meta data

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Triplog - Log Your Journey. Share the Adventure.",
  description:
    "Triplog is your personal travel companion. Log your journeys, discover destinations, and share adventures with a beautifully designed travel journal web app.",
  keywords: [
    "travel blog",
    "trip journal",
    "travel app",
    "itinerary planner",
    "travel diary",
    "Triplog",
    "travel portfolio",
    "Next.js project",
  ],
  authors: [{ name: "Raiyan Hossain" }],
  openGraph: {
    title: "Triplog - Log Your Journey. Share the Adventure.",
    description:
      "Create, track, and share your travel experiences. Triplog is your ultimate trip journal built with Next.js.",
    url: "https://yourdomain.com",
    siteName: "Triplog",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Triplog travel preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Triplog - Log Your Journey. Share the Adventure.",
    description:
      "Beautifully document and share your trips with Triplog. Built for explorers and storytellers.",
    images: ["https://yourdomain.com/twitter-image.jpg"],
    creator: "@yourhandle",
  },
  metadataBase: new URL("https://yourdomain.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <ResponsiveNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
