import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { GCNNavigation } from "../components/GCNNavigation";
import { GCNFooter } from "../components/GCNFooter";
import {
  ArrowRight,
  HeartPulse,
  Video,
  Brain,
  Globe,
  BookOpen,
  Cpu,
  ShieldCheck,
  Users,
  Building2,
  HeartHandshake,
  Lock,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Activity,
  Compass,
  FileText,
  Globe2,
} from "lucide-react";

export function WhatWeDoPage() {
  const { language } = useLanguage();

  const getTranslation = (es: string, pt: string, en: string) => {
    if (language === "PT") return pt;
    if (language === "EN") return en;
    return es;
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  return (
    <main className="min-h-screen bg-light-gray font-sans selection:bg-inst-blue selection:text-white flex flex-col">
      <GCNNavigation />

      {/* ============================================================ */}
      {/* 4. HERO SECTION */}
      {/* ============================================================ */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28 bg-charcoal text-white px-6 md:px-12 relative overflow-hidden flex items-center justify-center min-h-[70vh]">
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
          <img
            src="/images/rural_care.jpg"
            alt="What We Do - Missionary Medical Care"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="space-y-6"
          >
            <span className="text-inst-blue uppercase tracking-[0.25em] text-xs font-bold block">
              MISSIONARY MEDICAL CARE
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading tracking-tight leading-[1.1] text-white">
              {getTranslation("Qué Hacemos", "O Que Fazemos", "What We Do")}
            </h1>
            <p className="text-xl md:text-2xl font-light text-mustard max-w-3xl mx-auto leading-relaxed font-heading">
              {getTranslation(
                "Conectamos salud, tecnología y personas para cuidar de quienes sirven entre las culturas.",
                "Conectando saúde, tecnologia e pessoas para cuidar daqueles que servem transculturalmente.",
                "Connecting healthcare, technology and people to care for those who serve across cultures."
              )}
            </p>
            <p className="text-lg md:text-xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed pt-2">
              {getTranslation(
                "Missionary Medical Care desarrolla una red de cuidado que integra profesionales de la salud, tecnología, educación, iglesias y aliados para fortalecer la salud y la permanencia de misioneros y trabajadores transculturales.",
                "A Missionary Medical Care desenvolve uma rede de cuidado que integra profissionais de saúde, tecnologia, educação, igrejas e parceiros para fortalecer a saúde e a permanência de missionários e trabalhadores transculturais.",
                "Missionary Medical Care develops a care network that integrates healthcare professionals, technology, education, churches, and partners to strengthen the health and retention of missionaries and cross-cultural workers."
              )}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <a
                href="#our-work"
                className="w-full sm:w-auto px-8 py-4 bg-inst-blue text-white font-bold text-xs tracking-widest uppercase transition-colors rounded-sm shadow-sm hover:bg-inst-blue/90"
              >
                {getTranslation("EXPLORAR NUESTRO TRABAJO", "EXPLORAR NOSSO TRABALHO", "EXPLORE OUR WORK")}
              </a>
              <Link
                to="/volunteer"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-400 text-white font-bold text-xs tracking-widest uppercase transition-all rounded-sm shadow-sm hover:border-white hover:bg-white/10"
              >
                {getTranslation("INVOLÚCRATE", "PARTICIPE", "GET INVOLVED")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. SEÇÃO — UMA VISÃO GERAL (Institutional Intro) */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <span className="text-inst-blue uppercase tracking-widest text-xs font-bold block">
            {getTranslation("VISIÓN GENERAL", "VISÃO GERAL", "OVERVIEW")}
          </span>
          <h2 className="text-3xl md:text-5xl font-heading text-charcoal leading-tight">
            {getTranslation(
              "Cuidamos de quienes fueron enviados.",
              "Cuidamos de quem foi enviado.",
              "Caring for those who were sent."
            )}
          </h2>
          <div className="space-y-6 text-charcoal font-light text-lg md:text-xl leading-relaxed text-left md:text-center max-w-3xl mx-auto">
            <p>
              {getTranslation(
                "Servir en otro contexto cultural exige más que disposición. Exige preparación, cuidado, acceso a profesionales cualificados, acompañamiento y una red de apoyo capaz de responder a las necesidades que surgen a lo largo del camino.",
                "Servir em outro contexto cultural exige mais do que disposição. Exige preparação, cuidado, acesso a profissionais qualificados, acompanhamento e uma rede de apoio capaz de responder às necessidades que surgem ao longo da jornada.",
                "Serving in another cultural context requires more than willingness. It demands preparation, care, access to qualified professionals, accompaniment, and a support network capable of responding to needs that arise along the journey."
              )}
            </p>
            <p>
              {getTranslation(
                "Missionary Medical Care existe para ayudar a construir esa red. Nuestro trabajo reúne medicina, telemedicina, salud mental, educación, tecnología, seguridad y colaboración para fortalecer a quienes sirven y a las organizaciones que los sostienen.",
                "A Missionary Medical Care existe para ajudar a construir essa rede. Nosso trabalho reúne medicina, telessaúde, saúde mental, educação, tecnologia, segurança e colaboração para fortalecer aqueles que servem e as organizações que os apoiam.",
                "Missionary Medical Care exists to help build that network. Our work unites medicine, telehealth, mental health, education, technology, security, and collaboration to strengthen those who serve and the organizations supporting them."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. SEÇÃO PRINCIPAL — OUR WORK (8 Ecosystem Cards) */}
      {/* ============================================================ */}
      <section id="our-work" className="py-24 px-6 md:px-12 bg-light-gray">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-inst-blue uppercase tracking-widest text-xs font-bold block">
              {getTranslation("ÁREAS DE TRABAJO", "ÁREAS DE ATUAÇÃO", "AREAS OF WORK")}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-charcoal leading-tight">
              {getTranslation("Nuestro Trabajo", "Nosso Trabalho", "Our Work")}
            </h2>
            <p className="text-mustard font-heading font-medium text-xl">
              {getTranslation(
                "Un ecosistema integrado de cuidado misionero.",
                "Um ecossistema integrado de cuidado missionário.",
                "An integrated ecosystem of missionary care."
              )}
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Card 1: Medical Care */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm border border-light-gray flex flex-col justify-between hover:border-inst-blue transition-all group shadow-sm">
              <div className="space-y-4">
                <HeartPulse className="w-10 h-10 text-inst-blue" strokeWidth={1.5} />
                <h3 className="text-xl font-heading font-bold text-charcoal">
                  {getTranslation("Atención Médica", "Cuidados Médicos", "Medical Care")}
                </h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  {getTranslation(
                    "Cuidado médico y orientación profesional para misioneros, trabajadores transculturales y sus familias, especialmente cuando el acceso local es limitado.",
                    "Cuidado médico e orientação profissional para missionários, trabalhadores transculturais e suas famílias, especialmente quando o acesso local é limitado.",
                    "Medical care and professional guidance for missionaries, cross-cultural workers, and their families, especially when local access is limited."
                  )}
                </p>
              </div>
              <div className="pt-6">
                <Link to="/contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-inst-blue group-hover:text-charcoal transition-colors">
                  {getTranslation("CONOCER MÁS", "SAIBA MAIS", "LEARN MORE")} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Card 2: Missionary Telemedicine */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm border border-light-gray flex flex-col justify-between hover:border-inst-blue transition-all group shadow-sm">
              <div className="space-y-4">
                <Video className="w-10 h-10 text-inst-blue" strokeWidth={1.5} />
                <h3 className="text-xl font-heading font-bold text-charcoal">
                  {getTranslation("Telemedicina Misionera", "Telemedicina Missionária", "Missionary Telemedicine")}
                </h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  {getTranslation(
                    "Conectamos misioneros con profesionales de la salud mediante telemedicina, acercando orientación, evaluación y seguimiento incluso en la distancia.",
                    "Conectamos missionários a profissionais de saúde por meio da telemedicina, aproximando orientação, avaliação e acompanhamento mesmo quando a distância dificulta o acesso.",
                    "Connecting missionaries to healthcare professionals through telemedicine, bringing guidance, evaluation, and follow-up across distances."
                  )}
                </p>
              </div>
              <div className="pt-6">
                <Link to="/telemedicine" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-inst-blue group-hover:text-charcoal transition-colors">
                  {getTranslation("CONOCER MÁS", "SAIBA MAIS", "LEARN MORE")} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Card 3: Mental Health & Resilience */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm border border-light-gray flex flex-col justify-between hover:border-inst-blue transition-all group shadow-sm">
              <div className="space-y-4">
                <Brain className="w-10 h-10 text-inst-blue" strokeWidth={1.5} />
                <h3 className="text-xl font-heading font-bold text-charcoal">
                  {getTranslation("Salud Mental y Resiliencia", "Saúde Mental e Resiliência", "Mental Health & Resilience")}
                </h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  {getTranslation(
                    "Apoyamos la salud emocional y la resiliencia de los misioneros y sus familias ante los desafíos asociados a la vida transcultural.",
                    "Apoiamos a saúde emocional e a resiliência de missionários e suas famílias diante dos desafios associados à vida transcultural.",
                    "Supporting the emotional health and resilience of missionaries and their families facing challenges associated with cross-cultural living."
                  )}
                </p>
              </div>
              <div className="pt-6">
                <a href="#mental-health" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-inst-blue group-hover:text-charcoal transition-colors">
                  {getTranslation("CONOCER MÁS", "SAIBA MAIS", "LEARN MORE")} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Card 4: Global Health */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm border border-light-gray flex flex-col justify-between hover:border-inst-blue transition-all group shadow-sm">
              <div className="space-y-4">
                <Globe className="w-10 h-10 text-inst-blue" strokeWidth={1.5} />
                <h3 className="text-xl font-heading font-bold text-charcoal">
                  {getTranslation("Salud Global", "Saúde Global", "Global Health")}
                </h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  {getTranslation(
                    "Integramos principios de salud global, medicina intercultural y prevención para apoyar a profesionales y comunidades en diferentes contextos.",
                    "Integramos princípios de saúde global, medicina intercultural e prevenção para apoiar profissionais e comunidades em diferentes contextos.",
                    "Integrating global health principles, intercultural medicine, and prevention to support professionals and communities in various settings."
                  )}
                </p>
              </div>
              <div className="pt-6">
                <Link to="/community-health" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-inst-blue group-hover:text-charcoal transition-colors">
                  {getTranslation("CONOCER MÁS", "SAIBA MAIS", "LEARN MORE")} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Card 5: Training & Education */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm border border-light-gray flex flex-col justify-between hover:border-inst-blue transition-all group shadow-sm">
              <div className="space-y-4">
                <BookOpen className="w-10 h-10 text-inst-blue" strokeWidth={1.5} />
                <h3 className="text-xl font-heading font-bold text-charcoal">
                  {getTranslation("Capacitación y Educación", "Capacitação e Educação", "Training & Education")}
                </h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  {getTranslation(
                    "Ofrecemos capacitación para profesionales, misioneros, iglesias y equipos que desean servir con mayor preparación clínica e intercultural.",
                    "Oferecemos educação e capacitação para profissionais, missionários, igrejas e equipes que desejam servir com maior preparo clínico e intercultural.",
                    "Offering education and training for professionals, missionaries, churches, and teams seeking clinical and intercultural readiness."
                  )}
                </p>
              </div>
              <div className="pt-6">
                <Link to="/resources" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-inst-blue group-hover:text-charcoal transition-colors">
                  {getTranslation("EXPLORAR CAPACITACIÓN", "EXPLORAR CAPACITAÇÃO", "EXPLORE TRAINING")} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Card 6: Technology & Innovation */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm border border-light-gray flex flex-col justify-between hover:border-inst-blue transition-all group shadow-sm">
              <div className="space-y-4">
                <Cpu className="w-10 h-10 text-inst-blue" strokeWidth={1.5} />
                <h3 className="text-xl font-heading font-bold text-charcoal">
                  {getTranslation("Tecnología e Innovación", "Tecnologia e Inovação", "Technology & Innovation")}
                </h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  {getTranslation(
                    "Desarrollamos y utilizamos tecnología para ampliar el acceso al conocimiento, facilitar conexiones y fortalecer la continuidad del cuidado.",
                    "Desenvolvemos e utilizamos tecnologia para ampliar o acesso ao conhecimento, facilitar conexões e fortalecer a continuidade do cuidado.",
                    "Developing and leveraging technology to expand access to knowledge, facilitate connections, and strengthen care continuity."
                  )}
                </p>
              </div>
              <div className="pt-6">
                <Link to="/digital-health" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-inst-blue group-hover:text-charcoal transition-colors">
                  {getTranslation("EXPLORAR TECNOLOGÍA", "EXPLORAR TECNOLOGIA", "EXPLORE TECHNOLOGY")} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Card 7: Secure Telehealth */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm border border-light-gray flex flex-col justify-between hover:border-inst-blue transition-all group shadow-sm">
              <div className="space-y-4">
                <ShieldCheck className="w-10 h-10 text-inst-blue" strokeWidth={1.5} />
                <h3 className="text-xl font-heading font-bold text-charcoal">
                  {getTranslation("Telesalud Segura", "Telessaúde Segura", "Secure Telehealth")}
                </h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  {getTranslation(
                    "Diseñamos soluciones de telemedicina considerando la privacidad, protección de datos y seguridad operacional en contextos de riesgo.",
                    "Projetamos soluções de telessaúde considerando privacidade, proteção de dados e segurança operacional em contextos sensíveis.",
                    "Designing telehealth solutions considering privacy, data protection, and operational security in sensitive settings."
                  )}
                </p>
              </div>
              <div className="pt-6">
                <Link to="/telemedicine" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-inst-blue group-hover:text-charcoal transition-colors">
                  {getTranslation("CONOCER MÁS", "SAIBA MAIS", "LEARN MORE")} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Card 8: Volunteer Network */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm border border-light-gray flex flex-col justify-between hover:border-inst-blue transition-all group shadow-sm">
              <div className="space-y-4">
                <Users className="w-10 h-10 text-inst-blue" strokeWidth={1.5} />
                <h3 className="text-xl font-heading font-bold text-charcoal">
                  {getTranslation("Red de Voluntarios", "Rede de Voluntários", "Volunteer Network")}
                </h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  {getTranslation(
                    "Conectamos a profesionales dispuestos a utilizar sus conocimientos y habilidades para servir más allá de las fronteras geográficas.",
                    "Conectamos profissionais dispostos a utilizar seus conhecimentos e habilidades para servir além das fronteiras geográficas.",
                    "Connecting professionals willing to use their knowledge and skills to serve beyond geographical borders."
                  )}
                </p>
              </div>
              <div className="pt-6">
                <Link to="/volunteer" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-inst-blue group-hover:text-charcoal transition-colors">
                  {getTranslation("SÉ UN VOLUNTARIO", "SEJA UM VOLUNTÁRIO", "BECOME A VOLUNTEER")} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. SEÇÃO — NÃO SOMOS APENAS UM SERVIÇO */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-inst-blue uppercase tracking-widest text-xs font-bold block">
              {getTranslation("NUESTRA NATURALEZA", "NOSSA NATUREZA", "OUR NATURE")}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-charcoal leading-tight">
              {getTranslation("Más que un Servicio", "Mais que um Serviço", "More Than a Service")}
            </h2>
            <p className="text-charcoal text-lg font-light max-w-2xl mx-auto">
              {getTranslation(
                "La MMC no fue creada para ofrecer solo una consulta, un curso o una herramienta digital. Nuestro objetivo es construir una red de cuidado.",
                "A MMC não foi criada para oferecer apenas uma consulta, um curso ou uma ferramenta digital. Nosso objetivo é construir uma rede de cuidado.",
                "MMC was not created to offer just a consultation, course, or digital tool. Our goal is to build a care network."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-light-gray border border-light-gray rounded-sm space-y-2">
              <h3 className="font-bold text-charcoal uppercase tracking-wider text-sm">
                {getTranslation("Profesionales", "Profissionais", "Professionals")}
              </h3>
              <p className="text-gray-600 text-sm font-light">
                {getTranslation("Comparten conocimiento y experiencia clínica.", "Compartilham conhecimento e experiência.", "Share clinical knowledge and experience.")}
              </p>
            </div>

            <div className="p-6 bg-light-gray border border-light-gray rounded-sm space-y-2">
              <h3 className="font-bold text-charcoal uppercase tracking-wider text-sm">
                {getTranslation("Misioneros", "Missionários", "Missionaries")}
              </h3>
              <p className="text-gray-600 text-sm font-light">
                {getTranslation("Encuentran apoyo para cuidar su salud en el campo.", "Encontram apoio para cuidar de sua saúde.", "Find support to maintain health in the field.")}
              </p>
            </div>

            <div className="p-6 bg-light-gray border border-light-gray rounded-sm space-y-2">
              <h3 className="font-bold text-charcoal uppercase tracking-wider text-sm">
                {getTranslation("Iglesias", "Igrejas", "Churches")}
              </h3>
              <p className="text-gray-600 text-sm font-light">
                {getTranslation("Participan activamente del cuidado de sus enviados.", "Podem participar do cuidado daqueles que enviam.", "Actively participate in caring for those they send.")}
              </p>
            </div>

            <div className="p-6 bg-light-gray border border-light-gray rounded-sm space-y-2">
              <h3 className="font-bold text-charcoal uppercase tracking-wider text-sm">
                {getTranslation("Organizaciones", "Organizações", "Organizations")}
              </h3>
              <p className="text-gray-600 text-sm font-light">
                {getTranslation("Encuentran recursos y colaboración institucional.", "Podem encontrar recursos e colaboração.", "Find resources and institutional collaboration.")}
              </p>
            </div>

            <div className="p-6 bg-light-gray border border-light-gray rounded-sm space-y-2">
              <h3 className="font-bold text-charcoal uppercase tracking-wider text-sm">
                {getTranslation("Tecnología", "Tecnologia", "Technology")}
              </h3>
              <p className="text-gray-600 text-sm font-light">
                {getTranslation("Aproxima personas y conocimiento médico.", "Aproxima pessoas e conhecimento.", "Bridges people and medical knowledge.")}
              </p>
            </div>

            <div className="p-6 bg-light-gray border border-light-gray rounded-sm space-y-2">
              <h3 className="font-bold text-charcoal uppercase tracking-wider text-sm">
                {getTranslation("Educación", "Educação", "Education")}
              </h3>
              <p className="text-gray-600 text-sm font-light">
                {getTranslation("Prepara a profesionales y obreros para servir mejor.", "Prepara profissionais para servir melhor.", "Prepares workers and professionals to serve well.")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. SEÇÃO VISUAL — THE MMC ECOSYSTEM */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-charcoal text-white">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-mustard uppercase tracking-widest text-xs font-bold block">
              {getTranslation("ESTRUCTURA DE RED", "ESTRUTURA DE REDE", "NETWORK ARCHITECTURE")}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-white leading-tight">
              {getTranslation("El Ecosistema MMC", "O Ecossistema MMC", "The MMC Ecosystem")}
            </h2>
            <p className="text-gray-300 font-light text-lg">
              {getTranslation(
                "Una red internacional que conecta a todos los actores clave para sostener la vida y la salud en la misión.",
                "Uma rede internacional que conecta todos os participantes para sustentar a vida e a saúde na missão.",
                "An international network connecting key stakeholders to sustain life and health in missions."
              )}
            </p>
          </div>

          {/* Central Ecosystem Diagram */}
          <div className="bg-charcoal/80 p-8 md:p-12 border border-[#334155] rounded-sm relative overflow-hidden flex flex-col items-center gap-10">
            {/* Center Node */}
            <div className="bg-inst-blue text-white px-10 py-5 rounded-sm text-center font-heading font-bold text-xl md:text-2xl shadow-lg border border-inst-blue/50 tracking-wider">
              MISSIONARY MEDICAL CARE
            </div>

            {/* Connecting lines label */}
            <div className="text-xs uppercase tracking-widest text-mustard font-bold text-center">
              {getTranslation("CONECTANDO INTEGRALMENTE", "CONECTANDO INTEGRALMENTE", "INTEGRALLY CONNECTING")}
            </div>

            {/* Grid of connected participants */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full text-center">
              {[
                getTranslation("Misioneros", "Missionários", "Missionaries"),
                getTranslation("Familias", "Famílias", "Families"),
                getTranslation("Profesionales de Salud", "Profissionais de Saúde", "Healthcare Professionals"),
                getTranslation("Salud Mental", "Saúde Mental", "Mental Health Professionals"),
                getTranslation("Iglesias", "Igrejas", "Churches"),
                getTranslation("Organizaciones Misioneras", "Organizações Missionárias", "Mission Organizations"),
                getTranslation("Hospitales", "Hospitais", "Hospitals"),
                getTranslation("Aliados Tecnológicos", "Parceiros de Tecnologia", "Technology Partners"),
                getTranslation("Educadores", "Educadores", "Educators"),
                getTranslation("Voluntarios", "Voluntários", "Volunteers"),
              ].map((participant, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 border border-white/20 px-4 py-4 rounded-sm text-xs font-bold tracking-wider text-gray-200 hover:border-mustard hover:text-white transition-colors"
                >
                  {participant}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. SEÇÃO — CARE ACROSS DISTANCE (Telemedicina Highlight) */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <span className="text-inst-blue uppercase tracking-widest text-xs font-bold block">
              {getTranslation("TELESALUD MISIONERA", "TELESSAÚDE MISSIONÁRIA", "MISSIONARY TELEHEALTH")}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-charcoal leading-tight">
              {getTranslation(
                "Cuando la distancia es una barrera, el cuidado aún puede conectar.",
                "Quando a distância se torna uma barreira, o cuidado ainda pode conectar.",
                "When Distance Becomes a Barrier, Care Can Still Connect."
              )}
            </h2>
          </div>

          <div className="prose prose-lg mx-auto text-charcoal font-light leading-relaxed space-y-6 text-center">
            <p className="max-w-3xl mx-auto">
              {getTranslation(
                "No todos los misioneros viven cerca de hospitales, especialistas o sistemas de salud estructurados. La distancia puede transformar una necesidad simple en un desafío significativo.",
                "Nem todos os missionários vivem próximos de hospitais, especialistas ou sistemas de saúde estruturados. A distância pode transformar uma necessidade simples em um desafio significativo.",
                "Not all missionaries live near hospitals, specialists, or structured health systems. Distance can turn a simple need into a significant challenge."
              )}
            </p>
          </div>

          <div className="bg-charcoal text-white p-8 md:p-12 rounded-sm text-center border-l-4 border-mustard space-y-6 max-w-3xl mx-auto shadow-md">
            <h3 className="text-2xl md:text-4xl font-heading font-bold text-mustard">
              {getTranslation(
                "La distancia no debe significar abandono.",
                "A distância não deve significar abandono.",
                "Distance should not mean abandonment."
              )}
            </h3>
            <p className="text-gray-300 font-light text-lg">
              {getTranslation(
                "La Telemedicina Misionera utiliza tecnología para aproximar a profesionales de la salud y personas que viven o sirven en lugares donde el acceso al cuidado es limitado.",
                "A Telemedicina Missionária utiliza tecnologia para aproximar profissionais de saúde e pessoas que vivem ou servem em lugares onde o acesso ao cuidado é limitado.",
                "Missionary Telemedicine uses technology to bring healthcare professionals and people serving in limited-access places together."
              )}
            </p>
            <div className="pt-2">
              <Link
                to="/telemedicine"
                className="inline-flex items-center gap-3 px-8 py-4 bg-inst-blue text-white font-bold text-xs tracking-widest uppercase rounded-sm hover:bg-inst-blue/90 transition-colors"
              >
                {getTranslation("Explorar Telemedicina Misionera", "Explorar Telemedicina Missionária", "Explore Missionary Telemedicine")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. SEÇÃO — CARE BEYOND MEDICINE (Whole-Person Care) */}
      {/* ============================================================ */}
      <section id="mental-health" className="py-24 px-6 md:px-12 bg-light-gray">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-inst-blue uppercase tracking-widest text-xs font-bold block">
              {getTranslation("SALUD INTEGRAL", "SAÚDE INTEGRAL", "WHOLE-PERSON CARE")}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-charcoal leading-tight">
              {getTranslation("Cuidar Más Allá de la Medicina", "Cuidar Além da Medicina", "Caring Beyond Medicine")}
            </h2>
            <p className="text-charcoal text-lg font-light">
              {getTranslation(
                "La salud del misionero no puede reducirse a diagnósticos y tratamientos. La vida transcultural involucra múltiples dimensiones interconectadas.",
                "A saúde do missionário não pode ser reduzida a diagnósticos e tratamentos. Vida transcultural envolve múltiplas dimensões.",
                "A missionary's health cannot be reduced to diagnoses and treatments. Cross-cultural life involves multiple dimensions."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: getTranslation("Salud Física", "Saúde Física", "Physical Health"),
                desc: getTranslation(
                  "Prevención, diagnóstico y tratamiento médico adecuado en el campo.",
                  "Prevenção, diagnóstico e tratamento médico adequado em campo.",
                  "Prevention, diagnosis, and proper medical care in the field."
                ),
                icon: HeartPulse,
              },
              {
                title: getTranslation("Salud Mental", "Saúde Mental", "Mental Health"),
                desc: getTranslation(
                  "Apoyo psicológico para prevenir burnout y manejar el estrés.",
                  "Apoio psicológico para prevenir burnout e gerenciar o estresse.",
                  "Psychological support to prevent burnout and manage stress."
                ),
                icon: Brain,
              },
              {
                title: getTranslation("Familia", "Família", "Family"),
                desc: getTranslation(
                  "Acompañamiento a cónyuges e hijos en la vivencia transcultural.",
                  "Acompanhamento a cônjuges e filhos na vivência transcultural.",
                  "Accompaniment for spouses and children in cross-cultural life."
                ),
                icon: Users,
              },
              {
                title: getTranslation("Cuidado Espiritual", "Cuidado Espiritual", "Spiritual Care"),
                desc: getTranslation(
                  "Sostén pastoral y espiritual alineado a la fe y la vocación.",
                  "Suporte pastoral e espiritual alinhado à fé e vocação.",
                  "Pastoral and spiritual support aligned with faith and vocation."
                ),
                icon: HeartHandshake,
              },
              {
                title: getTranslation("Contexto Cultural", "Contexto Cultural", "Cultural Context"),
                desc: getTranslation(
                  "Comprensión de las dinámicas sociales y lingüísticas locales.",
                  "Compreensão das dinâmicas sociais e linguísticas locais.",
                  "Understanding local social and linguistic dynamics."
                ),
                icon: Compass,
              },
              {
                title: getTranslation("Resiliencia", "Resiliência", "Resilience"),
                desc: getTranslation(
                  "Herramientas para fortalecer la permanencia saludable en la misión.",
                  "Ferramentas para fortalecer a permanência saudável na missão.",
                  "Tools to strengthen healthy long-term retention in mission."
                ),
                icon: Sparkles,
              },
            ].map((dim, idx) => (
              <div key={idx} className="bg-white p-8 rounded-sm border border-light-gray space-y-3 shadow-sm">
                <dim.icon className="w-8 h-8 text-inst-blue" strokeWidth={1.5} />
                <h3 className="text-xl font-heading font-bold text-charcoal">{dim.title}</h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed">{dim.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 11. SEÇÃO — TRAINING (Preparing People to Serve Well) */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="space-y-4">
            <span className="text-inst-blue uppercase tracking-widest text-xs font-bold block">
              {getTranslation("CAPACITACIÓN Y EDUCACIÓN", "CAPACITAÇÃO E EDUCAÇÃO", "TRAINING & EDUCATION")}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-charcoal leading-tight">
              {getTranslation("Preparando Personas para Servir Bien", "Preparando Pessoas para Servir Bem", "Preparing People to Serve Well")}
            </h2>
            <p className="text-charcoal text-lg font-light max-w-2xl mx-auto">
              {getTranslation(
                "El cuidado sostenible también exige preparación. MMC desarrolla recursos educativos para ayudar a profesionales y equipos a comprender la medicina transcultural, telemedicina, salud mental, seguridad y prevención.",
                "Cuidado sustentável também exige preparação. A MMC desenvolve recursos educacionais para ajudar profissionais e equipes a compreender melhor medicina transcultural, telessaúde, saúde mental, segurança e prevenção.",
                "Sustainable care also requires preparation. MMC develops educational resources to help professionals and teams understand cross-cultural medicine, telehealth, mental health, security, and prevention."
              )}
            </p>
          </div>

          <div>
            <Link
              to="/resources"
              className="inline-flex items-center gap-3 px-8 py-4 bg-inst-blue text-white font-bold text-xs tracking-widest uppercase rounded-sm hover:bg-inst-blue/90 transition-colors"
            >
              {getTranslation("Explorar Capacitación y Educación", "Explorar Capacitação e Educação", "Explore Training & Education")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 12. SEÇÃO — TECHNOLOGY (Technology With a Purpose) */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="space-y-4">
            <span className="text-mustard uppercase tracking-widest text-xs font-bold block">
              {getTranslation("TECNOLOGÍA RESPONSABLE", "TECNOLOGIA RESPONSÁVEL", "RESPONSIBLE TECHNOLOGY")}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-white leading-tight">
              {getTranslation("Tecnología con un Propósito", "Tecnologia com um Propósito", "Technology With a Purpose")}
            </h2>
            <p className="text-gray-300 font-light text-lg max-w-2xl mx-auto">
              {getTranslation(
                "La tecnología no es el objetivo. Es una herramienta para aproximar profesionales, facilitar comunicación, ampliar el acceso al conocimiento y proteger información sensible.",
                "A tecnologia não é o objetivo. É uma ferramenta para aproximar profissionais, facilitar comunicação, ampliar acesso ao conhecimento e proteger informações sensíveis.",
                "Technology is not the goal. It is a tool to connect professionals, facilitate communication, expand access to knowledge, and protect sensitive information."
              )}
            </p>
          </div>

          <div className="bg-white/10 p-8 rounded-sm border border-white/20 max-w-2xl mx-auto">
            <p className="text-2xl md:text-3xl font-heading font-bold text-mustard">
              {getTranslation(
                "La tecnología debe servir a las personas, no al revés.",
                "A tecnologia deve servir às pessoas — não o contrário.",
                "Technology should serve people — not the other way around."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 13. SEÇÃO — SECURITY (Care Without Exposure) */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-light-gray">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <span className="text-inst-blue uppercase tracking-widest text-xs font-bold block">
              {getTranslation("SEGURIDAD OPERACIONAL Y PRIVACIDAD", "SEGURANÇA OPERACIONAL E PRIVACIDADE", "OPSEC & PRIVACY")}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-charcoal leading-tight">
              {getTranslation("Cuidado Sin Exposición", "Cuidado Sem Exposição", "Care Without Exposure")}
            </h2>
            <p className="text-charcoal font-light text-lg leading-relaxed">
              {getTranslation(
                "En algunos contextos, buscar asistencia médica puede involucrar riesgos adicionales de privacidad o identidad. Por eso incorporamos principios rigurosos de protección de información.",
                "Em alguns contextos, buscar assistência médica pode envolver riscos adicionais de privacidade, identidade ou exposição. Por isso, a MMC incorpora princípios rigorosos de proteção.",
                "In some contexts, seeking medical care can involve additional privacy or identity risks. Therefore, MMC incorporates strict protection principles."
              )}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              getTranslation("Privacidad desde el Diseño", "Privacidade desde o Design", "Privacy by Design"),
              getTranslation("Seguridad por Defecto", "Segurança por Padrão", "Security by Default"),
              getTranslation("Necesidad de Saber", "Necessidade de Conhecer", "Need-to-Know"),
              getTranslation("Minimización de Datos", "Minimização de Dados", "Data Minimization"),
            ].map((principle, idx) => (
              <div key={idx} className="bg-white p-6 rounded-sm border border-light-gray font-bold text-xs uppercase tracking-widest text-charcoal shadow-sm">
                {principle}
              </div>
            ))}
          </div>

          <div className="bg-charcoal text-white p-8 rounded-sm text-center border-l-4 border-mustard">
            <p className="text-xl md:text-3xl font-heading font-bold text-mustard">
              {getTranslation(
                "Máximo cuidado clínico. Mínima exposición informacional.",
                "Máximo cuidado clínico. Mínima exposição informacional.",
                "Maximum clinical care. Minimum informational exposure."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 14. SEÇÃO — FOR CHURCHES */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-inst-blue uppercase tracking-widest text-xs font-bold block">
            {getTranslation("IGLESIAS LOCALES", "IGREJAS LOCAIS", "LOCAL CHURCHES")}
          </span>
          <h2 className="text-3xl md:text-5xl font-heading text-charcoal leading-tight">
            {getTranslation("Las Iglesias son Parte de la Red de Cuidado", "As Igrejas Fazem Parte da Rede de Cuidado", "Churches Are Part of the Care Network")}
          </h2>
          <p className="text-charcoal font-light text-lg leading-relaxed max-w-2xl mx-auto">
            {getTranslation(
              "Las iglesias no son solo espectadoras de la misión. Participan del cuidado de quienes envían. MMC ayuda a las iglesias a comprender, apoyar y fortalecer a sus misioneros.",
              "Igrejas não são apenas espectadoras da missão. Elas participam do cuidado daqueles que enviam. A MMC busca ajudar igrejas a compreender, apoiar e fortalecer missionários.",
              "Churches are not merely spectators in missions. They participate in caring for those they send. MMC helps churches understand, support, and strengthen missionaries."
            )}
          </p>
          <div>
            <Link
              to="/church-engagement"
              className="inline-flex items-center gap-3 px-8 py-4 bg-inst-blue text-white font-bold text-xs tracking-widest uppercase rounded-sm hover:bg-inst-blue/90 transition-colors"
            >
              {getTranslation("Para Iglesias", "Para Igrejas", "For Churches")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 15. SEÇÃO — FOR ORGANIZATIONS */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-light-gray border-y border-light-gray">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-inst-blue uppercase tracking-widest text-xs font-bold block">
            {getTranslation("ORGANIZACIONES MISIONERAS", "ORGANIZAÇÕES MISSIONÁRIAS", "MISSION ORGANIZATIONS")}
          </span>
          <h2 className="text-3xl md:text-5xl font-heading text-charcoal leading-tight">
            {getTranslation("Apoyando a Organizaciones Misioneras", "Apoiando Organizações Missionárias", "Supporting Mission Organizations")}
          </h2>
          <p className="text-charcoal font-light text-lg leading-relaxed max-w-2xl mx-auto">
            {getTranslation(
              "Las organizaciones misioneras enfrentan el desafío de cuidar a personas que viven y sirven en contextos muy diferentes. MMC colabora mediante telemedicina, educación, salud mental y consultoría.",
              "Organizações missionárias enfrentam o desafio de cuidar de pessoas que vivem e servem em contextos muito diferentes. A MMC pode colaborar por meio de telessaúde, educação e consultoria.",
              "Mission organizations face the challenge of caring for people living and serving in diverse contexts. MMC collaborates through telehealth, education, mental health, and consulting."
            )}
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-white font-bold text-xs tracking-widest uppercase rounded-sm hover:bg-black transition-colors"
            >
              {getTranslation("Colaborar con MMC", "Parceria com a MMC", "Partner With MMC")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 16. SEÇÃO — FOR PROFESSIONALS */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-inst-blue uppercase tracking-widest text-xs font-bold block">
            {getTranslation("PROFESIONALES DE LA SALUD", "PROFISSIONAIS DE SAÚDE", "HEALTHCARE PROFESSIONALS")}
          </span>
          <h2 className="text-3xl md:text-5xl font-heading text-charcoal leading-tight">
            {getTranslation("Tu Profesión Puede Ser un Puente.", "Sua Profissão Pode se Tornar uma Ponte.", "Your Profession Can Become a Bridge.")}
          </h2>
          <p className="text-charcoal font-light text-lg leading-relaxed max-w-2xl mx-auto">
            {getTranslation(
              "Médicos, enfermeros, psicólogos, farmacéuticos, fisioterapeutas, profesionales de tecnología y educadores pueden utilizar sus competencias para servir a personas más allá de las fronteras geográficas.",
              "Médicos, enfermeiros, psicólogos, farmacêuticos, fisioterapeutas, profissionais de tecnologia e educadores podem utilizar suas competências para servir além das fronteiras.",
              "Doctors, nurses, psychologists, pharmacists, physiotherapists, tech professionals, and educators can use their skills to serve beyond geographic borders."
            )}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/volunteer"
              className="w-full sm:w-auto px-8 py-4 bg-inst-blue text-white font-bold text-xs tracking-widest uppercase rounded-sm hover:bg-inst-blue/90 transition-colors"
            >
              {getTranslation("Sé un Voluntario", "Seja um Voluntário", "Become a Volunteer")}
            </Link>
            <Link
              to="/volunteer"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-charcoal text-charcoal font-bold text-xs tracking-widest uppercase rounded-sm hover:bg-light-gray transition-colors"
            >
              {getTranslation("Explorar Oportunidades", "Explorar Oportunidades", "Explore Opportunities")}
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 17. SEÇÃO — INSIGHTS & RESOURCES */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-light-gray">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-inst-blue uppercase tracking-widest text-xs font-bold block">
              {getTranslation("CONTENIDO EDUCACIONAL", "CONTEÚDO EDUCACIONAL", "EDUCATIONAL CONTENT")}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-charcoal leading-tight">
              {getTranslation("Recursos y Publicaciones", "Conteúdo e Recursos", "Insights & Resources")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: getTranslation("Salud Misionera & Medicina Transcultural", "Saúde Missionária & Medicina Transcultural", "Missionary Health & Cross-Cultural Medicine"),
                desc: getTranslation("Artículos y recursos sobre adaptación, clima y salud en misiones.", "Artigos e recursos sobre adaptação, clima e saúde em missões.", "Articles and resources on adaptation, climate, and field health."),
              },
              {
                title: getTranslation("Telemedicina & Tecnología Segura", "Telemedicina & Tecnologia Segura", "Telehealth & Secure Technology"),
                desc: getTranslation("Guías sobre comunicación remota y confidencialidad en el campo.", "Guias sobre comunicação remota e confidencialidade no campo.", "Guides on remote communication and field confidentiality."),
              },
              {
                title: getTranslation("Resiliencia & Salud Emocional", "Resiliência & Saúde Emocional", "Resilience & Emotional Health"),
                desc: getTranslation("Herramientas de apoyo para prevención de burnout y vida familiar.", "Ferramentas de apoio para prevenção de burnout e vida familiar.", "Support tools for burnout prevention and family life."),
              },
            ].map((res, idx) => (
              <Link
                key={idx}
                to="/resources"
                className="bg-white p-8 rounded-sm border border-light-gray hover:border-inst-blue hover:shadow-md transition-all group block space-y-3"
              >
                <FileText className="w-8 h-8 text-inst-blue" />
                <h3 className="text-lg font-bold text-charcoal group-hover:text-inst-blue transition-colors">
                  {res.title}
                </h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed">{res.desc}</p>
                <div className="pt-2 inline-flex items-center gap-2 text-xs font-bold text-inst-blue uppercase tracking-widest">
                  {getTranslation("Ver recurso", "Ver recurso", "View resource")} <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 18. SEÇÃO — IMPACT (Qualitative Indicator) */}
      {/* ============================================================ */}
      <section className="py-20 px-6 md:px-12 bg-charcoal text-white text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <Globe2 className="w-12 h-12 text-mustard mx-auto mb-2" strokeWidth={1.5} />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
            {getTranslation("Una Red Global", "Uma Rede Global", "A Global Network")}
          </h2>
          <p className="text-xl font-light text-gray-300">
            {getTranslation(
              "Conectando personas, conocimiento y cuidado a través de las fronteras.",
              "Conectando pessoas, conhecimento e cuidado além das fronteiras.",
              "Connecting people, knowledge and care across borders."
            )}
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 19. CTA FINAL */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-inst-blue text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-mustard uppercase tracking-widest text-xs font-bold block">
            {getTranslation("Una misión. Muchas formas de servir. Una red de cuidado.", "Uma missão. Muitas formas de servir. Uma rede de cuidado.", "One mission. Many ways to serve. One network of care.")}
          </span>
          <h2 className="text-3xl md:text-5xl font-heading tracking-tight text-white leading-tight">
            {getTranslation("Hay un Lugar para Ti en Esta Misión.", "Há um Lugar para Você Nesta Missão.", "There Is a Place for You in This Mission.")}
          </h2>
          <p className="text-xl text-[#e0f2fe] font-light max-w-2xl mx-auto leading-relaxed">
            {getTranslation(
              "Puedes contribuir con tu profesión. Puedes apoyar como iglesia. Puedes colaborar como organización. Puedes servir como voluntario. Puedes ayudar a fortalecer una red que existe para cuidar a quienes fueron enviados.",
              "Você pode contribuir com sua profissão. Pode apoiar como igreja. Pode colaborar como organização. Pode servir como voluntário. Pode ajudar a fortalecer uma rede que existe para cuidar daqueles que foram enviados.",
              "You can contribute your profession. You can support as a church. You can collaborate as an organization. You can serve as a volunteer. You can help strengthen a network that exists to care for those who were sent."
            )}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link
              to="/volunteer"
              className="w-full sm:w-auto px-8 py-4 bg-charcoal text-white font-bold text-xs tracking-widest uppercase transition-colors rounded-sm shadow-md hover:bg-black"
            >
              {getTranslation("Involúcrate", "Participe", "Get Involved")}
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white font-bold text-xs tracking-widest uppercase transition-all rounded-sm shadow-sm hover:bg-white/10"
            >
              {getTranslation("Contactar a MMC", "Contato com a MMC", "Contact MMC")}
            </Link>
          </div>
        </div>
      </section>

      <GCNFooter />
    </main>
  );
}
