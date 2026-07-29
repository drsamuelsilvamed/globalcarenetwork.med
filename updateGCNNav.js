import fs from 'fs';
let content = fs.readFileSync('src/components/GCNNavigation.tsx', 'utf8');
content = content.replace(
  "{ label: t('gcn.nav.home'), href: '#' },",
  "{ label: t('gcn.nav.home'), href: '#' },\n    { label: t('gcn.nav.history'), href: '/global-care-network/historia' },"
);
fs.writeFileSync('src/components/GCNNavigation.tsx', content);
