import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { GCNNavigation } from "../components/GCNNavigation";
import { GCNFooter } from "../components/GCNFooter";
import {
  ArrowRight,
  ShieldCheck,
  HeartPulse,
  Video,
  Brain,
  Users,
  MapPin,
  Globe2,
  Activity,
  BookOpen,
  Lock,
  Stethoscope,
  Clock,
  Network,
  AlertTriangle,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

export function TelemedicinePage() {
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
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <main className="min-h-screen bg-light-gray font-sans selection:bg-inst-blue selection:text-white flex flex-col">
      <GCNNavigation />

      {/* ============================================================ */}
      {/* 2. HERO SECTION */}
      {/* ============================================================ */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28 bg-charcoal text-white px-6 md:px-12 relative overflow-hidden flex items-center justify-center min-h-[70vh]">
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
          <img
            src="/images/telehealth_africa.jpg"
            alt="Telemedicina Missionária"
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
              {getTranslation(
                "Telemedicina Misionera",
                "Telemedicina Missionária",
                "Missionary Telemedicine"
              )}
            </h1>
            <p className="text-xl md:text-2xl font-light text-mustard max-w-3xl mx-auto leading-relaxed font-heading">
              {getTranslation(
                "Atención médica que atraviesa distancias para servir a quienes fueron enviados.",
                "Cuidado médico que atravessa distâncias para servir aqueles que foram enviados.",
                "Medical care that crosses distances to serve those who were sent."
              )}
            </p>
            <p className="text-lg md:text-xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed pt-2">
              {getTranslation(
                "La Telemedicina Misionera utiliza tecnologías de comunicación para conectar a misioneros y trabajadores transculturales con profesionales de la salud, ofreciendo orientación, evaluación, seguimiento y acceso a conocimiento clínico cuando la distancia o las limitaciones locales dificultan la atención presencial.",
                "A Telemedicina Missionária utiliza tecnologias de comunicação para conectar missionários e trabalhadores transculturais a profissionais de saúde, oferecendo orientação, avaliação, acompanhamento e acesso a conhecimento clínico quando a distância ou as limitações locais dificultam o cuidado presencial.",
                "Missionary Telemedicine uses communication technologies to connect missionaries and cross-cultural workers with healthcare professionals, offering guidance, evaluation, follow-up, and access to clinical knowledge when distance or local limitations hinder in-person care."
              )}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <a
                href="#o-que-e"
                className="w-full sm:w-auto px-8 py-4 bg-inst-blue text-white font-bold text-xs tracking-widest uppercase transition-colors rounded-sm shadow-sm hover:bg-inst-blue/90"
              >
                {getTranslation(
                  "CONOCE LA TELEMEDICINA MISIONERA",
                  "CONHEÇA A TELEMEDICINA MISSIONÁRIA",
                  "LEARN ABOUT MISSIONARY TELEMEDICINE"
                )}
              </a>
              <Link
                to="/volunteer"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-400 text-white font-bold text-xs tracking-widest uppercase transition-all rounded-sm shadow-sm hover:border-white hover:bg-white/10"
              >
                {getTranslation(
                  "SÉ UN PROFESIONAL VOLUNTARIO",
                  "SEJA UM PROFISSIONAL VOLUNTÁRIO",
                  "BECOME A VOLUNTEER PROFESSIONAL"
                )}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. SEÇÃO — O QUE É TELEMEDICINA MISSIONÁRIA? */}
      {/* ============================================================ */}
      <section id="o-que-e" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <span className="text-inst-blue uppercase tracking-widest text-xs font-bold block">
              {getTranslation("CONCEPTO Y PROPÓSITO", "CONCEITO E PROPÓSITO", "CONCEPT & PURPOSE")}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-charcoal leading-tight">
              {getTranslation(
                "¿Qué es la Telemedicina Misionera?",
                "O que é Telemedicina Missionária?",
                "What is Missionary Telemedicine?"
              )}
            </h2>
          </div>

          <div className="prose prose-lg mx-auto text-charcoal font-light leading-relaxed space-y-6">
            <p className="text-xl md:text-2xl font-light text-charcoal border-l-4 border-inst-blue pl-6 py-2 bg-light-gray/50 rounded-r-sm">
              {getTranslation(
                "La Telemedicina Misionera es el uso de la medicina a distancia para llevar cuidado clínico, orientación y seguimiento a misioneros y trabajadores transculturales que viven o sirven en lugares donde el acceso regular a la asistencia médica es limitado.",
                "Telemedicina Missionária é o uso da medicina à distância para levar cuidado clínico, orientação e acompanhamento aos missionários e trabalhadores transculturais que vivem ou servem em lugares onde o acesso regular à assistência de saúde é limitado.",
                "Missionary Telemedicine is the use of telemedicine to bring clinical care, guidance, and follow-up to missionaries and cross-cultural workers living or serving in places where regular access to healthcare is limited."
              )}
            </p>

            <p>
              {getTranslation(
                "Utiliza tecnologías de comunicación para conectar a personas en el campo con profesionales de la salud, permitiendo evaluación, orientación, seguimiento, segunda opinión y coordinación de la atención incluso cuando el médico y el paciente están separados por grandes distancias.",
                "Ela utiliza tecnologias de comunicação para conectar pessoas no campo a profissionais de saúde, permitindo avaliação, orientação, acompanhamento, segunda opinião e coordenação do cuidado mesmo quando médico e paciente estão separados por grandes distâncias.",
                "It uses communication technologies to connect people in the field with healthcare professionals, allowing evaluation, guidance, follow-up, second opinions, and care coordination even when doctor and patient are separated by great distances."
              )}
            </p>

            <p className="font-semibold text-charcoal text-xl pt-2">
              {getTranslation(
                "Pero la Telemedicina Misionera es más que una consulta por video.",
                "Mas Telemedicina Missionária é mais do que uma consulta por vídeo.",
                "But Missionary Telemedicine is more than a video consultation."
              )}
            </p>

            <p>
              {getTranslation(
                "Nace de una realidad específica: el misionero puede estar distante de centros médicos, vivir en regiones rurales o aisladas, enfrentar barreras lingüísticas y culturales, tener acceso limitado a especialistas o encontrar dificultades para buscar atención.",
                "Ela nasce de uma realidade específica: o missionário pode estar distante de centros médicos, viver em regiões rurais ou isoladas, enfrentar barreiras linguísticas e culturais, ter acesso limitado a especialistas ou encontrar dificuldades para buscar atendimento.",
                "It arises from a specific reality: the missionary may be far from medical centers, live in rural or isolated regions, face linguistic and cultural barriers, have limited access to specialists, or encounter difficulties seeking care."
              )}
            </p>
          </div>

          <div className="bg-charcoal text-white p-8 md:p-10 rounded-sm border-t-4 border-mustard shadow-md text-center space-y-4">
            <span className="text-mustard uppercase tracking-widest text-xs font-bold block">
              {getTranslation("PROPÓSITO CENTRAL", "PROPÓSITO CENTRAL", "CORE PURPOSE")}
            </span>
            <p className="text-xl md:text-2xl font-heading font-medium leading-relaxed">
              {getTranslation(
                "Por eso, su objetivo no es simplemente atender a distancia. Su objetivo es reducir el abandono sanitario y fortalecer la continuidad del cuidado de quienes fueron enviados.",
                "Por isso, seu objetivo não é simplesmente atender à distância. Seu objetivo é reduzir o abandono sanitário e fortalecer a continuidade do cuidado daqueles que foram enviados.",
                "Therefore, its goal is not simply remote consultation. Its goal is to reduce health abandonment and strengthen the continuity of care for those who were sent."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. FRASE-CHAVE DA PÁGINA */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-inst-blue/10"></div>
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading text-white leading-tight">
            {getTranslation(
              "La distancia no debe significar abandono.",
              "A distância não deve significar abandono.",
              "Distance should not mean abandonment."
            )}
          </h2>
          <div className="w-24 h-1 bg-mustard mx-auto"></div>
          <p className="text-xl md:text-2xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {getTranslation(
              "Cuando el acceso presencial es limitado, la tecnología puede ayudar a aproximar conocimiento, orientación y cuidado. La Telemedicina Misionera existe para construir ese puente.",
              "Quando o acesso presencial é limitado, a tecnologia pode ajudar a aproximar conhecimento, orientação e cuidado. A Telemedicina Missionária existe para construir essa ponte.",
              "When in-person access is limited, technology can help bridge knowledge, guidance, and care. Missionary Telemedicine exists to build that bridge."
            )}
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. SEÇÃO — POR QUE ELA EXISTE? */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-light-gray">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-inst-blue uppercase tracking-widest text-xs font-bold block">
              {getTranslation("DESAFÍOS DEL CAMPO", "DESAFIOS DO CAMPO", "FIELD CHALLENGES")}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-charcoal leading-tight">
              {getTranslation(
                "¿Por qué existe la Telemedicina Misionera?",
                "Por que existe a Telemedicina Missionária?",
                "Why does Missionary Telemedicine exist?"
              )}
            </h2>
            <p className="text-charcoal text-lg font-light">
              {getTranslation(
                "Para muchos trabajadores transculturales, el desafío no es solo que no haya un médico cerca. Es la combinación de diferentes barreras que dificultan el acceso y el mantenimiento del cuidado de salud a lo largo del tiempo.",
                "Para muitos trabalhadores transculturais, o desafio não é apenas não haver um médico próximo. É a combinação de diferentes barreiras que pode tornar o cuidado de saúde difícil de acessar e manter ao longo do tempo.",
                "For many cross-cultural workers, the challenge is not just the absence of a nearby doctor. It is the combination of different barriers that make healthcare difficult to access and sustain over time."
              )}
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm border border-light-gray shadow-sm">
              <MapPin className="w-10 h-10 text-inst-blue mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-charcoal mb-2 uppercase tracking-wide">
                {getTranslation("DISTANCIA GEOGRÁFICA", "DISTÂNCIA GEOGRÁFICA", "GEOGRAPHIC DISTANCE")}
              </h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                {getTranslation(
                  "Grandes distancias pueden separar a los misioneros de centros médicos, especialistas y servicios de referencia.",
                  "Grandes distâncias podem separar missionários de centros médicos, especialistas e serviços de referência.",
                  "Great distances can separate missionaries from medical centers, specialists, and referral services."
                )}
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm border border-light-gray shadow-sm">
              <Globe2 className="w-10 h-10 text-inst-blue mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-charcoal mb-2 uppercase tracking-wide">
                {getTranslation("AISLAMIENTO", "ISOLAMENTO", "ISOLATION")}
              </h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                {getTranslation(
                  "Algunos equipos trabajan en regiones rurales, remotas o con infraestructura muy limitada.",
                  "Algumas equipes trabalham em regiões rurais, remotas ou com infraestrutura limitada.",
                  "Some teams work in rural, remote regions with limited infrastructure."
                )}
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm border border-light-gray shadow-sm">
              <Users className="w-10 h-10 text-inst-blue mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-charcoal mb-2 uppercase tracking-wide">
                {getTranslation("ESCASEZ DE PROFESIONALES", "ESCASSEZ DE PROFISSIONAIS", "SCARCITY OF PROFESSIONALS")}
              </h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                {getTranslation(
                  "No todos los contextos cuentan con acceso regular a profesionales cualificados o especialistas.",
                  "Nem todos os contextos possuem acesso regular a profissionais qualificados ou especialistas.",
                  "Not all contexts have regular access to qualified professionals or specialists."
                )}
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm border border-light-gray shadow-sm">
              <Activity className="w-10 h-10 text-inst-blue mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-charcoal mb-2 uppercase tracking-wide">
                {getTranslation("TRANSPORTE Y COSTOS", "TRANSPORTE E CUSTOS", "TRANSPORT & COSTS")}
              </h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                {getTranslation(
                  "Los desplazamientos prolongados representan tiempo, costos financieros elevadísimos y serias dificultades logísticas.",
                  "Deslocamentos prolongados podem representar tempo, custos financeiros e dificuldades logísticas.",
                  "Prolonged travel can represent significant time, financial costs, and logistical difficulties."
                )}
              </p>
            </motion.div>

            {/* Card 5 */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm border border-light-gray shadow-sm">
              <BookOpen className="w-10 h-10 text-inst-blue mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-charcoal mb-2 uppercase tracking-wide">
                {getTranslation("BARRERAS LINGÜÍSTICAS Y CULTURALES", "BARREIRAS LINGUÍSTICAS E CULTURAIS", "LINGUISTIC & CULTURAL BARRIERS")}
              </h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                {getTranslation(
                  "El acceso adecuado al cuidado puede verse dificultado por diferencias lingüísticas, culturales y sociales.",
                  "O acesso adequado ao cuidado pode ser dificultado por diferenças linguísticas, culturais e sociais.",
                  "Adequate access to care can be hindered by linguistic, cultural, and social differences."
                )}
              </p>
            </motion.div>

            {/* Card 6 */}
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-sm border border-light-gray shadow-sm">
              <HeartPulse className="w-10 h-10 text-inst-blue mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-charcoal mb-2 uppercase tracking-wide">
                {getTranslation("CONTINUIDAD DEL CUIDADO", "CONTINUIDADE DO CUIDADO", "CONTINUITY OF CARE")}
              </h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                {getTranslation(
                  "Una consulta aislada no siempre resuelve una necesidad de salud. Muchos casos exigen un seguimiento continuo.",
                  "Uma consulta isolada nem sempre resolve uma necessidade de saúde. Muitos casos exigem acompanhamento.",
                  "An isolated consultation does not always solve a health need. Many cases require ongoing follow-up."
                )}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. SEÇÃO — MAIS DO QUE UMA CONSULTA REMOTA */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-inst-blue uppercase tracking-widest text-xs font-bold block">
              {getTranslation("ALCANCE INTEGRAL", "ALCANCE INTEGRAL", "COMPREHENSIVE SCOPE")}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-charcoal leading-tight">
              {getTranslation(
                "Más que una consulta remota",
                "Mais do que uma consulta remota",
                "More than a remote consultation"
              )}
            </h2>
            <p className="text-charcoal text-lg font-light">
              {getTranslation(
                "La Telemedicina Misionera no debe comprenderse solo como una videollamada entre médico y paciente. Forma parte de un enfoque más amplio de soporte a la salud, conectando conocimiento clínico, orientación y seguimiento.",
                "A Telemedicina Missionária não deve ser compreendida apenas como uma videochamada entre médico e paciente. Ela pode fazer parte de uma abordagem mais ampla de suporte à saúde, conectando conhecimento clínico, orientação, acompanhamento e acesso a profissionais.",
                "Missionary Telemedicine should not be understood merely as a video call between doctor and patient. It is part of a broader healthcare support approach, connecting clinical knowledge, guidance, follow-up, and access to professionals."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Actuación 1 */}
            <div className="bg-light-gray p-8 rounded-sm border-t-4 border-inst-blue space-y-3">
              <ShieldCheck className="w-8 h-8 text-inst-blue" />
              <h3 className="text-xl font-bold text-charcoal">
                {getTranslation("Prevención", "Prevenção", "Prevention")}
              </h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                {getTranslation(
                  "Educación en salud, preparación y orientación para reducir riesgos antes y durante el servicio transcultural.",
                  "Educação em saúde, preparação e orientação para reduzir riscos antes e durante o serviço transcultural.",
                  "Health education, preparation, and guidance to reduce risks before and during cross-cultural service."
                )}
              </p>
            </div>

            {/* Actuación 2 */}
            <div className="bg-light-gray p-8 rounded-sm border-t-4 border-mustard space-y-3">
              <Stethoscope className="w-8 h-8 text-mustard" />
              <h3 className="text-xl font-bold text-charcoal">
                {getTranslation("Orientación en salud", "Orientação em saúde", "Health Guidance")}
              </h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                {getTranslation(
                  "Información y orientación profesional para ayudar al misionero a comprender mejor una necesidad de salud.",
                  "Informação e orientação profissional para ajudar o missionário a compreender melhor uma necessidade de saúde.",
                  "Information and professional guidance to help the missionary better understand a health need."
                )}
              </p>
            </div>

            {/* Actuación 3 */}
            <div className="bg-light-gray p-8 rounded-sm border-t-4 border-inst-blue space-y-3">
              <Video className="w-8 h-8 text-inst-blue" />
              <h3 className="text-xl font-bold text-charcoal">
                {getTranslation("Atención médica remota", "Atendimento médico remoto", "Remote Medical Care")}
              </h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                {getTranslation(
                  "Evaluación clínica remota cuando sea apropiada y dentro de los límites técnicos, éticos y legales de la telemedicina.",
                  "Avaliação clínica remota quando apropriado e dentro dos limites técnicos, éticos e legais da telemedicina.",
                  "Remote clinical evaluation when appropriate and within technical, ethical, and legal limits of telemedicine."
                )}
              </p>
            </div>

            {/* Actuación 4 */}
            <div className="bg-light-gray p-8 rounded-sm border-t-4 border-mustard space-y-3">
              <Brain className="w-8 h-8 text-mustard" />
              <h3 className="text-xl font-bold text-charcoal">
                {getTranslation("Segunda opinión", "Segunda opinião", "Second Opinion")}
              </h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                {getTranslation(
                  "Conexión con profesionales capacitados cuando una evaluación adicional pueda contribuir a la toma de decisiones.",
                  "Conexão com profissionais capacitados quando uma avaliação adicional pode contribuir para a tomada de decisão.",
                  "Connection with qualified professionals when an additional evaluation can contribute to decision-making."
                )}
              </p>
            </div>

            {/* Actuación 5 */}
            <div className="bg-light-gray p-8 rounded-sm border-t-4 border-inst-blue space-y-3">
              <Clock className="w-8 h-8 text-inst-blue" />
              <h3 className="text-xl font-bold text-charcoal">
                {getTranslation("Seguimiento", "Acompanhamento", "Follow-up & Continuity")}
              </h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                {getTranslation(
                  "Continuidad de la atención para situaciones que exigen observación, reevaluación o seguimiento longitudinal.",
                  "Continuidade do cuidado para situações que exigem observação, reavaliação ou acompanhamento longitudinal.",
                  "Continuity of care for situations requiring observation, re-evaluation, or longitudinal follow-up."
                )}
              </p>
            </div>

            {/* Actuación 6 */}
            <div className="bg-light-gray p-8 rounded-sm border-t-4 border-mustard space-y-3">
              <Network className="w-8 h-8 text-mustard" />
              <h3 className="text-xl font-bold text-charcoal">
                {getTranslation("Coordinación", "Coordenação", "Care Coordination")}
              </h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                {getTranslation(
                  "Cuando la atención presencial es necesaria, la telemedicina ayuda a orientar la búsqueda del servicio adecuado.",
                  "Quando o cuidado presencial é necessário, a telemedicina pode ajudar a orientar a busca pelo serviço adequado.",
                  "When in-person care is necessary, telemedicine helps guide the search for the appropriate local service."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. SEÇÃO — O VALOR DA CONEXÃO */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-mustard uppercase tracking-widest text-xs font-bold block">
            {getTranslation("EL VALOR DE LA CONEXIÓN", "O VALOR DA CONEXÃO", "THE VALUE OF CONNECTION")}
          </span>
          <h2 className="text-3xl md:text-5xl font-heading text-white leading-tight">
            {getTranslation(
              "Conectar conocimiento. Aproximar cuidado. Fortalecer personas.",
              "Conectar conhecimento. Aproximar cuidado. Fortalecer pessoas.",
              "Connecting knowledge. Bringing care closer. Strengthening people."
            )}
          </h2>
          <div className="space-y-6 text-gray-300 font-light text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            <p>
              {getTranslation(
                "Un profesional de la salud puede estar a miles de kilómetros de distancia. Un misionero puede estar en una región donde el acceso a especialistas es limitado.",
                "Um profissional de saúde pode estar a milhares de quilômetros de distância. Um missionário pode estar em uma região onde o acesso a especialistas é limitado.",
                "A healthcare professional may be thousands of kilometers away. A missionary may be in a region where access to specialists is limited."
              )}
            </p>
            <p className="text-white font-medium text-2xl font-heading">
              {getTranslation(
                "La tecnología no elimina esa distancia. Pero puede crear un puente.",
                "A tecnologia não elimina essa distância. Mas pode criar uma ponte.",
                "Technology does not eliminate that distance. But it can create a bridge."
              )}
            </p>
            <p>
              {getTranslation(
                "La Telemedicina Misionera conecta a profesionales dispuestos a servir con personas que necesitan orientación y cuidado. Es una expresión práctica de cuidado hacia quienes sirven en contextos transculturales.",
                "A Telemedicina Missionária conecta profissionais dispostos a servir com pessoas que precisam de orientação e cuidado. É uma expressão prática de cuidado com aqueles que servem em contextos transculturais.",
                "Missionary Telemedicine connects professionals willing to serve with people who need guidance and care. It is a practical expression of care for those serving in cross-cultural contexts."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. SEÇÃO — MEDICINA + TECNOLOGIA + PESSOAS + SEGURANÇA */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-inst-blue uppercase tracking-widest text-xs font-bold block">
              {getTranslation("NUESTROS PILARES", "NOSSOS PILARES", "OUR PILLARS")}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-charcoal leading-tight">
              {getTranslation(
                "Tecnología al servicio del cuidado",
                "Tecnologia a serviço do cuidado",
                "Technology at the service of care"
              )}
            </h2>
            <p className="text-charcoal text-lg font-light">
              {getTranslation(
                "La tecnología no es la protagonista. La tecnología es la herramienta.",
                "A tecnologia não deve aparecer como protagonista. A tecnologia deve aparecer como ferramenta.",
                "Technology is not the protagonist. Technology is the tool."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pilar 1 */}
            <div className="bg-light-gray p-8 rounded-sm border border-light-gray text-center space-y-4">
              <div className="w-12 h-12 bg-charcoal text-white font-heading font-bold rounded-full flex items-center justify-center mx-auto text-lg">
                01
              </div>
              <h3 className="text-xl font-bold text-charcoal">
                {getTranslation("Medicina", "Medicina", "Medicine")}
              </h3>
              <p className="text-gray-600 font-light text-sm">
                {getTranslation(
                  "Conocimiento clínico, razonamiento médico y cuidado basado en evidencias.",
                  "Conhecimento clínico, raciocínio médico e cuidado baseado em evidências.",
                  "Clinical knowledge, medical reasoning, and evidence-based care."
                )}
              </p>
            </div>

            {/* Pilar 2 */}
            <div className="bg-light-gray p-8 rounded-sm border border-light-gray text-center space-y-4">
              <div className="w-12 h-12 bg-charcoal text-white font-heading font-bold rounded-full flex items-center justify-center mx-auto text-lg">
                02
              </div>
              <h3 className="text-xl font-bold text-charcoal">
                {getTranslation("Tecnología", "Tecnologia", "Technology")}
              </h3>
              <p className="text-gray-600 font-light text-sm">
                {getTranslation(
                  "Herramientas digitales que permiten la comunicación y colaboración a distancia.",
                  "Ferramentas digitais que permitem comunicação e colaboração à distância.",
                  "Digital tools enabling remote communication and collaboration."
                )}
              </p>
            </div>

            {/* Pilar 3 */}
            <div className="bg-light-gray p-8 rounded-sm border border-light-gray text-center space-y-4">
              <div className="w-12 h-12 bg-charcoal text-white font-heading font-bold rounded-full flex items-center justify-center mx-auto text-lg">
                03
              </div>
              <h3 className="text-xl font-bold text-charcoal">
                {getTranslation("Personas", "Pessoas", "People")}
              </h3>
              <p className="text-gray-600 font-light text-sm">
                {getTranslation(
                  "Profesionales voluntarios, misioneros, familias y comunidades.",
                  "Profissionais voluntários, missionários, famílias e comunidades.",
                  "Volunteer professionals, missionaries, families, and communities."
                )}
              </p>
            </div>

            {/* Pilar 4 */}
            <div className="bg-light-gray p-8 rounded-sm border border-light-gray text-center space-y-4">
              <div className="w-12 h-12 bg-charcoal text-white font-heading font-bold rounded-full flex items-center justify-center mx-auto text-lg">
                04
              </div>
              <h3 className="text-xl font-bold text-charcoal">
                {getTranslation("Seguridad", "Segurança", "Security")}
              </h3>
              <p className="text-gray-600 font-light text-sm">
                {getTranslation(
                  "Protección de la privacidad, identidad e información sensible.",
                  "Proteção da privacidade, identidade e informações sensíveis.",
                  "Protection of privacy, identity, and sensitive information."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. SEÇÃO — CUIDAR SEM EXPOR */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-light-gray">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <span className="text-inst-blue uppercase tracking-widest text-xs font-bold block">
              {getTranslation("CONFIDENCIALIDAD Y OPSEC", "CONFIDENCIALIDADE E OPSEC", "CONFIDENTIALITY & OPSEC")}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-charcoal leading-tight">
              {getTranslation("Cuidar sin exponer", "Cuidar sem expor", "Care without exposing")}
            </h2>
          </div>

          <div className="prose prose-lg mx-auto text-charcoal font-light leading-relaxed space-y-6">
            <p>
              {getTranslation(
                "En contextos transculturales y especialmente en ambientes donde la privacidad puede tener implicaciones adicionales, la atención de salud necesita considerar no solo la calidad clínica, sino también la protección de las personas.",
                "Em contextos transculturais e especialmente em ambientes onde a privacidade pode ter implicações adicionais, o cuidado de saúde precisa considerar não apenas a qualidade clínica, mas também a proteção das pessoas.",
                "In cross-cultural contexts, and especially in environments where privacy has additional security implications, healthcare must consider not only clinical quality but also personal protection."
              )}
            </p>

            <div className="bg-white p-8 rounded-sm border border-light-gray shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-charcoal uppercase tracking-wider">
                {getTranslation("MMC busca combinar:", "A MMC busca combinar:", "MMC strives to combine:")}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-inst-blue shrink-0" />
                  {getTranslation("Cuidado clínico responsable", "Cuidado clínico responsável", "Responsible clinical care")}
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-inst-blue shrink-0" />
                  {getTranslation("Privacidad estricta", "Privacidade estrita", "Strict privacy")}
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-inst-blue shrink-0" />
                  {getTranslation("Protección de datos", "Proteção de dados", "Data protection")}
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-inst-blue shrink-0" />
                  {getTranslation("Seguridad digital", "Segurança digital", "Digital security")}
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-inst-blue shrink-0" />
                  {getTranslation("Prudencia operacional", "Prudência operacional", "Operational prudence")}
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-inst-blue shrink-0" />
                  {getTranslation("Respeto al contexto local", "Respeito ao contexto local", "Respect for local context")}
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-charcoal text-white p-8 rounded-sm text-center border-l-4 border-mustard">
            <p className="text-2xl md:text-3xl font-heading font-bold text-mustard">
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
      {/* 10. SEÇÃO — QUEM SERVIMOS */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-inst-blue uppercase tracking-widest text-xs font-bold block">
              {getTranslation("BENEFICIARIOS", "BENEFICIÁRIOS", "BENEFICIARIES")}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-charcoal leading-tight">
              {getTranslation(
                "¿Para quién existe la Telemedicina Misionera?",
                "Para quem existe a Telemedicina Missionária?",
                "Who is Missionary Telemedicine for?"
              )}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Beneficiario 1 */}
            <div className="bg-light-gray p-8 rounded-sm border border-light-gray space-y-3">
              <Users className="w-8 h-8 text-inst-blue" />
              <h3 className="text-lg font-bold text-charcoal">
                {getTranslation("Misioneros", "Missionários", "Missionaries")}
              </h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                {getTranslation(
                  "Profesionales y trabajadores transculturales que sirven en diferentes contextos alrededor del mundo.",
                  "Profissionais e trabalhadores transculturais que servem em diferentes contextos ao redor do mundo.",
                  "Cross-cultural professionals and workers serving in various contexts around the world."
                )}
              </p>
            </div>

            {/* Beneficiario 2 */}
            <div className="bg-light-gray p-8 rounded-sm border border-light-gray space-y-3">
              <HeartHandshake className="w-8 h-8 text-inst-blue" />
              <h3 className="text-lg font-bold text-charcoal">
                {getTranslation("Familias misioneras", "Famílias missionárias", "Missionary Families")}
              </h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                {getTranslation(
                  "Cuidado y orientación para las necesidades de salud que pueden surgir durante la vida transcultural.",
                  "Cuidado e orientação para as necessidades de saúde que podem surgir durante a vida transcultural.",
                  "Care and guidance for health needs that arise during cross-cultural living."
                )}
              </p>
            </div>

            {/* Beneficiario 3 */}
            <div className="bg-light-gray p-8 rounded-sm border border-light-gray space-y-3">
              <Network className="w-8 h-8 text-inst-blue" />
              <h3 className="text-lg font-bold text-charcoal">
                {getTranslation("Equipos misioneros", "Equipes missionárias", "Missionary Teams")}
              </h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                {getTranslation(
                  "Soporte que contribuye a la continuidad y sostenibilidad del servicio en el campo.",
                  "Suporte que pode contribuir para a continuidade e sustentabilidade do serviço.",
                  "Support contributing to the continuity and sustainability of field service."
                )}
              </p>
            </div>

            {/* Beneficiario 4 */}
            <div className="bg-light-gray p-8 rounded-sm border border-light-gray space-y-3">
              <MapPin className="w-8 h-8 text-inst-blue" />
              <h3 className="text-lg font-bold text-charcoal">
                {getTranslation("Contextos aislados", "Contextos de acesso limitado", "Limited Access Settings")}
              </h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                {getTranslation(
                  "Personas que enfrentan dificultades geográficas, logísticas o estructurales para acceder a médicos.",
                  "Pessoas que enfrentam dificuldades geográficas, logísticas ou estruturais para acessar profissionais de saúde.",
                  "People facing geographical, logistical, or structural difficulties in accessing healthcare."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 11. SEÇÃO — O QUE TORNA A MMC DIFERENTE? */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <span className="text-mustard uppercase tracking-widest text-xs font-bold block">
              {getTranslation("ENFOQUE DIFERENCIAL", "ENFOQUE DIFERENCIAL", "DIFFERENTIAL APPROACH")}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-white leading-tight">
              {getTranslation(
                "Telemedicina con comprensión del contexto misionero",
                "Telemedicina com compreensão do contexto missionário",
                "Telemedicine with understanding of the missionary context"
              )}
            </h2>
          </div>

          <div className="space-y-6 text-gray-300 font-light text-lg leading-relaxed">
            <p>
              {getTranslation(
                "La Telemedicina Misionera exige más que conocimiento técnico. El profesional necesita comprender que el paciente puede estar viviendo una realidad cultural, geográfica, lingüística y operacional muy diferente a la encontrada en un ambiente asistencial convencional.",
                "A Telemedicina Missionária exige mais do que conhecimento técnico. O profissional precisa compreender que o paciente pode estar vivendo uma realidade cultural, geográfica, linguística e operacional muito diferente daquela encontrada em um ambiente convencional de assistência.",
                "Missionary Telemedicine demands more than technical knowledge. The professional must understand that the patient may be living in a cultural, geographical, linguistic, and operational reality very different from a conventional healthcare setting."
              )}
            </p>

            <div className="bg-charcoal/80 p-8 rounded-sm border border-[#334155] space-y-4">
              <h3 className="text-mustard font-bold text-sm uppercase tracking-widest">
                {getTranslation("MMC busca integrar:", "A MMC busca integrar:", "MMC seeks to integrate:")}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-mustard" />
                  {getTranslation("Medicina basada en evidencias", "Medicina baseada em evidências", "Evidence-based medicine")}
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-mustard" />
                  {getTranslation("Experiencia transcultural", "Experiência transcultural", "Cross-cultural experience")}
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-mustard" />
                  {getTranslation("Comunicación intercultural", "Comunicação intercultural", "Intercultural communication")}
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-mustard" />
                  {getTranslation("Ética profesional y privacidad", "Ética profissional e privacidade", "Professional ethics & privacy")}
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-mustard" />
                  {getTranslation("Continuridad del cuidado", "Continuidade do cuidado", "Continuity of care")}
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-mustard" />
                  {getTranslation("Sensibilidad humana", "Sensibilidade humana", "Human sensitivity")}
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white/10 p-8 rounded-sm border border-white/20 text-center">
            <p className="text-xl md:text-2xl font-serif italic text-mustard">
              "{getTranslation(
                "No tratamos solo una condición clínica. Procuramos comprender a la persona y el contexto en el que vive y sirve.",
                "Não tratamos apenas uma condição clínica. Procuramos compreender a pessoa e o contexto em que ela vive e serve.",
                "We do not merely treat a clinical condition. We strive to understand the person and the context in which they live and serve."
              )}"
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 12. SEÇÃO — UMA REDE DE PROFISSIONAIS */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <span className="text-inst-blue uppercase tracking-widest text-xs font-bold block">
              {getTranslation("RED VOLUNTARIA", "REDE VOLUNTÁRIA", "VOLUNTEER NETWORK")}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-charcoal leading-tight">
              {getTranslation(
                "Profesionales que eligen servir",
                "Profissionais que escolhem servir",
                "Professionals who choose to serve"
              )}
            </h2>
            <p className="text-charcoal text-lg font-light max-w-2xl mx-auto">
              {getTranslation(
                "La Telemedicina Misionera depende de una red de profesionales dispuestos a utilizar sus conocimientos para servir más allá de las fronteras geográficas.",
                "A Telemedicina Missionária depende de uma rede de profissionais dispostos a utilizar seus conhecimentos para servir além das fronteiras geográficas.",
                "Missionary Telemedicine depends on a network of professionals willing to use their knowledge to serve beyond geographical borders."
              )}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              getTranslation("Médicos", "Médicos", "Physicians"),
              getTranslation("Enfermeros", "Enfermeiros", "Nurses"),
              getTranslation("Psicólogos", "Psicólogos", "Psychologists"),
              getTranslation("Salud Mental", "Profissionais de saúde mental", "Mental Health Professionals"),
              getTranslation("Especialistas Clínicos", "Especialistas", "Specialists"),
              getTranslation("Farmacéuticos", "Farmacêuticos", "Pharmacists"),
              getTranslation("Fisioterapeutas", "Fisioterapeutas", "Physiotherapists"),
              getTranslation("Nutricionistas", "Nutricionistas", "Nutritionists"),
              getTranslation("Otros Profesionales de la Salud", "Outros profissionais de saúde qualificados", "Other Qualified Professionals"),
            ].map((prof, idx) => (
              <span
                key={idx}
                className="bg-light-gray px-5 py-3 border border-light-gray rounded-sm text-xs font-bold uppercase tracking-wider text-charcoal"
              >
                {prof}
              </span>
            ))}
          </div>

          <div className="pt-4">
            <Link
              to="/volunteer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-inst-blue text-white font-bold text-xs tracking-widest uppercase rounded-sm hover:bg-inst-blue/90 transition-colors"
            >
              {getTranslation(
                "QUIERO SERVIR COMO VOLUNTARIO",
                "QUERO SERVIR COMO VOLUNTÁRIO",
                "I WANT TO SERVE AS A VOLUNTEER"
              )}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 13. SEÇÃO — NÃO SUBSTITUI O CUIDADO PRESENCIAL */}
      {/* ============================================================ */}
      <section className="py-20 px-6 md:px-12 bg-light-gray border-y border-light-gray">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center">
            <AlertTriangle className="w-12 h-12 text-mustard" />
          </div>
          <h2 className="text-2xl md:text-4xl font-heading text-charcoal">
            {getTranslation(
              "La tecnología tiene límites",
              "A tecnologia tem limites",
              "Technology has limits"
            )}
          </h2>
          <p className="text-charcoal font-light text-lg leading-relaxed max-w-2xl mx-auto">
            {getTranslation(
              "La telemedicina no sustituye todas las atenciones presenciales. Existen situaciones en las que el examen físico, los análisis complementarios, los procedimientos, la hospitalización o la atención de emergencia son indispensables.",
              "Telemedicina não substitui todos os atendimentos presenciais. Existem situações em em que exame físico, exames complementares, procedimentos, hospitalização ou atendimento de emergência são indispensáveis.",
              "Telemedicine does not replace all in-person care. There are situations where physical examination, complementary tests, procedures, hospitalization, or emergency care are indispensable."
            )}
          </p>
          <div className="bg-white p-6 rounded-sm border border-light-gray max-w-2xl mx-auto">
            <p className="text-sm md:text-base font-bold text-charcoal uppercase tracking-wide">
              {getTranslation(
                "Cuando la atención presencial es necesaria, la prioridad es llegar a la atención presencial adecuada.",
                "Quando o cuidado presencial é necessário, a prioridade é chegar ao cuidado presencial adequado.",
                "When in-person care is required, the priority is accessing proper in-person care."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 14. SEÇÃO — VISÃO DE CUIDADO */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <span className="text-mustard uppercase tracking-widest text-xs font-bold block">
              {getTranslation("VISIÓN DE CUIDADO", "VISÃO DE CUIDADO", "VISION OF CARE")}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-white">
              {getTranslation(
                "Cuidar de quienes fueron enviados",
                "Cuidar de quem foi enviado",
                "Caring for those who were sent"
              )}
            </h2>
            <p className="text-gray-300 font-light text-lg leading-relaxed max-w-2xl mx-auto">
              {getTranslation(
                "Los misioneros son enviados a servir. Cuidar de la salud de quienes fueron enviados es parte de la responsabilidad de ayudarlos a permanecer saludables, seguros y preparados para continuar su servicio.",
                "Missionários são enviados para servir. Cuidar da saúde daqueles que foram enviados é parte da responsabilidade de ajudá-los a permanecer saudáveis, seguros e preparados para continuar seu serviço.",
                "Missionaries are sent to serve. Caring for the health of those who were sent is part of the responsibility to help them remain healthy, safe, and prepared to continue their service."
              )}
            </p>
          </div>

          <div className="w-16 h-px bg-mustard mx-auto opacity-50"></div>

          <div className="space-y-3 text-xl md:text-3xl font-serif italic text-white font-medium">
            <p>{getTranslation("La medicina sirve al cuidado.", "A medicina serve ao cuidado.", "Medicine serves care.")}</p>
            <p>{getTranslation("La tecnología sirve a la conexión.", "A tecnologia serve à conexão.", "Technology serves connection.")}</p>
            <p>{getTranslation("La seguridad sirve a la protección.", "A segurança serve à proteção.", "Security serves protection.")}</p>
            <p className="text-mustard font-bold not-italic pt-2">
              {getTranslation("Y el cuidado sirve a las personas.", "E o cuidado serve às pessoas.", "And care serves people.")}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 15. CTA FINAL */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-inst-blue text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-heading tracking-tight text-white leading-tight">
            {getTranslation(
              "Puedes ser parte de esta red.",
              "Você pode fazer parte dessa rede.",
              "You can be part of this network."
            )}
          </h2>
          <p className="text-xl text-[#e0f2fe] font-light max-w-2xl mx-auto leading-relaxed">
            {getTranslation(
              "Los profesionales de la salud pueden contribuir con su conocimiento. Las iglesias pueden apoyar y movilizar. Las organizaciones pueden colaborar. Los misioneros pueden encontrar una red de soporte.",
              "Profissionais de saúde podem contribuir com seu conhecimento. Igrejas podem apoiar e mobilizar. Organizações podem colaborar. Missionários podem encontrar uma rede de suporte.",
              "Healthcare professionals can contribute their knowledge. Churches can support and mobilize. Organizations can collaborate. Missionaries can find a support network."
            )}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link
              to="/volunteer"
              className="w-full sm:w-auto px-8 py-4 bg-charcoal text-white font-bold text-xs tracking-widest uppercase transition-colors rounded-sm shadow-md hover:bg-black"
            >
              {getTranslation(
                "SÉ UN VOLUNTARIO",
                "SEJA UM VOLUNTÁRIO",
                "BECOME A VOLUNTEER"
              )}
            </Link>
            <Link
              to="/about"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white font-bold text-xs tracking-widest uppercase transition-all rounded-sm shadow-sm hover:bg-white/10"
            >
              {getTranslation(
                "CONOCE LA MMC",
                "CONHEÇA A MMC",
                "ABOUT MMC"
              )}
            </Link>
          </div>
        </div>
      </section>

      <GCNFooter />
    </main>
  );
}
