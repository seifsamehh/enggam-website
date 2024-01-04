import Link from "next/link";

import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ["latin"], weight: "900", display: "swap" });

export default function page() {
  return (
    <section className="success-page bg-green-500 text-white overflow-hidden min-h-screen flex justify-center items-center gap-8 flex-col">
      <svg
        width="64"
        height="64"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ffffff"
          d="M9.71 11.29a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 16a1 1 0 0 0 .72-.34l7-8a1 1 0 0 0-1.5-1.32L12 13.54Z"
        />
        <path
          fill="#ffffff"
          d="M21 11a1 1 0 0 0-1 1a8 8 0 0 1-8 8A8 8 0 0 1 6.33 6.36A7.93 7.93 0 0 1 12 4a8.79 8.79 0 0 1 1.9.22a1 1 0 1 0 .47-1.94A10.54 10.54 0 0 0 12 2a10 10 0 0 0-7 17.09A9.93 9.93 0 0 0 12 22a10 10 0 0 0 10-10a1 1 0 0 0-1-1"
        />
      </svg>
      <h1 className={`${raleway.className} min-[290px]:text-5xl md:text-7xl`}>
        Order Success
      </h1>
      <p className="text-2xl">Thank you for your order</p>
      <Link
        href="/Home-Page"
        title="Home Page"
        className="bg-white text-green-500 px-4 py-2 rounded-md"
      >
        Home Page
      </Link>
    </section>
  );
}
