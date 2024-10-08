"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function PartnersSlider2() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["-70%", "0%"]);
  return (
    <>
      <section className="partners overflow-hidden">
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
            src="/partner7.webp"
            alt="partner"
            aria-label="partner"
            width={250}
            height={250}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
          />
          <Image
            src="/partner8.webp"
            alt="partner"
            aria-label="partner"
            width={250}
            height={250}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
          />
          <Image
            src="/partner9.webp"
            alt="partner"
            aria-label="partner"
            width={250}
            height={250}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
          />
          <Image
            src="/partner10.webp"
            alt="partner"
            aria-label="partner"
            width={250}
            height={250}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
          />
          <Image
            src="/partner12.webp"
            alt="partner"
            aria-label="partner"
            width={250}
            height={250}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
          />
        </motion.div>
      </section>
      <section className="partners-sm overflow-hidden">
        <div className="box flex justify-center items-center flex-col">
          <Image
            src="/partner7.webp"
            alt="partner"
            aria-label="partner"
            width={250}
            height={250}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
          />
          <Image
            src="/partner8.webp"
            alt="partner"
            aria-label="partner"
            width={250}
            height={250}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
          />
          <Image
            src="/partner9.webp"
            alt="partner"
            aria-label="partner"
            width={250}
            height={250}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
          />
          <Image
            src="/partner10.webp"
            alt="partner"
            aria-label="partner"
            width={250}
            height={250}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
          />
          <Image
            src="/partner12.webp"
            alt="partner"
            aria-label="partner"
            width={250}
            height={250}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
          />
        </div>
      </section>
    </>
  );
}
