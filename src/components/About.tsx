import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export function About() {
 const { t } = useLanguage();

 return (
 <section id="about" className="bg-brand-cream text-black py-24 md:py-32 overflow-hidden">
 <div className="w-full max-w-4xl mx-auto px-6 md:px-12 flex flex-col gap-24">
 
 {/* Quién Soy - Versión Corta para el Home */}
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 className="flex flex-col items-start"
 >
 <div className="w-full">
 <span className="text-sm uppercase tracking-widest font-semibold mb-3 block">{t('about.tag')}</span>
 <h2 className="text-4xl md:text-5xl font-heading tracking-tight leading-tight mb-8">
 {t('about.title')}
 </h2>
 <div className="flex flex-col gap-6 font-sans font-light text-lg text-gray-800 leading-relaxed mb-8">
 <p>{t('about.p1')}</p>
 <p>{t('about.p2')}</p>
 </div>
 <Link to="/sobre-mi" className="inline-block px-8 py-4 bg-black text-white font-sans tracking-widest uppercase text-sm font-semibold hover:bg-gray-800 transition-colors duration-300">
 {t('about.readmore')}
 </Link>
 </div>
 </motion.div>

 </div>
 </section>
 );
}
