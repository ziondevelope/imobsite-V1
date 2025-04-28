import { useState } from "react";
import { useLocation } from "wouter";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { propertyTypes, statusTypes, locations } from "@/lib/data";

export default function HeroBanner() {
  const [, setLocation] = useLocation();
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [neighborhood, setNeighborhood] = useState("");

  const handleSearch = () => {
    // Build query string from filters
    const params = new URLSearchParams();
    if (type) params.append("type", type);
    if (status) params.append("status", status);
    if (neighborhood) params.append("neighborhood", neighborhood);
    
    // Navigate to properties with filters
    setLocation(`/properties?${params.toString()}`);
  };

  return (
    <section className="relative h-[500px] bg-dark overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
          alt="Imóveis de luxo" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-white font-montserrat font-bold text-3xl md:text-5xl mb-6">
          Encontre o Imóvel dos Seus Sonhos
        </h1>
        <p className="text-white text-lg md:text-xl mb-8 max-w-2xl">
          Casas, apartamentos e imóveis comerciais com as melhores condições do mercado.
        </p>
        
        {/* Search Form */}
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1">
              <Select value={type} onValueChange={setType}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Tipo de Imóvel" />
                </SelectTrigger>
                <SelectContent>
                  {propertyTypes.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="col-span-1">
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Comprar ou Alugar" />
                </SelectTrigger>
                <SelectContent>
                  {statusTypes.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="col-span-1">
              <Select value={neighborhood} onValueChange={setNeighborhood}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Localização" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="col-span-1">
              <Button 
                onClick={handleSearch} 
                className="w-full font-montserrat font-medium"
              >
                <Search className="mr-2 h-4 w-4" /> Buscar Imóveis
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
