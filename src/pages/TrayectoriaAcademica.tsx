import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

export function TrayectoriaAcademica() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-brand-cream font-sans selection:bg-brand-black selection:text-white flex flex-col">
      {/* Navigation (simplified for inner page) */}
      <nav className="fixed w-full z-50 px-6 md:px-12 py-6 bg-brand-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-white uppercase tracking-widest text-sm font-semibold hover:text-gray-300 transition-colors">
            {t('nav.back')}
          </Link>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-40 pb-20 md:pt-48 md:pb-32 bg-brand-black text-white px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight mb-6">
              {t('acad.title')}
            </h1>
            <h2 className="text-2xl md:text-3xl font-serif text-gray-300 mb-10">
              {t('acad.subtitle')}
            </h2>
            <div className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-3xl flex flex-col gap-6">
              <p>{t('acad.p1')}</p>
              <p>{t('acad.p2')}</p>
              <p>{t('acad.p3')}</p>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="flex-grow bg-white text-black py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto flex flex-col gap-32">
          
          {/* Formación Universitaria */}
          <section>
            <h3 className="text-sm uppercase tracking-widest font-semibold mb-12 text-gray-400 border-b border-gray-200 pb-4">{t('acad.uni.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-gray-100 bg-gray-50 flex items-center">
                <span className="text-2xl font-serif">{t('acad.uni.1')}</span>
              </div>
              <div className="p-8 border border-gray-100 bg-gray-50 flex items-center">
                <span className="text-2xl font-serif">{t('acad.uni.2')}</span>
              </div>
            </div>
          </section>

          {/* Áreas de Especialización */}
          <section>
            <h3 className="text-sm uppercase tracking-widest font-semibold mb-12 text-gray-400 border-b border-gray-200 pb-4">{t('acad.esp.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="p-8 border border-gray-200 hover:shadow-lg transition-shadow bg-white flex flex-col gap-4">
                  <h4 className="text-xl font-serif">{t(`acad.esp.${num}.title`)}</h4>
                  <p className="text-gray-600 font-sans font-light leading-relaxed">{t(`acad.esp.${num}.desc`)}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Instituciones */}
          <section>
            <h3 className="text-sm uppercase tracking-widest font-semibold mb-12 text-gray-400 border-b border-gray-200 pb-4">{t('acad.inst.title')}</h3>
            <div className="flex flex-wrap gap-x-12 gap-y-8 items-center justify-center md:justify-start opacity-70">
              <span className="font-serif text-xl">Universidad de Aquino Bolivia</span>
              <span className="font-serif text-xl">Organización Panamericana de la Salud (OPS)</span>
              <span className="font-serif text-xl">Stanford University</span>
              <span className="font-serif text-xl">Google Cloud</span>
              <span className="font-serif text-xl">Anthropic</span>
              <span className="font-serif text-xl">Universidade Federal do Rio Grande do Norte</span>
              <span className="font-serif text-xl">Universidade Aberta do SUS</span>
              <span className="font-serif text-xl">Escola Superior de Redes</span>
              <span className="font-serif text-xl">World Vision</span>
              <span className="font-serif text-xl">Lifewind International</span>
            </div>
          </section>

          {/* Filosofía de aprendizaje */}
          <section className="bg-gray-50 p-10 md:p-16 border-l-4 border-black">
            <h3 className="text-3xl font-serif mb-8">{t('acad.phil.title')}</h3>
            <div className="flex flex-col gap-6 text-xl font-sans font-light text-gray-700 leading-relaxed italic">
              <p>"{t('acad.phil.q1')}"</p>
              <p>"{t('acad.phil.q2')}"</p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
