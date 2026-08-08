import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { GCNNavigation } from "../components/GCNNavigation";
import { GCNFooter } from "../components/GCNFooter";
import {
  ArrowRight,
  BookOpen,
  Award,
  HeartHandshake,
  ShieldCheck,
  Users,
  Building2,
  FileCheck2,
  HeartPulse,
  Scale,
} from "lucide-react";
import { AIBadge } from "../components/AIBadge";
export function AboutGCNPage() {
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
  const getTranslation = (es: string, pt: string, en: string) => {
    if (language === "PT") return pt;
    if (language === "EN") return en;
    return es;
  };
  return (
    <main className="min-h-screen bg-light-gray font-sans selection:bg-inst-blue selection:text-white flex flex-col">
      {" "}
      <GCNNavigation /> {/* 1. HERO */}{" "}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28 bg-charcoal text-white px-6 md:px-12 relative overflow-hidden flex items-center justify-center min-h-[75vh]">
        {" "}
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
          {" "}
          <img
            src="/images/rural_care.jpg"
            alt="Missionary Medical Care"
            className="w-full h-full object-cover"
          />{" "}
        </div>{" "}
        <div className="w-full max-w-5xl mx-auto relative z-10 text-center">
          {" "}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="space-y-8"
          >
            {" "}
            <span className="text-inst-blue uppercase tracking-[0.25em] text-xs font-bold block">
              {" "}
              {getTranslation("WHO WE ARE", "QUEM SOMOS", "WHO WE ARE")}{" "}
            </span>{" "}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading tracking-tight leading-[1.1] text-white">
              {" "}
              {getTranslation(
                "BUILT FROM SERVICE. ",
                "CONSTRUÍDA NO SERVIÇO. ",
                "BUILT FROM SERVICE. ",
              )}{" "}
              <br className="hidden md:block" />{" "}
              {getTranslation(
                "GUIDED BY CONVICTION.",
                "GUIADA PELA CONVICÇÃO.",
                "GUIDED BY CONVICTION.",
              )}{" "}
            </h1>{" "}
            <p className="text-xl md:text-2xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed pt-2">
              {" "}
              {getTranslation(
                "Missionary Medical Care nació de años de servicio médico y misionero y de una convicción sencilla: quienes sirven a otros también necesitan ser cuidados.",
                "A Missionary Medical Care nasceu de anos de serviço médico e missionário e de uma convicção simples: quem serve aos outros também precisa ser cuidado.",
                "Missionary Medical Care was born from years of medical and missionary service and a simple conviction: those who serve others also need to be cared for.",
              )}{" "}
            </p>{" "}
            <div className="pt-8">
              {" "}
              <div className="inline-block bg-charcoal/80 border border-[#334155] px-6 py-4 rounded-sm">
                {" "}
                <p className="text-sm md:text-base font-serif italic text-mustard">
                  {" "}
                  "
                  {getTranslation(
                    "Comenzar con humildad. Construir con excelencia. Crecer con credibilidad.",
                    "Começar com humildade. Construir com excelência. Crescer com credibilidade.",
                    "Start with humility. Build with excellence. Grow with credibility.",
                  )}
                  "{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </motion.div>{" "}
        </div>{" "}
      </section>{" "}
      {/* 2. IDENTIDAD */}{" "}
      <section className="py-24 px-6 md:px-12 bg-white">
        {" "}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {" "}
          <span className="text-inst-blue uppercase tracking-widest text-xs font-bold block">
            {" "}
            {getTranslation(
              "NUESTRA IDENTIDAD",
              "NOSSA IDENTIDADE",
              "OUR IDENTITY",
            )}{" "}
          </span>{" "}
          <h2 className="text-3xl md:text-5xl font-heading text-charcoal">
            {" "}
            {getTranslation("QUIÉNES SOMOS", "QUEM SOMOS", "WHO WE ARE")}{" "}
          </h2>{" "}
          <p className="text-xl text-charcoal font-light leading-relaxed">
            {" "}
            {getTranslation(
              "Missionary Medical Care es una red cristiana internacional nacida del encuentro entre medicina, misión y servicio. Su identidad se construye sobre años de experiencia, una convicción bíblica clara y el compromiso de servir con responsabilidad, excelencia y humildad.",
              "A Missionary Medical Care é uma rede cristã internacional nascida do encontro entre medicina, missão e serviço. Sua identidade se constrói sobre anos de experiência, uma convicção bíblica clara e o compromisso de servir com responsabilidade, excelência e humildade.",
              "Missionary Medical Care is an international Christian network born from the intersection of medicine, mission, and service. Its identity is built on years of experience, a clear biblical conviction, and the commitment to serve with responsibility, excellence, and humility.",
            )}{" "}
          </p>{" "}
        </div>{" "}
      </section>{" "}
      {/* 3. HISTORIA */}{" "}
      <section className="py-24 px-6 md:px-12 bg-light-gray border-t border-light-gray">
        {" "}
        <div className="max-w-6xl mx-auto space-y-16">
          {" "}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            {" "}
            <h2 className="text-3xl md:text-5xl font-heading text-charcoal leading-tight">
              {" "}
              {getTranslation(
                "UNA HISTORIA QUE COMENZÓ CON SERVICIO",
                "UMA HISTÓRIA QUE COMEÇOU COM SERVIÇO",
                "A HISTORY THAT BEGAN WITH SERVICE",
              )}{" "}
            </h2>{" "}
          </div>{" "}
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-[#EFE8DD]">
            {" "}
            {/* Timeline 2011 */}{" "}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {" "}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-light-gray bg-charcoal text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>{" "}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-sm border border-light-gray bg-white shadow-sm">
                {" "}
                <span className="text-sm font-bold tracking-widest text-inst-blue uppercase mb-2 block">
                  2011
                </span>{" "}
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  {getTranslation(
                    "Un comienzo sencillo.",
                    "Um começo simples.",
                    "A simple beginning.",
                  )}
                </h3>{" "}
                <p className="text-[#404040] font-light leading-relaxed">
                  {" "}
                  {getTranslation(
                    "El trabajo misionero y médico comenzó en Bolivia, marcado por el servicio directo y el contacto con comunidades locales.",
                    "O trabalho missionário e médico começou na Bolívia, marcado pelo serviço direto e o contato com comunidades locais.",
                    "The missionary and medical work began in Bolivia, marked by direct service and contact with local communities.",
                  )}{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            {/* Timeline 2023 */}{" "}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {" "}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-light-gray bg-charcoal text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>{" "}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-sm border border-light-gray bg-white shadow-sm">
                {" "}
                <span className="text-sm font-bold tracking-widest text-inst-blue uppercase mb-2 block">
                  2023
                </span>{" "}
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  {getTranslation(
                    "Una identidad que toma forma.",
                    "Uma identidade que ganha forma.",
                    "An identity taking shape.",
                  )}
                </h3>{" "}
                <p className="text-[#404040] font-light leading-relaxed">
                  {" "}
                  {getTranslation(
                    "La experiencia acumulada comienza a consolidarse bajo la identidad de Missionary Medical Care.",
                    "A experiência acumulada começa a se consolidar sob a identidade da Missionary Medical Care.",
                    "The accumulated experience begins to consolidate under the identity of Missionary Medical Care.",
                  )}{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            {/* Timeline 2024-2026 */}{" "}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {" "}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-light-gray bg-charcoal text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>{" "}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-sm border border-light-gray bg-white shadow-sm">
                {" "}
                <span className="text-sm font-bold tracking-widest text-mustard uppercase mb-2 block">
                  2024–2026
                </span>{" "}
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  {getTranslation(
                    "Una visión que se amplía.",
                    "Uma visão que se amplia.",
                    "An expanding vision.",
                  )}
                </h3>{" "}
                <p className="text-[#404040] font-light leading-relaxed">
                  {" "}
                  {getTranslation(
                    "La experiencia adquirida durante años de servicio comienza a transformarse en una estructura internacional.",
                    "A experiência adquirida durante anos de serviço começa a se transformar em uma estrutura internacional.",
                    "The experience gained during years of service begins to transform into an international structure.",
                  )}{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            {/* Timeline HOY */}{" "}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {" "}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-light-gray bg-inst-blue text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>{" "}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-sm border-t-4 border-inst-blue border-x border-b border-light-gray bg-white shadow-md">
                {" "}
                <span className="text-sm font-bold tracking-widest text-inst-blue uppercase mb-2 block">
                  HOY
                </span>{" "}
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  {getTranslation(
                    "Una organización en construcción.",
                    "Uma organização em construção.",
                    "An organization in construction.",
                  )}
                </h3>{" "}
                <p className="text-[#404040] font-light leading-relaxed">
                  {" "}
                  {getTranslation(
                    "MMC continúa desarrollando su identidad, estructura y capacidad institucional.",
                    "A MMC continua desenvolvendo sua identidade, estrutura e capacidade institucional.",
                    "MMC continues to develop its identity, structure, and institutional capacity.",
                  )}{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* 4. FUNDAMENTO */}{" "}
      <section className="py-24 px-6 md:px-12 bg-charcoal text-white relative overflow-hidden">
        {" "}
        <div className="max-w-5xl mx-auto space-y-16 relative z-10">
          {" "}
          <div className="text-center space-y-4">
            {" "}
            <h2 className="text-3xl md:text-5xl font-heading text-white">
              {" "}
              {getTranslation(
                "COMENZAMOS CON DIOS",
                "COMEÇAMOS COM DEUS",
                "WE START WITH GOD",
              )}{" "}
            </h2>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {" "}
            <div className="bg-charcoal p-10 border border-[#334155] rounded-sm">
              {" "}
              <h3 className="text-xl font-heading font-bold text-mustard mb-4">
                Salmo 67
              </h3>{" "}
              <p className="text-gray-300 font-light leading-relaxed">
                {" "}
                {getTranslation(
                  "Dios bendice a su pueblo para que sus caminos sean conocidos entre las naciones.",
                  "Deus abençoa o seu povo para que seus caminhos sejam conhecidos entre as nações.",
                  "God blesses His people so that His ways may be known among the nations.",
                )}{" "}
              </p>{" "}
            </div>{" "}
            <div className="bg-charcoal p-10 border border-[#334155] rounded-sm">
              {" "}
              <h3 className="text-xl font-heading font-bold text-mustard mb-4">
                Apocalipsis 5
              </h3>{" "}
              <p className="text-gray-300 font-light leading-relaxed">
                {" "}
                {getTranslation(
                  "El Cordero es el centro de la historia y el destino final de la adoración de las naciones.",
                  "O Cordeiro é o centro da história e o destino final da adoração das nações.",
                  "The Lamb is the center of history and the final destination of the nations' worship.",
                )}{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="text-center pt-8">
            {" "}
            <Link
              to="/declaracion-de-fe"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-inst-blue hover:text-white transition-colors"
            >
              {" "}
              {getTranslation(
                "CONOCE NUESTRA DECLARACIÓN DE FE",
                "CONHEÇA NOSSA DECLARAÇÃO DE FÉ",
                "READ OUR STATEMENT OF FAITH",
              )}{" "}
              <ArrowRight className="w-4 h-4" />{" "}
            </Link>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* 5. POR QUÉ EXISTIMOS */}{" "}
      <section className="py-24 px-6 md:px-12 bg-white">
        {" "}
        <div className="max-w-6xl mx-auto space-y-16">
          {" "}
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            {" "}
            <h2 className="text-3xl md:text-5xl font-heading text-charcoal">
              {" "}
              {getTranslation(
                "UNA CONVICCIÓN QUE NOS MUEVE",
                "UMA CONVICÇÃO QUE NOS MOVE",
                "A CONVICTION THAT MOVES US",
              )}{" "}
            </h2>{" "}
            <p className="text-lg md:text-xl text-charcoal font-light leading-relaxed">
              {" "}
              {getTranslation(
                "Creemos que cuidar a quienes sirven es una responsabilidad que debe ejercerse con humildad, excelencia, integridad y amor. Esta convicción forma parte de la identidad de MMC y orienta la manera en que construimos la organización.",
                "Cremos que cuidar de quem serve é uma responsabilidade que deve ser exercida com humildade, excelência, integridade e amor. Esta convicção faz parte da identidade da MMC e orienta a maneira como construímos a organização.",
                "We believe that caring for those who serve is a responsibility that must be exercised with humility, excellence, integrity, and love. This conviction is part of MMC's identity and guides how we build the organization.",
              )}{" "}
            </p>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            {" "}
            <div className="text-center space-y-4 p-6 bg-light-gray border border-light-gray rounded-sm">
              {" "}
              <HeartHandshake className="w-8 h-8 text-inst-blue mx-auto" />{" "}
              <h3 className="text-sm font-bold tracking-widest uppercase text-charcoal">
                {getTranslation(
                  "CUIDAR CON DIGNIDAD",
                  "CUIDAR COM DIGNIDADE",
                  "CARE WITH DIGNITY",
                )}
              </h3>{" "}
              <p className="text-[#404040] font-light">
                {" "}
                {getTranslation(
                  "Cada persona merece ser tratada con respeto y compasión.",
                  "Cada pessoa merece ser tratada com respeito e compaixão.",
                  "Every person deserves to be treated with respect and compassion.",
                )}{" "}
              </p>{" "}
            </div>{" "}
            <div className="text-center space-y-4 p-6 bg-light-gray border border-light-gray rounded-sm">
              {" "}
              <Award className="w-8 h-8 text-inst-blue mx-auto" />{" "}
              <h3 className="text-sm font-bold tracking-widest uppercase text-charcoal">
                {getTranslation(
                  "SERVIR CON EXCELENCIA",
                  "SERVIR COM EXCELÊNCIA",
                  "SERVE WITH EXCELLENCE",
                )}
              </h3>{" "}
              <p className="text-[#404040] font-light">
                {" "}
                {getTranslation(
                  "La buena intención nunca sustituye la responsabilidad y la competencia.",
                  "A boa intenção nunca substitui a responsabilidade e a competência.",
                  "Good intentions never replace responsibility and competence.",
                )}{" "}
              </p>{" "}
            </div>{" "}
            <div className="text-center space-y-4 p-6 bg-light-gray border border-light-gray rounded-sm">
              {" "}
              <ShieldCheck className="w-8 h-8 text-inst-blue mx-auto" />{" "}
              <h3 className="text-sm font-bold tracking-widest uppercase text-charcoal">
                {getTranslation(
                  "ACTUAR CON INTEGRIDAD",
                  "AGIR COM INTEGRIDADE",
                  "ACT WITH INTEGRITY",
                )}
              </h3>{" "}
              <p className="text-[#404040] font-light">
                {" "}
                {getTranslation(
                  "La confianza se construye mediante verdad, transparencia y responsabilidad.",
                  "A confiança se constrói mediante verdade, transparência e responsabilidade.",
                  "Trust is built through truth, transparency, and accountability.",
                )}{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* 6. NUESTROS PRINCIPIOS (LEMA) */}{" "}
      <section className="py-24 px-6 md:px-12 bg-charcoal text-white">
        {" "}
        <div className="max-w-6xl mx-auto space-y-16">
          {" "}
          <div className="text-center space-y-4">
            {" "}
            <h2 className="text-3xl md:text-5xl font-heading text-white">
              {" "}
              {getTranslation(
                "CÓMO QUEREMOS SERVIR",
                "COMO QUEREMOS SERVIR",
                "HOW WE WANT TO SERVE",
              )}{" "}
            </h2>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#334155] rounded-sm overflow-hidden">
            {" "}
            {/* 01 HUMILDAD */}{" "}
            <div className="bg-charcoal p-10 md:border-r border-b md:border-b-0 border-[#334155]">
              {" "}
              <span className="text-3xl font-heading font-bold text-[#334155] block mb-4">
                01
              </span>{" "}
              <h3 className="text-xl font-bold text-mustard uppercase mb-4 tracking-widest">
                {getTranslation("HUMILDAD", "HUMILDADE", "HUMILITY")}
              </h3>{" "}
              <p className="font-serif italic text-lg text-white mb-4">
                "
                {getTranslation(
                  "Comenzar con humildad.",
                  "Começar com humildade.",
                  "Start with humility.",
                )}
                "
              </p>{" "}
              <p className="text-gray-300 font-light text-sm leading-relaxed">
                {" "}
                {getTranslation(
                  "Reconocemos nuestras limitaciones, escuchamos, aprendemos y evitamos colocar la organización en el centro.",
                  "Reconhecemos nossas limitações, ouvimos, aprendemos e evitamos colocar a organização no centro.",
                  "We recognize our limitations, listen, learn, and avoid placing the organization at the center.",
                )}{" "}
              </p>{" "}
            </div>{" "}
            {/* 02 EXCELENCIA */}{" "}
            <div className="bg-charcoal p-10 md:border-r border-b md:border-b-0 border-[#334155]">
              {" "}
              <span className="text-3xl font-heading font-bold text-[#334155] block mb-4">
                02
              </span>{" "}
              <h3 className="text-xl font-bold text-mustard uppercase mb-4 tracking-widest">
                {getTranslation("EXCELENCIA", "EXCELÊNCIA", "EXCELLENCE")}
              </h3>{" "}
              <p className="font-serif italic text-lg text-white mb-4">
                "
                {getTranslation(
                  "Construir con excelencia.",
                  "Construir com excelência.",
                  "Build with excellence.",
                )}
                "
              </p>{" "}
              <p className="text-gray-300 font-light text-sm leading-relaxed">
                {" "}
                {getTranslation(
                  "Buscamos desarrollar una organización clínicamente responsable, institucionalmente sólida y fiel a aquello que se nos ha confiado.",
                  "Buscamos desenvolver uma organização clinicamente responsável, institucionalmente sólida e fiel àquilo que nos foi confiado.",
                  "We seek to develop an organization that is clinically responsible, institutionally solid, and faithful to what has been entrusted to us.",
                )}{" "}
              </p>{" "}
            </div>{" "}
            {/* 03 CREDIBILIDAD */}{" "}
            <div className="bg-charcoal p-10">
              {" "}
              <span className="text-3xl font-heading font-bold text-[#334155] block mb-4">
                03
              </span>{" "}
              <h3 className="text-xl font-bold text-mustard uppercase mb-4 tracking-widest">
                {getTranslation("CREDIBILIDAD", "CREDIBILIDADE", "CREDIBILITY")}
              </h3>{" "}
              <p className="font-serif italic text-lg text-white mb-4">
                "
                {getTranslation(
                  "Crecer con credibilidad.",
                  "Crescer com credibilidade.",
                  "Grow with credibility.",
                )}
                "
              </p>{" "}
              <p className="text-gray-300 font-light text-sm leading-relaxed">
                {" "}
                {getTranslation(
                  "La confianza se construye con coherencia, transparencia, responsabilidad y perseverancia.",
                  "A confiança se constrói com coerência, transparência, responsabilidade e perseverança.",
                  "Trust is built with consistency, transparency, accountability, and perseverance.",
                )}{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* 7. NUESTRA CULTURA */}{" "}
      <section className="py-24 px-6 md:px-12 bg-light-gray">
        {" "}
        <div className="max-w-4xl mx-auto space-y-12">
          {" "}
          <div className="text-center">
            {" "}
            <h2 className="text-3xl md:text-5xl font-heading text-charcoal">
              {" "}
              {getTranslation(
                "LA CULTURA QUE QUEREMOS CONSTRUIR",
                "A CULTURA QUE QUEREMOS CONSTRUIR",
                "THE CULTURE WE WANT TO BUILD",
              )}{" "}
            </h2>{" "}
          </div>{" "}
          <div className="bg-white border border-light-gray rounded-sm p-8 md:p-12 shadow-sm">
            {" "}
            <ul className="space-y-8">
              {" "}
              <li className="flex flex-col md:flex-row gap-4 border-b border-light-gray pb-8 last:border-0 last:pb-0">
                {" "}
                <div className="md:w-1/3">
                  {" "}
                  <h3 className="font-bold text-charcoal uppercase tracking-widest">
                    {getTranslation("HUMILDAD", "HUMILDADE", "HUMILITY")}
                  </h3>{" "}
                </div>{" "}
                <div className="md:w-2/3 text-[#404040] font-light">
                  {" "}
                  {getTranslation(
                    "Servir sin buscar protagonismo.",
                    "Servir sem buscar protagonismo.",
                    "Serve without seeking prominence.",
                  )}{" "}
                </div>{" "}
              </li>{" "}
              <li className="flex flex-col md:flex-row gap-4 border-b border-light-gray pb-8 last:border-0 last:pb-0">
                {" "}
                <div className="md:w-1/3">
                  {" "}
                  <h3 className="font-bold text-charcoal uppercase tracking-widest">
                    {getTranslation("EXCELENCIA", "EXCELÊNCIA", "EXCELLENCE")}
                  </h3>{" "}
                </div>{" "}
                <div className="md:w-2/3 text-[#404040] font-light">
                  {" "}
                  {getTranslation(
                    "Hacer bien aquello que se nos ha confiado.",
                    "Fazer bem àquilo que nos foi confiado.",
                    "Do well what has been entrusted to us.",
                  )}{" "}
                </div>{" "}
              </li>{" "}
              <li className="flex flex-col md:flex-row gap-4 border-b border-light-gray pb-8 last:border-0 last:pb-0">
                {" "}
                <div className="md:w-1/3">
                  {" "}
                  <h3 className="font-bold text-charcoal uppercase tracking-widest">
                    {getTranslation("COMPASIÓN", "COMPAIXÃO", "COMPASSION")}
                  </h3>{" "}
                </div>{" "}
                <div className="md:w-2/3 text-[#404040] font-light">
                  {" "}
                  {getTranslation(
                    "Recordar siempre a la persona detrás de cada necesidad.",
                    "Lembrar sempre da pessoa por trás de cada necessidade.",
                    "Always remember the person behind every need.",
                  )}{" "}
                </div>{" "}
              </li>{" "}
              <li className="flex flex-col md:flex-row gap-4 border-b border-light-gray pb-8 last:border-0 last:pb-0">
                {" "}
                <div className="md:w-1/3">
                  {" "}
                  <h3 className="font-bold text-charcoal uppercase tracking-widest">
                    {getTranslation(
                      "RESPONSABILIDAD",
                      "RESPONSABILIDADE",
                      "ACCOUNTABILITY",
                    )}
                  </h3>{" "}
                </div>{" "}
                <div className="md:w-2/3 text-[#404040] font-light">
                  {" "}
                  {getTranslation(
                    "Tratar los recursos, la información y la confianza recibida con seriedad.",
                    "Tratar os recursos, a informação e a confiança recebida com seriedade.",
                    "Treat resources, information, and the trust received with seriousness.",
                  )}{" "}
                </div>{" "}
              </li>{" "}
              <li className="flex flex-col md:flex-row gap-4 border-b border-light-gray pb-8 last:border-0 last:pb-0">
                {" "}
                <div className="md:w-1/3">
                  {" "}
                  <h3 className="font-bold text-charcoal uppercase tracking-widest">
                    {getTranslation(
                      "COLABORACIÓN",
                      "COLABORAÇÃO",
                      "COLLABORATION",
                    )}
                  </h3>{" "}
                </div>{" "}
                <div className="md:w-2/3 text-[#404040] font-light">
                  {" "}
                  {getTranslation(
                    "Reconocer que ninguna persona puede construir esta misión sola.",
                    "Reconhecer que nenhuma pessoa pode construir esta missão sozinha.",
                    "Recognize that no single person can build this mission alone.",
                  )}{" "}
                </div>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* 8. MEDICINA, CIENCIA Y FE */}{" "}
      <section className="py-24 px-6 md:px-12 bg-inst-blue text-white">
        {" "}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {" "}
          <h2 className="text-3xl md:text-5xl font-heading text-white">
            {" "}
            {getTranslation(
              "FE Y EXCELENCIA PUEDEN CAMINAR JUNTAS",
              "FÉ E EXCELÊNCIA PODEM CAMINHAR JUNTAS",
              "FAITH AND EXCELLENCE CAN WALK TOGETHER",
            )}{" "}
          </h2>{" "}
          <p className="text-xl text-[#ccfbf1] font-light leading-relaxed">
            {" "}
            {getTranslation(
              "MMC no entiende la fe cristiana y la excelencia científica como realidades opuestas. Creemos que la medicina, la ciencia y el conocimiento responsable pueden ser utilizados para servir al prójimo con sabiduría, humildad y compasión.",
              "A MMC não entende a fé cristã e a excelência científica como realidades opostas. Cremos que a medicina, a ciência e o conhecimento responsável podem ser utilizados para servir ao próximo com sabedoria, humildade e compaixão.",
              "MMC does not view Christian faith and scientific excellence as opposing realities. We believe that medicine, science, and responsible knowledge can be used to serve others with wisdom, humility, and compassion.",
            )}{" "}
          </p>{" "}
        </div>{" "}
      </section>{" "}
      {/* 9. RESPONSABILIDAD / 10. PERSONAS / 11. GOBERNANZA */}{" "}
      <section className="py-24 px-6 md:px-12 bg-white">
        {" "}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {" "}
          {/* RESPONSABILIDAD */}{" "}
          <div className="bg-light-gray border border-light-gray p-8 rounded-sm shadow-sm flex flex-col h-full">
            {" "}
            <Scale className="w-8 h-8 text-charcoal mb-6" />{" "}
            <h3 className="text-xl font-bold text-charcoal mb-4 uppercase tracking-widest">
              {getTranslation(
                "LA CONFIANZA SE CONSTRUYE",
                "A CONFIANÇA SE CONSTRÓI",
                "TRUST IS BUILT",
              )}
            </h3>{" "}
            <p className="text-[#404040] font-light mb-8 flex-grow">
              {" "}
              {getTranslation(
                "Una organización que sirve en nombre de Cristo debe tratar la confianza como una responsabilidad. Por eso buscamos crecer con transparencia, responsabilidad institucional y disposición permanente a rendir cuentas.",
                "Uma organização que serve em nome de Cristo deve tratar a confiança como uma responsabilidade. Por isso buscamos crescer com transparência, responsabilidade institucional e disposição permanente de prestar contas.",
                "An organization serving in the name of Christ must treat trust as a responsibility. Therefore, we seek to grow with transparency, institutional accountability, and a permanent willingness to be accountable.",
              )}{" "}
            </p>{" "}
            <Link
              to="/transparency"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-inst-blue hover:underline"
            >
              {" "}
              {getTranslation(
                "CONOCE NUESTRA TRANSPARENCIA",
                "CONHEÇA NOSSA TRANSPARÊNCIA",
                "LEARN ABOUT OUR TRANSPARENCY",
              )}{" "}
              <ArrowRight className="w-4 h-4" />{" "}
            </Link>{" "}
          </div>{" "}
          {/* PERSONAS */}{" "}
          <div className="bg-light-gray border border-light-gray p-8 rounded-sm shadow-sm flex flex-col h-full">
            {" "}
            <Users className="w-8 h-8 text-charcoal mb-6" />{" "}
            <h3 className="text-xl font-bold text-charcoal mb-4 uppercase tracking-widest">
              {getTranslation(
                "PERSONAS, NO SOLO UNA ORGANIZACIÓN",
                "PESSOAS, NÃO APENAS UMA ORGANIZAÇÃO",
                "PEOPLE, NOT JUST AN ORGANIZATION",
              )}
            </h3>{" "}
            <p className="text-[#404040] font-light mb-8 flex-grow">
              {" "}
              {getTranslation(
                "Detrás de cada decisión, cada proyecto y cada etapa de crecimiento hay personas que han decidido poner su conocimiento, experiencia, tiempo y servicio al alcance de otros.",
                "Por trás de cada decisão, cada projeto e cada etapa de crescimento existem pessoas que decidiram colocar seu conhecimento, experiência, tempo e serviço ao alcance de outros.",
                "Behind every decision, every project, and every stage of growth are people who have decided to place their knowledge, experience, time, and service at the disposal of others.",
              )}{" "}
            </p>{" "}
            <div className="flex flex-col gap-3 mt-auto">
              {" "}
              <Link
                to="/founder"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-inst-blue hover:underline"
              >
                {" "}
                {getTranslation(
                  "CONOCE NUESTRO EQUIPO",
                  "CONHEÇA NOSSA EQUIPE",
                  "MEET OUR TEAM",
                )}{" "}
                <ArrowRight className="w-4 h-4" />{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
          {/* GOBERNANZA */}{" "}
          <div className="bg-light-gray border border-light-gray p-8 rounded-sm shadow-sm flex flex-col h-full">
            {" "}
            <Building2 className="w-8 h-8 text-charcoal mb-6" />{" "}
            <h3 className="text-xl font-bold text-charcoal mb-4 uppercase tracking-widest">
              {getTranslation(
                "CONSTRUIR CON RESPONSABILIDAD",
                "CONSTRUIR COM RESPONSABILIDADE",
                "BUILD WITH RESPONSIBILITY",
              )}
            </h3>{" "}
            <div className="space-y-4 mb-8 flex-grow text-[#404040] font-light">
              {" "}
              <p>
                {getTranslation(
                  "Junta Directiva",
                  "Conselho Diretor",
                  "Board of Directors",
                )}
              </p>{" "}
              <p>
                {getTranslation(
                  "Liderazgo Institucional",
                  "Liderança Institucional",
                  "Institutional Leadership",
                )}
              </p>{" "}
              <p>
                {getTranslation(
                  "Responsabilidad Médica",
                  "Responsabilidade Médica",
                  "Medical Responsibility",
                )}
              </p>{" "}
              <p>
                {getTranslation(
                  "Transparencia",
                  "Transparência",
                  "Transparency",
                )}
              </p>{" "}
            </div>{" "}
            <div className="flex flex-col gap-3 mt-auto">
              {" "}
              <Link
                to="/board"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-inst-blue hover:underline"
              >
                {" "}
                {getTranslation(
                  "CONOCE NUESTRA JUNTA",
                  "CONHEÇA NOSSO CONSELHO",
                  "MEET OUR BOARD",
                )}{" "}
                <ArrowRight className="w-4 h-4" />{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* 12. CIERRE Y CTA FINAL */}{" "}
      <section className="py-32 px-6 md:px-12 bg-charcoal text-white text-center">
        {" "}
        <div className="max-w-4xl mx-auto space-y-12">
          {" "}
          <h2 className="text-4xl md:text-5xl font-heading text-white">
            {" "}
            {getTranslation(
              "ESTAMOS CONSTRUYENDO CON HUMILDAD.",
              "ESTAMOS CONSTRUINDO COM HUMILDADE.",
              "WE ARE BUILDING WITH HUMILITY.",
            )}{" "}
          </h2>{" "}
          <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            {" "}
            {getTranslation(
              "Missionary Medical Care continúa creciendo paso a paso. Queremos construir una organización digna de la confianza que se nos ha confiado, fiel a sus convicciones y preparada para servir con excelencia.",
              "A Missionary Medical Care continua crescendo passo a passo. Queremos construir uma organização digna da confiança que nos foi depositada, fiel às suas convicções e preparada para servir com excelência.",
              "Missionary Medical Care continues to grow step by step. We want to build an organization worthy of the trust placed in us, faithful to its convictions, and prepared to serve with excellence.",
            )}{" "}
          </p>{" "}
          <p className="text-lg md:text-xl font-serif italic text-mustard pt-4">
            {" "}
            "
            {getTranslation(
              "Comenzar con humildad. Construir con excelencia. Crecer con credibilidad.",
              "Começar com humildade. Construir com excelência. Crescer com credibilidade.",
              "Start with humility. Build with excellence. Grow with credibility.",
            )}
            "{" "}
          </p>{" "}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-12">
            {" "}
            <Link
              to="/declaracion-de-fe"
              className="w-full md:w-auto px-6 py-4 border border-[#334155] text-white font-bold text-xs tracking-widest uppercase hover:bg-charcoal transition-colors rounded-sm"
            >
              {" "}
              {getTranslation(
                "CONOCE NUESTRA FE",
                "CONHEÇA NOSSA FÉ",
                "READ OUR FAITH",
              )}{" "}
            </Link>{" "}
            <Link
              to="/founder"
              className="w-full md:w-auto px-6 py-4 border border-[#334155] text-white font-bold text-xs tracking-widest uppercase hover:bg-charcoal transition-colors rounded-sm"
            >
              {" "}
              {getTranslation(
                "CONOCE NUESTRO LIDERAZGO",
                "CONHEÇA NOSSA LIDERANÇA",
                "MEET OUR LEADERSHIP",
              )}{" "}
            </Link>{" "}
            <Link
              to="/transparency"
              className="w-full md:w-auto px-6 py-4 border border-[#334155] text-white font-bold text-xs tracking-widest uppercase hover:bg-charcoal transition-colors rounded-sm"
            >
              {" "}
              {getTranslation(
                "CONOCE NUESTRA TRANSPARENCIA",
                "CONHEÇA NOSSA TRANSPARÊNCIA",
                "LEARN OUR TRANSPARENCY",
              )}{" "}
            </Link>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <GCNFooter />{" "}
    </main>
  );
}
