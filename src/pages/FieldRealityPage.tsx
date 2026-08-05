import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { GCNNavigation } from '../components/GCNNavigation';
import { GCNFooter } from '../components/GCNFooter';

export function FieldRealityPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#48C3B4] selection:text-white flex flex-col">
      <GCNNavigation />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 bg-[#1A1A1A] text-white px-6 md:px-12 relative overflow-hidden flex items-center justify-center min-h-[50vh]">
        <div 
          className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
          style={{ 
            backgroundImage: "url('/world-map.svg')", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat',
            filter: 'invert(1) brightness(2)'
          }}
        ></div>
        <div className="w-full max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#48C3B4] uppercase tracking-widest text-xs font-semibold mb-4 block">
              {t('gcn.reality.page.subtitle')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
              {t('gcn.reality.page.title')}
            </h1>
            <p className="text-lg md:text-xl font-light text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {t('gcn.reality.page.desc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* DETAILED CHALLENGES */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="w-full max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#48C3B4] uppercase tracking-widest text-xs font-semibold mb-2 block">
              {t('gcn.reality.page.subtitle')}
            </span>
            <h3 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] mb-4">
              {t('gcn.challenges.title')}
            </h3>
            <p className="text-gray-500 font-light text-base md:text-lg">
              {t('gcn.challenges.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <motion.div 
                key={num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: num * 0.05 }}
                className="bg-[#FDFBF7] p-8 border border-gray-150 rounded-sm shadow-xs hover:shadow-md hover:border-[#48C3B4]/30 transition-all duration-300 flex flex-col gap-3"
              >
                <h4 className="text-lg font-serif font-semibold text-[#1A1A1A]">
                  {t(`gcn.challenges.c${num}.title`)}
                </h4>
                <p className="text-gray-600 font-light text-sm md:text-base leading-relaxed">
                  {t(`gcn.challenges.c${num}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GCNFooter />
    </main>
  );
}
