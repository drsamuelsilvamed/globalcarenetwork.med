import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { GCNNavigation } from '../components/GCNNavigation';
import { Link } from 'react-router-dom';
import { GCNFooter } from '../components/GCNFooter';
import { Users, HeartPulse, Video, BookOpen, Lightbulb, Cpu, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export function SobreMi() {
  const { t } = useLanguage();

  const serviceAreas = [
    'Missionary Medicine',
    'Global Health',
    'Telehealth',
    'Healthcare OPSEC',
    'Medical Education',
    'Clinical Research',
    'Member Care',
    'Cross-cultural Healthcare'
  ];

  const convictions = [
    t('gcn.founder.convictions.c1'),
    t('gcn.founder.convictions.c2'),
    t('gcn.founder.convictions.c3'),
    t('gcn.founder.convictions.c4'),
    t('gcn.founder.convictions.c5'),
  ];

  const experiences = [
    { id: 'e1', icon: Users, title: t('gcn.founder.experience.e1.title'), desc: t('gcn.founder.experience.e1.desc') },
    { id: 'e2', icon: HeartPulse, title: t('gcn.founder.experience.e2.title'), desc: t('gcn.founder.experience.e2.desc') },
    { id: 'e3', icon: Video, title: t('gcn.founder.experience.e3.title'), desc: t('gcn.founder.experience.e3.desc') },
    { id: 'e4', icon: BookOpen, title: t('gcn.founder.experience.e4.title'), desc: t('gcn.founder.experience.e4.desc') },
    { id: 'e5', icon: Lightbulb, title: t('gcn.founder.experience.e5.title'), desc: t('gcn.founder.experience.e5.desc') },
    { id: 'e6', icon: Cpu, title: t('gcn.founder.experience.e6.title'), desc: t('gcn.founder.experience.e6.desc') },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#48C3B4] selection:text-white flex flex-col">
      <GCNNavigation />
      
      {/* Header */}
      <header className="pt-40 pb-20 md:pt-48 md:pb-32 bg-[#1A1A1A] text-white px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[#48C3B4] uppercase tracking-widest text-xs font-semibold mb-2 block">
              {t('gcn.founder.title')}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight mb-4">
              {t('gcn.founder.name')}
            </h1>
            <h2 className="text-lg md:text-xl font-sans text-gray-300 font-light">
              {t('gcn.founder.hero.role')}
            </h2>
            <div className="text-sm md:text-base font-serif text-gray-300 mt-4 italic border-t border-white/10 pt-4 inline-block max-w-2xl">
              "{t('gcn.founder.hero.tagline')}"
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-[#FDFBF7] text-black py-16 px-6 md:px-12">
        {/* Bio & Origins */}
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Professional Portrait */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-[320px] shrink-0 flex justify-center md:justify-start"
          >
            <div className="relative p-2 bg-white border border-gray-150 shadow-sm max-w-[320px]">
              <img 
                src="/mi-foto (1).png" 
                alt="Dr. Samuel Silva" 
                className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Vocación & Why GCN Exists */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-grow flex flex-col gap-10"
          >
            {/* Una vocación al servicio */}
            <div>
              <h3 className="text-xs uppercase tracking-widest font-semibold text-gray-400 mb-4 pb-2 border-b border-gray-100">
                {t('gcn.founder.vocacion.title')}
              </h3>
              <div className="font-sans font-light text-base md:text-lg text-gray-800 leading-relaxed flex flex-col gap-4">
                <p>{t('gcn.founder.vocacion.p1')}</p>
                <p>{t('gcn.founder.vocacion.p2')}</p>
              </div>
            </div>

            {/* Why Missionary Medical Care Born */}
            <div>
              <h3 className="text-xs uppercase tracking-widest font-semibold text-[#48C3B4] mb-4 pb-2 border-b border-gray-100">
                {t('gcn.founder.why.title')}
              </h3>
              <p className="font-sans font-light text-base md:text-lg text-gray-800 leading-relaxed">
                {t('gcn.founder.why.desc')}
              </p>
            </div>
          </motion.div>
        </div>

        {/* SERVICE AREAS (Visual Chips) */}
        <section className="w-full max-w-5xl mx-auto mt-20 pt-10 border-t border-gray-200">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xs uppercase tracking-widest font-semibold text-gray-400 mb-6 text-center md:text-left">
              {t('gcn.founder.areas.title')}
            </h3>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {serviceAreas.map((area, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-2 bg-white border border-gray-200 text-gray-700 font-sans text-sm font-light hover:border-[#48C3B4] hover:text-[#48C3B4] transition-all duration-300 shadow-xs"
                >
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CONVICTIONS SECTION */}
        <section className="w-full max-w-5xl mx-auto mt-20 pt-16 border-t border-gray-200">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <h3 className="text-xs uppercase tracking-widest font-semibold text-gray-400 text-center md:text-left">
              {t('gcn.founder.convictions.title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {convictions.map((conviction, idx) => (
                <div 
                  key={idx} 
                  className="p-6 bg-white border border-gray-150 shadow-xs flex items-start gap-4 rounded-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#48C3B4] shrink-0 mt-0.5" />
                  <p className="text-gray-700 font-light text-base leading-relaxed">{conviction}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* EXPERIENCE BLOCKS */}
        <section className="w-full max-w-5xl mx-auto mt-20 pt-16 border-t border-gray-200">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <h3 className="text-xs uppercase tracking-widest font-semibold text-gray-400 text-center md:text-left">
              {t('gcn.founder.experience.title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {experiences.map((exp) => (
                <div key={exp.id} className="flex gap-4 items-start p-4 bg-[#FAFAFA] border border-gray-100 rounded-sm">
                  <div className="w-10 h-10 bg-[#48C3B4]/10 flex items-center justify-center rounded-full text-[#48C3B4] shrink-0">
                    <exp.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-base font-serif font-bold text-gray-900 mb-1">{exp.title}</h4>
                    <p className="text-gray-600 font-light text-sm leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* A SHARED VISION */}
        <section className="w-full max-w-5xl mx-auto mt-20 pt-16 border-t border-gray-200">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#FAFAFA] p-8 md:p-12 border border-gray-100 rounded-sm flex flex-col md:flex-row gap-8 items-start md:items-center"
          >
            <div className="w-16 h-16 bg-[#48C3B4]/10 flex items-center justify-center rounded-full text-[#48C3B4] shrink-0">
              <Users className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-serif font-semibold text-[#1A1A1A] mb-3">
                {t('gcn.founder.shared.title')}
              </h3>
              <p className="text-gray-600 font-light text-base md:text-lg leading-relaxed">
                {t('gcn.founder.shared.p1')}
              </p>
            </div>
          </motion.div>
        </section>

        {/* Personal Conviction Block */}
        <section className="w-full max-w-4xl mx-auto mt-24 py-12 px-6 bg-[#1A1A1A] text-white text-center rounded-sm">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#48C3B4] mb-3">
            {t('gcn.founder.conviccion.personal')}
          </p>
          <p className="text-xl md:text-2xl font-serif font-light leading-relaxed italic text-gray-200">
            "Comenzar con humildad. Construir con excelencia. Crecer con credibilidad."
          </p>
        </section>

        {/* Footer Navigation Redirect CTA */}
        <section className="w-full max-w-4xl mx-auto mt-16 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#48C3B4] text-white font-sans tracking-widest uppercase text-xs font-semibold hover:bg-[#3ba598] transition-colors duration-300 shadow-sm"
          >
            {t('gcn.founder.cta')} <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      <GCNFooter hideFounderLink={true} />
    </div>
  );
}
