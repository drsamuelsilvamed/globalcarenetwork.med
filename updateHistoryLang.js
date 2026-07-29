import fs from 'fs';
let content = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');

const esHistory = `
    'gcn.nav.history': 'Nuestra Historia',
    'gcn.history.tag': 'Nuestra Historia',
    'gcn.history.subtitle': 'Una visión que se ha construido con el tiempo.',
    'gcn.history.intro1': 'Global Care Network no nació de una idea aislada.',
    'gcn.history.intro2': 'Es el resultado de más de una década de experiencia en medicina, servicio transcultural, investigación, innovación y cooperación internacional.',
    'gcn.history.intro3': 'Cada etapa fortaleció una visión que hoy continúa creciendo como una red internacional comprometida con la salud global, la excelencia, la investigación y el desarrollo de soluciones para contextos complejos.',
    
    'gcn.history.2011.title': 'Llegada a Bolivia',
    'gcn.history.2011.desc': 'Inicio del servicio médico y del trabajo transcultural.',
    'gcn.history.2011_2022.title': 'Misiones Bolivia',
    'gcn.history.2011_2022.desc': 'Años de aprendizaje, atención médica, trabajo comunitario, formación y acompañamiento en el campo.',
    'gcn.history.2023.title': 'Missionary Medical Care',
    'gcn.history.2023.desc': 'Comienza una nueva etapa integrando medicina, cooperación internacional y cuidado integral.',
    'gcn.history.2024.title': 'Telessaúde Missionária',
    'gcn.history.2024.desc': 'Nacimiento del proyecto piloto de telemedicina para equipos que trabajan en contextos remotos y con acceso limitado a servicios de salud.',
    'gcn.history.2025.title': 'Investigación e Innovación',
    'gcn.history.2025.desc': 'Expansión hacia nuevas áreas de conocimiento: Salud Digital, Bioética, Inteligencia Artificial, Telemedicina, Investigación aplicada, Innovación tecnológica.',
    'gcn.history.2026.title': 'Global Care Network',
    'gcn.history.2026.desc': 'Consolidación de una red internacional dedicada a fortalecer la salud global mediante investigación, innovación, educación, cooperación internacional y desarrollo de soluciones para organizaciones que sirven en contextos complejos.',
    
    'gcn.history.outro.title': 'Mirando hacia el futuro',
    'gcn.history.outro.p1': 'La historia de Global Care Network continúa escribiéndose.',
    'gcn.history.outro.p2': 'Seguimos impulsando la investigación, la innovación y la colaboración internacional para desarrollar soluciones que fortalezcan la salud global y contribuyan al bienestar de las personas y las organizaciones que sirven en los contextos más desafiantes del mundo.',
`;

const ptHistory = `
    'gcn.nav.history': 'Nossa História',
    'gcn.history.tag': 'Nossa História',
    'gcn.history.subtitle': 'Uma visão que foi construída ao longo do tempo.',
    'gcn.history.intro1': 'A Global Care Network não nasceu de uma ideia isolada.',
    'gcn.history.intro2': 'É o resultado de mais de uma década de experiência em medicina, serviço transcultural, pesquisa, inovação e cooperação internacional.',
    'gcn.history.intro3': 'Cada etapa fortaleceu uma visão que hoje continua crescendo como uma rede internacional comprometida com a saúde global, excelência, pesquisa e desenvolvimento de soluções para contextos complexos.',
    
    'gcn.history.2011.title': 'Chegada à Bolívia',
    'gcn.history.2011.desc': 'Início do serviço médico e trabalho transcultural.',
    'gcn.history.2011_2022.title': 'Missões Bolívia',
    'gcn.history.2011_2022.desc': 'Anos de aprendizado, assistência médica, trabalho comunitário, formação e acompanhamento no campo.',
    'gcn.history.2023.title': 'Missionary Medical Care',
    'gcn.history.2023.desc': 'Início de uma nova etapa integrando medicina, cooperação internacional e cuidado integral.',
    'gcn.history.2024.title': 'Telessaúde Missionária',
    'gcn.history.2024.desc': 'Nascimento do projeto piloto de telemedicina para equipes que trabalham em contextos remotos e com acesso limitado a serviços de saúde.',
    'gcn.history.2025.title': 'Pesquisa e Inovação',
    'gcn.history.2025.desc': 'Expansão para novas áreas do conhecimento: Saúde Digital, Bioética, Inteligência Artificial, Telemedicina, Pesquisa aplicada, Inovação tecnológica.',
    'gcn.history.2026.title': 'Global Care Network',
    'gcn.history.2026.desc': 'Consolidação de uma rede internacional dedicada a fortalecer a saúde global através de pesquisa, inovação, educação, cooperação internacional e desenvolvimento de soluções para organizações que servem em contextos complexos.',
    
    'gcn.history.outro.title': 'Olhando para o futuro',
    'gcn.history.outro.p1': 'A história da Global Care Network continua a ser escrita.',
    'gcn.history.outro.p2': 'Continuamos impulsionando a pesquisa, a inovação e a colaboração internacional para desenvolver soluções que fortaleçam a saúde global e contribuam para o bem-estar das pessoas e organizações que servem nos contextos mais desafiadores do mundo.',
`;

const enHistory = `
    'gcn.nav.history': 'Our History',
    'gcn.history.tag': 'Our History',
    'gcn.history.subtitle': 'A vision built over time.',
    'gcn.history.intro1': 'Global Care Network was not born from an isolated idea.',
    'gcn.history.intro2': 'It is the result of more than a decade of experience in medicine, cross-cultural service, research, innovation, and international cooperation.',
    'gcn.history.intro3': 'Each stage strengthened a vision that today continues to grow as an international network committed to global health, excellence, research, and the development of solutions for complex contexts.',
    
    'gcn.history.2011.title': 'Arrival in Bolivia',
    'gcn.history.2011.desc': 'Start of medical service and cross-cultural work.',
    'gcn.history.2011_2022.title': 'Bolivia Missions',
    'gcn.history.2011_2022.desc': 'Years of learning, medical care, community work, training, and accompaniment in the field.',
    'gcn.history.2023.title': 'Missionary Medical Care',
    'gcn.history.2023.desc': 'A new stage begins, integrating medicine, international cooperation, and holistic care.',
    'gcn.history.2024.title': 'Telessaúde Missionária',
    'gcn.history.2024.desc': 'Birth of the telemedicine pilot project for teams working in remote contexts with limited access to health services.',
    'gcn.history.2025.title': 'Research and Innovation',
    'gcn.history.2025.desc': 'Expansion into new areas of knowledge: Digital Health, Bioethics, Artificial Intelligence, Telemedicine, Applied research, Technological innovation.',
    'gcn.history.2026.title': 'Global Care Network',
    'gcn.history.2026.desc': 'Consolidation of an international network dedicated to strengthening global health through research, innovation, education, international cooperation, and the development of solutions for organizations serving in complex contexts.',
    
    'gcn.history.outro.title': 'Looking to the future',
    'gcn.history.outro.p1': 'The history of Global Care Network continues to be written.',
    'gcn.history.outro.p2': 'We continue to drive research, innovation, and international collaboration to develop solutions that strengthen global health and contribute to the well-being of people and organizations serving in the most challenging contexts in the world.',
`;

content = content.replace(/'gcn.nav.home': 'Inicio',/, "'gcn.nav.home': 'Inicio',\n" + esHistory);
content = content.replace(/'gcn.nav.home': 'Início',/, "'gcn.nav.home': 'Início',\n" + ptHistory);
content = content.replace(/'gcn.nav.home': 'Home',/, "'gcn.nav.home': 'Home',\n" + enHistory);

fs.writeFileSync('src/context/LanguageContext.tsx', content);
