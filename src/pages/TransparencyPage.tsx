import React from "react";
import { GCNNavigation } from "../components/GCNNavigation";
import { GCNFooter } from "../components/GCNFooter";
import {
  ShieldCheck,
  Lock,
  EyeOff,
  FileText,
  CheckCircle2,
  UserCheck,
} from "lucide-react";
import { GCNFooterCTA } from "../components/GCNFooterCTA";
import { AIBadge } from "../components/AIBadge";
export function TransparencyPage() {
  return (
    <div className="bg-light-gray min-h-screen flex flex-col">
      {" "}
      <GCNNavigation />{" "}
      <main className="flex-grow pt-36 pb-20">
        {" "}
        <div className="max-w-4xl mx-auto px-4 md:px-8 w-full mb-20">
          {" "}
          <div className="mb-14 text-center">
            {" "}
            <span className="text-inst-blue font-sans font-bold uppercase tracking-widest text-xs mb-3 block">
              {" "}
              Rendición de Cuentas Institucional{" "}
            </span>{" "}
            <h1 className="font-heading text-charcoal text-4xl md:text-6xl mb-6">
              {" "}
              Transparencia y Gobernanza{" "}
            </h1>{" "}
            <div className="w-20 h-1 bg-mustard mx-auto mb-6"></div>{" "}
            <p className="font-sans text-[#737373] text-lg max-w-2xl mx-auto leading-relaxed">
              {" "}
              Principios éticos, estructura de gobernanza y políticas de
              privacidad radical para el cuidado en contextos de alta
              restricción.{" "}
            </p>{" "}
          </div>{" "}
          {/* 1. Quiénes Somos e Historia */}{" "}
          <section className="mb-16 bg-white p-8 md:p-12 rounded-sm border border-light-gray shadow-xs">
            {" "}
            <h2 className="font-heading text-charcoal text-3xl mb-6 flex items-center gap-3">
              {" "}
              <span className="w-2 h-8 bg-inst-blue rounded-full inline-block"></span>{" "}
              1. Quiénes Somos e Historia{" "}
            </h2>{" "}
            <div className="font-sans text-[#404040] text-lg space-y-4 leading-relaxed">
              {" "}
              <p>
                {" "}
                <strong>Missionary Medical Care (MMC)</strong> nació como
                respuesta providencial ante la trágica realidad documentada en
                el campo: más del 70% de los abandonos prematuros en el terreno
                se deben a problemas de salud física, descompensaciones
                emocionales y traumas no atendidos a tiempo.{" "}
              </p>{" "}
              <div className="my-8 relative rounded-sm overflow-hidden border border-light-gray shadow-md max-h-[350px]">
                {" "}
                <img
                  src="/images/site (2).webp"
                  alt="Gobernanza y Transparencia"
                  className="w-full h-full object-cover"
                />{" "}
                <AIBadge />{" "}
              </div>{" "}
              <p>
                {" "}
                Lo que inició en 2011 como un esfuerzo de atención médica
                directa e itinerante en las comunidades vulnerables de Bolivia
                (Misiones Bolivia), evolucionó estratégicamente entre 2023 y
                2026 hacia la consolidación de un{" "}
                <strong>
                  Programa Piloto Internacional de Telesalud Transcultural
                </strong>
                .{" "}
              </p>{" "}
              <div className="bg-light-gray p-6 border-l-4 border-[#B8872C] my-6 rounded-r-sm">
                {" "}
                <p className="font-bold text-charcoal mb-3">
                  Durante esta fase piloto:
                </p>{" "}
                <ul className="space-y-2 text-base text-[#555]">
                  {" "}
                  <li className="flex items-start gap-2">
                    {" "}
                    <CheckCircle2 className="w-5 h-5 text-inst-blue shrink-0 mt-0.5" />{" "}
                    <span>
                      Acompañamos minuciosamente a{" "}
                      <strong>16 casos clínicos complejos</strong>.
                    </span>{" "}
                  </li>{" "}
                  <li className="flex items-start gap-2">
                    {" "}
                    <CheckCircle2 className="w-5 h-5 text-inst-blue shrink-0 mt-0.5" />{" "}
                    <span>
                      Extendimos cobertura directa a{" "}
                      <strong>8 países en 4 continentes</strong> (con énfasis en
                      África Occidental, Balcanes, Sudamérica y regiones de alta
                      vulnerabilidad).
                    </span>{" "}
                  </li>{" "}
                  <li className="flex items-start gap-2">
                    {" "}
                    <CheckCircle2 className="w-5 h-5 text-inst-blue shrink-0 mt-0.5" />{" "}
                    <span>
                      Coordinamos a más de{" "}
                      <strong>20 profesionales de la salud voluntarios</strong>.
                    </span>{" "}
                  </li>{" "}
                  <li className="flex items-start gap-2">
                    {" "}
                    <CheckCircle2 className="w-5 h-5 text-inst-blue shrink-0 mt-0.5" />{" "}
                    <span>
                      Validamos que la telemedicina encriptada y los modelos de
                      soporte asíncrono previenen el desgaste, salvan vidas y
                      garantizan la sostenibilidad humana en el campo.
                    </span>{" "}
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
              <p className="font-medium text-charcoal">
                {" "}
                Hoy, Missionary Medical Care se consolida como una
                Infraestructura Cristiana Internacional de Retaguardia
                Sanitaria, Psicosocial y Operacional, diseñada específicamente
                para Regiones de Acceso Limitado y contextos de alta
                vulnerabilidad.{" "}
              </p>{" "}
            </div>{" "}
          </section>{" "}
          {/* 2. Gobernanza e Integridad Institucional */}{" "}
          <section className="mb-16 bg-white p-8 md:p-12 rounded-sm border border-light-gray shadow-xs">
            {" "}
            <h2 className="font-heading text-charcoal text-3xl mb-4 flex items-center gap-3">
              {" "}
              <span className="w-2 h-8 bg-mustard rounded-full inline-block"></span>{" "}
              2. Gobernanza e Integridad Institucional{" "}
            </h2>{" "}
            <p className="font-sans text-[#737373] text-base mb-8">
              {" "}
              Missionary Medical Care se rige bajo una estructura de gobernanza
              transparente, descentralizada y responsable (
              <em>Accountability</em>), estructurada para garantizar la máxima
              probidad ética, teológica, clínica y financiera:{" "}
            </p>{" "}
            {/* Diagrama Visual */}{" "}
            <div className="flex flex-col items-center gap-6 font-sans mb-12">
              {" "}
              <div className="bg-charcoal text-white p-6 rounded-sm text-center w-full max-w-lg shadow-md border-t-4 border-[#B8872C]">
                {" "}
                <h3 className="font-bold text-lg uppercase tracking-wider mb-1">
                  CONSEJO INSTITUCIONAL SUPERIOR
                </h3>{" "}
                <p className="text-sm text-[#EFE8DD] opacity-90">
                  (Gobernanza Doctrinal y Estratégica)
                </p>{" "}
              </div>{" "}
              <div className="h-8 w-px bg-mustard"></div>{" "}
              <div className="bg-[#EFE8DD] text-charcoal p-6 rounded-sm text-center w-full max-w-lg border border-[#737373]/30">
                {" "}
                <h3 className="font-bold text-lg uppercase tracking-wider mb-1">
                  DIRECTORÍA EXECUTIVA CENTRAL
                </h3>{" "}
                <p className="text-sm text-[#737373]">
                  (Dirección General y Logística)
                </p>{" "}
              </div>{" "}
              <div className="h-8 w-px bg-mustard"></div>{" "}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                {" "}
                <div className="bg-light-gray border border-light-gray p-5 text-center rounded-sm">
                  {" "}
                  <h4 className="font-bold text-sm uppercase text-charcoal mb-2">
                    JUNTA MÉDICA Y TELESSALUD
                  </h4>{" "}
                  <p className="text-xs text-[#737373]">
                    (Atención N1-N6)
                  </p>{" "}
                </div>{" "}
                <div className="bg-light-gray border border-light-gray p-5 text-center rounded-sm">
                  {" "}
                  <h4 className="font-bold text-sm uppercase text-charcoal mb-2">
                    DIRECCIÓN DE HEALTHCARE OPSEC Y CIBER
                  </h4>{" "}
                  <p className="text-xs text-[#737373]">
                    (Seguridad de la información)
                  </p>{" "}
                </div>{" "}
                <div className="bg-light-gray border border-light-gray p-5 text-center rounded-sm">
                  {" "}
                  <h4 className="font-bold text-sm uppercase text-charcoal mb-2">
                    DIRECCIÓN DE RESILIENCIA Y MEMBER CARE
                  </h4>{" "}
                  <p className="text-xs text-[#737373]">
                    (Cuidado integral y familiar)
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="space-y-4 font-sans text-base text-[#404040]">
              {" "}
              <div className="p-4 bg-light-gray rounded-sm">
                {" "}
                <strong className="text-charcoal">
                  Consejo Institucional Superior:
                </strong>{" "}
                Encargado de velar por la fidelidad doctrinal, la visibilidad
                institucional y el cumplimiento del marco doxológico de la
                organización.{" "}
              </div>{" "}
              <div className="p-4 bg-light-gray rounded-sm">
                {" "}
                <strong className="text-charcoal">
                  Junta Médica Internacional:
                </strong>{" "}
                Integrada por médicos especialistas homologados que supervisan
                los protocolos de actuación clínica (
                <em>Evidence-Based Medicine</em>), la ética asistencial y las
                decisiones de evacuación médica.{" "}
              </div>{" "}
              <div className="p-4 bg-light-gray rounded-sm">
                {" "}
                <strong className="text-charcoal">
                  Dirección de Healthcare OPSEC y Ciberseguridad:
                </strong>{" "}
                Responsable de auditar la infraestructura tecnológica, la
                encriptación de datos, la gestión de riesgos digitales y el
                cumplimiento normativo internacional.{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
          {/* 3. Principios Éticos y Misión Humanitaria */}{" "}
          <section className="mb-16 bg-white p-8 md:p-12 rounded-sm border border-light-gray shadow-xs">
            {" "}
            <h2 className="font-heading text-charcoal text-3xl mb-6 flex items-center gap-3">
              {" "}
              <span className="w-2 h-8 bg-inst-blue rounded-full inline-block"></span>{" "}
              3. Principios Éticos y Misión Humanitaria{" "}
            </h2>{" "}
            <p className="font-sans text-[#737373] text-base mb-8">
              {" "}
              Nuestra actuación se fundamenta en el equilibrio entre el amor
              cristiano, la ética médica secular internacional y la discreción
              operacional:{" "}
            </p>{" "}
            <div className="space-y-6">
              {" "}
              <div className="p-6 bg-light-gray border-l-4 border-inst-blue rounded-r-sm">
                {" "}
                <h3 className="font-bold text-lg text-charcoal mb-2">
                  1. Principio de Cuidar sin Exponer
                </h3>{" "}
                <p className="font-sans text-[#404040]">
                  Ninguna intervención clínica, registro de salud o comunicación
                  debe aumentar el riesgo físico, legal o social del paciente,
                  su familia o la iglesia local.
                </p>{" "}
              </div>{" "}
              <div className="p-6 bg-light-gray border-l-4 border-[#B8872C] rounded-r-sm">
                {" "}
                <h3 className="font-bold text-lg text-charcoal mb-2">
                  2. Excelencia como Culto
                </h3>{" "}
                <p className="font-sans text-[#404040]">
                  Rechazamos la improvisación y la precariedad en el cuidado de
                  los equipos. Aplicamos Medicina Basada en la Evidencia con los
                  estándares más rigurosos.
                </p>{" "}
              </div>{" "}
              <div className="p-6 bg-light-gray border-l-4 border-inst-blue rounded-r-sm">
                {" "}
                <h3 className="font-bold text-lg text-charcoal mb-2">
                  3. Autonomía y Consentimiento Informado Ampliado
                </h3>{" "}
                <p className="font-sans text-[#404040]">
                  Todo paciente recibe información clara sobre los beneficios
                  médicos y los posibles riesgos digitales o contextuales antes
                  de cualquier consulta.
                </p>{" "}
              </div>{" "}
              <div className="p-6 bg-light-gray border-l-4 border-[#B8872C] rounded-r-sm">
                {" "}
                <h3 className="font-bold text-lg text-charcoal mb-2">
                  4. Desacoplamiento Clínico-Evangelístico
                </h3>{" "}
                <p className="font-sans text-[#404040]">
                  En el acto médico directo, aplicamos la ética médica universal
                  (Declaración de Ginebra de la WMA). La atención sanitaria se
                  presta sin discriminación y respetando la libertad de
                  conciencia, prohibiendo categóricamente el uso de la medicina
                  como herramienta de coerción o proselitismo.
                </p>{" "}
              </div>{" "}
              <div className="p-6 bg-light-gray border-l-4 border-inst-blue rounded-r-sm">
                {" "}
                <h3 className="font-bold text-lg text-charcoal mb-2">
                  5. Depósito Sagrado
                </h3>{" "}
                <p className="font-sans text-[#404040]">
                  Consideramos la historia clínica y los datos personales del
                  trabajador como un depósito confiado por Dios, protegido bajo
                  el más estricto secreto profesional y tecnológico.
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
          {/* 4. Políticas de Privacidad y Protección de Datos */}{" "}
          <section className="bg-white p-8 md:p-12 rounded-sm border border-light-gray shadow-xs">
            {" "}
            <h2 className="font-heading text-charcoal text-3xl mb-6 flex items-center gap-3">
              {" "}
              <span className="w-2 h-8 bg-mustard rounded-full inline-block"></span>{" "}
              4. Políticas de Privacidad y Protección de Datos{" "}
            </h2>{" "}
            <p className="font-sans text-[#737373] text-base mb-8">
              {" "}
              Conforme a las normativas internacionales más estrictas
              (incluyendo el Reglamento General de Protección de Datos - RGPD /
              GDPR de la Unión Europea y los principios de HIPAA en salud
              digital), Missionary Medical Care aplica una política de{" "}
              <strong>Privacidad Radical</strong>:{" "}
            </p>{" "}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {" "}
              <div className="p-6 bg-light-gray border border-light-gray rounded-sm">
                {" "}
                <div className="w-10 h-10 bg-inst-blue/10 rounded-full flex items-center justify-center text-inst-blue mb-4">
                  {" "}
                  <Lock size={20} />{" "}
                </div>{" "}
                <h3 className="font-bold text-lg text-charcoal mb-2">
                  Arquitectura de Conocimiento Cero (Zero-Knowledge)
                </h3>{" "}
                <p className="text-sm text-[#555] leading-relaxed">
                  Los servidores que alojan la información no poseen ni pueden
                  acceder a las llaves de desencriptación de las consultas
                  médicas.
                </p>{" "}
              </div>{" "}
              <div className="p-6 bg-light-gray border border-light-gray rounded-sm">
                {" "}
                <div className="w-10 h-10 bg-mustard/10 rounded-full flex items-center justify-center text-mustard mb-4">
                  {" "}
                  <EyeOff size={20} />{" "}
                </div>{" "}
                <h3 className="font-bold text-lg text-charcoal mb-2">
                  Minimización Radical de Datos
                </h3>{" "}
                <p className="text-sm text-[#555] leading-relaxed">
                  Solicitamos exclusivamente los datos clínicos estrictamente
                  necesarios. Nombres reales, pasaportes e identificadores
                  confesionales son desvinculados del historial mediante
                  pseudónimos criptográficos (UUIDs).
                </p>{" "}
              </div>{" "}
              <div className="p-6 bg-light-gray border border-light-gray rounded-sm">
                {" "}
                <div className="w-10 h-10 bg-mustard/10 rounded-full flex items-center justify-center text-mustard mb-4">
                  {" "}
                  <FileText size={20} />{" "}
                </div>{" "}
                <h3 className="font-bold text-lg text-charcoal mb-2">
                  Eliminación y Destrucción Segura
                </h3>{" "}
                <p className="text-sm text-[#555] leading-relaxed">
                  Los registros temporales y archivos compartidos expiran y se
                  destruyen de forma automatizada conforme a nuestra política de
                  ciclo de vida del dato.
                </p>{" "}
              </div>{" "}
              <div className="p-6 bg-light-gray border border-light-gray rounded-sm">
                {" "}
                <div className="w-10 h-10 bg-inst-blue/10 rounded-full flex items-center justify-center text-inst-blue mb-4">
                  {" "}
                  <ShieldCheck size={20} />{" "}
                </div>{" "}
                <h3 className="font-bold text-lg text-charcoal mb-2">
                  Prohibición de Transferencia a Terceros
                </h3>{" "}
                <p className="text-sm text-[#555] leading-relaxed">
                  Jamás comercializamos, cedemos ni compartimos metadatos ni
                  información de nuestros beneficiarios con empresas, gobiernos
                  ni entidades externas.
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
        </div>{" "}
      </main>{" "}
      <GCNFooterCTA /> <GCNFooter />{" "}
    </div>
  );
}
