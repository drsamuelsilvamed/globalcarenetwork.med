import { Link } from 'react-router-dom';
import { Instagram, Mail, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function GCNFooter() {
 const { language } = useLanguage();

 const getTranslation = (es: string, pt: string, en: string) => {
 if (language === 'PT') return pt;
 if (language === 'EN') return en;
 return es;
 };

 return (
 <footer className="bg-charcoal text-white pt-24 pb-12 px-6 md:px-12 relative overflow-hidden border-t-4 border-mustard font-body">
 <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 pb-16 border-b border-white/10">
 
 {/* Col 1: Brand / Identity */}
 <div className="lg:col-span-2 space-y-6">
 <div className="flex flex-col">
 <img 
 src="/images/youtube-logo.png" 
 alt="Missionary Medical Care Logo" 
 className="h-14 object-contain brightness-0 invert self-start" 
 />
 </div>
 <p className="text-gray-400 text-sm font-light leading-relaxed max-w-sm">
 {getTranslation(
 'Red cristiana internacional que integra medicina, misión y servicio para cuidar a quienes fueron enviados.',
 'Rede cristã internacional que integra medicina, missão e serviço para cuidar de quem foi enviado.',
 'International Christian network integrating medicine, mission, and service to care for those who were sent.'
 )}
 </p>
 <div className="flex items-center gap-4 pt-2">
 <a href="https://www.instagram.com/missionarymedicalcare/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 rounded-sm flex items-center justify-center text-gray-300 hover:bg-mustard hover:text-charcoal hover:border-mustard transition-all" aria-label="Instagram">
 <Instagram size={18} />
 </a>
 <a href="mailto:missionarymedicalcare@gmail.com" className="w-10 h-10 border border-white/20 rounded-sm flex items-center justify-center text-gray-300 hover:bg-mustard hover:text-charcoal hover:border-mustard transition-all" aria-label="Email">
 <Mail size={18} />
 </a>
 </div>
 </div>

 {/* Col 2: Quiénes Somos */}
 <div className="space-y-6">
 <h4 className="font-heading font-bold text-lg text-mustard uppercase tracking-widest">{getTranslation('QUIÉNES SOMOS', 'QUEM SOMOS', 'WHO WE ARE')}</h4>
 <ul className="space-y-3 text-sm text-gray-400 font-medium">
 <li><Link to="/about" className="hover:text-white transition-colors">{getTranslation('Acerca de', 'Sobre', 'About')}</Link></li>
 <li><Link to="/board" className="hover:text-white transition-colors">{getTranslation('Junta Directiva', 'Conselho Diretor', 'Board of Directors')}</Link></li>
 <li><Link to="/transparency" className="hover:text-white transition-colors">{getTranslation('Transparencia', 'Transparência', 'Transparency')}</Link></li>
 <li><Link to="/declaracion-de-fe" className="hover:text-white transition-colors">{getTranslation('Declaración de Fe', 'Declaração de Fé', 'Statement of Faith')}</Link></li>
 </ul>
 </div>

 {/* Col 3: Qué Hacemos */}
 <div className="space-y-6">
 <h4 className="font-heading font-bold text-lg text-mustard uppercase tracking-widest">{getTranslation('QUÉ HACEMOS', 'O QUE FAZEMOS', 'WHAT WE DO')}</h4>
 <ul className="space-y-3 text-sm text-gray-400 font-medium">
 <li><Link to="/what-we-do" className="hover:text-white transition-colors">{getTranslation('Qué Hacemos', 'O Que Fazemos', 'What We Do')}</Link></li>
 <li><Link to="/community-health" className="hover:text-white transition-colors">{getTranslation('Salud Comunitaria', 'Saúde Comunitária', 'Community Health')}</Link></li>
 <li><Link to="/telemedicine" className="hover:text-white transition-colors">{getTranslation('Telemedicina', 'Telemedicina', 'Telemedicine')}</Link></li>
 <li><Link to="/education" className="hover:text-white transition-colors">{getTranslation('Educación', 'Educação', 'Education')}</Link></li>
 </ul>
 </div>

 {/* Col 4: Participa */}
 <div className="space-y-6">
 <h4 className="font-heading font-bold text-lg text-mustard uppercase tracking-widest">{getTranslation('PARTICIPA', 'PARTICIPE', 'GET INVOLVED')}</h4>
 <ul className="space-y-3 text-sm text-gray-400 font-medium">
 <li><Link to="/donate" className="hover:text-white transition-colors">{getTranslation('Donar', 'Doar', 'Donate')}</Link></li>
 <li><Link to="/volunteer" className="hover:text-white transition-colors">{getTranslation('Voluntariado', 'Voluntariado', 'Volunteer')}</Link></li>
 <li><Link to="/church-engagement" className="hover:text-white transition-colors">{getTranslation('Iglesias', 'Igrejas', 'Churches')}</Link></li>
 <li><Link to="/prayer" className="hover:text-white transition-colors">{getTranslation('Red de Oración', 'Rede de Oração', 'Prayer Network')}</Link></li>
 </ul>
 </div>

 {/* Col 5: Contacto */}
 <div className="space-y-6">
 <h4 className="font-heading font-bold text-lg text-mustard uppercase tracking-widest">{getTranslation('CONTACTO', 'CONTATO', 'CONTACT')}</h4>
 <ul className="space-y-3 text-sm text-gray-400 font-medium">
 <li>
 <a href="https://wa.me/59162439185" target="_blank" rel="noopener noreferrer" className="hover:text-mustard transition-colors font-bold text-white">
 WhatsApp (+591 62439185)
 </a>
 </li>
 <li>
 <a href="mailto:missionarymedicalcare@gmail.com" className="hover:text-inst-blue transition-colors break-all">
 missionarymedicalcare@gmail.com
 </a>
 </li>
 <li><Link to="/faq" className="hover:text-white transition-colors pt-2 block">{getTranslation('Preguntas Frecuentes', 'Perguntas Frequentes', 'FAQ')}</Link></li>
 </ul>
 </div>

 </div>

 {/* Copyright Bar */}
 <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium uppercase tracking-widest gap-4">
 <p>&copy; {new Date().getFullYear()} Missionary Medical Care. {getTranslation('Todos los derechos reservados.', 'Todos os direitos reservados.', 'All rights reserved.')}</p>
 <p className="flex items-center gap-2">
 {getTranslation('BUILT FROM SERVICE. GUIDED BY CONVICTION.', 'CONSTRUÍDA NO SERVIÇO. GUIADA PELA CONVICÇÃO.', 'BUILT FROM SERVICE. GUIDED BY CONVICTION.')}
 </p>
 </div>
 </footer>
 );
}
