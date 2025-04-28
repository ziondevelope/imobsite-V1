import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import PropertyCard from "@/components/properties/PropertyCard";
import PropertySearch from "@/components/properties/PropertySearch";
import { Property, properties } from "@/lib/data";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PropertiesListPage() {
  const [location] = useLocation();
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 8;

  useEffect(() => {
    // Set page title
    document.title = "Imóveis | Imóveis Exata";
    
    // Reset to first page when filters change
    setCurrentPage(1);
    
    // Parse query parameters
    const queryParams = new URLSearchParams(location.split('?')[1] || '');
    
    // Simulate API call with delay
    const fetchProperties = async () => {
      setLoading(true);
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Apply filters
        let filtered = [...properties];
        
        // Type filter
        const typeFilter = queryParams.get('type');
        if (typeFilter) {
          filtered = filtered.filter(p => p.type === typeFilter);
        }
        
        // Status filter
        const statusFilter = queryParams.get('status');
        if (statusFilter) {
          filtered = filtered.filter(p => p.status === statusFilter);
        }
        
        // Neighborhood filter
        const neighborhoodFilter = queryParams.get('neighborhood');
        if (neighborhoodFilter) {
          filtered = filtered.filter(p => 
            p.neighborhood.toLowerCase().includes(neighborhoodFilter.toLowerCase())
          );
        }
        
        // Price range filter
        const minPrice = queryParams.get('minPrice');
        if (minPrice) {
          filtered = filtered.filter(p => p.price >= parseInt(minPrice));
        }
        
        const maxPrice = queryParams.get('maxPrice');
        if (maxPrice) {
          filtered = filtered.filter(p => p.price <= parseInt(maxPrice));
        }
        
        // Bedrooms filter
        const bedroomsFilter = queryParams.get('bedrooms');
        if (bedroomsFilter) {
          filtered = filtered.filter(p => p.bedrooms >= parseInt(bedroomsFilter));
        }
        
        // Bathrooms filter
        const bathroomsFilter = queryParams.get('bathrooms');
        if (bathroomsFilter) {
          filtered = filtered.filter(p => p.bathrooms >= parseInt(bathroomsFilter));
        }
        
        // Area range filter
        const minArea = queryParams.get('minArea');
        if (minArea) {
          filtered = filtered.filter(p => p.area >= parseInt(minArea));
        }
        
        const maxArea = queryParams.get('maxArea');
        if (maxArea) {
          filtered = filtered.filter(p => p.area <= parseInt(maxArea));
        }
        
        setFilteredProperties(filtered);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProperties();
  }, [location]);

  // Pagination
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

  // Generate page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="bg-accent min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-montserrat font-bold text-dark mb-2">
            Imóveis Disponíveis
          </h1>
          <p className="text-secondary">
            Encontre o imóvel ideal para você e sua família
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar with Filters */}
          <div className="col-span-1">
            <PropertySearch />
          </div>

          {/* Properties Grid */}
          <div className="col-span-1 lg:col-span-3">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array(6).fill(0).map((_, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                    <Skeleton className="w-full h-48" />
                    <div className="p-5 space-y-2">
                      <Skeleton className="h-6 w-3/4" />
                      <Skeleton className="h-4 w-1/2" />
                      <Skeleton className="h-6 w-1/3" />
                      <div className="flex space-x-4 pt-2">
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredProperties.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
                
                {/* Pagination */}
                {totalPages > 1 && (
                  <Pagination className="mt-8">
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious 
                          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                          className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                      </PaginationItem>
                      
                      {pageNumbers.map(number => (
                        <PaginationItem key={number}>
                          <PaginationLink
                            onClick={() => setCurrentPage(number)}
                            isActive={currentPage === number}
                            className="cursor-pointer"
                          >
                            {number}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                      
                      <PaginationItem>
                        <PaginationNext 
                          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                          className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                )}
              </>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h2 className="text-xl font-semibold mb-2">Nenhum imóvel encontrado</h2>
                <p className="text-secondary mb-4">
                  Não encontramos imóveis com os filtros selecionados. Tente ajustar seus critérios de busca.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
