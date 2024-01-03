import "./globals.css";
import LoadingPage from "@/common/LoadingPage";
import Script from "next/script";
import { ClerkProvider } from "@clerk/nextjs";
import { Parallax } from "./parallax";
import { Providers } from "./providers";
import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ENGGAM Website | Gift, Game, Payment Store",
  description:
    "Enggam is a Gift Card Company located in Egypt. We sell all prepaid cards like iTunes cards, google play cards, and more.",
  generator: "Next.js",
  metadataBase: new URL("https://www.enggam.com/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  applicationName: "ENGGAM Website | Gift, Game, Payment Store",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Enggam gift cards",
    "Buy gift cards online",
    "Gift cards Egypt",
    "Prepaid cards Egypt",
    "iTunes gift cards Egypt",
    "Google Play gift cards Egypt",
    "PSN gift cards Egypt",
    "Xbox gift cards Egypt",
    "Razer gold cards Egypt",
    "Amazon gift cards Egypt",
    "Steam gift cards Egypt",
    "Safe and fast gift cards",
    "Easy to get gift cards",
    "Digital gift cards",
    "Gift cards online",
    "Buy gift cards Egypt",
    "Prepaid cards online",
    "بطاقات هدايا",
    "شراء بطاقات الهدايا عبر الإنترنت",
    "بطاقات الهدايا مصر",
    "بطاقات مسبقة الدفع مصر",
    "بطاقات هدايا آمنة وسريعة",
    "بطاقات هدايا سهلة الحصول عليها",
    "بطاقات هدايا رقمية",
    "بطاقات هدايا عبر الإنترنت",
    "شراء بطاقات الهدايا مصر",
    "بطاقات مسبقة الدفع عبر الإنترنت",
  ],
  authors: [
    { name: "Seif Eldin Sameh", url: "https://seif-sameh-mern.vercel.app/" },
  ],
  colorScheme: "light",
  creator: "Seif Eldin Sameh",
  publisher: "Seif Eldin Sameh",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1f1e1e" },
  ],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-384x384.png", sizes: "384x384", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icon-192x192.png" },
      { url: "/icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/icon-128x128.png", sizes: "128x128", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon.png",
      },
    ],
  },
  openGraph: {
    title: "ENGGAM Website | Gift, Game, Payment Store",
    description:
      "Enggam is a Gift Card Company located in Egypt. We sell all prepaid cards like iTunes cards, google play cards, and more.",
    url: "https://www.enggam.com/",
    siteName: "ENGGAM Website | Gift, Game, Payment Store",
    images: [
      {
        url: "/maskable_icon.png",
        width: 512,
        height: 512,
        alt: "ENGGAM Website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ENGGAM Website | Gift, Game, Payment Store",
    description:
      "Enggam is a Gift Card Company located in Egypt. We sell all prepaid cards like iTunes cards, google play cards, and more.",
    creator: "@seiffsameh",
    images: ["/maskable_icon.png"],
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
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Cards Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={ptSerif.className}>
          <Providers>
            <LoadingPage />
            <Parallax>{children}</Parallax>
          </Providers>
          <Script
            id="live chat"
            src="https://embed.tawk.to/64c418e5cc26a871b02bddaa/1h6f02gqc"
            defer
            rel="preload"
          />
          <Script
            id="form"
            src="https://form.jotform.com/jsform/233644957748574"
            defer
            rel="preload"
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
