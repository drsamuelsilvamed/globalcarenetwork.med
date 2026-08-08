import React from "react";
import { GCNNavigation } from "../components/GCNNavigation";
import { GCNFooter } from "../components/GCNFooter";
import { AIBadge } from "../components/AIBadge";
import { GCNFooterCTA } from "../components/GCNFooterCTA";
export function DeclarationOfFaithPage() {
  const articles = [
    {
      num: 1,
      title: "La Autoridad y Suficiencia de las Escrituras",
      text: "Creemos que la Santa Biblia, compuesta por los 66 libros del Antiguo y Nuevo Testamento, es la Palabra inerrante e inspirada por el Espíritu Santo en sus manuscritos originales. La Escritura constituye la máxima y final autoridad en materia de fe, doctrina, conducta e integridad institucional, siendo plenamente suficiente para guiarnos en todo aspecto de la vida y el ministerio.",
      refs: "2 Timoteo 3:16–17; 2 Pedro 1:20–21; Salmo 19:7–11; Isaías 40:8.",
    },
    {
      num: 2,
      title: "El Dios Triuno y Su Gloria Doxológica",
      text: "Creemos en un solo Dios verdadero, eterno, personal, infinitamente perfecto, omnipotente, omnisciente y omnipresente, Creador y Sustentador del universo. Dios subsiste eternamente en tres Personas coiguales, coeternas e consustanciales: el Padre, el Hijo y el Espíritu Santo. Él es el fin supremo de todas las cosas y digno de recibir toda la gloria, honra, sabiduría y adoración de cada pueblo, tribu, lengua y nación.",
      refs: "Deuteronomio 6:4; Mateo 28:19; 2 Corintios 13:14; Apocalipsis 5:12; Salmo 67:1–2.",
    },
    {
      num: 3,
      title: "Jesucristo, el Único Salvador y Señor",
      text: "Creemos que Jesucristo es el Eterno Hijo de Dios, verdadero Dios y verdadero Hombre. Fue concebido por el Espíritu Santo y nació de la virgen María; vivió una vida impecable y perfecta; murió en la cruz como un sacrificio sustitutivo, vicario y propiciatorio por los pecados de la humanidad; resucitó corporalmente de entre los muertos al tercer día; ascendió a los cielos y está sentado a la diestra del Padre como nuestro único Mediador y Gran Sumo Sacerdote. Solo en Su Nombre hay salvación.",
      refs: "Juan 1:1,14; Filipenses 2:5–11; 1 Timoteo 2:5; 1 Corintios 15:3–4; Hechos 4:12.",
    },
    {
      num: 4,
      title: "El Espíritu Santo y la Regeneración",
      text: "Creemos en la divinidad y personalidad del Espíritu Santo, quien convence al mundo de pecado, justicia y juicio. Él efectúa la regeneración espiritual del pecador, lo une al Cuerpo de Cristo mediante el bautismo del Espíritu, habita en cada creyente, le otorga dones espirituales para la edificación de la Iglesia, y le imparte poder, consuelo y santificación para ser testigo fiel del Evangelio hasta los confines de la tierra.",
      refs: "Juan 16:7–11; Tito 3:5; Efesios 1:13–14; Hechos 1:8; 1 Corintios 12:12–13.",
    },
    {
      num: 5,
      title: "La Caída de la Humanidad y la Redención",
      text: "Creemos que el ser humano fue creado directamente por Dios a Su imagen y semejanza, en santidad y dignidad. Sin embargo, por la desobediencia voluntaria de Adán, la humanidad cayó en pecado, heredando una naturaleza totalmente depravada, quedando espiritualmente muerta, alienada de Dios y bajo la justa condena de la ira divina. La salvación es una obra exclusiva de la gracia soberana de Dios (Sola Gracia), recibida únicamente mediante la fe en la persona y obra terminada de Jesucristo (Sola Fide), aparte de cualquier mérito u obra humana.",
      refs: "Génesis 1:26–27; Romanos 3:10–23; Romanos 5:12; Efesios 2:1–9; Tito 3:4–7.",
    },
    {
      num: 6,
      title: "La Misión Global y la Centralidad de la Adoración",
      text: "Creemos que la Gran Comisión es un mandato imperativo y permanente dado por Jesucristo a Su Iglesia para hacer discípulos de todas las naciones, bautizándolos y enseñándoles a obedecer todo lo que Él ordenó. Afirmamos que las misiones no son el fin último de la Iglesia, sino el medio providencial para reunir a los adoradores de entre los pueblos. La adoración es el fin supremo; la misión existe porque la adoración aún no existe entre miles de etnias no alcanzadas.",
      refs: "Mateo 28:18–20; Hechos 1:8; Romanos 15:8–12; Apocalipsis 7:9–10; Isaías 49:6.",
    },
    {
      num: 7,
      title: "La Iglesia Local y el Deber Pactual de Cuidado",
      text: "Creemos que la Iglesia es el Cuerpo universal de Cristo, compuesta por todos los redimidos por Su sangre. Se expresa visiblemente en congregaciones locales donde se predica fielmente la Palabra y se administran las ordenanzas. Afirmamos que el sostenimiento y cuidado integral de aquellos que son enviados a proclamar el Evangelio es un deber pactual e innegociable de la Iglesia (3 Juan 1:5–8). Abandonar la salud o seguridad de los enviados por negligencia constituye una falta grave de mayordomía espiritual.",
      refs: "Efesios 4:11–16; 3 Juan 1:5–8; Filipenses 4:14–19; 1 Corintios 12:25–26.",
    },
    {
      num: 8,
      title: "La Santidad de la Vida Humana y la Gracia Común",
      text: "Creemos que toda vida humana es sagrada, poseyendo una dignidad intrínseca inalienable desde la concepción hasta la muerte natural, al haber sido creada a imagen de Dios. Reconocemos la ciencia, la biología, la tecnología médica y la ciberseguridad como expresiones de la Gracia Común de Dios concedidas a la humanidad para aliviar el sufrimiento, preservar la vida e impartir salud. Rechazamos la falsa dicotomía entre la fe y la ciencia médica rigurosa.",
      refs: "Génesis 1:27; Salmo 139:13–16; Éxodo 20:13; Mateo 25:35–40; Colosenses 3:12.",
    },
    {
      num: 9,
      title: "Ética, Modestia y Sensibilidad Intercultural",
      text: "Creemos que el ejercicio médico debe regirse por los más altos estándares éticos, profesionales y morales. En contextos transculturales y de vulnerabilidad, el cuidado debe ser administrado con un respeto profundo hacia la dignidad, pureza, honor e integridad de las familias y comunidades locales, evitando cualquier imposición cultural o deshonra al testimonio del Evangelio.",
      refs: "1 Corintios 9:19–23; Colosenses 4:5–6; 1 Pedro 2:12; Filipenses 2:3–4.",
    },
    {
      num: 10,
      title: "La Perseverancia y la Resiliencia de los Santos",
      text: "Creemos que aquellos que han sido verdaderamente regenerados y justificados por Dios perseverarán hasta el fin custodiados por el poder divino. No obstante, reconocemos que los trabajadores transculturales y equipos de campo están expuestos a aflicciones severas, traumas, persecución, aislamiento e imponderables biológicos. El cuidado integral no sustituye la soberanía divina, sino que actúa como el medio humano de retaguardia para prevenir el colapso y sostener la permanencia saludable del testimonio cristiano.",
      refs: "Juan 10:27–29; Romanos 8:35–39; 2 Corintios 4:7–12; 2 Timoteo 4:16–17.",
    },
    {
      num: 11,
      title: "El Retorno Personal de Cristo y la Adoración Final",
      text: "Creemos en el regreso personal, visible, glorioso e inminente de nuestro Señor Jesucristo. Él ejecutará Su juicio justo sobre los impíos, consumará la redención de la creación y establecerá los cielos nuevos y la tierra nueva, donde la muerte, el dolor, la enfermedad y el llanto no existirán más. Allí, la multitud de los redimidos de cada nación adorará eternamente al Cordero que fue inmolado.",
      refs: "Hechos 1:11; 1 Tesalonicenses 4:16–17; Apocalipsis 21:1–5; Apocalipsis 22:1–5.",
    },
  ];
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
              Pilar Doctrinal e Innegociable{" "}
            </span>{" "}
            <h1 className="font-heading text-charcoal text-4xl md:text-6xl mb-6">
              {" "}
              Declaración de Fe{" "}
            </h1>{" "}
            <div className="w-20 h-1 bg-mustard mx-auto mb-6"></div>{" "}
          </div>{" "}
          {/* Bloque Lausana */}{" "}
          <div className="bg-[#EFE8DD] p-8 md:p-12 border-l-4 border-inst-blue mb-16 rounded-sm shadow-sm">
            {" "}
            <h2 className="font-heading text-charcoal text-3xl mb-4">
              Adhesión e Integración al Pacto de Lausana
            </h2>{" "}
            <blockquote className="font-heading text-mustard text-xl md:text-2xl italic font-bold mb-6">
              {" "}
              "Lo que creemos determina la forma en que servimos."{" "}
            </blockquote>{" "}
            <p className="font-sans text-charcoal text-lg leading-relaxed mb-4">
              {" "}
              <strong>Missionary Medical Care</strong> se adhiere formalmente y
              suscribe íntegramente el <strong>Pacto de Lausana (1974)</strong>{" "}
              como su declaración teológica, doctrinal y misiológica
              fundamental. Afirmamos los compromisos históricos del Movimiento
              de Lausana para la evangelización mundial, reconociendo la
              autoridad inerrante de las Sagradas Escrituras, la unicidad de
              Jesucristo como único Salvador, la responsabilidad social
              cristiana y el deber pactual de cuidar de manera digna de Dios a
              quienes son enviados a proclamar el Evangelio.{" "}
            </p>{" "}
            <p className="font-sans text-charcoal text-lg leading-relaxed mb-4">
              {" "}
              Nuestra práctica médica, investigación científica, innovación
              tecnológica y protocolos de cuidado integral están firmemente
              fundamentados en la fe cristiana evangélica expresada en las
              Escrituras y ratificada en el Pacto de Lausana.{" "}
            </p>{" "}
            <p className="font-sans text-charcoal text-lg leading-relaxed">
              {" "}
              Afirmamos que el ejercicio de la medicina con la máxima excelencia
              profesional es un acto directo de culto y adoración al Creador, y
              que cuidar a los que han sido enviados de un modo "digno de Dios"
              (3 Juan 1:6) es un mandato bíblico ineludible.{" "}
            </p>{" "}
          </div>{" "}
          <div className="mb-12">
            {" "}
            <h2 className="font-heading text-charcoal text-3xl mb-2">
              Artículos Doctrinales
            </h2>{" "}
            <p className="font-sans text-[#737373] text-base mb-8">
              {" "}
              Exponemos los artículos doctrinales que rigen nuestra existencia,
              decisiones y gobernanza, en plena armonía con el Pacto de
              Lausana:{" "}
            </p>{" "}
          </div>{" "}
          <div className="space-y-10">
            {" "}
            {articles.map((art) => (
              <article
                key={art.num}
                className="bg-white p-8 rounded-sm border border-light-gray shadow-xs"
              >
                {" "}
                <h3 className="font-sans font-bold text-charcoal text-2xl mb-4 flex items-start">
                  {" "}
                  <span className="text-mustard mr-3 shrink-0">▶</span>{" "}
                  <span>
                    Art. {art.num}: {art.title}
                  </span>{" "}
                </h3>{" "}
                <p className="font-sans text-[#404040] text-lg leading-relaxed mb-4">
                  {" "}
                  {art.text}{" "}
                </p>{" "}
                <div className="pt-3 border-t border-light-gray/60">
                  {" "}
                  <span className="font-sans text-[#737373] text-sm italic">
                    {" "}
                    <strong>Referencias bíblicas:</strong> {art.refs}{" "}
                  </span>{" "}
                </div>{" "}
              </article>
            ))}{" "}
          </div>{" "}
          {/* Compromiso Institucional */}{" "}
          <div className="mt-16 bg-charcoal text-white p-8 md:p-12 rounded-sm border-t-4 border-[#B8872C]">
            {" "}
            <h3 className="font-heading text-2xl md:text-3xl mb-4">
              Nuestro Compromiso Institucional
            </h3>{" "}
            <p className="font-sans text-lg text-[#EFE8DD] leading-relaxed">
              {" "}
              Esta Declaración de Fe y nuestra adhesión al Pacto de Lausana
              orientan de manera vinculante cada protocolo clínico, arquitectura
              tecnológica, decisión de gobernanza, programa educativo y alianza
              estratégica de Missionary Medical Care.{" "}
              <strong className="block mt-4 text-inst-blue text-xl font-heading font-normal italic">
                {" "}
                Nuestros médicos curan, nuestras tecnologías protegen, pero solo
                Dios salva y restaura.{" "}
              </strong>{" "}
            </p>{" "}
          </div>{" "}
          {/* Foto 6: Grupo en Oración */}{" "}
          <div className="mt-16 relative rounded-sm overflow-hidden border border-light-gray">
            {" "}
            <img
              src="/images/site (4).webp"
              alt="Grupo de trabajadores en comunión"
              className="w-full object-cover min-h-[400px]"
            />{" "}
            <AIBadge />{" "}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-8">
              {" "}
              <p className="font-heading text-xl md:text-2xl text-white italic">
                {" "}
                "La oración y la dependencia de Dios constituyen el fundamento
                supremo de todo nuestro cuidado."{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </main>{" "}
      <GCNFooterCTA /> <GCNFooter />{" "}
    </div>
  );
}
