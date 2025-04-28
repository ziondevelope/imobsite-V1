import { 
  Home,
  Key,
  LineChart
} from "lucide-react";
import { services } from "@/lib/data";

export default function Services() {
  // Icon mapping function
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'home':
        return <Home className="text-primary text-2xl" />;
      case 'key':
        return <Key className="text-primary text-2xl" />;
      case 'chart-line':
        return <LineChart className="text-primary text-2xl" />;
      default:
        return <Home className="text-primary text-2xl" />;
    }
  };

  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-montserrat font-bold text-dark mb-2">
            Nossos Serviços
          </h2>
          <p className="text-secondary">
            Soluções completas para seu imóvel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary bg-opacity-10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                {getIcon(service.icon)}
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-2">
                {service.title}
              </h3>
              <p className="text-secondary">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
