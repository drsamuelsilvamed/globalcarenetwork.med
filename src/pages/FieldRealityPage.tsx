import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { GCNNavigation } from "../components/GCNNavigation";
import { GCNFooter } from "../components/GCNFooter";
import {
  ArrowRight,
  HeartPulse,
  Brain,
  Globe,
  Users,
  ShieldCheck,
  Compass,
  Lock,
  Sparkles,
  Activity,
  FileText,
  AlertTriangle,
  HeartHandshake,
  Baby,
  Clock,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";

export function FieldRealityPage() {
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

  return (
    <main className="min-h-screen bg-light-gray font-sans selection:bg-inst-blue selection:text-white flex flex-col">
      <GCNNavigation />

      {/* ============================================================ */}
      {/* 4 & 5. HERO SECTION */}
      {/* ============================================================ */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 bg-charcoal text-white px-6 md:px-12 relative overflow-hidden flex items-center justify-center min-h-[75vh]">
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay">
          <img
            src="/images/rural_care.jpg"
            alt="The Reality of Missionary Healthcare"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full max-w-5xl mx-auto relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-6">
            <span className="text-inst-blue uppercase tracking-[0.25em] text-xs font-bold block">
              {getTranslation("LA REALIDAD", "A REALIDADE", "THE REALITY")}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading tracking-tight leading-[1.1] text-white">
              {getTranslation(
                "Servir entre Culturas Cambia la Realidad de la Salud.",
                "Servir entre Culturas Muda a Realidade da Saúde.",
                "Serving Across Cultures Changes the Reality of Healthcare."
              )}
            </h1>
            <p className="text-xl md:text-2xl font-light text-mustard max-w-3xl mx-auto leading-relaxed font-heading">
              {getTranslation(
                "Servir en otra cultura puede significar adaptarse a sistemas de salud desconocidos, aislamiento geográfico, barreras lingüísticas, presiones familiares, estrés crónico y acceso limitado a atención médica de confianza.",
                "Servir em outra cultura pode significar adaptar-se a sistemas de saúde desconhecidos, isolamento geográfico, barreiras linguísticas, pressões familiares, estresse crônico e acesso limitado a cuidados de confiança.",
                "Serving in another culture can mean adapting to unfamiliar health systems, geographic isolation, language barriers, family pressures, chronic stress and limited access to trusted care."
              )}
            </p>
            <p className="text-lg md:text-xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {getTranslation(
                "Para muchos trabajadores y sus familias, la atención médica no se puede dar por sentada.",
                "Para muitos trabalhadores e suas famílias, os cuidados de saúde não podem ser simplesmente presumidos.",
                "For many workers and their families, healthcare cannot simply be assumed."
              )}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <a
                href="#why-mmc"
                className="w-full sm:w-auto px-8 py-4 bg-inst-blue text-white font-bold text-xs tracking-widest uppercase transition-colors rounded-sm shadow-sm hover:bg-inst-blue/90"
              >
                {getTranslation("POR QUÉ EXISTE MMC", "POR QUE A MMC EXISTE", "WHY MMC EXISTS")}
              </a>
              <Link
                to="/what-we-do"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-400 text-white font-bold text-xs tracking-widest uppercase transition-all rounded-sm shadow-sm hover:border-white hover:bg-white/10"
              >
                {getTranslation("QUÉ HACEMOS", "O QUE FAZEMOS", "WHAT WE DO")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. SEÇÃO — THE REALITY */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <span className="text-inst-blue uppercase tracking-widest text-xs font-bold block">
            {getTranslation("COMPLEJIDAD INTEGRAL", "COMPLEXIDADE INTEGRAL", "INTEGRAL COMPLEXITY")}
          </span>
          <h2 className="text-3xl md:text-5xl font-heading text-charcoal leading-tight">
            {getTranslation(
              "La realidad es más compleja que la distancia.",
              "A realidade é mais complexa do que a distância.",
              "The Reality Is More Complex Than Distance."
            )}
          </h2>
          <div className="space-y-6 text-charcoal font-light text-lg md:text-xl leading-relaxed text-left md:text-center max-w-3xl mx-auto">
            <p>
              {getTranslation(
                "Los desafíos que enfrentan los trabajadores transculturales rara vez son causados por un solo factor. La adaptación cultural, el aislamiento, las demandas ocupacionales, las necesidades de salud, las responsabilidades familiares y la incertidumbre interactúan con el tiempo.",
                "Os desafios enfrentados por trabalhadores transculturais raramente são causados por um único fator. Adaptação cultural, isolamento, demandas ocupacionais, necessidades de saúde, responsabilidades familiares e incerteza interagem ao longo do tempo.",
                "The challenges faced by cross-cultural workers are rarely caused by a single factor. Cultural adaptation, isolation, occupational demands, health needs, family responsibilities and uncertainty can interact over time."
              )}
            </p>
            <p className="font-heading font-medium text-mustard text-xl pt-4">
              {getTranslation(
                "La salud del trabajador transcultural debe entenderse como la interacción constante entre factores físicos, psicológicos, sociales, familiares, culturales, espirituales y ambientales.",
                "A saúde do trabalhador transcultural deve ser entendida como uma interação constante entre fatores físicos, psicológicos, sociais, familiares, culturais, espirituais e ambientais.",
                "Cross-cultural worker health must be understood as an ongoing interaction between physical, psychological, social, family, cultural, spiritual, and environmental factors."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. SEÇÃO — DEFINING THE POPULATION */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-light-gray">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-inst-blue uppercase tracking-widest text-xs font-bold block">
              {getTranslation("DIVERSIDAD DE PERFILES", "DIVERSIDADE DE PERFIS", "POLL POPULATION DIVERSITY")}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-charcoal leading-tight">
              {getTranslation("¿De Quiénes Estamos Hablando?", "De Quem Estamos Falando?", "Who Are We Talking About?")}
            </h2>
            <p className="text-gray-600 font-light text-lg">
              {getTranslation(
                "El término 'trabajadores transculturales' engloba una amplia gama de profesionales y familias en servicio internacional.",
                "O termo 'trabalhadores transculturais' abrange uma vasta gama de profissionais e famílias em serviço internacional.",
                "The term 'cross-cultural workers' encompasses a wide category of professionals and families in international service."
              )}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {[
              getTranslation("Misioneros", "Missionários", "Missionaries"),
              getTranslation("Misioneros de la Salud", "Missionários da Saúde", "Healthcare Missionaries"),
              getTranslation("Trabajadores Humanitarios", "Trabalhadores Humanitários", "Humanitarian Workers"),
              getTranslation("Desarrollo Internacional", "Desenvolvimento Internacional", "International Development Workers"),
              getTranslation("Hacedores de Tiendas", "Fazedores de Tendas", "Tentmakers"),
              getTranslation("Trabajadores de ONGs", "Trabalhadores de ONGs", "NGO Workers"),
              getTranslation("Negocios como Misión", "Negócios como Missão", "Business-as-Mission"),
              getTranslation("Expatriados", "Expatriados", "Expatriates"),
            ].map((pop, idx) => (
              <div key={idx} className="bg-white p-6 rounded-sm border border-light-gray font-bold text-xs uppercase tracking-widest text-charcoal shadow-sm">
                {pop}
              </div>
            ))}
          </div>

          <div className="bg-charcoal text-white p-8 md:p-10 rounded-sm text-center border-l-4 border-mustard max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl font-heading font-bold text-mustard">
              {getTranslation(
                "Diferentes trabajadores enfrentan diferentes riesgos. El contexto importa.",
                "Diferentes trabalhadores enfrentam diferentes riscos. O contexto importa.",
                "Different workers face different risks. Context matters."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. SEÇÃO — CULTURAL ADAPTATION */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-inst-blue uppercase tracking-widest text-xs font-bold block">
              {getTranslation("ADAPTACIÓN Y DESGASTE", "ADAPTAÇÃO E DESGASTE", "ADAPTATION & COST")}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-charcoal leading-tight">
              {getTranslation("Vivir Entre Culturas Tiene un Costo.", "Viver Entre Culturas Tem um Custo.", "Living Between Cultures Has a Cost.")}
            </h2>
            <p className="text-gray-600 font-light text-lg">
              {getTranslation(
                "La adaptación transcultural exige un esfuerzo cognitivo, emocional y social continuo.",
                "A adaptação transcultural exige um esforço cognitivo, emocional e social contínuo.",
                "Cross-cultural adaptation requires continuous cognitive, emotional, and social effort."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-light-gray rounded-sm border border-light-gray space-y-3">
              <Compass className="w-8 h-8 text-inst-blue" />
              <h3 className="text-xl font-heading font-bold text-charcoal">
                {getTranslation("Ajuste Cultural", "Ajuste Cultural", "Cultural Adjustment")}
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                {getTranslation(
                  "Aprender nuevas normas sociales, comportamientos y códigos no escritos genera sobrecarga adaptativa.",
                  "Aprender novas normas sociais e comportamentais exige constante flexibilidade e energia mental.",
                  "Learning new social norms and unwritten behavioral codes generates adaptive overload."
                )}
              </p>
            </div>

            <div className="p-8 bg-light-gray rounded-sm border border-light-gray space-y-3">
              <Globe className="w-8 h-8 text-inst-blue" />
              <h3 className="text-xl font-heading font-bold text-charcoal">
                {getTranslation("Barreras Lingüísticas", "Barreiras Linguísticas", "Language Barriers")}
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                {getTranslation(
                  "Dificultad para comunicar síntomas físicos, emociones complejas y necesidades médicas urgentes.",
                  "Dificuldade de comunicar sintomas, emoções e necessidades médicas complexas em outro idioma.",
                  "Difficulty communicating complex symptoms, emotional distress, and urgent medical needs."
                )}
              </p>
            </div>

            <div className="p-8 bg-light-gray rounded-sm border border-light-gray space-y-3">
              <Users className="w-8 h-8 text-inst-blue" />
              <h3 className="text-xl font-heading font-bold text-charcoal">
                {getTranslation("Aislamiento Social", "Isolamento Social", "Social Isolation")}
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                {getTranslation(
                  "Distancia de las redes familiares, profesionales y de soporte conocidas en el país de origen.",
                  "Distância das redes familiares e sociais conhecidas, aumentando a sensação de desamparo.",
                  "Distance from familiar family, professional, and social support networks back home."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. SEÇÃO — HEALTH (Physical, Mental, Preventive) */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-charcoal text-white">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-mustard uppercase tracking-widest text-xs font-bold block">
              {getTranslation("DIMENSIONES CLÍNICAS", "DIMENSÕES CLÍNICAS", "CLINICAL DIMENSIONS")}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-white leading-tight">
              {getTranslation("La Salud No Se Detiene Porque la Misión Continúe.", "A Saúde Não Para Porque a Missão Continua.", "Health Does Not Pause Because the Mission Continues.")}
            </h2>
            <p className="text-gray-300 font-light text-lg">
              {getTranslation(
                "Los trabajadores transculturales continúan sujetos a toda la gama de necesidades de salud física, mental y preventiva.",
                "Trabalhadores transculturais continuam sujeitos a toda a gama de necessidades de saúde física, mental e preventiva.",
                "Cross-cultural workers remain subject to the full spectrum of physical, mental, and preventive health needs."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm space-y-4">
              <HeartPulse className="w-10 h-10 text-mustard" />
              <h3 className="text-2xl font-heading font-bold text-white">
                {getTranslation("Salud Física", "Saúde Física", "Physical Health")}
              </h3>
              <ul className="space-y-2 text-sm text-gray-300 font-light">
                <li>• {getTranslation("Enfermedades infecciosas y tropicales", "Doenças infecciosas e tropicais", "Infectious & tropical diseases")}</li>
                <li>• {getTranslation("Enfermedades crónicas (hipertensión, diabetes)", "Doenças crônicas (hipertensão, diabetes)", "Chronic conditions (hypertension, diabetes)")}</li>
                <li>• {getTranslation("Problemas musculoesqueléticos", "Problemas musculoesqueléticos", "Musculoskeletal issues")}</li>
                <li>• {getTranslation("Trastornos del sueño y fatiga crónica", "Distúrbios do sono e fadiga crônica", "Sleep disorders & chronic fatigue")}</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-sm space-y-4">
              <Brain className="w-10 h-10 text-mustard" />
              <h3 className="text-2xl font-heading font-bold text-white">
                {getTranslation("Salud Mental", "Saúde Mental", "Mental Health")}
              </h3>
              <ul className="space-y-2 text-sm text-gray-300 font-light">
                <li>• {getTranslation("Ansiedad y depresión", "Ansiedade e depressão", "Anxiety & depression")}</li>
                <li>• {getTranslation("Burnout y agotamiento vocacional", "Burnout e esgotamento vocacional", "Burnout & vocational fatigue")}</li>
                <li>• {getTranslation("Estrés traumático y secundario", "Estresse traumático e secundário", "Traumatic & secondary stress")}</li>
                <li>• {getTranslation("Fatiga por compasión y sufrimiento moral", "Fadiga por compaixão e sofrimento moral", "Compassion fatigue & moral injury")}</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-sm space-y-4">
              <Activity className="w-10 h-10 text-mustard" />
              <h3 className="text-2xl font-heading font-bold text-white">
                {getTranslation("Salud Preventiva", "Saúde Preventiva", "Preventive Health")}
              </h3>
              <ul className="space-y-2 text-sm text-gray-300 font-light">
                <li>• {getTranslation("Vacunación e inmunizaciones", "Vacinação e imunizações", "Vaccinations & immunizations")}</li>
                <li>• {getTranslation("Chequeos y rastreo oportuno", "Check-ups e rastreamento", "Check-ups & timely screenings")}</li>
                <li>• {getTranslation("Salud bucal y reproductiva", "Saúde bucal e reprodutiva", "Oral & reproductive health")}</li>
                <li>• {getTranslation("Seguimiento continuo de tratamientos", "Acompanhamento contínuo de tratamentos", "Ongoing treatment monitoring")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. SEÇÃO — THE DISTANCE PROBLEM */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-inst-blue uppercase tracking-widest text-xs font-bold block">
              {getTranslation("BARRERAS GEOGRÁFICAS", "BARREIRAS GEOGRÁFICAS", "GEOGRAPHIC BARRIERS")}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-charcoal leading-tight">
              {getTranslation("Cuando la Distancia Se Convierte en un Problema Médico.", "Quando a Distância Se Torna um Problema Médico.", "When Distance Becomes a Medical Problem.")}
            </h2>
            <p className="text-charcoal font-light text-lg max-w-3xl mx-auto">
              {getTranslation(
                "El concepto de la 'tiranía de la distancia' demuestra cómo la separación geográfica altera el tiempo hasta la atención, la disponibilidad de especialistas, el acceso a exámenes y la continuidad del cuidado.",
                "O conceito da 'tirania da distância' demonstra como a separação geográfica altera o tempo até o atendimento, a disponibilidade de especialistas, o acesso a exames e a continuidade do cuidado.",
                "The concept of the 'tyranny of distance' shows how geographic separation alters time to care, specialist availability, diagnostics access, and care continuity."
              )}
            </p>
          </div>

          {/* Visual Flow diagram */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-6">
            <div className="bg-light-gray p-6 rounded-sm border border-light-gray font-bold text-charcoal">
              {getTranslation("NECESIDAD", "NECESSIDADE", "NEED")}
            </div>
            <div className="bg-light-gray p-6 rounded-sm border border-light-gray font-bold text-charcoal">
              {getTranslation("DISTANCIA", "DISTÂNCIA", "DISTANCE")}
            </div>
            <div className="bg-light-gray p-6 rounded-sm border border-light-gray font-bold text-charcoal">
              {getTranslation("RETRASO", "ATRASO", "DELAY")}
            </div>
            <div className="bg-charcoal text-white p-6 rounded-sm border border-charcoal font-bold">
              {getTranslation("MAYOR COMPLEJIDAD", "MAIOR COMPLEXIDADE", "GREATER COMPLEXITY")}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 12 & 13. SEÇÃO — MENTAL HEALTH & STIGMA */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-light-gray">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-inst-blue uppercase tracking-widest text-xs font-bold block">
              {getTranslation("SALUD EMOCIONAL", "SAÚDE EMOCIONAL", "EMOTIONAL HEALTH")}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-charcoal leading-tight">
              {getTranslation("El Peso Silencioso del Servicio.", "O Peso Silencioso do Serviço.", "The Silent Weight of Service.")}
            </h2>
            <p className="text-gray-600 font-light text-lg">
              {getTranslation(
                "La salud mental puede verse profundamente afectada por el aislamiento, la incertidumbre, el trauma acumulado y el estigma social.",
                "A saúde mental pode ser profundamente afetada pelo isolamento, incerteza, trauma acumulado e estigma social.",
                "Mental health can be deeply impacted by isolation, uncertainty, accumulated trauma, and social stigma."
              )}
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-sm border border-light-gray shadow-sm space-y-6 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-4xl font-heading font-bold text-charcoal">
              {getTranslation("Cuando Pedir Ayuda Se Siente Como un Fracaso.", "Quando Pedir Ajuda Parece um Fracasso.", "When Asking for Help Feels Like Failure.")}
            </h3>
            <p className="text-gray-600 font-light text-lg leading-relaxed">
              {getTranslation(
                "A menudo, pedir ayuda psicológica o reconocer el cansancio es interpretado erróneamente por el trabajador como una falta de fe o debilidad personal.",
                "Muitas vezes, pedir ajuda psicológica ou reconhecer o cansaço é interpretado erroneamente pelo próprio trabalhador como falta de fé ou fraqueza.",
                "Often, seeking psychological support or admitting exhaustion is mistakenly interpreted by workers as a lack of faith or weakness."
              )}
            </p>
            <div className="pt-4 border-t border-light-gray">
              <p className="text-xl md:text-2xl font-heading font-bold text-inst-blue">
                {getTranslation("La resiliencia no es la ausencia de vulnerabilidad.", "Resiliência não é a ausência de vulnerabilidade.", "Resilience is not the absence of vulnerability.")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 14. SEÇÃO — BURNOUT */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-inst-blue uppercase tracking-widest text-xs font-bold block">
            {getTranslation("LÍMITES HUMANOS", "LIMITES HUMANOS", "HUMAN LIMITS")}
          </span>
          <h2 className="text-3xl md:text-5xl font-heading text-charcoal leading-tight">
            {getTranslation("El Compromiso No Debe Exigir el Colapso.", "O Compromisso Não Deve Exigir o Colapso.", "Commitment Should Not Require Collapse.")}
          </h2>
          <p className="text-charcoal font-light text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            {getTranslation(
              "Existe una diferencia fundamental entre la fidelidad vocacional y el descuido propio. La entrega en la misión no elimina la necesidad de descanso, tratamiento médico e intervención temprana.",
              "Existe uma diferença fundamental entre fidelidade vocacional e o auto-negligenciamento. O compromisso com a missão não elimina a necessidade de descanso, tratamento e intervenção precoce.",
              "There is a fundamental difference between vocational faithfulness and self-neglect. Commitment to service does not eliminate the need for rest, medical treatment, and early intervention."
            )}
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 15 & 16. SEÇÃO — FAMILY & THIRD CULTURE KIDS */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-light-gray">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-inst-blue uppercase tracking-widest text-xs font-bold block">
              {getTranslation("EL ECOSISTEMA FAMILIAR", "O ECOSSISTEMA FAMILIAR", "THE FAMILY ECOSYSTEM")}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-charcoal leading-tight">
              {getTranslation("El Misionero No Está Solo.", "O Missionário Não Está Só.", "The Missionary Is Not Alone.")}
            </h2>
            <p className="text-gray-600 font-light text-lg">
              {getTranslation(
                "El cuidado integral debe incluir a toda la familia. El bienestar de los cónyuges e hijos determina la sostenibilidad del servicio.",
                "O cuidado integral precisa incluir toda a família. O bem-estar de cônjuges e filhos determina a sustentabilidade do serviço.",
                "Comprehensive care must include the entire family. The well-being of spouses and children directly shapes service sustainability."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-sm border border-light-gray space-y-4 shadow-sm">
              <Users className="w-8 h-8 text-inst-blue" />
              <h3 className="text-xl font-heading font-bold text-charcoal">
                {getTranslation("Dinámica Familiar y Matrimonial", "Dinâmica Familiar e Matrimonial", "Family & Marriage Dynamics")}
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                {getTranslation(
                  "La presión de adaptación, el aislamiento social y la distancia de los padres ancianos generan tensiones familiares significativas.",
                  "Estresse de adaptação, isolamento e preocupações com pais idosos à distância geram desafios familiares contínuos.",
                  "Adaptation stress, social isolation, and concern for aging parents far away create ongoing family pressures."
                )}
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm border border-light-gray space-y-4 shadow-sm">
              <Baby className="w-8 h-8 text-inst-blue" />
              <h3 className="text-xl font-heading font-bold text-charcoal">
                {getTranslation("Creciendo Entre Mundos (TCKs)", "Crescendo Entre Mundos (TCKs)", "Growing Up Between Worlds (TCKs)")}
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                {getTranslation(
                  "Los hijos de misioneros (TCKs/MKs) desarrollan una valiosa flexibilidad cultural, pero también atraviesan constantes pérdidas e incertidumbres de pertenencia.",
                  "Filhos de missionários (TCKs/MKs) desenvolvem grande flexibilidade cultural, mas também enfrentam constantes transições e perdas.",
                  "Third Culture Kids (TCKs/MKs) develop rich cultural flexibility, but also face repeated transitions, loss, and identity challenges."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 18 & 19. SEÇÃO — CONTEXT & RESTRICTED ACCESS & PRIVACY */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-charcoal text-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-mustard uppercase tracking-widest text-xs font-bold block">
              {getTranslation("CONTEXTO Y SEGURIDAD", "CONTEXTO E SEGURANÇA", "CONTEXT & SECURITY")}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-white leading-tight">
              {getTranslation("Cuando el Acceso y la Privacidad Se Convierten en Parte de la Salud.", "Quando o Acesso e a Privacidade Se Tornam Parte dos Cuidados de Saúde.", "When Access and Privacy Become Part of Healthcare.")}
            </h2>
            <p className="text-gray-300 font-light text-lg max-w-3xl mx-auto">
              {getTranslation(
                "En algunos ambientes bajo supervisión o restricción, buscar asistencia médica o psicológica puede involucrar riesgos adicionales de privacidad, registros digitales y exposición de identidad.",
                "Em alguns ambientes sob supervisão ou restrição, buscar assistência médica pode envolver riscos adicionais de privacidade e segurança.",
                "In some monitored or restricted settings, seeking medical care can involve additional privacy, digital record, and identity risks."
              )}
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-sm text-center space-y-4">
            <Lock className="w-10 h-10 text-mustard mx-auto" />
            <h3 className="text-2xl font-heading font-bold text-white">
              {getTranslation("La Tecnología Puede Acortar Distancias. No Debe Crear Nuevos Riesgos.", "A Tecnologia Pode Encurtar Distâncias. Não Deve Criar Novos Riscos.", "Technology Can Close Distance. It Must Not Create New Risk.")}
            </h3>
            <p className="text-gray-300 font-light text-base max-w-2xl mx-auto">
              {getTranslation(
                "La tecnología de salud debe ser diseñada para proteger a las personas a las que sirve mediante principios de minimización de datos y confidencialidad.",
                "A tecnologia em saúde deve ser projetada para proteger as pessoas a quem serve por meio de confidencialidade e segurança.",
                "Healthcare technology must protect the person it is designed to serve through strict privacy and data minimization."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 22 & 23. SEÇÃO — WHOLE PERSON CARE & RESILIENCE */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-inst-blue uppercase tracking-widest text-xs font-bold block">
              {getTranslation("ENFOQUE INTEGRAL", "ABORDAGEM INTEGRAL", "WHOLE PERSON CARE")}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-charcoal leading-tight">
              {getTranslation("El Objetivo No Es Simplemente Sobrevivir.", "O Objetivo Não É Apenas Sobreviver.", "The Goal Is Not Merely to Survive.")}
            </h2>
            <p className="text-gray-600 font-light text-lg">
              {getTranslation(
                "El objetivo del cuidado no es simplemente mantener a las personas en el campo a toda costa, sino promover un servicio saludable y sostenible.",
                "O objetivo do cuidado não é simplesmente manter as pessoas no campo a qualquer custo, mas promover um serviço saudável e sustentável.",
                "The goal of care is not merely to keep people in the field at any cost, but to promote healthy, sustainable service."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-light-gray rounded-sm border border-light-gray space-y-2">
              <span className="text-xs font-bold text-inst-blue tracking-widest uppercase">
                {getTranslation("NIVEL 01", "NÍVEL 01", "LEVEL 01")}
              </span>
              <h3 className="text-xl font-bold text-charcoal">
                {getTranslation("SUPERVIVENCIA", "SOBREVIVÊNCIA", "SURVIVAL")}
              </h3>
              <p className="text-gray-600 text-xs font-light">
                {getTranslation("Permanecer físicamente en el campo.", "Permanecer fisicamente no campo.", "Remain physically in the field.")}
              </p>
            </div>
            <div className="p-6 bg-light-gray rounded-sm border border-light-gray space-y-2">
              <span className="text-xs font-bold text-inst-blue tracking-widest uppercase">
                {getTranslation("NIVEL 02", "NÍVEL 02", "LEVEL 02")}
              </span>
              <h3 className="text-xl font-bold text-charcoal">
                {getTranslation("SOSTENIBILIDAD", "SUSTENTABILIDADE", "SUSTAINABILITY")}
              </h3>
              <p className="text-gray-600 text-xs font-light">
                {getTranslation("Continuar actividades sin colapso inmediato.", "Continuar atividades sem colapso imediato.", "Continue activities without immediate collapse.")}
              </p>
            </div>
            <div className="p-6 bg-light-gray rounded-sm border border-light-gray space-y-2">
              <span className="text-xs font-bold text-inst-blue tracking-widest uppercase">
                {getTranslation("NIVEL 03", "NÍVEL 03", "LEVEL 03")}
              </span>
              <h3 className="text-xl font-bold text-charcoal">
                {getTranslation("RESILIENCIA", "RESILIÊNCIA", "RESILIENCE")}
              </h3>
              <p className="text-gray-600 text-xs font-light">
                {getTranslation("Adaptarse y recuperarse ante la adversidad.", "Adaptar-se e recuperar-se diante da adversidade.", "Adapt and recover in the face of adversity.")}
              </p>
            </div>
            <div className="p-6 bg-charcoal text-white rounded-sm space-y-2">
              <span className="text-xs font-bold text-mustard tracking-widest uppercase">
                {getTranslation("NIVEL 04", "NÍVEL 04", "LEVEL 04")}
              </span>
              <h3 className="text-xl font-bold text-white">
                {getTranslation("FLORECIMIENTO", "FLORESCIMENTO", "FLOURISHING")}
              </h3>
              <p className="text-gray-300 text-xs font-light">
                {getTranslation("Experimentar salud, propósito e integración.", "Experimentar saúde, propósito e integração.", "Experience health, purpose, and integration.")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 26. SEÇÃO — THE GAP */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-light-gray">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-inst-blue uppercase tracking-widest text-xs font-bold block">
              {getTranslation("LA BRECHA DE CUIDADO", "A LACUNA DE CUIDADO", "THE CARE GAP")}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-charcoal leading-tight">
              {getTranslation("Existe una Brecha entre la Necesidad y el Acceso.", "Existe uma Lacuna entre a Necessidade e o Acesso.", "There Is a Gap Between Need and Access.")}
            </h2>
            <p className="text-charcoal font-light text-lg max-w-3xl mx-auto">
              {getTranslation(
                "Entre las emergencias agudas y el apoyo pastoral continuo, existe una necesidad crítica de continuidad clínica médica y de salud mental especializada.",
                "Entre emergências agudas e o suporte pastoral contínuo, existe uma necessidade crítica de continuidade clínica médica e de saúde mental especializada.",
                "Between acute emergency response and ongoing pastoral care, there is a critical need for continuous specialized medical and mental health clinical support."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-sm border border-light-gray space-y-3">
              <h3 className="text-lg font-bold text-charcoal">
                {getTranslation("ATENCIÓN DE EMERGENCIA", "ATENDIMENTO DE EMERGÊNCIA", "EMERGENCY CARE")}
              </h3>
              <p className="text-gray-600 text-sm font-light">
                {getTranslation("Responde a eventos agudos y evacuaciones sanitarias.", "Responde a eventos agudos e evacuações médicas.", "Responds to acute events and medical evacuations.")}
              </p>
            </div>
            <div className="bg-white p-8 rounded-sm border border-light-gray space-y-3">
              <h3 className="text-lg font-bold text-charcoal">
                {getTranslation("CUIDADO DE MIEMBROS", "CUIDADO AO MISSIONÁRIO", "MEMBER CARE")}
              </h3>
              <p className="text-gray-600 text-sm font-light">
                {getTranslation("Soporte pastoral, relacional y acompañamiento organizacional.", "Suporte pastoral, relacional e acompanhamento organizacional.", "Pastoral, relational, and organizational support.")}
              </p>
            </div>
            <div className="bg-charcoal text-white p-8 rounded-sm space-y-3 border-2 border-mustard">
              <h3 className="text-lg font-bold text-mustard">
                {getTranslation("CONTINUIDAD CLÍNICA", "CONTINUIDADE CLÍNICA", "CLINICAL CONTINUITY")}
              </h3>
              <p className="text-gray-300 text-sm font-light">
                {getTranslation("Atención médica profesional continua adaptada al contexto transcultural.", "Cuidados médicos profissionais contínuos adaptados ao contexto.", "Continuous professional clinical care tailored to cross-cultural contexts.")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 33. SEÇÃO — EVIDENCE & RESEARCH TRANSPARENCY */}
      {/* ============================================================ */}
      <section className="py-20 px-6 md:px-12 bg-white border-t border-light-gray">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <span className="text-inst-blue uppercase tracking-widest text-xs font-bold block">
              {getTranslation("TRANSPARENCIA EN INVESTIGACIÓN", "TRANSPARÊNCIA NA PESQUISA", "RESEARCH TRANSPARENCY")}
            </span>
            <h2 className="text-2xl md:text-4xl font-heading text-charcoal">
              {getTranslation("Evidencias y Limitaciones", "Evidências e Limitações", "Evidence & Limitations")}
            </h2>
            <p className="text-gray-600 font-light text-base leading-relaxed">
              {getTranslation(
                "Nuestra comprensión de la salud del trabajador transcultural continúa evolucionando. MMC está comprometida con diferenciar la evidencia rigurosa de las suposiciones y comunicar la incertidumbre con honestidad científica.",
                "Nossa compreensão da saúde do trabalhador transcultural continua evoluindo. A MMC está comprometida em diferenciar evidências científicas de suposições.",
                "Our understanding of missionary and cross-cultural worker health continues to evolve. MMC is committed to distinguishing evidence from assumption and communicating uncertainty honestly."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-light-gray p-6 rounded-sm border border-light-gray space-y-2">
              <p className="text-xs font-bold text-inst-blue uppercase tracking-wider">
                {getTranslation("ESTUDIO DE ANSIEDAD EN MISIONEROS DE SALUD", "ESTUDO DE ANSIEDADE EM MISSIONÁRIOS DA SAÚDE", "HEALTHCARE MISSIONARY ANXIETY STUDY")}
              </p>
              <p className="text-sm text-gray-700 italic">
                "In one study of cross-cultural healthcare missionaries, 47.9% of women and 42.1% of men reported anxiety."
              </p>
            </div>

            <div className="bg-light-gray p-6 rounded-sm border border-light-gray space-y-2">
              <p className="text-xs font-bold text-inst-blue uppercase tracking-wider">
                {getTranslation("RESULTADOS DE INVESTIGACIÓN ReMAP I", "RESULTADOS DA PESQUISA ReMAP I", "ReMAP I RESEARCH FINDINGS")}
              </p>
              <p className="text-sm text-gray-700 italic">
                "Research from ReMAP I found that 71% of premature departures in its study were attributed to causes classified as preventable."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 27. SEÇÃO — WHY MMC EXISTS */}
      {/* ============================================================ */}
      <section id="why-mmc" className="py-24 px-6 md:px-12 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-mustard uppercase tracking-widest text-xs font-bold block">
            {getTranslation("PROPÓSITO INSTITUCIONAL", "PROPÓSITO INSTITUCIONAL", "INSTITUTIONAL PURPOSE")}
          </span>
          <h2 className="text-3xl md:text-5xl font-heading text-white leading-tight">
            {getTranslation("Por Esto Existe Missionary Medical Care.", "É por Isso que a Missionary Medical Care Existe.", "This Is Why Missionary Medical Care Exists.")}
          </h2>
          <p className="text-xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
            {getTranslation(
              "Missionary Medical Care existe para ayudar a cerrar la brecha entre las necesidades de salud y el acceso confiable a la atención para misioneros y trabajadores transculturales. Reunimos experiencia médica, salud mental, telemedicina, educación y tecnología para fortalecer la salud y la resiliencia de quienes sirven.",
              "A Missionary Medical Care existe para ajudar a fechar a lacuna entre as necessidades de saúde e o acesso confiável aos cuidados para missionários e trabalhadores transculturais.",
              "Missionary Medical Care exists to help close the gap between healthcare needs and reliable access to care for missionaries and cross-cultural workers. We bring together medical expertise, mental health support, telemedicine, education, technology and professional networks to strengthen the health and resilience of those who serve across cultures."
            )}
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 28 & 50. SEÇÃO — FINAL CTA */}
      {/* ============================================================ */}
      <section className="py-24 px-6 md:px-12 bg-inst-blue text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-mustard uppercase tracking-widest text-xs font-bold block">
            {getTranslation("Cuidando de Quienes Sirven.", "Cuidando de Quem Serve.", "Caring for Those Who Serve.")}
          </span>
          <h2 className="text-3xl md:text-5xl font-heading tracking-tight text-white leading-tight">
            {getTranslation("Quienes sirven entre las culturas también necesitan que alguien cuide de ellos.", "Aqueles que servem transculturalmente também precisam de quem cuide deles.", "Those who serve across cultures also need someone to care for them.")}
          </h2>
          <p className="text-xl text-[#e0f2fe] font-light max-w-2xl mx-auto leading-relaxed">
            {getTranslation(
              "El servicio saludable es un servicio sostenible. Cuando las personas son bien cuidadas, están mejor equipadas para cuidar a otros.",
              "Um serviço saudável é um serviço sustentável. Quando as pessoas são bem cuidadas, estão melhor preparadas para cuidar dos outros.",
              "Healthy service is sustainable service. When people are cared for well, they are better equipped to care for others."
            )}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link
              to="/what-we-do"
              className="w-full sm:w-auto px-8 py-4 bg-charcoal text-white font-bold text-xs tracking-widest uppercase transition-colors rounded-sm shadow-md hover:bg-black"
            >
              {getTranslation("Explorar Qué Hacemos", "Explorar O Que Fazemos", "Explore What We Do")}
            </Link>
            <Link
              to="/volunteer"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white font-bold text-xs tracking-widest uppercase transition-all rounded-sm shadow-sm hover:bg-white/10"
            >
              {getTranslation("Involúcrate", "Participe", "Get Involved")}
            </Link>
          </div>
        </div>
      </section>

      <GCNFooter />
    </main>
  );
}
