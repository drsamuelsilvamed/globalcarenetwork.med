import fs from 'fs';

// Rewrite Hero.tsx without the photo
const heroContent = `import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative h-screen min-h-[700px] bg-brand-black text-white flex items-center overflow-hidden pt-32 md:pt-0">
      <div className="w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col justify-center items-center text-center h-full">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center items-center z-20 pb-16 md:pb-0"
        >
          <div className="text-xl md:text-2xl text-white font-sans leading-[1.6] flex flex-col items-center gap-6 max-w-4xl">
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
`;
fs.writeFileSync('src/components/Hero.tsx', heroContent);
