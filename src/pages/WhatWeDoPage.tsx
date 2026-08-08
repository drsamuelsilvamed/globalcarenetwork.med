import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { GCNNavigation } from '../components/GCNNavigation';
import { GCNFooter } from '../components/GCNFooter';
import { HeartPulse, Video, Brain, ShieldCheck, BookOpen, Lightbulb, Users, Activity } from 'lucide-react';

export function WhatWeDoPage() {
 const { t, language } = useLanguage();

 const areas = [
 {
 id: 'healthcare',
 icon: HeartPulse,
 title: 'Missionary Healthcare',
 desc: {
 ES: 'Atención primaria y de especialidades clínicas adaptadas específicamente a la salud integral de las familias misioneras en el campo.',
 PT: 'Atenção primária e de especialidades clínicas adaptadas especificamente à saúde integral das famílias missionárias em campo.',
 EN: 'Primary care and clinical specialties specifically tailored to the holistic health of missionary families in the field.'
 }
 },
 {
 id: 'telehealth',
 icon: Video,
 title: 'Telehealth',
 desc: {
 ES: 'Orientación médica remota, teletriage y segunda opinión médica a través de canales de baja conectividad.',
 PT: 'Orientação médica remota, teletriagem e segunda opinião médica por meio de canais de baixa conectividade.',
 EN: 'Remote medical guidance, teletriage, and second medical opinions through low-connectivity channels.'
 }
 },
 {
 id: 'mental_health',
 icon: Brain,
 title: 'Mental Health',
 desc: {
 ES: 'Apoyo psicológico y pastoral para la prevención del burnout, manejo del estrés y resiliencia transcultural.',
 PT: 'Apoio psicológico e pastoral para a prevenção do burnout, gestão do estresse e resiliência transcultural.',
 EN: 'Psychological and pastoral support for burnout prevention, stress management, and cross-cultural resilience.'
 }
 },
 {
 id: 'opsec',
 icon: ShieldCheck,
 title: 'Healthcare OPSEC',
 desc: {
 ES: 'Protocolos de confidencialidad y ciberseguridad médica para proteger la identidad de los obreros en zonas de riesgo.',
 PT: 'Protocolos de confidencialidade e biossegurança digital para proteger a identidade dos obreiros em zonas de risco.',
 EN: 'Confidentiality and digital medical security protocols to protect workers’ identity in high-risk zones.'
 }
 },
 {
 id: 'education',
 icon: BookOpen,
 title: 'Medical Education',
 desc: {
 ES: 'Cursos prácticos de primeros auxilios y prevención de salud familiar dirigidos a misioneros no médicos.',
 PT: 'Cursos práticos de primeiros socorros e prevenção de saúde familiar voltados a missionários não médicos.',
 EN: 'Practical first aid courses and family health prevention aimed at non-medical missionaries.'
 }
 },
 {
 id: 'research',
 icon: Lightbulb,
 title: 'Research & Innovation',
 desc: {
 ES: 'Estudio de la salud misionera en terreno para generar protocolos eficientes basados en evidencia.',
 PT: 'Estudo da saúde missionária em campo para gerar protocolos eficientes baseados em evidências.',
 EN: 'Study of missionary field health to generate efficient, evidence-based protocols.'
 }
 },
 {
 id: 'member_care',
 icon: Users,
 title: 'Member Care',
 desc: {
 ES: 'Soporte y acompañamiento integral a las familias, cónyuges e hijos en sus entornos de servicio.',
 PT: 'Suporte e acompanhamento integral às famílias, cônjuges e filhos em seus ambientes de serviço.',
 EN: 'Comprehensive support and accompaniment to families, spouses, and children in their service settings.'
 }
 },
 {
 id: 'emergency',
 icon: Activity,
 title: 'Emergency Support',
 desc: {
 ES: 'Triage de urgencias médicas y coordinación/orientación para evacuaciones sanitarias de emergencia.',
 PT: 'Triagem de urgências médicas e coordenação/orientação para evacuações de saúde de emergência.',
 EN: 'Medical emergency triage and coordination/guidance for sanitary evacuations.'
 }
 }
 ];

 return (
 <main className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#48C3B4] selection:text-white flex flex-col">
 <GCNNavigation />

 {/* Hero Section */}
 <section className="pt-40 pb-20 md:pt-48 md:pb-28 bg-[#1A1A1A] text-white px-6 md:px-12 relative overflow-hidden flex items-center justify-center min-h-[40vh]">
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
 {t('gcn.nav.what')}
 </span>
 <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading tracking-tight leading-[1.2] mb-6">
 Áreas Permanentes de Cuidado
 </h1>
 <p className="text-xl md:text-2xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
 Servicios estructurados y continuos para sostener la salud integral de quienes sirven en las naciones.
 </p>
 </motion.div>
 </div>
 </section>

 {/* Areas Grid */}
 <section className="py-20 px-6 md:px-12 bg-white">
 <div className="w-full max-w-5xl mx-auto">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 {areas.map((area, idx) => {
 const description = area.desc[language as keyof typeof area.desc] || area.desc['ES'];
 return (
 <motion.div
 key={area.id}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: idx * 0.05 }}
 className="bg-[#FAFAFA] border border-gray-100 p-8 hover:bg-white hover:shadow-md transition-all duration-300 flex gap-5 items-start rounded-sm"
 >
 <div className="w-12 h-12 bg-[#48C3B4]/10 flex items-center justify-center rounded-full text-[#48C3B4] shrink-0">
 <area.icon className="w-6 h-6" strokeWidth={1.5} />
 </div>
 <div>
 <h3 className="text-xl font-heading text-[#1A1A1A] font-semibold mb-3">{area.title}</h3>
 <p className="text-gray-600 font-light leading-relaxed text-base">{description}</p>
 </div>
 </motion.div>
 );
 })}
 </div>
 </div>
 </section>

 <GCNFooter />
 </main>
 );
}
