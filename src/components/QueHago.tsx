import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export function QueHago() {
  const { t } = useLanguage();

  const areas = [
    {
      id: "01",
      title: t('quehago.a1.title'),
      desc: t('quehago.a1.desc'),
    },
    {
      id: "02",
      title: t('quehago.a2.title'),
      desc: t('quehago.a2.desc'),
    },
    {
      id: "03",
      title: t('quehago.a3.title'),
      desc: t('quehago.a3.desc'),
    },
    {
      id: "04",
      title: t('quehago.a4.title'),
      desc: t('quehago.a4.desc'),
    }
  ];

  return (
    <section id="quehago" className="bg-white text-black py-24 md:py-32">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <span className="text-sm uppercase tracking-widest font-semibold mb-3 block">{t('quehago.tag')}</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight mb-6 mt-4">
            {t('quehago.title')}
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-12 md:gap-y-20">
          {areas.map((area, index) => (
             <motion.div 
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="border-t border-gray-200 pt-8"
            >
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-gray-400 font-serif text-3xl">{area.id}.</span>
                <h3 className="text-3xl font-serif">{area.title}</h3>
              </div>
              <p className="text-gray-600 font-sans font-light leading-relaxed text-lg mb-6">
                {area.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
