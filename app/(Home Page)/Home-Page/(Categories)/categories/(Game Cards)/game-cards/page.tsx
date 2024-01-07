"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { GameProduct, PubgProducts } from "@/common/GameProducts";
import { addToCart } from "@/slices/cartSlice";
import { Toaster, toast } from "sonner";
import HeaderHome from "@/lib/HeaderHome";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { Raleway } from "next/font/google";
import Image from "next/image";

const raleway = Raleway({ subsets: ["latin"], weight: "900", display: "swap" });
import "../../../../../../../styles/giftCards.scss";

export default function page() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleAddToCart = (GameProduct: GameProduct) => {
    dispatch(addToCart(GameProduct));
    toast.success("Successfully added to cart", {
      description: `${GameProduct.name} has been added to your cart.`,
    });
  };
  return (
    <>
      <HeaderHome />
      <section className="game-cards overflow-hidden">
        <div className="game-hero flex justify-center items-center flex-col min-h-screen relative">
          <h1 className={`${raleway.className} text-8xl text-center`}>
            GAME CARDS
          </h1>
          <Image
            src="https://i.imgur.com/PxTV6dy.png"
            alt="game box"
            aria-label="game box"
            width={500}
            height={500}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
          />
        </div>
        <div className="game-products min-h-screen flex justify-center items-center flex-col">
          <Tabs aria-label="Options" size="lg" className="tabs">
            <Tab key="Pubg" title="Pubg">
              <Card className="max-w-7xl">
                <CardBody>
                  <div className="itunes-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
                    {PubgProducts.map((GameProduct: GameProduct) => (
                      <div
                        key={GameProduct.id}
                        className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white p-4"
                      >
                        <Image
                          src={GameProduct.image}
                          alt={GameProduct.name}
                          aria-label={GameProduct.name}
                          width={500}
                          height={500}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
                        />
                        <div className="mt-4 pb-5">
                          <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                            {GameProduct.name}
                          </h5>
                          <p>{GameProduct.description}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-xl font-bold text-slate-900">
                            {GameProduct.price} $
                          </p>
                          {cartItems.find(
                            (item) => item.id === GameProduct.id
                          ) ? (
                            <button
                              disabled
                              className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                            >
                              Added to Cart
                            </button>
                          ) : (
                            <button
                              onClick={() => handleAddToCart(GameProduct)}
                              className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                            >
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
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="FreeFire" title="Free Fire">
              <Card className="max-w-7xl">
                <CardBody>
                  <div className="itunes-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
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
            <Tab key="Roblox" title="Roblox">
              <Card className="max-w-7xl">
                <CardBody>
                  <div className="itunes-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
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
            <Tab key="Fortnite" title="Fortnite">
              <Card className="max-w-7xl">
                <CardBody>
                  <div className="itunes-cards flex justify-center items-center flex-wrap gap-4 bg-[#0056b3] p-6 rounded-md">
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
        </div>
        <Toaster position="top-right" richColors closeButton />
      </section>
    </>
  );
}
