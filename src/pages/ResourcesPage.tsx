import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { GCNNavigation } from '../components/GCNNavigation';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, ClipboardList, GraduationCap, HardDrive, Wifi } from 'lucide-react';

export function ResourcesPage() {
  const { t } = useLanguage();

  const resources = [
    {
      id: 1,
      icon: ClipboardList,
      title: t('gcn.resources.item1.title'),
      desc: t('gcn.resources.item1.desc'),
    },
    {
      id: 2,
      icon: BookOpen,
      title: t('gcn.resources.item2.title'),
      desc: t('gcn.resources.item2.desc'),
    },
    {
      id: 3,
      icon: HardDrive,
      title: t('gcn.resources.item3.title'),
      desc: t('gcn.resources.item3.desc'),
    },
    {
      id: 4,
      icon: FileText,
      title: t('gcn.resources.item4.title'),
      desc: t('gcn.resources.item4.desc'),
    },
    {
      id: 5,
      icon: GraduationCap,
      title: t('gcn.resources.item5.title'),
      desc: t('gcn.resources.item5.desc'),
    },
    {
      id: 6,
      icon: Wifi,
      title: t('gcn.resources.item6.title'),
      desc: t('gcn.resources.item6.desc'),
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
              {t('gcn.resources.title')}
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('gcn.resources.subtitle')}
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
              {t('gcn.resources.p1')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid of resources */}
      <section className="py-20 px-6 md:px-12 bg-[#F9F8F6] border-y border-gray-200">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((res, idx) => (
              <motion.div
                key={res.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="bg-white p-8 border border-gray-150 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4"
              >
                <div className="w-12 h-12 bg-[#48C3B4]/10 flex items-center justify-center rounded-full text-[#48C3B4]">
                  <res.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-[#1A1A1A] font-semibold">{res.title}</h3>
                <p className="text-gray-600 font-light text-base leading-relaxed">{res.desc}</p>
                <div className="mt-auto pt-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Próximamente disponible
                </div>
              </motion.div>
            ))}
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
