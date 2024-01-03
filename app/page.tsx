import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/common/Footer"));
const Categories = dynamic(() => import("@/components/Categories"));
const SaleSection = dynamic(() => import("@/components/Sale"));
const SupportSection = dynamic(() => import("@/components/Support"));
const Cta = dynamic(() => import("@/common/Cta"));
const HeaderLanding = dynamic(() => import("@/lib/HeaderLanding"));
const HeroSlider = dynamic(() => import("@/lib/HeroSlider"));
const PartnersSlider = dynamic(() => import("@/lib/PartnersSlider"));
const PartnersSlider2 = dynamic(() => import("@/lib/PartnersSlider2"));

export default function Home() {
  return (
    <main className="landing-page">
      <HeaderLanding />
      <HeroSlider />
      <Categories />
      <SaleSection />
      <PartnersSlider />
      <PartnersSlider2 />
      <SupportSection />
      <Cta />
      <Footer />
    </main>
  );
}
