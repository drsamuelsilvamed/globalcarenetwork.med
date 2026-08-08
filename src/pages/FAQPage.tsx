import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { GCNNavigation } from "../components/GCNNavigation";
import { GCNFooter } from "../components/GCNFooter";
import { GCNFooterCTA } from "../components/GCNFooterCTA";
import { AIBadge } from "../components/AIBadge";
interface FAQItemData {
  q: string;
  a: string | React.ReactNode;
}
function AccordionItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string | React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-light-gray py-6 last:border-b-0">
      {" "}
      <button
        className="w-full text-left flex justify-between items-start focus:outline-none group cursor-pointer"
        onClick={onClick}
      >
        {" "}
        <h3 className="font-sans font-bold text-xl md:text-2xl text-charcoal pr-6 group-hover:text-mustard transition-colors leading-snug">
          {" "}
          {question}{" "}
        </h3>{" "}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-mustard shrink-0 mt-1"
        >
          {" "}
          <ChevronDown size={28} />{" "}
        </motion.div>{" "}
      </button>{" "}
      <AnimatePresence>
        {" "}
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {" "}
            <div className="pt-4 pb-2 text-[#404040] font-sans text-base md:text-lg leading-relaxed space-y-4">
              {" "}
              {typeof answer === "string" ? <p>{answer}</p> : answer}{" "}
            </div>{" "}
          </motion.div>
        )}{" "}
      </AnimatePresence>{" "}
    </div>
  );
}
export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs: FAQItemData[] = [
    {
      q: "¿Qué es Missionary Medical Care?",
      a: (
        <p>
          {" "}
          <strong>Missionary Medical Care (MMC)</strong> es una red
          internacional cristiana dedicada al cuidado integral de equipos de
          campo, trabajadores transculturales y sus familias que sirven en
          contextos de difícil acceso, vulnerabilidad sanitaria o restricción
          geográfica e institucional. Combina seis áreas de excelencia: Salud
          Global, Telesalud Humanitaria y Medicina Digital, Seguridad
          Operacional en Salud (<em>Healthcare OPSEC</em>), Resiliencia Física,
          Mental y Espiritual, Medicina Transcultural y Competencia
          Intercultural, e Investigación y Educación en Salud Transcultural.
          Nuestro fin supremo es doxológico: cuidar a los enviados de una manera
          digna de Dios para que Su salvación y caminos sean conocidos entre
          todas las naciones (Salmo 67:1–2; 3 Juan 1:6).{" "}
        </p>
      ),
    },
    {
      q: "¿Quiénes pueden recibir apoyo?",
      a: (
        <div>
          {" "}
          <p className="mb-3">
            Nuestros servicios están dirigidos primordialmente a:
          </p>{" "}
          <ul className="list-disc pl-6 space-y-2">
            {" "}
            <li>
              <strong>
                Trabajadores transculturales y de desarrollo humano
              </strong>{" "}
              desplegados en áreas remotas o de alta presión.
            </li>{" "}
            <li>
              <strong>Familias transculturales</strong>, incluyendo cónyuges e
              hijos (<em>Third Culture Kids</em> - TCKs).
            </li>{" "}
            <li>
              <strong>Agencias y juntas enviadoras</strong> que requieren
              acompañamiento médico especializado, protocolos de resiliencia y
              gestión de emergencias.
            </li>{" "}
            <li>
              <strong>Iglesias enviadoras</strong> que buscan ofrecer una
              retaguardia clínica y de <em>Member Care</em> profesional a sus
              obreros.
            </li>{" "}
            <li>
              <strong>Equipos locales y colaboradores de campo</strong> en
              contextos de vulnerabilidad extrema.
            </li>{" "}
          </ul>{" "}
        </div>
      ),
    },
    {
      q: "¿En qué países o regiones trabajan?",
      a: (
        <p>
          {" "}
          Nuestra prioridad estratégica se enfoca en{" "}
          <strong>Regiones de Acceso Limitado</strong> (Norte de África, Medio
          Oriente, Asia Central y Sur de Asia), zonas de conflicto, comunidades
          indígenas aisladas, "desiertos hospitalarios" y contextos con alta
          restricción o presencia de vigilancia digital panóptica. Sin embargo,
          mediante nuestra red soberana de telesalud y coordinación
          internacional, atendemos a obreros en los cuatro continentes.{" "}
        </p>
      ),
    },
    {
      q: "¿Missionary Medical Care sustituye a las iglesias o agencias enviadoras?",
      a: (
        <p>
          {" "}
          <strong>No.</strong> Missionary Medical Care no es una agencia
          enviadora ni reemplaza el rol pastoral y de cobertura de la iglesia
          local o la agencia de desarrollo. Actuamos como un{" "}
          <strong>
            órgano de retaguardia técnica, médica y de resiliencia
          </strong>
          . Fortalecemos, capacitamos y complementamos el cuidado que las
          iglesias y agencias ya brindan, aportando herramientas de alta
          especialización clínica, ciberseguridad y gestión del desgaste (
          <em>burnout</em> y trauma) que frecuentemente exceden la capacidad
          operativa de las estructuras eclesiales locales.{" "}
        </p>
      ),
    },
    {
      q: "¿Qué tipo de apoyo ofrecen?",
      a: (
        <div>
          {" "}
          <p className="mb-3">
            Ofrecemos un ecosistema de cuidado estructurado en seis niveles
            progresivos:
          </p>{" "}
          <ol className="list-decimal pl-6 space-y-2">
            {" "}
            <li>
              <strong>Autocuidado y Prevención (N1):</strong> Guías clínicas,
              formación en salud de expedición y preparación previa al
              despliegue.
            </li>{" "}
            <li>
              <strong>Teleorientación y Triaje (N2):</strong> Respuesta médica
              rápida, asíncrona y continua para dudas de salud cotidiana.
            </li>{" "}
            <li>
              <strong>Telemedicina Especializada (N3):</strong> Consultas
              médicas, psicológicas y psiquiátricas individuales y familiares
              mediante canales encriptados.
            </li>{" "}
            <li>
              <strong>Junta Médica Especializada (N4):</strong> Evaluación
              multidisciplinaria para casos complejos, enfermedades crónicas o
              decisiones de permanencia en el campo.
            </li>{" "}
            <li>
              <strong>Gestión de Casos Complejos y Crisis (N5):</strong> Soporte
              en trauma, descompensaciones severas y crisis de resiliencia
              familiar.
            </li>{" "}
            <li>
              <strong>Evacuación Médica / Medevac (N6):</strong> Coordinación
              logística y de soporte vital para repatriaciones o traslados de
              emergencia.
            </li>{" "}
          </ol>{" "}
          <p className="mt-3">
            Adicionalmente proveemos formación en <em>Healthcare OPSEC</em>,
            investigación en salud misionera y apoyo para hijos de tercera
            cultura (TCKs).
          </p>{" "}
        </div>
      ),
    },
    {
      q: "¿Todos los servicios son gratuitos?",
      a: (
        <div>
          {" "}
          <p className="mb-3">
            {" "}
            <strong>
              Sí, para el trabajador en el campo el acceso al cuidado
              asistencial básico y de emergencia es 100% gratuito.
            </strong>{" "}
            El modelo asistencial de Missionary Medical Care se sustenta bajo el
            principio de solidaridad del Cuerpo de Cristo:{" "}
          </p>{" "}
          <ul className="list-disc pl-6 space-y-2">
            {" "}
            <li>
              <strong>Los profesionales de la salud</strong> (médicos,
              psicólogos, enfermeros) donan voluntariamente su tiempo y
              conocimiento clínico con la máxima excelencia.
            </li>{" "}
            <li>
              <strong>Las iglesias socias, donantes e intercesores</strong>{" "}
              financian la infraestructura tecnológica soberana, licencias de
              criptografía de alto nivel, servidores de conocimiento cero (
              <em>Zero-Knowledge</em>), insumos de salud para el campo y la
              logística de emergencias.
            </li>{" "}
          </ul>{" "}
        </div>
      ),
    },
    {
      q: "¿Cómo puedo servir como profesional de la salud o técnico?",
      a: (
        <div>
          {" "}
          <p className="mb-3">
            {" "}
            Los profesionales de la salud (médicos generales y especialistas,
            psicólogos, psiquiatras, enfermeros, nutricionistas), así como
            especialistas en tecnología, ciberseguridad y traducción, pueden
            sumarse a nuestra Red Internacional de Voluntarios. El proceso de
            incorporación incluye:{" "}
          </p>{" "}
          <ol className="list-decimal pl-6 space-y-2">
            {" "}
            <li>Solicitud formal e historia profesional.</li>{" "}
            <li>
              Verificación rigurosa de credenciales y licencias médicas
              vigentes.
            </li>{" "}
            <li>
              Entrevista de alineamiento espiritual y adhesión a nuestra
              Declaración de Fe.
            </li>{" "}
            <li>
              Capacitación obligatoria en <em>Healthcare OPSEC</em>, medicina
              transcultural y protección de datos sensibles en contextos de alta
              restricción.
            </li>{" "}
          </ol>{" "}
        </div>
      ),
    },
    {
      q: "¿Cómo puede una iglesia local colaborar con MMC?",
      a: (
        <div>
          {" "}
          <p className="mb-3">
            Las iglesias locales pueden asociarse con Missionary Medical Care a
            través de tres vías estratégicas:
          </p>{" "}
          <ol className="list-decimal pl-6 space-y-2">
            {" "}
            <li>
              <strong>Adopción en Oración e Intercesión:</strong> Cobertura
              espiritual sobre regiones geopolíticas y casos de salud atendidos
              en la red.
            </li>{" "}
            <li>
              <strong>Inversión Financiera en Infraestructura:</strong> Apoyar
              mensualmente el sostenimiento de la capa tecnológica de seguridad,
              los servidores encriptados y el fondo de emergencias de evacuación
              médica.
            </li>{" "}
            <li>
              <strong>Movilización de Talentos:</strong> Conectar a los
              profesionales de la salud de la congregación para que donen horas
              de consulta virtual a favor de los enviados.
            </li>{" "}
          </ol>{" "}
        </div>
      ),
    },
    {
      q: "¿Cómo puedo apoyar financieramente a la organización?",
      a: (
        <p>
          {" "}
          Puede realizar donaciones puntuales o recurrentes a través de nuestras
          plataformas seguras. Dado que el tiempo médico es donado por los
          especialistas, el 100% de los recursos financieros se destina a
          financiar la infraestructura tecnológica soberana (servidores
          encriptados, protección contra la censura), el despacho de equipos
          médicos portátiles a zonas aisladas (<em>Kits IoMT</em>) y la
          cobertura logística de evacuaciones de emergencia.{" "}
        </p>
      ),
    },
    {
      q: "¿Cómo puedo solicitar ayuda médica o iniciar una consulta?",
      a: (
        <p>
          {" "}
          Cualquier trabajador o agencia puede solicitar soporte ingresando a
          nuestra plataforma segura. A fin de proteger su identidad y seguridad
          física, aplicamos una política de{" "}
          <strong>pseudonimización progresiva y minimización de datos</strong> (
          <em>Cuidar sin Exponer</em>). No requerimos inicialmente datos de
          localización exacta ni identificadores personales no esenciales. Una
          vez recibida la solicitud, nuestro equipo de triaje asignará el caso
          al nivel de atención correspondiente a través de canales cifrados de
          punto a punto.{" "}
        </p>
      ),
    },
  ];
  return (
    <div className="bg-light-gray min-h-screen flex flex-col">
      {" "}
      <GCNNavigation />{" "}
      <main className="flex-grow pt-36 pb-20">
        {" "}
        <div className="max-w-4xl mx-auto px-4 md:px-8 w-full mb-16">
          {" "}
          <div className="mb-14 text-center">
            {" "}
            <span className="text-inst-blue font-sans font-bold uppercase tracking-widest text-xs mb-3 block">
              {" "}
              Respuestas Institucionales{" "}
            </span>{" "}
            <h1 className="font-heading text-charcoal text-4xl md:text-6xl mb-6">
              {" "}
              Preguntas Frecuentes (FAQ){" "}
            </h1>{" "}
            <div className="w-20 h-1 bg-mustard mx-auto mb-6"></div>{" "}
            <p className="font-sans text-[#737373] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {" "}
              Resolviendo dudas clave con rigor científico, fidelidad bíblica y
              seguridad operacional.{" "}
            </p>{" "}
            <div className="mt-8 max-w-xl mx-auto relative rounded-sm overflow-hidden shadow-md border border-light-gray">
              {" "}
              <img
                src="/images/site (3).webp"
                alt="Preguntas frecuentes"
                className="w-full h-48 object-cover"
              />{" "}
              <AIBadge />{" "}
            </div>{" "}
          </div>{" "}
          <div className="bg-white p-6 md:p-12 rounded-sm shadow-sm border border-light-gray">
            {" "}
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.q}
                answer={faq.a}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </main>{" "}
      <GCNFooterCTA /> <GCNFooter />{" "}
    </div>
  );
}
