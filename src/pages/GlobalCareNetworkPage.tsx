import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { GCNNavigation } from '../components/GCNNavigation';
import { GCNFooter } from '../components/GCNFooter';
import { ArrowRight, Globe2, BookOpen, Lightbulb, Shield, Laptop, Compass, HeartPulse, Scale, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export function GlobalCareNetworkPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#48C3B4] selection:text-white flex flex-col">
      <GCNNavigation />
      
      {/* Hero Section (Reduced Height by 25-30%) */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-[#1A1A1A] text-white px-6 md:px-12 relative overflow-hidden flex items-center justify-center min-h-[60vh]" id="#">
        <div 
          className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
          style={{ 
            backgroundImage: "url('/world-map.svg')", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat',
            filter: 'invert(1) brightness(2)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A1A1A] z-0 opacity-80 pointer-events-none"></div>

        <div className="w-full max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="flex flex-col leading-[1.1] font-sans font-bold tracking-tighter mb-6">
              <span className="text-white text-3xl md:text-4xl lg:text-6xl">GLOBAL <span className="text-[#48C3B4]">CARE</span></span>
              <span className="text-white text-3xl md:text-4xl lg:text-6xl">NETWORK</span>
            </div>
            
            <h2 className="text-xl md:text-3xl lg:text-4xl font-serif tracking-tight leading-[1.2] mb-6 max-w-4xl text-gray-100">
              {t('gcn.hero.title')}
            </h2>

            <p className="text-base md:text-lg font-light text-gray-300 max-w-3xl mb-8 leading-relaxed">
              {t('gcn.hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link to="/about" className="inline-flex items-center gap-3 px-6 py-3 border-2 border-white text-white font-sans tracking-widest uppercase text-xs font-semibold hover:bg-white hover:text-[#1A1A1A] transition-colors duration-300">
                {t('gcn.hero.learn')} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/projects" className="inline-flex items-center gap-3 px-6 py-3 bg-[#48C3B4] text-white font-sans tracking-widest uppercase text-xs font-semibold hover:bg-[#3ba598] transition-colors duration-300">
                {t('gcn.hero.explore')} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ¿Por qué existe Global Care Network? (New Section immediately below Hero) */}
      <section className="py-20 md:py-24 px-6 md:px-12 bg-white">
        <div className="w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-8 text-[#1A1A1A] text-center md:text-left">
              {t('gcn.reason.title')}
            </h3>
            <div className="text-lg md:text-xl font-light leading-relaxed text-gray-700 flex flex-col gap-6">
              <p>{t('gcn.reason.p1')}</p>
              <p>{t('gcn.reason.p2')}</p>
              <p>{t('gcn.reason.p3')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Institutional Principle block */}
      <section className="py-16 bg-[#1A1A1A] text-white text-center px-6 border-y border-white/5">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#48C3B4] mb-4">Principio Institucional</p>
          <h4 className="text-xl md:text-2xl font-serif font-light leading-relaxed italic text-gray-200">
            "{t('gcn.about.subtitle')}"
          </h4>
        </div>
      </section>

      {/* Guiding Principles (Reordered: Patient, Evidence, Innovation, Transparency, Professionalism) */}
      <section className="py-20 md:py-24 px-6 md:px-12 bg-white" id="principles">
        <div className="w-full max-w-6xl mx-auto">
          <h3 className="text-sm uppercase tracking-widest font-semibold mb-16 text-gray-400 text-center">
            {t('gcn.about.principles.title')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 'patient', icon: HeartPulse },
              { id: 'evidence', icon: BookOpen },
              { id: 'innovation', icon: Lightbulb },
              { id: 'transparency', icon: Compass },
              { id: 'professionalism', icon: Shield }
            ].map((principle) => (
              <motion.div 
                key={principle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-4 p-8 border border-gray-100 bg-[#FAFAFA] hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#48C3B4]/10 flex items-center justify-center rounded-full mb-2 text-[#48C3B4]">
                  <principle.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-serif text-[#1A1A1A]">{t(`gcn.about.principles.${principle.id}.title`)}</h4>
                <p className="text-gray-600 font-light text-base leading-relaxed">{t(`gcn.about.principles.${principle.id}.desc`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GCNFooter />
    </main>
  );
}
