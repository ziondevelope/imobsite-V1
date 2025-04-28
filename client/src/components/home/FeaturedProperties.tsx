import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import PropertyCard from "@/components/properties/PropertyCard";
import { Property, properties } from "@/lib/data";

export default function FeaturedProperties() {
  const [featuredProperties, setFeaturedProperties] = useState<Property[]>([]);

  useEffect(() => {
    // Filter featured properties from the mock data
    const featured = properties.filter(property => property.featured);
    setFeaturedProperties(featured);
  }, []);

  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-montserrat font-bold text-dark mb-2">
            Imóveis em Destaque
          </h2>
          <p className="text-secondary">
            Confira os melhores imóveis disponíveis para você
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/properties">
            <Button size="lg" className="font-montserrat font-medium">
              Ver Todos os Imóveis
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
