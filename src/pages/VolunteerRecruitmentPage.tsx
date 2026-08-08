import { motion } from "motion/react";
import { GCNNavigation } from "../components/GCNNavigation";
import { GCNFooter } from "../components/GCNFooter";
import { GCNFooterCTA } from "../components/GCNFooterCTA";
import {
  MessageCircle,
  Mail,
  Stethoscope,
  Laptop,
  Heart,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { AIBadge } from "../components/AIBadge";
import { useLanguage } from "../context/LanguageContext";
export function VolunteerRecruitmentPage() {
  const { t } = useLanguage();
  const whoCanCollaborate = [
    {
      title: "Profesionales de la salud",
      desc: "Médicos, enfermeros, psicólogos, fisioterapeutas y otros profesionales sanitarios.",
      icon: Stethoscope,
      color: "#0D9488",
    },
    {
      title: "Profesionales de otras áreas",
      desc: "Tecnología, diseño, comunicación, educación, traducción, administración, investigación y muchas otras disciplinas.",
      icon: Laptop,
      color: "#2C82C9",
    },
    {
      title: "Personas con deseo de servir",
      desc: "Si deseas conocer mejor nuestro trabajo y explorar formas de colaborar, estaremos encantados de conversar contigo.",
      icon: Heart,
      color: "#E91E63",
    },
  ];
  const values = [
    "Servicio",
    "Excelencia",
    "Compasión",
    "Integridad",
    "Trabajo en equipo",
    "Aprendizaje continuo",
  ];
  return (
    <div className="bg-light-gray min-h-screen font-sans">
      {" "}
      <GCNNavigation /> {/* Hero Section */}{" "}
      <section className="pt-32 pb-20 px-6 md:px-12 bg-charcoal text-white">
        {" "}
        <div className="max-w-4xl mx-auto text-center">
          {" "}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-mustard"
          >
            {" "}
            Colabora con Nosotros{" "}
          </motion.h1>{" "}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed max-w-3xl mx-auto"
          >
            {" "}
            Comparte tus conocimientos, experiencia y tiempo para fortalecer una
            red internacional dedicada al cuidado integral de quienes sirven en
            contextos de alta vulnerabilidad.{" "}
          </motion.p>{" "}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-md text-gray-300 mb-10"
          >
            {" "}
            Cada persona puede aportar de una manera diferente. Nos encantará
            conocerte y conversar contigo.{" "}
          </motion.p>{" "}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {" "}
            <a
              href="https://wa.me/59162439185"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-sm font-bold tracking-wider uppercase text-sm flex items-center justify-center gap-2 transition-all "
            >
              {" "}
              <MessageCircle size={20} /> Hablar por WhatsApp{" "}
            </a>{" "}
            <a
              href="mailto:missionarymedicalcare@gmail.com"
              target="_top"
              className="w-full sm:w-auto bg-white text-charcoal hover:bg-light-gray px-8 py-4 rounded-sm font-bold tracking-wider uppercase text-sm flex items-center justify-center gap-2 transition-all "
            >
              {" "}
              <Mail size={20} /> Escribir por correo electrónico{" "}
            </a>{" "}
          </motion.div>{" "}
        </div>{" "}
      </section>{" "}
      {/* ¿Quién puede colaborar? */}{" "}
      <section className="py-24 px-6 md:px-12 bg-white">
        {" "}
        <div className="max-w-6xl mx-auto">
          {" "}
          <div className="text-center mb-16">
            {" "}
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
              ¿Quién puede colaborar?
            </h2>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {" "}
            {whoCanCollaborate.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-light-gray p-10 rounded-sm border border-light-gray text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  {" "}
                  <div
                    className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    {" "}
                    <Icon size={32} style={{ color: item.color }} />{" "}
                  </div>{" "}
                  <h3 className="text-xl font-bold text-charcoal mb-4">
                    {item.title}
                  </h3>{" "}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {" "}
                    {item.desc}{" "}
                  </p>{" "}
                </motion.div>
              );
            })}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* ¿Cómo funciona? */}{" "}
      <section className="py-24 px-6 md:px-12 bg-[#EFE8DD]">
        {" "}
        <div className="max-w-5xl mx-auto">
          {" "}
          <div className="text-center mb-16">
            {" "}
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
              ¿Cómo funciona?
            </h2>{" "}
          </div>{" "}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 relative">
            {" "}
            <div className="bg-white p-8 rounded-sm shadow-sm border border-[#B8872C]/20 text-center flex-1 w-full relative z-10">
              {" "}
              <div className="w-10 h-10 rounded-full bg-charcoal text-white font-bold flex items-center justify-center mx-auto mb-4 font-heading text-xl">
                1
              </div>{" "}
              <h4 className="font-bold text-charcoal text-lg">
                Escríbenos
              </h4>{" "}
            </div>{" "}
            <ArrowRight className="hidden md:block text-mustard w-8 h-8 shrink-0" />{" "}
            <div className="md:hidden h-8 w-px bg-mustard my-2"></div>{" "}
            <div className="bg-white p-8 rounded-sm shadow-sm border border-[#B8872C]/20 text-center flex-1 w-full relative z-10">
              {" "}
              <div className="w-10 h-10 rounded-full bg-charcoal text-white font-bold flex items-center justify-center mx-auto mb-4 font-heading text-xl">
                2
              </div>{" "}
              <h4 className="font-bold text-charcoal text-lg">
                Conversemos
              </h4>{" "}
            </div>{" "}
            <ArrowRight className="hidden md:block text-mustard w-8 h-8 shrink-0" />{" "}
            <div className="md:hidden h-8 w-px bg-mustard my-2"></div>{" "}
            <div className="bg-white p-8 rounded-sm shadow-sm border border-[#B8872C]/20 text-center flex-1 w-full relative z-10">
              {" "}
              <div className="w-10 h-10 rounded-full bg-charcoal text-white font-bold flex items-center justify-center mx-auto mb-4 font-heading text-xl">
                3
              </div>{" "}
              <h4 className="font-bold text-charcoal text-lg">
                Descubramos juntos
                <br />
                cómo puedes colaborar
              </h4>{" "}
            </div>{" "}
          </div>{" "}
          <div className="mt-16 max-w-4xl mx-auto">
            {" "}
            <div className="relative rounded-sm overflow-hidden border border-[#B8872C]/30">
              {" "}
              <img
                src="/images/ai-plan.jpg"
                alt="Equipo colaborando"
                className="w-full h-[400px] object-cover"
              />{" "}
              <AIBadge />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Valores */}{" "}
      <section className="py-24 px-6 md:px-12 bg-white">
        {" "}
        <div className="max-w-4xl mx-auto">
          {" "}
          <div className="text-center mb-16">
            {" "}
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
              Nuestros Valores
            </h2>{" "}
          </div>{" "}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {" "}
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-light-gray py-6 px-4 rounded-sm border border-light-gray flex items-center gap-3 justify-center shadow-sm hover:border-[#2C82C9] hover:bg-white transition-all"
              >
                {" "}
                <CheckCircle2 className="w-5 h-5 text-mustard shrink-0" />{" "}
                <span className="font-bold text-charcoal text-sm md:text-base">
                  {val}
                </span>{" "}
              </motion.div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Contacto Final */}{" "}
      <section className="py-24 px-6 md:px-12 bg-charcoal text-white border-t-8 border-[#B8872C]">
        {" "}
        <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 p-10 md:p-16 rounded-sm text-center ">
          {" "}
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-mustard mb-6">
            {" "}
            ¿Te gustaría conversar?{" "}
          </h2>{" "}
          <p className="text-gray-200 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            {" "}
            Si deseas conocer más sobre nuestro trabajo o explorar formas de
            colaborar, estaremos encantados de escucharte. Tu experiencia puede
            marcar una diferencia. Cada historia comienza con una
            conversación.{" "}
          </p>{" "}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {" "}
            <a
              href="https://wa.me/59162439185"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-5 rounded-sm font-bold tracking-wider uppercase text-sm flex items-center justify-center gap-2 transition-all "
            >
              {" "}
              <MessageCircle size={20} /> Enviar mensaje por WhatsApp{" "}
            </a>{" "}
            <a
              href="mailto:missionarymedicalcare@gmail.com"
              target="_top"
              className="w-full sm:w-auto bg-white text-charcoal hover:bg-light-gray px-8 py-5 rounded-sm font-bold tracking-wider uppercase text-sm flex items-center justify-center gap-2 transition-all "
            >
              {" "}
              <Mail size={20} /> Enviar correo electrónico{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <GCNFooterCTA /> <GCNFooter />{" "}
    </div>
  );
}
