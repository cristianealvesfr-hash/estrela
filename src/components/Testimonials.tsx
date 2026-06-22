import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "A Construtora Estrela entregou o projeto de pavimentação do nosso centro logístico antes do prazo acordado. O rigor técnico e a qualidade da massa asfáltica são inquestionáveis. Uma verdadeira parceira de negócios.",
    name: "Eng. Carlos Mendes",
    role: "Diretor de Infraestrutura Logística",
    company: "Grupo M&M Logística"
  },
  {
    quote: "Ter uma frota própria fez toda a diferença na nossa obra. Não tivemos atrasos por falta de maquinário, e a equipe técnica da Estrela demonstrou altíssimo nível de competência na execução do CBUQ.",
    name: "Roberto Almeida",
    role: "Gestor de Obras Públicas",
    company: "Prefeitura Municipal"
  },
  {
    quote: "Excelente atendimento corporativo. Do orçamento transparente à execução impecável. A durabilidade do asfalto aplicado nas vias principais do condomínio superou nossas expectativas de engenharia.",
    name: "Dra. Helena Vasconcelos",
    role: "Síndica Profissional e Engenheira Civil",
    company: "Condomínio Alphaville Maranhão"
  }
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-chumbo-escuro relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amarelo opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amarelo font-bold tracking-widest uppercase text-xs mb-3 block"
          >
            Prova Social
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-black text-branco leading-tight mb-4"
          >
            O QUE DIZEM NOSSOS PARCEIROS
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 bg-amarelo mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-chumbo p-6 md:p-8 border border-branco/5 rounded-sm relative group hover:border-amarelo/30 transition-colors duration-500"
            >
              {/* Small quote accent */}
              <span className="text-amarelo text-2xl font-serif leading-none block mb-3">"</span>
              
              <p className="text-branco/80 text-sm md:text-base font-medium leading-relaxed mb-6 italic">
                {item.quote}
              </p>
              <div className="border-t border-branco/10 pt-4">
                <strong className="block text-amarelo font-bold uppercase tracking-wider text-xs mb-1">
                  {item.name}
                </strong>
                <span className="block text-branco/60 text-xs">
                  {item.role}
                </span>
                <span className="block text-branco/40 text-xs mt-1">
                  {item.company}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
