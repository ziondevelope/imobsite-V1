import { useState, useEffect } from "react";
import PropertyCard from "@/components/properties/PropertyCard";
import { Property, properties } from "@/lib/data";

export default function RecentProperties() {
  const [recentProperties, setRecentProperties] = useState<Property[]>([]);

  useEffect(() => {
    // Get most recent 3 properties (typically would be sorted by date)
    // In a real app, we would sort by createdAt, but for our mock data
    // we'll just use the last 3 properties from our data array
    const recent = properties.slice(properties.length - 3);
    setRecentProperties(recent);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-montserrat font-bold text-dark mb-2">
            Imóveis Recentes
          </h2>
          <p className="text-secondary">
            Confira as novidades que acabaram de chegar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
