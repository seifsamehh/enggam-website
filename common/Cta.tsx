"use client";

import Link from "next/link";
import { ScrollParallax } from "react-just-parallax";
import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: "900", display: "swap" });
import "../styles/cta.scss";

export default function Cta() {
  return (
    <section
      className="cta overflow-hidden min-h-screen flex justify-center items-center relative"
      id="cta"
    >
      <div className="cta-box max-w-3xl flex justify-center items-center flex-col gap-8">
        <h2
          className={`${raleway.className} min-[290px]:text-5xl md:text-7xl text-center bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent`}
        >
          Call To Action
        </h2>
        <p className="text-center min-[290px]:px-4 md:px-0">
          You can contact us by e-mail for me to find all the things that relate
          to the things of the site and in order to use the best things in order
          to solve all the problems facing the user in any of the charging or
          use of the card can be used with ease Stay in touch with us always in
          order to provide all things to the user.
        </p>
        <Link
          href="mailto:enggam729@gmail.com"
          target="_blank"
          title="Contact Us"
        >
          Contact Us
        </Link>
      </div>
      <ScrollParallax isAbsolutelyPositioned strength={-0.5}>
        <Image
          src="/undraw_envelope.svg"
          alt="mail"
          aria-label="mail"
          className="mail-img"
          width={100}
          height={100}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nKSkqODMsMC4xOQ=="
        />
      </ScrollParallax>
    </section>
  );
}
