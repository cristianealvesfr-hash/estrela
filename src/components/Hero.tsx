
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/imagens/mp-ma.jpeg" 
          alt="Pavimentação Asfáltica Maranhão" 
          className="w-full h-full object-cover brightness-110 contrast-110"
        />
        {/* Gradiente protegendo apenas a parte do texto (esquerda/topo) e deixando o rapaz no asfalto totalmente visível na direita */}
        <div className="absolute inset-0 bg-gradient-to-r from-chumbo-escuro/95 via-chumbo-escuro/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-chumbo-escuro/70 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-20">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-4"
          >
             <span className="text-amarelo font-bold tracking-widest uppercase text-sm md:text-base drop-shadow-md">
               + DE 17 anos de tradição
             </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-2xl md:text-3xl lg:text-4xl text-branco leading-relaxed mb-6 drop-shadow-xl max-w-3xl font-light"
          >
            Excelência em <span className="font-black text-amarelo text-shadow-sm tracking-wide">Pavimentação Asfáltica</span> e <strong className="font-black text-branco tracking-wide">Maquinário Pesado</strong> de Alta Performance para grandes empreendimentos.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base md:text-lg text-branco/90 font-medium mb-10 max-w-2xl drop-shadow-lg leading-relaxed"
          >
            A <strong className="text-amarelo font-bold">maior referência do nordeste</strong> quando o assunto é <strong className="text-amarelo font-bold">locação de máquinas Pesadas e Pavimentação Asfáltica</strong>.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#servicos" 
              className="bg-amarelo hover:bg-amarelo-hover text-chumbo-escuro font-bold py-4 px-8 rounded-sm transition-all text-center uppercase tracking-wider hover:-translate-y-1 shadow-lg"
            >
              Nossos Serviços
            </a>
            <a 
              href="https://wa.me/5598982999117?text=Ol%C3%A1%21%20Tenho%20interesse%20nos%20servi%C3%A7os%20de%20Pavimenta%C3%A7%C3%A3o%20Asf%C3%A1ltica%20%28CBUQ%2C%20AAUQ%2C%20micro%20revestimentos%2C%20tapa-buracos%20e%20loca%C3%A7%C3%A3o%20de%20m%C3%A1quinas%29%20e%20gostaria%20de%20falar%20com%20um%20engenheiro%20para%20obter%20mais%20informa%C3%A7%C3%B5es."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-branco text-branco hover:bg-branco hover:text-chumbo-escuro font-bold py-4 px-8 rounded-sm transition-all text-center uppercase tracking-wider shadow-lg"
            >
              Fale com um Engenheiro
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
