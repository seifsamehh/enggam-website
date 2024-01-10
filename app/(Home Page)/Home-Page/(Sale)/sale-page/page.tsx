"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { SalePageProduct, SaleProducts } from "@/common/SalePageProducts";
import { addToCart } from "@/slices/cartSlice";
import Footer from "@/common/Footer";
import HeaderHome from "@/lib/HeaderHome";
import { Toaster, toast } from "sonner";
import Image from "next/image";

export default function page() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleAddToCart = (SalePageProduct: SalePageProduct) => {
    dispatch(addToCart(SalePageProduct));
    toast.success("Successfully added to cart", {
      description: `${SalePageProduct.name} has been added to your cart.`,
    });
  };
  return (
    <>
      <HeaderHome />
      <section className="sale-page overflow-hidden">
        <div className="sale-boxs flex justify-center items-center gap-4 flex-wrap py-12">
          {SaleProducts.map((SalePageProduct) => (
            <div
              key={SalePageProduct.id}
              className="box relative w-full md:max-w-xs overflow-hidden rounded-lg"
            >
              <Image
                src={SalePageProduct.image}
                alt={SalePageProduct.name}
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
                  {SalePageProduct.name}
                </h5>
                <del>{SalePageProduct.delete} $</del>
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-slate-900">
                    {SalePageProduct.price} $
                  </p>
                  {cartItems.find((item) => item.id === SalePageProduct.id) ? (
                    <button
                      disabled
                      className="flex items-center rounded-md bg-[#0056b3] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                      Added to Cart
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAddToCart(SalePageProduct)}
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
        <Toaster position="top-right" richColors closeButton />
      </section>
      <Footer />
    </>
  );
}
