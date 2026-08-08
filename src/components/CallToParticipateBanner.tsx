import React from "react";
interface CallToParticipateBannerProps {
  title?: string;
  subtitle?: string;
  showFullText?: boolean;
}
export function CallToParticipateBanner({
  title = "¿Nos ayudarás a cuidar de quienes fueron enviados?",
  subtitle,
  showFullText = true,
}: CallToParticipateBannerProps) {
  return (
    <section className="w-full bg-charcoal py-24 px-6 md:px-12 relative overflow-hidden text-white border-t-4 border-[#B8872C]">
      {" "}
      {/* Dark Gradient Backdrop */}{" "}
      <div className="absolute inset-0 bg-gradient-to-b from-[#171717] via-[#1c1c1c] to-[#171717] z-0"></div>{" "}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {" "}
        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl mb-8 leading-tight text-white">
          {" "}
          {title}{" "}
        </h2>{" "}
        {subtitle && (
          <p className="font-serif italic text-xl md:text-2xl text-[#EFE8DD] mb-8 max-w-3xl mx-auto font-light">
            {" "}
            "{subtitle}"{" "}
          </p>
        )}{" "}
        {showFullText && (
          <div className="font-sans text-[#EFE8DD] text-base md:text-lg space-y-6 mb-12 max-w-3xl mx-auto leading-relaxed opacity-95">
            {" "}
            <p>
              {" "}
              Cientos de familias misioneras sirven hoy en las fronteras más
              restrictivas y aisladas del planeta, donde el acceso a atención
              médica calificada, acompañamiento emocional y protección digital
              es prácticamente inexistente.{" "}
            </p>{" "}
            <p>
              {" "}
              Muchos de estos obreros enferman en silencio o abandonan
              prematuramente el campo por patologías totalmente tratables y
              desgastes emocionales evitables.{" "}
            </p>{" "}
            <p className="font-medium text-white">
              {" "}
              <strong>
                Missionary Medical Care existe para que ningún soldado del Reino
                caiga en soledad por falta de cuidado.
              </strong>{" "}
              Fortalecemos su salud, preservamos su resiliencia y blindamos su
              seguridad operacional (Healthcare OPSEC), permitiéndoles
              permanecer saludables para que el testimonio del Evangelio perdure
              entre los pueblos no alcanzados.{" "}
            </p>{" "}
            <p>
              {" "}
              Pero esta misión no se puede sostener en solitario. Requerimos la
              convergencia del Cuerpo de Cristo: iglesias enviadoras,
              profesionales de la salud, tecnólogos, intercesores y mantenedores
              comprometidos con la gloria de Dios en las naciones.{" "}
            </p>{" "}
          </div>
        )}{" "}
        {/* CTAs pointing directly to WhatsApp */}{" "}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {" "}
          <a
            href="https://wa.me/59162439185"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-mustard text-charcoal px-8 py-4 rounded-sm uppercase tracking-[0.1em] font-bold hover:bg-[#a07424] transition-all font-sans text-sm text-center min-w-[280px] "
          >
            {" "}
            Quiero Servir como Profesional{" "}
          </a>{" "}
          <a
            href="https://wa.me/59162439185"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-light-gray text-white px-8 py-4 rounded-sm uppercase tracking-[0.1em] font-bold hover: transition-all font-sans text-sm text-center min-w-[280px]"
          >
            {" "}
            Apoyar a Missionary Medical Care{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
