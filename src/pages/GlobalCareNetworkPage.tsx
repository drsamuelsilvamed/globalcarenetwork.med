import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { GCNNavigation } from '../components/GCNNavigation';
import { ArrowRight, ArrowLeft, BookOpen, Globe2, Lightbulb, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function GlobalCareNetworkPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#48C3B4] selection:text-white flex flex-col">
      <GCNNavigation />
      
      {/* Hero Section */}
      <section className="pt-48 pb-32 md:pt-56 md:pb-40 bg-[#1A1A1A] text-white px-6 md:px-12 relative overflow-hidden flex items-center justify-center min-h-[85vh]" id="#">
        {/* Map Background */}
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
            <div className="flex flex-col leading-[1.1] font-sans font-bold tracking-tighter mb-8 md:mb-12">
              <span className="text-white text-4xl md:text-5xl lg:text-6xl">GLOBAL <span className="text-[#48C3B4]">CARE</span></span>
              <span className="text-white text-4xl md:text-5xl lg:text-6xl">NETWORK</span>
            </div>
            
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif tracking-tight leading-[1.2] mb-12 max-w-4xl text-gray-200">
              {t('gcn.hero.title')}
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link to="/" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white font-sans tracking-widest uppercase text-sm font-semibold hover:bg-white hover:text-[#1A1A1A] transition-colors duration-300">
                <ArrowLeft className="w-4 h-4" /> {t('nav.home')}
              </Link>
              <a href="#reason" className="inline-flex items-center gap-3 px-8 py-4 bg-[#48C3B4] text-white font-sans tracking-widest uppercase text-sm font-semibold hover:bg-[#3ba598] transition-colors duration-300">
                {t('gcn.hero.desc')} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Razón de existir */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white" id="reason">
        <div className="w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-sm uppercase tracking-widest font-semibold mb-12 text-[#48C3B4] border-b border-gray-100 pb-4">
              {t('gcn.reason.title')}
            </h3>
            <div className="text-xl md:text-2xl font-serif leading-relaxed text-[#1A1A1A] flex flex-col gap-8">
              <p className="font-medium text-2xl md:text-3xl">{t('gcn.reason.p1')}</p>
              <p className="text-gray-600">{t('gcn.reason.p2')}</p>
              <p className="text-gray-600">{t('gcn.reason.p3')}</p>
              <p className="text-gray-800 font-medium pl-6 border-l-2 border-[#48C3B4]">{t('gcn.reason.p4')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visión y Misión */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#F9F8F6] border-y border-gray-200" id="vision">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 md:p-14 shadow-sm border border-gray-100"
          >
            <h3 className="text-sm uppercase tracking-widest font-semibold mb-8 text-[#48C3B4]">
              {t('gcn.vision.title')}
            </h3>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-[#1A1A1A]">
              "{t('gcn.vision.desc')}"
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            id="mission"
            className="bg-[#1A1A1A] text-white p-10 md:p-14 shadow-xl"
          >
            <h3 className="text-sm uppercase tracking-widest font-semibold mb-8 text-[#48C3B4]">
              {t('gcn.mission.title')}
            </h3>
            <div className="text-lg md:text-xl font-light leading-relaxed text-gray-300 flex flex-col gap-6">
              <p>{t('gcn.mission.desc1')}</p>
              <p>{t('gcn.mission.desc2')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Áreas de Actuación */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white" id="areas">
        <div className="w-full max-w-6xl mx-auto">
          <h3 className="text-sm uppercase tracking-widest font-semibold mb-16 text-gray-400 text-center">
            {t('gcn.areas.title')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {[
              { id: 1, icon: Globe2 },
              { id: 2, icon: BookOpen },
              { id: 3, icon: Lightbulb },
              { id: 4, icon: Shield }
            ].map((area) => (
              <motion.div 
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-5 p-8 border border-gray-100 bg-[#FAFAFA] hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#48C3B4]/10 flex items-center justify-center rounded-full mb-2">
                  <area.icon className="w-6 h-6 text-[#48C3B4]" strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-serif text-[#1A1A1A]">{t(`gcn.areas.${area.id}.title`)}</h4>
                <p className="text-gray-600 font-light text-lg leading-relaxed">{t(`gcn.areas.${area.id}.desc`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investigación / Publicaciones & Colaboraciones */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#1A1A1A] text-white" id="research">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            id="publications"
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm uppercase tracking-widest font-semibold mb-8 text-[#48C3B4]">
                {t('gcn.research.title')}
              </h3>
              <p className="text-2xl font-serif leading-relaxed text-gray-200 mb-8">
                {t('gcn.research.desc')}
              </p>
            </div>
            <div className="w-12 h-[2px] bg-[#48C3B4]"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            id="collaborations"
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm uppercase tracking-widest font-semibold mb-8 text-[#48C3B4]">
                {t('gcn.colab.title')}
              </h3>
              <p className="text-2xl font-serif leading-relaxed text-gray-200 mb-8">
                {t('gcn.colab.desc')}
              </p>
            </div>
            <div className="w-12 h-[2px] bg-[#48C3B4]"></div>
          </motion.div>
        </div>
      </section>

      {/* Contacto Institucional */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#F9F8F6] text-center" id="contact">
        <div className="w-full max-w-3xl mx-auto">
          <h3 className="text-sm uppercase tracking-widest font-semibold mb-8 text-[#48C3B4]">
            {t('gcn.contact.title')}
          </h3>
          <p className="text-3xl font-serif text-[#1A1A1A] mb-12">
            {t('gcn.contact.desc')}
          </p>
          <a href="mailto:info@globalcarenetwork.org" className="inline-flex items-center gap-3 px-8 py-4 bg-[#1A1A1A] text-white font-sans tracking-widest uppercase text-sm font-semibold hover:bg-black transition-colors duration-300">
            Contactar <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Footer minimalista para GCN */}
      <footer className="bg-[#111111] text-white py-16 px-6 md:px-12 relative overflow-hidden">
        {/* Map Background for Footer */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
          style={{ 
            backgroundImage: "url('/world-map.svg')", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat',
            filter: 'invert(1) brightness(1.5)'
          }}
        ></div>
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-8">
          <div className="flex flex-col leading-[1.1] font-sans font-bold tracking-tighter opacity-50">
            <span className="text-white text-lg">GLOBAL <span className="text-[#48C3B4]">CARE</span></span>
            <span className="text-white text-lg">NETWORK</span>
          </div>
          <p className="text-sm font-light text-gray-500 text-center md:text-left">&copy; {new Date().getFullYear()} Global Care Network. {t('footer.rights')}</p>
          <Link to="/" className="text-gray-400 hover:text-white transition-colors uppercase tracking-widest text-xs font-semibold">
            {t('nav.title')} (Dr. Samuel Silva)
          </Link>
        </div>
      </footer>
    </main>
  );
}
