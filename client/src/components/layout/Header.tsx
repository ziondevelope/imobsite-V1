import { useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Phone, MapPin, Clock, Mail } from "lucide-react";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/about", label: "Quem Somos" },
  { href: "/properties?status=sale", label: "Comprar" },
  { href: "/properties?status=rent", label: "Alugar" },
  { href: "/launches", label: "Lançamentos" },
  { href: "/contact", label: "Contato" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Top Bar with Contact Info */}
      <div className="bg-zinc-800 text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-6">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>(48) 3333-4444</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>contato@imoveisexata.com.br</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Av. Beira Mar Norte, 1234, Centro - Florianópolis</span>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>Seg-Sex: 9h-18h | Sáb: 9h-13h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="block">
                <div className="text-zinc-800 font-montserrat font-bold text-2xl">Imóveis Exata</div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-zinc-800 hover:text-green-600 font-montserrat font-medium text-sm uppercase transition-colors",
                    location === link.href && "text-green-600"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-zinc-800 hover:text-green-600 focus:outline-none transition-colors"
                onClick={toggleMobileMenu}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-zinc-800 hover:text-green-600 font-montserrat font-medium text-sm uppercase transition-colors",
                      location === link.href && "text-green-600"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              
              {/* Mobile Contact Info */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex flex-col space-y-3 text-sm">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-green-600" />
                    <span>(48) 3333-4444</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-green-600" />
                    <span>contato@imoveisexata.com.br</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
