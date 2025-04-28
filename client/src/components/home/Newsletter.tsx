import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Erro",
        description: "Por favor, digite um e-mail válido.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Inscrição realizada",
        description: "Obrigado por assinar nossa newsletter!",
      });
      setEmail("");
    }, 1000);
  };

  return (
    <section className="py-12 bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-montserrat font-bold text-white mb-2">
              Assine Nossa Newsletter
            </h2>
            <p className="text-white text-opacity-80">
              Receba as novidades e melhores ofertas de imóveis diretamente no seu e-mail
            </p>
          </div>
          <div className="w-full md:w-auto">
            <form className="flex flex-col sm:flex-row" onSubmit={handleSubmit}>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="w-full sm:w-64 px-4 py-3 rounded-r-none bg-white text-dark"
                disabled={isSubmitting}
              />
              <Button
                type="submit"
                variant="secondary"
                className="mt-2 sm:mt-0 bg-dark hover:bg-opacity-90 text-white font-montserrat font-medium px-6 py-3 rounded-l-none"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processando..." : "Assinar"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
