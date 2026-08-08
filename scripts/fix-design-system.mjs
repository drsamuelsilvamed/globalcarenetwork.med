/**
 * fix-design-system.mjs
 * 
 * Safe, line-by-line replacement script.
 * Replaces OLD Tailwind/inline color classes with the NEW institutional design system.
 * 
 * SAFETY: Uses .replace() on each file's string content.
 *         Never collapses or joins lines - preserves all newlines.
 * 
 * MMC Design System Tokens (defined in tailwind.config.js):
 *   charcoal    = #252525 (dark bg)
 *   inst-blue   = #0A4D8E (primary accent)
 *   mustard     = #C4922A (secondary accent)
 *   light-gray  = #EFE8DD (light bg)
 *   white       = #FFFFFF
 */

import { readFileSync, writeFileSync } from 'fs';
import { readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

// ============================================================
// REPLACEMENT MAP: [old_regex, new_string]
// Order: most specific FIRST to avoid double-replacing.
// ============================================================
const REPLACEMENTS = [
  // ---- SELECTION COLORS ----
  [/selection:bg-\[#48C3B4\]/g,            'selection:bg-inst-blue'],
  [/selection:text-black/g,                 'selection:text-white'],

  // ---- BACKGROUND COLORS: OLD DARK → charcoal ----
  [/\bbg-\[#1A365D\]/g,                    'bg-charcoal'],
  [/\bbg-\[#1a365d\]/g,                    'bg-charcoal'],
  [/\bbg-\[#1A1A1A\]/g,                    'bg-charcoal'],
  [/\bbg-\[#0D0D0D\]/g,                    'bg-charcoal'],
  [/\bbg-\[#111827\]/g,                    'bg-charcoal'],
  [/\bbg-\[#1e293b\]/g,                    'bg-charcoal'],
  [/\bbg-\[#1E293B\]/g,                    'bg-charcoal'],
  [/\bbg-\[#1e3a5f\]/g,                    'bg-charcoal'],
  [/\bbg-\[#1E3A5F\]/g,                    'bg-charcoal'],
  [/\bbg-gray-900\b/g,                     'bg-charcoal'],
  [/\bbg-gray-800\b/g,                     'bg-charcoal'],
  [/\bbg-slate-900\b/g,                    'bg-charcoal'],
  [/\bbg-slate-800\b/g,                    'bg-charcoal'],

  // ---- BACKGROUND COLORS: OLD LIGHT → light-gray or white ----
  [/\bbg-\[#FDFBF7\]/g,                    'bg-light-gray'],
  [/\bbg-\[#F9FAFB\]/g,                    'bg-light-gray'],
  [/\bbg-\[#F5F0EA\]/g,                    'bg-light-gray'],
  [/\bbg-gray-50\b/g,                      'bg-light-gray'],
  [/\bbg-gray-100\b/g,                     'bg-light-gray'],
  [/\bbg-slate-50\b/g,                     'bg-light-gray'],
  [/\bbg-slate-100\b/g,                    'bg-light-gray'],

  // ---- TEAL ACCENT (#48C3B4, #3ba598, #0D9488) → inst-blue ----
  [/\bbg-\[#48C3B4\]\/10\b/g,              'bg-inst-blue/10'],
  [/\bbg-\[#48C3B4\]\/20\b/g,              'bg-inst-blue/20'],
  [/\bbg-\[#48C3B4\]\b/g,                  'bg-inst-blue'],
  [/\btext-\[#48C3B4\]\b/g,                'text-inst-blue'],
  [/\bborder-\[#48C3B4\]\/30\b/g,          'border-inst-blue/30'],
  [/\bborder-\[#48C3B4\]\b/g,              'border-inst-blue'],
  [/\bring-\[#48C3B4\]\b/g,                'ring-inst-blue'],
  [/\bhover:bg-\[#48C3B4\]\b/g,            'hover:bg-inst-blue'],
  [/\bhover:bg-\[#3ba598\]\b/g,            'hover:bg-inst-blue'],
  [/\bhover:text-\[#48C3B4\]\b/g,          'hover:text-inst-blue'],
  [/\bhover:text-\[#3ba598\]\b/g,          'hover:text-inst-blue'],
  [/\bhover:border-\[#48C3B4\]\/30\b/g,    'hover:border-inst-blue/30'],
  [/\bfocus:ring-\[#48C3B4\]\b/g,          'focus:ring-inst-blue'],
  [/\bfrom-\[#48C3B4\]\b/g,                'from-inst-blue'],
  [/\bto-\[#48C3B4\]\b/g,                  'to-inst-blue'],
  [/\bvia-\[#48C3B4\]\b/g,                 'via-inst-blue'],
  // Teal variant #0D9488
  [/\bbg-\[#0D9488\]\b/g,                  'bg-inst-blue'],
  [/\btext-\[#0D9488\]\b/g,                'text-inst-blue'],
  [/\bborder-\[#0D9488\]\b/g,              'border-inst-blue'],
  [/\bhover:bg-\[#0D9488\]\b/g,            'hover:bg-inst-blue'],

  // ---- LEGACY BLUE (#2563EB, blue-*) → inst-blue ----
  [/\bbg-\[#2563EB\]\b/g,                  'bg-inst-blue'],
  [/\btext-\[#2563EB\]\b/g,                'text-inst-blue'],
  [/\bborder-\[#2563EB\]\b/g,              'border-inst-blue'],
  [/\bhover:bg-\[#2563EB\]\b/g,            'hover:bg-inst-blue'],
  [/\bbg-\[#2C82C9\]\b/g,                  'bg-inst-blue'],
  [/\btext-\[#2C82C9\]\b/g,                'text-inst-blue'],
  [/\bborder-\[#2C82C9\]\b/g,              'border-inst-blue'],
  [/\bbg-blue-600\b/g,                     'bg-inst-blue'],
  [/\bbg-blue-700\b/g,                     'bg-inst-blue'],
  [/\bbg-blue-500\b/g,                     'bg-inst-blue'],
  [/\btext-blue-600\b/g,                   'text-inst-blue'],
  [/\btext-blue-500\b/g,                   'text-inst-blue'],
  [/\bborder-blue-600\b/g,                 'border-inst-blue'],
  [/\bhover:bg-blue-700\b/g,               'hover:bg-inst-blue'],

  // ---- TEXT COLORS: OLD NAVY → charcoal ----
  [/\btext-\[#1A365D\]\b/g,                'text-charcoal'],
  [/\btext-\[#1a365d\]\b/g,                'text-charcoal'],
  [/\btext-\[#1e3a5f\]\b/g,                'text-charcoal'],
  [/\btext-\[#1E3A5F\]\b/g,                'text-charcoal'],

  // ---- PINK/MAGENTA (#E91E63) → mustard (institution replaces garish colors) ----
  [/\bbg-\[#E91E63\]\b/g,                  'bg-inst-blue'],
  [/\btext-\[#E91E63\]\b/g,                'text-mustard'],
  [/\bborder-\[#E91E63\]\b/g,              'border-mustard'],
  [/\bhover:bg-\[#E91E63\]\b/g,            'hover:bg-inst-blue'],

  // ---- GOLD VARIANTS (#B8872C, #B8900A, #D4A017, #C9951C) → mustard ----
  [/\btext-\[#B8872C\]\b/g,                'text-mustard'],
  [/\btext-\[#B8900A\]\b/g,                'text-mustard'],
  [/\btext-\[#D4A017\]\b/g,                'text-mustard'],
  [/\btext-\[#C9951C\]\b/g,                'text-mustard'],
  [/\bbg-\[#B8872C\]\b/g,                  'bg-mustard'],
  [/\bbg-\[#B8900A\]\b/g,                  'bg-mustard'],
  [/\bborder-\[#B8872C\]\b/g,              'border-mustard'],
  [/\btext-amber-500\b/g,                  'text-mustard'],
  [/\btext-yellow-500\b/g,                 'text-mustard'],
  [/\bbg-amber-500\b/g,                    'bg-mustard'],
  [/\bborder-amber-500\b/g,               'border-mustard'],

  // ---- FONT FAMILIES ----
  [/\bfont-institutional\b/g,              'font-heading'],
  [/\bfont-body\b/g,                       'font-sans'],
  [/\bfont-opsec\b/g,                      'font-sans'],

  // ---- ROUNDED CORNERS (remove excess rounding — institutional = rounded-sm) ----
  // Note: rounded-full stays for circles/avatars
  [/\brounded-2xl\b/g,                     'rounded-sm'],
  [/\brounded-3xl\b/g,                     'rounded-sm'],
  [/\brounded-xl\b/g,                      'rounded-sm'],
  [/\brounded-lg\b/g,                      'rounded-sm'],
  [/\brounded-md\b/g,                      'rounded-sm'],

  // ---- GLASSMORPHISM → FLAT ----
  [/ backdrop-blur-md\b/g,                 ''],
  [/ backdrop-blur-sm\b/g,                 ''],
  [/ backdrop-blur-lg\b/g,                 ''],
  [/\bbackdrop-blur-md\b/g,               ''],
  [/\bbackdrop-blur-sm\b/g,               ''],
  [/\bbackdrop-blur-lg\b/g,               ''],
  [/\bbg-white\/10\b/g,                    'bg-white/5'],
  [/\bbg-white\/20\b/g,                    'bg-charcoal/20'],
  [/\bbg-black\/20\b/g,                    'bg-charcoal/20'],
  [/\bbg-black\/40\b/g,                    'bg-charcoal/40'],
  [/\bbg-black\/50\b/g,                    'bg-charcoal/50'],
  [/\bbg-black\/60\b/g,                    'bg-charcoal/60'],
  [/\bbg-gray-900\/80\b/g,                 'bg-charcoal'],
  [/\bbg-gray-900\/60\b/g,                 'bg-charcoal/60'],

  // ---- SELECTION COLOR for main wrapper (standardize) ----
  // Ensure any page that has the old selection pattern but missed the top rule
  [/selection:bg-\[#[0-9A-Fa-f]{6}\]/g,   'selection:bg-inst-blue'],
];

// ============================================================
// FILES / DIRECTORIES
// ============================================================

const DIRS_TO_PROCESS = [
  'src/pages',
];

// Files to skip (already fully updated to new design system)
const SKIP_FILES = new Set([
  'AboutGCNPage.tsx',
  'GlobalCareNetworkPage.tsx',
  'Home.tsx',
  'Articulos.tsx',
  'MiTrayectoria.tsx',
  'Podcast.tsx',
  'SobreMi.tsx',
  'TrayectoriaAcademica.tsx',
]);

// ============================================================
// PROCESSOR
// ============================================================

function processFile(filePath, fileName) {
  const originalContent = readFileSync(filePath, 'utf-8');
  let content = originalContent;

  for (const [pattern, replacement] of REPLACEMENTS) {
    content = content.replace(pattern, replacement);
  }

  if (content !== originalContent) {
    writeFileSync(filePath, content, 'utf-8');
    return true;
  }
  return false;
}

function processDir(dir) {
  const files = readdirSync(dir);
  let changed = 0;
  let skipped = 0;
  const changedFiles = [];

  for (const file of files) {
    const fullPath = join(dir, file);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) continue;
    if (extname(file) !== '.tsx' && extname(file) !== '.tsx') continue;
    if (!file.endsWith('.tsx')) continue;

    if (SKIP_FILES.has(file)) {
      console.log(`  ⏭  Skipped (already updated): ${file}`);
      skipped++;
      continue;
    }

    const wasChanged = processFile(fullPath, file);
    if (wasChanged) {
      console.log(`  ✅ Updated: ${file}`);
      changedFiles.push(file);
      changed++;
    } else {
      console.log(`  ·  No changes needed: ${file}`);
    }
  }

  return { changed, skipped, changedFiles };
}

// ============================================================
// MAIN
// ============================================================

console.log('\n🎨 MMC Design System — Safe Class Migration Script');
console.log('='.repeat(55));
console.log('Replacing old color classes with institutional tokens...\n');

const basePath = process.cwd();
let totalChanged = 0;
const allChangedFiles = [];

for (const dir of DIRS_TO_PROCESS) {
  const fullDir = join(basePath, dir);
  console.log(`📁 ${dir}/`);
  const { changed, changedFiles } = processDir(fullDir);
  totalChanged += changed;
  allChangedFiles.push(...changedFiles);
}

console.log('\n' + '='.repeat(55));
if (totalChanged === 0) {
  console.log('\n✓ No changes needed. All files are up to date.\n');
} else {
  console.log(`\n✨ Done! ${totalChanged} file(s) updated:`);
  allChangedFiles.forEach(f => console.log(`   - ${f}`));
  console.log('\n⚡ Running validation: npm run build\n');
}
