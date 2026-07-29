import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export function FilosofiaVision() {
  const { t } = useLanguage();

  return (
    <section id="filosofia" className="bg-white text-black py-24 md:py-32">
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12 flex flex-col gap-24">
        
        {/* Filosofía */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-sm uppercase tracking-widest font-semibold mb-3 block">{t('filosofia.tag')}</span>
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight mb-8">
            {t('filosofia.title')}
          </h2>
          <div className="flex flex-col gap-6 font-sans font-light text-lg text-gray-800 leading-relaxed">
            <p>{t('filosofia.p1')}</p>
            <ul className="text-2xl font-serif text-black space-y-2 my-4">
              <li>{t('filosofia.l1')}</li>
              <li>{t('filosofia.l2')}</li>
              <li>{t('filosofia.l3')}</li>
              <li>{t('filosofia.l4')}</li>
            </ul>
            <p>{t('filosofia.p2')}<br/>
            {t('filosofia.p3')}<br/>
            {t('filosofia.p4')}</p>
            <p className="font-medium">{t('filosofia.p5')}</p>
          </div>
        </motion.div>

        {/* Visión */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-sm uppercase tracking-widest font-semibold mb-3 block">{t('vision.tag')}</span>
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight mb-8">
            {t('vision.title')}
          </h2>
          <div className="flex flex-col gap-6 font-sans font-light text-lg text-gray-800 leading-relaxed border-l-4 border-black pl-6 py-2">
            <p>{t('vision.p1')}</p>
            <p>{t('vision.p2')}</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
