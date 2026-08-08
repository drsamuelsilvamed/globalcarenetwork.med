import { motion } from "motion/react";
import { GCNNavigation } from "../components/GCNNavigation";
import { GCNFooter } from "../components/GCNFooter";
import { GCNFooterCTA } from "../components/GCNFooterCTA";
import { ShieldAlert, HeartPulse, Activity } from "lucide-react";
import { AIBadge } from "../components/AIBadge";
import { useLanguage } from "../context/LanguageContext";
export function CommunityHealthPage() {
  const { t } = useLanguage();
  return (
    <div className="bg-light-gray min-h-screen font-body">
      {" "}
      <GCNNavigation /> {/* Hero */}{" "}
      <section className="pt-32 pb-20 px-6 md:px-12 bg-[#1A365D] text-white">
        {" "}
        <div className="max-w-4xl mx-auto text-center">
          {" "}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-institutional font-bold mb-6 text-mustard"
          >
            {" "}
            {t("health.hero.title")}{" "}
          </motion.h1>{" "}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-200"
          >
            {" "}
            {t("health.hero.subtitle")}{" "}
          </motion.p>{" "}
        </div>{" "}
      </section>{" "}
      {/* Pillars Section */}{" "}
      <section className="py-24 px-6 md:px-12 bg-white">
        {" "}
        <div className="max-w-6xl mx-auto">
          {" "}
          <div className="text-center mb-16">
            {" "}
            <h2 className="text-3xl font-institutional font-bold text-[#1A365D] mb-4">
              {t("health.pillars.title")}
            </h2>{" "}
            <p className="text-gray-600 max-w-2xl mx-auto">
              {" "}
              {t("health.pillars.subtitle")}{" "}
            </p>{" "}
            <div className="mt-8 relative rounded-sm overflow-hidden shadow-md border border-light-gray max-h-[300px] max-w-3xl mx-auto">
              {" "}
              <img
                src="/images/site (8).jpg"
                alt="Salud Comunitaria"
                className="w-full h-full object-cover"
              />{" "}
              <AIBadge />{" "}
            </div>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {" "}
            <div className="bg-light-gray p-8 rounded-sm border-t-4 border-inst-blue shadow-sm">
              {" "}
              <ShieldAlert className="w-10 h-10 text-inst-blue mb-4" />{" "}
              <h3 className="text-xl font-bold text-[#1A365D] mb-3">
                {t("health.p1.title")}
              </h3>{" "}
              <p className="text-gray-600 text-sm leading-relaxed">
                {" "}
                {t("health.p1.desc")}{" "}
              </p>{" "}
            </div>{" "}
            <div className="bg-light-gray p-8 rounded-sm border-t-4 border-[#E91E63] shadow-sm">
              {" "}
              <HeartPulse className="w-10 h-10 text-[#E91E63] mb-4" />{" "}
              <h3 className="text-xl font-bold text-[#1A365D] mb-3">
                {t("health.p2.title")}
              </h3>{" "}
              <p className="text-gray-600 text-sm leading-relaxed">
                {" "}
                {t("health.p2.desc")}{" "}
              </p>{" "}
            </div>{" "}
            <div className="bg-light-gray p-8 rounded-sm border-t-4 border-[#2C82C9] shadow-sm">
              {" "}
              <Activity className="w-10 h-10 text-[#2C82C9] mb-4" />{" "}
              <h3 className="text-xl font-bold text-[#1A365D] mb-3">
                {t("health.p3.title")}
              </h3>{" "}
              <p className="text-gray-600 text-sm leading-relaxed">
                {" "}
                {t("health.p3.desc")}{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Estrategia CHE */}{" "}
      <section className="py-24 px-6 md:px-12 bg-[#EFE8DD]">
        {" "}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {" "}
          <div className="flex-1 space-y-6">
            {" "}
            <h2 className="text-3xl font-institutional font-bold text-[#1A365D]">
              {" "}
              Estrategia CHE <br />{" "}
              <span className="text-mustard text-2xl">
                (Community Health Evangelism)
              </span>{" "}
            </h2>{" "}
            <p className="text-gray-700 leading-relaxed">
              {" "}
              Integramos el modelo <strong>CHE</strong> en nuestras
              intervenciones de salud comunitaria. Es un programa educativo
              centrado en Cristo que equipa a las comunidades para salir de los
              ciclos de pobreza y enfermedad.{" "}
            </p>{" "}
            <p className="text-gray-700 leading-relaxed">
              {" "}
              En lugar de soluciones asistencialistas a corto plazo, el enfoque
              CHE multiplica el impacto al capacitar a líderes locales para que
              se conviertan en educadores de salud física y espiritual dentro de
              sus propias comunidades.{" "}
            </p>{" "}
            <ul className="space-y-3 mt-4">
              {" "}
              <li className="flex items-start gap-3 text-gray-700">
                {" "}
                <ShieldAlert className="w-5 h-5 text-inst-blue shrink-0 mt-0.5" />{" "}
                <span>Prevención de enfermedades a nivel local.</span>{" "}
              </li>{" "}
              <li className="flex items-start gap-3 text-gray-700">
                {" "}
                <HeartPulse className="w-5 h-5 text-[#E91E63] shrink-0 mt-0.5" />{" "}
                <span>
                  Atención integral del ser humano (cuerpo, alma y espíritu).
                </span>{" "}
              </li>{" "}
              <li className="flex items-start gap-3 text-gray-700">
                {" "}
                <Activity className="w-5 h-5 text-[#2C82C9] shrink-0 mt-0.5" />{" "}
                <span>
                  Desarrollo comunitario sostenible a largo plazo.
                </span>{" "}
              </li>{" "}
            </ul>{" "}
            <div className="pt-4">
              {" "}
              <a
                href="https://chenetwork.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#1A365D] hover:bg-[#112440] text-white px-6 py-3 rounded-md font-bold tracking-wider uppercase text-xs transition-colors"
              >
                {" "}
                Conoce más sobre CHE Network{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex-1 w-full relative">
            {" "}
            <div className="relative rounded-sm overflow-hidden border border-[#B8872C]/30">
              {" "}
              <img
                src="/images/ai-comm.jpg"
                alt="CHE Network Strategy"
                className="w-full h-full object-cover min-h-[400px]"
              />{" "}
              <AIBadge />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <GCNFooterCTA /> <GCNFooter />{" "}
    </div>
  );
}
