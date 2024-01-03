"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function CategoriesSvg() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate the scroll progress as a value between 0 and 1
      const scrollProgress = scrollPosition / (documentHeight - windowHeight);

      // Update the animation based on the scroll progress
      controls.set({ pathLength: scrollProgress });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 800 400"
    >
      <motion.path
        d="M4.484294891357422,224.21522521972656C63.07921282450358,207.17486826578775,260.83706347147626,116.29296112060547,356.0538024902344,121.97308349609375C451.2705415089925,127.65320587158203,501.94318135579425,248.13153584798178,575.7847290039062,258.29595947265625C649.6262766520182,268.46038309733075,761.8833618164062,195.51568094889322,799.1030883789062,182.95962524414062"
        fill="none"
        strokeWidth="1"
        stroke="#eb1e2d"
        strokeLinecap="round"
        initial={{ pathLength: 0 }} // Initial state of the animation
        animate={controls} // Use the controls from useAnimation
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.path>
      <defs>
        <linearGradient id="SvgjsLinearGradient1000">
          <stop stopColor="hsl(37, 99%, 67%)" offset="0"></stop>
          <stop stopColor="hsl(316, 73%, 52%)" offset="1"></stop>
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
