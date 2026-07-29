import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export function ArticulosPlaceholder() {
  const { t } = useLanguage();
  return (
    <section id="articulos" className="py-24 md:py-32 px-6 md:px-12 bg-white text-center border-t border-gray-200">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <h3 className="text-sm uppercase tracking-widest font-semibold mb-4 text-gray-400">
          {t('nav.articles')}
        </h3>
        <p className="text-2xl font-serif text-[#1A1A1A]">Próximamente / Coming soon</p>
      </motion.div>
    </section>
  );
}

export function PodcastPlaceholder() {
  const { t } = useLanguage();
  return (
    <section id="podcast" className="py-24 md:py-32 px-6 md:px-12 bg-brand-cream text-center border-t border-gray-200">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <h3 className="text-sm uppercase tracking-widest font-semibold mb-4 text-gray-400">
          {t('nav.podcast')}
        </h3>
        <p className="text-2xl font-serif text-[#1A1A1A]">Próximamente / Coming soon</p>
      </motion.div>
    </section>
  );
}
