import React, { useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { GCNNavigation } from "../components/GCNNavigation";
import { GCNFooter } from "../components/GCNFooter";
import {
  MessageSquare,
  Mail,
  Phone,
  CheckCircle,
  Send,
  Globe,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { AIBadge } from "../components/AIBadge";
import { GCNFooterCTA } from "../components/GCNFooterCTA";
export function ContactPage() {
  const { language, setLanguage } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    profile: "",
    subject: "Solicitar apoyo",
    message: "",
    acceptPrivacy: false,
  });
  const content = {
    ES: {
      tag: "Estamos para Servirte",
      title: "Entre en Contacto",
      text: "Nos encantaría conocerte. Si deseas recibir atención médica o pastoral, servir como voluntario, establecer una alianza o conocer mejor a Missionary Medical Care, nuestro equipo estará feliz de responder tu mensaje.",
      whatsappLabel: "WhatsApp Oficial",
      emailLabel: "Correo Electrónico Directo",
      languagesLabel: "Atención Multilingüe",
      formTitle: "Envíanos un Mensaje",
      firstName: "Nombre",
      lastName: "Apellido",
      email: "Correo Electrónico",
      country: "País",
      profile: "Perfil (Ej. Médico, Trabajador Transcultural, Pastor...)",
      subject: "Asunto / Motivo",
      message: "Mensaje",
      privacyText:
        "He leído y acepto la Política de Privacidad y Confidencialidad (Healthcare OPSEC).",
      submitBtn: "ENVIAR MENSAJE",
      quickWhatsapp: "Hablar por WhatsApp Directo",
      quickEmail: "Enviar Correo Directo",
      subjects: [
        "Solicitar apoyo",
        "Telemedicina",
        "Salud Mental",
        "Member Care",
        "Educación",
        "Alianzas",
        "Donaciones",
        "Voluntariado",
        "Otro",
      ],
      thankTitle: "¡Gracias!",
      thankMsg:
        "Hemos recibido tu mensaje correctamente. Nuestro equipo médico e institucional responderá a la brevedad posible.",
      thankSub:
        "Si necesitas una respuesta inmediata de urgencia o consulta rápida, puedes contactarnos directamente por WhatsApp.",
      openWhatsapp: "Abrir WhatsApp",
      sendAnother: "Enviar otro mensaje",
    },
    PT: {
      tag: "Estamos para Servir Você",
      title: "Entre em Contato",
      text: "Gostaríamos de conhecer você. Se você deseja receber cuidado, servir como voluntário, estabelecer uma parceria ou conhecer melhor o Missionary Medical Care, nossa equipe terá alegria em responder sua mensagem.",
      whatsappLabel: "WhatsApp Oficial",
      emailLabel: "E-mail Direto",
      languagesLabel: "Atendimento Multilíngue",
      formTitle: "Envie-nos uma Mensagem",
      firstName: "Primeiro Nome",
      lastName: "Sobrenome",
      email: "E-mail",
      country: "País",
      profile: "Perfil (Ex. Médico, Trabalhador Transcultural, Pastor...)",
      subject: "Assunto",
      message: "Mensagem",
      privacyText:
        "Li e concordo com a Política de Privacidade e Confidencialidade (Healthcare OPSEC).",
      submitBtn: "ENVIAR MENSAGEM",
      quickWhatsapp: "Falar pelo WhatsApp Direto",
      quickEmail: "Enviar E-mail Diretamente",
      subjects: [
        "Solicitar apoio",
        "Telemedicina",
        "Saúde Mental",
        "Member Care",
        "Educação",
        "Parcerias",
        "Doações",
        "Voluntariado",
        "Outro",
      ],
      thankTitle: "Obrigado!",
      thankMsg:
        "Recebemos sua mensagem com sucesso. Nossa equipe responderá o mais breve possível.",
      thankSub:
        "Enquanto isso, você também pode entrar em contato diretamente pelo WhatsApp.",
      openWhatsapp: "Abrir WhatsApp",
      sendAnother: "Enviar outra mensagem",
    },
    EN: {
      tag: "We Are Here to Serve You",
      title: "Contact Us",
      text: "We would love to connect with you. Whether you wish to receive medical or pastoral care, serve as a volunteer, form a partnership, or learn more about Missionary Medical Care, our team will be glad to respond to your message.",
      whatsappLabel: "Official WhatsApp",
      emailLabel: "Direct Email",
      languagesLabel: "Multilingual Support",
      formTitle: "Send Us a Message",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      country: "Country",
      profile: "Profile (e.g., Doctor, Cross-cultural Worker, Pastor...)",
      subject: "Subject",
      message: "Message",
      privacyText:
        "I have read and agree to the Privacy and Confidentiality Policy (Healthcare OPSEC).",
      submitBtn: "SEND MESSAGE",
      quickWhatsapp: "Chat via Direct WhatsApp",
      quickEmail: "Send Email Directly",
      subjects: [
        "Request Support",
        "Telemedicine",
        "Mental Health",
        "Member Care",
        "Education",
        "Partnerships",
        "Donations",
        "Volunteer",
        "Other",
      ],
      thankTitle: "Thank You!",
      thankMsg:
        "We have received your message. Our team will get back to you as soon as possible.",
      thankSub:
        "In the meantime, you can also reach us directly via WhatsApp for urgent requests.",
      openWhatsapp: "Open WhatsApp",
      sendAnother: "Send another message",
    },
  };
  const t = content[language as "ES" | "PT" | "EN"] || content.ES;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.acceptPrivacy) {
      alert(
        language === "PT"
          ? "Por favor aceite a política de privacidade."
          : language === "EN"
            ? "Please accept the privacy policy."
            : "Por favor acepta la política de privacidad.",
      );
      return;
    }
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const payload = { ...formData, submissionId: crypto.randomUUID() };
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setSubmitted(true);
    } catch (error) {
      console.error("Error enviando mensaje:", error);
      setSubmitError(
        language === "PT"
          ? "Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde."
          : language === "EN"
            ? "An error occurred while sending your message. Please try again later."
            : "Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <main className="min-h-screen bg-light-gray font-sans selection:bg-inst-blue selection:text-white flex flex-col">
      {" "}
      <GCNNavigation /> {/* Header Spacer */} <div className="pt-32"></div>{" "}
      {/* Main Section */}{" "}
      <section className="py-16 px-4 md:px-12 flex-grow">
        {" "}
        <div className="max-w-6xl mx-auto bg-white border border-light-gray rounded-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {" "}
          {/* Left Column: Info & Background Photo */}{" "}
          <div className="lg:col-span-5 bg-charcoal text-white p-8 md:p-12 relative flex flex-col justify-between overflow-hidden">
            {" "}
            {/* Background Photo Overlay */}{" "}
            <div
              className="absolute inset-0 z-0 bg-cover bg-center opacity-30 filter grayscale contrast-125 pointer-events-none"
              style={{ backgroundImage: "url('/images/site (5).webp')" }}
            >
              {" "}
            </div>{" "}
            <AIBadge />{" "}
            <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/90 to-[#171717]/95 z-0 pointer-events-none"></div>{" "}
            <div className="relative z-10 space-y-6">
              {" "}
              <span className="text-mustard uppercase tracking-[0.2em] text-xs font-bold block">
                {" "}
                {t.tag}{" "}
              </span>{" "}
              <h1 className="text-3xl md:text-5xl font-heading text-white font-bold">
                {" "}
                {t.title}{" "}
              </h1>{" "}
              <p className="text-gray-300 font-sans text-sm md:text-base leading-relaxed font-light">
                {" "}
                {t.text}{" "}
              </p>{" "}
              <hr className="border-gray-800 my-6" /> {/* Direct Info List */}{" "}
              <div className="space-y-5 text-sm">
                {" "}
                <div className="flex items-start gap-4">
                  {" "}
                  <div className="w-10 h-10 bg-mustard/20 text-mustard rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    {" "}
                    <MessageSquare size={18} />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-bold block">
                      {t.whatsappLabel}
                    </span>{" "}
                    <a
                      href="https://wa.me/59162439185"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-mono text-base font-bold hover:text-mustard transition-colors"
                    >
                      {" "}
                      +591 62439185{" "}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex items-start gap-4">
                  {" "}
                  <div className="w-10 h-10 bg-inst-blue/20 text-inst-blue rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    {" "}
                    <Mail size={18} />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-bold block">
                      {t.emailLabel}
                    </span>{" "}
                    <a
                      href="mailto:drsamuelsilva.med@gmail.com"
                      className="text-white font-sans text-sm font-medium hover:text-inst-blue transition-colors break-all"
                    >
                      {" "}
                      drsamuelsilva.med@gmail.com{" "}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex items-start gap-4">
                  {" "}
                  <div className="w-10 h-10 text-gray-300 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    {" "}
                    <Globe size={18} />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-bold block">
                      {t.languagesLabel}
                    </span>{" "}
                    <div className="flex gap-3 text-xs text-gray-300 pt-1">
                      {" "}
                      <button
                        onClick={() => setLanguage("ES")}
                        className={`hover:text-white ${language === "ES" ? "text-mustard font-bold" : ""}`}
                      >
                        🇪🇸 Español
                      </button>{" "}
                      <span>|</span>{" "}
                      <button
                        onClick={() => setLanguage("PT")}
                        className={`hover:text-white ${language === "PT" ? "text-mustard font-bold" : ""}`}
                      >
                        🇧🇷 Português
                      </button>{" "}
                      <span>|</span>{" "}
                      <button
                        onClick={() => setLanguage("EN")}
                        className={`hover:text-white ${language === "EN" ? "text-mustard font-bold" : ""}`}
                      >
                        🇺🇸 English
                      </button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            {/* Bottom OPSEC Note */}{" "}
            <div className="relative z-10 pt-10 text-xs text-gray-400 flex items-center gap-2">
              {" "}
              <ShieldCheck className="w-4 h-4 text-mustard shrink-0" />{" "}
              <span>
                Healthcare OPSEC: Comunicaciones encriptadas y protegidas.
              </span>{" "}
            </div>{" "}
          </div>{" "}
          {/* Right Column: Form or Success Message */}{" "}
          <div className="lg:col-span-7 p-8 md:p-12 bg-white flex flex-col justify-center">
            {" "}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6 py-8"
              >
                {" "}
                <div className="w-16 h-16 bg-inst-blue/10 text-inst-blue rounded-full flex items-center justify-center mx-auto">
                  {" "}
                  <CheckCircle size={36} />{" "}
                </div>{" "}
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
                  {" "}
                  {t.thankTitle}{" "}
                </h2>{" "}
                <p className="text-[#404040] font-sans text-base max-w-md mx-auto leading-relaxed">
                  {" "}
                  {t.thankMsg}{" "}
                </p>{" "}
                <p className="text-[#737373] text-sm max-w-md mx-auto">
                  {" "}
                  {t.thankSub}{" "}
                </p>{" "}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  {" "}
                  <a
                    href="https://wa.me/59162439185"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-mustard text-charcoal px-8 py-3.5 rounded-sm font-sans font-bold text-xs uppercase tracking-widest hover:bg-[#a07424] transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    {" "}
                    <MessageSquare size={16} /> {t.openWhatsapp}{" "}
                  </a>{" "}
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        country: "",
                        profile: "",
                        subject: t.subjects[0],
                        message: "",
                        acceptPrivacy: false,
                      });
                    }}
                    className="border border-light-gray text-[#404040] px-6 py-3.5 rounded-sm font-sans font-bold text-xs uppercase tracking-widest hover:bg-light-gray transition-all"
                  >
                    {" "}
                    {t.sendAnother}{" "}
                  </button>{" "}
                </div>{" "}
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {" "}
                <div>
                  {" "}
                  <h2 className="text-2xl md:text-3xl font-heading text-charcoal font-bold">
                    {" "}
                    {t.formTitle}{" "}
                  </h2>{" "}
                </div>{" "}
                {/* Name Fields */}{" "}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {" "}
                  <div>
                    {" "}
                    <label className="block text-xs uppercase tracking-wider font-bold text-[#404040] mb-2">
                      {" "}
                      {t.firstName} *{" "}
                    </label>{" "}
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      placeholder={t.firstName}
                      className="w-full px-4 py-3 bg-light-gray border border-light-gray rounded-sm text-sm text-charcoal focus:outline-none focus:border-[#B8872C]"
                    />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <label className="block text-xs uppercase tracking-wider font-bold text-[#404040] mb-2">
                      {" "}
                      {t.lastName}{" "}
                    </label>{" "}
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      placeholder={t.lastName}
                      className="w-full px-4 py-3 bg-light-gray border border-light-gray rounded-sm text-sm text-charcoal focus:outline-none focus:border-[#B8872C]"
                    />{" "}
                  </div>{" "}
                </div>{" "}
                {/* Email */}{" "}
                <div>
                  {" "}
                  <label className="block text-xs uppercase tracking-wider font-bold text-[#404040] mb-2">
                    {" "}
                    {t.email} *{" "}
                  </label>{" "}
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="email@dominio.com"
                    className="w-full px-4 py-3 bg-light-gray border border-light-gray rounded-sm text-sm text-charcoal focus:outline-none focus:border-[#B8872C]"
                  />{" "}
                </div>{" "}
                {/* Country and Profile */}{" "}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {" "}
                  <div>
                    {" "}
                    <label className="block text-xs uppercase tracking-wider font-bold text-[#404040] mb-2">
                      {" "}
                      {t.country}{" "}
                    </label>{" "}
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                      placeholder={t.country}
                      className="w-full px-4 py-3 bg-light-gray border border-light-gray rounded-sm text-sm text-charcoal focus:outline-none focus:border-[#B8872C]"
                    />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <label className="block text-xs uppercase tracking-wider font-bold text-[#404040] mb-2">
                      {" "}
                      {t.profile}{" "}
                    </label>{" "}
                    <input
                      type="text"
                      value={formData.profile}
                      onChange={(e) =>
                        setFormData({ ...formData, profile: e.target.value })
                      }
                      placeholder={t.profile}
                      className="w-full px-4 py-3 bg-light-gray border border-light-gray rounded-sm text-sm text-charcoal focus:outline-none focus:border-[#B8872C]"
                    />{" "}
                  </div>{" "}
                </div>{" "}
                {/* Subject Select */}{" "}
                <div>
                  {" "}
                  <label className="block text-xs uppercase tracking-wider font-bold text-[#404040] mb-2">
                    {" "}
                    {t.subject} *{" "}
                  </label>{" "}
                  <select
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-light-gray border border-light-gray rounded-sm text-sm text-charcoal focus:outline-none focus:border-[#B8872C]"
                  >
                    {" "}
                    {t.subjects.map((subj, idx) => (
                      <option key={idx} value={subj}>
                        {subj}
                      </option>
                    ))}{" "}
                  </select>{" "}
                </div>{" "}
                {/* Message Textarea */}{" "}
                <div>
                  {" "}
                  <label className="block text-xs uppercase tracking-wider font-bold text-[#404040] mb-2">
                    {" "}
                    {t.message} *{" "}
                  </label>{" "}
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="..."
                    className="w-full px-4 py-3 bg-light-gray border border-light-gray rounded-sm text-sm text-charcoal focus:outline-none focus:border-[#B8872C] resize-none"
                  ></textarea>{" "}
                </div>{" "}
                {/* Privacy Checkbox */}{" "}
                <div className="flex items-start gap-3 pt-1">
                  {" "}
                  <input
                    type="checkbox"
                    id="privacyCheck"
                    required
                    checked={formData.acceptPrivacy}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        acceptPrivacy: e.target.checked,
                      })
                    }
                    className="mt-1 accent-[#B8872C] w-4 h-4 rounded-xs cursor-pointer"
                  />{" "}
                  <label
                    htmlFor="privacyCheck"
                    className="text-xs text-[#737373] cursor-pointer leading-relaxed"
                  >
                    {" "}
                    {t.privacyText}{" "}
                    <Link
                      to="/transparencia"
                      className="text-mustard underline"
                    >
                      Ver Transparencia
                    </Link>
                    .{" "}
                  </label>{" "}
                </div>{" "}
                {/* Submit Error */}{" "}
                {submitError && (
                  <div className="bg-red-50 text-red-600 p-3 rounded-sm text-sm border border-red-200">
                    {" "}
                    {submitError}{" "}
                  </div>
                )}{" "}
                {/* Submit Button */}{" "}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-sm font-sans font-bold text-xs uppercase tracking-[0.15em] transition-all shadow-md flex items-center justify-center gap-2 ${isSubmitting ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-mustard text-charcoal hover:bg-[#a07424] cursor-pointer"}`}
                >
                  {" "}
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Send size={16} />
                  )}{" "}
                  {isSubmitting
                    ? language === "PT"
                      ? "ENVIANDO..."
                      : language === "EN"
                        ? "SENDING..."
                        : "ENVIANDO..."
                    : t.submitBtn}{" "}
                </button>{" "}
                {/* Fast Action Direct Buttons */}{" "}
                <div className="pt-6 border-t border-light-gray grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {" "}
                  <a
                    href="https://wa.me/59162439185"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-charcoal text-white py-3 px-4 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-[#333] transition-all text-center flex items-center justify-center gap-2"
                  >
                    {" "}
                    <MessageSquare size={14} className="text-inst-blue" />{" "}
                    {t.quickWhatsapp}{" "}
                  </a>{" "}
                  <a
                    href="mailto:drsamuelsilva.med@gmail.com"
                    className="border border-light-gray text-[#404040] py-3 px-4 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-light-gray transition-all text-center flex items-center justify-center gap-2"
                  >
                    {" "}
                    <Mail size={14} className="text-mustard" />{" "}
                    {t.quickEmail}{" "}
                  </a>{" "}
                </div>{" "}
              </form>
            )}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <GCNFooterCTA /> <GCNFooter />{" "}
    </main>
  );
}
