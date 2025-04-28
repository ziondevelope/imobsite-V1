import { useState } from "react";
import { MapPin, Phone, Smartphone, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensagem enviada",
        description: "Agradecemos o seu contato. Responderemos em breve!",
      });
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-montserrat font-bold text-dark mb-6">
              Entre em Contato
            </h2>
            <p className="text-secondary mb-8">
              Estamos prontos para ajudar você a encontrar o imóvel ideal ou vender seu imóvel pelo melhor preço.
            </p>
            
            <div className="mb-6">
              <h3 className="font-montserrat font-semibold text-xl mb-4">
                Informações de Contato
              </h3>
              <div className="flex items-start mb-4">
                <div className="text-primary mr-4 mt-1">
                  <MapPin />
                </div>
                <div>
                  <p className="text-secondary">Av. Beira Mar Norte, 1234, Centro</p>
                  <p className="text-secondary">Florianópolis, SC - 88000-000</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="text-primary mr-4">
                  <Phone />
                </div>
                <p className="text-secondary">(48) 3333-4444</p>
              </div>
              <div className="flex items-center mb-4">
                <div className="text-primary mr-4">
                  <Smartphone />
                </div>
                <p className="text-secondary">(48) 99999-8888</p>
              </div>
              <div className="flex items-center">
                <div className="text-primary mr-4">
                  <Mail />
                </div>
                <p className="text-secondary">contato@imoveisexata.com.br</p>
              </div>
            </div>

            <div>
              <h3 className="font-montserrat font-semibold text-xl mb-4">
                Horário de Funcionamento
              </h3>
              <p className="text-secondary mb-2">Segunda à Sexta: 9h às 18h</p>
              <p className="text-secondary">Sábado: 9h às 13h</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-accent p-8 rounded-lg shadow-md">
              <h3 className="font-montserrat font-semibold text-xl mb-6">
                Envie uma Mensagem
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <Label htmlFor="name" className="block text-secondary font-medium mb-2">
                    Nome
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Seu telefone"
                  />
                </div>
                
                <div className="mb-4">
                  <Label htmlFor="subject" className="block text-secondary font-medium mb-2">
                    Assunto
                  </Label>
                  <Select
                    value={formData.subject}
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Selecione um assunto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="compra">Compra de Imóvel</SelectItem>
                      <SelectItem value="venda">Venda de Imóvel</SelectItem>
                      <SelectItem value="aluguel">Aluguel de Imóvel</SelectItem>
                      <SelectItem value="avaliacao">Avaliação de Imóvel</SelectItem>
                      <SelectItem value="outro">Outro Assunto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="message" className="block text-secondary font-medium mb-2">
                    Mensagem
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Digite sua mensagem aqui..."
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full font-montserrat font-medium"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
