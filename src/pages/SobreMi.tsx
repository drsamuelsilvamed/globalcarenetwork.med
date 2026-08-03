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
            <h1 className="text-5xl md:text-6xl font-serif tracking-tight mb-6">
              {t('gcn.founder.name')}
            </h1>
            <h2 className="text-xl md:text-2xl font-sans text-gray-300 font-light">
              {t('gcn.founder.role')}
            </h2>
          </motion.div>
        </div>
      </header>

      <main className="flex-grow bg-[#FDFBF7] text-black py-20 px-6 md:px-12">
        <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
          {/* Biography */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-grow md:w-2/3"
          >
            <h3 className="text-xs uppercase tracking-widest font-semibold text-gray-400 mb-6 pb-2 border-b border-gray-100">
              Trayectoria y Visión
            </h3>
            <p className="font-sans font-light text-lg text-gray-800 leading-relaxed mb-6">
              {t('gcn.founder.bio')}
            </p>
          </motion.div>

          {/* Interests */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:w-1/3 shrink-0"
          >
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#48C3B4] mb-6 pb-2 border-b border-gray-100">
              {t('gcn.founder.interests')}
            </h3>
            <ul className="flex flex-col gap-3">
              {interests.map((interest, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-gray-700 font-sans text-base font-light">
                  <span className="w-1.5 h-1.5 bg-[#48C3B4] rounded-full shrink-0"></span>
                  {interest}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#111111] text-white py-16 px-6 md:px-12 mt-auto">
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
