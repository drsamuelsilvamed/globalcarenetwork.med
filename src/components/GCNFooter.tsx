import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Instagram } from 'lucide-react';

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
          <span className="text-white text-lg">GLOBAL <span className="text-[#48C3B4]">CARE</span></span>
          <span className="text-white text-lg">NETWORK</span>
        </div>

        {/* Instagram Social Icon */}
        <div className="flex items-center justify-center">
          <a 
            href="https://www.instagram.com/globalcarenetwork1/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group p-3 bg-white/5 hover:bg-[#48C3B4] rounded-full text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-sm"
            aria-label="Instagram"
          >
            <Instagram className="w-8 h-8 group-hover:animate-pulse" strokeWidth={1.5} />
          </a>
        </div>

        {/* Copyright & Leadership */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <p className="text-sm font-light text-gray-500 text-center md:text-right">
            &copy; {new Date().getFullYear()} Global Care Network. {t('footer.rights')}
          </p>
          
          {!hideFounderLink ? (
            <div className="flex flex-col text-center md:text-right gap-0.5">
              <span className="text-[10px] uppercase tracking-widest font-semibold text-gray-500">{t('gcn.founder.title')}</span>
              <Link to="/founder" className="text-gray-400 hover:text-white transition-colors text-sm font-semibold">
                {t('gcn.founder.name')} <span className="font-light text-gray-500">({t('gcn.founder.role')})</span>
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
