import fs from 'fs';
let content = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');

// Insert new ES translations
content = content.replace(/'nav.title': 'Médico Misionero',/, 
  "'nav.title': 'Médico Misionero',\n    'nav.home': 'Inicio',\n    'nav.about': 'Sobre mí',\n    'nav.academic': 'Trayectoria Académica',\n    'nav.articles': 'Artículos',\n    'nav.podcast': 'Podcast',\n    'nav.gcn': 'Global Care Network',\n    'gcn.nav.home': 'Inicio',\n    'gcn.nav.reason': 'Nuestra razón de existir',\n    'gcn.nav.vision': 'Visión',\n    'gcn.nav.mission': 'Misión',\n    'gcn.nav.areas': 'Áreas de actuación',\n    'gcn.nav.research': 'Investigación',\n    'gcn.nav.publications': 'Publicaciones',\n    'gcn.nav.collaborations': 'Colaboraciones',\n    'gcn.nav.contact': 'Contacto',");

// Insert new PT translations
content = content.replace(/'nav.title': 'Médico Missionário',/, 
  "'nav.title': 'Médico Missionário',\n    'nav.home': 'Início',\n    'nav.about': 'Sobre mim',\n    'nav.academic': 'Trajetória Acadêmica',\n    'nav.articles': 'Artigos',\n    'nav.podcast': 'Podcast',\n    'nav.gcn': 'Global Care Network',\n    'gcn.nav.home': 'Início',\n    'gcn.nav.reason': 'Nossa razão de existir',\n    'gcn.nav.vision': 'Visão',\n    'gcn.nav.mission': 'Missão',\n    'gcn.nav.areas': 'Áreas de atuação',\n    'gcn.nav.research': 'Pesquisa',\n    'gcn.nav.publications': 'Publicações',\n    'gcn.nav.collaborations': 'Colaborações',\n    'gcn.nav.contact': 'Contato',");

// Insert new EN translations
content = content.replace(/'nav.title': 'Missionary Doctor',/, 
  "'nav.title': 'Missionary Doctor',\n    'nav.home': 'Home',\n    'nav.about': 'About me',\n    'nav.academic': 'Academic Trajectory',\n    'nav.articles': 'Articles',\n    'nav.podcast': 'Podcast',\n    'nav.gcn': 'Global Care Network',\n    'gcn.nav.home': 'Home',\n    'gcn.nav.reason': 'Our reason for existing',\n    'gcn.nav.vision': 'Vision',\n    'gcn.nav.mission': 'Mission',\n    'gcn.nav.areas': 'Areas of action',\n    'gcn.nav.research': 'Research',\n    'gcn.nav.publications': 'Publications',\n    'gcn.nav.collaborations': 'Collaborations',\n    'gcn.nav.contact': 'Contact',");

fs.writeFileSync('src/context/LanguageContext.tsx', content);
