import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { GCNNavigation } from '../components/GCNNavigation';
import { FileText, Award, Calendar, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ResearchPage() {
  const { t } = useLanguage();

  const publications = [
    {
      id: 1,
      title: t('gcn.research.pub1.title'),
      authors: t('gcn.research.pub1.authors'),
      abstract: t('gcn.research.pub1.abstract'),
      date: '2025',
      journal: 'GCN Journal of Clinical AI & Bioethics',
    },
    {
      id: 2,
      title: t('gcn.research.pub2.title'),
      authors: t('gcn.research.pub2.authors'),
      abstract: t('gcn.research.pub2.abstract'),
      date: '2026',
      journal: 'International Journal of Global Telehealth',
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
              {t('gcn.research.title')}
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('gcn.research.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-2xl font-serif text-gray-800 leading-relaxed max-w-3xl mx-auto font-light">
              {t('gcn.research.p1')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-24 px-6 md:px-12 bg-[#F9F8F6] border-y border-gray-200">
        <div className="w-full max-w-5xl mx-auto">
          <h2 className="text-sm uppercase tracking-widest font-semibold mb-16 text-center text-[#48C3B4]">
            {t('gcn.nav.research')}
          </h2>

          <div className="flex flex-col gap-12">
            {publications.map((pub, idx) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white p-8 md:p-12 border border-gray-100 shadow-sm rounded-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-wrap items-center gap-4 text-xs font-sans tracking-wider text-gray-400 uppercase mb-4">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {pub.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5"><FileText className="w-3.5 h-3.5" /> {pub.journal}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-[#1A1A1A] mb-4 leading-snug">
                  {pub.title}
                </h3>
                <p className="text-sm font-semibold text-[#48C3B4] mb-6">
                  {pub.authors}
                </p>
                <div className="border-t border-gray-100 pt-6">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-2">Abstract</h4>
                  <p className="text-gray-600 font-light leading-relaxed text-base md:text-lg">
                    {pub.abstract}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations Info */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <span className="w-12 h-12 bg-[#48C3B4]/10 text-[#48C3B4] rounded-full flex items-center justify-center"><Users className="w-6 h-6" /></span>
            <h2 className="text-3xl font-serif text-[#1A1A1A]">{t('gcn.colab.title')}</h2>
            <p className="text-gray-600 font-light text-lg leading-relaxed">{t('gcn.colab.desc')}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#FAFAFA] border border-gray-100 p-8 md:p-10"
          >
            <h3 className="text-xl font-serif mb-4 text-[#1A1A1A]">{t('gcn.partners.u.title')}</h3>
            <p className="text-gray-600 font-light mb-6">{t('gcn.partners.u.desc')}</p>
            <Link to="/partnerships" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#48C3B4] hover:text-[#3ba598]">
              {t('gcn.partners.form.submit')} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
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
