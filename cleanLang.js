import fs from 'fs';
let langCtx = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');

langCtx = langCtx.replace(/\s*'hero\.btn2':\s*'[^']+',/g, '');
langCtx = langCtx.replace(/\s*'contacto\.btn1':\s*'[^']+',/g, '');

fs.writeFileSync('src/context/LanguageContext.tsx', langCtx);
