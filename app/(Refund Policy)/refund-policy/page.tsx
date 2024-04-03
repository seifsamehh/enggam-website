import Footer from "@/common/Footer";
import HeaderLanding from "@/lib/HeaderLanding";

const page = () => {
  return (
    <>
      <HeaderLanding />
      <section className="min-h-screen refund">
        <h1>Refund Policy</h1>
        <p>
          We don’t accept return or refund once your order is processed , but we
          guarantee that every code is correct and valid . If you have any
          problem we are happy to help you 24/7 , you can chat with us through
          our Facebook Page : https://www.facebook.com/enggam.co/ Send Email To
          : enggam729@gmail.com WhatsUp on +201014402598 Once Bought and
          Delivered , cannot be returned , nor refunded So Please make sure to
          select the right product , with the right country code and\or in the
          right currency before you purchase it , as we cannot take products
          back , nor refund or exchange products that have already been paid and
          delivered
        </p>
      </section>
      <Footer />
    </>
  );
};

export default page;
