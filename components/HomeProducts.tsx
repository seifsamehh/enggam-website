import HomeProductSlider from "@/lib/HomeProductSlider";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: "900", display: "swap" });

export default function HomeProducts() {
  return (
    <section
      className="home-product py-8 overflow-hidden flex justify-center items-center gap-6 flex-col"
      id="home-product"
    >
      <h2
        className={`${raleway.className} text-7xl bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent min-[290px]:text-center md:text-left`}
      >
        Top Seller
      </h2>
      <HomeProductSlider />
    </section>
  );
}
