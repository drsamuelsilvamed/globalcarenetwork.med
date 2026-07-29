import fs from 'fs';
let content = fs.readFileSync('src/components/About.tsx', 'utf8');

const target = `{/* Quién Soy */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-sm uppercase tracking-widest font-semibold mb-3 block">{t('about.tag')}</span>`;

const replacement = `{/* Quién Soy */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
        >
          <div className="md:col-span-7">
            <span className="text-sm uppercase tracking-widest font-semibold mb-3 block">{t('about.tag')}</span>`;

const target2 = `</a>
        </motion.div>
        {/* Misión Personal */}`;

const replacement2 = `</a>
          </div>
          <div className="md:col-span-5 relative">
            <div className="aspect-[3/4] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img src="/mi-foto.jpg" alt="Dr. Samuel Silva" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
        {/* Misión Personal */}`;

content = content.replace(target, replacement);
content = content.replace(target2, replacement2);
fs.writeFileSync('src/components/About.tsx', content);
