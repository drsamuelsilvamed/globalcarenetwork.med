import { useState } from 'react';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export function GCNNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const links = [
    { label: t('gcn.nav.home'), to: '/' },
    { label: t('gcn.nav.about'), to: '/about' },
    { label: t('gcn.nav.projects'), to: '/projects' },
    { label: t('gcn.nav.telemedicine'), to: '/telemedicine' },
    { label: t('gcn.nav.digitalHealth'), to: '/digital-health' },
    { label: t('gcn.nav.resources'), to: '/resources' },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 py-5 px-4 md:py-8 md:px-12 flex justify-between items-center">
      <Link to="/" className="flex items-center z-50 relative shrink-0 mr-4">
        <div className="flex flex-col leading-[1.1] font-sans font-bold tracking-tighter">
          <span className="text-white text-lg md:text-xl">GLOBAL <span className="text-[#48C3B4]">CARE</span></span>
          <span className="text-white text-lg md:text-xl">NETWORK</span>
        </div>
      </Link>

      <div className="flex items-center gap-3 sm:gap-6 z-50 relative">
        {/* Desktop Nav */}
        <nav className="hidden xl:flex bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-8 py-3 items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-white hover:text-gray-300 font-sans text-xs tracking-wider transition-colors uppercase whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Language Selector Desktop */}
        <div className="hidden xl:flex gap-2 text-white/80 text-xs font-sans font-medium uppercase bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-3">
           <button onClick={() => setLanguage('ES')} className={`transition-colors ${language === 'ES' ? 'text-white' : 'hover:text-white'}`}>ES</button>
           <span className="opacity-50">|</span>
           <button onClick={() => setLanguage('PT')} className={`transition-colors ${language === 'PT' ? 'text-white' : 'hover:text-white'}`}>PT</button>
           <span className="opacity-50">|</span>
           <button onClick={() => setLanguage('EN')} className={`transition-colors ${language === 'EN' ? 'text-white' : 'hover:text-white'}`}>EN</button>
        </div>

        {/* Mobile Nav Toggle & Language */}
        <div className="flex xl:hidden items-center gap-2 sm:gap-3">
          <div className="flex gap-1 text-white/80 text-[10px] sm:text-xs font-sans font-medium uppercase bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-2.5 py-2 sm:px-3 sm:py-2.5">
            <button onClick={() => setLanguage('ES')} className={`transition-colors ${language === 'ES' ? 'text-white' : 'hover:text-white'}`}>ES</button>
            <span className="opacity-50">|</span>
            <button onClick={() => setLanguage('PT')} className={`transition-colors ${language === 'PT' ? 'text-white' : 'hover:text-white'}`}>PT</button>
            <span className="opacity-50">|</span>
            <button onClick={() => setLanguage('EN')} className={`transition-colors ${language === 'EN' ? 'text-white' : 'hover:text-white'}`}>EN</button>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 sm:p-2.5 text-white bg-white/10 backdrop-blur-md rounded-full"
          >
            <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-[#1A1A1A] p-6 flex flex-col xl:hidden overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-12 shrink-0">
              <div className="flex items-center gap-3 mt-2">
                <div className="flex flex-col leading-[1.1] font-sans font-bold tracking-tighter">
                  <span className="text-white text-lg">GLOBAL <span className="text-[#48C3B4]">CARE</span></span>
                  <span className="text-white text-lg">NETWORK</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 text-white bg-white/10 rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 items-center mt-4 pb-12">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-lg font-serif tracking-wide hover:text-gray-300 uppercase text-center"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
