import Link from "next/link";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: "900", display: "swap" });
import "../styles/sale.scss";

export default function SaleSection() {
  return (
    <section className="overflow-hidden relative sale bg-[#ff474d] text-white">
      <div className="flex justify-center items-center flex-col gap-8 min-h-screen">
        <div className="sale-heading">
          <h3 className={`${raleway.className} text-8xl text-center`}>SALE</h3>
          <h2 className={`${raleway.className} text-8xl text-center`}>SALE</h2>
        </div>
        <p className="max-w-3xl text-center leading-8 min-[290px]:px-4 md:px-0">
          We have the largest offers for the Engam store can be marketed and
          learn about the best offers and marketing through our site
        </p>
        <Link
          href="/sign-in"
          className="bg-white text-[#ff474d] rounded-md py-4 px-8"
          title="Sale"
          aria-label="Sale"
        >
          Go Shopping
        </Link>
      </div>
    </section>
  );
}
