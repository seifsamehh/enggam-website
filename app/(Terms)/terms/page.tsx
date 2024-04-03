import Footer from "@/common/Footer";
import HeaderLanding from "@/lib/HeaderLanding";

const page = () => {
  return (
    <>
      <HeaderLanding />
      <section className="terms min-h-screen">
        <h1>Terms of service</h1>
        <p>
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
      <Footer />
    </>
  );
};

export default page;
