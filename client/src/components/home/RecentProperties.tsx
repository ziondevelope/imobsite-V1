import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
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
    <section className="py-16 bg-zinc-800">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h2 className="text-3xl font-montserrat font-bold text-white mb-2">
              Lançamentos
            </h2>
            <p className="text-gray-400">
              Confira os lançamentos mais recentes
            </p>
          </div>
          
          <Link 
            href="/properties" 
            className="group mt-4 md:mt-0 flex items-center text-green-500 font-montserrat font-medium hover:text-green-400 transition-colors"
          >
            Ver todos os imóveis
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
