import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Smartphone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white pt-16 pb-8 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Information */}
          <div>
            <div className="text-green-500 font-montserrat font-bold text-2xl mb-4">Imóveis Exata</div>
            <p className="text-gray-400 mb-6">
              Sua imobiliária completa em Florianópolis. Oferecemos os melhores serviços em compra, venda e locação de imóveis.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-zinc-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-600 transition duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-zinc-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-600 transition duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-zinc-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-600 transition duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-zinc-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-600 transition duration-300">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-xl mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-green-500">Início</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-green-500">Quem Somos</Link></li>
              <li><Link href="/properties?status=sale" className="text-gray-400 hover:text-green-500">Comprar</Link></li>
              <li><Link href="/properties?status=rent" className="text-gray-400 hover:text-green-500">Alugar</Link></li>
              <li><Link href="/launches" className="text-gray-400 hover:text-green-500">Lançamentos</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-green-500">Contato</Link></li>
            </ul>
          </div>
          
          {/* Property Types */}
          <div>
            <h3 className="font-montserrat font-semibold text-xl mb-6">Imóveis</h3>
            <ul className="space-y-3">
              <li><Link href="/properties?type=apartment" className="text-gray-400 hover:text-green-500">Apartamentos</Link></li>
              <li><Link href="/properties?type=house" className="text-gray-400 hover:text-green-500">Casas</Link></li>
              <li><Link href="/properties?type=commercial" className="text-gray-400 hover:text-green-500">Imóveis Comerciais</Link></li>
              <li><Link href="/properties?type=land" className="text-gray-400 hover:text-green-500">Terrenos</Link></li>
              <li><Link href="/properties?luxury=true" className="text-gray-400 hover:text-green-500">Imóveis de Luxo</Link></li>
              <li><Link href="/launches" className="text-gray-400 hover:text-green-500">Lançamentos</Link></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="font-montserrat font-semibold text-xl mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="text-green-500 mr-3 mt-1">
                  <MapPin size={18} />
                </div>
                <span className="text-gray-400">
                  Av. Beira Mar Norte, 1234, Centro<br/>
                  Florianópolis, SC - 88000-000
                </span>
              </li>
              <li className="flex items-center">
                <div className="text-green-500 mr-3">
                  <Phone size={18} />
                </div>
                <span className="text-gray-400">(48) 3333-4444</span>
              </li>
              <li className="flex items-center">
                <div className="text-green-500 mr-3">
                  <Smartphone size={18} />
                </div>
                <span className="text-gray-400">(48) 99999-8888</span>
              </li>
              <li className="flex items-center">
                <div className="text-green-500 mr-3">
                  <Mail size={18} />
                </div>
                <span className="text-gray-400">contato@imoveisexata.com.br</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Imóveis Exata. Todos os direitos reservados. CRECI J12345
            </p>
            <div className="flex space-x-4">
              <Link href="/privacy" className="text-gray-500 hover:text-green-500 text-sm">
                Política de Privacidade
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-green-500 text-sm">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
