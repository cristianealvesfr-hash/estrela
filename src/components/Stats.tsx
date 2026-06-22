
import { motion } from 'framer-motion';

const stats = [
  { value: "+17", label: "Anos de Mercado" },
  { value: "+500", label: "Km Pavimentados" },
  { value: "100%", label: "Frota Própria" },
  { value: "MA", label: "Sede em São Luís do Maranhão" }
];

export function Stats() {
  return (
    <section className="bg-chumbo-escuro py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-cinza-claro/10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-amarelo mb-2">
                {stat.value}
              </div>
              <div className="text-branco font-bold uppercase tracking-wider text-xs md:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
