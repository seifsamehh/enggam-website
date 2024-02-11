"use client";

import { MouseParallax } from "react-just-parallax";
import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: "900", display: "swap" });
import "../../../styles/about.scss";
import Footer from "@/common/Footer";
import HeaderLanding from "@/lib/HeaderLanding";
import Team from "@/components/Team";

const AboutPage = () => {
  return (
    <>
      <HeaderLanding />
      <section className="min-h-screen overflow-hidden about-page">
        <div className="hero min-h-[70vh] flex justify-center items-center">
          <h1
            className={`${raleway.className} min-[290px]:text-6xl md:text-9xl mt-16`}
          >
            About Us
          </h1>
        </div>
        <div className="relative flex items-center justify-center min-h-[60vh] gap-12 about-content min-[290px]:flex-wrap md:flex-nowrap min-[290px]:p-4 md:p-0">
          <div className="left">
            <h2
              className={`${raleway.className} min-[290px]:text-5xl md:text-8xl text-[#016fd0]`}
            >
              ENGGAM
            </h2>
          </div>
          <div className="right">
            <p className="max-w-2xl text-xl leading-8 min-[290px]:text-center md:text-left">
              Gift Card Company located in Egypt. we sell all prepaid cards
              like:- iTunes cards, google play cards, PNS cards, Xbox cards,
              Razer gold cards, Amazon cards, steam cards, Karma coin game
              cards, and much more. Our Purpose is making easy to get all Gift
              Cards safe and fast. A single integration unlocks global & local
              alternative payment methods - Cards, Online Banking, Bank
              Transfer, Cash, E-wallets, Vouchers & Carrier Billing.
            </p>
          </div>
          <MouseParallax isAbsolutelyPositioned>
            <div className="icons min-[290px]:hidden md:block">
              {/* joystick */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute icon icon-tabler icon-tabler-device-gamepad-2 top-[50%] left-24"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ff474d"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 5h3.5a5 5 0 0 1 0 10h-5.5l-4.015 4.227a2.3 2.3 0 0 1 -3.923 -2.035l1.634 -8.173a5 5 0 0 1 4.904 -4.019h3.4z" />
                <path d="M14 15l4.07 4.284a2.3 2.3 0 0 0 3.925 -2.023l-1.6 -8.232" />
                <path d="M8 9v2" />
                <path d="M7 10h2" />
                <path d="M14 10h2" />
              </svg>
              {/* xbox */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute icon icon-tabler icon-tabler-brand-xbox top-28 left-80"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ff474d"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M6.5 5c7.72 2.266 10.037 7.597 12.5 12.5" />
                <path d="M17.5 5c-7.72 2.266 -10.037 7.597 -12.5 12.5" />
              </svg>
              {/* apple */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute icon icon-tabler icon-tabler-brand-apple top-[40%] left-[85%]"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ff474d"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 7c-3 0 -4 3 -4 5.5c0 3 2 7.5 4 7.5c1.088 -.046 1.679 -.5 3 -.5c1.312 0 1.5 .5 3 .5s4 -3 4 -5c-.028 -.01 -2.472 -.403 -2.5 -3c-.019 -2.17 2.416 -2.954 2.5 -3c-1.023 -1.492 -2.951 -1.963 -3.5 -2c-1.433 -.111 -2.83 1 -3.5 1c-.68 0 -1.9 -1 -3 -1z" />
                <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" />
              </svg>
              {/* google play */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute icon icon-tabler icon-tabler-brand-google-play top-20 left-[35%]"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ff474d"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 3.71v16.58a.7 .7 0 0 0 1.05 .606l14.622 -8.42a.55 .55 0 0 0 0 -.953l-14.622 -8.419a.7 .7 0 0 0 -1.05 .607z" />
                <path d="M15 9l-10.5 11.5" />
                <path d="M4.5 3.5l10.5 11.5" />
              </svg>
              {/* netflix */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute icon icon-tabler icon-tabler-brand-netflix bottom-20 left-[25%]"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ff474d"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 3l10 18h-4l-10 -18z" />
                <path d="M5 3v18h4v-10.5" />
                <path d="M19 21v-18h-4v10.5" />
              </svg>
              {/* steam */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute icon icon-tabler icon-tabler-brand-steam top-16 left-[50%]"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ff474d"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M16.5 5a4.5 4.5 0 1 1 -.653 8.953l-4.347 3.009l0 .038a3 3 0 0 1 -2.824 3l-.176 0a3 3 0 0 1 -2.94 -2.402l-2.56 -1.098v-3.5l3.51 1.755a2.989 2.989 0 0 1 2.834 -.635l2.727 -3.818a4.5 4.5 0 0 1 4.429 -5.302z" />
                <circle cx="16.5" cy="9.5" r="1" fill="currentColor" />
              </svg>
              {/* fortnite */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute icon icon-tabler icon-tabler-brand-fortnite bottom-20 left-[45%]"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ff474d"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 3h7.5l-.5 4h-3v3h3v3.5h-3v6.5l-4 1z" />
              </svg>
              {/* visa */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute icon icon-tabler icon-tabler-brand-visa top-16 left-[65%]"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ff474d"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M21 15l-1 -6l-2.5 6" />
                <path d="M9 15l1 -6" />
                <path d="M3 9h1v6h.5l2.5 -6" />
                <path d="M16 9.5a.5 .5 0 0 0 -.5 -.5h-.75c-.721 0 -1.337 .521 -1.455 1.233l-.09 .534a1.059 1.059 0 0 0 1.045 1.233a1.059 1.059 0 0 1 1.045 1.233l-.09 .534a1.476 1.476 0 0 1 -1.455 1.233h-.75a.5 .5 0 0 1 -.5 -.5" />
                <path d="M18 14h2.7" />
              </svg>
              {/* master card */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute icon icon-tabler icon-tabler-brand-mastercard bottom-28 left-[65%]"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ff474d"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M12 9.765a3 3 0 1 0 0 4.47" />
                <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
              </svg>
              {/* windows */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute icon icon-tabler icon-tabler-brand-windows bottom-20 left-[85%]"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ff474d"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M17.8 20l-12 -1.5c-1 -.1 -1.8 -.9 -1.8 -1.9v-9.2c0 -1 .8 -1.8 1.8 -1.9l12 -1.5c1.2 -.1 2.2 .8 2.2 1.9v12.1c0 1.2 -1.1 2.1 -2.2 1.9z" />
                <path d="M12 5l0 14" />
                <path d="M4 12l16 0" />
              </svg>
            </div>
          </MouseParallax>
        </div>
        <div className="flex items-start justify-center p-8 min-[290px]:flex-wrap md:flex-nowrap gap-5 about-media">
          <div className="left">
            <div className="grid min-[290px]:grid-cols-1 md:grid-cols-2 grid-rows-3 gap-4">
              <div className="box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-world"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#016fd0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                  <path d="M3.6 9h16.8" />
                  <path d="M3.6 15h16.8" />
                  <path d="M11.5 3a17 17 0 0 0 0 18" />
                  <path d="M12.5 3a17 17 0 0 1 0 18" />
                </svg>
                <div className="box-content">
                  <h3 className={`${raleway.className} text-2xl`}>
                    Global Market Access
                  </h3>
                  <p>
                    We are working hard to reach the global markets, obtain
                    great competition, and raise the site to the highest point
                    of development to reach the best things, and the site will
                    provide the possibility of accessing the global market.
                  </p>
                </div>
              </div>
              <div className="box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-truck-delivery"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#016fd0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                  <path d="M3 9l4 0" />
                </svg>
                <div className="box-content">
                  <h3 className={`${raleway.className} text-2xl`}>
                    Fast Order
                  </h3>
                  <p>
                    The order can be made at any time and delivered as quickly
                    as possible by selecting the card and it will be sent to you
                    via email.
                  </p>
                </div>
              </div>
              <div className="box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-shield-lock"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#016fd0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                  <path d="M12 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M12 12l0 2.5" />
                </svg>
                <div className="box-content">
                  <h3 className={`${raleway.className} text-2xl`}>
                    Secure Payment
                  </h3>
                  <p>We Provides High Securely Payment Gateways.</p>
                </div>
              </div>
              <div className="box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-shopping-bag"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#016fd0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
                  <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
                </svg>
                <div className="box-content">
                  <h3 className={`${raleway.className} text-2xl`}>
                    Reach The Right Market
                  </h3>
                  <p>
                    You can have the most aesthetically appealing online store
                    with easy navigation, the highest quality products backed by
                    top-notch customer service and bottomless pockets when it
                    comes to marketing budget.
                  </p>
                </div>
              </div>
              <div className="box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-24-hours"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#016fd0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 13c.325 2.532 1.881 4.781 4 6" />
                  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2" />
                  <path d="M4 5v4h4" />
                  <path d="M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2" />
                  <path d="M18 15v2a1 1 0 0 0 1 1h1" />
                  <path d="M21 15v6" />
                </svg>
                <div className="box-content">
                  <h3 className={`${raleway.className} text-2xl`}>
                    Online Support 24/7
                  </h3>
                  <p>
                    Contact with us any time though our channels and Our team
                    handles instant support in multiple languages to all your
                    customers via Live Chat 24/7.
                  </p>
                </div>
              </div>
              <div className="box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-package"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#016fd0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
                  <path d="M12 12l8 -4.5" />
                  <path d="M12 12l0 9" />
                  <path d="M12 12l-8 -4.5" />
                  <path d="M16 5.25l-8 4.5" />
                </svg>
                <div className="box-content">
                  <h3 className={`${raleway.className} text-2xl`}>
                    Complete Package
                  </h3>
                  <p>
                    someone can that possesses a complete set of ways to
                    purchase any thing on your Website easily.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full right">
            <Image
              src="/story.webp"
              alt="enggam company"
              aria-label="enggam company"
              className="rounded-md"
              width={500}
              height={500}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
            />
          </div>
        </div>
        <Team />
      </section>
      <Footer />
    </>
  );
};

export default AboutPage;
