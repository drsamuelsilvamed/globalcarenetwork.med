import fs from 'fs';
let content = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');
content = content.replace(/'nav\.title': 'Médico Misionero',/g, "'nav.title': 'Dr. Samuel Silva',\n    'nav.subtitle': 'Médico · Investigador · Salud Global · Bioética · Inteligencia Artificial',");
content = content.replace(/'nav\.title': 'Médico Missionário',/g, "'nav.title': 'Dr. Samuel Silva',\n    'nav.subtitle': 'Médico · Pesquisador · Saúde Global · Bioética · Inteligência Artificial',");
content = content.replace(/'nav\.title': 'Medical Missionary',/g, "'nav.title': 'Dr. Samuel Silva',\n    'nav.subtitle': 'Physician · Researcher · Global Health · Bioethics · Artificial Intelligence',");
fs.writeFileSync('src/context/LanguageContext.tsx', content);
