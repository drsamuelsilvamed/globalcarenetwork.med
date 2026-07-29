import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export function AreasColaboracion() {
  const { t } = useLanguage();

  const areas = [
    {
      title: t('colab.1.title'),
      desc: t('colab.1.desc')
    },
    {
      title: t('colab.2.title'),
      desc: t('colab.2.desc')
    },
    {
      title: t('colab.3.title'),
      desc: t('colab.3.desc')
    },
    {
      title: t('colab.4.title'),
      desc: t('colab.4.desc')
    }
  ];

  return (
    <section id="colaboracion" className="bg-white text-black py-24 md:py-32">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-24"
        >
          <span className="text-sm uppercase tracking-widest font-semibold mb-3 block">{t('colab.tag')}</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-200 pt-16">
          {areas.map((area, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-2xl font-serif">{area.title}</h3>
              <p className="font-sans font-light text-gray-600 leading-relaxed text-lg">
                {area.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
