import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLocation } from "wouter";
import { propertyTypes, statusTypes, locations } from "@/lib/data";

export default function PropertySearch() {
  const [, setLocation] = useLocation();
  
  // Basic filters
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  
  // Advanced filters
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [minArea, setMinArea] = useState("");
  const [maxArea, setMaxArea] = useState("");
  
  const handleSearch = () => {
    // Build query string from filters
    const params = new URLSearchParams();
    
    // Add basic filters
    if (type) params.append("type", type);
    if (status) params.append("status", status);
    if (neighborhood) params.append("neighborhood", neighborhood);
    
    // Add advanced filters
    if (minPrice) params.append("minPrice", minPrice);
    if (maxPrice) params.append("maxPrice", maxPrice);
    if (bedrooms) params.append("bedrooms", bedrooms);
    if (bathrooms) params.append("bathrooms", bathrooms);
    if (minArea) params.append("minArea", minArea);
    if (maxArea) params.append("maxArea", maxArea);
    
    // Navigate to properties with filters
    setLocation(`/properties?${params.toString()}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="font-montserrat font-semibold text-xl mb-4">
        Buscar Imóveis
      </h2>
      
      {/* Basic Search */}
      <div className="space-y-4 mb-6">
        <div>
          <Label htmlFor="type" className="block text-secondary font-medium mb-2">
            Tipo de Imóvel
          </Label>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger id="type" className="w-full">
              <SelectValue placeholder="Qualquer tipo" />
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
        
        <div>
          <Label htmlFor="status" className="block text-secondary font-medium mb-2">
            Comprar ou Alugar
          </Label>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger id="status" className="w-full">
              <SelectValue placeholder="Qualquer status" />
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
        
        <div>
          <Label htmlFor="neighborhood" className="block text-secondary font-medium mb-2">
            Localização
          </Label>
          <Select value={neighborhood} onValueChange={setNeighborhood}>
            <SelectTrigger id="neighborhood" className="w-full">
              <SelectValue placeholder="Qualquer local" />
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
      </div>
      
      {/* Advanced Search */}
      <Accordion type="single" collapsible className="mb-6">
        <AccordionItem value="advanced-search">
          <AccordionTrigger>Busca Avançada</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="minPrice" className="block text-secondary font-medium mb-2">
                    Preço Mínimo
                  </Label>
                  <Input
                    id="minPrice"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    type="number"
                    placeholder="Mínimo"
                  />
                </div>
                <div>
                  <Label htmlFor="maxPrice" className="block text-secondary font-medium mb-2">
                    Preço Máximo
                  </Label>
                  <Input
                    id="maxPrice"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    type="number"
                    placeholder="Máximo"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="bedrooms" className="block text-secondary font-medium mb-2">
                  Quartos
                </Label>
                <Select value={bedrooms} onValueChange={setBedrooms}>
                  <SelectTrigger id="bedrooms">
                    <SelectValue placeholder="Qualquer" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="bathrooms" className="block text-secondary font-medium mb-2">
                  Banheiros
                </Label>
                <Select value={bathrooms} onValueChange={setBathrooms}>
                  <SelectTrigger id="bathrooms">
                    <SelectValue placeholder="Qualquer" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="minArea" className="block text-secondary font-medium mb-2">
                    Área Mínima (m²)
                  </Label>
                  <Input
                    id="minArea"
                    value={minArea}
                    onChange={(e) => setMinArea(e.target.value)}
                    type="number"
                    placeholder="Mínima"
                  />
                </div>
                <div>
                  <Label htmlFor="maxArea" className="block text-secondary font-medium mb-2">
                    Área Máxima (m²)
                  </Label>
                  <Input
                    id="maxArea"
                    value={maxArea}
                    onChange={(e) => setMaxArea(e.target.value)}
                    type="number"
                    placeholder="Máxima"
                  />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <Button 
        onClick={handleSearch} 
        className="w-full font-montserrat font-medium"
      >
        <Search className="mr-2 h-4 w-4" /> Buscar Imóveis
      </Button>
    </div>
  );
}
