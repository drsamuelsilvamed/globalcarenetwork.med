import { motion } from "motion/react";
import { GCNNavigation } from "../components/GCNNavigation";
import { GCNFooter } from "../components/GCNFooter";
import { GCNFooterCTA } from "../components/GCNFooterCTA";
import { BookOpen, Heart, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { AIBadge } from "../components/AIBadge";
export function ChurchEngagementPage() {
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
            {t("church.hero.title")}{" "}
          </motion.h1>{" "}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-200"
          >
            {" "}
            {t("church.hero.subtitle")}{" "}
          </motion.p>{" "}
        </div>{" "}
      </section>{" "}
      {/* Fundamento Bíblico */}{" "}
      <section className="py-20 px-6 md:px-12 bg-light-gray">
        {" "}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {" "}
          <h2 className="text-3xl md:text-4xl font-heading text-[#1A365D] font-bold">
            {" "}
            {t("gcn.biblical.title")}{" "}
          </h2>{" "}
          <p className="text-lg md:text-xl text-mustard font-serif italic max-w-2xl mx-auto">
            {" "}
            "{t("gcn.biblical.intro")}"{" "}
          </p>{" "}
          <div className="p-8 bg-white border border-light-gray rounded-sm text-left max-w-3xl mx-auto shadow-sm">
            {" "}
            <p className="font-sans text-[#404040] text-lg leading-relaxed font-light">
              {" "}
              {t("gcn.biblical.passage")}{" "}
            </p>{" "}
          </div>{" "}
          <div className="max-w-3xl mx-auto relative rounded-sm overflow-hidden shadow-md border border-light-gray">
            {" "}
            <img
              src="/images/site (6).webp"
              alt="Iglesia y Misión"
              className="w-full h-64 object-cover"
            />{" "}
            <AIBadge />{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* The 3 Axes */}{" "}
      <section className="py-24 px-6 md:px-12 bg-white">
        {" "}
        <div className="max-w-6xl mx-auto">
          {" "}
          <div className="text-center mb-16">
            {" "}
            <h2 className="text-3xl font-institutional font-bold text-[#1A365D] mb-4">
              {t("church.axes.title")}
            </h2>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {" "}
            <div className="bg-light-gray p-8 rounded-sm border-t-4 border-inst-blue text-center">
              {" "}
              <BookOpen className="w-12 h-12 text-inst-blue mx-auto mb-4" />{" "}
              <h3 className="text-xl font-bold text-[#1A365D] mb-3">
                {t("church.axes.pray.title")}
              </h3>{" "}
              <p className="text-gray-600 text-sm">
                {" "}
                {t("church.axes.pray.desc")}{" "}
              </p>{" "}
            </div>{" "}
            <div className="bg-light-gray p-8 rounded-sm border-t-4 border-[#E91E63] text-center">
              {" "}
              <Heart className="w-12 h-12 text-[#E91E63] mx-auto mb-4" />{" "}
              <h3 className="text-xl font-bold text-[#1A365D] mb-3">
                {t("church.axes.give.title")}
              </h3>{" "}
              <p className="text-gray-600 text-sm">
                {" "}
                {t("church.axes.give.desc")}{" "}
              </p>{" "}
            </div>{" "}
            <div className="bg-light-gray p-8 rounded-sm border-t-4 border-[#B8872C] text-center">
              {" "}
              <Globe className="w-12 h-12 text-mustard mx-auto mb-4" />{" "}
              <h3 className="text-xl font-bold text-[#1A365D] mb-3">
                {t("church.axes.go.title")}
              </h3>{" "}
              <p className="text-gray-600 text-sm">
                {" "}
                {t("church.axes.go.desc")}{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <GCNFooterCTA /> <GCNFooter />{" "}
    </div>
  );
}
