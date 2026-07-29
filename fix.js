import fs from 'fs';
let content = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');
content = content.replace(/God's global mission/g, "God\\'s global mission");
fs.writeFileSync('src/context/LanguageContext.tsx', content);
