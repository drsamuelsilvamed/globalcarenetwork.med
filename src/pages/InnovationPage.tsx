import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { GCNNavigation } from '../components/GCNNavigation';
import { Layers, Database, ArrowRight, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';

export function InnovationPage() {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      icon: Database,
      title: t('gcn.innov.pr1.title'),
      desc: t('gcn.innov.pr1.desc'),
    },
    {
      id: 2,
      icon: Laptop,
      title: t('gcn.innov.pr2.title'),
      desc: t('gcn.innov.pr2.desc'),
    },
  ];

  return (
    <main className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#48C3B4] selection:text-white flex flex-col">
      <GCNNavigation />

      {/* Hero Section */}
      <section className="pt-48 pb-24 md:pt-56 md:pb-32 bg-[#1A1A1A] text-white px-6 md:px-12 relative overflow-hidden flex items-center justify-center min-h-[50vh]">
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
              {t('gcn.innov.title')}
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('gcn.innov.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="w-full max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg mx-auto text-gray-700 leading-relaxed font-light"
          >
            <p className="text-2xl font-serif text-gray-900 leading-relaxed max-w-3xl mx-auto">
              {t('gcn.innov.p1')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects list */}
      <section className="py-24 px-6 md:px-12 bg-[#F9F8F6] border-y border-gray-200">
        <div className="w-full max-w-5xl mx-auto">
          <div className="flex flex-col gap-12">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white p-8 md:p-12 border border-gray-100 shadow-sm rounded-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="w-16 h-16 bg-[#48C3B4]/10 flex items-center justify-center rounded-full text-[#48C3B4] shrink-0">
                  <project.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl md:text-3xl font-serif text-[#1A1A1A]">{project.title}</h3>
                  <p className="text-gray-600 font-light text-base md:text-lg leading-relaxed">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] text-white py-16 px-6 md:px-12 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-8">
          <div className="flex flex-col leading-[1.1] font-sans font-bold tracking-tighter opacity-50">
            <span className="text-white text-lg">GLOBAL <span className="text-[#48C3B4]">CARE</span></span>
            <span className="text-white text-lg">NETWORK</span>
          </div>
          <p className="text-sm font-light text-gray-500 text-center md:text-left">&copy; {new Date().getFullYear()} Global Care Network. {t('footer.rights')}</p>
          <Link to="/founder" className="text-gray-400 hover:text-white transition-colors uppercase tracking-widest text-xs font-semibold">
            {t('gcn.nav.founder')} (Dr. Samuel Silva)
          </Link>
        </div>
      </footer>
    </main>
  );
}
