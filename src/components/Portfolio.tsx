
import { motion } from 'framer-motion';

const projects = [
  {
    image: "/imagens/mp-ma.jpeg",
    title: "Ministério Público do Maranhão",
    status: "Concluído",
    desc: "Pavimentação asfáltica nas dependências e acessos."
  },
  {
    image: "/imagens/ceuma.jpeg",
    title: "Universidade CEUMA",
    status: "Concluído",
    desc: "Recapeamento asfáltico completo nas vias internas do campus São Luís."
  },
  {
    image: "/imagens/alphaville.jpeg",
    title: "Condomínio Alphaville Araçagy",
    status: "Concluído",
    desc: "Obras de recapeamento asfáltico de alto padrão."
  },
  {
    image: "/imagens/juvencio-matos.jpeg",
    title: "Hospital Infantil Dr. Juvêncio Matos",
    status: "Concluído",
    desc: "Recapeamento asfáltico em parceria com CAP Engenharia."
  },
  {
    image: "/imagens/marilia2.jpeg",
    title: "Condomínio Marília 2",
    status: "Em Execução",
    desc: "Pavimentação asfáltica e infraestrutura viária."
  },
  {
    image: "/imagens/original-carros.jpeg",
    title: "Original Carros",
    status: "Concluído",
    desc: "Pavimentação asfáltica do pátio para novos e seminovos."
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-branco">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amarelo font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Nosso Trabalho
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-chumbo leading-tight mb-6"
          >
            OBRAS QUE INSPIRAM CONFIANÇA
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-amarelo mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer relative overflow-hidden bg-cinza-claro"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="absolute top-4 left-4 z-20">
                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm shadow-md ${
                  project.status === 'Concluído' ? 'bg-chumbo text-branco' : 'bg-amarelo text-chumbo-escuro'
                }`}>
                  {project.status}
                </span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-chumbo-escuro via-chumbo-escuro/40 to-transparent opacity-80 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-10 h-1 bg-amarelo mb-3 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 delay-100"></div>
                <h3 className="text-xl font-bold text-branco mb-2">{project.title}</h3>
                <p className="text-cinza-claro/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
