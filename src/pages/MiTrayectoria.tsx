import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export function MiTrayectoria() {
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
 <h1 className="text-5xl md:text-6xl font-heading tracking-tight mb-6">
 Mi Trayectoria
 </h1>
 <h2 className="text-2xl md:text-3xl font-heading text-gray-300">
 Más de una década sirviendo en el campo
 </h2>
 </motion.div>
 </div>
 </header>

 <main className="flex-grow bg-white text-black py-24 px-6 md:px-12">
 <div className="max-w-4xl mx-auto flex flex-col gap-24">
 
 {/* Introducción / Más de una década */}
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 >
 <span className="text-sm uppercase tracking-widest font-semibold mb-3 block text-gray-400">{t('about.t.tag')}</span>
 <h2 className="text-4xl md:text-5xl font-heading tracking-tight leading-tight mb-8">
 {t('about.t.title')}
 </h2>
 <div className="flex flex-col gap-6 font-sans font-light text-lg text-gray-800 leading-relaxed">
 <p>{t('about.t.p1')}</p>
 <p>{t('about.t.p2')}</p>
 <p className="text-2xl font-heading text-black border-l-4 border-black pl-6 py-2 my-4">
 {t('about.t.quote')}
 </p>
 <p>{t('about.t.p3')}</p>
 <p>{t('about.t.p4')}</p>
 </div>
 </motion.div>

 {/* Timeline Section */}
 <section className="py-12 border-t border-gray-100">
 <h3 className="text-sm uppercase tracking-widest font-semibold mb-12 text-gray-400">Línea del Tiempo</h3>
 <div className="relative border-l-2 border-black/10 ml-4 md:ml-8">
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
 <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-black shadow-[0_0_0_4px_rgba(0,0,0,0.1)]"></div>
 
 <span className="text-black font-bold tracking-widest text-lg mb-2 block">{item.year}</span>
 <div className="bg-brand-cream p-8 md:p-10 border border-gray-200/50 rounded-sm">
 <h4 className="text-2xl font-heading text-black mb-4">{item.title}</h4>
 <p className="text-gray-600 font-light leading-relaxed text-lg">{item.desc}</p>
 </div>
 </motion.div>
 ))}
 </div>
 </section>

 </div>
 </main>

 <Footer />
 </div>
 );
}
