import { MapPin, Mail, Clock } from 'lucide-react';
import type { LegalDocType } from './LegalModal';

interface FooterProps {
  onOpenLegal: (type: LegalDocType) => void;
}

export function Footer({ onOpenLegal }: FooterProps) {
  return (
    <footer id="contato" className="bg-chumbo text-branco pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 pb-12">
          
          {/* Col 1 */}
          <div>
            <div className="bg-branco p-1 rounded-sm w-max mb-6">
              <img src="/imagens/logo.jpeg" alt="Construtora Estrela" className="h-10 w-auto mix-blend-multiply" />
            </div>
            <p className="text-cinza-claro/70 text-sm leading-relaxed mb-6">
              Desde 2009, sendo a maior referência no Nordeste, quando o assunto é locação de máquinas e pavimentação asfáltica. Excelência não se promete, se constrói.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/construtoraestrela1?igsh=NHZ0bWE2djh0OWRw" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-sm bg-branco/5 flex items-center justify-center hover:bg-amarelo hover:text-chumbo transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://wa.me/5598982999117?text=Ol%C3%A1%21%20Acessei%20o%20site%20da%20Construtora%20Estrela%20e%20gostaria%20de%20falar%20com%20um%20atendente." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-sm bg-branco/5 flex items-center justify-center hover:bg-amarelo hover:text-chumbo transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-amarelo font-bold uppercase tracking-wider mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-cinza-claro/70 hover:text-amarelo hover:translate-x-2 inline-block transition-all text-sm">Início</a></li>
              <li><a href="#servicos" className="text-cinza-claro/70 hover:text-amarelo hover:translate-x-2 inline-block transition-all text-sm">Serviços</a></li>
              <li><a href="#servicos" className="text-cinza-claro/70 hover:text-amarelo hover:translate-x-2 inline-block transition-all text-sm">Locação de Máquinas</a></li>
              <li><a href="#sobre" className="text-cinza-claro/70 hover:text-amarelo hover:translate-x-2 inline-block transition-all text-sm">Sobre Nós</a></li>
              <li><a href="#portfolio" className="text-cinza-claro/70 hover:text-amarelo hover:translate-x-2 inline-block transition-all text-sm">Nosso Trabalho</a></li>
              <li><a href="#contato" className="text-cinza-claro/70 hover:text-amarelo hover:translate-x-2 inline-block transition-all text-sm">Contato</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-amarelo font-bold uppercase tracking-wider mb-6">Contato e Horários</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <MapPin className="text-amarelo shrink-0 mt-1" size={20} />
                <div>
                  <strong className="block text-sm mb-1">Endereço</strong>
                  <span className="text-cinza-claro/70 text-sm block leading-relaxed">Av. 02 Qd 158 nº 08<br/>Jardim São Cristóvão / São Luís - MA</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5 text-amarelo shrink-0 mt-1">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
                <div>
                  <strong className="block text-sm mb-1">WhatsApp</strong>
                  <span className="text-cinza-claro/70 text-sm block">
                    (98) 9829-99117
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="text-amarelo shrink-0 mt-1" size={20} />
                <div>
                  <strong className="block text-sm mb-1">Horário de Funcionamento</strong>
                  <span className="text-cinza-claro/70 text-sm block">SEG - SEX: 7H - 18H</span>
                  <span className="text-cinza-claro/70 text-sm block">Sábado: 8H - 14H</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="text-amarelo shrink-0 mt-1" size={20} />
                <div>
                  <strong className="block text-sm mb-1">E-mail Comercial</strong>
                  <span className="text-cinza-claro/70 text-sm break-all">construtoraestrela.adm@gmail.com</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-amarelo font-bold uppercase tracking-wider mb-6">Orçamento</h4>
            <p className="text-cinza-claro/70 text-sm mb-6">
              Pronto para iniciar seu projeto de pavimentação? Fale com um de nossos engenheiros e solicite uma proposta técnica.
            </p>
            <a 
              href="https://wa.me/5598982999117?text=Ol%C3%A1%21%20Tenho%20interesse%20nos%20servi%C3%A7os%20de%20Pavimenta%C3%A7%C3%A3o%20Asf%C3%A1ltica%20%28CBUQ%2C%20AAUQ%2C%20micro%20revestimentos%2C%20tapa-buracos%20e%20loca%C3%A7%C3%A3o%20de%20m%C3%A1quinas%29%20e%20gostaria%20de%20falar%20com%20um%20engenheiro%20para%20obter%20mais%20informa%C3%A7%C3%B5es."
              target="_blank" rel="noopener noreferrer"
              className="w-full inline-block text-center bg-amarelo hover:bg-amarelo-hover text-chumbo-escuro font-bold py-3 px-6 rounded-sm transition-transform hover:-translate-y-1 uppercase tracking-wider text-sm shadow-md"
            >
              Solicitar Proposta
            </a>
          </div>

        </div>

        <div className="flex flex-col items-center text-center text-cinza-claro/50 text-sm gap-4 border-t border-cinza-claro/10 pt-8">
          <p className="leading-relaxed">
            &copy; {new Date().getFullYear()} Construtora Estrela. Todos os direitos reservados.<br />
            CNPJ: 15.217.562/0001-69
          </p>
          <div className="flex gap-4 mt-2">
            <button onClick={() => onOpenLegal('privacy')} className="hover:text-amarelo transition-colors">
              Política de Privacidade
            </button>
            <span>|</span>
            <button onClick={() => onOpenLegal('terms')} className="hover:text-amarelo transition-colors">
              Termos de Uso
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
