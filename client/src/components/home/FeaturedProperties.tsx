import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PropertyCard from "@/components/properties/PropertyCard";
import { Property, properties } from "@/lib/data";

export default function FeaturedProperties() {
  const [featuredProperties, setFeaturedProperties] = useState<Property[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const itemsPerSlide = 4; // Number of properties to show per slide
  
  useEffect(() => {
    // Filter featured properties from the mock data
    const featured = properties.filter(property => property.featured);
    setFeaturedProperties(featured);
  }, []);
  
  const totalSlides = Math.ceil(featuredProperties.length / itemsPerSlide);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  
  // Properties for current slide
  const currentProperties = featuredProperties.slice(
    currentSlide * itemsPerSlide, 
    (currentSlide + 1) * itemsPerSlide
  );

  return (
    <section className="py-16 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-montserrat font-bold text-white mb-2">
              Imóveis selecionados
            </h2>
            <p className="text-gray-400">
              Confira os melhores imóveis disponíveis para você
            </p>
          </div>
          
          {totalSlides > 1 && (
            <div className="flex space-x-3">
              <button 
                onClick={prevSlide} 
                className="bg-zinc-800 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors border border-zinc-700"
                aria-label="Anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextSlide} 
                className="bg-zinc-800 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors border border-zinc-700"
                aria-label="Próximo"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>

        <div 
          ref={slideRef} 
          className="overflow-hidden"
        >
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            style={{ 
              transition: 'transform 0.5s ease',
            }}
          >
            {currentProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/properties">
            <Button 
              size="lg" 
              className="font-montserrat font-medium bg-green-600 hover:bg-green-700 text-white rounded-sm"
            >
              Ver Todos os Imóveis
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
