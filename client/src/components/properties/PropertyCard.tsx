import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Bed, Bath, MoveHorizontal, Eye } from "lucide-react";
import { Property } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  property: Property;
  className?: string;
}

export default function PropertyCard({ property, className }: PropertyCardProps) {
  const { 
    id, title, address, city, neighborhood, price, type, status, 
    bedrooms, bathrooms, area, images 
  } = property;

  // Format price
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(price);

  // Format display address
  const displayLocation = `${neighborhood}, ${city}`;

  return (
    <div className={cn("property-card bg-zinc-900 rounded-sm overflow-hidden shadow-md border border-zinc-800", className)}>
      <div className="relative">
        <Link href={`/properties/${id}`}>
          <img 
            src={images[0]} 
            alt={title} 
            className="w-full h-56 object-cover transition-transform hover:scale-105 duration-300"
          />
        </Link>
        <div className="absolute top-4 left-4">
          <Badge className={cn(
            "text-white text-xs font-semibold px-3 py-1 rounded-sm",
            status === "sale" ? "bg-green-600" : "bg-blue-600"
          )}>
            {status === "sale" ? "Venda" : "Aluguel"}
          </Badge>
        </div>
        <Link 
          href={`/properties/${id}`}
          className="absolute bottom-4 right-4 bg-zinc-900 rounded-full p-2 hover:bg-green-600 hover:text-white transition-colors border border-zinc-800 text-white"
          aria-label="Ver detalhes"
        >
          <Eye className="h-5 w-5" />
        </Link>
      </div>
      
      <div className="p-5">
        <Link href={`/properties/${id}`}>
          <h3 className="font-montserrat font-semibold text-lg mb-2 text-white hover:text-green-500 transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-gray-400 text-sm mb-3">{displayLocation}</p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-green-500 font-montserrat font-bold text-xl">
            {status === "rent" ? `${formattedPrice}/mês` : formattedPrice}
          </span>
        </div>
        
        <div className="flex space-x-4 text-sm text-gray-400 border-t border-zinc-800 pt-4">
          {bedrooms > 0 && (
            <div className="flex items-center">
              <Bed className="mr-2 h-4 w-4 text-green-500" />
              <span>{bedrooms} {bedrooms === 1 ? 'Quarto' : 'Quartos'}</span>
            </div>
          )}
          
          {bathrooms > 0 && (
            <div className="flex items-center">
              <Bath className="mr-2 h-4 w-4 text-green-500" />
              <span>{bathrooms} {bathrooms === 1 ? 'Banheiro' : 'Banheiros'}</span>
            </div>
          )}
          
          <div className="flex items-center">
            <MoveHorizontal className="mr-2 h-4 w-4 text-green-500" />
            <span>{area}m²</span>
          </div>
        </div>
      </div>
    </div>
  );
}
