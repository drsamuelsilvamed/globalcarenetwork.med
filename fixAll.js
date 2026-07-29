import fs from 'fs';

// 1. Rewrite Hero.tsx to have the image on the left and text on the right
const heroContent = `import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative h-screen min-h-[700px] bg-brand-black text-white flex items-center overflow-hidden pt-32 md:pt-0">
      <div className="w-full max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full">
        
        {/* Image - Left */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="order-1 md:col-span-5 relative w-full h-[50vh] md:h-full flex justify-center md:justify-start items-end"
        >
          {/* Subtle gradient to fade edges if needed */}
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-brand-black to-transparent z-10 hidden md:block" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-black to-transparent z-10 md:hidden" />
          <img 
            src="/mi-foto.jpg" 
            alt="Dr. Samuel Silva" 
            className="w-full h-full object-cover object-center md:object-top filter grayscale contrast-125"
            draggable="false"
          />
        </motion.div>

        {/* Text Content - Right */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:col-span-7 flex flex-col justify-center items-start z-20 pb-16 md:pb-0 md:pl-12 lg:pl-24"
        >
          <div className="text-xl md:text-2xl text-white font-sans leading-[1.6] flex flex-col gap-6 max-w-2xl">
            <h2 className="text-gray-400 font-medium text-sm md:text-base tracking-widest uppercase mb-[-1rem]">{t('nav.subtitle')}</h2>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif tracking-tight leading-[1.1] mb-2">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light mt-4 leading-relaxed max-w-3xl">
              {t('hero.p1')}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
`;
fs.writeFileSync('src/components/Hero.tsx', heroContent);

// 2. Remove WhatsApp from Contacto.tsx
let contactoContent = fs.readFileSync('src/components/Contacto.tsx', 'utf8');
contactoContent = contactoContent.replace(
  /<a href="https:\/\/wa\.me\/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 w-full py-6 bg-green-600 text-white font-sans tracking-widest uppercase text-sm hover:bg-green-700 transition-colors">\s*<MessageCircle className="w-6 h-6" \/>\s*<span>\{t\('contacto\.btn1'\)\}<\/span>\s*<\/a>/g,
  ''
);
fs.writeFileSync('src/components/Contacto.tsx', contactoContent);

// 3. Update GCNNavigation "Inicio" link
let gcnNav = fs.readFileSync('src/components/GCNNavigation.tsx', 'utf8');
gcnNav = gcnNav.replace("{ label: t('gcn.nav.home'), href: '/' }", "{ label: t('gcn.nav.home'), href: '/global-care-network' }");
fs.writeFileSync('src/components/GCNNavigation.tsx', gcnNav);

// 4. Update Footer to include YouTube logo
let footerContent = fs.readFileSync('src/components/Footer.tsx', 'utf8');
if (!footerContent.includes('youtube.com')) {
  // Add Youtube icon to import
  footerContent = footerContent.replace("import { Instagram } from 'lucide-react';", "import { Instagram, Youtube } from 'lucide-react';");
  // Add YouTube link
  const ytLink = `
          <a href="https://www.youtube.com/@GlobalCareNetwork1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="YouTube">
            <Youtube className="w-5 h-5" />
          </a>`;
  footerContent = footerContent.replace(
    /<Instagram className="w-5 h-5" \/>\s*<\/a>/,
    `<Instagram className="w-5 h-5" />\n          </a>${ytLink}`
  );
  fs.writeFileSync('src/components/Footer.tsx', footerContent);
}

