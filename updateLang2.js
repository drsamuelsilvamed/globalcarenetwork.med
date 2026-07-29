import fs from 'fs';

const content = `import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ES' | 'PT' | 'EN';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ES: {
    'nav.who': 'Quién soy',
    'nav.what': 'Qué hago',
    'nav.contact': 'Contacto',
    'nav.title': 'Médico Misionero',
    
    'hero.title': 'Medicina, Bioética e Inteligencia Artificial al servicio de la dignidad humana.',
    'hero.pillars': 'Medicina · Misión · Raciocinio Bíblico',
    'hero.p1': 'Soy médico, investigador y teólogo reformado. Desarrollo proyectos, formación y consultoría en medicina, bioética, inteligencia artificial, salud global y cosmovisión cristiana para fortalecer a profesionales, instituciones y organizaciones comprometidas con el cuidado integral de las personas.',
    'hero.btn1': 'Conversemos',
    'hero.btn2': 'Contactar por WhatsApp',
    
    'colab.tag': 'Áreas de colaboración',
    'colab.1.title': 'Formación',
    'colab.1.desc': 'Diseño y desarrollo de cursos, seminarios y programas de capacitación para profesionales, universidades, iglesias y organizaciones.',
    'colab.2.title': 'Consultoría',
    'colab.2.desc': 'Asesoría estratégica en bioética, inteligencia artificial, salud digital, telemedicina y salud global.',
    'colab.3.title': 'Conferencias',
    'colab.3.desc': 'Participación en congresos, eventos académicos, universidades, iglesias y organizaciones.',
    'colab.4.title': 'Investigación y Proyectos Internacionales',
    'colab.4.desc': 'Desarrollo de iniciativas de investigación, innovación y cooperación internacional en medicina, salud global, bioética e inteligencia artificial.',

    'gcn.tag': 'Iniciativa',
    'gcn.title': 'Global Care Network',
    'gcn.desc': 'Global Care Network es una iniciativa internacional dedicada al fortalecimiento de la salud global, la telemedicina, la bioética, la resiliencia y la innovación para organizaciones y equipos que trabajan en contextos remotos y de alta complejidad.',
    'gcn.btn': 'Conocer Global Care Network',

    'about.tag': 'Quién soy',
    'about.title': 'Una vocación entre la medicina y la misión',
    'about.p1': 'Soy médico, investigador y teólogo reformado.',
    'about.p2': 'Durante más de trece años he servido en Bolivia desarrollando proyectos de salud, formación y misión en comunidades rurales y contextos con acceso limitado a recursos.',
    'about.p3': 'Mi trabajo integra medicina, bioética, salud global, inteligencia artificial y cosmovisión cristiana con el propósito de fortalecer personas, instituciones y organizaciones comprometidas con el servicio integral.',
    'about.btn': 'Conocer mi trayectoria',
    
    'about.m.tag': 'Misión Personal',
    'about.m.title': 'Mi llamado',
    'about.m.p1': 'Creo que Dios sigue llamando a hombres y mujeres a servir a las naciones.',
    'about.m.p2': 'La medicina fue una de las herramientas que puso en mis manos para responder a ese llamado.',
    'about.m.p3': 'Mi misión consiste en ayudar a personas, iglesias y organizaciones a integrar salud, fe y misión para el avance del Reino de Dios.',
    'about.m.p4': 'Ya sea en una consulta médica, una conferencia, una iglesia local o un proyecto de telemedicina, mi objetivo es el mismo:',
    'about.m.p5': 'Servir personas.',
    'about.m.p6': 'Formar discípulos.',
    'about.m.p7': 'Glorificar a Cristo.',
    
    'about.t.tag': 'Trayectoria',
    'about.t.title': 'Más de una década sirviendo en el campo',
    'about.t.p1': 'Mi experiencia profesional se desarrolló principalmente en comunidades rurales y contextos de escasos recursos.',
    'about.t.p2': 'Esa realidad me enseñó una convicción que continúa guiando todo mi trabajo:',
    'about.t.quote': 'La calidad de la atención médica no debería depender del lugar donde una persona nace.',
    'about.t.p3': 'Esta visión impulsó mi interés por la salud comunitaria, la telesalud, la innovación médica y la formación de líderes comprometidos con el servicio cristiano.',
    'about.t.p4': 'Actualmente continúo desarrollando iniciativas que buscan unir excelencia clínica, tecnología y misión para servir donde las necesidades son mayores.',

    'quehago.tag': 'Qué Hago',
    'quehago.title': 'Áreas de impacto',
    'quehago.a1.title': 'Salud Global',
    'quehago.a1.desc': 'Impulsando iniciativas de salud comunitaria, telesalud, innovación médica y fortalecimiento de capacidades en contextos de acceso limitado.',
    'quehago.a2.title': 'Bioética',
    'quehago.a2.desc': 'Promoviendo una reflexión ética sobre los desafíos contemporáneos de la medicina, la biotecnología y la inteligencia artificial.',
    'quehago.a3.title': 'Inteligencia Artificial',
    'quehago.a3.desc': 'Investigación, formación y consultoría sobre el uso responsable de la IA aplicada a la salud.',
    'quehago.a4.title': 'Cosmovisión Cristiana',
    'quehago.a4.desc': 'Desarrollando recursos, conferencias y formación para integrar fe, ciencia y cultura desde una perspectiva bíblica.',
    'quehago.areas': 'Áreas de interés',

    'formacion.tag': 'Trayectoria Académica',
    'formacion.title': 'Aprendizaje continuo',
    'formacion.p1': 'La formación continua forma parte de mi compromiso con la excelencia profesional, la investigación y el servicio.',
    'formacion.p2': 'Mi trayectoria integra medicina, salud global, salud digital, telemedicina, bioética, inteligencia artificial y estudios teológicos, con un enfoque orientado al desarrollo de proyectos internacionales y a la formación de personas e instituciones.',
    'formacion.p3': 'He realizado programas de formación y certificaciones en universidades, organismos internacionales y empresas tecnológicas de referencia mundial, manteniendo un proceso permanente de actualización profesional.',
    'formacion.areas': 'Áreas principales de formación',
    'formacion.a1': 'Medicina',
    'formacion.a2': 'Salud Global',
    'formacion.a3': 'Salud Digital',
    'formacion.a4': 'Telemedicina',
    'formacion.a5': 'Bioética',
    'formacion.a6': 'Inteligencia Artificial',
    'formacion.a7': 'Teología',
    'formacion.a8': 'Cosmovisión Cristiana',
    'formacion.btn': 'Explorar mi Trayectoria Académica',

    'filosofia.tag': 'Filosofia de Trabajo',
    'filosofia.title': '¿Por qué hago esto?',
    'filosofia.p1': 'Porque creo que el Evangelio transforma a la persona completa.',
    'filosofia.l1': 'El cuerpo importa.',
    'filosofia.l2': 'La mente importa.',
    'filosofia.l3': 'La comunidad importa.',
    'filosofia.l4': 'La misión importa.',
    'filosofia.p2': 'La medicina puede aliviar el sufrimiento.',
    'filosofia.p3': 'La misión puede llevar esperanza.',
    'filosofia.p4': 'Pero solamente Cristo puede reconciliar plenamente al ser humano con Dios.',
    'filosofia.p5': 'Por eso entiendo la medicina, la educación y la misión como expresiones complementarias de una misma vocación cristiana.',

    'vision.tag': 'Visión',
    'vision.title': 'Mirando hacia el futuro',
    'vision.p1': 'Mi deseo es contribuir al fortalecimiento de iglesias, la formación de líderes, la plantación de iglesias y el desarrollo de iniciativas que integren salud, misión y cosmovisión cristiana en contextos cada vez más secularizados.',
    'vision.p2': 'Creo que el siglo XXI necesita cristianos capaces de pensar con profundidad, servir con compasión y participar activamente en la misión global de Dios.',

    'ig.tag': 'Instagram',
    'ig.title': 'Sigue el proyecto',
    'ig.desc': 'En Instagram comparto reflexiones, investigaciones y recursos sobre:',
    
    'ig.t1': 'Medicina',
    'ig.t2': 'Bioética',
    'ig.t3': 'Inteligencia Artificial',
    'ig.t4': 'Salud Global',
    'ig.t5': 'Fe y Ciencia',
    'ig.t6': 'Cosmovisión Cristiana',
    'ig.t7': 'Innovación',
    'ig.t8': 'Investigación',

    'contacto.tag': 'Contacto',
    'contacto.title': '¿Trabajamos juntos?',
    'contacto.desc': 'Estoy disponible para colaborar con universidades, iglesias, organizaciones, instituciones y equipos interesados en proyectos relacionados con:',
    'contacto.btn1': 'WhatsApp',
    'contacto.btn2': 'Correo Electrónico',
    
    'co.1': 'Bioética',
    'co.2': 'Inteligencia Artificial',
    'co.3': 'Salud Global',
    'co.4': 'Salud Digital',
    'co.5': 'Telemedicina',
    'co.6': 'Formación',
    'co.7': 'Conferencias',
    'co.8': 'Investigación',
    'co.9': 'Desarrollo de proyectos internacionales',
    'co.10': 'Consultoría estratégica',

    'footer.m1': 'Fe que piensa.',
    'footer.m2': 'Medicina que sirve.',
    'footer.m3': 'Misión que transforma.',
    'footer.rights': 'Todos los derechos reservados.',
    
    'acad.title': 'Trayectoria Académica',
    'acad.subtitle': 'Aprendizaje continuo al servicio de la excelencia',
    'acad.p1': 'La medicina, la tecnología y la sociedad evolucionan constantemente.',
    'acad.p2': 'Por ello entiendo la formación continua como una responsabilidad profesional y una expresión de compromiso con las personas, las instituciones y los proyectos que acompaño.',
    'acad.p3': 'Mi desarrollo académico integra medicina, salud digital, inteligencia artificial, bioética, salud global y cosmovisión cristiana, buscando siempre conectar el conocimiento con el servicio.',
    
    'acad.uni.title': 'Formación Universitaria',
    'acad.uni.1': 'Medicina',
    'acad.uni.2': 'Teología',
    
    'acad.esp.title': 'Áreas de Especialización',
    'acad.esp.1.title': 'Medicina',
    'acad.esp.1.desc': 'Actualización clínica, atención primaria, urgencias, salud comunitaria y medicina basada en evidencia.',
    'acad.esp.2.title': 'Salud Digital y Telemedicina',
    'acad.esp.2.desc': 'Salud Digital, Transformación Digital, Sistemas de Información en Salud, Telemedicina, Gobernanza de datos, Interoperabilidad.',
    'acad.esp.3.title': 'Inteligencia Artificial',
    'acad.esp.3.desc': 'IA Generativa, Prompt Engineering, Vertex AI, Machine Learning, Innovación en Salud.',
    'acad.esp.4.title': 'Bioética',
    'acad.esp.4.desc': 'Bioética, Ética médica, Dignidad humana, Tecnología y sociedad.',
    'acad.esp.5.title': 'Salud Global',
    'acad.esp.5.desc': 'Atención Primaria, Desarrollo Comunitario, Salud Pública, Cooperación Internacional, Liderazgo.',
    'acad.esp.6.title': 'Cosmovisión Cristiana',
    'acad.esp.6.desc': 'Teología, Apologética, Fe y Ciencia, Ética Cristiana, Cosmovisión Bíblica.',
    
    'acad.inst.title': 'Instituciones donde me he formado',
    
    'acad.cert.title': 'Certificaciones',
    
    'acad.phil.title': 'Aprender para servir',
    'acad.phil.q1': 'No entiendo la educación como una etapa que termina con un diploma, sino como un proceso permanente de crecimiento intelectual y servicio.',
    'acad.phil.q2': 'Cada curso, certificación y experiencia busca fortalecer mi capacidad para integrar ciencia, tecnología, ética y cosmovisión cristiana al servicio de las personas, las instituciones y los proyectos de impacto internacional.',
    'nav.back': 'Volver al inicio'
  },
  PT: {
    'nav.who': 'Quem sou',
    'nav.what': 'O que faço',
    'nav.contact': 'Contato',
    'nav.title': 'Médico Missionário',
    
    'hero.title': 'Medicina, Bioética e Inteligência Artificial a serviço da dignidade humana.',
    'hero.pillars': 'Medicina · Missão · Raciocínio Bíblico',
    'hero.p1': 'Sou médico, pesquisador e teólogo reformado. Desenvolvo projetos, treinamento e consultoria em medicina, bioética, inteligência artificial, saúde global e cosmovisão cristã para fortalecer profissionais, instituições e organizações comprometidas com o cuidado integral das pessoas.',
    'hero.btn1': 'Vamos Conversar',
    'hero.btn2': 'Contato por WhatsApp',
    
    'colab.tag': 'Áreas de colaboração',
    'colab.1.title': 'Formação',
    'colab.1.desc': 'Desenho e desenvolvimento de cursos, seminários e programas de capacitação para profissionais, universidades, igrejas e organizações.',
    'colab.2.title': 'Consultoria',
    'colab.2.desc': 'Assessoria estratégica em bioética, inteligência artificial, saúde digital, telemedicina e saúde global.',
    'colab.3.title': 'Conferências',
    'colab.3.desc': 'Participação em congressos, eventos acadêmicos, universidades, igrejas e organizações.',
    'colab.4.title': 'Pesquisa e Projetos Internacionais',
    'colab.4.desc': 'Desenvolvimento de iniciativas de pesquisa, inovação e cooperação internacional em medicina, saúde global, bioética e inteligência artificial.',

    'gcn.tag': 'Iniciativa',
    'gcn.title': 'Global Care Network',
    'gcn.desc': 'Global Care Network é uma iniciativa internacional dedicada ao fortalecimento da saúde global, telemedicina, bioética, resiliência e inovação para organizações e equipes que trabalham em contextos remotos e de alta complexidade.',
    'gcn.btn': 'Conhecer Global Care Network',

    'about.tag': 'Quem sou',
    'about.title': 'Uma vocação entre a medicina e a missão',
    'about.p1': 'Sou médico, pesquisador e teólogo reformado.',
    'about.p2': 'Por mais de treze anos, servi na Bolívia desenvolvendo projetos de saúde, treinamento e missão em comunidades rurais e contextos com acesso limitado a recursos.',
    'about.p3': 'Meu trabalho integra medicina, bioética, saúde global, inteligência artificial e cosmovisão cristã com o propósito de fortalecer pessoas, instituições e organizações comprometidas com o serviço integral.',
    'about.btn': 'Conhecer minha trajetória',
    
    'about.m.tag': 'Missão Pessoal',
    'about.m.title': 'Meu chamado',
    'about.m.p1': 'Creio que Deus continua chamando homens e mulheres para servir às nações.',
    'about.m.p2': 'A medicina foi uma das ferramentas que Ele colocou em minhas mãos para responder a esse chamado.',
    'about.m.p3': 'Minha missão consiste em ajudar pessoas, igrejas e organizações a integrar saúde, fé e missão para o avanço do Reino de Deus.',
    'about.m.p4': 'Seja em uma consulta médica, uma conferência, uma igreja local ou um projeto de telemedicina, meu objetivo é o mesmo:',
    'about.m.p5': 'Servir pessoas.',
    'about.m.p6': 'Formar discípulos.',
    'about.m.p7': 'Glorificar a Cristo.',
    
    'about.t.tag': 'Trajetória',
    'about.t.title': 'Mais de uma década servindo no campo',
    'about.t.p1': 'Minha experiência profissional se desenvolveu principalmente em comunidades rurais e contextos de escassos recursos.',
    'about.t.p2': 'Essa realidade me ensinou uma convicção que continua guiando todo o meu trabalho:',
    'about.t.quote': 'A qualidade da atenção médica não deveria depender do lugar onde uma pessoa nasce.',
    'about.t.p3': 'Essa visão impulsionou meu interesse pela saúde comunitária, telessaúde, inovação médica e formação de líderes comprometidos com o serviço cristão.',
    'about.t.p4': 'Atualmente, continuo desenvolvendo iniciativas que buscam unir excelência clínica, tecnologia e missão para servir onde as necessidades são maiores.',

    'quehago.tag': 'O que Faço',
    'quehago.title': 'Áreas de impacto',
    'quehago.a1.title': 'Saúde Global',
    'quehago.a1.desc': 'Impulsionando iniciativas de saúde comunitária, telessaúde, inovação médica e fortalecimento de capacidades em contextos de acesso limitado.',
    'quehago.a2.title': 'Bioética',
    'quehago.a2.desc': 'Promovendo reflexão ética sobre os desafios contemporâneos da medicina, biotecnologia e inteligência artificial.',
    'quehago.a3.title': 'Inteligência Artificial',
    'quehago.a3.desc': 'Pesquisa, treinamento e consultoria sobre o uso responsável da IA aplicada à saúde.',
    'quehago.a4.title': 'Cosmovisão Cristã',
    'quehago.a4.desc': 'Desenvolvendo recursos, conferências e treinamento para integrar fé, ciência e cultura a partir de uma perspectiva bíblica.',
    'quehago.areas': 'Áreas de interesse',

    'formacion.tag': 'Trajetória Acadêmica',
    'formacion.title': 'Aprendizado contínuo',
    'formacion.p1': 'A formação contínua faz parte do meu compromisso com a excelência profissional, a pesquisa e o serviço.',
    'formacion.p2': 'Minha trajetória integra medicina, saúde global, saúde digital, telemedicina, bioética, inteligência artificial e estudos teológicos, com foco orientado ao desenvolvimento de projetos internacionais e à formação de pessoas e instituições.',
    'formacion.p3': 'Realizei programas de formação e certificações em universidades, organismos internacionais e empresas tecnológicas de referência mundial, mantendo um processo permanente de atualização profissional.',
    'formacion.areas': 'Áreas principais de formação',
    'formacion.a1': 'Medicina',
    'formacion.a2': 'Saúde Global',
    'formacion.a3': 'Saúde Digital',
    'formacion.a4': 'Telemedicina',
    'formacion.a5': 'Bioética',
    'formacion.a6': 'Inteligência Artificial',
    'formacion.a7': 'Teologia',
    'formacion.a8': 'Cosmovisão Cristã',
    'formacion.btn': 'Explorar minha Trajetória Acadêmica',

    'filosofia.tag': 'Filosofia de Trabalho',
    'filosofia.title': 'Por que faço isso?',
    'filosofia.p1': 'Porque creio que o Evangelho transforma a pessoa por completo.',
    'filosofia.l1': 'O corpo importa.',
    'filosofia.l2': 'A mente importa.',
    'filosofia.l3': 'A comunidade importa.',
    'filosofia.l4': 'A missão importa.',
    'filosofia.p2': 'A medicina pode aliviar o sofrimento.',
    'filosofia.p3': 'A missão pode trazer esperança.',
    'filosofia.p4': 'Mas somente Cristo pode reconciliar plenamente o ser humano com Deus.',
    'filosofia.p5': 'Por isso entendo a medicina, a educação e a missão como expressões complementares de uma mesma vocação cristã.',

    'vision.tag': 'Visão',
    'vision.title': 'Olhando para o futuro',
    'vision.p1': 'Meu desejo é contribuir para o fortalecimento de igrejas, a formação de líderes, a plantação de igrejas e o desenvolvimento de iniciativas que integrem saúde, missão e cosmovisão cristã em contextos cada vez mais secularizados.',
    'vision.p2': 'Creio que o século XXI precisa de cristãos capazes de pensar com profundidade, servir com compaixão e participar ativamente na missão global de Deus.',

    'ig.tag': 'Instagram',
    'ig.title': 'Acompanhe o projeto',
    'ig.desc': 'No Instagram compartilho reflexões, pesquisas e recursos sobre:',
    
    'ig.t1': 'Medicina',
    'ig.t2': 'Bioética',
    'ig.t3': 'Inteligência Artificial',
    'ig.t4': 'Saúde Global',
    'ig.t5': 'Fé e Ciência',
    'ig.t6': 'Cosmovisão Cristã',
    'ig.t7': 'Inovação',
    'ig.t8': 'Pesquisa',

    'contacto.tag': 'Contato',
    'contacto.title': 'Vamos trabalhar juntos?',
    'contacto.desc': 'Estou disponível para colaborar com universidades, igrejas, organizações, instituições e equipes interessadas em projetos relacionados com:',
    'contacto.btn1': 'WhatsApp',
    'contacto.btn2': 'E-mail',
    
    'co.1': 'Bioética',
    'co.2': 'Inteligência Artificial',
    'co.3': 'Saúde Global',
    'co.4': 'Saúde Digital',
    'co.5': 'Telemedicina',
    'co.6': 'Formação',
    'co.7': 'Conferências',
    'co.8': 'Pesquisa',
    'co.9': 'Desenvolvimento de projetos internacionais',
    'co.10': 'Consultoria estratégica',

    'footer.m1': 'Fé que pensa.',
    'footer.m2': 'Medicina que serve.',
    'footer.m3': 'Missão que transforma.',
    'footer.rights': 'Todos os direitos reservados.',

    'acad.title': 'Trajetória Acadêmica',
    'acad.subtitle': 'Aprendizado contínuo a serviço da excelência',
    'acad.p1': 'A medicina, a tecnologia e a sociedade evoluem constantemente.',
    'acad.p2': 'Por isso entendo a formação contínua como uma responsabilidade profissional e uma expressão de compromisso com as pessoas, as instituições e os projetos que acompanho.',
    'acad.p3': 'Meu desenvolvimento acadêmico integra medicina, saúde digital, inteligência artificial, bioética, saúde global e cosmovisão cristã, buscando sempre conectar o conhecimento com o serviço.',
    
    'acad.uni.title': 'Formação Universitária',
    'acad.uni.1': 'Medicina',
    'acad.uni.2': 'Teologia',
    
    'acad.esp.title': 'Áreas de Especialização',
    'acad.esp.1.title': 'Medicina',
    'acad.esp.1.desc': 'Atualização clínica, atenção primária, urgências, saúde comunitária e medicina baseada em evidências.',
    'acad.esp.2.title': 'Saúde Digital e Telemedicina',
    'acad.esp.2.desc': 'Saúde Digital, Transformação Digital, Sistemas de Informação em Saúde, Telemedicina, Governança de dados, Interoperabilidade.',
    'acad.esp.3.title': 'Inteligência Artificial',
    'acad.esp.3.desc': 'IA Generativa, Prompt Engineering, Vertex AI, Machine Learning, Inovação em Saúde.',
    'acad.esp.4.title': 'Bioética',
    'acad.esp.4.desc': 'Bioética, Ética médica, Dignidade humana, Tecnologia e sociedade.',
    'acad.esp.5.title': 'Saúde Global',
    'acad.esp.5.desc': 'Atenção Primária, Desenvolvimento Comunitário, Saúde Pública, Cooperação Internacional, Liderança.',
    'acad.esp.6.title': 'Cosmovisão Cristã',
    'acad.esp.6.desc': 'Teologia, Apologética, Fé e Ciência, Ética Cristã, Cosmovisão Bíblica.',
    
    'acad.inst.title': 'Instituições onde me formei',
    
    'acad.cert.title': 'Certificações',
    
    'acad.phil.title': 'Aprender para servir',
    'acad.phil.q1': 'Não entendo a educação como uma etapa que termina com um diploma, mas como um processo permanente de crescimento intelectual e serviço.',
    'acad.phil.q2': 'Cada curso, certificação e experiência busca fortalecer minha capacidade de integrar ciência, tecnologia, ética e cosmovisão cristã a serviço das pessoas, das instituições e dos projetos de impacto internacional.',
    'nav.back': 'Voltar ao Início'
  },
  EN: {
    'nav.who': 'Who I am',
    'nav.what': 'What I do',
    'nav.contact': 'Contact',
    'nav.title': 'Missionary Doctor',
    
    'hero.title': 'Medicine, Bioethics and Artificial Intelligence serving human dignity.',
    'hero.pillars': 'Medicine · Mission · Biblical Reasoning',
    'hero.p1': 'I am a doctor, researcher, and Reformed theologian. I develop projects, training, and consulting in medicine, bioethics, artificial intelligence, global health, and Christian worldview to strengthen professionals, institutions, and organizations committed to holistic care.',
    'hero.btn1': 'Let\'s Talk',
    'hero.btn2': 'Contact via WhatsApp',
    
    'colab.tag': 'Areas of Collaboration',
    'colab.1.title': 'Training',
    'colab.1.desc': 'Design and development of courses, seminars, and training programs for professionals, universities, churches, and organizations.',
    'colab.2.title': 'Consulting',
    'colab.2.desc': 'Strategic advice on bioethics, artificial intelligence, digital health, telemedicine, and global health.',
    'colab.3.title': 'Conferences',
    'colab.3.desc': 'Participation in congresses, academic events, universities, churches, and organizations.',
    'colab.4.title': 'Research and International Projects',
    'colab.4.desc': 'Development of research initiatives, innovation, and international cooperation in medicine, global health, bioethics, and artificial intelligence.',

    'gcn.tag': 'Initiative',
    'gcn.title': 'Global Care Network',
    'gcn.desc': 'Global Care Network is an international initiative dedicated to strengthening global health, telemedicine, bioethics, resilience, and innovation for organizations and teams working in remote and highly complex contexts.',
    'gcn.btn': 'Discover Global Care Network',

    'about.tag': 'Who I am',
    'about.title': 'A calling between medicine and mission',
    'about.p1': 'I am a doctor, researcher, and Reformed theologian.',
    'about.p2': 'For over thirteen years, I have served in Bolivia developing health, training, and mission projects in rural communities and contexts with limited access to resources.',
    'about.p3': 'My work integrates medicine, bioethics, global health, artificial intelligence, and a Christian worldview with the purpose of strengthening people, institutions, and organizations committed to holistic service.',
    'about.btn': 'Discover my trajectory',
    
    'about.m.tag': 'Personal Mission',
    'about.m.title': 'My Calling',
    'about.m.p1': 'I believe God continues to call men and women to serve the nations.',
    'about.m.p2': 'Medicine was one of the tools He placed in my hands to answer that call.',
    'about.m.p3': 'My mission is to help people, churches, and organizations integrate health, faith, and mission to advance God\'s Kingdom.',
    'about.m.p4': 'Whether in a medical consultation, a conference, a local church, or a telemedicine project, my goal is the same:',
    'about.m.p5': 'Serve people.',
    'about.m.p6': 'Make disciples.',
    'about.m.p7': 'Glorify Christ.',
    
    'about.t.tag': 'Trajectory',
    'about.t.title': 'Over a decade serving in the field',
    'about.t.p1': 'My professional experience has mainly developed in rural communities and low-resource settings.',
    'about.t.p2': 'That reality taught me a conviction that continues to guide all my work:',
    'about.t.quote': 'The quality of healthcare should not depend on where a person is born.',
    'about.t.p3': 'This vision drove my interest in community health, telehealth, medical innovation, and the training of leaders committed to Christian service.',
    'about.t.p4': 'Currently, I continue developing initiatives that seek to unite clinical excellence, technology, and mission to serve where needs are greatest.',

    'quehago.tag': 'What I Do',
    'quehago.title': 'Areas of impact',
    'quehago.a1.title': 'Global Health',
    'quehago.a1.desc': 'Driving community health initiatives, telehealth, medical innovation, and capacity building in limited-access contexts.',
    'quehago.a2.title': 'Bioethics',
    'quehago.a2.desc': 'Promoting ethical reflection on the contemporary challenges of medicine, biotechnology, and artificial intelligence.',
    'quehago.a3.title': 'Artificial Intelligence',
    'quehago.a3.desc': 'Research, training, and consulting on the responsible use of AI applied to health.',
    'quehago.a4.title': 'Christian Worldview',
    'quehago.a4.desc': 'Developing resources, conferences, and training to integrate faith, science, and culture from a biblical perspective.',
    'quehago.areas': 'Areas of interest',

    'formacion.tag': 'Academic Trajectory',
    'formacion.title': 'Continuous Learning',
    'formacion.p1': 'Continuous training is part of my commitment to professional excellence, research, and service.',
    'formacion.p2': 'My trajectory integrates medicine, global health, digital health, telemedicine, bioethics, artificial intelligence, and theological studies, with a focus on developing international projects and training people and institutions.',
    'formacion.p3': 'I have completed training programs and certifications at universities, international organizations, and world-leading technology companies, maintaining a permanent process of professional updating.',
    'formacion.areas': 'Main areas of training',
    'formacion.a1': 'Medicine',
    'formacion.a2': 'Global Health',
    'formacion.a3': 'Digital Health',
    'formacion.a4': 'Telemedicine',
    'formacion.a5': 'Bioethics',
    'formacion.a6': 'Artificial Intelligence',
    'formacion.a7': 'Theology',
    'formacion.a8': 'Christian Worldview',
    'formacion.btn': 'Explore my Academic Trajectory',

    'filosofia.tag': 'Work Philosophy',
    'filosofia.title': 'Why do I do this?',
    'filosofia.p1': 'Because I believe the Gospel transforms the whole person.',
    'filosofia.l1': 'The body matters.',
    'filosofia.l2': 'The mind matters.',
    'filosofia.l3': 'The community matters.',
    'filosofia.l4': 'The mission matters.',
    'filosofia.p2': 'Medicine can alleviate suffering.',
    'filosofia.p3': 'Mission can bring hope.',
    'filosofia.p4': 'But only Christ can fully reconcile human beings with God.',
    'filosofia.p5': 'That is why I understand medicine, education, and mission as complementary expressions of a single Christian calling.',

    'vision.tag': 'Vision',
    'vision.title': 'Looking to the future',
    'vision.p1': 'My desire is to contribute to strengthening churches, training leaders, planting churches, and developing initiatives that integrate health, mission, and a Christian worldview in increasingly secularized contexts.',
    'vision.p2': 'I believe the 21st century needs Christians capable of thinking deeply, serving compassionately, and actively participating in God\'s global mission.',

    'ig.tag': 'Instagram',
    'ig.title': 'Follow the project',
    'ig.desc': 'On Instagram I share reflections, research, and resources on:',
    
    'ig.t1': 'Medicine',
    'ig.t2': 'Bioethics',
    'ig.t3': 'Artificial Intelligence',
    'ig.t4': 'Global Health',
    'ig.t5': 'Faith and Science',
    'ig.t6': 'Christian Worldview',
    'ig.t7': 'Innovation',
    'ig.t8': 'Research',

    'contacto.tag': 'Contact',
    'contacto.title': 'Shall we work together?',
    'contacto.desc': 'I am available to collaborate with universities, churches, organizations, institutions, and teams interested in projects related to:',
    'contacto.btn1': 'WhatsApp',
    'contacto.btn2': 'Email',
    
    'co.1': 'Bioethics',
    'co.2': 'Artificial Intelligence',
    'co.3': 'Global Health',
    'co.4': 'Digital Health',
    'co.5': 'Telemedicine',
    'co.6': 'Training',
    'co.7': 'Conferences',
    'co.8': 'Research',
    'co.9': 'Development of international projects',
    'co.10': 'Strategic consulting',

    'footer.m1': 'Faith that thinks.',
    'footer.m2': 'Medicine that serves.',
    'footer.m3': 'Mission that transforms.',
    'footer.rights': 'All rights reserved.',

    'acad.title': 'Academic Trajectory',
    'acad.subtitle': 'Continuous learning at the service of excellence',
    'acad.p1': 'Medicine, technology, and society are constantly evolving.',
    'acad.p2': 'That is why I understand continuous training as a professional responsibility and an expression of commitment to the people, institutions, and projects I accompany.',
    'acad.p3': 'My academic development integrates medicine, digital health, artificial intelligence, bioethics, global health, and Christian worldview, always seeking to connect knowledge with service.',
    
    'acad.uni.title': 'University Education',
    'acad.uni.1': 'Medicine',
    'acad.uni.2': 'Theology',
    
    'acad.esp.title': 'Areas of Specialization',
    'acad.esp.1.title': 'Medicine',
    'acad.esp.1.desc': 'Clinical updating, primary care, emergencies, community health, and evidence-based medicine.',
    'acad.esp.2.title': 'Digital Health and Telemedicine',
    'acad.esp.2.desc': 'Digital Health, Digital Transformation, Health Information Systems, Telemedicine, Data Governance, Interoperability.',
    'acad.esp.3.title': 'Artificial Intelligence',
    'acad.esp.3.desc': 'Generative AI, Prompt Engineering, Vertex AI, Machine Learning, Health Innovation.',
    'acad.esp.4.title': 'Bioethics',
    'acad.esp.4.desc': 'Bioethics, Medical Ethics, Human Dignity, Technology and Society.',
    'acad.esp.5.title': 'Global Health',
    'acad.esp.5.desc': 'Primary Care, Community Development, Public Health, International Cooperation, Leadership.',
    'acad.esp.6.title': 'Christian Worldview',
    'acad.esp.6.desc': 'Theology, Apologetics, Faith and Science, Christian Ethics, Biblical Worldview.',
    
    'acad.inst.title': 'Institutions where I trained',
    
    'acad.cert.title': 'Certifications',
    
    'acad.phil.title': 'Learn to Serve',
    'acad.phil.q1': 'I do not understand education as a stage that ends with a diploma, but as a permanent process of intellectual growth and service.',
    'acad.phil.q2': 'Each course, certification, and experience seeks to strengthen my ability to integrate science, technology, ethics, and Christian worldview at the service of people, institutions, and projects of international impact.',
    'nav.back': 'Back to Home'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ES');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ES']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
`;

fs.writeFileSync('src/context/LanguageContext.tsx', content);
