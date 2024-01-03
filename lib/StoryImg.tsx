"use client";

import Image from "next/image";
import { ScrollParallax } from "react-just-parallax";

export default function StoryImg() {
  return (
    <ScrollParallax strength={-0.5}>
      <Image
        src="/maskable_icon.png"
        alt="story image"
        aria-label="story image"
        width={300}
        height={300}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
      />
    </ScrollParallax>
  );
}
