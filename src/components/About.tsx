import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-brand-cream text-black py-24 md:py-32 overflow-hidden">
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12 flex flex-col gap-24">
        
        {/* Quién Soy */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <div className="w-full">
            <span className="text-sm uppercase tracking-widest font-semibold mb-3 block">{t('about.tag')}</span>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight mb-8">
              {t('about.title')}
            </h2>
            <div className="flex flex-col gap-6 font-sans font-light text-lg text-gray-800 leading-relaxed mb-8">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>
          </div>
        </motion.div>

        {/* Misión Personal */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-sm uppercase tracking-widest font-semibold mb-3 block">{t('about.m.tag')}</span>
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight mb-8">
            {t('about.m.title')}
          </h2>
          <div className="flex flex-col gap-6 font-sans font-light text-lg text-gray-800 leading-relaxed">
            <p>{t('about.m.p1')}</p>
            <p>{t('about.m.p2')}</p>
            <p>{t('about.m.p3')}</p>
            <p>{t('about.m.p4')}</p>
            <p className="font-medium text-xl mt-2 text-black">{t('about.m.p5')}<br/>{t('about.m.p6')}<br/>{t('about.m.p7')}</p>
          </div>
        </motion.div>

        {/* Trayectoria */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-sm uppercase tracking-widest font-semibold mb-3 block">{t('about.t.tag')}</span>
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight mb-8">
            {t('about.t.title')}
          </h2>
          <div className="flex flex-col gap-6 font-sans font-light text-lg text-gray-800 leading-relaxed">
            <p>{t('about.t.p1')}</p>
            <p>{t('about.t.p2')}</p>
            <p className="text-2xl font-serif text-black border-l-4 border-black pl-6 py-2 my-4">
              {t('about.t.quote')}
            </p>
            <p>{t('about.t.p3')}</p>
            <p>{t('about.t.p4')}</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
