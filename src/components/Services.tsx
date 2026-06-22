import { motion } from 'framer-motion';
import { Layers, Droplet, Wrench, Truck } from 'lucide-react';

const services = [
  {
    num: "01",
    icon: <Layers size={28} className="text-chumbo-escuro" />,
    title: "CBUQ & AAUQ",
    desc: "Pavimentação asfáltica a quente e a frio com massa de alta resistência estrutural, ideal para rodovias e vias urbanas de tráfego pesado."
  },
  {
    num: "02",
    icon: <Droplet size={28} className="text-chumbo-escuro" />,
    title: "Micro Revestimentos",
    desc: "Aplicação de micro revestimento asfáltico a frio para rejuvenescimento e impermeabilização da malha viária, prolongando a vida útil."
  },
  {
    num: "03",
    icon: <Wrench size={28} className="text-chumbo-escuro" />,
    title: "Tapa Buracos",
    desc: "Manutenção preventiva e corretiva ágil para recuperação de vias danificadas, garantindo segurança e conforto ao tráfego."
  },
  {
    num: "04",
    icon: <Truck size={28} className="text-chumbo-escuro" />,
    title: "Locação de Máquinas",
    desc: "Frota própria de maquinário pesado moderno (rolos compactadores, vibroacabadoras, fresadoras) disponível para locação B2B."
  }
];

export function Services() {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-cinza-claro">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amarelo font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Nossa Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-chumbo leading-tight mb-6"
          >
            SOLUÇÕES EM PAVIMENTAÇÃO
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-amarelo mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const message = `Olá! Tenho interesse no serviço de ${service.title} e gostaria de falar com um engenheiro para obter mais informações.`;
            const whatsappUrl = `https://wa.me/5598982999117?text=${encodeURIComponent(message)}`;

            return (
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-branco p-8 lg:p-10 border border-transparent rounded-sm shadow-sm hover:shadow-xl hover:border-amarelo/30 transition-all duration-500 group relative overflow-hidden flex flex-col h-full cursor-pointer"
              >
                {/* Giant background number */}
                <div className="absolute -right-4 -top-6 text-8xl lg:text-9xl font-black text-chumbo/[0.03] group-hover:text-amarelo/10 transition-colors duration-500 pointer-events-none select-none">
                  {service.num}
                </div>
                
                {/* Icon Block */}
                <div className="w-14 h-14 bg-amarelo flex items-center justify-center mb-8 rounded-sm group-hover:-translate-y-2 transition-transform duration-500 shadow-md relative z-10">
                  {service.icon}
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-chumbo mb-4 tracking-wide group-hover:text-amarelo transition-colors duration-300 relative z-10">
                  {service.title}
                </h3>
                
                <p className="text-chumbo/70 leading-relaxed text-sm lg:text-base font-medium mb-8 relative z-10">
                  {service.desc}
                </p>
                
                <div className="mt-auto relative z-10 flex items-center gap-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  <span className="text-amarelo text-xs font-bold uppercase tracking-widest">
                    Saiba Mais
                  </span>
                  <span className="text-amarelo text-lg leading-none">→</span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
