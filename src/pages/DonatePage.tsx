import { useState } from "react";
import { motion } from "motion/react";
import { GCNNavigation } from "../components/GCNNavigation";
import { GCNFooter } from "../components/GCNFooter";
import { GCNFooterCTA } from "../components/GCNFooterCTA";
import { Heart, ShieldCheck, Globe, CreditCard } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
export function DonatePage() {
  const { t } = useLanguage();
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("monthly");
  const [amount, setAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState<string>("");
  const amounts = [25, 50, 100, 250, 500];
  const handleAmountClick = (val: number) => {
    setAmount(val);
    setCustomAmount("");
  };
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setAmount(null);
  };
  return (
    <div className="bg-light-gray min-h-screen font-body">
      {" "}
      <GCNNavigation /> {/* Hero Section */}{" "}
      <section className="pt-32 pb-16 px-6 md:px-12 bg-[#1A365D] text-white">
        {" "}
        <div className="max-w-4xl mx-auto text-center">
          {" "}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-institutional font-bold mb-6 text-mustard"
          >
            {" "}
            {t("donate.hero.title")}{" "}
          </motion.h1>{" "}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-200"
          >
            {" "}
            {t("donate.hero.subtitle")}{" "}
          </motion.p>{" "}
        </div>{" "}
      </section>{" "}
      {/* Donation Form Section */}{" "}
      <section className="py-20 px-6 md:px-12">
        {" "}
        <div className="max-w-3xl mx-auto bg-white rounded-sm overflow-hidden border border-light-gray">
          {" "}
          <div className="p-8 md:p-12">
            {" "}
            {/* Frequency Toggle */}{" "}
            <div className="flex justify-center mb-10">
              {" "}
              <div className="inline-flex bg-light-gray rounded-full p-1 border border-light-gray">
                {" "}
                <button
                  onClick={() => setFrequency("one-time")}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${frequency === "one-time" ? "bg-[#1A365D] text-white shadow-sm" : "text-gray-500 hover:text-[#1A365D]"}`}
                >
                  {" "}
                  {t("donate.freq.once")}{" "}
                </button>{" "}
                <button
                  onClick={() => setFrequency("monthly")}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${frequency === "monthly" ? "bg-[#1A365D] text-white shadow-sm" : "text-gray-500 hover:text-[#1A365D]"}`}
                >
                  {" "}
                  {t("donate.freq.monthly")}{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
            {/* Amounts Grid */}{" "}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {" "}
              {amounts.map((val) => (
                <button
                  key={val}
                  onClick={() => handleAmountClick(val)}
                  className={`py-4 rounded-sm text-xl font-bold transition-all border-2 ${amount === val ? "border-[#E91E63] bg-[#E91E63]/10 text-[#E91E63]" : "border-light-gray text-[#1A365D] hover:border-[#2C82C9] hover:bg-[#2C82C9]/5"}`}
                >
                  {" "}
                  \${val}{" "}
                </button>
              ))}{" "}
              <div className="relative">
                {" "}
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">
                  \$
                </span>{" "}
                <input
                  type="number"
                  placeholder="Otro"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className={`w-full h-full py-4 pl-8 pr-4 rounded-sm text-xl font-bold transition-all border-2 outline-none ${amount === null && customAmount !== "" ? "border-[#E91E63] bg-[#E91E63]/10 text-[#E91E63]" : "border-light-gray text-[#1A365D] focus:border-[#2C82C9]"}`}
                />{" "}
              </div>{" "}
            </div>{" "}
            {/* MercadoPago Checkout */}{" "}
            <a
              href="https://link.mercadopago.com.br/telesaudemissionaria"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#E91E63] hover:bg-[#d81557] text-white py-4 rounded-sm font-bold tracking-widest uppercase transition-colors shadow-[#E91E63]/30"
            >
              {" "}
              <CreditCard size={20} /> {t("donate.btn")}{" "}
            </a>{" "}
            <div className="flex items-center justify-center gap-6 mt-8 text-gray-400 text-sm">
              {" "}
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={16} /> Pago Seguro
              </div>{" "}
              <div className="flex items-center gap-1.5">
                <Globe size={16} /> Impacto Global
              </div>{" "}
              <div className="flex items-center gap-1.5">
                <Heart size={16} /> Salud Integral
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <GCNFooterCTA /> <GCNFooter />{" "}
    </div>
  );
}
