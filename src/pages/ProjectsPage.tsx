import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { GCNNavigation } from '../components/GCNNavigation';
import { Compass, ShieldAlert, Cpu } from 'lucide-react';
import { GCNFooter } from '../components/GCNFooter';

export function ProjectsPage() {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: t('gcn.projects.p1.title'),
      problem: t('gcn.projects.p1.problem'),
      affectation: t('gcn.projects.p1.affectation'),
      solution: t('gcn.projects.p1.solution'),
      impact: t('gcn.projects.p1.impact'),
      icon: Compass,
      area: 'Telehealth'
    },
    {
      id: 2,
      title: t('gcn.projects.p2.title'),
      problem: t('gcn.projects.p2.problem'),
      affectation: t('gcn.projects.p2.affectation'),
      solution: t('gcn.projects.p2.solution'),
      impact: t('gcn.projects.p2.impact'),
      icon: ShieldAlert,
      area: 'Missionary Healthcare'
    },
    {
      id: 3,
      title: t('gcn.projects.p3.title'),
      problem: t('gcn.projects.p3.problem'),
      affectation: t('gcn.projects.p3.affectation'),
      solution: t('gcn.projects.p3.solution'),
      impact: t('gcn.projects.p3.impact'),
      icon: Cpu,
      area: 'Healthcare OPSEC'
    },
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
            <span className="text-[#48C3B4] uppercase tracking-widest text-xs font-semibold mb-2 block">
              Iniciativas en Desarrollo
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.2] mb-6">
              {t('gcn.projects.title')}
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('gcn.projects.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="w-full max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl md:text-2xl font-serif text-gray-700 leading-relaxed max-w-3xl mx-auto font-light">
              {t('gcn.projects.intro')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-20 px-6 md:px-12 bg-[#F9F8F6] border-y border-gray-200">
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex flex-col gap-16">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white border border-gray-150 shadow-sm rounded-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                {/* Header */}
                <div className="p-8 md:p-10 border-b border-gray-100 bg-[#FAFAFA] flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#48C3B4]/10 flex items-center justify-center rounded-full text-[#48C3B4] shrink-0">
                      <project.icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-serif text-[#1A1A1A] font-semibold leading-snug">
                        {project.title}
                      </h3>
                      <span className="text-xs uppercase tracking-widest font-semibold text-gray-400 mt-1 block">
                        Área: {project.area}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col gap-8">
                  {/* Qué problema real resuelve */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#48C3B4] mb-2">
                      {t('gcn.projects.headers.problem')}
                    </h4>
                    <p className="text-gray-700 font-light text-base md:text-lg leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Por qué afecta la permanencia del misionero */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-amber-600 mb-2">
                      {t('gcn.projects.headers.affectation')}
                    </h4>
                    <p className="text-gray-700 font-light text-base md:text-lg leading-relaxed">
                      {project.affectation}
                    </p>
                  </div>

                  {/* Cuál es la solución propuesta */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-2">
                      {t('gcn.projects.headers.solution')}
                    </h4>
                    <p className="text-gray-700 font-light text-base md:text-lg leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  {/* Cuál es el impacto esperado */}
                  <div className="pt-6 border-t border-gray-100 bg-[#FAFAFA] p-6 rounded-sm">
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-800 mb-2">
                      {t('gcn.projects.headers.impact')}
                    </h4>
                    <div className="text-gray-700 font-light text-base md:text-lg leading-relaxed whitespace-pre-line">
                      {project.impact}
                    </div>
                  </div>
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
