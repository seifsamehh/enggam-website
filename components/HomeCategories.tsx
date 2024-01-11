import HomeCategoriesLeft from "@/lib/HomeCategoriesLeft";
import Image from "next/image";
import Link from "next/link";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: "900", display: "swap" });

export default function HomeCategories() {
  return (
    <section
      className="home-categories overflow-hidden min-h-screen"
      id="home-categories"
    >
      <div className="container flex justify-around items-center min-[290px]:flex-col md:flex-row">
        <div className="left w-full">
          <HomeCategoriesLeft />
        </div>
        <div className="right relative z-10">
          <div className="right-box min-[290px]:mx-4 md:mx-0">
            <div className="box bg-[#0056b3] text-white rounded-lg my-4 py-6 px-4">
              <Image
                src="https://i.imgur.com/5Vz5H5r.png"
                alt="GIFT CARDS"
                aria-label="GIFT CARDS"
                width={100}
                height={100}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nKSkqODMsMC4xOQ=="
              />
              <h2 className={`${raleway.className} text-3xl`}>GIFT CARDS</h2>
              <p className="my-4">
                Buy cards for PSN, Xbox , Steam, Razer Gold, iTunes, Google Play
                and Netflex , Enggam Stores gives you the Group of Gift Cards
                collection ever found In all over the world.
              </p>
              <Link
                href="/Home-Page/categories/gift-cards"
                title="GIFT CARDS"
                className="bg-white text-[#0056b3] rounded-md py-4 px-8"
              >
                View More
              </Link>
            </div>
            <div className="box bg-[#0056b3] text-white rounded-lg my-4 py-6 px-4">
              <Image
                src="https://i.imgur.com/PxTV6dy.png"
                alt="GAME CARDS"
                aria-label="GAME CARDS"
                width={100}
                height={100}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nKSkqODMsMC4xOQ=="
              />
              <h2 className={`${raleway.className} text-3xl`}>GAME CARDS</h2>
              <p className="my-4">
                Buy cards for Pubj, FreeFire , Fortinute, Mobile Legend,Roblox,
                Any game card can be charged at any time.
              </p>
              <Link
                href="/Home-Page/categories/game-cards"
                title="GAME CARDS"
                className="bg-white text-[#0056b3] rounded-md py-4 px-8"
              >
                View More
              </Link>
            </div>
            <div className="box bg-[#0056b3] text-white rounded-lg my-4 py-6 px-4">
              <Image
                src="https://i.imgur.com/a6tUu6Z.png"
                alt="PAYMENT CARDS"
                aria-label="PAYMENT CARDS"
                width={100}
                height={100}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nKSkqODMsMC4xOQ=="
              />
              <h2 className={`${raleway.className} text-3xl`}>PAYMENT CARDS</h2>
              <p className="my-4">
                You can choose any card for the payment method through our
                website by browsing through the site’s featured cards.
              </p>
              <Link
                href="/Home-Page/categories/payment-cards"
                title="PAYMENT CARDS"
                className="bg-white text-[#0056b3] rounded-md py-4 px-8"
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
