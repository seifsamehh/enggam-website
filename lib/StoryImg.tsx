"use client";

import Image from "next/image";
import { ScrollParallax } from "react-just-parallax";

export default function StoryImg() {
  return (
    <ScrollParallax strength={-0.5}>
      <Image
        src="/story.webp"
        alt="story image"
        aria-label="story image"
        className="rounded-md"
        width={500}
        height={500}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
      />
    </ScrollParallax>
  );
}
