import { SignIn } from "@clerk/nextjs";
import { Raleway } from "next/font/google";
import Link from "next/link";
import "../../../../styles/sign.scss";

const raleway = Raleway({ subsets: ["latin"], weight: "900", display: "swap" });

export default function Page() {
  return (
    <section className="sign-in min-h-screen flex justify-center items-center bg-[#f4f4f4] overflow-x-hidden">
      <div className="flex items-center justify-between content bg-[#ffffff] p-8 rounded-xl min-[290px]:gap-4 md:gap-40 min-[290px]:flex-wrap md:flex-nowrap">
        <div className="left">
          <h2 className={`${raleway.className} text-3xl text-black`}>
            Get in touch!
            <br />
            Dear Customer,
          </h2>
          <p className="my-8 text-black">
            Don’t hesitate to contact with us by any way you prefer,
            <br /> and be sure we will happy to receive your inquiry
            <br /> and you will be replied as soon as possible.
          </p>
          <Link
            href="/sign-up"
            className="bg-white text-[#016fd0] py-2 px-4 rounded-md"
          >
            Create An Account
          </Link>
        </div>
        <div className="right">
          <SignIn />
        </div>
      </div>
    </section>
  );
}
