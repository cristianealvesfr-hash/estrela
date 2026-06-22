import { motion, AnimatePresence } from 'framer-motion';

export type LegalDocType = 'privacy' | 'terms' | null;

interface LegalModalProps {
  type: LegalDocType;
  onClose: () => void;
}

export function LegalModal({ type, onClose }: LegalModalProps) {
  if (!type) return null;

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Política de Privacidade (LGPD)' : 'Termos de Uso do Site';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
        {/* Overlay Dark */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-chumbo-escuro/80 backdrop-blur-sm"
        ></motion.div>

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-branco w-full max-w-4xl max-h-full rounded-sm shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="bg-chumbo px-6 py-4 flex justify-between items-center border-b-4 border-amarelo">
            <h2 className="text-xl md:text-2xl font-bold text-branco uppercase tracking-wide">
              {title}
            </h2>
            <button 
              onClick={onClose}
              className="text-branco hover:text-amarelo transition-colors"
              aria-label="Fechar janela"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 md:p-8 overflow-y-auto text-chumbo/80 leading-relaxed font-inter space-y-6">
            <div className="text-sm font-bold text-amarelo bg-chumbo/5 inline-block px-3 py-1 rounded-sm mb-4">
              Última Atualização: Junho de 2026
            </div>

            {isPrivacy ? (
              <>
                <p>A <strong>Construtora Estrela</strong> leva a sua privacidade a sério. Esta Política de Privacidade descreve de forma transparente como coletamos, armazenamos, utilizamos e protegemos as informações pessoais de nossos clientes, parceiros e visitantes do site, em estrita conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong>.</p>
                
                <h3 className="text-lg font-bold text-chumbo mt-8 mb-2">1. Coleta de Dados Pessoais</h3>
                <p>Coletamos informações apenas quando necessário para a prestação de nossos serviços corporativos (B2B) ou para estabelecer comunicação comercial. Isso inclui:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Dados de Contato:</strong> Nome, telefone corporativo (WhatsApp) e empresa, fornecidos voluntariamente por você ao clicar em nossos botões de ação ou links de contato.</li>
                  <li><strong>Dados de Navegação (Cookies Essenciais):</strong> Informações automáticas de navegação e endereço de IP para manter a segurança do servidor e analisar métricas gerais de visitação do site.</li>
                </ul>

                <h3 className="text-lg font-bold text-chumbo mt-8 mb-2">2. Uso e Finalidade dos Dados</h3>
                <p>A base legal para o tratamento dos seus dados é o seu <strong>Consentimento Livre e Esclarecido</strong> ou o <strong>Legítimo Interesse Comercial</strong> para a execução de contratos. Seus dados são utilizados exclusivamente para:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Atender solicitações de orçamentos sobre pavimentação asfáltica e locação de maquinário pesado.</li>
                  <li>Estabelecer comunicação técnica e comercial com nossos engenheiros e equipe de atendimento.</li>
                  <li>Melhorar continuamente a experiência do usuário em nossa plataforma.</li>
                </ul>

                <h3 className="text-lg font-bold text-chumbo mt-8 mb-2">3. Proteção e Sigilo</h3>
                <p>Nenhuma informação pessoal ou contato B2B coletado será vendido, alugado ou repassado a terceiros sem relação direta com os serviços executados pela Construtora Estrela. Utilizamos criptografia e protocolos rígidos de infraestrutura web para garantir o total sigilo das negociações.</p>

                <h3 className="text-lg font-bold text-chumbo mt-8 mb-2">4. Direitos do Titular (LGPD)</h3>
                <p>Você tem o direito de, a qualquer momento, solicitar acesso aos seus dados, solicitar correções ou exigir a exclusão completa das nossas bases de comunicação. Basta entrar em contato com nossa equipe através dos canais oficiais listados no site.</p>
              </>
            ) : (
              <>
                <p>Os presentes Termos de Uso regulam o acesso e a utilização do site institucional da <strong>Construtora Estrela</strong>. Ao acessar e navegar em nossa plataforma, você declara ter lido, compreendido e concordado expressamente com todas as condições abaixo descritas.</p>

                <h3 className="text-lg font-bold text-chumbo mt-8 mb-2">1. Propriedade Intelectual e Direitos Autorais</h3>
                <p>Todo o conteúdo deste site é de propriedade exclusiva e intransferível da Construtora Estrela. Estão protegidos pelas leis de propriedade intelectual (Lei nº 9.610/98):</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Textos, códigos-fonte, identidade visual, logomarcas e diagramação.</li>
                  <li><strong>Acervo Fotográfico:</strong> É terminantemente proibida a cópia, download manual, extração automatizada, distribuição ou uso para fins comerciais ou portfólio de terceiros de qualquer imagem de obras, maquinários e instalações presentes neste site. A infração acarretará em medidas legais cabíveis.</li>
                </ul>

                <h3 className="text-lg font-bold text-chumbo mt-8 mb-2">2. Uso Permitido do Site</h3>
                <p>Este site foi concebido para fornecer informações sobre nossos serviços de infraestrutura e facilitar o contato B2B corporativo. Você concorda em:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Não utilizar o site de maneira que possa danificar, sobrecarregar ou prejudicar nossos servidores (ex: ataques DDoS).</li>
                  <li>Não tentar burlar as travas de segurança do site, como os bloqueios de clique-direito, scripts anti-cópia, e outras proteções de software instaladas.</li>
                  <li>Utilizar os canais de comunicação (ex: Botões do WhatsApp) de boa-fé, apenas para interesses comerciais ou parcerias legítimas.</li>
                </ul>

                <h3 className="text-lg font-bold text-chumbo mt-8 mb-2">3. Isenção de Responsabilidades</h3>
                <p>A Construtora Estrela envida seus melhores esforços para manter a disponibilidade e precisão das informações apresentadas. Contudo, não nos responsabilizamos por indisponibilidades temporárias derivadas de manutenção ou provedores de infraestrutura.</p>

                <h3 className="text-lg font-bold text-chumbo mt-8 mb-2">4. Foro e Legislação</h3>
                <p>Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de São Luís, Estado do Maranhão, para dirimir quaisquer dúvidas oriundas deste documento.</p>
              </>
            )}
          </div>

          {/* Footer of Modal */}
          <div className="bg-cinza-claro px-6 py-4 border-t border-chumbo/10 flex justify-end">
            <button 
              onClick={onClose}
              className="px-6 py-2 bg-chumbo text-branco font-bold uppercase tracking-wider text-sm rounded-sm hover:bg-amarelo hover:text-chumbo transition-colors"
            >
              Compreendido
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
