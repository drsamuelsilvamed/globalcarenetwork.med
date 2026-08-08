import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { GCNNavigation } from "../components/GCNNavigation";
import { GCNFooter } from "../components/GCNFooter";
import { GCNFooterCTA } from "../components/GCNFooterCTA";
import { Heart, Users, Building, ShieldCheck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
export function GetInvolvedHubPage() {
  const { t } = useLanguage();
  const waysToInvolve = [
    {
      title: t("hub.donate.title"),
      desc: t("hub.donate.desc"),
      icon: Heart,
      link: "/donate",
      color: "#E91E63",
    },
    {
      title: t("hub.volunteer.title"),
      desc: t("hub.volunteer.desc"),
      icon: Users,
      link: "/volunteer",
      color: "#2C82C9",
    },
    {
      title: t("hub.church.title"),
      desc: t("hub.church.desc"),
      icon: Building,
      link: "/church-engagement",
      color: "#B8872C",
    },
    {
      title: t("hub.prayer.title"),
      desc: t("hub.prayer.desc"),
      icon: ShieldCheck,
      link: "/prayer",
      color: "#0D9488",
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
            {t("hub.hero.title")}{" "}
          </motion.h1>{" "}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-200"
          >
            {" "}
            {t("hub.hero.subtitle")}{" "}
          </motion.p>{" "}
        </div>{" "}
      </section>{" "}
      {/* Grid */}{" "}
      <section className="py-24 px-6 md:px-12 bg-white">
        {" "}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {" "}
          {waysToInvolve.map((way, idx) => {
            const Icon = way.icon;
            return (
              <Link to={way.link} key={idx} className="block group">
                {" "}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-light-gray border border-light-gray p-10 rounded-sm h-full flex flex-col transition-all hover: hover:-translate-y-1"
                >
                  {" "}
                  <Icon
                    className="w-12 h-12 mb-6"
                    style={{ color: way.color }}
                  />{" "}
                  <h3 className="text-2xl font-bold text-charcoal mb-4">
                    {way.title}
                  </h3>{" "}
                  <p className="text-gray-600 mb-8 flex-grow">{way.desc}</p>{" "}
                  <div
                    className="font-bold text-sm uppercase tracking-wider"
                    style={{ color: way.color }}
                  >
                    {" "}
                    {t("hub.link")} &rarr;{" "}
                  </div>{" "}
                </motion.div>{" "}
              </Link>
            );
          })}{" "}
        </div>{" "}
      </section>{" "}
      <GCNFooterCTA /> <GCNFooter />{" "}
    </div>
  );
}
