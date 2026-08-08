import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export function Contacto() {
 const { t } = useLanguage();

 const options = [
 t('co.1'),
 t('co.2'),
 t('co.3'),
 t('co.4'),
 t('co.5'),
 t('co.6'),
 t('co.7'),
 t('co.8'),
 t('co.9'),
 t('co.10')
 ];

 return (
 <section id="contacto" className="bg-white text-black py-24 md:py-32 border-t border-gray-200">
 <div className="w-full max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
 
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 className="flex flex-col items-center w-full"
 >
 <span className="text-sm uppercase tracking-widest font-semibold mb-3 block">{t('contacto.tag')}</span>
 <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading tracking-tight mb-8">
 {t('contacto.title')}
 </h2>
 <p className="text-lg text-gray-600 font-sans font-light mb-12 max-w-2xl">
 {t('contacto.desc')}
 </p>
 
 <div className="w-full max-w-2xl mb-12 text-left bg-brand-cream/35 p-8 rounded-sm border border-gray-100/50">
 <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans font-light text-gray-800">
 {options.map((option, i) => (
 <li key={i} className="flex items-start gap-3">
 <span className="w-1.5 h-1.5 bg-black rounded-full block mt-2.5 shrink-0"></span>
 <span className="text-base">{option}</span>
 </li>
 ))}
 </ul>
 </div>

 <a href="mailto:drsamuelsilva.med@gmail.com" className="text-xl md:text-2xl font-heading border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all duration-300">
 drsamuelsilva.med@gmail.com
 </a>
 </motion.div>

 </div>
 </section>
 );
}
