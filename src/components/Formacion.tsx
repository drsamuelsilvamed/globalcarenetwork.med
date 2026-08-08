import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export function Formacion() {
 const { t } = useLanguage();

 const areas = [
 t('formacion.a1'),
 t('formacion.a2'),
 t('formacion.a3'),
 t('formacion.a4'),
 t('formacion.a5'),
 t('formacion.a6'),
 t('formacion.a7'),
 t('formacion.a8')
 ];

 return (
 <section id="formacion" className="bg-brand-cream text-black py-24 md:py-32">
 <div className="w-full max-w-4xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12">
 <motion.div 
 className="w-full"
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 >
 <span className="text-sm uppercase tracking-widest font-semibold mb-3 block text-center md:text-left">{t('formacion.tag')}</span>
 <h2 className="text-4xl md:text-5xl font-heading tracking-tight leading-tight mb-12 text-center md:text-left">
 {t('formacion.title')}
 </h2>
 <div className="flex flex-col gap-6 font-sans font-light text-lg text-gray-800 leading-relaxed border-l-2 border-black pl-8 mb-12">
 <p className="font-medium text-xl text-black">{t('formacion.p1')}</p>
 <p>{t('formacion.p2')}</p>
 <p>{t('formacion.p3')}</p>
 </div>
 
 <div className="mb-12">
 <h3 className="text-sm uppercase tracking-widest font-semibold mb-6">{t('formacion.areas')}</h3>
 <div className="flex flex-wrap gap-3">
 {areas.map((area, i) => (
 <span key={i} className="px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 bg-white">
 {area}
 </span>
 ))}
 </div>
 </div>
 
 <Link to="/trayectoria" className="inline-block px-8 py-4 bg-black text-white font-sans tracking-widest uppercase text-sm font-semibold hover:bg-gray-800 transition-colors duration-300">
 {t('formacion.btn')}
 </Link>
 </motion.div>
 </div>
 </section>
 );
}
