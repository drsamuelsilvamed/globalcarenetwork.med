import fs from 'fs';

// Read translations from LanguageContext.tsx using a simple JS eval or regex
const fileContent = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');

// We want to extract translations object. It starts with "const translations = {" and ends with "};" right before "export const LanguageProvider"
const match = fileContent.match(/const translations = (\{[\s\S]*?\n\};)\n\nexport const LanguageProvider/);
if (match) {
  // Let's clean up typescript types so we can evaluate it as pure JS
  let cleanJs = match[1]
    .replace(/export type/g, '')
    .replace(/ReactNode/g, 'any')
    .replace(/:\s*Language/g, '');
  
  // We can write it to a temp file and require/import it
  fs.writeFileSync('tempTranslations.js', 'export ' + cleanJs);
  
  import('./tempTranslations.js').then((module) => {
    const translations = module.translations;
    console.log("ES 'health.hero.title' ->", translations.ES['health.hero.title']);
    console.log("ES 'health.p1.title' ->", translations.ES['health.p1.title']);
    console.log("PT 'health.p1.title' ->", translations.PT['health.p1.title']);
    console.log("EN 'health.p1.title' ->", translations.EN['health.p1.title']);
    fs.unlinkSync('tempTranslations.js');
  }).catch((err) => {
    console.error('Error importing translations:', err);
  });
} else {
  console.log('Translations match not found');
}
