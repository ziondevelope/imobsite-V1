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
  { href: "/admin", label: "Admin" }, // Added admin link
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Main Header - Dark as in the reference */}
      <header className="bg-zinc-900 shadow-md sticky top-0 z-50 border-b border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="block">
                <div className="text-white font-montserrat font-bold text-2xl">Imóveis Exata</div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-white hover:text-green-500 font-montserrat font-medium text-sm uppercase transition-colors",
                    location === link.href && "text-green-500"
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
                className="text-white hover:text-green-500 focus:outline-none transition-colors"
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
            <div className="md:hidden py-4 border-t border-zinc-800">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-white hover:text-green-500 font-montserrat font-medium text-sm uppercase transition-colors",
                      location === link.href && "text-green-500"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-6 pt-4 border-t border-zinc-800">
                <div className="flex flex-col space-y-3 text-sm text-gray-300">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-green-500" />
                    <span>(48) 3333-4444</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-green-500" />
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