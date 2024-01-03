"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: "900", display: "swap" });
import "../styles/partners.scss";

export default function PartnersSlider() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["70%", "0%"]);
  return (
    <>
      <section className="partners overflow-hidden py-4">
        <h2
          className={`${raleway.className} text-8xl text-center bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent`}
        >
          Our Partners
        </h2>
        <div className="partners-box">
          <motion.div
            className="box flex justify-center items-center"
            style={{
              x,
            }}
            transition={{
              ease: "easeInOut",
            }}
          >
            <Image
              src="/partner1.webp"
              alt="partner"
              aria-label="partner"
              width={250}
              height={250}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
            />
            <Image
              src="/partner2.webp"
              alt="partner"
              aria-label="partner"
              width={250}
              height={250}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
            />
            <Image
              src="/partner3.webp"
              alt="partner"
              aria-label="partner"
              width={250}
              height={250}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
            />
            <Image
              src="/partner4.webp"
              alt="partner"
              aria-label="partner"
              width={250}
              height={250}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
            />
            <Image
              src="/partner5.webp"
              alt="partner"
              aria-label="partner"
              width={250}
              height={250}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
            />
            <Image
              src="/partner6.webp"
              alt="partner"
              aria-label="partner"
              width={250}
              height={250}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
            />
          </motion.div>
        </div>
      </section>
      <section className="partners-sm overflow-hidden py-4">
        <h2
          className={`${raleway.className} text-5xl text-center bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent`}
        >
          Our Partners
        </h2>
        <div className="partners-box">
          <div className="box flex justify-center items-center flex-col">
            <Image
              src="/partner1.webp"
              alt="partner"
              aria-label="partner"
              width={250}
              height={250}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
            />
            <Image
              src="/partner2.webp"
              alt="partner"
              aria-label="partner"
              width={250}
              height={250}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
            />
            <Image
              src="/partner3.webp"
              alt="partner"
              aria-label="partner"
              width={250}
              height={250}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
            />
            <Image
              src="/partner4.webp"
              alt="partner"
              aria-label="partner"
              width={250}
              height={250}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
            />
            <Image
              src="/partner5.webp"
              alt="partner"
              aria-label="partner"
              width={250}
              height={250}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
            />
            <Image
              src="/partner6.webp"
              alt="partner"
              aria-label="partner"
              width={250}
              height={250}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
            />
          </div>
        </div>
      </section>
    </>
  );
}
