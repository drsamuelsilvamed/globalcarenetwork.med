import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Instagram } from '../components/Instagram';

export function SobreMi() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-brand-cream font-sans selection:bg-brand-black selection:text-white flex flex-col">
      <Navigation />
      
      {/* Header */}
      <header className="pt-40 pb-20 md:pt-48 md:pb-32 bg-brand-black text-white px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl font-serif tracking-tight mb-6">
              {t('nav.about')}
            </h1>
            <h2 className="text-2xl md:text-3xl font-serif text-gray-300">
              {t('nav.subtitle')}
            </h2>
          </motion.div>
        </div>
      </header>

      <main className="flex-grow bg-brand-cream text-black py-24 px-6 md:px-12">
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-24">
          
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

          {/* Filosofía y Visión */}
          <div className="border-t border-gray-200 pt-24 flex flex-col gap-24">
            
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

        </div>
      </main>

      <Instagram />
      <Footer />
    </div>
  );
}
