import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { GCNNavigation } from '../components/GCNNavigation';
import { Lightbulb, Scale, ShieldAlert, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GCNFooter } from '../components/GCNFooter';

export function DigitalHealthPage() {
 const { t } = useLanguage();

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
 <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading tracking-tight leading-[1.2] mb-6">
 {t('gcn.ai.title')}
 </h1>
 <p className="text-xl md:text-2xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
 {t('gcn.ai.subtitle')}
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
 className="prose prose-lg mx-auto text-gray-700 leading-relaxed font-light text-center"
 >
 <p className="text-2xl font-heading text-gray-900 leading-relaxed mb-8 max-w-3xl mx-auto">
 {t('gcn.ai.p1')}
 </p>
 </motion.div>
 </div>
 </section>

 {/* Opportunities & Limits Section */}
 <section className="py-24 px-6 md:px-12 bg-[#F9F8F6] border-y border-gray-200">
 <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
 {/* Opportunities */}
 <motion.div
 initial={{ opacity: 0, x: -30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 className="bg-white p-10 border border-gray-100 shadow-sm rounded-sm flex flex-col gap-6"
 >
 <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
 <Cpu className="w-6 h-6" />
 </div>
 <h2 className="text-2xl font-heading text-[#1A1A1A]">{t('gcn.ai.opp.title')}</h2>
 <p className="text-gray-600 font-light text-lg leading-relaxed">{t('gcn.ai.opp.desc')}</p>
 </motion.div>

 {/* Limits & Bioethics */}
 <motion.div
 initial={{ opacity: 0, x: 30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 className="bg-white p-10 border border-gray-100 shadow-sm rounded-sm flex flex-col gap-6"
 >
 <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center">
 <Scale className="w-6 h-6" />
 </div>
 <h2 className="text-2xl font-heading text-[#1A1A1A]">{t('gcn.ai.lim.title')}</h2>
 <p className="text-gray-600 font-light text-lg leading-relaxed">{t('gcn.ai.lim.desc')}</p>
 </motion.div>
 </div>
 </section>

 <GCNFooter />
 </main>
 );
}
