"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Product, products } from "@/common/products";
import { addToCart } from "@/slices/cartSlice";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import Link from "next/link";
import { Toaster, toast } from "sonner";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: "900", display: "swap" });
import "../styles/sale.scss";

const USD_TO_EGP_RATE = 47.78;
export default function SaleHome() {
  const [selectedCurrency, setSelectedCurrency] = useState("EGP");

  const handleCurrencyChange = (currency: string) => {
    setSelectedCurrency(currency);
  };

  const convertCurrency = (price: number) => {
    if (selectedCurrency === "EGP") {
      return (price * USD_TO_EGP_RATE).toFixed(2);
    }
    return price.toFixed(2);
  };

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
    toast.success("Successfully added to cart", {
      description: `${product.name} has been added to your cart.`,
    });
  };
  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      mode: "free-snap",
      slides: {
        perView: 4,
        spacing: 15,
      },
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
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      mode: "free-snap",
      slides: {
        perView: 1,
        spacing: 15,
      },
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
  return (
    <section className="sale-home overflow-hidden min-h-screen" id="sale-home">
      <div className="sale-boxs flex min-[290px]:justify-center md:justify-start items-center min-[290px]:flex-wrap md:flex-nowrap">
        <div className="box bg-[#ff474d] text-white min-[290px]:w-full md:w-1/4 h-[525px] flex justify-center items-center flex-col gap-4">
          <h2 className={`${raleway.className} text-6xl`}>SALE</h2>
          <Link
            href="/Home-Page/sale-page"
            aria-label="sale"
            className="bg-white text-[#ff474d] py-2 px-4 rounded-md"
          >
            View More
          </Link>
          <div className="hidden">
            <select
              value={selectedCurrency}
              onChange={(e) => handleCurrencyChange(e.target.value)}
              className="bg-white text-[#ff474d] py-2 px-4 rounded-md"
            >
              <option value="USD">USD</option>
              <option value="EGP">EGP</option>
            </select>
          </div>
        </div>
        <div ref={ref} className="keen-slider keen-slider-large">
          {products.map((product: Product) => (
            <div
              key={product.id}
              className="keen-slider__slide box relative w-full md:max-w-xs overflow-hidden"
            >
              <Image
                src={product.image}
                alt={product.name}
                className="h-[23rem] rounded-t-lg object-cover"
                width={500}
                height={500}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nKSkqODMsMC4xOQ=="
              />
              <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-[#ff474d] text-center text-sm text-white">
                Sale
              </span>
              <div className="mt-4 px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
                  {product.name}
                </h5>
                <del>
                  {convertCurrency(product.delete)} {selectedCurrency}
                </del>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-slate-900">
                    {convertCurrency(product.price)} {selectedCurrency}
                  </p>
                  {cartItems.find((item) => item.id === product.id) ? (
                    <button
                      disabled
                      className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                      Added to Cart
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAddToCart(product)}
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
            </div>
          ))}
        </div>
        {/* small screen */}
        <div ref={sliderRef} className="keen-slider keen-slider-small">
          {products.map((product: Product) => (
            <div
              key={product.id}
              className="keen-slider__slide box relative w-full md:max-w-xs overflow-hidden rounded-lg"
            >
              <Image
                src={product.image}
                alt={product.name}
                className="h-[23rem] rounded-t-lg object-cover"
                width={500}
                height={500}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nKSkqODMsMC4xOQ=="
              />
              <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-[#ff474d] text-center text-sm text-white">
                Sale
              </span>
              <div className="mt-4 px-5 pb-5">
                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                  {product.name}
                </h5>
                <del>
                  {convertCurrency(product.delete)} {selectedCurrency}
                </del>
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-slate-900">
                    {convertCurrency(product.price)} {selectedCurrency}
                  </p>
                  {cartItems.find((item) => item.id === product.id) ? (
                    <button
                      disabled
                      className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                      Added to Cart
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAddToCart(product)}
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
            </div>
          ))}
        </div>
      </div>
      <Toaster position="top-right" richColors closeButton />
    </section>
  );
}
