import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { GCNNavigation } from '../components/GCNNavigation';
import { Link } from 'react-router-dom';

export function SobreMi() {
  const { t } = useLanguage();

  const interests = [
    t('gcn.founder.i1'),
    t('gcn.founder.i2'),
    t('gcn.founder.i3'),
    t('gcn.founder.i4'),
    t('gcn.founder.i5'),
    t('gcn.founder.i6'),
    t('gcn.founder.i7'),
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#48C3B4] selection:text-white flex flex-col">
      <GCNNavigation />
      
      {/* Header */}
      <header className="pt-40 pb-20 md:pt-48 md:pb-32 bg-[#1A1A1A] text-white px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[#48C3B4] uppercase tracking-widest text-xs font-semibold mb-2 block">
              {t('gcn.founder.title')}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight mb-4">
              {t('gcn.founder.name')}
            </h1>
            <h2 className="text-lg md:text-xl font-sans text-gray-300 font-light">
              {t('gcn.founder.role')}
            </h2>
            <div className="text-xs md:text-sm font-sans text-gray-400 mt-2 font-medium tracking-wide border-t border-white/10 pt-2 inline-block">
              {t('gcn.founder.tagline')}
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content (Balanced Two-Column Composition) */}
      <main className="flex-grow bg-[#FDFBF7] text-black py-16 px-6 md:px-12">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Professional Portrait */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-[320px] shrink-0 flex justify-center md:justify-start"
          >
            <div className="relative p-2 bg-white border border-gray-150 shadow-sm max-w-[320px]">
              <img 
                src="/mi-foto (1).png" 
                alt="Dr. Samuel Silva" 
                className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Professional Biography & Why GCN Exists */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-grow flex flex-col gap-10"
          >
            {/* Sobre el Director Médico */}
            <div>
              <h3 className="text-xs uppercase tracking-widest font-semibold text-gray-400 mb-4 pb-2 border-b border-gray-100">
                {t('gcn.founder.about')}
              </h3>
              <p className="font-sans font-light text-base md:text-lg text-gray-800 leading-relaxed">
                {t('gcn.founder.bio')}
              </p>
            </div>

            {/* Why Global Care Network Exists */}
            <div>
              <h3 className="text-xs uppercase tracking-widest font-semibold text-[#48C3B4] mb-4 pb-2 border-b border-gray-100">
                {t('gcn.founder.why.title')}
              </h3>
              <div className="font-sans font-light text-base md:text-lg text-gray-800 leading-relaxed flex flex-col gap-4">
                <p>{t('gcn.founder.why.p1')}</p>
                <p>{t('gcn.founder.why.p2')}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* AREAS OF INTEREST (Visual Tags / Chips) */}
        <section className="w-full max-w-5xl mx-auto mt-20 pt-10 border-t border-gray-200">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xs uppercase tracking-widest font-semibold text-gray-400 mb-6 text-center md:text-left">
              {t('gcn.founder.interests')}
            </h3>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {interests.map((interest, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-2 bg-white border border-gray-200 text-gray-700 font-sans text-sm font-light hover:border-[#48C3B4] hover:text-[#48C3B4] transition-all duration-300 shadow-xs"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Institutional Statement Section */}
        <section className="w-full max-w-4xl mx-auto mt-24 py-12 px-6 bg-[#1A1A1A] text-white text-center rounded-sm">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#48C3B4] mb-3">Filosofía de Trabajo</p>
          <p className="text-xl md:text-2xl font-serif font-light leading-relaxed italic text-gray-200">
            "Comenzar con humildad. Construir con excelencia. Crecer con credibilidad."
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#111111] text-white py-12 px-6 md:px-12 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-8">
          <div className="flex flex-col leading-[1.1] font-sans font-bold tracking-tighter opacity-50">
            <span className="text-white text-lg">GLOBAL <span className="text-[#48C3B4]">CARE</span></span>
            <span className="text-white text-lg">NETWORK</span>
          </div>
          <p className="text-sm font-light text-gray-500 text-center md:text-left">&copy; {new Date().getFullYear()} Global Care Network. {t('footer.rights')}</p>
          <Link to="/" className="text-gray-400 hover:text-white transition-colors uppercase tracking-widest text-xs font-semibold">
            {t('gcn.nav.home')}
          </Link>
        </div>
      </footer>
    </div>
  );
}
