import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export function GlobalCareNetwork() {
 const { t } = useLanguage();

 return (
 <section id="global-care-network" className="bg-brand-black text-white py-24 md:py-32">
 <div className="w-full max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 className="flex flex-col items-center w-full"
 >
 <span className="text-sm uppercase tracking-widest font-semibold mb-3 text-gray-400">{t('gcn.tag')}</span>
 <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading tracking-tight mb-8">
 {t('gcn.title')}
 </h2>
 <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-10 max-w-3xl">
 {t('gcn.desc')}
 </p>
 <Link to="/global-care-network" className="inline-block px-8 py-4 bg-white text-black font-sans tracking-widest uppercase text-sm font-semibold hover:bg-gray-200 transition-colors duration-300">
 {t('gcn.btn')}
 </Link>
 </motion.div>
 </div>
 </section>
 );
}
