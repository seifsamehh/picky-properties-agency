import Script from "next/script";
import { Suspense, lazy } from "react";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Providers } from "./providers";
import { Parallax } from "./parallax";
import LoadingPage from "@/shared/LoadingPage";
import Header from "@/shared/Header";
import Footer from "@/shared/Footer";
import "./globals.css";
import "../styles/palettes.scss";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Picky Properties | Real Estate Marketing Agency",
  description:
    "We are part of byotat real estate. Byotat is a leading companyin thhe field of real estate marketing. Projects marketing and marketing consultancy.",
  generator: "Next.js",
  metadataBase: new URL("https://picky-properties-agency.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      ar: "/ar",
    },
  },
  applicationName: "Picky Properties | Real Estate Marketing Agency",
  referrer: "origin-when-cross-origin",
  keywords: [
    "real estate marketing agency",
    "picky properties",
    "real estate marketing",
    "real estate advertising",
    "real estate SEO",
    "real estate social media marketing",
    "real estate content marketing",
    "real estate email marketing",
    "real estate pay-per-click marketing",
    "real estate retargeting",
    "real estate branding",
    "real estate PPC",
    "real estate",
    "real estate marketing agency in Egypt",
    "real estate marketing agency in Cairo",
    "real estate marketing agency near me",
    "real estate SEO services",
    "real estate branding services",
    "real estate marketing agency for luxury homes",
    "real estate marketing agency for new developments",
    "real estate marketing agency for commercial properties",
    "real estate marketing agency for international buyers",
    "real estate marketing agency for sellers",
    "real estate marketing agency for buyers",
    "real estate marketing agency for investors",
    "projects management",
    "projects marketing",
    "corporate services",
    "resale",
    "leasing",
    "repricing",
    "inventory management",
    "market researches",
    "market analysis",
    "market research",
    "market research agency",
    "market research services",
    "market research agency in Egypt",
    "market research agency in Cairo",
    "market research agency near me",
    "market research agency for luxury homes",
    "market research agency for new developments",
    "market research agency for commercial properties",
    "market research agency for international buyers",
    "market research agency for sellers",
    "market research agency for buyers",
    "market research agency for investors",
    "market research agency for real estate",
    "sales forcasting",
    "market & sales consultancy",
    "market & sales consultancy services",
    "market & sales solutions",
  ],
  authors: [
    { name: "Seif Eldin Sameh", url: "https://seif-sameh-mern.vercel.app/" },
  ],
  creator: "Seif Eldin Sameh",
  publisher: "Seif Eldin Sameh",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/assets/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/icon-20.png", sizes: "20x20", type: "image/png" },
      { url: "/assets/icon-29.png", sizes: "29x29", type: "image/png" },
      { url: "/assets/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/icon-40.png", sizes: "40x40", type: "image/png" },
      { url: "/assets/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/assets/icon-50.png", sizes: "50x50", type: "image/png" },
      { url: "/assets/icon-57.png", sizes: "57x57", type: "image/png" },
      { url: "/assets/icon-58.png", sizes: "58x58", type: "image/png" },
      { url: "/assets/icon-60.png", sizes: "60x60", type: "image/png" },
      { url: "/assets/icon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/assets/icon-72.png", sizes: "72x72", type: "image/png" },
      { url: "/assets/icon-76.png", sizes: "76x76", type: "image/png" },
      { url: "/assets/icon-80.png", sizes: "80x80", type: "image/png" },
      { url: "/assets/icon-87.png", sizes: "87x87", type: "image/png" },
      { url: "/assets/icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/assets/icon-100.png", sizes: "100x100", type: "image/png" },
      { url: "/assets/icon-114.png", sizes: "114x114", type: "image/png" },
      { url: "/assets/icon-120.png", sizes: "120x120", type: "image/png" },
      { url: "/assets/icon-128.png", sizes: "128x128", type: "image/png" },
      { url: "/assets/icon-144.png", sizes: "144x144", type: "image/png" },
      { url: "/assets/icon-152.png", sizes: "152x152", type: "image/png" },
      { url: "/assets/icon-167.png", sizes: "167x167", type: "image/png" },
      { url: "/assets/icon-180.png", sizes: "180x180", type: "image/png" },
      { url: "/assets/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/assets/icon-256.png", sizes: "256x256", type: "image/png" },
      { url: "/assets/icon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/assets/icon-1024.png", sizes: "1024x1024", type: "image/png" },
    ],
    apple: [
      { url: "/assets/icon-192.png" },
      { url: "/assets/icon-152.png", sizes: "152x152", type: "image/png" },
      { url: "/assets/icon-144.png", sizes: "144x144", type: "image/png" },
      { url: "/assets/icon-128.png", sizes: "128x128", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Picky Properties | Real Estate Marketing Agency",
    description:
      "We are part of byotat real estate. Byotat is a leading companyin thhe field of real estate marketing. Projects marketing and marketing consultancy.",
    url: "https://picky-properties-agency.vercel.app/",
    siteName: "Picky Properties | Real Estate Marketing Agency",
    images: [
      {
        url: "/assets/maskable_icon.png",
        width: 512,
        height: 512,
        alt: "Picky Properties | Real Estate Marketing Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Picky Properties | Real Estate Marketing Agency",
    description:
      "We are part of byotat real estate. Byotat is a leading companyin thhe field of real estate marketing. Projects marketing and marketing consultancy.",
    creator: "@seiffsameh",
    images: ["/assets/maskable_icon.png"],
  },
  verification: {
    google: "google",
    other: {
      me: ["seiffsameh00@gmail.com", "https://seif-sameh-mern.vercel.app/"],
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "real Estate Marketing",
};

const LazyFooter = lazy(() => import("@/shared/Footer"));
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Suspense fallback={<LoadingPage />}>
          <LoadingPage />
          <Providers>
            <Parallax>
              <Header />
              {children}
              <LazyFooter />
              <Analytics />
            </Parallax>
          </Providers>
        </Suspense>
        <Script
          id="live chat"
          src="https://embed.tawk.to/655294cb958be55aeaaf47bb/1hf59afig"
          defer
          rel="preload"
        />
      </body>
    </html>
  );
}
