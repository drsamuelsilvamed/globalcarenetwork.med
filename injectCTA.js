import fs from 'fs';
import path from 'path';

const dir = 'src/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if it already has GCNFooterCTA
  if (content.includes('<GCNFooterCTA />')) {
    console.log(`Skipping ${file} (already has CTA)`);
    continue;
  }

  // Inject import if not present
  if (!content.includes('GCNFooterCTA')) {
    // find last import
    const importRegex = /import .* from '.*';\n/g;
    let match;
    let lastIndex = 0;
    while ((match = importRegex.exec(content)) !== null) {
      lastIndex = match.index + match[0].length;
    }
    
    if (lastIndex > 0) {
      const importStatement = "import { GCNFooterCTA } from '../components/GCNFooterCTA';\n";
      content = content.slice(0, lastIndex) + importStatement + content.slice(lastIndex);
    } else {
      content = "import { GCNFooterCTA } from '../components/GCNFooterCTA';\n" + content;
    }
  }

  // Inject component
  if (content.includes('<Footer />')) {
    content = content.replace(/<Footer \/>/, '<GCNFooterCTA />\n      <Footer />');
  } else if (content.includes('<GCNFooter \/>')) {
    content = content.replace(/<GCNFooter \/>/, '<GCNFooterCTA />\n      <GCNFooter />');
  } else if (content.includes('<footer')) {
    content = content.replace(/(<footer)/, '<GCNFooterCTA />\n      $1');
  } else {
    // just put it at the very end before closing tag, assuming it's </main> or </div>
    content = content.replace(/(\n\s*(<\/main>|<\/div>)\s*)$/, '\n      <GCNFooterCTA />$1');
  }

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
}
