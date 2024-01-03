"use client";

import HeaderHome from "@/lib/HeaderHome";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { Raleway } from "next/font/google";
import Image from "next/image";

const raleway = Raleway({ subsets: ["latin"], weight: "900", display: "swap" });
import "../../../../../../../styles/giftCards.scss";

export default function page() {
  return (
    <>
      <HeaderHome />
      <section className="gift-cards overflow-hidden">
        <div className="gift-hero flex justify-center items-center flex-col min-h-screen relative">
          <h1 className={`${raleway.className} text-8xl text-center`}>
            GIFT CARDS
          </h1>
          <Image
            src="https://i.imgur.com/5Vz5H5r.png"
            alt="gift box"
            aria-label="gift box"
            width={500}
            height={500}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
          />
        </div>
        <div className="gift-products min-h-screen flex justify-center items-center flex-col py-8">
          <Tabs aria-label="Options" size="lg" className="tabs">
            <Tab key="ITunes" title="ITunes">
              <Card className="max-w-7xl">
                <CardBody>
                  <Tabs aria-label="Options" size="lg" className="tabs">
                    <Tab key="Egypt" title="Egypt">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="egypt-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="Brazil" title="Brazil">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="brazil-cards flex justify-start items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                  </Tabs>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="GooglePlay" title="Google Play">
              <Card className="max-w-7xl">
                <CardBody>
                  <Tabs aria-label="Options" size="lg" className="tabs">
                    <Tab key="Egypt" title="Egypt">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="egypt-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="Brazil" title="Brazil">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="brazil-cards flex justify-start items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                  </Tabs>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="Netflix" title="Netflix">
              <Card className="max-w-7xl">
                <CardBody>
                  <Tabs aria-label="Options" size="lg" className="tabs">
                    <Tab key="Egypt" title="Egypt">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="egypt-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="Brazil" title="Brazil">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="brazil-cards flex justify-start items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                  </Tabs>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="GoldRazer" title="Gold Razer">
              <Card className="max-w-7xl">
                <CardBody>
                  <Tabs aria-label="Options" size="lg" className="tabs">
                    <Tab key="Egypt" title="Egypt">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="egypt-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="Brazil" title="Brazil">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="brazil-cards flex justify-start items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                  </Tabs>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="Steam" title="Steam">
              <Card className="max-w-7xl">
                <CardBody>
                  <Tabs aria-label="Options" size="lg" className="tabs">
                    <Tab key="Egypt" title="Egypt">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="egypt-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="Brazil" title="Brazil">
                      <Card className="max-w-7xl">
                        <CardBody>
                          <div className="brazil-cards flex justify-start items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
                              <Image
                                src="/maskable_icon.png"
                                alt="maskable icon"
                                aria-label="maskable icon"
                                width={500}
                                height={500}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                              />
                              <div className="mt-4 px-5 pb-5">
                                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                                  Test
                                </h5>
                                <div className="flex items-center justify-between">
                                  <p className="text-xl font-bold text-slate-900">
                                    100$
                                  </p>
                                  <button className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="mr-2 h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                  </Tabs>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </section>
    </>
  );
}
