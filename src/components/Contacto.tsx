import { motion } from 'motion/react';
import { Mail, MessageCircle } from 'lucide-react';
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
      <div className="w-full max-w-5xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-sm uppercase tracking-widest font-semibold mb-3 block">{t('contacto.tag')}</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight mb-8">
            {t('contacto.title')}
          </h2>
          <p className="text-lg text-gray-600 font-sans font-light mb-8">
            {t('contacto.desc')}
          </p>
          <ul className="grid grid-cols-1 gap-3 font-sans font-light text-gray-800">
            {options.map((option, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-black rounded-full block"></span>
                <span>{option}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          
          <a href="mailto:contact@example.com" className="flex items-center justify-center gap-4 w-full py-6 border border-black text-black font-sans tracking-widest uppercase text-sm hover:bg-gray-50 transition-colors">
            <Mail className="w-6 h-6" />
            <span>{t('contacto.btn2')}</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
