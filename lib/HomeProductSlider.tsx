"use client";

import { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { homeproducts, HomeProduct } from "@/common/HomeProducts";
import { addToCart } from "@/slices/cartSlice";
import { Toaster, toast } from "sonner";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../styles/HomeProducts.scss";

const USD_TO_EGP_RATE = 53.00;
export default function HomeProductSlider() {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

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

  const handleAddToCart = (homeproducts: HomeProduct) => {
    dispatch(addToCart(homeproducts));
    toast.success("Successfully added to cart", {
      description: `${homeproducts.name} has been added to your cart.`,
    });
  };
  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      mode: "free-snap",
      slides: {
        perView: 3,
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
    <>
      <div className="hidden">
        <select
          value={selectedCurrency}
          onChange={(e) => handleCurrencyChange(e.target.value)}
          className="bg-[#ff474d] text-white py-2 px-4 rounded-md"
        >
          <option value="USD">USD</option>
          <option value="EGP">EGP</option>
        </select>
      </div>
      <div ref={ref} className="keen-slider keen-slider-large">
        {homeproducts.map((homeproducts: HomeProduct) => (
          <div
            className="keen-slider__slide number-slide1"
            key={homeproducts.id}
          >
            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
              <Image
                src={homeproducts.image}
                alt={homeproducts.name}
                className="h-[23rem] rounded-t-lg object-cover"
                width={500}
                height={500}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nKSkqODMsMC4xOQ=="
              />
              <div className="mt-4 px-5 pb-5">
                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                  {homeproducts.name}
                </h5>
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-slate-900">
                    {convertCurrency(homeproducts.price)} {selectedCurrency}
                  </p>
                  {cartItems.find((item) => item.id === homeproducts.id) ? (
                    <button
                      disabled
                      className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                      Added to Cart
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAddToCart(homeproducts)}
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
          </div>
        ))}
        <Toaster position="top-right" richColors closeButton />
      </div>
      {/* small screen */}
      <div ref={sliderRef} className="keen-slider keen-slider-small">
        {homeproducts.map((homeproducts: HomeProduct) => (
          <div
            className="keen-slider__slide number-slide1"
            key={homeproducts.id}
          >
            <div className="box relative w-full md:max-w-xs overflow-hidden rounded-lg bg-white">
              <Image
                src={homeproducts.image}
                alt={homeproducts.name}
                className="h-[23rem] rounded-t-lg object-cover"
                width={500}
                height={500}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nKSkqODMsMC4xOQ=="
              />
              <div className="mt-4 px-5 pb-5">
                <h5 className="text-3xl font-semibold tracking-tight text-slate-900 my-4">
                  {homeproducts.name}
                </h5>
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-slate-900">
                    {convertCurrency(homeproducts.price)} {selectedCurrency}
                  </p>
                  {cartItems.find((item) => item.id === homeproducts.id) ? (
                    <button
                      disabled
                      className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                      Added to Cart
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAddToCart(homeproducts)}
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
          </div>
        ))}
        <Toaster position="top-right" richColors closeButton />
      </div>
    </>
  );
}
