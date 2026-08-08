import { useState } from 'react';
import { Menu, X, Globe, Instagram, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export function GCNNavigation() {
 const [isOpen, setIsOpen] = useState(false);
 const [openAccordion, setOpenAccordion] = useState<number | null>(null);
 const { language, setLanguage } = useLanguage();

 const getTranslation = (es: string, pt: string, en: string) => {
 if (language === 'PT') return pt;
 if (language === 'EN') return en;
 return es;
 };

 const pillars = [
 {
 title: getTranslation('Quiénes Somos', 'Quem Somos', 'Who We Are'),
 items: [
 { label: getTranslation('Acerca de', 'Sobre', 'About'), to: '/about' },
 { label: getTranslation('Junta Directiva', 'Conselho Diretor', 'Board of Directors'), to: '/board' },
 { label: getTranslation('Transparencia', 'Transparência', 'Transparency'), to: '/transparencia' },
 { label: getTranslation('Declaración de Fe', 'Declaração de Fé', 'Statement of Faith'), to: '/declaracion-de-fe' },
 ]
 },
 {
 title: getTranslation('Qué Hacemos', 'O Que Fazemos', 'What We Do'),
 items: [
 { label: getTranslation('Qué Hacemos', 'O Que Fazemos', 'What We Do'), to: '/what-we-do' },
 { label: getTranslation('Salud Comunitaria', 'Saúde Comunitária', 'Community Health'), to: '/community-health' },
 { label: getTranslation('Telemedicina', 'Telemedicina', 'Telemedicine'), to: '/telemedicine' },
 { label: getTranslation('Realidad del Campo', 'Realidade do Campo', 'Field Reality'), to: '/reality' },
 ]
 },
 {
 title: getTranslation('Participa', 'Participe', 'Get Involved'),
 items: [
 { label: getTranslation('Centro de Participación', 'Centro de Participação', 'Get Involved Hub'), to: '/get-involved' },
 { label: getTranslation('Donar', 'Doar', 'Donate'), to: '/donate' },
 { label: getTranslation('Colaborar', 'Colaborar', 'Volunteer'), to: '/volunteer' },
 { label: getTranslation('Iglesias', 'Igrejas', 'Churches'), to: '/church-engagement' },
 { label: getTranslation('Red de Oración', 'Rede de Oração', 'Prayer Network'), to: '/prayer' },
 ]
 },
 {
 title: getTranslation('Historias', 'Histórias', 'Stories'),
 items: [
 { label: getTranslation('Historias', 'Histórias', 'Stories'), to: '/stories' },
 { label: getTranslation('Historias de Pacientes', 'Histórias de Pacientes', 'Patient Stories'), to: '/patient-stories' },
 ]
 },
 {
 title: getTranslation('Recursos', 'Recursos', 'Resources'),
 items: [
 { label: getTranslation('Recursos', 'Recursos', 'Resources'), to: '/resources' },
 { label: getTranslation('Preguntas Frecuentes', 'Perguntas Frequentes', 'FAQ'), to: '/faq' },
 { label: getTranslation('Contacto', 'Contato', 'Contact'), to: '/contacto' },
 { label: getTranslation('Liderazgo', 'Liderança', 'Leadership'), to: '/leadership' },
 ]
 }
 ];

 const toggleAccordion = (index: number) => {
 setOpenAccordion(openAccordion === index ? null : index);
 };

 return (
 <header className="w-full z-50 fixed top-0 left-0 font-body">
 
 {/* Top Bar - Very thin and simple */}
 <div className="bg-charcoal text-white text-[11px] uppercase tracking-widest py-2 px-6 md:px-12 flex justify-between items-center border-b border-white/10">
 <div className="flex items-center gap-6 text-gray-400">
 <span className="hidden sm:inline-flex items-center gap-2">
 <Globe className="w-3.5 h-3.5 text-mustard" />
 {getTranslation('RED INTERNACIONAL CRISTIANA DE SALUD', 'REDE INTERNACIONAL CRISTÃ DE SAÚDE', 'INTERNATIONAL CHRISTIAN MEDICAL NETWORK')}
 </span>
 </div>
 
 {/* Language Switcher & Social */}
 <div className="flex items-center gap-4">
 <a 
 href="https://www.instagram.com/missionarymedicalcare/" 
 target="_blank" 
 rel="noopener noreferrer" 
 className="inline-flex items-center text-gray-400 hover:text-mustard transition-colors"
 aria-label="Instagram"
 >
 <Instagram className="w-4 h-4" />
 </a>
 <div className="w-px h-3 bg-gray-600"></div>
 <div className="flex items-center gap-3">
 <button 
 onClick={() => setLanguage('ES')} 
 className={`transition-colors ${language === 'ES' ? 'text-mustard font-bold' : 'text-gray-400 hover:text-white'}`}
 >
 ES
 </button>
 <button 
 onClick={() => setLanguage('PT')} 
 className={`transition-colors ${language === 'PT' ? 'text-mustard font-bold' : 'text-gray-400 hover:text-white'}`}
 >
 PT
 </button>
 <button 
 onClick={() => setLanguage('EN')} 
 className={`transition-colors ${language === 'EN' ? 'text-mustard font-bold' : 'text-gray-400 hover:text-white'}`}
 >
 EN
 </button>
 </div>
 </div>
 </div>

 {/* Main Navbar - Charcoal Theme */}
 <div className="bg-charcoal py-4 px-6 md:px-12 flex justify-between items-center border-b border-white/10">
 <Link to="/" className="flex items-center z-50 relative shrink-0 mr-8">
 <img
    src="/3-removebg-preview.png"
    alt="Missionary Medical Care Logo"
    className="h-10 md:h-12 object-contain"
  />
 </Link>

 {/* Desktop Menu */}
 <nav className="hidden xl:flex items-center space-x-8 flex-1 justify-center">
 {pillars.map((pillar) => (
 <div key={pillar.title} className="group relative">
 <button className="flex items-center gap-1.5 text-gray-200 hover:text-white text-sm font-bold tracking-widest transition-colors uppercase py-2">
 {pillar.title}
 <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-mustard transition-colors" />
 </button>
 
 {/* Dropdown Menu */}
 <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
 <div className="bg-white border-t-2 border-mustard shadow-md overflow-hidden min-w-[220px] py-2">
 {pillar.items.map((item) => (
 <Link 
 key={item.to} 
 to={item.to} 
 className="block px-6 py-3 text-sm font-medium text-charcoal hover:bg-light-gray hover:text-inst-blue transition-colors"
 >
 {item.label}
 </Link>
 ))}
 </div>
 </div>
 </div>
 ))}
 </nav>

 {/* Right Action Buttons */}
 <div className="hidden lg:flex items-center gap-4 shrink-0 ml-4">
 <Link 
 to="/donate" 
 className="bg-mustard text-charcoal px-6 py-2.5 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-[#a07424] hover:text-white transition-all whitespace-nowrap"
 >
 {getTranslation('DONAR', 'DOAR', 'DONATE')}
 </Link>
 <a 
 href="https://wa.me/59162439185" 
 target="_blank" 
 rel="noopener noreferrer" 
 className="border border-white/20 text-white px-6 py-2.5 rounded-sm font-bold text-xs uppercase tracking-widest hover: transition-all whitespace-nowrap"
 >
 WHATSAPP
 </a>
 </div>

 {/* Mobile Toggle */}
 <button 
 onClick={() => setIsOpen(true)} 
 className="xl:hidden p-2 text-white hover:text-mustard transition-colors"
 >
 <Menu className="w-6 h-6" />
 </button>
 </div>

 {/* Mobile Drawer */}
 <AnimatePresence>
 {isOpen && (
 <motion.div 
 initial={{ opacity: 0, x: '100%' }}
 animate={{ opacity: 1, x: 0 }}
 exit={{ opacity: 0, x: '100%' }}
 transition={{ duration: 0.3 }}
 className="fixed inset-0 z-50 bg-charcoal text-white p-6 flex flex-col xl:hidden overflow-y-auto font-body"
 >
 <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
 <img src="/images/youtube-logo.png" alt="Missionary Medical Care Logo" className="h-10 object-contain brightness-0 invert" />
 <button onClick={() => setIsOpen(false)} className="p-2 text-white hover:text-mustard">
 <X className="w-7 h-7" />
 </button>
 </div>
 
 <nav className="flex flex-col gap-2 items-start w-full">
 {pillars.map((pillar, idx) => (
 <div key={pillar.title} className="w-full border-b border-white/10 pb-4 mb-2">
 <button 
 onClick={() => toggleAccordion(idx)}
 className="flex justify-between items-center w-full text-left text-white text-lg font-bold tracking-widest uppercase py-2 hover:text-mustard transition-colors"
 >
 {pillar.title}
 <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openAccordion === idx ? 'rotate-180 text-mustard' : ''}`} />
 </button>
 
 <AnimatePresence>
 {openAccordion === idx && (
 <motion.div 
 initial={{ height: 0, opacity: 0 }}
 animate={{ height: 'auto', opacity: 1 }}
 exit={{ height: 0, opacity: 0 }}
 className="overflow-hidden flex flex-col gap-3 pt-4 pl-4"
 >
 {pillar.items.map(item => (
 <Link 
 key={item.to} 
 to={item.to}
 onClick={() => setIsOpen(false)}
 className="text-gray-300 text-sm font-medium hover:text-mustard transition-colors"
 >
 {item.label}
 </Link>
 ))}
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 ))}
 
 <div className="pt-8 w-full space-y-4">
 <Link 
 to="/donate"
 onClick={() => setIsOpen(false)}
 className="block w-full text-center bg-mustard text-charcoal px-6 py-4 rounded-sm font-bold text-sm uppercase tracking-widest"
 >
 {getTranslation('DONAR', 'DOAR', 'DONATE')}
 </Link>
 <a 
 href="https://wa.me/59162439185" 
 target="_blank" 
 rel="noopener noreferrer"
 onClick={() => setIsOpen(false)}
 className="block w-full text-center border border-white/30 text-white px-6 py-4 rounded-sm font-bold text-sm uppercase tracking-widest"
 >
 WHATSAPP
 </a>
 </div>
 </nav>
 </motion.div>
 )}
 </AnimatePresence>
 </header>
 );
}
