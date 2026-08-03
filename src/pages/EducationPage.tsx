import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { GCNNavigation } from '../components/GCNNavigation';
import { BookOpen, GraduationCap, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function EducationPage() {
  const { t } = useLanguage();

  const courses = [
    {
      id: 1,
      icon: GraduationCap,
      title: t('gcn.edu.c1.title'),
      desc: t('gcn.edu.c1.desc'),
    },
    {
      id: 2,
      icon: Award,
      title: t('gcn.edu.c2.title'),
      desc: t('gcn.edu.c2.desc'),
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
              {t('gcn.edu.title')}
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('gcn.edu.subtitle')}
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
            <p className="text-2xl font-serif text-gray-800 leading-relaxed max-w-3xl mx-auto">
              {t('gcn.edu.p1')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-24 px-6 md:px-12 bg-[#F9F8F6] border-y border-gray-200">
        <div className="w-full max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {courses.map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white p-8 md:p-12 border border-gray-100 shadow-sm rounded-sm hover:shadow-md transition-all duration-300 flex flex-col gap-6"
              >
                <div className="w-12 h-12 bg-[#48C3B4]/10 flex items-center justify-center rounded-full text-[#48C3B4]">
                  <course.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif text-[#1A1A1A]">{course.title}</h3>
                <p className="text-gray-600 font-light text-base md:text-lg leading-relaxed">{course.desc}</p>
                <div className="mt-auto pt-6 border-t border-gray-50">
                  <Link to="/partnerships" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#48C3B4] hover:text-[#3ba598]">
                    Inscribirse o Consultar <ArrowRight className="w-4 h-4" />
                  </Link>
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
