import HeroBanner from "@/components/home/HeroBanner";
import FeaturedProperties from "@/components/home/FeaturedProperties";
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
      <FeaturedProperties />
      <RecentProperties />
      <Services />
      <TeamSection />
      <Testimonials />
      <ContactSection />
      <Newsletter />
    </>
  );
}
