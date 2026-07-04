import HeroSection from "../components/HeroSection/HeroSection";
import Brands from "../components/BrandsSection/Brands";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import ProductsSection from "../components/ProductsSection/ProductsSection";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import ContactSection from "../components/ContactSection/ContactSection";
import { useEffect } from "react";

const LandingPage = () => {
  useEffect(() => {
    document.title = "Home | NMC Cinemas";
  }, []);
  return (
    <main>
      <HeroSection />
      <Brands />
      <ServicesSection />
      <ProductsSection />
      <WhyChooseUs />
      <ContactSection />
    </main>
  );
};

export default LandingPage;
