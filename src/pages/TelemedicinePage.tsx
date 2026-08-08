import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { GCNNavigation } from '../components/GCNNavigation';
import { WifiOff, HeartPulse, ShieldAlert, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GCNFooter } from '../components/GCNFooter';

export function TelemedicinePage() {
 const { t } = useLanguage();

 const features = [
 {
 id: 1,
 icon: WifiOff,
 title: t('gcn.telemed.f1.title'),
 desc: t('gcn.telemed.f1.desc'),
 },
 {
 id: 2,
 icon: HeartPulse,
 title: t('gcn.telemed.f2.title'),
 desc: t('gcn.telemed.f2.desc'),
 },
 {
 id: 3,
 icon: ShieldAlert,
 title: t('gcn.telemed.f3.title'),
 desc: t('gcn.telemed.f3.desc'),
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
 <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading tracking-tight leading-[1.2] mb-6">
 {t('gcn.telemed.title')}
 </h1>
 <p className="text-xl md:text-2xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
 {t('gcn.telemed.subtitle')}
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
 {t('gcn.telemed.p1')}
 </p>
 </motion.div>
 </div>
 </section>

 {/* Features Grid */}
 <section className="py-24 px-6 md:px-12 bg-[#F9F8F6] border-y border-gray-200">
 <div className="w-full max-w-6xl mx-auto">
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {features.map((feature, idx) => (
 <motion.div
 key={feature.id}
 initial={{ opacity: 0, y: 25 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: idx * 0.1 }}
 className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4"
 >
 <div className="w-12 h-12 bg-[#48C3B4]/10 flex items-center justify-center rounded-full text-[#48C3B4]">
 <feature.icon className="w-6 h-6" strokeWidth={1.5} />
 </div>
 <h3 className="text-xl font-heading text-[#1A1A1A] font-semibold">{feature.title}</h3>
 <p className="text-gray-600 font-light text-base leading-relaxed">{feature.desc}</p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 {/* Call to Action */}
 <section className="py-20 bg-[#1A1A1A] text-white text-center px-6">
 <div className="max-w-3xl mx-auto">
 <h3 className="text-2xl md:text-3xl font-heading mb-6">{t('gcn.nav.innovation')}</h3>
 <p className="text-gray-400 font-light mb-8 max-w-xl mx-auto">{t('gcn.innov.subtitle')}</p>
 <Link
 to="/innovation"
 className="inline-flex items-center gap-3 px-8 py-4 bg-[#48C3B4] text-white font-sans tracking-widest uppercase text-sm font-semibold hover:bg-[#3ba598] transition-colors duration-300"
 >
 {t('gcn.nav.innovation')} <ArrowRight className="w-4 h-4" />
 </Link>
 </div>
 </section>

 <GCNFooter />
 </main>
 );
}
