import fs from 'fs';

let content = fs.readFileSync('src/pages/GlobalCareNetworkPage.tsx', 'utf8');

// Ensure Link and ArrowLeft are imported
if (!content.includes('import { Link } from')) {
    content = content.replace("import { motion } from 'motion/react';", "import { motion } from 'motion/react';\nimport { Link } from 'react-router-dom';");
}
if (!content.includes('ArrowLeft')) {
    content = content.replace("ArrowRight,", "ArrowRight, ArrowLeft,");
}

const targetBtn = `<a href="#reason" className="inline-flex items-center gap-3 px-8 py-4 bg-[#48C3B4] text-white font-sans tracking-widest uppercase text-sm font-semibold hover:bg-[#3ba598] transition-colors duration-300">
              {t('gcn.hero.desc')} <ArrowRight className="w-4 h-4" />
            </a>`;

const replaceBtn = `<div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link to="/" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white font-sans tracking-widest uppercase text-sm font-semibold hover:bg-white hover:text-[#1A1A1A] transition-colors duration-300">
                <ArrowLeft className="w-4 h-4" /> {t('nav.home')}
              </Link>
              <a href="#reason" className="inline-flex items-center gap-3 px-8 py-4 bg-[#48C3B4] text-white font-sans tracking-widest uppercase text-sm font-semibold hover:bg-[#3ba598] transition-colors duration-300">
                {t('gcn.hero.desc')} <ArrowRight className="w-4 h-4" />
              </a>
            </div>`;

if (content.includes(targetBtn)) {
    content = content.replace(targetBtn, replaceBtn);
} else {
    // try a more generic replacement
    const regex = /<a href="#reason"[\s\S]*?<\/a>/;
    content = content.replace(regex, replaceBtn);
}

fs.writeFileSync('src/pages/GlobalCareNetworkPage.tsx', content);
