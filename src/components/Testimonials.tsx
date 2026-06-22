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
    <section className="py-20 md:py-32 bg-chumbo-escuro relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amarelo opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amarelo font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Prova Social
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-branco leading-tight mb-6"
          >
            O QUE DIZEM NOSSOS PARCEIROS
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-amarelo mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-chumbo p-8 md:p-10 border border-branco/5 rounded-sm relative group hover:border-amarelo/30 transition-colors duration-500"
            >
              {/* Giant Quote Icon */}
              <div className="text-amarelo/10 md:text-amarelo/20 text-6xl md:text-8xl font-serif absolute top-2 left-4 md:top-4 md:left-6 pointer-events-none select-none group-hover:text-amarelo/30 transition-colors duration-500">
                "
              </div>
              
              <div className="relative z-10 mt-4 md:mt-0">
                <p className="text-branco/80 text-lg md:text-xl font-medium leading-relaxed mb-8 italic">
                  "{item.quote}"
                </p>
                <div className="border-t border-branco/10 pt-6">
                  <strong className="block text-amarelo font-bold uppercase tracking-wider text-sm mb-1">
                    {item.name}
                  </strong>
                  <span className="block text-branco/60 text-sm">
                    {item.role}
                  </span>
                  <span className="block text-branco/40 text-xs mt-1">
                    {item.company}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
