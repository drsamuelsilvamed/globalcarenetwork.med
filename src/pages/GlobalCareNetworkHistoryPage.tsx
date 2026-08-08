import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export function GlobalCareNetworkHistoryPage() {
 const { t } = useLanguage();

 const timeline = [
 {
 year: '2011',
 title: t('gcn.history.2011.title'),
 desc: t('gcn.history.2011.desc'),
 },
 {
 year: '2011–2022',
 title: t('gcn.history.2011_2022.title'),
 desc: t('gcn.history.2011_2022.desc'),
 },
 {
 year: '2023',
 title: t('gcn.history.2023.title'),
 desc: t('gcn.history.2023.desc'),
 },
 {
 year: '2024',
 title: t('gcn.history.2024.title'),
 desc: t('gcn.history.2024.desc'),
 },
 {
 year: '2025',
 title: t('gcn.history.2025.title'),
 desc: t('gcn.history.2025.desc'),
 },
 {
 year: '2026',
 title: t('gcn.history.2026.title'),
 desc: t('gcn.history.2026.desc'),
 }
 ];

 return (
 <main className="min-h-screen bg-[#F9F8F6] font-sans selection:bg-[#48C3B4] selection:text-white flex flex-col">
 {/* Mini Nav for GCN */}
 <header className="fixed top-0 left-0 w-full z-50 bg-[#1A1A1A]/95 border-b border-white/10">
 <div className="w-full max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
 <Link to="/" className="flex flex-col leading-[1.1] font-sans font-bold tracking-tighter">
 <span className="text-white text-lg">GLOBAL <span className="text-[#48C3B4]">CARE</span></span>
 <span className="text-white text-lg">NETWORK</span>
 </Link>
 <nav className="flex items-center gap-8">
 <Link to="/" className="text-gray-300 hover:text-white text-sm font-semibold tracking-widest uppercase transition-colors">
 {t('gcn.nav.home')}
 </Link>
 <Link to="/historia" className="text-white text-sm font-semibold tracking-widest uppercase border-b-2 border-[#48C3B4] pb-1">
 {t('gcn.nav.history')}
 </Link>
 </nav>
 </div>
 </header>

 {/* Hero Section */}
 <section className="pt-40 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 bg-white">
 <div className="w-full max-w-4xl mx-auto text-center">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 >
 <h1 className="text-5xl md:text-6xl font-heading text-[#1A1A1A] tracking-tight mb-6">
 {t('gcn.history.tag')}
 </h1>
 <h2 className="text-2xl md:text-3xl font-light text-gray-500 mb-12">
 {t('gcn.history.subtitle')}
 </h2>
 
 <div className="text-lg md:text-xl font-sans font-light leading-relaxed text-gray-700 text-left md:text-center max-w-3xl mx-auto space-y-6">
 <p>{t('gcn.history.intro1')}</p>
 <p>{t('gcn.history.intro2')}</p>
 <p>{t('gcn.history.intro3')}</p>
 </div>
 </motion.div>
 </div>
 </section>

 {/* Timeline Section */}
 <section className="py-24 px-6 md:px-12 bg-[#F9F8F6]">
 <div className="w-full max-w-3xl mx-auto">
 <div className="relative border-l-2 border-[#48C3B4]/30 ml-4 md:ml-8">
 {timeline.map((item, index) => (
 <motion.div 
 key={index}
 initial={{ opacity: 0, x: -30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.6, delay: index * 0.1 }}
 className="mb-16 last:mb-0 pl-10 md:pl-16 relative"
 >
 {/* Timeline dot */}
 <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-[#48C3B4] shadow-[0_0_0_4px_rgba(72,195,180,0.2)]"></div>
 
 <span className="text-[#48C3B4] font-bold tracking-widest text-lg mb-2 block">{item.year}</span>
 <div className="bg-white p-8 md:p-10 shadow-sm border border-gray-100 rounded-sm">
 <h3 className="text-2xl font-heading text-[#1A1A1A] mb-4">{item.title}</h3>
 <p className="text-gray-600 font-light leading-relaxed text-lg">{item.desc}</p>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>



 {/* Outro */}
 <section className="py-24 md:py-32 px-6 md:px-12 bg-[#1A1A1A] text-center text-white">
 <div className="w-full max-w-3xl mx-auto">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8 }}
 >
 <h3 className="text-sm uppercase tracking-widest font-semibold mb-8 text-[#48C3B4]">
 {t('gcn.history.outro.title')}
 </h3>
 <div className="text-xl md:text-2xl font-heading leading-relaxed text-gray-300 space-y-6">
 <p>{t('gcn.history.outro.p1')}</p>
 <p>{t('gcn.history.outro.p2')}</p>
 </div>
 </motion.div>
 </div>
 </section>

 {/* Footer minimalista para GCN */}
 <footer className="bg-[#111111] text-white py-16 px-6 md:px-12 relative overflow-hidden">
 {/* Map Background for Footer */}
 <div 
 className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
 style={{ 
 backgroundImage: "url('/world-map.svg')", 
 backgroundSize: 'cover', 
 backgroundPosition: 'center', 
 backgroundRepeat: 'no-repeat',
 filter: 'invert(1) brightness(1.5)'
 }}
 ></div>
 
 <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-8">
 <div className="flex flex-col leading-[1.1] font-sans font-bold tracking-tighter opacity-50">
 <span className="text-white text-lg">GLOBAL <span className="text-[#48C3B4]">CARE</span></span>
 <span className="text-white text-lg">NETWORK</span>
 </div>
 <p className="text-sm font-light text-gray-500 text-center md:text-left">&copy; {new Date().getFullYear()} Global Care Network. {t('footer.rights')}</p>
 <Link to="/founder" className="text-gray-400 hover:text-white transition-colors uppercase tracking-widest text-xs font-semibold">
 {t('gcn.nav.founder')} (Dr. Samuel Silva)
 </Link>
 </div>
 </footer>
 </main>
 );
}
