import "./globals.css";
import LoadingPage from "@/common/LoadingPage";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";
import { Parallax } from "./parallax";
import { Providers } from "./providers";
import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";
import CrispChat from "@/components/CrispChat";
import Head from "next/head";
import Script from "next/script";

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

// structure data
interface Product {
  name: string;
  price: number;
  availability: string;
  brand: string;
  image: string;
}
interface WebsiteData {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo: string;
  favicon: string;
  address: {
    "@type": string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint: {
    "@type": string;
    telephone: string;
    email: string;
  };
  description?: string;
  foundingDate?: string;
  founders?: string[];
  employees?: number;
  industry?: string;
  socialMedia?: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
  products?: Product[];
}

const website: WebsiteData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Enggam",
  url: "https://www.enggam.com/",
  logo: "https://i.imgur.com/3xFPJUP.jpg",
  favicon: "https://i.imgur.com/3xFPJUP.jpg",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Cairo Governorate",
    postalCode: "11835",
    addressCountry: "Egypt",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+201014402598",
    email: "enggam729@gmail.com",
  },
  description:
    "Enggam is a Gift Card Company located in Egypt. We sell all prepaid cards like iTunes cards, google play cards, and more.",
  foundingDate: "January 11, 2020",
  founders: ["Ali Nasr"],
  employees: 50,
  industry: "Technology",
  socialMedia: {
    twitter: "https://twitter.com/enggam729",
    facebook: "https://www.facebook.com/profile.php?id=100095357415380",
    instagram: "https://www.instagram.com/enggam.co/",
  },
  products: [
    {
      name: "iTunes 50 CNY China",
      price: 9.0,
      availability: "In Stock",
      brand: "Itunes",
      image: "https://i.imgur.com/eO7Waro.png",
    },
    {
      name: "Google play AUD20 Australia (AU)",
      price: 15.96,
      availability: "In Stock",
      brand: "Google Play",
      image: "https://i.imgur.com/oNyTjZP.png",
    },
    {
      name: "Netflix UAE – AED 100",
      price: 30.9,
      availability: "In Stock",
      brand: "Netflix",
      image: "https://i.imgur.com/WWXMYYv.png",
    },
    {
      name: "$5 Razer Gold Rixty (USA)",
      price: 5.04,
      availability: "In Stock",
      brand: "Razer Gold",
      image: "https://i.imgur.com/3Qb6mQS.png",
    },
    {
      name: "PUBG 300+25 UC (Global) Code",
      price: 4.25,
      availability: "In Stock",
      brand: "Pubg Mobile",
      image: "https://i.imgur.com/PkAX5Z1.png",
    },
    {
      name: "Free Fire 1080 + 108 Diamonds Pins (Garena)",
      price: 9.99,
      availability: "In Stock",
      brand: "Free Fire",
      image: "https://i.imgur.com/mNdyvHn.png",
    },
    {
      name: "£10 Roblox (United Kingdom)",
      price: 12.87,
      availability: "In Stock",
      brand: "Roblox",
      image: "https://i.imgur.com/oetHu1o.png",
    },
    {
      name: "Fortnite 2800 V-Bucks Card",
      price: 28.84,
      availability: "In Stock",
      brand: "Fortnite",
      image: "https://i.imgur.com/cQemSnQ.png",
    },
    {
      name: "Neosurf Prepaid Card 5 EURO",
      price: 7.21,
      availability: "In Stock",
      brand: "Neosurf",
      image: "https://i.imgur.com/n6YeL8q.png",
    },
    {
      name: "OBUCKS CARD USD 10",
      price: 10.19,
      availability: "In Stock",
      brand: "Openbucks",
      image: "https://i.imgur.com/7vKuzRa.png",
    },
    {
      name: "AstroPay Card 20EGP",
      price: 2.06,
      availability: "In Stock",
      brand: "AstroPay",
      image: "https://i.imgur.com/XlLGVuT.png",
    },
    {
      name: "500CAD Flexepin (CA)",
      price: 462.47,
      availability: "In Stock",
      brand: "Flexepin",
      image: "https://i.imgur.com/rHTa9kE.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" translate="no">
        <body className={ptSerif.className}>
          <Providers>
            <LoadingPage />
            <Parallax>{children}</Parallax>
          </Providers>
          <CrispChat />
          <Analytics />
          <Script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
