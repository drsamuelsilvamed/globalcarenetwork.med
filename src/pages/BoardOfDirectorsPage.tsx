import { motion } from "motion/react";
import { GCNNavigation } from "../components/GCNNavigation";
import { GCNFooter } from "../components/GCNFooter";
import { GCNFooterCTA } from "../components/GCNFooterCTA";
import { UserCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
export function BoardOfDirectorsPage() {
  const { t } = useLanguage();
  const boardMembers = [
    {
      name: "Dr. Samuel Silva",
      role: "Fundador y Director Ejecutivo",
      bio: "Médico misionero especializado en salud global y telemedicina para entornos hostiles.",
    },
    {
      name: "Miembro por Definir",
      role: "Director Médico (CMO)",
      bio: "Responsable de los protocolos clínicos y la estandarización de la atención médica a distancia.",
    },
    {
      name: "Miembro por Definir",
      role: "Director de Seguridad (CISO / OPSEC)",
      bio: "Especialista en ciberseguridad, encriptación y protección de identidad para operaciones en la Ventana 10/40.",
    },
    {
      name: "Miembro por Definir",
      role: "Director de Member Care",
      bio: "Psicólogo especializado en resiliencia, salud mental y cuidado de Familias Transculturales y TCKs.",
    },
  ];
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
            {t("board.hero.title")}{" "}
          </motion.h1>{" "}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-200"
          >
            {" "}
            {t("board.hero.subtitle")}{" "}
          </motion.p>{" "}
        </div>{" "}
      </section>{" "}
      {/* Board Members Grid */}{" "}
      <section className="py-24 px-6 md:px-12 bg-white">
        {" "}
        <div className="max-w-6xl mx-auto">
          {" "}
          <div className="text-center mb-16">
            {" "}
            <h2 className="text-3xl font-institutional font-bold text-[#1A365D] mb-4">
              {t("board.team.title")}
            </h2>{" "}
            <p className="text-gray-600">{t("board.team.subtitle")}</p>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {" "}
            {boardMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-light-gray border border-light-gray p-8 rounded-sm flex flex-col md:flex-row items-center md:items-start gap-6 shadow-sm hover:shadow-md transition-shadow"
              >
                {" "}
                <div className="w-24 h-24 shrink-0 bg-[#EFE8DD] rounded-full flex items-center justify-center text-gray-400">
                  {" "}
                  <UserCircle2 size={48} />{" "}
                </div>{" "}
                <div className="text-center md:text-left">
                  {" "}
                  <h3 className="text-xl font-bold text-[#1A365D]">
                    {member.name}
                  </h3>{" "}
                  <p className="text-mustard font-bold text-sm tracking-wider uppercase mb-3">
                    {member.role}
                  </p>{" "}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>{" "}
                </div>{" "}
              </motion.div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <GCNFooterCTA /> <GCNFooter />{" "}
    </div>
  );
}
