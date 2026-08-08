import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Mail } from 'lucide-react';

export function GCNFooterCTA() {
 const { language } = useLanguage();

 const getTranslation = (es: string, pt: string, en: string) => {
 if (language === 'PT') return pt;
 if (language === 'EN') return en;
 return es;
 };

 return (
 <section className="bg-light-gray text-charcoal py-24 px-6 md:px-12 font-body border-t border-white/20">
 <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 
 {/* Left Column: CTA */}
 <div className="space-y-8">
 <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight uppercase">
 {getTranslation('Haz la Diferencia', 'Faça a Diferença', 'Make a Difference')} <br />
 <span className="text-inst-blue">{getTranslation('Hoy Mismo.', 'Hoje Mesmo.', 'Today.')}</span>
 </h2>
 <p className="text-lg text-gray-700 font-light max-w-lg leading-relaxed">
 {getTranslation(
 'Únete a nuestra red de soporte médico y espiritual. Ya sea donando, como voluntario, o a través de tu iglesia, tú puedes ser parte de la retaguardia para los que están en el frente.',
 'Junte-se à nossa rede de suporte médico e espiritual. Seja doando, como voluntário, ou através da sua igreja, você pode fazer parte da retaguarda para os que estão na linha de frente.',
 'Join our medical and spiritual support network. Whether by donating, volunteering, or through your church, you can be part of the rearguard for those on the front lines.'
 )}
 </p>
 <div className="flex flex-col sm:flex-row gap-4 pt-4">
 <Link 
 to="/donate" 
 className="bg-mustard hover:bg-[#a07424] text-charcoal px-8 py-4 rounded-sm font-bold tracking-widest uppercase text-xs transition-colors flex justify-center items-center"
 >
 {getTranslation('Donar Ahora', 'Doar Agora', 'Donate Now')}
 </Link>
 <Link 
 to="/volunteer" 
 className="bg-transparent border border-gray-400 hover:border-inst-blue hover:text-inst-blue text-charcoal px-8 py-4 rounded-sm font-bold tracking-widest uppercase text-xs transition-colors flex justify-center items-center gap-2"
 >
 {getTranslation('Voluntariado', 'Voluntariado', 'Volunteer')} <ArrowRight className="w-4 h-4" />
 </Link>
 </div>
 </div>

 {/* Right Column: Contacto Directo */}
 <div className="bg-white border-t-4 border-mustard p-10 shadow-sm flex flex-col justify-center h-full">
 <h3 className="text-2xl font-heading font-bold mb-4 uppercase tracking-widest">
 {getTranslation('Mantente Conectado', 'Mantenha-se Conectado', 'Stay Connected')}
 </h3>
 <p className="text-gray-600 mb-10 text-sm font-light leading-relaxed">
 {getTranslation(
 'Recibe actualizaciones sobre nuestro impacto en el campo y motivos de oración. Escríbenos directamente y nos pondremos en contacto contigo.',
 'Receba atualizações sobre nosso impacto no campo e motivos de oração. Escreva-nos diretamente e entraremos em contato com você.',
 'Receive updates on our impact in the field and prayer requests. Write to us directly and we will get in touch with you.'
 )}
 </p>
 <a 
 href="mailto:missionarymedicalcare@gmail.com" 
 target="_top" 
 className="w-full bg-charcoal hover:bg-gray-800 text-white py-4 rounded-sm font-bold tracking-widest uppercase text-xs text-center transition-colors flex items-center justify-center gap-2"
 >
 <Mail className="w-4 h-4" /> {getTranslation('Enviar Correo', 'Enviar E-mail', 'Send Email')}
 </a>
 </div>

 </div>
 </section>
 );
}
