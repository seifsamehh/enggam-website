"use client";

import Image from "next/image";
import { useState } from "react";
import { useKeenSlider, TrackDetails } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../styles/slider.scss";

const images = [
  "/HeroSlide1.webp",
  "/HeroSlide2.webp",
  "/HeroSlide3.webp",
  "/HeroSlide4.webp",
];

export default function HeroSlider() {
  const [details, setDetails] = useState<TrackDetails | null>(null);

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      detailsChanged(s) {
        setDetails(s.track.details);
      },
      initial: 2,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  function scaleStyle(idx: number) {
    if (!details) return {};
    const slide = details.slides[idx];
    const scale_size = 0.7;
    const scale = 1 - (scale_size - scale_size * slide.portion);
    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`,
    };
  }
  return (
    <div ref={sliderRef} className="keen-slider zoom-out">
      {images.map((src, idx) => (
        <div key={idx} className="keen-slider__slide zoom-out__slide">
          <div style={scaleStyle(idx)}>
            <Image
              src={src}
              alt="slider"
              aria-label="slider"
              width={1400}
              height={1400}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nKSkqODMsMC4xOQ=="
            />
          </div>
        </div>
      ))}
    </div>
  );
}
