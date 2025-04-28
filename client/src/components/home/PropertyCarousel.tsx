import { useState, useEffect, useCallback } from 'react';
import { Link } from 'wouter';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Bed, Bath, MoveHorizontal } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Property, properties } from '@/lib/data';

export default function PropertyCarousel() {
  const [featuredProperties, setFeaturedProperties] = useState<Property[]>([]);
  
  // Initialize Embla carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    skipSnaps: false
  });
  
  // Navigation button states
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  // Scroll to previous/next slide
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  
  // Update button states based on carousel position
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    // Get featured properties
    const featured = properties.filter(property => property.featured);
    setFeaturedProperties(featured);
  }, []);

  // Format price for display
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="py-16 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-montserrat font-bold text-white mb-2">
              Apartamentos em Destaque
            </h2>
            <p className="text-gray-400">
              Os melhores imóveis selecionados para você
            </p>
          </div>

          <div className="flex space-x-3">
            <button
              className="bg-zinc-800 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors border border-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="bg-zinc-800 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors border border-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              aria-label="Próximo"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {featuredProperties.map((property) => (
              <div key={property.id} className="flex-grow-0 flex-shrink-0 min-w-[300px] w-[calc(25%-16px)] md:min-w-[350px] mx-2">
                <div className="bg-zinc-900 rounded-sm overflow-hidden shadow-md border border-zinc-800 h-full">
                  <div className="relative">
                    <Link href={`/properties/${property.id}`}>
                      <img 
                        src={property.images[0]} 
                        alt={property.title} 
                        className="w-full h-56 object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </Link>
                    <div className="absolute top-4 left-4">
                      <Badge className={cn(
                        "text-white text-xs font-semibold px-3 py-1 rounded-sm",
                        property.status === "sale" ? "bg-green-600" : "bg-blue-600"
                      )}>
                        {property.status === "sale" ? "Venda" : "Aluguel"}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <Link href={`/properties/${property.id}`}>
                      <h3 className="font-montserrat font-semibold text-lg mb-2 text-white hover:text-green-500 transition-colors truncate">
                        {property.title}
                      </h3>
                    </Link>
                    <p className="text-gray-400 text-sm mb-3 truncate">{property.neighborhood}, {property.city}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-green-500 font-montserrat font-bold text-xl">
                        {property.status === "rent" ? `${formatPrice(property.price)}/mês` : formatPrice(property.price)}
                      </span>
                    </div>
                    
                    <div className="flex space-x-4 text-sm text-gray-400 border-t border-zinc-800 pt-4">
                      {property.bedrooms > 0 && (
                        <div className="flex items-center">
                          <Bed className="mr-2 h-4 w-4 text-green-500" />
                          <span>{property.bedrooms}</span>
                        </div>
                      )}
                      
                      {property.bathrooms > 0 && (
                        <div className="flex items-center">
                          <Bath className="mr-2 h-4 w-4 text-green-500" />
                          <span>{property.bathrooms}</span>
                        </div>
                      )}
                      
                      <div className="flex items-center">
                        <MoveHorizontal className="mr-2 h-4 w-4 text-green-500" />
                        <span>{property.area}m²</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href="/properties" className="inline-block bg-green-600 hover:bg-green-700 text-white py-3 px-6 font-montserrat font-medium rounded-sm transition-colors">
            Ver Todos os Imóveis
          </Link>
        </div>
      </div>
    </section>
  );
}