import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { GCNNavigation } from '../components/GCNNavigation';
import { GCNFooter } from '../components/GCNFooter';
import { Eye, Target, Compass, Award, ShieldAlert, Landmark, Sparkles } from 'lucide-react';

export function AboutGCNPage() {
  const { t } = useLanguage();

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
            <p className="text-xl md:text-2xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed italic">
              "{t('gcn.about.subtitle')}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="w-full max-w-3xl mx-auto flex flex-col gap-16">
          {/* Antes de existir MMC */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4 text-center md:text-left"
          >
            <span className="text-[#48C3B4] uppercase tracking-widest text-xs font-semibold">Fundación y Origen</span>
            <h2 className="text-2xl md:text-3xl font-serif text-[#1A1A1A] font-bold">
              {t('gcn.about.history.title')}
            </h2>
            <p className="text-xl md:text-2xl font-serif font-light text-gray-800 leading-relaxed italic">
              "{t('gcn.about.history.p1')}"
            </p>
          </motion.div>

          <hr className="border-gray-100" />

          {/* La Misión de Dios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-xs uppercase tracking-widest font-semibold text-gray-400">
              {t('gcn.about.missionOfGod.title')}
            </h3>
            <p className="text-gray-700 font-light text-lg leading-relaxed">
              {t('gcn.about.missionOfGod.p1')}
            </p>
          </motion.div>

          {/* El Desafío */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4 bg-amber-50/50 border border-amber-100 p-8 rounded-sm"
          >
            <div className="flex items-center gap-3 text-amber-700">
              <ShieldAlert className="w-5 h-5 shrink-0" />
              <h3 className="text-xs uppercase tracking-widest font-semibold">
                {t('gcn.about.challenge.title')}
              </h3>
            </div>
            <p className="text-gray-700 font-light text-lg leading-relaxed">
              {t('gcn.about.challenge.p1')}
            </p>
          </motion.div>

          {/* Nuestra Respuesta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#48C3B4]">
              {t('gcn.about.response.title')}
            </h3>
            <p className="text-gray-800 font-normal text-lg leading-relaxed">
              {t('gcn.about.response.p1')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Identity Grid Section */}
      <section className="py-24 px-6 md:px-12 bg-[#F9F8F6] border-y border-gray-200">
        <div className="w-full max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#48C3B4] uppercase tracking-widest text-xs font-semibold mb-2 block">
              Pilares Organizacionales
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A]">
              {t('gcn.about.identity.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { id: 'purpose', icon: Sparkles, title: t('gcn.about.identity.purpose') },
              { id: 'mission', icon: Target, title: t('gcn.about.identity.mission') },
              { id: 'vision', icon: Eye, title: t('gcn.about.identity.vision') },
              { id: 'values', icon: Award, title: t('gcn.about.identity.values') }
            ].map((pillar) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-gray-150 p-8 rounded-sm shadow-xs flex gap-5 items-start"
              >
                <div className="w-12 h-12 bg-[#48C3B4]/10 flex items-center justify-center rounded-full text-[#48C3B4] shrink-0">
                  <pillar.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold text-[#1A1A1A] mb-2">{pillar.title}</h3>
                  <p className="text-gray-600 font-light text-base leading-relaxed">
                    {t(`gcn.about.identity.${pillar.id}.desc`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gobernanza */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-white border border-gray-150 p-8 md:p-12 rounded-sm shadow-xs flex flex-col md:flex-row gap-8 items-start md:items-center"
          >
            <div className="w-16 h-16 bg-[#48C3B4]/10 flex items-center justify-center rounded-full text-[#48C3B4] shrink-0">
              <Landmark className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-serif font-semibold text-[#1A1A1A] mb-3">
                {t('gcn.about.identity.governance')}
              </h3>
              <p className="text-gray-600 font-light text-base md:text-lg leading-relaxed">
                {t('gcn.about.identity.governance.desc')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <GCNFooter />
    </main>
  );
}
