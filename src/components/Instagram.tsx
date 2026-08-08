import { motion } from 'motion/react';
import { Instagram as InstaIcon, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Instagram() {
 const { t } = useLanguage();

 const topics = [
 t('ig.t1'),
 t('ig.t2'),
 t('ig.t3'),
 t('ig.t4'),
 t('ig.t5'),
 t('ig.t6'),
 t('ig.t7'),
 t('ig.t8')
 ];

 return (
 <section id="instagram" className="bg-brand-cream text-black py-24 md:py-32">
 <div className="w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
 
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 className="flex flex-col items-center w-full"
 >
 <InstaIcon className="w-12 h-12 mb-6" />
 <span className="text-sm uppercase tracking-widest font-semibold mb-3">{t('ig.tag')}</span>
 <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading tracking-tight mb-10">
 {t('ig.title')}
 </h2>
 
 <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-gray-100 max-w-3xl w-full text-left mb-12">
 <p className="text-xl font-heading mb-8 text-center">{t('ig.desc')}</p>
 <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans font-light text-gray-700">
 {topics.map((topic, i) => (
 <li key={i} className="flex items-start gap-3">
 <Check className="w-5 h-5 text-black shrink-0 mt-0.5" />
 <span className="text-lg">{topic}</span>
 </li>
 ))}
 </ul>
 </div>

 <a 
 href="https://www.instagram.com/drsamuelsilva.med" 
 target="_blank" 
 rel="noopener noreferrer"
 className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-sans tracking-widest uppercase text-sm hover:bg-gray-800 transition-colors duration-300"
 >
 <span>@drsamuelsilva.med</span>
 </a>
 </motion.div>

 </div>
 </section>
 );
}
