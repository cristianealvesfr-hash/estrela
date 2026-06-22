import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CookieConsentProps {
  onOpenPrivacyPolicy: () => void;
}

export function CookieConsent({ onOpenPrivacyPolicy }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se já aceitou
    const hasConsented = localStorage.getItem('estrela_cookie_consent');
    if (!hasConsented) {
      // Pequeno delay para aparecer após o site carregar
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('estrela_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('estrela_cookie_consent', 'rejected_non_essential');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 150, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed bottom-0 left-0 w-full z-40 bg-chumbo border-t-4 border-amarelo shadow-[0_-10px_40px_rgba(0,0,0,0.3)]"
        >
          <div className="container mx-auto px-4 py-3 md:py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-branco md:w-2/3">
              <h3 className="text-sm font-bold mb-1 flex items-center gap-2">
                <span className="text-amarelo text-base">🛡️</span> Seu Consentimento (LGPD)
              </h3>
              <p className="text-xs md:text-sm text-branco/80 leading-relaxed">
                Utilizamos cookies e tecnologias semelhantes para aprimorar a sua experiência de navegação, 
                personalizar conteúdo e analisar nosso tráfego. Ao continuar navegando na plataforma corporativa 
                da Construtora Estrela, você concorda com o uso de cookies essenciais. Para mais informações 
                sobre como tratamos seus dados sob a Lei Geral de Proteção de Dados (13.709/2018), 
                consulte a nossa{' '}
                <button 
                  onClick={onOpenPrivacyPolicy}
                  className="text-amarelo hover:text-branco underline font-bold transition-colors"
                >
                  Política de Privacidade
                </button>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button
                onClick={handleReject}
                className="px-6 py-3 border border-branco/20 text-branco hover:bg-branco/10 rounded-sm font-bold text-sm tracking-wide transition-colors whitespace-nowrap"
              >
                Recusar Opcionais
              </button>
              <button
                onClick={handleAccept}
                className="px-8 py-3 bg-amarelo hover:bg-branco text-chumbo-escuro rounded-sm font-black text-sm tracking-wider uppercase transition-colors whitespace-nowrap shadow-lg"
              >
                Aceitar Todos
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
