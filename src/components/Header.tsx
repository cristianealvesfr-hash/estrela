import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'SERVIÇOS', href: '#servicos' },
    { name: 'LOCAÇÃO DE MÁQUINAS', href: '#servicos' },
    { name: 'SOBRE NÓS', href: '#sobre' },
    { name: 'NOSSO TRABALHO', href: '#portfolio' },
    { name: 'CONTATO', href: '#contato' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-branco/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="bg-branco p-1 rounded-sm">
            <img src="/imagens/logo.jpeg" alt="Construtora Estrela" className="h-14 lg:h-20 w-auto object-contain mix-blend-multiply" />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-bold text-[14px] xl:text-[16px] tracking-wide transition-colors ${
                isScrolled ? 'text-chumbo hover:text-amarelo' : 'text-branco hover:text-amarelo'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden xl:block">
          <a 
            href="https://wa.me/5598982999117?text=Ol%C3%A1%21%20Tenho%20interesse%20nos%20servi%C3%A7os%20de%20Pavimenta%C3%A7%C3%A3o%20Asf%C3%A1ltica%20%28CBUQ%2C%20AAUQ%2C%20micro%20revestimentos%2C%20tapa-buracos%20e%20loca%C3%A7%C3%A3o%20de%20m%C3%A1quinas%29%20e%20gostaria%20de%20falar%20com%20um%20engenheiro%20para%20obter%20mais%20informa%C3%A7%C3%B5es."
            target="_blank" rel="noopener noreferrer"
            className="bg-amarelo hover:bg-amarelo-hover text-chumbo-escuro font-bold py-3 px-6 rounded-sm transition-transform hover:-translate-y-1 shadow-md inline-block uppercase text-sm tracking-wider"
          >
            Solicitar Orçamento
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden p-2 ${isScrolled ? 'text-chumbo' : 'text-branco bg-chumbo/50 rounded-sm'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-branco shadow-lg py-5 px-4 flex flex-col gap-4 lg:hidden"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-chumbo font-bold text-lg border-b border-cinza-claro pb-2"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5598982999117?text=Ol%C3%A1%21%20Tenho%20interesse%20nos%20servi%C3%A7os%20de%20Pavimenta%C3%A7%C3%A3o%20Asf%C3%A1ltica%20%28CBUQ%2C%20AAUQ%2C%20micro%20revestimentos%2C%20tapa-buracos%20e%20loca%C3%A7%C3%A3o%20de%20m%C3%A1quinas%29%20e%20gostaria%20de%20falar%20com%20um%20engenheiro%20para%20obter%20mais%20informa%C3%A7%C3%B5es."
            target="_blank" rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-amarelo text-chumbo-escuro font-bold py-4 px-6 rounded-sm text-center uppercase tracking-wider mt-2"
          >
            Solicitar Orçamento
          </a>
        </motion.div>
      )}
    </header>
  );
}
