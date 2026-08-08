const fs = require('fs');

const path = 'src/context/LanguageContext.tsx';
let content = fs.readFileSync(path, 'utf8');

const newKeys = `
    // Nuevas Secciones MMC (Versión 4.0)
    'gcn.faq.title': 'Preguntas Frecuentes',
    'gcn.faq.q1': '¿Qué es Missionary Medical Care?',
    'gcn.faq.q1.a': 'Missionary Medical Care (MMC) es una red internacional cristiana dedicada al cuidado integral de misioneros, trabajadores transculturales y sus familias que sirven en contextos de difícil acceso, vulnerabilidad sanitaria o restricción geográfica e institucional...',
    'gcn.faq.q2': '¿Quiénes pueden recibir apoyo?',
    'gcn.faq.q2.a': 'Nuestros servicios están dirigidos primordialmente a: misioneros, familias misioneras, agencias misioneras, iglesias enviadoras y equipos locales.',
    'gcn.faq.q3': '¿En qué países o regiones trabajan?',
    'gcn.faq.q3.a': 'Nuestra prioridad estratégica se enfoca en la Franja de la Ventana 10/40 y zonas de alta restricción o vulnerabilidad.',
    
    'gcn.faith.title': 'Declaración de Fe',
    'gcn.faith.subtitle': 'Lo que creemos determina la forma en que servimos.',
    'gcn.faith.lausanne': 'Missionary Medical Care se adhiere formalmente y suscribe íntegramente el Pacto de Lausana (1974) como su declaración teológica, doctrinal y misiológica fundamental.',
    
    'gcn.transparency.title': 'Transparencia y Gobernanza',
    'gcn.transparency.history': 'Historia y Quiénes Somos',
    'gcn.transparency.ethics': 'Principios Éticos',
    
    'gcn.banner.title': '¿Nos ayudarás a cuidar de quienes fueron enviados?',
    'gcn.banner.p1': 'Cientos de familias misioneras sirven hoy en las fronteras más restrictivas y aisladas del planeta...',
    'gcn.banner.btn1': 'Quiero Servir como Profesional',
    'gcn.banner.btn2': 'Apoyar a Missionary Medical Care',
`;

const lines = content.split('\n');

const esEnd = lines.findIndex((l, i) => i > 14 && l.trim() === '},');
const ptEnd = lines.findIndex((l, i) => i > 250 && l.trim() === '},');
const enEnd = lines.findIndex((l, i) => i > 480 && (l.trim() === '},' || l.trim() === '}'));

// Insert bottom-up to avoid messing up line indices
if (enEnd !== -1) lines.splice(enEnd, 0, newKeys);
if (ptEnd !== -1) lines.splice(ptEnd, 0, newKeys);
if (esEnd !== -1) lines.splice(esEnd, 0, newKeys);

fs.writeFileSync(path, lines.join('\n'));
console.log('LanguageContext updated successfully.');
