import { useState } from "react";
import { motion } from "motion/react";
import { GCNNavigation } from "../components/GCNNavigation";
import { GCNFooter } from "../components/GCNFooter";
import { GCNFooterCTA } from "../components/GCNFooterCTA";
import { Heart } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
export function PrayerNetworkPage() {
  const { t } = useLanguage();
  const [prayedCount, setPrayedCount] = useState<number>(() => {
    const saved = localStorage.getItem("mmc_prayed_count");
    return saved ? parseInt(saved, 10) : 1245;
  });
  const [hasPrayed, setHasPrayed] = useState<boolean>(false);
  const handlePrayClick = () => {
    if (!hasPrayed) {
      const newCount = prayedCount + 1;
      setPrayedCount(newCount);
      localStorage.setItem("mmc_prayed_count", newCount.toString());
      setHasPrayed(true);
    }
  };
  const requests = [
    {
      id: 1,
      category: "Salud Médica",
      confidentiality: "Media",
      text: "Oremos por la familia misionera en el Sudeste Asiático. El padre está recibiendo tratamiento por malaria severa y necesita una evacuación médica si su estado no mejora en las próximas 48 horas.",
    },
    {
      id: 2,
      category: "OPSEC / Seguridad",
      confidentiality: "Alta",
      text: "Intercedamos por nuestros hermanos sirviendo en una zona de conflicto activo en Medio Oriente. Oremos por protección digital y física mientras continúan brindando ayuda médica clandestina.",
    },
    {
      id: 3,
      category: "Resiliencia Familiar",
      confidentiality: "Baja",
      text: "Oremos por los hijos (TCKs) de una familia sirviendo en la Ventana 10/40 que están atravesando un proceso difícil de adaptación cultural y aislamiento.",
    },
    {
      id: 4,
      category: "Equipos Médicos MMC",
      confidentiality: "Media",
      text: "Que el Señor dé sabiduría y discernimiento a nuestros especialistas de Telessaúde Missionária que están atendiendo casos complejos a distancia con recursos limitados.",
    },
  ];
  return (
    <div className="bg-light-gray min-h-screen font-sans">
      {" "}
      <GCNNavigation /> {/* Hero */}{" "}
      <section className="pt-32 pb-20 px-6 md:px-12 bg-charcoal text-white">
        {" "}
        <div className="max-w-4xl mx-auto text-center">
          {" "}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6 text-mustard"
          >
            {" "}
            {t("prayer.hero.title")}{" "}
          </motion.h1>{" "}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-200"
          >
            {" "}
            {t("prayer.hero.subtitle")}{" "}
          </motion.p>{" "}
        </div>{" "}
      </section>{" "}
      {/* Counter Section */}{" "}
      <section className="py-12 bg-[#EFE8DD] text-center border-y border-[#B8872C]/20">
        {" "}
        <div className="max-w-4xl mx-auto px-6">
          {" "}
          <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">
            {t("prayer.impact.title")}
          </p>{" "}
          <div className="flex items-center justify-center gap-4">
            {" "}
            <Heart className="w-10 h-10 text-[#E91E63]" />{" "}
            <span className="text-5xl font-heading font-bold text-charcoal">
              {" "}
              {prayedCount.toLocaleString()}{" "}
            </span>{" "}
          </div>{" "}
          <p className="text-sm text-gray-600 mt-2">
            {t("prayer.impact.subtitle")}
          </p>{" "}
        </div>{" "}
      </section>{" "}
      {/* Prayer Requests Grid */}{" "}
      <section className="py-20 px-6 md:px-12 bg-white">
        {" "}
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
          {" "}
          {requests.map((req, idx) => (
            <motion.div
              key={req.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-light-gray border border-light-gray p-8 rounded-sm relative shadow-sm"
            >
              {" "}
              <div className="flex justify-between items-start mb-4">
                {" "}
                <span className="bg-charcoal text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                  {" "}
                  {req.category}{" "}
                </span>{" "}
                <span
                  className={`text-xs font-sans font-bold px-3 py-1 rounded-sm uppercase tracking-wider ${req.confidentiality === "Alta" ? "bg-[#E91E63]/10 text-[#E91E63]" : "bg-inst-blue/10 text-inst-blue"}`}
                >
                  {" "}
                  Confidencialidad: {req.confidentiality}{" "}
                </span>{" "}
              </div>{" "}
              <p className="text-gray-700 leading-relaxed mb-8"> {req.text} </p>{" "}
              <div className="border-t border-light-gray pt-6 flex justify-between items-center">
                {" "}
                <button
                  onClick={handlePrayClick}
                  disabled={hasPrayed}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-sm font-bold text-sm uppercase tracking-widest transition-colors ${hasPrayed ? "bg-[#EFE8DD] text-gray-500 cursor-not-allowed" : "bg-mustard text-charcoal hover:bg-[#a07424]"}`}
                >
                  {" "}
                  <Heart
                    className={`w-4 h-4 ${hasPrayed ? "fill-gray-500" : ""}`}
                  />{" "}
                  {hasPrayed
                    ? t("prayer.btn.prayed")
                    : t("prayer.btn.pray")}{" "}
                </button>{" "}
              </div>{" "}
            </motion.div>
          ))}{" "}
        </div>{" "}
      </section>{" "}
      <GCNFooterCTA /> <GCNFooter />{" "}
    </div>
  );
}
