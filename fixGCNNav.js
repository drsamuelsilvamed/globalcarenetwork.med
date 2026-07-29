import fs from 'fs';

let content = fs.readFileSync('src/components/GCNNavigation.tsx', 'utf8');

// Add ArrowLeft import
content = content.replace("import { Menu, X } from 'lucide-react';", "import { Menu, X, ArrowLeft } from 'lucide-react';");

// Add desktop back button
content = content.replace(
  "{/* Desktop Nav */}",
  `<Link to="/" className="hidden xl:flex items-center gap-2 text-[#48C3B4] hover:text-white transition-colors text-xs font-sans font-medium uppercase tracking-widest mr-4">\n          <ArrowLeft className="w-4 h-4" />\n          <span>{t('nav.back')}</span>\n        </Link>\n        {/* Desktop Nav */}`
);

// Add mobile back button
content = content.replace(
  "{links.map((link) => (",
  `<Link to="/" onClick={() => setIsOpen(false)} className="text-[#48C3B4] flex items-center gap-2 text-sm font-sans tracking-widest uppercase font-semibold mb-4">\n                <ArrowLeft className="w-4 h-4" />\n                <span>{t('nav.back')}</span>\n              </Link>\n              {links.map((link) => (`
);

fs.writeFileSync('src/components/GCNNavigation.tsx', content);
