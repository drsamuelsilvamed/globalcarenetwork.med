import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { GCNNavigation } from "../components/GCNNavigation";
import { GCNFooter } from "../components/GCNFooter";
import { AIBadge } from "../components/AIBadge";
import {
  ArrowRight,
  ArrowDown,
  Globe2,
  MapPin,
  Map,
  ShieldAlert,
  ShieldCheck,
  Heart,
  Users,
  Activity,
  ChevronRight,
  HandHeart,
  BookOpen,
  Network,
} from "lucide-react";
export function GlobalCareNetworkPage() {
  const { language } = useLanguage();
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
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  // Helper local para las traducciones directas según el prompt
  const getTranslation = (es: string, pt: string, en: string) => {
    if (language === 'PT') return pt;
    if (language === 'EN') return en;
    return es;
  };

  return (
    <main className="min-h-screen bg-light-gray font-sans selection:bg-inst-blue selection:text-white flex flex-col">
      <GCNNavigation />
      {/* 1. HERO */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28 bg-charcoal text-white px-6 md:px-12 relative overflow-hidden flex items-center justify-center min-h-[70vh]">
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
          <img src="/images/rural_care.jpg" alt="Contexto Misionero" className="w-full h-full object-cover" />
        </div>
        <div className="w-full max-w-5xl mx-auto relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-6">
            <span className="text-inst-blue uppercase tracking-[0.25em] text-xs font-bold block">
              {getTranslation('MISSIONARY MEDICAL CARE', 'MISSIONARY MEDICAL CARE', 'MISSIONARY MEDICAL CARE')}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading tracking-tight leading-[1.1] text-white">
              {getTranslation('CUIDAMOS A QUIENES ', 'CUIDAMOS DAQUELES QUE ', 'WE CARE FOR THOSE ')}
              <br className="hidden md:block" />
              {getTranslation('FUERON ENVIADOS.', 'FORAM ENVIADOS.', 'WHO WERE SENT.')}
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed pt-2">
              {getTranslation(
                'Cuidado de salud, acompañamiento y apoyo seguro para misioneros y equipos transculturales que sirven en contextos donde acceder a atención puede ser difícil.',
                'Cuidado de saúde, acompanhamento e apoio seguro para missionários e equipes transculturais que servem em contextos onde acessar atenção pode ser difícil.',
                'Healthcare, accompaniment, and secure support for missionaries and cross-cultural teams serving in contexts where accessing care can be difficult.'
              )}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-inst-blue text-white font-bold text-xs tracking-widest uppercase transition-colors rounded-sm ">
                {getTranslation('NECESITO ATENCIÓN', 'PRECISO DE ATENÇÃO', 'I NEED CARE')}
              </Link>
              <Link to="/volunteer" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-400 text-white font-bold text-xs tracking-widest uppercase transition-all rounded-sm shadow-sm">
                {getTranslation('QUIERO SERVIR', 'QUERO SERVIR', 'I WANT TO SERVE')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* 2. LA REALIDAD DEL CAMPO */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-heading text-charcoal leading-tight">
              {getTranslation('SERVIR LEJOS NO SIGNIFICA SERVIR SOLOS.', 'SERVIR LONGE NÃO SIGNIFICA SERVIR SOZINHOS.', 'SERVING FAR DOES NOT MEAN SERVING ALONE.')}
            </h2>
            <p className="text-charcoal text-lg md:text-xl font-light">
              {getTranslation(
                'Quienes sirven en el campo enfrentan desafíos reales que hacen que el acceso a la atención médica y al apoyo sea complejo.',
                'Aqueles que servem no campo enfrentam desafios reais que tornam o acesso ao cuidado médico e ao apoio complexo.',
                'Those serving in the field face real challenges that make access to healthcare and support complex.'
              )}
            </p>
          </div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div variants={fadeUp} className="bg-light-gray border border-light-gray p-8 rounded-sm">
              <div className="w-10 h-10 bg-charcoal/10 flex items-center justify-center rounded-full text-charcoal mb-6">
                <MapPin className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold tracking-widest text-charcoal mb-3 uppercase">{getTranslation('DISTANCIA', 'DISTÂNCIA', 'DISTANCE')}</h3>
              <p className="text-[#404040] text-base font-light">
                {getTranslation('Hospitales y profesionales pueden estar a horas o días de distancia.', 'Hospitais e profissionais podem estar a horas ou dias de distância.', 'Hospitals and professionals can be hours or days away.')}
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-light-gray border border-light-gray p-8 rounded-sm">
              <div className="w-10 h-10 bg-charcoal/10 flex items-center justify-center rounded-full text-charcoal mb-6">
                <Globe2 className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold tracking-widest text-charcoal mb-3 uppercase">{getTranslation('CONTEXTO', 'CONTEXTO', 'CONTEXT')}</h3>
              <p className="text-[#404040] text-base font-light">
                {getTranslation('Diferencias culturales, lingüísticas y geográficas pueden dificultar el acceso a la atención.', 'Diferenças culturais, linguísticas e geográficas podem dificultar o acesso à atenção.', 'Cultural, linguistic, and geographic differences can hinder access to care.')}
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-light-gray border border-light-gray p-8 rounded-sm">
              <div className="w-10 h-10 bg-charcoal/10 flex items-center justify-center rounded-full text-charcoal mb-6">
                <Activity className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold tracking-widest text-charcoal mb-3 uppercase">{getTranslation('VULNERABILIDAD', 'VULNERABILIDADE', 'VULNERABILITY')}</h3>
              <p className="text-[#404040] text-base font-light">
                {getTranslation('Una situación de salud puede afectar al trabajador, su familia y su permanencia en el campo.', 'Uma situação de saúde pode afetar o trabalhador, sua família e sua permanência no campo.', 'A health situation can affect the worker, their family, and their retention in the field.')}
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-light-gray border border-light-gray p-8 rounded-sm">
              <div className="w-10 h-10 bg-charcoal/10 flex items-center justify-center rounded-full text-charcoal mb-6">
                <ShieldCheck className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold tracking-widest text-charcoal mb-3 uppercase">{getTranslation('PRIVACIDAD', 'PRIVACIDADE', 'PRIVACY')}</h3>
              <p className="text-[#404040] text-base font-light">
                {getTranslation('En algunos contextos, buscar ayuda requiere especial cuidado con la información personal.', 'Em alguns contextos, buscar ajuda requer cuidado especial com as informações pessoais.', 'In some contexts, seeking help requires special care with personal information.')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* 3. CÓMO MMC AYUDA A LOS EQUIPOS DE CAMPO */}
      <section className="py-24 px-6 md:px-12 bg-charcoal text-white">
        <div className="w-full max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-heading text-white">
              {getTranslation('CÓMO MMC AYUDA A LOS EQUIPOS DE CAMPO', 'COMO A MMC AJUDA AS EQUIPES DE CAMPO', 'HOW MMC HELPS FIELD TEAMS')}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* CUIDA */}
            <div className="bg-charcoal p-10 border-t-4 border-inst-blue rounded-sm flex flex-col h-full">
              <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-2">MMC CUIDA</h3>
              <p className="text-sm font-bold tracking-widest text-inst-blue uppercase mb-6">
                {getTranslation('Atención de salud cuando más se necesita', 'Atenção à saúde quando mais se precisa', 'Healthcare when it is needed most')}
              </p>
              <p className="text-gray-300 font-light leading-relaxed mb-8 flex-grow">
                {getTranslation(
                  'Acompañamos a los equipos antes, durante y después de su despliegue, facilitando orientación médica, consultas con profesionales de salud, seguimiento y apoyo ante situaciones que requieren atención especializada.',
                  'Acompanhamos as equipes antes, durante e após seu desdobramento, facilitando orientação médica, consultas com profissionais de saúde, acompanhamento e apoio diante de situações que exigem atenção especializada.',
                  'We accompany teams before, during, and after their deployment, facilitating medical guidance, consultations with healthcare professionals, follow-up, and support in situations requiring specialized care.'
                )}
              </p>
              <div className="space-y-6">
                <p className="text-xs text-gray-400 font-medium tracking-wide">
                  {getTranslation('Preparación · Orientación · Atención médica · Seguimiento · Emergencias', 'Preparação · Orientação · Atenção médica · Acompanhamento · Emergências', 'Preparation · Guidance · Medical care · Follow-up · Emergencies')}
                </p>
                <Link to="/what-we-do" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-inst-blue hover:text-white transition-colors">
                  {getTranslation('CONOCER MMC CUIDA', 'CONHECER A MMC CUIDA', 'LEARN ABOUT MMC CARES')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            {/* PROTEGE */}
            <div className="bg-charcoal p-10 border-t-4 border-mustard rounded-sm flex flex-col h-full">
              <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-2">MMC PROTEGE</h3>
              <p className="text-sm font-bold tracking-widest text-mustard uppercase mb-6">
                {getTranslation('Cuidamos la privacidad de quienes buscan ayuda', 'Cuidamos da privacidade de quem busca ajuda', 'We protect the privacy of those seeking help')}
              </p>
              <p className="text-gray-300 font-light leading-relaxed mb-8 flex-grow">
                {getTranslation(
                  'La atención médica debe ser un espacio seguro. Trabajamos para proteger la información personal y de salud de los misioneros, sus familias y las personas a las que sirven, especialmente en contextos donde la privacidad puede estar en riesgo.',
                  'O atendimento médico deve ser um espaço seguro. Trabalhamos para proteger as informações pessoais e de saúde dos missionários, suas famílias e das pessoas a quem servem, especialmente em contextos onde a privacidade pode estar em risco.',
                  'Medical care must be a safe space. We work to protect the personal and health information of missionaries, their families, and the people they serve, especially in contexts where privacy may be at risk.'
                )}
              </p>
              <div className="space-y-6">
                <p className="text-xs text-gray-400 font-medium tracking-wide">
                  {getTranslation('Privacidad · Confidencialidad · Protección de la información · Cuidado responsable', 'Privacidade · Confidencialidade · Proteção da informação · Cuidado responsável', 'Privacy · Confidentiality · Information protection · Responsible care')}
                </p>
                <Link to="/what-we-do" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-mustard hover:text-white transition-colors">
                  {getTranslation('CONOCER MMC PROTEGE', 'CONHECER A MMC PROTEGE', 'LEARN ABOUT MMC PROTECTS')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            {/* SOSTIENE */}
            <div className="bg-charcoal p-10 border-t-4 border-inst-blue rounded-sm flex flex-col h-full">
              <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-2">MMC SOSTIENE</h3>
              <p className="text-sm font-bold tracking-widest text-inst-blue uppercase mb-6">
                {getTranslation('Porque cuidar también significa acompañar', 'Porque cuidar também significa acompanhar', 'Because caring also means accompanying')}
              </p>
              <p className="text-gray-300 font-light leading-relaxed mb-8 flex-grow">
                {getTranslation(
                  'El bienestar de quienes sirven no se limita a la salud física. Ofrecemos apoyo para fortalecer la salud emocional, familiar y espiritual, ayudando a los equipos a enfrentar los desafíos de una vida transcultural de manera sostenible.',
                  'O bem-estar de quem serve não se limita à saúde física. Oferecemos apoio para fortalecer a saúde emocional, familiar e espiritual, ajudando as equipes a enfrentar os desafios de uma vida transcultural de forma sustentável.',
                  'The well-being of those who serve is not limited to physical health. We offer support to strengthen emotional, family, and spiritual health, helping teams face the challenges of a cross-cultural life sustainably.'
                )}
              </p>
              <div className="space-y-6">
                <p className="text-xs text-gray-400 font-medium tracking-wide">
                  {getTranslation('Resiliencia · Familia · Bienestar emocional · Acompañamiento', 'Resiliência · Família · Bem-estar emocional · Acompanhamento', 'Resilience · Family · Emotional well-being · Accompaniment')}
                </p>
                <Link to="/what-we-do" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-inst-blue hover:text-white transition-colors">
                  {getTranslation('CONOCER MMC SOSTIENE', 'CONHECER A MMC SOSTIENE', 'LEARN ABOUT MMC SUSTAINS')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 4. MODELO DE ATENCIÓN */}
      <section className="py-24 px-6 md:px-12 bg-white border-b border-light-gray">
        <div className="w-full max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-heading text-charcoal leading-tight">
              {getTranslation('DEL PRIMER SIGNO A LA ATENCIÓN ADECUADA', 'DO PRIMEIRO SINAL À ATENÇÃO ADEQUADA', 'FROM THE FIRST SIGN TO PROPER CARE')}
            </h2>
            <p className="text-lg text-charcoal font-light italic font-heading">
              "{getTranslation(
                'El acompañamiento se adapta a las necesidades de cada persona y a las circunstancias del lugar donde sirve.',
                'O acompanhamento se adapta às necessidades de cada pessoa e às circunstâncias do local onde serve.',
                'The accompaniment adapts to the needs of each person and the circumstances of the place where they serve.'
              )}"
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 py-8">
            {[
              getTranslation('PREVENCIÓN', 'PREVENÇÃO', 'PREVENTION'),
              getTranslation('ORIENTACIÓN', 'ORIENTAÇÃO', 'GUIDANCE'),
              getTranslation('ATENCIÓN MÉDICA', 'ATENÇÃO MÉDICA', 'MEDICAL CARE'),
              getTranslation('ESPECIALISTAS', 'ESPECIALISTAS', 'SPECIALISTS'),
              getTranslation('ATENCIÓN COMPLEJA', 'ATENÇÃO COMPLEXA', 'COMPLEX CARE'),
              getTranslation('EMERGENCIA', 'EMERGÊNCIA', 'EMERGENCY')
            ].map((step, idx, arr) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="px-6 py-4 bg-light-gray border border-light-gray rounded-sm shadow-sm text-sm font-bold tracking-widest text-charcoal w-64 text-center">
                  {step}
                </div>
                {idx < arr.length - 1 && (
                  <ArrowDown className="w-6 h-6 text-inst-blue my-3" />
                )}
              </div>
            ))}
          </div>
          <Link to="/what-we-do" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-inst-blue hover:underline">
            {getTranslation('CONOCER NUESTRO MODELO DE ATENCIÓN', 'CONHECER NOSSO MODELO DE ATENÇÃO', 'LEARN ABOUT OUR CARE MODEL')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
      {/* 5. NUESTRA HISTORIA */}
      <section className="py-24 px-6 md:px-12 bg-light-gray">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative rounded-sm overflow-hidden border border-light-gray aspect-[3/4]">
              <img src="/images/media_1786044168295.jpg" alt="Historia" className="w-full h-full object-cover" />
              <AIBadge />
            </div>
            <div className="lg:col-span-7 space-y-12">
              <h2 className="text-3xl md:text-5xl font-heading text-charcoal leading-tight">
                {getTranslation('Nuestra Historia', 'Nossa História', 'Our History')}
              </h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#EFE8DD] before:to-transparent">
                {/* Timeline 2011 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-light-gray bg-charcoal text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-sm border border-light-gray bg-white shadow-sm">
                    <div className="flex items-center mb-1">
                      <span className="text-sm font-bold tracking-widest text-inst-blue uppercase">2011</span>
                    </div>
                    <h3 className="font-bold text-charcoal mb-1">Misiones Bolivia</h3>
                    <p className="text-[#404040] font-light text-sm">
                      {getTranslation('Atención médica directa e itinerante en comunidades rurales.', 'Atenção médica direta e itinerante em comunidades rurais.', 'Direct and itinerant medical care in rural communities.')}
                    </p>
                  </div>
                </div>
                {/* Timeline 2023 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-light-gray bg-charcoal text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-sm border border-light-gray bg-white shadow-sm">
                    <div className="flex items-center mb-1">
                      <span className="text-sm font-bold tracking-widest text-inst-blue uppercase">2023</span>
                    </div>
                    <h3 className="font-bold text-charcoal mb-1">Missionary Medical Care</h3>
                    <p className="text-[#404040] font-light text-sm">
                      {getTranslation('La experiencia acumulada comienza a transformarse en una estructura de apoyo internacional.', 'A experiência acumulada começa a se transformar em uma estrutura de apoio internacional.', 'The accumulated experience begins to transform into an international support structure.')}
                    </p>
                  </div>
                </div>
                {/* Timeline 2024-2026 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-light-gray bg-charcoal text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-sm border border-light-gray bg-white shadow-sm">
                    <div className="flex items-center mb-1">
                      <span className="text-sm font-bold tracking-widest text-mustard uppercase">2024–2026</span>
                    </div>
                    <h3 className="font-bold text-charcoal mb-1">Programa Piloto</h3>
                    <p className="text-[#404040] font-light text-sm">
                      {getTranslation('La atención a distancia permite conectar necesidades de campo con profesionales voluntarios.', 'O atendimento à distância permite conectar necessidades de campo com profissionais voluntários.', 'Remote care connects field needs with volunteer professionals.')}
                    </p>
                  </div>
                </div>
                {/* Timeline HOY */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-light-gray bg-inst-blue text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-sm border border-inst-blue bg-white shadow-md">
                    <div className="flex items-center mb-1">
                      <span className="text-sm font-bold tracking-widest text-charcoal uppercase">HOY</span>
                    </div>
                    <h3 className="font-bold text-charcoal mb-1">{getTranslation('Una red en construcción', 'Uma rede em construção', 'A network in construction')}</h3>
                    <p className="text-[#404040] font-light text-sm">
                      {getTranslation('Una red internacional para cuidar a quienes sirven.', 'Uma rede internacional para cuidar de quem serve.', 'An international network to care for those who serve.')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 6. IMPACTO */}
      <section className="py-20 px-6 md:px-12 bg-charcoal text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#1E293B]">
            <div className="text-center space-y-2">
              <span className="text-4xl md:text-5xl font-heading font-bold text-inst-blue">16</span>
              <p className="text-sm tracking-widest uppercase font-bold text-white">{getTranslation('CASOS CLÍNICOS', 'CASOS CLÍNICOS', 'CLINICAL CASES')}</p>
            </div>
            <div className="text-center space-y-2">
              <span className="text-4xl md:text-5xl font-heading font-bold text-inst-blue">8</span>
              <p className="text-sm tracking-widest uppercase font-bold text-white">{getTranslation('PAÍSES', 'PAÍSES', 'COUNTRIES')}</p>
            </div>
            <div className="text-center space-y-2">
              <span className="text-4xl md:text-5xl font-heading font-bold text-inst-blue">4</span>
              <p className="text-sm tracking-widest uppercase font-bold text-white">{getTranslation('CONTINENTES', 'CONTINENTES', 'CONTINENTS')}</p>
            </div>
            <div className="text-center space-y-2">
              <span className="text-4xl md:text-5xl font-heading font-bold text-inst-blue">20+</span>
              <p className="text-sm tracking-widest uppercase font-bold text-white">{getTranslation('VOLUNTARIOS', 'VOLUNTÁRIOS', 'VOLUNTEERS')}</p>
            </div>
          </div>
          <div className="text-center mt-12 text-sm text-gray-400 font-light">
            {getTranslation('* Resultados acumulados del programa piloto.', '* Resultados acumulados do programa piloto.', '* Accumulated results of the pilot program.')}
          </div>
        </div>
      </section>
      {/* 7. LA RED */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="w-full max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-heading text-charcoal leading-tight">
              {getTranslation('UNA RED PARA CUIDAR A QUIENES SIRVEN.', 'UMA REDE PARA CUIDAR DE QUEM SERVE.', 'A NETWORK TO CARE FOR THOSE WHO SERVE.')}
            </h2>
            <p className="text-charcoal text-lg font-light max-w-3xl mx-auto">
              {getTranslation(
                'Conectamos personas, profesionales, iglesias y organizaciones para facilitar el cuidado de quienes sirven en contextos transculturales.',
                'Conectamos pessoas, profissionais, igrejas e organizações para facilitar o cuidado de quem serve em contextos transculturais.',
                'We connect people, professionals, churches, and organizations to facilitate the care of those serving in cross-cultural contexts.'
              )}
            </p>
          </div>
          <div className="bg-light-gray p-8 md:p-12 border border-light-gray rounded-sm shadow-sm relative overflow-hidden flex flex-col items-center gap-8">
            {/* Misioneros */}
            <div className="bg-charcoal text-white px-8 py-4 rounded-sm text-center font-bold tracking-widest text-sm z-10">
              {getTranslation('MISIONEROS', 'MISSIONÁRIOS', 'MISSIONARIES')}
            </div>
            <ArrowDown className="w-6 h-6 text-inst-blue" />
            {/* MMC */}
            <div className="bg-inst-blue text-white px-12 py-5 rounded-sm text-center font-bold tracking-widest text-lg z-10 w-full max-w-xs">
              MMC
            </div>
            <div className="flex justify-center w-full relative">
              <div className="w-full max-w-md h-px bg-[#EFE8DD] absolute top-1/2 -z-0"></div>
            </div>
            {/* Red de Apoyo */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center z-10 w-full">
              <div className="bg-white border border-light-gray px-6 py-4 rounded-sm text-center font-bold text-xs tracking-widest text-charcoal shadow-sm flex-1">
                {getTranslation('MÉDICOS', 'MÉDICOS', 'DOCTORS')}
              </div>
              <div className="bg-white border border-light-gray px-6 py-4 rounded-sm text-center font-bold text-xs tracking-widest text-charcoal shadow-sm flex-1">
                {getTranslation('IGLESIAS', 'IGREJAS', 'CHURCHES')}
              </div>
              <div className="bg-white border border-light-gray px-6 py-4 rounded-sm text-center font-bold text-xs tracking-widest text-charcoal shadow-sm flex-1">
                {getTranslation('ORGANIZACIONES', 'ORGANIZAÇÕES', 'ORGANIZATIONS')}
              </div>
            </div>
            <ArrowDown className="w-6 h-6 text-inst-blue" />
            {/* Resultado */}
            <div className="bg-charcoal text-white px-8 py-4 rounded-sm text-center font-bold tracking-widest text-sm z-10">
              {getTranslation('ATENCIÓN Y APOYO', 'ATENÇÃO E APOIO', 'CARE AND SUPPORT')}
            </div>
          </div>
        </div>
      </section>
      {/* 8. DONDE EL ACCESO ES MÁS DIFÍCIL */}
      <section className="py-24 px-6 md:px-12 bg-charcoal text-white">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading text-white leading-tight">
              {getTranslation('DONDE EL ACCESO ES MÁS DIFÍCIL.', 'ONDE O ACESSO É MAIS DIFÍCIL.', 'WHERE ACCESS IS MOST DIFFICULT.')}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <MapPin className="w-8 h-8 text-mustard mx-auto" strokeWidth={1.5} />
              <h3 className="text-lg font-heading font-bold text-white">{getTranslation('REMOTO', 'REMOTO', 'REMOTE')}</h3>
              <p className="text-sm text-gray-400 font-light">
                {getTranslation('Acceso limitado por distancia.', 'Acesso limitado pela distância.', 'Access limited by distance.')}
              </p>
            </div>
            <div className="text-center space-y-4">
              <Map className="w-8 h-8 text-mustard mx-auto" strokeWidth={1.5} />
              <h3 className="text-lg font-heading font-bold text-white">{getTranslation('RURAL', 'RURAL', 'RURAL')}</h3>
              <p className="text-sm text-gray-400 font-light">
                {getTranslation('Menor disponibilidad de servicios especializados.', 'Menor disponibilidade de serviços especializados.', 'Less availability of specialized services.')}
              </p>
            </div>
            <div className="text-center space-y-4">
              <Globe2 className="w-8 h-8 text-mustard mx-auto" strokeWidth={1.5} />
              <h3 className="text-lg font-heading font-bold text-white">{getTranslation('TRANSCULTURAL', 'TRANSCULTURAL', 'CROSS-CULTURAL')}</h3>
              <p className="text-sm text-gray-400 font-light">
                {getTranslation('Diferentes idiomas, culturas y sistemas de salud.', 'Diferentes idiomas, culturas e sistemas de saúde.', 'Different languages, cultures, and healthcare systems.')}
              </p>
            </div>
            <div className="text-center space-y-4">
              <ShieldAlert className="w-8 h-8 text-mustard mx-auto" strokeWidth={1.5} />
              <h3 className="text-lg font-heading font-bold text-white">{getTranslation('COMPLEJO', 'COMPLEXO', 'COMPLEX')}</h3>
              <p className="text-sm text-gray-400 font-light">
                {getTranslation('Contextos donde el acceso y la privacidad requieren mayor cuidado.', 'Contextos onde o acesso e a privacidade requerem maior cuidado.', 'Contexts where access and privacy require greater care.')}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 9. PRIVACIDAD */}
      <section className="py-24 px-6 md:px-12 bg-light-gray">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-3xl md:text-5xl font-heading text-charcoal">
            {getTranslation('CUIDAR SIN EXPONER.', 'CUIDAR SEM EXPOR.', 'CARE WITHOUT EXPOSING.')}
          </h2>
          <p className="text-lg md:text-xl text-charcoal font-light max-w-3xl mx-auto">
            {getTranslation(
              'Quienes buscan atención deben poder hacerlo con confianza. MMC trabaja para proteger la privacidad y la información de salud de las personas, reduciendo la exposición innecesaria y tratando cada dato con responsabilidad.',
              'Aqueles que buscam atenção devem poder fazê-lo com confiança. A MMC trabalha para proteger a privacidade e as informações de saúde das pessoas, reduzindo a exposição desnecessária e tratando cada dado com responsabilidade.',
              'Those seeking care must be able to do so with confidence. MMC works to protect people\'s privacy and health information, reducing unnecessary exposure and treating every piece of data responsibly.'
            )}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold tracking-widest text-inst-blue uppercase pt-4">
            <span className="bg-white px-4 py-2 border border-light-gray rounded-sm">{getTranslation('PRIVACIDAD', 'PRIVACIDADE', 'PRIVACY')}</span>
            <span className="bg-white px-4 py-2 border border-light-gray rounded-sm">{getTranslation('CONFIDENCIALIDAD', 'CONFIDENCIALIDADE', 'CONFIDENTIALITY')}</span>
            <span className="bg-white px-4 py-2 border border-light-gray rounded-sm">{getTranslation('PROTECCIÓN DE LA INFORMACIÓN', 'PROTEÇÃO DA INFORMAÇÃO', 'INFORMATION PROTECTION')}</span>
            <span className="bg-white px-4 py-2 border border-light-gray rounded-sm">{getTranslation('RESPONSABILIDAD', 'RESPONSABILIDADE', 'RESPONSIBILITY')}</span>
          </div>
        </div>
      </section>
      {/* 10. POR QUÉ CUIDAMOS */}
      <section className="bg-charcoal text-white py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-inst-blue/10"></div>
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <h2 className="text-2xl font-bold tracking-widest uppercase text-inst-blue mb-8">
            {getTranslation('¿POR QUÉ CUIDAMOS?', 'POR QUE CUIDAMOS?', 'WHY DO WE CARE?')}
          </h2>
          <div className="space-y-4">
            <p className="text-2xl md:text-4xl font-serif italic font-medium leading-relaxed">
              "Dios tenga misericordia de nosotros y nos bendiga; haga resplandecer su rostro sobre nosotros, para que sean conocidos en la tierra sus caminos y, entre todas las naciones, su salvación."
            </p>
            <span className="text-mustard font-sans text-sm font-bold block uppercase tracking-widest pt-2">
              — Salmo 67:1–2
            </span>
          </div>
          <div className="w-16 h-px bg-mustard mx-auto opacity-50"></div>
          <div className="space-y-4">
            <p className="text-xl md:text-2xl font-light text-gray-300">
              {getTranslation(
                'Creemos que quienes salen por amor del Nombre deben ser recibidos y sostenidos de una manera digna de Dios.',
                'Cremos que aqueles que saem por amor ao Nome devem ser recebidos e sustentados de maneira digna de Deus.',
                'We believe that those who go out for the sake of the Name should be welcomed and supported in a manner worthy of God.'
              )}
            </p>
            <span className="text-mustard font-sans text-sm font-bold block uppercase tracking-widest pt-2">
              — 3 Juan 1:6
            </span>
          </div>
        </div>
      </section>
      {/* 11. PARTICIPA */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-heading text-charcoal leading-tight">
              {getTranslation('TÚ TAMBIÉN PUEDES SER PARTE DEL CUIDADO.', 'VOCÊ TAMBÉM PODE FAZER PARTE DO CUIDADO.', 'YOU TOO CAN BE PART OF THE CARE.')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/volunteer" className="bg-light-gray border border-light-gray p-8 rounded-sm hover:border-inst-blue hover:shadow-md transition-all group">
              <h3 className="text-lg font-bold text-charcoal mb-2 uppercase tracking-widest">{getTranslation('SERVIR', 'SERVIR', 'SERVE')}</h3>
              <p className="text-[#404040] font-light mb-6">{getTranslation('Ofrece tu conocimiento y experiencia.', 'Ofereça seu conhecimento e experiência.', 'Offer your knowledge and experience.')}</p>
              <ArrowRight className="w-5 h-5 text-inst-blue group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link to="/donate" className="bg-light-gray border border-light-gray p-8 rounded-sm hover:border-inst-blue hover:shadow-md transition-all group">
              <h3 className="text-lg font-bold text-charcoal mb-2 uppercase tracking-widest">{getTranslation('APOYAR', 'APOIAR', 'SUPPORT')}</h3>
              <p className="text-[#404040] font-light mb-6">{getTranslation('Ayuda a sostener la red.', 'Ajude a sustentar a rede.', 'Help sustain the network.')}</p>
              <ArrowRight className="w-5 h-5 text-inst-blue group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link to="/prayer-network" className="bg-light-gray border border-light-gray p-8 rounded-sm hover:border-inst-blue hover:shadow-md transition-all group">
              <h3 className="text-lg font-bold text-charcoal mb-2 uppercase tracking-widest">{getTranslation('ORAR', 'ORAR', 'PRAY')}</h3>
              <p className="text-[#404040] font-light mb-6">{getTranslation('Acompaña a quienes sirven.', 'Acompanhe aqueles que servem.', 'Accompany those who serve.')}</p>
              <ArrowRight className="w-5 h-5 text-inst-blue group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link to="/church-engagement" className="bg-light-gray border border-light-gray p-8 rounded-sm hover:border-inst-blue hover:shadow-md transition-all group">
              <h3 className="text-lg font-bold text-charcoal mb-2 uppercase tracking-widest">{getTranslation('ASOCIARSE', 'ASSOCIAR-SE', 'PARTNER')}</h3>
              <p className="text-[#404040] font-light mb-6">{getTranslation('Construyamos juntos una red de cuidado.', 'Construamos juntos uma rede de cuidado.', 'Let\'s build a network of care together.')}</p>
              <ArrowRight className="w-5 h-5 text-inst-blue group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      {/* 12. FINAL CTA */}
      <section className="py-24 px-6 md:px-12 bg-inst-blue text-white">
        <div className="w-full max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-heading tracking-tight text-white leading-tight">
            {getTranslation('CUIDAR A QUIENES FUERON ENVIADOS ES PARTE DE NUESTRA MISIÓN.', 'CUIDAR DAQUELES QUE FORAM ENVIADOS É PARTE DA NOSSA MISSÃO.', 'CARING FOR THOSE WHO WERE SENT IS PART OF OUR MISSION.')}
          </h2>
          <p className="text-xl text-[#e0f2fe] font-light max-w-2xl mx-auto">
            {getTranslation(
              'Cuando acceder a atención es difícil, queremos ayudar a encontrar el próximo paso.',
              'Quando o acesso à atenção é difícil, queremos ajudar a encontrar o próximo passo.',
              'When accessing care is difficult, we want to help find the next step.'
            )}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-charcoal text-white font-bold text-xs tracking-widest uppercase transition-colors rounded-sm ">
              {getTranslation('NECESITO ATENCIÓN', 'PRECISO DE ATENÇÃO', 'I NEED CARE')}
            </Link>
            <Link to="/participate" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-light-gray text-white font-bold text-xs tracking-widest uppercase transition-all rounded-sm shadow-sm">
              {getTranslation('QUIERO PARTICIPAR', 'QUERO PARTICIPAR', 'I WANT TO PARTICIPATE')}
            </Link>
          </div>
        </div>
      </section>
      <GCNFooter />
    </main>
  );
}
