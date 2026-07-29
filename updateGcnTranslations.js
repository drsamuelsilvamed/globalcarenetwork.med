import fs from 'fs';
let content = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');

// We will replace the entire blocks for each language.
const esNew = `
    'gcn.hero.title': 'Una infraestructura internacional de investigación, innovación y salud global.',
    'gcn.hero.desc': 'Conocer GCN',
    'gcn.reason.title': 'Nuestra Razón de Existir',
    'gcn.reason.p1': 'Global Care Network existe para fortalecer el cuidado integral de las personas y organizaciones que sirven en algunos de los contextos más complejos del mundo.',
    'gcn.reason.p2': 'Creemos que la excelencia médica, la investigación, la innovación tecnológica, la bioética y la resiliencia organizacional pueden convertirse en herramientas para preservar la dignidad humana, fortalecer la continuidad del servicio y generar un impacto sostenible en comunidades vulnerables.',
    'gcn.reason.p3': 'Nuestro trabajo integra salud global, conocimiento científico, transformación digital y cooperación internacional bajo un compromiso permanente con la excelencia, la seguridad y la ética, promoviendo soluciones responsables para quienes enfrentan los mayores desafíos operacionales y humanos.',
    'gcn.reason.p4': 'Guiados por nuestro principio institucional "Cuidar sin Exponer", desarrollamos modelos de atención, investigación y consultoría que priorizan la protección de las personas, la confidencialidad de la información y la sostenibilidad de las organizaciones a las que servimos.',
    'gcn.vision.title': 'Visión',
    'gcn.vision.desc': 'Ser una organización internacional de referencia en la integración de salud global, investigación, bioética, innovación tecnológica y resiliencia, fortaleciendo a personas, equipos e instituciones mediante soluciones éticas, seguras y basadas en evidencia para los entornos de mayor complejidad del mundo.',
    'gcn.mission.title': 'Misión',
    'gcn.mission.desc1': 'Fortalecer la capacidad de personas, organizaciones e instituciones mediante investigación aplicada, formación, innovación y consultoría especializada en salud global, resiliencia, bioética, transformación digital y tecnologías para el cuidado integral.',
    'gcn.mission.desc2': 'Promovemos soluciones interdisciplinarias que integran conocimiento científico, tecnología y principios éticos para mejorar la sostenibilidad, la seguridad y el impacto de quienes trabajan en contextos remotos, vulnerables o de alta complejidad.',
`;

const ptNew = `
    'gcn.hero.title': 'Uma infraestrutura internacional de pesquisa, inovação e saúde global.',
    'gcn.hero.desc': 'Conhecer GCN',
    'gcn.reason.title': 'Nossa Razão de Existir',
    'gcn.reason.p1': 'A Global Care Network existe para fortalecer o cuidado integral de pessoas e organizações que servem em alguns dos contextos mais complexos do mundo.',
    'gcn.reason.p2': 'Acreditamos que a excelência médica, pesquisa, inovação tecnológica, bioética e resiliência organizacional podem se tornar ferramentas para preservar a dignidade humana, fortalecer a continuidade do serviço e gerar um impacto sustentável em comunidades vulneráveis.',
    'gcn.reason.p3': 'Nosso trabalho integra saúde global, conhecimento científico, transformação digital e cooperação internacional sob um compromisso permanente com a excelência, segurança e ética, promovendo soluções responsáveis para aqueles que enfrentam os maiores desafios operacionais e humanos.',
    'gcn.reason.p4': 'Guiados por nosso princípio institucional "Cuidar sem Expor", desenvolvemos modelos de atenção, pesquisa e consultoria que priorizam a proteção das pessoas, a confidencialidade das informações e a sustentabilidade das organizações a que servimos.',
    'gcn.vision.title': 'Visão',
    'gcn.vision.desc': 'Ser uma organização internacional de referência na integração da saúde global, pesquisa, bioética, inovação tecnológica e resiliência, fortalecendo pessoas, equipes e instituições através de soluções éticas, seguras e baseadas em evidências para os ambientes mais complexos do mundo.',
    'gcn.mission.title': 'Missão',
    'gcn.mission.desc1': 'Fortalecer a capacidade de pessoas, organizações e instituições através de pesquisa aplicada, formação, inovação e consultoria especializada em saúde global, resiliência, bioética, transformação digital e tecnologias para o cuidado integral.',
    'gcn.mission.desc2': 'Promovemos soluções interdisciplinares que integram conhecimento científico, tecnologia e princípios éticos para melhorar a sustentabilidade, a segurança e o impacto daqueles que trabalham em contextos remotos, vulneráveis ou de alta complexidade.',
`;

const enNew = `
    'gcn.hero.title': 'An international infrastructure for research, innovation, and global health.',
    'gcn.hero.desc': 'Discover GCN',
    'gcn.reason.title': 'Our Reason for Existing',
    'gcn.reason.p1': 'Global Care Network exists to strengthen the holistic care of people and organizations serving in some of the most complex contexts in the world.',
    'gcn.reason.p2': 'We believe that medical excellence, research, technological innovation, bioethics, and organizational resilience can become tools to preserve human dignity, strengthen service continuity, and generate a sustainable impact in vulnerable communities.',
    'gcn.reason.p3': 'Our work integrates global health, scientific knowledge, digital transformation, and international cooperation under a permanent commitment to excellence, safety, and ethics, promoting responsible solutions for those facing the greatest operational and human challenges.',
    'gcn.reason.p4': 'Guided by our institutional principle "Care without Exposing", we develop models of care, research, and consulting that prioritize the protection of people, information confidentiality, and the sustainability of the organizations we serve.',
    'gcn.vision.title': 'Vision',
    'gcn.vision.desc': 'To be a leading international organization in the integration of global health, research, bioethics, technological innovation, and resilience, strengthening people, teams, and institutions through ethical, safe, and evidence-based solutions for the world\\'s most complex environments.',
    'gcn.mission.title': 'Mission',
    'gcn.mission.desc1': 'To strengthen the capacity of people, organizations, and institutions through applied research, training, innovation, and specialized consulting in global health, resilience, bioethics, digital transformation, and technologies for holistic care.',
    'gcn.mission.desc2': 'We promote interdisciplinary solutions that integrate scientific knowledge, technology, and ethical principles to improve the sustainability, safety, and impact of those working in remote, vulnerable, or highly complex contexts.',
`;

// Helper to replace block
function replaceBlock(langContent, startKey, endKey, newContent) {
  const startIdx = langContent.indexOf(startKey);
  const endIdx = langContent.indexOf(endKey, startIdx);
  if (startIdx !== -1 && endIdx !== -1) {
    return langContent.substring(0, startIdx) + newContent + langContent.substring(endIdx);
  }
  return langContent;
}

content = replaceBlock(content, "'gcn.hero.title': 'Fortaleciendo a quienes sirven", "'gcn.areas.title':", esNew + "\n    'gcn.areas.title':");
content = replaceBlock(content, "'gcn.hero.title': 'Fortalecendo aqueles que servem", "'gcn.areas.title':", ptNew + "\n    'gcn.areas.title':");
content = replaceBlock(content, "'gcn.hero.title': 'Strengthening those who serve", "'gcn.areas.title':", enNew + "\n    'gcn.areas.title':");

fs.writeFileSync('src/context/LanguageContext.tsx', content);
