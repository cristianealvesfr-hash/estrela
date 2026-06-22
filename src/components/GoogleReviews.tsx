import { motion } from 'framer-motion';

export function GoogleReviews() {
  const googleLink = "https://share.google/AvbiixIDbxjV5sCKO";

  return (
    <section className="py-20 md:py-24 bg-branco border-y border-cinza-claro">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-cinza-claro rounded-sm p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 shadow-inner relative overflow-hidden">
          
          {/* Decorative Google Colors Line */}
          <div className="absolute top-0 left-0 w-full h-1 flex">
            <div className="h-full bg-[#4285F4] flex-1"></div>
            <div className="h-full bg-[#EA4335] flex-1"></div>
            <div className="h-full bg-[#FBBC05] flex-1"></div>
            <div className="h-full bg-[#34A853] flex-1"></div>
          </div>

          <div className="md:w-1/2 relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
              </svg>
              <h3 className="text-2xl md:text-3xl font-black text-chumbo uppercase tracking-wide">
                Avaliações do Google
              </h3>
            </div>
            
            <p className="text-chumbo/70 text-lg leading-relaxed mb-6 font-medium">
              Nossa reputação é construída em cima de obras sólidas e relacionamentos transparentes. 
              Veja o que nossos clientes corporativos têm a dizer sobre a excelência da Construtora Estrela.
            </p>

            <div className="flex items-center gap-1 mb-8 text-amarelo">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
              <span className="text-chumbo font-bold ml-2">5.0 / 5.0</span>
            </div>
          </div>

          <div className="md:w-1/2 relative z-10 flex justify-center md:justify-end">
            <motion.a 
              href={googleLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-chumbo hover:bg-amarelo text-branco hover:text-chumbo-escuro font-black py-4 px-10 rounded-sm text-lg uppercase tracking-wider transition-colors shadow-xl flex items-center gap-3 text-center"
            >
              Ver Avaliações no Google
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
