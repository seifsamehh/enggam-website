"use client";

import { ScrollParallax } from "react-just-parallax";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: "900", display: "swap" });

export default function HomeCategoriesLeft() {
  return (
    <ScrollParallax>
      <div className="left-box flex justify-center items-center flex-col gap-8">
        <h3 className={`${raleway.className} category-home-heading`}>
          Categories
        </h3>
        <h3
          className={`${raleway.className} category-home-heading-main text-[#ff474d]`}
        >
          Categories
        </h3>
        <h3 className={`${raleway.className} category-home-heading`}>
          Categories
        </h3>
      </div>
    </ScrollParallax>
  );
}
