import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { GCNNavigation } from '../components/GCNNavigation';
import { GCNFooter } from '../components/GCNFooter';
import { 
  ArrowRight, 
  ArrowDown, 
  MapPin, 
  Globe2, 
  Wifi, 
  Users, 
  Brain, 
  ShieldCheck, 
  ShieldAlert,
  Compass, 
  HeartPulse, 
  BookOpen, 
  Lightbulb, 
  Activity,
  Users2,
  Landmark,
  Heart,
  HelpCircle,
  FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function GlobalCareNetworkPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#48C3B4] selection:text-white flex flex-col">
      <GCNNavigation />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 bg-[#1A1A1A] text-white px-6 md:px-12 relative overflow-hidden flex items-center justify-center min-h-[75vh]" id="#">
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A1A1A] z-0 opacity-90 pointer-events-none"></div>

        <div className="w-full max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="flex flex-col leading-[1.1] font-sans font-bold tracking-tighter mb-8">
              <span className="text-white text-3xl md:text-4xl lg:text-6xl uppercase">MISSIONARY <span className="text-[#48C3B4]">MEDICAL</span></span>
              <span className="text-white text-3xl md:text-4xl lg:text-6xl uppercase">CARE</span>
            </div>
            
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif tracking-tight leading-[1.2] mb-6 max-w-4xl text-gray-100 font-light">
              {t('gcn.hero.title')}
            </h2>

            <p className="text-base md:text-xl font-light text-gray-300 max-w-3xl mb-4 leading-relaxed">
              {t('gcn.hero.subtitle')}
            </p>

            <p className="text-base md:text-lg font-medium text-[#48C3B4] max-w-3xl mb-12 leading-relaxed italic">
              {t('gcn.hero.tagline')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
              <Link to="/about" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white text-white font-sans tracking-widest uppercase text-xs font-semibold hover:bg-white hover:text-[#1A1A1A] transition-colors duration-300">
                {t('gcn.hero.learn')} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#48C3B4] text-white font-sans tracking-widest uppercase text-xs font-semibold hover:bg-[#3ba598] transition-colors duration-300">
                {t('gcn.hero.explore')} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN 1: LA REALIDAD DEL MISIONERO */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-2">
            <span className="text-[#48C3B4] uppercase tracking-widest text-xs font-semibold mb-2 block">
              Contexto actual
            </span>
            <h3 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] leading-tight mb-6">
              {t('gcn.reality.title')}
            </h3>
            <div className="text-gray-700 font-light text-base md:text-lg leading-relaxed flex flex-col gap-6">
              <p>{t('gcn.reality.p1')}</p>
              <p>{t('gcn.reality.p2')}</p>
              <p className="font-normal text-[#1a1a1a]">{t('gcn.reality.p3')}</p>
            </div>
          </div>
          <div className="lg:col-span-3 grid grid-cols-2 gap-6 pt-4">
            {[
              { id: '1', icon: Compass, text: t('gcn.reality.icon1') },
              { id: '2', icon: Globe2, text: t('gcn.reality.icon2') },
              { id: '3', icon: Wifi, text: t('gcn.reality.icon3') },
              { id: '4', icon: Users, text: t('gcn.reality.icon4') },
              { id: '5', icon: Brain, text: t('gcn.reality.icon5') },
              { id: '6', icon: ShieldCheck, text: t('gcn.reality.icon6') }
            ].map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="flex items-center gap-4 p-5 bg-[#FDFBF7] border border-gray-150 rounded-sm hover:shadow-sm transition-all duration-300"
              >
                <div className="w-10 h-10 bg-[#48C3B4]/10 flex items-center justify-center rounded-full text-[#48C3B4] shrink-0">
                  <item.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className="font-sans text-sm font-medium text-gray-800 leading-snug">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: LOS DESAFÍOS DEL CAMPO MISIONERO */}
      <section className="py-24 px-6 md:px-12 bg-[#F9F8F6] border-y border-gray-200">
        <div className="w-full max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#48C3B4] uppercase tracking-widest text-xs font-semibold mb-2 block">
              Dificultades Reales
            </span>
            <h3 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] mb-4">
              {t('gcn.challenges.title')}
            </h3>
            <p className="text-gray-500 font-light text-base md:text-lg">
              {t('gcn.challenges.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <motion.div 
                key={num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: num * 0.05 }}
                className="bg-white p-8 border border-gray-150 rounded-sm shadow-xs hover:shadow-md hover:border-[#48C3B4]/30 transition-all duration-300 flex flex-col gap-3"
              >
                <h4 className="text-lg font-serif font-semibold text-[#1A1A1A]">
                  {t(`gcn.challenges.c${num}.title`)}
                </h4>
                <p className="text-gray-600 font-light text-sm md:text-base leading-relaxed">
                  {t(`gcn.challenges.c${num}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: FUNDAMENTO BÍBLICO */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="w-full max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="text-[#48C3B4] uppercase tracking-widest text-xs font-semibold mb-3 block">
            Base Escritural
          </span>
          <h3 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] mb-8 max-w-2xl leading-tight">
            {t('gcn.biblical.title')}
          </h3>
          
          <div className="prose prose-lg text-gray-700 font-light max-w-3xl leading-relaxed mb-12 flex flex-col gap-6">
            <p className="text-lg md:text-xl font-normal text-gray-900">
              "{t('gcn.biblical.intro')}"
            </p>
            <p className="text-sm md:text-base border-l-4 border-[#48C3B4] pl-6 text-left italic bg-[#FAFAFA] py-4 pr-4">
              {t('gcn.biblical.passage')}
            </p>
          </div>

          {/* Diagrama de Flujo Bíblico */}
          <div className="w-full mt-6 bg-[#FAFAFA] border border-gray-100 p-8 md:p-12 rounded-sm shadow-xs">
            <p className="text-xs uppercase tracking-widest font-semibold text-gray-400 mb-8">
              El Ecosistema del Cuidado Misionero
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 lg:gap-4 text-center">
              <div className="bg-[#1A1A1A] text-white px-5 py-4 w-44 font-serif font-bold text-sm tracking-wide rounded-sm">
                {t('gcn.biblical.flow1')}
              </div>
              <ArrowDown className="w-5 h-5 text-[#48C3B4] md:rotate-270" />
              <div className="bg-white border border-[#48C3B4] text-[#1A1A1A] px-5 py-4 w-44 font-sans font-semibold text-xs tracking-wider uppercase rounded-sm">
                {t('gcn.biblical.flow2')}
              </div>
              <ArrowDown className="w-5 h-5 text-[#48C3B4] md:rotate-270" />
              <div className="bg-white border border-[#48C3B4] text-[#1A1A1A] px-5 py-4 w-44 font-sans font-semibold text-xs tracking-wider uppercase rounded-sm">
                {t('gcn.biblical.flow3')}
              </div>
              <ArrowDown className="w-5 h-5 text-[#48C3B4] md:rotate-270" />
              <div className="bg-[#48C3B4] text-white px-5 py-4 w-44 font-sans font-bold text-xs tracking-wider uppercase rounded-sm">
                {t('gcn.biblical.flow4')}
              </div>
              <ArrowDown className="w-5 h-5 text-[#48C3B4] md:rotate-270" />
              <div className="bg-[#1A1A1A] text-[#48C3B4] px-5 py-4 w-48 font-serif font-bold text-sm leading-tight rounded-sm">
                {t('gcn.biblical.flow5')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: RESPUESTA */}
      <section className="py-20 bg-[#1A1A1A] text-white text-center px-6 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#48C3B4]/5 to-transparent pointer-events-none"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-[#48C3B4] uppercase tracking-widest text-xs font-semibold mb-4 block">
            {t('gcn.response.title')}
          </span>
          <h4 className="text-xl md:text-3xl font-serif font-light leading-relaxed text-gray-100 mb-6">
            {t('gcn.response.desc')}
          </h4>
        </div>
      </section>

      {/* SECCIÓN 5: CÓMO SERVIMOS */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="w-full max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#48C3B4] uppercase tracking-widest text-xs font-semibold mb-2 block">
              Áreas de Acción
            </span>
            <h3 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] mb-4">
              {t('gcn.services.title')}
            </h3>
            <p className="text-gray-500 font-light text-base md:text-lg">
              {t('gcn.services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: '1', icon: HeartPulse },
              { id: '2', icon: Brain },
              { id: '3', icon: ShieldAlert },
              { id: '4', icon: ShieldCheck },
              { id: '5', icon: BookOpen },
              { id: '6', icon: Lightbulb }
            ].map((service) => (
              <div 
                key={service.id}
                className="p-8 border border-gray-100 bg-[#FAFAFA] hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col gap-4 rounded-sm"
              >
                <div className="w-12 h-12 bg-[#48C3B4]/10 flex items-center justify-center rounded-full text-[#48C3B4] mb-2 shrink-0">
                  <service.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-serif text-[#1A1A1A] font-semibold">
                  {t(`gcn.services.s${service.id}.title`)}
                </h4>
                <p className="text-gray-600 font-light text-sm md:text-base leading-relaxed">
                  {t(`gcn.services.s${service.id}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: NUESTRO IMPACTO */}
      <section className="py-20 px-6 md:px-12 bg-[#1A1A1A] text-white">
        <div className="w-full max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#48C3B4] uppercase tracking-widest text-xs font-semibold mb-2 block">
              Misión Cumplida
            </span>
            <h3 className="text-3xl md:text-4xl font-serif mb-4 text-white">
              {t('gcn.impact.title')}
            </h3>
            <p className="text-gray-400 font-light text-base">
              {t('gcn.impact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="flex flex-col gap-2">
                <span className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#48C3B4] font-bold">
                  {t(`gcn.impact.stat${num}.val`)}
                </span>
                <span className="text-xs md:text-sm font-sans tracking-wide uppercase font-semibold text-gray-400 leading-tight">
                  {t(`gcn.impact.stat${num}.lbl`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 7: PARTICIPA */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="w-full max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#48C3B4] uppercase tracking-widest text-xs font-semibold mb-2 block">
              Tu Lugar en el Cuidado
            </span>
            <h3 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] mb-4">
              {t('gcn.participate.title')}
            </h3>
            <p className="text-gray-500 font-light text-base md:text-lg">
              {t('gcn.participate.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: 1, icon: HeartPulse },
              { num: 2, icon: Activity },
              { num: 3, icon: Landmark },
              { num: 4, icon: Users2 },
              { num: 5, icon: Lightbulb },
              { num: 6, icon: Heart }
            ].map((role) => (
              <motion.div
                key={role.num}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-8 border border-gray-150 bg-white hover:border-[#48C3B4] hover:shadow-md transition-all duration-300 flex flex-col justify-between gap-6 rounded-sm cursor-pointer"
              >
                <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 bg-[#48C3B4]/10 flex items-center justify-center rounded-full text-[#48C3B4] mb-2 shrink-0">
                    <role.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-lg font-serif font-semibold text-[#1A1A1A]">
                    {t(`gcn.participate.p${role.num}.title`)}
                  </h4>
                  <p className="text-gray-600 font-light text-sm md:text-base leading-relaxed">
                    {t(`gcn.participate.p${role.num}.desc`)}
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#48C3B4] group mt-2">
                  <span>Participar</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GCNFooter />
    </main>
  );
}
