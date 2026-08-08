import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { GCNNavigation } from "../components/GCNNavigation";
import { GCNFooter } from "../components/GCNFooter";
import { GCNFooterCTA } from "../components/GCNFooterCTA";
import { ArrowRight, FileText, HeartPulse } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
export function StoriesPage() {
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
            {t("stories.hero.title")}{" "}
          </motion.h1>{" "}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-200"
          >
            {" "}
            {t("stories.hero.subtitle")}{" "}
          </motion.p>{" "}
        </div>{" "}
      </section>{" "}
      {/* Hub Links */}{" "}
      <section className="py-24 px-6 md:px-12 bg-white">
        {" "}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {" "}
          {/* Patient Stories Link */}{" "}
          <Link to="/patient-stories" className="group block">
            {" "}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-light-gray p-10 rounded-sm border border-light-gray h-full flex flex-col transition-all hover: hover:border-[#B8872C]"
            >
              {" "}
              <HeartPulse className="w-12 h-12 text-[#2C82C9] mb-6" />{" "}
              <h2 className="text-3xl font-institutional font-bold text-[#1A365D] mb-4">
                {t("stories.patients.title")}
              </h2>{" "}
              <p className="text-gray-600 mb-8 flex-grow">
                {" "}
                {t("stories.patients.desc")}{" "}
              </p>{" "}
              <div className="flex items-center text-mustard font-bold uppercase tracking-wider text-sm">
                {" "}
                {t("stories.patients.link")}{" "}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />{" "}
              </div>{" "}
            </motion.div>{" "}
          </Link>{" "}
          {/* Field Reports Link */}{" "}
          <Link to="/reality" className="group block">
            {" "}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-light-gray p-10 rounded-sm border border-light-gray h-full flex flex-col transition-all hover: hover:border-inst-blue"
            >
              {" "}
              <FileText className="w-12 h-12 text-inst-blue mb-6" />{" "}
              <h2 className="text-3xl font-institutional font-bold text-[#1A365D] mb-4">
                {t("stories.reality.title")}
              </h2>{" "}
              <p className="text-gray-600 mb-8 flex-grow">
                {" "}
                {t("stories.reality.desc")}{" "}
              </p>{" "}
              <div className="flex items-center text-inst-blue font-bold uppercase tracking-wider text-sm">
                {" "}
                {t("stories.reality.link")}{" "}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />{" "}
              </div>{" "}
            </motion.div>{" "}
          </Link>{" "}
        </div>{" "}
      </section>{" "}
      <GCNFooterCTA /> <GCNFooter />{" "}
    </div>
  );
}
