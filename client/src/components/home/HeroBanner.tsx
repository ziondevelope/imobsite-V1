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
    <section className="relative h-[600px] overflow-hidden bg-zinc-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
          alt="Imóveis de luxo" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-white font-montserrat font-bold text-3xl md:text-5xl mb-6">
          sonhar planejar concretizar
        </h1>
        
        {/* Search Form */}
        <div className="w-full max-w-5xl bg-zinc-900 bg-opacity-95 rounded-sm border border-zinc-800 p-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
            <div className="col-span-1">
              <Select value={type} onValueChange={setType}>
                <SelectTrigger className="w-full bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700">
                  <SelectValue placeholder="Tipo de Imóvel" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                  {propertyTypes.map(option => (
                    <SelectItem 
                      key={option.value} 
                      value={option.value}
                      className="hover:bg-zinc-700"
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="col-span-1">
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="w-full bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700">
                  <SelectValue placeholder="Comprar ou Alugar" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                  {statusTypes.map(option => (
                    <SelectItem 
                      key={option.value} 
                      value={option.value}
                      className="hover:bg-zinc-700"
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="col-span-1">
              <Select value={neighborhood} onValueChange={setNeighborhood}>
                <SelectTrigger className="w-full bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700">
                  <SelectValue placeholder="Localização" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                  {locations.map(option => (
                    <SelectItem 
                      key={option.value} 
                      value={option.value}
                      className="hover:bg-zinc-700"
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="col-span-1">
              <Select value="" onValueChange={() => {}}>
                <SelectTrigger className="w-full bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700">
                  <SelectValue placeholder="Preço" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                  <SelectItem value="até-500k" className="hover:bg-zinc-700">Até R$ 500.000</SelectItem>
                  <SelectItem value="500k-1m" className="hover:bg-zinc-700">R$ 500.000 - R$ 1.000.000</SelectItem>
                  <SelectItem value="acima-1m" className="hover:bg-zinc-700">Acima de R$ 1.000.000</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="col-span-1">
              <Button 
                onClick={handleSearch} 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium"
              >
                <Search className="mr-2 h-4 w-4" /> Buscar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
