export function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/5598982999117?text=Ol%C3%A1%21%20Acessei%20o%20site%20da%20Construtora%20Estrela%20e%20gostaria%20de%20falar%20com%20um%20atendente.";
  const instagramUrl = "https://www.instagram.com/construtoraestrela1?igsh=NHZ0bWE2djh0OWRw";

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 origin-bottom-right">
      {/* Instagram Button */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:scale-110 transition-transform duration-300 animate-ring"
        aria-label="Siga-nos no Instagram"
      >
        <img 
          src="/imagens/Instagram%20Contrutora%20estrela.png" 
          alt="Instagram" 
          className="w-12 md:w-14 h-auto drop-shadow-2xl"
        />
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:scale-110 transition-transform duration-300 animate-ring"
        aria-label="Fale conosco no WhatsApp"
      >
        <img 
          src="/imagens/whatsapp%20construtora%20estrela.png" 
          alt="WhatsApp" 
          className="w-12 md:w-14 h-auto drop-shadow-2xl"
        />
      </a>
    </div>
  );
}
