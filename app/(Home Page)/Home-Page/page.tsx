"use client";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/common/Footer"));
const HeroSection = dynamic(() => import("@/components/Hero"));
const HomeCategories = dynamic(() => import("@/components/HomeCategories"));
const SaleHome = dynamic(() => import("@/components/SaleHome"));
const HomeProducts = dynamic(() => import("@/components/HomeProducts"));
const Story = dynamic(() => import("@/components/Story"));
const SupportSection = dynamic(() => import("@/components/Support"));
const HeaderHome = dynamic(() => import("@/lib/HeaderHome"));
const Cta = dynamic(() => import("@/common/Cta"));

export default function page() {
  const [hasShownReminder, setHasShownReminder] = useState(false);
  useEffect(() => {
    if (!hasShownReminder) {
      const timeoutId = setTimeout(() => {
        Swal.fire({
          title: "Important Reminder: Secure Your Account with Sign Out",
          html: `
          <h4 style="text-align: left;">For your security, we automatically log you out of ENGGAM after <strong>5 minutes</strong> of inactivity. This helps protect your account and sensitive information from unauthorized access, especially if you're using a shared device or stepping away from your computer.</h4>
          <br/>
          <p style="text-align: left;">        
          To ensure a seamless experience:
          <br/><br/>
          
              - Always sign out before closing your browser window or leaving the website.<br/>
              - If you haven't signed out and attempt to access the site again within <strong>5 minutes</strong>, you'll be prompted to log in again.<br/>
          
          Thank you for your cooperation in keeping your account safe.
          </p>
          `,
          imageUrl: "https://i.imgur.com/L9ON2E7.png",
          backdrop: `
          rgba(0, 86, 179,0.4)
          left top
          no-repeat
        `,
          imageWidth: 100,
          imageHeight: 100,
          imageAlt: "Enggam",
          confirmButtonColor: "#0056b3",
          confirmButtonText: "Okay, Got it!",
        });
        setHasShownReminder(true);
      }, 5000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [hasShownReminder]);
  return (
    <main className="home-page">
      <HeaderHome />
      <HeroSection />
      <HomeCategories />
      <SaleHome />
      <HomeProducts />
      <Story />
      <SupportSection />
      <Cta />
      <Footer />
    </main>
  );
}
