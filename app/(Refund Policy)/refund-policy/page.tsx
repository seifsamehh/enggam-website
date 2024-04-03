import Footer from "@/common/Footer";
import HeaderLanding from "@/lib/HeaderLanding";
import { Raleway } from "next/font/google";
import Link from "next/link";

const raleway = Raleway({ subsets: ["latin"], weight: "900", display: "swap" });

const page = () => {
  return (
    <>
      <HeaderLanding />
      <section className="min-h-screen flex justify-center items-center flex-col gap-4 refund">
        <h1 className={`${raleway.className} text-4xl text-[#0056b3]`}>
          Refund Policy
        </h1>
        <p className="max-w-4xl text-center">
          We don’t accept return or refund once your order is processed , but we
          guarantee that every code is correct and valid. If you have any
          problem we are happy to help you 24/7 , you can chat with us through
          our Facebook Page :{" "}
          <Link href="https://www.facebook.com/enggam.co/" target="_blank">
            https://www.facebook.com/enggam.co/
          </Link>{" "}
          Send Email To :{" "}
          <Link href="mailto:enggam729@gmail.com" target="_blank">
            enggam729@gmail.com
          </Link>{" "}
          WhatsUp on{" "}
          <Link href="tel:+201014402598" target="_blank">
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
      <Footer />
    </>
  );
};

export default page;
