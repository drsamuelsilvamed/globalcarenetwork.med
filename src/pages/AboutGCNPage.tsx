import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { GCNNavigation } from '../components/GCNNavigation';
import { Shield, BookOpen, Activity, Cpu, HeartPulse, Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GCNFooter } from '../components/GCNFooter';

export function AboutGCNPage() {
  const { t } = useLanguage();

  const principles = [
    {
      id: 'patient',
      icon: HeartPulse,
      title: t('gcn.about.principles.patient.title'),
      desc: t('gcn.about.principles.patient.desc'),
    },
    {
      id: 'evidence',
      icon: BookOpen,
      title: t('gcn.about.principles.evidence.title'),
      desc: t('gcn.about.principles.evidence.desc'),
    },
    {
      id: 'innovation',
      icon: Cpu,
      title: t('gcn.about.principles.innovation.title'),
      desc: t('gcn.about.principles.innovation.desc'),
    },
    {
      id: 'transparency',
      icon: Compass,
      title: t('gcn.about.principles.transparency.title'),
      desc: t('gcn.about.principles.transparency.desc'),
    },
    {
      id: 'professionalism',
      icon: Shield,
      title: t('gcn.about.principles.professionalism.title'),
      desc: t('gcn.about.principles.professionalism.desc'),
    },
  ];

  const workflowSteps = [
    t('gcn.about.work.step1'),
    t('gcn.about.work.step2'),
    t('gcn.about.work.step3'),
    t('gcn.about.work.step4'),
    t('gcn.about.work.step5'),
    t('gcn.about.work.step6')
  ];

  return (
    <main className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#48C3B4] selection:text-white flex flex-col">
      <GCNNavigation />

      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28 bg-[#1A1A1A] text-white px-6 md:px-12 relative overflow-hidden flex items-center justify-center min-h-[45vh]">
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
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.2] mb-6">
              {t('gcn.about.title')}
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('gcn.about.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview & Nuestro Enfoque */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg mx-auto text-gray-700 leading-relaxed font-light"
          >
            <p className="text-xl md:text-2xl font-serif text-gray-900 leading-relaxed mb-6">
              {t('gcn.about.p1')}
            </p>
            <p className="mb-6">{t('gcn.reason.p2')}</p>
            <p className="mb-6">{t('gcn.reason.p3')}</p>
          </motion.div>

          <hr className="border-gray-100" />

          {/* Nuestro Enfoque */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-2xl font-serif font-semibold text-[#1A1A1A]">{t('gcn.about.approach.title')}</h2>
            <p className="text-gray-700 font-light text-lg leading-relaxed">{t('gcn.about.approach.desc')}</p>
          </motion.div>
        </div>
      </section>

      {/* Cómo Trabajamos (Workflow) */}
      <section className="py-20 px-6 md:px-12 bg-[#F9F8F6] border-y border-gray-200">
        <div className="w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-10"
          >
            <h2 className="text-2xl font-serif font-semibold text-[#1A1A1A] text-center md:text-left">
              {t('gcn.about.work.title')}
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {workflowSteps.map((step, idx) => (
                <div key={idx} className="bg-white p-5 border border-gray-100 shadow-xs flex flex-col items-center text-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#48C3B4]/10 text-[#48C3B4] flex items-center justify-center text-sm font-semibold">
                    {idx + 1}
                  </span>
                  <p className="text-sm text-gray-700 font-medium leading-snug">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guiding Principles Grid */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-sm uppercase tracking-widest font-semibold mb-16 text-center text-[#48C3B4]">
            {t('gcn.about.principles.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle) => (
              <motion.div
                key={principle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 border border-gray-150 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4"
              >
                <div className="w-12 h-12 bg-[#48C3B4]/10 flex items-center justify-center rounded-full text-[#48C3B4]">
                  <principle.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-[#1A1A1A] font-semibold">{principle.title}</h3>
                <p className="text-gray-600 font-light text-base leading-relaxed">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Liderazgo (Contextual Presentation) */}
      <section className="py-20 px-6 md:px-12 bg-[#F9F8F6] border-t border-gray-200">
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-1">
            <span className="text-xs uppercase tracking-widest font-semibold text-gray-400 mb-2 block">{t('gcn.founder.title')}</span>
            <h2 className="text-3xl font-serif text-[#1A1A1A]">{t('gcn.founder.name')}</h2>
            <p className="text-gray-500 font-light text-base mt-1">{t('gcn.founder.role')}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-gray-700 font-light text-lg leading-relaxed mb-6">
              {t('gcn.founder.bio')}
            </p>
            <Link to="/founder" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#48C3B4] hover:text-[#3ba598]">
              Ver perfil completo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <GCNFooter />
    </main>
  );
}
