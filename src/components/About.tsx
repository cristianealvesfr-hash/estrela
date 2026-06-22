
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-branco">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-amarelo font-bold tracking-widest uppercase text-sm mb-4 block">
              Tradição e Peso
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-chumbo leading-tight mb-4">
              HÁ MAIS DE 17 ANOS CONSTRUINDO CONFIANÇA.
            </h2>
            <h3 className="text-xl md:text-2xl font-medium text-chumbo/70 mb-8 leading-snug">
              Como referência no Nordeste quando o assunto é locação de máquinas Pesadas e Pavimentação Asfáltica.
            </h3>
            <div className="w-20 h-1 bg-amarelo mb-8"></div>
            <p className="text-lg text-chumbo/80 leading-relaxed mb-6">
              A Construtora Estrela foi fundada em 2009 por José Bastos Lima Neto, popularmente conhecido como "Barata Neto". Desde então sua especialidade é Pavimentação Asfáltica.
            </p>
            <p className="text-lg text-chumbo/80 leading-relaxed mb-6 font-bold">
              Hoje é a referência do nordeste quando o assunto é locação de máquinas Pesadas e Pavimentação Asfáltica.
            </p>
            <p className="text-lg text-chumbo/80 leading-relaxed font-medium mb-6">
              Hoje, sob nova Administração, a Construtora Estrela visa voos ainda maiores e busca o destaque contínuo no mercado através da excelência nos serviços prestados. Um dos nossos grandes diferenciais é que todas as máquinas são próprias, o que nos permite transmitir maior segurança, agilidade e credibilidade na execução de cada obra. Utilizamos equipamentos modernos e de ponta para a realização de grandes projetos.
            </p>
            <div className="border-l-4 border-amarelo pl-6 mt-10 py-2">
              <p className="text-2xl md:text-3xl text-chumbo font-black italic tracking-wide">
                "Excelência não se promete, se constrói."
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative w-full max-w-md mx-auto lg:max-w-none flex flex-col gap-4">
              <img 
                src="/imagens/pavimentação%20asfaltica%201%20(1).png" 
                alt="Obras de Pavimentação" 
                className="w-full h-auto object-cover shadow-xl rounded-sm hover:scale-[1.01] transition-transform duration-500"
              />
              <img 
                src="/imagens/pavimentação%20asfaltica%201%20(2).png" 
                alt="Maquinário Pesado da Empresa" 
                className="w-full h-auto object-cover shadow-xl rounded-sm hover:scale-[1.01] transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-cinza-claro -z-10 rounded-sm"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-amarelo -z-10 rounded-sm"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
