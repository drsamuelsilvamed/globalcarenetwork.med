import fs from 'fs';

// 1. Rewrite Hero.tsx
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
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif tracking-tight leading-[1.1] mb-2">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light mt-4 leading-relaxed">
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

// 2. Fix GCNNavigation href
let gcnNav = fs.readFileSync('src/components/GCNNavigation.tsx', 'utf8');
gcnNav = gcnNav.replace("{ label: t('gcn.nav.home'), href: '#' }", "{ label: t('gcn.nav.home'), href: '/' }");
fs.writeFileSync('src/components/GCNNavigation.tsx', gcnNav);

// 3. Fix translations
let langCtx = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');

// ES
langCtx = langCtx.replace(
  /'hero\.title': 'Medicina, Bioética e Inteligencia Artificial al servicio de la dignidad humana\.',/,
  "'hero.title': 'Medicina. Ciencia. Fe.',"
);
langCtx = langCtx.replace(
  /'hero\.p1': 'Soy médico, investigador y teólogo reformado\. Desarrollo proyectos, formación y consultoría en medicina, bioética, inteligencia artificial, salud global y cosmovisión cristiana para fortalecer a profesionales, instituciones y organizaciones comprometidas con el cuidado integral de las personas\.',/,
  "'hero.p1': 'Soy médico, investigador y teólogo reformado. Impulso proyectos, investigación, formación y consultoría en medicina, bioética, inteligencia artificial, salud global y cosmovisión cristiana, colaborando con profesionales, instituciones y organizaciones comprometidas con el cuidado integral de las personas.',"
);

// PT
langCtx = langCtx.replace(
  /'hero\.title': 'Medicina, Bioética e Inteligência Artificial a serviço da dignidade humana\.',/,
  "'hero.title': 'Medicina. Ciência. Fé.',"
);
langCtx = langCtx.replace(
  /'hero\.p1': 'Sou médico, pesquisador e teólogo reformado\. Desenvolvo projetos, treinamento e consultoria em medicina, bioética, inteligência artificial, saúde global e cosmovisão cristã para fortalecer profissionais, instituições e organizações comprometidas com o cuidado integral das pessoas\.',/,
  "'hero.p1': 'Sou médico, pesquisador e teólogo reformado. Impulsiono projetos, pesquisa, treinamento e consultoria em medicina, bioética, inteligência artificial, saúde global e cosmovisão cristã, colaborando com profissionais, instituições e organizações comprometidas com o cuidado integral das pessoas.',"
);

// EN
langCtx = langCtx.replace(
  /'hero\.title': 'Medicine, Bioethics and Artificial Intelligence serving human dignity\.',/,
  "'hero.title': 'Medicine. Science. Faith.',"
);
langCtx = langCtx.replace(
  /'hero\.p1': 'I am a physician, researcher, and reformed theologian\. I develop projects, training, and consulting in medicine, bioethics, artificial intelligence, global health, and Christian worldview to strengthen professionals, institutions, and organizations committed to the comprehensive care of people\.',/,
  "'hero.p1': 'I am a physician, researcher, and reformed theologian. I promote projects, research, training, and consulting in medicine, bioethics, artificial intelligence, global health, and Christian worldview, collaborating with professionals, institutions, and organizations committed to the comprehensive care of people.',"
);

fs.writeFileSync('src/context/LanguageContext.tsx', langCtx);
