import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
 const [isOpen, setIsOpen] = useState(false);
 const { language, setLanguage, t } = useLanguage();
 const location = useLocation();

 const links = [
 { label: t('nav.home'), href: '/' },
 { label: t('nav.about'), href: '/sobre-mi' },
 { label: t('nav.trajectory'), href: '/mi-trayectoria' },
 { label: t('nav.academic'), href: '/trayectoria' },
 { label: t('nav.articles'), href: '/articulos' },
 { label: t('nav.podcast'), href: '/podcast' },
 { label: t('nav.gcn'), href: '/global-care-network' },
 { label: t('nav.contact'), href: '/#contacto' },
 ];

 return (
 <header className="absolute top-0 left-0 w-full z-50 py-5 px-4 md:py-8 md:px-12 flex justify-between items-center">
 <Link to="/" className="flex items-center gap-3 md:gap-4 z-50 relative shrink-0 mr-4">
 
 <div className="flex flex-col">
 <h1 className="text-sm md:text-lg font-sans text-white tracking-widest uppercase font-semibold drop-shadow-sm leading-tight max-w-[120px] sm:max-w-none">
 {t('nav.title')}
 </h1>
 </div>
 </Link>

 <div className="flex items-center gap-3 sm:gap-6 z-50 relative">
 {/* Desktop Nav */}
 <nav className="hidden xl:flex border border-white/10 rounded-full px-8 py-3 items-center gap-6">
 {links.map((link) => (
 <Link
 key={link.href}
 to={link.href}
 className="text-white hover:text-gray-300 font-sans text-xs tracking-wide transition-colors uppercase whitespace-nowrap"
 >
 {link.label}
 </Link>
 ))}
 </nav>

 {/* Language Selector Desktop */}
 <div className="hidden xl:flex p-1 border border-white/20 rounded-full items-center">
 <button onClick={() => setLanguage('ES')} className={`px-3 py-1.5 rounded-full text-xs font-sans font-semibold uppercase transition-all duration-300 ${language === 'ES' ? 'bg-white text-black shadow-sm' : 'text-white/80 hover:text-white'}`}>ES</button>
 <button onClick={() => setLanguage('PT')} className={`px-3 py-1.5 rounded-full text-xs font-sans font-semibold uppercase transition-all duration-300 ${language === 'PT' ? 'bg-white text-black shadow-sm' : 'text-white/80 hover:text-white'}`}>PT</button>
 <button onClick={() => setLanguage('EN')} className={`px-3 py-1.5 rounded-full text-xs font-sans font-semibold uppercase transition-all duration-300 ${language === 'EN' ? 'bg-white text-black shadow-sm' : 'text-white/80 hover:text-white'}`}>EN</button>
 </div>

 {/* Mobile Nav Toggle & Language */}
 <div className="flex xl:hidden items-center gap-2 sm:gap-3">
 <div className="flex p-0.5 border border-white/20 rounded-full items-center">
 <button onClick={() => setLanguage('ES')} className={`px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-sans font-semibold uppercase transition-all duration-300 ${language === 'ES' ? 'bg-white text-black shadow-sm' : 'text-white/80 hover:text-white'}`}>ES</button>
 <button onClick={() => setLanguage('PT')} className={`px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-sans font-semibold uppercase transition-all duration-300 ${language === 'PT' ? 'bg-white text-black shadow-sm' : 'text-white/80 hover:text-white'}`}>PT</button>
 <button onClick={() => setLanguage('EN')} className={`px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-sans font-semibold uppercase transition-all duration-300 ${language === 'EN' ? 'bg-white text-black shadow-sm' : 'text-white/80 hover:text-white'}`}>EN</button>
 </div>
 <button
 onClick={() => setIsOpen(true)}
 className="p-2 sm:p-2.5 text-white rounded-full"
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
 className="fixed inset-0 z-50 bg-brand-black p-6 flex flex-col xl:hidden overflow-y-auto"
 >
 <div className="flex justify-between items-start mb-12 shrink-0">
 <div className="flex items-center gap-3 mt-2">
 
 <h1 className="text-sm font-sans text-white tracking-widest uppercase font-semibold">{t('nav.title')}</h1>
 </div>
 <button onClick={() => setIsOpen(false)} className="p-2 text-white rounded-full">
 <X className="w-6 h-6" />
 </button>
 </div>
 
 <nav className="flex flex-col gap-6 items-center mt-8 pb-12">
 {links.map((link) => (
 <Link
 key={link.href}
 to={link.href}
 onClick={() => setIsOpen(false)}
 className="text-white text-xl font-heading tracking-wide hover:text-gray-300 uppercase text-center"
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
