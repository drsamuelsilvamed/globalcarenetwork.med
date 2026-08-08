/**
 * fix-design-system-pass2.mjs
 * 
 * Second-pass sweeper to catch patterns that the main regex missed.
 * Targets inline gradient targets, any remaining hex literals, and
 * hero min-height standardization (at least 60vh).
 */

import { readFileSync, writeFileSync } from 'fs';
import { readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

// Second pass — catches patterns without word boundaries that slipped through
const REPLACEMENTS_PASS2 = [
  // Inline gradient with old dark color
  [/to-\[#1A1A1A\]/g,                'to-charcoal'],
  [/to-\[#1a1a1a\]/g,                'to-charcoal'],
  [/to-\[#1A365D\]/g,                'to-charcoal'],
  [/from-\[#1A1A1A\]/g,              'from-charcoal'],
  [/from-\[#1A365D\]/g,              'from-charcoal'],
  [/via-\[#1A1A1A\]/g,               'via-charcoal'],

  // Any remaining teal text selectors that might have slash opacity
  [/text-\[#48C3B4\]/g,              'text-inst-blue'],
  [/bg-\[#48C3B4\]/g,                'bg-inst-blue'],
  [/border-\[#48C3B4\]/g,            'border-inst-blue'],
  [/hover:text-\[#3ba598\]/g,        'hover:text-inst-blue'],
  [/hover:bg-\[#3ba598\]/g,          'hover:bg-inst-blue'],
  [/hover:border-\[#48C3B4\]/g,      'hover:border-inst-blue'],
  [/text-\[#0D9488\]/g,              'text-inst-blue'],
  [/bg-\[#0D9488\]/g,                'bg-inst-blue'],

  // Any remaining teal font-semibold → font-bold (institutional weight)
  // (Only in hero eyebrow labels that look like category tags)
  // Leave general font-semibold alone — only replace in tracking-widest span patterns
  
  // Remaining navy/dark blue text
  [/text-\[#2C82C9\]/g,              'text-inst-blue'],
  [/text-\[#1A365D\]/g,              'text-charcoal'],

  // hero min-height: standardize all small heroes to min-h-[60vh]
  [/min-h-\[40vh\]/g,                'min-h-[60vh]'],
  [/min-h-\[45vh\]/g,                'min-h-[60vh]'],
  [/min-h-\[50vh\]/g,                'min-h-[60vh]'],
];

const DIRS = ['src/pages'];

const SKIP = new Set([
  'AboutGCNPage.tsx',
  'GlobalCareNetworkPage.tsx',
  'Home.tsx',
  'Articulos.tsx',
  'MiTrayectoria.tsx',
  'Podcast.tsx',
  'SobreMi.tsx',
  'TrayectoriaAcademica.tsx',
]);

function processFile(filePath) {
  const original = readFileSync(filePath, 'utf-8');
  let content = original;
  for (const [pat, rep] of REPLACEMENTS_PASS2) {
    content = content.replace(pat, rep);
  }
  if (content !== original) {
    writeFileSync(filePath, content, 'utf-8');
    return true;
  }
  return false;
}

console.log('\n🔁 Design System — Pass 2 (stragglers)\n' + '='.repeat(45));

let total = 0;
for (const dir of DIRS) {
  const fullDir = join(process.cwd(), dir);
  for (const file of readdirSync(fullDir)) {
    if (!file.endsWith('.tsx')) continue;
    if (SKIP.has(file)) continue;
    const wasChanged = processFile(join(fullDir, file));
    if (wasChanged) { console.log(`  ✅ ${file}`); total++; }
  }
}

console.log(`\n✨ Pass 2 complete. ${total} additional file(s) updated.\n`);
