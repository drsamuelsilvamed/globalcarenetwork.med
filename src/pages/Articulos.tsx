import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export function Articulos() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-black selection:text-white flex flex-col">
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
              {t('nav.articles')}
            </h1>
            <h2 className="text-2xl md:text-3xl font-serif text-gray-300">
              Biblioteca de publicaciones y artículos académicos
            </h2>
          </motion.div>
        </div>
      </header>

      <main className="flex-grow bg-white text-black py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center py-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <p className="text-3xl font-serif text-[#1A1A1A] mb-4">Próximamente / Coming soon</p>
            <p className="text-gray-500 font-light max-w-lg mx-auto">
              Pronto compartiremos investigaciones, artículos académicos y publicaciones sobre medicina, salud global, bioética e inteligencia artificial.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
