import Image from "next/image";
import CategoriesSvg from "@/lib/CategoriesSvg";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: "900", display: "swap" });
import "../styles/categories.scss";

export default function Categories() {
  return (
    <section className="categories overflow-hidden relative z-10">
      <div className="boxs">
        <div className="box flex justify-around items-center min-[290px]:flex-col md:flex-row">
          <div className="left max-w-3xl">
            <h2
              className={`${raleway.className} text-5xl bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent min-[290px]:text-center md:text-left`}
            >
              GIFT CARDS
            </h2>
            <p className="leading-8 min-[290px]:text-center md:text-left">
              Buy cards for PSN, Xbox , Steam, Razer Gold, iTunes, Google Play
              and Netflex , Enggam Stores gives you the Group of Gift Cards
              collection ever found In all over the world.
            </p>
          </div>
          <div className="right">
            <Image
              src="https://i.imgur.com/5Vz5H5r.png"
              alt="GIFT CARDS"
              aria-label="GIFT CARDS"
              className="odd:rotate-6"
              width={300}
              height={300}
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
            />
          </div>
        </div>
        <div className="box flex justify-around items-center min-[290px]:flex-col md:flex-row">
          <div className="left max-w-3xl">
            <h2
              className={`${raleway.className} text-5xl bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent min-[290px]:text-center md:text-left`}
            >
              GAME CARDS
            </h2>
            <p className="leading-8 min-[290px]:text-center md:text-left">
              Buy cards for Pubj, FreeFire , Fortinute, Mobile Legend,Roblox,
              Any game card can be charged at any time.
            </p>
          </div>
          <div className="right">
            <Image
              src="https://i.imgur.com/PxTV6dy.png"
              alt="GAME CARDS"
              aria-label="GAME CARDS"
              className="odd:rotate-6"
              width={300}
              height={300}
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
            />
          </div>
        </div>
        <div className="box flex justify-around items-center min-[290px]:flex-col md:flex-row">
          <div className="left max-w-3xl">
            <h2
              className={`${raleway.className} text-5xl bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent min-[290px]:text-center md:text-left`}
            >
              PAYMENT CARDS
            </h2>
            <p className="leading-8 min-[290px]:text-center md:text-left">
              You can choose any card for the payment method through our website
              by browsing through the site’s featured cards.
            </p>
          </div>
          <div className="right">
            <Image
              src="https://i.imgur.com/a6tUu6Z.png"
              alt="PAYMENT CARDS"
              aria-label="PAYMENT CARDS"
              className="odd:rotate-6"
              width={300}
              height={300}
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkzL9QDwADegHBOLyGlwAAAABJRU5ErkJggg=="
            />
          </div>
        </div>
      </div>
      <CategoriesSvg />
    </section>
  );
}
