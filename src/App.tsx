import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { GoogleReviews } from './components/GoogleReviews';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CookieConsent } from './components/CookieConsent';
import { LegalModal, type LegalDocType } from './components/LegalModal';

function App() {
  const [legalType, setLegalType] = useState<LegalDocType>(null);

  useEffect(() => {
    // Bloqueia o clique direito (menu de contexto)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Bloqueia atalhos de teclado comuns para cópia e inspeção
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && ['c', 'x', 's', 'p', 'u'].includes(e.key.toLowerCase())) ||
        e.key === 'F12'
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="bg-branco overflow-hidden selection:bg-amarelo selection:text-chumbo-escuro">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Stats />
        <Portfolio />
        <Testimonials />
        <GoogleReviews />
      </main>
      <Footer onOpenLegal={setLegalType} />
      <WhatsAppButton />
      
      <CookieConsent onOpenPrivacyPolicy={() => setLegalType('privacy')} />
      <LegalModal type={legalType} onClose={() => setLegalType(null)} />
    </div>
  );
}

export default App;
