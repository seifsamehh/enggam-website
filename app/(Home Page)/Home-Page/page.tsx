import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/common/Footer"));
const HeroSection = dynamic(() => import("@/components/Hero"));
const HomeCategories = dynamic(() => import("@/components/HomeCategories"));
const SaleHome = dynamic(() => import("@/components/SaleHome"));
const HomeProducts = dynamic(() => import("@/components/HomeProducts"));
const Story = dynamic(() => import("@/components/Story"));
const SupportSection = dynamic(() => import("@/components/Support"));
const HeaderHome = dynamic(() => import("@/lib/HeaderHome"));
const Cta = dynamic(() => import("@/common/Cta"));

export default function page() {
  return (
    <main className="home-page">
      <HeaderHome />
      <HeroSection />
      <HomeCategories />
      <SaleHome />
      <HomeProducts />
      <Story />
      <SupportSection />
      <Cta />
      <Footer />
    </main>
  );
}
