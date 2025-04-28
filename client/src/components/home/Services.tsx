import { 
  Home,
  Key,
  LineChart,
  Building,
  FileSearch,
  UserCheck
} from "lucide-react";
import { services } from "@/lib/data";

export default function Services() {
  // Icon mapping function
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'home':
        return <Home className="text-green-600 text-2xl" />;
      case 'key':
        return <Key className="text-green-600 text-2xl" />;
      case 'chart-line':
        return <LineChart className="text-green-600 text-2xl" />;
      case 'building':
        return <Building className="text-green-600 text-2xl" />;
      case 'file-search':
        return <FileSearch className="text-green-600 text-2xl" />;
      case 'user-check':
        return <UserCheck className="text-green-600 text-2xl" />;
      default:
        return <Home className="text-green-600 text-2xl" />;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-montserrat font-bold text-zinc-800 mb-2">
            Nossos Serviços
          </h2>
          <p className="text-zinc-600 max-w-xl mx-auto">
            Oferecemos soluções completas para compra, venda e administração de imóveis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow text-center group">
              <div className="bg-green-50 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                <div className="text-green-600 group-hover:text-white transition-colors">
                  {getIcon(service.icon)}
                </div>
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-3 text-zinc-800">
                {service.title}
              </h3>
              <p className="text-zinc-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
