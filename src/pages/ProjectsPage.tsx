import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { GCNNavigation } from '../components/GCNNavigation';
import { Link } from 'react-router-dom';
import { Compass, ShieldAlert, Cpu } from 'lucide-react';

export function ProjectsPage() {
  const { t } = useLanguage();

  const getStageBadge = (stage: string) => {
    const s = stage.toLowerCase();
    if (s.includes('pilot') || s.includes('piloto')) {
      return { text: stage, color: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: '🟢' };
    }
    if (s.includes('planning') || s.includes('planificación') || s.includes('planejamento')) {
      return { text: stage, color: 'bg-amber-50 text-amber-700 border-amber-200', dot: '🟠' };
    }
    if (s.includes('concept') || s.includes('concepto') || s.includes('conceito')) {
      return { text: stage, color: 'bg-yellow-50 text-yellow-700 border-yellow-200', dot: '🟡' };
    }
    if (s.includes('development') || s.includes('desarrollo') || s.includes('desenvolvimento')) {
      return { text: stage, color: 'bg-blue-50 text-blue-700 border-blue-200', dot: '🔵' };
    }
    if (s.includes('implementation') || s.includes('implementación') || s.includes('implementação')) {
      return { text: stage, color: 'bg-purple-50 text-purple-700 border-purple-200', dot: '🟣' };
    }
    if (s.includes('completed') || s.includes('completado') || s.includes('concluído')) {
      return { text: stage, color: 'bg-green-50 text-green-700 border-green-200', dot: '✅' };
    }
    return { text: stage, color: 'bg-gray-50 text-gray-700 border-gray-200', dot: '⚪' };
  };

  const projects = [
    {
      id: 1,
      title: t('gcn.projects.p1.title'),
      problem: t('gcn.projects.p1.problem'),
      solution: t('gcn.projects.p1.solution'),
      status: t('gcn.projects.p1.status'),
      next: t('gcn.projects.p1.next'),
      impact: t('gcn.projects.p1.impact'),
      icon: Compass,
    },
    {
      id: 2,
      title: t('gcn.projects.p2.title'),
      problem: t('gcn.projects.p2.problem'),
      solution: t('gcn.projects.p2.solution'),
      status: t('gcn.projects.p2.status'),
      next: t('gcn.projects.p2.next'),
      impact: t('gcn.projects.p2.impact'),
      icon: ShieldAlert,
    },
    {
      id: 3,
      title: t('gcn.projects.p3.title'),
      problem: t('gcn.projects.p3.problem'),
      solution: t('gcn.projects.p3.solution'),
      status: t('gcn.projects.p3.status'),
      next: t('gcn.projects.p3.next'),
      impact: t('gcn.projects.p3.impact'),
      icon: Cpu,
    },
  ];

  return (
    <main className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#48C3B4] selection:text-white flex flex-col">
      <GCNNavigation />

      {/* Hero Section */}
      <section className="pt-48 pb-20 md:pt-56 md:pb-28 bg-[#1A1A1A] text-white px-6 md:px-12 relative overflow-hidden flex items-center justify-center min-h-[45vh]">
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
        <div className="w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-xl md:text-2xl font-serif text-gray-700 leading-relaxed max-w-3xl mx-auto font-light">
              {t('gcn.projects.p1')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects List with Clinical Project Framework */}
      <section className="py-20 px-6 md:px-12 bg-[#F9F8F6] border-y border-gray-200">
        <div className="w-full max-w-5xl mx-auto">
          <div className="flex flex-col gap-16">
            {projects.map((project, idx) => {
              const badge = getStageBadge(project.status);
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white border border-gray-150 shadow-sm rounded-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  {/* Card Header */}
                  <div className="p-8 md:p-12 border-b border-gray-100 bg-[#FAFAFA] flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#48C3B4]/10 flex items-center justify-center rounded-full text-[#48C3B4] shrink-0">
                        <project.icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-serif text-[#1A1A1A] font-semibold leading-snug">
                        {project.title}
                      </h3>
                    </div>
                    <div className={`inline-flex items-center gap-2 px-4 py-1.5 text-sm uppercase tracking-wider font-semibold border rounded-full self-start md:self-auto ${badge.color}`}>
                      <span>{badge.dot}</span>
                      <span>{badge.text}</span>
                    </div>
                  </div>

                  {/* Card Body (Framework) */}
                  <div className="p-8 md:p-12 flex flex-col gap-8">
                    {/* Clinical Problem */}
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-[#48C3B4] mb-3">
                        {t('gcn.projects.headers.problem')}
                      </h4>
                      <p className="text-gray-700 font-light text-base md:text-lg leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    {/* Proposed Solution */}
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-3">
                        {t('gcn.projects.headers.solution')}
                      </h4>
                      <p className="text-gray-700 font-light text-base md:text-lg leading-relaxed">
                        {project.solution}
                      </p>
                    </div>

                    {/* Expected Impact */}
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-3">
                        {t('gcn.projects.headers.impact')}
                      </h4>
                      <div className="text-gray-700 font-light text-base md:text-lg leading-relaxed whitespace-pre-line">
                        {project.impact}
                      </div>
                    </div>

                    {/* Next Step */}
                    <div className="pt-6 border-t border-gray-100 bg-gray-50/50 p-6 rounded-sm">
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-2">
                        {t('gcn.projects.headers.next')}
                      </h4>
                      <p className="text-gray-800 font-medium text-base md:text-lg leading-relaxed">
                        {project.next}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] text-white py-12 px-6 md:px-12 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-8">
          <div className="flex flex-col leading-[1.1] font-sans font-bold tracking-tighter opacity-50">
            <span className="text-white text-lg">GLOBAL <span className="text-[#48C3B4]">CARE</span></span>
            <span className="text-white text-lg">NETWORK</span>
          </div>
          <p className="text-sm font-light text-gray-500 text-center md:text-left">&copy; {new Date().getFullYear()} Global Care Network. {t('footer.rights')}</p>
          
          <div className="flex flex-col text-center md:text-left gap-1">
            <span className="text-xs uppercase tracking-widest font-semibold text-gray-500">{t('gcn.founder.title')}</span>
            <Link to="/founder" className="text-gray-400 hover:text-white transition-colors text-sm font-semibold">
              {t('gcn.founder.name')} <span className="font-light text-gray-500">({t('gcn.founder.role')})</span>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
