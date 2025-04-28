import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Bed, Bath, MoveHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Property } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

interface PropertyDetailProps {
  property: Property;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  const { toast } = useToast();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Format price
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(property.price);

  const nextImage = () => {
    setActiveImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Default message if none provided
    const message = contactForm.message || `Olá, estou interessado no imóvel ${property.title} (ID: ${property.id}).`;
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensagem enviada",
        description: "Um corretor entrará em contato com você em breve.",
      });
      
      // Reset form
      setContactForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Property Details */}
        <div className="lg:col-span-2">
          {/* Image Gallery */}
          <div className="relative rounded-lg overflow-hidden mb-6 h-[400px]">
            <img
              src={property.images[activeImageIndex]}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            
            {property.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
                
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {property.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`w-3 h-3 rounded-full ${index === activeImageIndex ? 'bg-primary' : 'bg-white bg-opacity-50'}`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
            
            <div className="absolute top-4 left-4">
              <Badge className={`text-white text-xs font-semibold px-3 py-1 rounded-full ${property.status === 'sale' ? 'bg-primary' : 'bg-blue-600'}`}>
                {property.status === 'sale' ? 'Venda' : 'Aluguel'}
              </Badge>
            </div>
          </div>
          
          {/* Property Information */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center justify-between mb-4">
              <h1 className="font-montserrat font-bold text-3xl text-dark">{property.title}</h1>
              <p className="text-primary font-montserrat font-bold text-2xl">
                {property.status === 'rent' ? `${formattedPrice}/mês` : formattedPrice}
              </p>
            </div>
            
            <p className="text-secondary mb-4">{property.address}, {property.neighborhood}, {property.city}</p>
            
            <div className="flex flex-wrap gap-6 mb-6">
              {property.bedrooms > 0 && (
                <div className="flex items-center">
                  <Bed className="mr-2 h-5 w-5 text-primary" />
                  <span className="text-secondary">
                    {property.bedrooms} {property.bedrooms === 1 ? 'Quarto' : 'Quartos'}
                  </span>
                </div>
              )}
              
              {property.bathrooms > 0 && (
                <div className="flex items-center">
                  <Bath className="mr-2 h-5 w-5 text-primary" />
                  <span className="text-secondary">
                    {property.bathrooms} {property.bathrooms === 1 ? 'Banheiro' : 'Banheiros'}
                  </span>
                </div>
              )}
              
              <div className="flex items-center">
                <MoveHorizontal className="mr-2 h-5 w-5 text-primary" />
                <span className="text-secondary">{property.area}m²</span>
              </div>
            </div>
            
            <div>
              <h2 className="font-montserrat font-semibold text-xl mb-3">Descrição</h2>
              <p className="text-secondary">
                {property.description}
              </p>
            </div>
          </div>
          
          {/* Property Features */}
          <div className="mb-8">
            <h2 className="font-montserrat font-semibold text-xl mb-4">Características</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4">
                  <p className="text-secondary">Tipo: {property.type === 'house' ? 'Casa' : property.type === 'apartment' ? 'Apartamento' : property.type === 'commercial' ? 'Comercial' : 'Terreno'}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <p className="text-secondary">Status: {property.status === 'sale' ? 'Venda' : 'Aluguel'}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <p className="text-secondary">Cidade: {property.city}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <p className="text-secondary">Bairro: {property.neighborhood}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="lg:col-span-1">
          <div className="bg-accent p-6 rounded-lg shadow-md">
            <h3 className="font-montserrat font-semibold text-xl mb-4">
              Interessado neste imóvel?
            </h3>
            <p className="text-secondary mb-4">
              Preencha o formulário abaixo e um de nossos corretores entrará em contato.
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Label htmlFor="name" className="block text-secondary font-medium mb-2">
                  Nome
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={contactForm.name}
                  onChange={handleInputChange}
                  placeholder="Seu nome completo"
                  required
                />
              </div>
              
              <div className="mb-4">
                <Label htmlFor="email" className="block text-secondary font-medium mb-2">
                  E-mail
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleInputChange}
                  placeholder="Seu e-mail"
                  required
                />
              </div>
              
              <div className="mb-4">
                <Label htmlFor="phone" className="block text-secondary font-medium mb-2">
                  Telefone
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={contactForm.phone}
                  onChange={handleInputChange}
                  placeholder="Seu telefone"
                  required
                />
              </div>
              
              <div className="mb-6">
                <Label htmlFor="message" className="block text-secondary font-medium mb-2">
                  Mensagem
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder={`Olá, estou interessado no imóvel ${property.title}.`}
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full font-montserrat font-medium"
              >
                {isSubmitting ? "Enviando..." : "Solicitar Informações"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
