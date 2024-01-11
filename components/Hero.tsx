"use client";

import TourBtn from "@/lib/TourBtn";
import { useUser } from "@clerk/nextjs";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: "900", display: "swap" });

export default function HeroSection() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <section
      className="hero relative min-h-[50vh] flex justify-center items-center bg-[#0056b3]"
      id="hero"
    >
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h1
            className={`${raleway.className} mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none`}
          >
            Welcome,
            <span className="relative inline-block px-2 ml-4">
              <div className="absolute inset-0 transform -skew-x-12 bg-white" />
              <span className="relative text-[#ff474d]">{user.username}</span>
            </span>
          </h1>
          <p className="mb-6 text-base text-indigo-100 md:text-lg text-center">
            You can now use our site to do any order with the use of the
            strongest offers that allow you to enjoy the strongest games and
            Gift cards The order can be shipped as soon as possible and the
            speed of the shipping process.
          </p>
          <TourBtn />
        </div>
      </div>
    </section>
  );
}
