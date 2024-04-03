import FooterHome from "@/common/FooterHome";
import HeaderHome from "@/lib/HeaderHome";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: "900", display: "swap" });

const page = () => {
  return (
    <>
      <HeaderHome />
      <section className="terms min-h-screen flex justify-center items-center flex-col gap-4 min-[290px]:py-4 md:py-0 ">
        <h1
          className={`${raleway.className} text-6xl text-center text-[#0056b3]`}
        >
          Terms of service
        </h1>
        <p className="max-w-4xl text-2xl text-center min-[290px]:px-4 md:px-0">
          These Terms of Service govern your rights and obligations, as users of
          the portals administered and managed by Enggam otherwise provided by
          Enggam, all new portals introduced and managed by Enggam shall be
          governed by these Terms of Service. By registering an account with
          Enggam and accessing any of the Portals, you acknowledge and accept
          that your usage of the Portals (or any of them) shall be governed by
          these Terms of Service and any other specific rules, procedures, terms
          and conditions for the products, services or facilities offered as
          determined or as may be amended by Enggam at any time or from time to
          time at its absolute discretion.
        </p>
      </section>
      <FooterHome />
    </>
  );
};

export default page;
