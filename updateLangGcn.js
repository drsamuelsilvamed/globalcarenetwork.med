import fs from 'fs';
let content = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');

const esGCN = `
    'gcn.hero.title': 'Fortaleciendo a quienes sirven en contextos de alta complejidad.',
    'gcn.hero.desc': 'Una iniciativa internacional dedicada a la salud global, bioética, innovación y resiliencia institucional.',
    'gcn.reason.title': 'Nuestra Razón de Existir',
    'gcn.reason.p1': 'Global Care Network surge para dar respuesta a los desafíos que enfrentan los equipos y organizaciones que trabajan en contextos remotos y de recursos limitados.',
    'gcn.reason.p2': 'Entendemos que el cuidado integral no solo requiere excelencia médica, sino también una profunda reflexión ética, adaptación tecnológica y estructuras de soporte resilientes.',
    'gcn.vision.title': 'Visión',
    'gcn.vision.desc': 'Ser una red de referencia global en la integración de conocimiento, tecnología y ética para el cuidado humano en contextos de vulnerabilidad.',
    'gcn.mission.title': 'Misión',
    'gcn.mission.desc': 'Capacitar, equipar y acompañar a instituciones y equipos multidisciplinarios mediante investigación, formación y consultoría especializada.',
    'gcn.areas.title': 'Áreas de Actuación',
    'gcn.areas.1.title': 'Salud Global',
    'gcn.areas.1.desc': 'Fortalecimiento de sistemas de salud, atención comunitaria y epidemiología.',
    'gcn.areas.2.title': 'Bioética',
    'gcn.areas.2.desc': 'Reflexión ética y protocolos para la toma de decisiones en situaciones complejas.',
    'gcn.areas.3.title': 'Innovación',
    'gcn.areas.3.desc': 'Aplicación de telemedicina e inteligencia artificial para democratizar el acceso a la salud.',
    'gcn.areas.4.title': 'Resiliencia Institucional',
    'gcn.areas.4.desc': 'Desarrollo de capacidades organizacionales para operar de forma sostenible.',
    'gcn.research.title': 'Investigación y Publicaciones',
    'gcn.research.desc': 'Generamos y compartimos conocimiento basado en evidencia para mejorar las prácticas de cuidado integral a nivel global.',
    'gcn.colab.title': 'Colaboraciones',
    'gcn.colab.desc': 'Trabajamos en conjunto con universidades, organizaciones y entidades comprometidas con nuestros mismos principios.',
    'gcn.contact.title': 'Contacto Institucional',
    'gcn.contact.desc': 'Para consultas sobre proyectos conjuntos, alianzas o programas de formación.',
`;

const ptGCN = `
    'gcn.hero.title': 'Fortalecendo aqueles que servem em contextos de alta complexidade.',
    'gcn.hero.desc': 'Uma iniciativa internacional dedicada à saúde global, bioética, inovação e resiliência institucional.',
    'gcn.reason.title': 'Nossa Razão de Existir',
    'gcn.reason.p1': 'A Global Care Network surge para responder aos desafios enfrentados por equipes e organizações que trabalham em contextos remotos e de recursos limitados.',
    'gcn.reason.p2': 'Entendemos que o cuidado integral requer não apenas excelência médica, mas também profunda reflexão ética, adaptação tecnológica e estruturas de suporte resilientes.',
    'gcn.vision.title': 'Visão',
    'gcn.vision.desc': 'Ser uma rede de referência global na integração de conhecimento, tecnologia e ética para o cuidado humano em contextos de vulnerabilidade.',
    'gcn.mission.title': 'Missão',
    'gcn.mission.desc': 'Capacitar, equipar e acompanhar instituições e equipes multidisciplinares através de pesquisa, formação e consultoria especializada.',
    'gcn.areas.title': 'Áreas de Atuação',
    'gcn.areas.1.title': 'Saúde Global',
    'gcn.areas.1.desc': 'Fortalecimento de sistemas de saúde, atenção comunitária e epidemiologia.',
    'gcn.areas.2.title': 'Bioética',
    'gcn.areas.2.desc': 'Reflexão ética e protocolos para tomada de decisões em situações complexas.',
    'gcn.areas.3.title': 'Inovação',
    'gcn.areas.3.desc': 'Aplicação de telemedicina e inteligência artificial para democratizar o acesso à saúde.',
    'gcn.areas.4.title': 'Resiliência Institucional',
    'gcn.areas.4.desc': 'Desenvolvimento de capacidades organizacionais para operar de forma sustentável.',
    'gcn.research.title': 'Pesquisa e Publicações',
    'gcn.research.desc': 'Geramos e compartilhamos conhecimento baseado em evidências para melhorar as práticas de cuidado integral em nível global.',
    'gcn.colab.title': 'Colaborações',
    'gcn.colab.desc': 'Trabalhamos em conjunto com universidades, organizações e entidades comprometidas com nossos mesmos princípios.',
    'gcn.contact.title': 'Contato Institucional',
    'gcn.contact.desc': 'Para dúvidas sobre projetos conjuntos, parcerias ou programas de formação.',
`;

const enGCN = `
    'gcn.hero.title': 'Strengthening those who serve in highly complex contexts.',
    'gcn.hero.desc': 'An international initiative dedicated to global health, bioethics, innovation, and institutional resilience.',
    'gcn.reason.title': 'Our Reason for Existing',
    'gcn.reason.p1': 'Global Care Network emerges to respond to the challenges faced by teams and organizations working in remote and resource-limited contexts.',
    'gcn.reason.p2': 'We understand that holistic care requires not only medical excellence, but also deep ethical reflection, technological adaptation, and resilient support structures.',
    'gcn.vision.title': 'Vision',
    'gcn.vision.desc': 'To be a global reference network in the integration of knowledge, technology, and ethics for human care in vulnerable contexts.',
    'gcn.mission.title': 'Mission',
    'gcn.mission.desc': 'To train, equip, and accompany institutions and multidisciplinary teams through research, training, and specialized consulting.',
    'gcn.areas.title': 'Areas of Action',
    'gcn.areas.1.title': 'Global Health',
    'gcn.areas.1.desc': 'Strengthening health systems, community care, and epidemiology.',
    'gcn.areas.2.title': 'Bioethics',
    'gcn.areas.2.desc': 'Ethical reflection and protocols for decision-making in complex situations.',
    'gcn.areas.3.title': 'Innovation',
    'gcn.areas.3.desc': 'Application of telemedicine and artificial intelligence to democratize access to health.',
    'gcn.areas.4.title': 'Institutional Resilience',
    'gcn.areas.4.desc': 'Development of organizational capacities to operate sustainably.',
    'gcn.research.title': 'Research and Publications',
    'gcn.research.desc': 'We generate and share evidence-based knowledge to improve holistic care practices globally.',
    'gcn.colab.title': 'Collaborations',
    'gcn.colab.desc': 'We work together with universities, organizations, and entities committed to our same principles.',
    'gcn.contact.title': 'Institutional Contact',
    'gcn.contact.desc': 'For inquiries about joint projects, partnerships, or training programs.',
`;

content = content.replace(/'gcn.nav.contact': 'Contacto',/, "'gcn.nav.contact': 'Contacto',\n" + esGCN);
content = content.replace(/'gcn.nav.contact': 'Contato',/, "'gcn.nav.contact': 'Contato',\n" + ptGCN);
content = content.replace(/'gcn.nav.contact': 'Contact',/, "'gcn.nav.contact': 'Contact',\n" + enGCN);

fs.writeFileSync('src/context/LanguageContext.tsx', content);
