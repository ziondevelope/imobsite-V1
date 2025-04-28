import HeroBanner from "@/components/home/HeroBanner";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import PropertyCarousel from "@/components/home/PropertyCarousel";
import HomeCategories from "@/components/home/HomeCategories";
import RecentProperties from "@/components/home/RecentProperties";
import Services from "@/components/home/Services";
import TeamSection from "@/components/home/TeamSection";
import Testimonials from "@/components/home/Testimonials";
import ContactSection from "@/components/home/ContactSection";
import Newsletter from "@/components/home/Newsletter";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Set page title
    document.title = "Imóveis Exata - Encontre o Imóvel dos Seus Sonhos";
  }, []);
  
  return (
    <>
      <HeroBanner />
      <PropertyCarousel />
      <HomeCategories />
      <RecentProperties />
      <FeaturedProperties />
      <Services />
      <TeamSection />
      <Testimonials />
      <ContactSection />
      <Newsletter />
    </>
  );
}
