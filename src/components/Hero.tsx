import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative md:h-screen md:min-h-[700px] bg-brand-black text-white flex items-center md:overflow-hidden pt-24 pb-16 md:py-0">
      <div className="w-full max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center md:h-full">
        
        {/* Image - Left */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="order-1 md:col-span-5 relative w-full h-[40vh] md:h-full flex justify-center md:justify-start items-end"
        >
          {/* Subtle gradient to fade edges if needed */}
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-brand-black to-transparent z-10 hidden md:block" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-black to-transparent z-10 md:hidden" />
          <img 
            src="/mi-foto (1).jpg" 
            alt="Dr. Samuel Silva" 
            className="w-full h-full object-cover object-center md:object-top filter grayscale contrast-125"
            draggable="false"
          />
        </motion.div>
 
        {/* Text Content - Right */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:col-span-7 flex flex-col justify-center items-start z-20 pb-0 md:pb-0 md:pl-12 lg:pl-24"
        >
          <div className="text-xl md:text-2xl text-white font-sans leading-[1.6] flex flex-col gap-6 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif tracking-tight leading-[1.1] mb-2">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light mt-4 leading-relaxed max-w-3xl">
              {t('hero.p1')}
            </p>
          </div>
        </motion.div>
 
      </div>
    </section>
  );
}
