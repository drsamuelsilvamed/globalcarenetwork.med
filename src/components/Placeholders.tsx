import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export function ArticulosPlaceholder() {
 const { t } = useLanguage();
 return (
 <section id="articulos" className="py-24 md:py-32 px-6 md:px-12 bg-white text-center border-t border-gray-200">
 <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto flex flex-col items-center gap-6">
 <h3 className="text-sm uppercase tracking-widest font-semibold text-gray-400">
 {t('nav.articles')}
 </h3>
 <p className="text-2xl font-heading text-[#1A1A1A]">Últimos artículos / Recent articles</p>
 <p className="text-gray-500 font-light max-w-md">
 Próximamente compartiremos investigaciones, artículos académicos y publicaciones sobre medicina y salud global.
 </p>
 <Link to="/articulos" className="mt-4 inline-block px-8 py-3 bg-black text-white font-sans tracking-widest uppercase text-xs font-semibold hover:bg-gray-800 transition-colors duration-300">
 Ver todos / View all
 </Link>
 </motion.div>
 </section>
 );
}

export function PodcastPlaceholder() {
 const { t } = useLanguage();
 return (
 <section id="podcast" className="py-24 md:py-32 px-6 md:px-12 bg-brand-cream text-center border-t border-gray-200">
 <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto flex flex-col items-center gap-6">
 <h3 className="text-sm uppercase tracking-widest font-semibold text-gray-400">
 {t('nav.podcast')}
 </h3>
 <p className="text-2xl font-heading text-[#1A1A1A]">Reflexiones y conferencias en audio</p>
 <p className="text-gray-600 font-light max-w-md">
 Espacio dedicado a compartir conversaciones sobre medicina, fe, ciencia y sociedad.
 </p>
 <Link to="/podcast" className="mt-4 inline-block px-8 py-3 bg-black text-white font-sans tracking-widest uppercase text-xs font-semibold hover:bg-gray-800 transition-colors duration-300">
 Escuchar / Listen
 </Link>
 </motion.div>
 </section>
 );
}
