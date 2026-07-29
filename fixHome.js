import fs from 'fs';
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// replace all multiple imports of GlobalCareNetwork with one
content = content.replace(/import \{ GlobalCareNetwork \} from "\.\.\/components\/GlobalCareNetwork";\n/g, '');
content = content.replace(/import \{ About \}/, "import { About } from '../components/About';\nimport { GlobalCareNetwork } from '../components/GlobalCareNetwork';");

// replace all multiple <GlobalCareNetwork /> usages with one
content = content.replace(/<GlobalCareNetwork \/>\n      /g, '');
content = content.replace(/<PodcastPlaceholder \/>/, "<PodcastPlaceholder />\n      <GlobalCareNetwork />");

fs.writeFileSync('src/pages/Home.tsx', content);
