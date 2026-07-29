import { Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-black text-gray-400 py-16 border-t border-white/10">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        
        {/* Branding & Mission */}
        <div className="flex flex-col items-start gap-4">
          <h3 className="font-serif text-3xl text-white tracking-wide mb-2">Dr. Samuel Silva</h3>
          <p className="text-white uppercase tracking-widest text-sm font-semibold">{t('nav.title')}</p>
          <p className="font-sans font-light">{t('hero.pillars')}</p>
        </div>

        {/* Vision Words */}
        <div className="flex flex-col items-start md:items-end gap-1 text-right">
          <h4 className="font-serif text-xl text-white">{t('footer.m1')}</h4>
          <h4 className="font-serif text-xl text-white">{t('footer.m2')}</h4>
          <h4 className="font-serif text-xl text-white">{t('footer.m3')}</h4>
        </div>

      </div>
      
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col md:flex-row gap-2 items-center text-xs font-sans">
          <span>&copy; {currentYear} {t('hero.title')}. {t('footer.rights')}</span>
        </div>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/drsamuelsilva.med" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-white hover:text-black transition-all duration-300" aria-label="Instagram">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://www.youtube.com/@GlobalCareNetwork1" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-white hover:text-black transition-all duration-300" aria-label="YouTube">
            <Youtube className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
