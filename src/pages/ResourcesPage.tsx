import { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { GCNNavigation } from '../components/GCNNavigation';
import { BookOpen, FileText, ClipboardList, GraduationCap, HardDrive, Wifi, Search, Download, ExternalLink } from 'lucide-react';
import { GCNFooter } from '../components/GCNFooter';

export function ResourcesPage() {
 const { t } = useLanguage();
 const [activeFilter, setActiveFilter] = useState<'ALL' | 'MISSIONARIES' | 'CHURCHES' | 'AGENCIES' | 'PROFESSIONALS' | 'FAMILIES'>('ALL');
 const [searchQuery, setSearchQuery] = useState('');

 const resources = [
 {
 id: 1,
 icon: ClipboardList,
 title: t('gcn.resources.item1.title'),
 desc: t('gcn.resources.item1.desc'),
 categories: ['MISSIONARIES'],
 pdfUrl: '/resources/donde-no-hay-doctor.pdf',
 coverUrl: '/resources/donde-no-hay-doctor-cover.png'
 },
 {
 id: 2,
 icon: BookOpen,
 title: t('gcn.resources.item2.title'),
 desc: t('gcn.resources.item2.desc'),
 categories: ['PROFESSIONALS', 'MISSIONARIES'],
 externalLink: 'https://idoctus.com/',
 coverUrl: '/resources/idoctus-logo.png'
 },
 {
 id: 4,
 icon: FileText,
 title: t('gcn.resources.item4.title'),
 desc: t('gcn.resources.item4.desc'),
 categories: ['PROFESSIONALS', 'MISSIONARIES'],
 externalLink: 'https://www.msdmanuals.com/home',
 coverUrl: '/resources/msd-logo.jpg'
 }
 ];

 const filteredResources = resources.filter(res => {
 const matchesFilter = activeFilter === 'ALL' || res.categories.includes(activeFilter);
 const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
 res.desc.toLowerCase().includes(searchQuery.toLowerCase());
 return matchesFilter && matchesSearch;
 });

 return (
 <main className="min-h-screen bg-light-gray font-sans selection:bg-inst-blue selection:text-white flex flex-col">
 <GCNNavigation />

 {/* Hero Section */}
 <section className="pt-40 pb-20 md:pt-48 md:pb-28 bg-charcoal text-white px-6 md:px-12 relative overflow-hidden flex items-center justify-center min-h-[60vh]">
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
 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal z-0 opacity-80 pointer-events-none"></div>

 <div className="w-full max-w-5xl mx-auto relative z-10 text-center">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 >
 <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading tracking-tight leading-[1.2] mb-6">
 {t('gcn.resources.title.header')}
 </h1>
 <p className="text-xl md:text-2xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
 {t('gcn.resources.subtitle.header')}
 </p>
 </motion.div>
 </div>
 </section>

 {/* Interactive Toolbar: Filter Tabs + Search bar */}
 <section className="py-8 px-6 md:px-12 bg-white border-b border-gray-150 sticky top-0 z-30 shadow-xs">
 <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
 {/* Tabs */}
 <div className="flex flex-wrap gap-2 justify-center">
 {[
 { key: 'ALL', label: t('gcn.resources.filter.all') },
 { key: 'MISSIONARIES', label: t('gcn.resources.filter.missionaries') },
 { key: 'CHURCHES', label: t('gcn.resources.filter.churches') },
 { key: 'AGENCIES', label: t('gcn.resources.filter.agencies') },
 { key: 'PROFESSIONALS', label: t('gcn.resources.filter.professionals') },
 { key: 'FAMILIES', label: t('gcn.resources.filter.families') }
 ].map((tab) => (
 <button
 key={tab.key}
 onClick={() => setActiveFilter(tab.key as any)}
 className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-sm border ${
 activeFilter === tab.key 
 ? 'bg-inst-blue border-inst-blue text-white shadow-xs' 
 : 'bg-white border-gray-200 text-gray-600 hover:border-gray-400'
 }`}
 >
 {tab.label}
 </button>
 ))}
 </div>

 {/* Search Input */}
 <div className="relative w-full md:w-80">
 <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
 <input
 type="text"
 placeholder={t('gcn.resources.search')}
 value={searchQuery}
 onChange={(e) => setSearchQuery(e.target.value)}
 className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-sm text-sm focus:outline-hidden focus:border-inst-blue focus:ring-1 focus:ring-[#48C3B4] transition-all bg-[#FAFAFA]"
 />
 </div>
 </div>
 </section>

 {/* Grid of resources */}
 <section className="py-16 px-6 md:px-12 bg-[#F9F8F6] flex-grow">
 <div className="w-full max-w-5xl mx-auto">
 {filteredResources.length > 0 ? (
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {filteredResources.map((res, idx) => (
 <motion.div
 key={res.id}
 initial={{ opacity: 0, y: 15 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: idx * 0.05 }}
 className="bg-white border border-gray-150 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col rounded-sm overflow-hidden h-full"
 >
 {res.coverUrl && (
 <div className="w-full aspect-[4/3] bg-white border-b border-gray-150 relative flex items-center justify-center p-6">
 <img src={res.coverUrl} alt={res.title} className="w-full h-full object-contain" />
 </div>
 )}
 <div className="p-8 flex flex-col gap-4 flex-grow">
 {!res.coverUrl && (
 <div className="w-12 h-12 bg-inst-blue/10 flex items-center justify-center rounded-full text-inst-blue shrink-0">
 <res.icon className="w-6 h-6" strokeWidth={1.5} />
 </div>
 )}
 <h3 className="text-xl font-heading text-[#1A1A1A] font-semibold">{res.title}</h3>
 <p className="text-gray-600 font-light text-base leading-relaxed">{res.desc}</p>
 
 {/* Category badges */}
 <div className="flex flex-wrap gap-1.5 mt-2">
 {res.categories.map(cat => {
 let label = cat;
 if (cat === 'MISSIONARIES') label = 'Misionero';
 if (cat === 'CHURCHES') label = 'Iglesia';
 if (cat === 'AGENCIES') label = 'Agencia';
 if (cat === 'PROFESSIONALS') label = 'Profesional';
 if (cat === 'FAMILIES') label = 'Familia';
 
 return (
 <span key={cat} className="px-2.5 py-0.5 bg-gray-150 text-[10px] text-gray-500 font-semibold tracking-wider uppercase rounded-sm">
 {label}
 </span>
 );
 })}
 </div>

 {(res as any).pdfUrl ? (
 <a 
 href={(res as any).pdfUrl} 
 target="_blank" 
 rel="noopener noreferrer"
 className="mt-auto pt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-inst-blue hover:text-inst-blue transition-colors"
 >
 <Download className="w-4 h-4" />
 Descargar PDF
 </a>
 ) : (res as any).externalLink ? (
 <a 
 href={(res as any).externalLink} 
 target="_blank" 
 rel="noopener noreferrer"
 className="mt-auto pt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-inst-blue hover:text-blue-700 transition-colors"
 >
 <ExternalLink className="w-4 h-4" />
 Visitar Sitio Web
 </a>
 ) : (
 <div className="mt-auto pt-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
 Próximamente disponible
 </div>
 )}
 </div>
 </motion.div>
 ))}
 </div>
 ) : (
 <div className="text-center py-20 bg-white border border-gray-150 rounded-sm">
 <p className="text-gray-500 font-light">No se encontraron recursos que coincidan con tu búsqueda.</p>
 </div>
 )}
 </div>
 </section>

 <GCNFooter />
 </main>
 );
}
