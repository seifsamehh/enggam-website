import Link from "next/link";
import { Raleway } from "next/font/google";
import HeaderHome from "@/lib/HeaderHome";
import FooterHome from "@/common/FooterHome";

const raleway = Raleway({ subsets: ["latin"], weight: "900", display: "swap" });

const page = () => {
  return (
    <>
      <HeaderHome />
      <section className="min-h-screen flex justify-center items-center flex-col gap-4 min-[290px]:py-4 md:py-0 refund">
        <h1
          className={`${raleway.className} text-6xl text-center text-[#0056b3]`}
        >
          Refund Policy
        </h1>
        <p className="max-w-4xl text-2xl text-center min-[290px]:px-4 md:px-0">
          We don’t accept return or refund once your order is processed , but we
          guarantee that every code is correct and valid. If you have any
          problem we are happy to help you 24/7 , you can chat with us through
          our Facebook Page :{" "}
          <Link
            href="https://www.facebook.com/enggam.co/"
            className="text-[#0056b3]"
            target="_blank"
          >
            https://www.facebook.com/enggam.co/
          </Link>{" "}
          Send Email To :{" "}
          <Link
            href="mailto:enggam729@gmail.com"
            className="text-[#0056b3]"
            target="_blank"
          >
            enggam729@gmail.com
          </Link>{" "}
          WhatsUp on{" "}
          <Link
            href="tel:+201014402598"
            className="text-[#0056b3]"
            target="_blank"
          >
            +201014402598
          </Link>{" "}
          Once Bought and Delivered , cannot be returned , nor refunded So
          Please make sure to select the right product , with the right country
          code and\or in the right currency before you purchase it , as we
          cannot take products back , nor refund or exchange products that have
          already been paid and delivered.
        </p>
        <p></p>
      </section>
      <FooterHome />
    </>
  );
};

export default page;
