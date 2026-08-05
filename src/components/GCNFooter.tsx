import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Instagram, Mail } from 'lucide-react';

interface GCNFooterProps {
  hideFounderLink?: boolean;
}

export function GCNFooter({ hideFounderLink = false }: GCNFooterProps) {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#111111] text-white py-12 px-6 md:px-12 relative overflow-hidden mt-auto border-t border-white/5">
      <div 
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" 
        style={{ 
          backgroundImage: "url('/world-map.svg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 pt-4">
        {/* Brand */}
        <div className="flex flex-col leading-[1.1] font-sans font-bold tracking-tighter opacity-50">
          <span className="text-white text-lg">MISSIONARY <span className="text-[#48C3B4]">MEDICAL</span></span>
          <span className="text-white text-lg">CARE</span>
        </div>

        {/* Social & Contact */}
        <div className="flex items-center gap-6 opacity-70">
          <a href="https://www.instagram.com/missionarymedicalcare/" target="_blank" rel="noopener noreferrer" className="hover:text-[#48C3B4] transition-colors" aria-label="Instagram">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="mailto:drsamuelsilva.med@gmail.com" className="hover:text-[#48C3B4] transition-colors" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright & Leadership */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <p className="text-sm font-light text-gray-500 text-center md:text-right">
            &copy; {new Date().getFullYear()} Missionary Medical Care. {t('footer.rights')}
          </p>
          
          {!hideFounderLink ? (
            <div className="flex flex-col text-center md:text-right gap-0.5">
              <span className="text-[10px] uppercase tracking-widest font-semibold text-gray-500">{t('gcn.founder.title')}</span>
              <Link to="/leadership" className="text-gray-400 hover:text-white transition-colors text-sm font-semibold">
                {t('gcn.founder.name')} <span className="font-light text-gray-500">({t('gcn.founder.hero.role')})</span>
              </Link>
            </div>
          ) : (
            <Link to="/" className="text-gray-400 hover:text-white transition-colors uppercase tracking-widest text-xs font-semibold">
              {t('gcn.nav.home')}
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}
