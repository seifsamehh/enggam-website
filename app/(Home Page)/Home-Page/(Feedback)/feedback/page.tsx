"use client";

import Image from "next/image";
// import Link from "next/link";
import { Raleway } from "next/font/google";
import HeaderHome from "@/lib/HeaderHome";
import Footer from "@/common/Footer";
import "../../../../../styles/feedback.scss";

const raleway = Raleway({ subsets: ["latin"], weight: "900", display: "swap" });

export default function page() {
  const handleClick = () => {
    window.open(
      "https://form.jotform.com/233644957748574",
      "blank",
      "scrollbars=yes, toolbar=no, width=900, height=900"
    );
  };
  return (
    <>
      <HeaderHome />
      <section className="feedback overflow-hidden min-h-screen flex justify-center items-center">
        <div className="feedback-content flex justify-center items-center min-[290px]:flex-wrap-reverse md:flex-nowrap bg-white rounded-md p-4 min-[290px]:gap-4 md:gap-0">
          <div className="left w-full">
            <Image
              src="/feedback.svg"
              alt="feedback"
              aria-label="feedback"
              width={700}
              height={700}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
            />
          </div>
          <div className="right w-full">
            <h1 className={`${raleway.className} text-7xl text-[#ff474d]`}>
              Feedback
            </h1>
            <p className="max-w-2xl my-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              ut minus sunt quae consequatur rem quia quod cumque sapiente?
              Fugit explicabo tenetur atque qui illum ipsum nesciunt alias
              fugiat expedita.
            </p>
            <p
              onClick={handleClick}
              title="Give Us Your Feedback"
              className="cursor-pointer bg-[#0056b3] text-white w-fit px-4 py-2 rounded-md"
            >
              Give Us Your Feedback
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
