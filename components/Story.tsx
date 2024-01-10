import StoryImg from "@/lib/StoryImg";
import { Raleway, Sacramento } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: "900", display: "swap" });
const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Story() {
  return (
    <section
      className="story overflow-hidden min-h-screen flex justify-center items-center relative"
      id="story"
    >
      <div className="container flex justify-around items-center gap-4 min-[290px]:flex-col md:flex-row">
        <div className="left min-[290px]:m-4 md:m-0">
          <h2 className={`${raleway.className} text-8xl text-[#0056b3]`}>
            Our <br />
            <span className="text-[#ff474d]">Story</span>
          </h2>
          <p className="max-w-2xl my-4 leading-10">
            Our goal is First, get a small profit Second : enggam.com is a Gift
            Card Company located in Egypt. we sell all prepaid cards like:-
            iTunes cards, google play cards, PNS cards, Xbox cards, Razer gold
            cards, Amazon cards, steam cards, Karma coin game cards, and much
            more. Our Purpose is making easy to get all Gift Cards safe and
            fast. We Can Use Our Website At Any Time And We Will With You In 24
            Hours.
          </p>
          <h3 className={`${sacramento.className} text-4xl text-[#0056b3]`}>
            Ali Nasr
          </h3>
        </div>
        <div className="right">
          <StoryImg />
        </div>
      </div>
      <svg
        className="w-44 h-44 absolute top-12 min-[290px]:right-0 md:right-20"
        viewBox="0 0 45 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.6255 2.70275C22.5417 10.814 22.7241 18.6509 20.7933 26.5407C19.8 30.5996 19.0342 34.6071 17.0855 38.3475C14.3071 43.6803 9.69255 50.1326 3.62191 52.033C2.73495 52.3107 0.723348 52.4979 2.74508 51.972C4.93854 51.4014 7.40023 50.9879 9.66671 50.8863C12.9552 50.739 15.8744 52.9678 17.9783 55.2657C21.7401 59.3744 23.5308 64.7026 24.8519 70.0399C26.1734 75.3791 26.5238 80.7837 27.3367 86.2033C27.63 88.1584 27.8963 90.1191 28.0969 92.0861C28.1126 92.2397 28.3134 94.4416 28.0512 93.9846C26.5877 91.4342 26.4763 87.4934 26.1816 84.6685C25.7101 80.1484 25.9418 75.62 26.4218 71.1088C26.7566 67.9618 27.0554 64.533 28.2944 61.5717C29.7711 58.0421 33.0101 55.79 36.059 53.4161C36.059 53.4161 44.7178 49.8786 43.2816 48.2801C39.9699 44.5944 29.4963 41.7198 27.461 37.12C25.1376 31.869 24.6262 25.5307 24.4409 19.8611C24.2444 13.8479 23.8232 7.81143 24.245 1.81071"
          stroke="#ff474d"
          strokeWidth="1.90596"
          strokeLinecap="round"
        ></path>
      </svg>
    </section>
  );
}
