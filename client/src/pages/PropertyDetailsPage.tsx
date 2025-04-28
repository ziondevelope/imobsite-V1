import { useEffect, useState } from "react";
import { useParams, Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import PropertyDetail from "@/components/properties/PropertyDetail";
import { Property, properties } from "@/lib/data";
import { Skeleton } from "@/components/ui/skeleton";

export default function PropertyDetailsPage() {
  const { id } = useParams();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set page title
    document.title = "Detalhes do Imóvel | Imóveis Exata";
    
    // Simulate API call to fetch property
    const fetchProperty = async () => {
      setLoading(true);
      try {
        // Find property by ID in mock data
        const propertyId = parseInt(id);
        const foundProperty = properties.find(p => p.id === propertyId);
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        if (foundProperty) {
          setProperty(foundProperty);
          document.title = `${foundProperty.title} | Imóveis Exata`;
        }
      } catch (error) {
        console.error("Error fetching property:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProperty();
  }, [id]);

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4 mb-6">
        <Link href="/properties">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Imóveis
          </Button>
        </Link>
        
        {loading ? (
          <div className="space-y-4">
            <Skeleton className="h-[400px] w-full rounded-lg" />
            <div className="flex justify-between">
              <Skeleton className="h-10 w-1/3" />
              <Skeleton className="h-10 w-1/4" />
            </div>
            <Skeleton className="h-6 w-1/2" />
            <div className="flex gap-4">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-6 w-24" />
            </div>
            <Skeleton className="h-40 w-full" />
          </div>
        ) : property ? (
          <PropertyDetail property={property} />
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">Imóvel não encontrado</h2>
            <p className="mb-6">O imóvel que você está procurando não foi encontrado.</p>
            <Link href="/properties">
              <Button>Ver Todos os Imóveis</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
