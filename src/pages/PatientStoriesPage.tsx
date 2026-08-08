import { motion } from "motion/react";
import { GCNNavigation } from "../components/GCNNavigation";
import { GCNFooter } from "../components/GCNFooter";
import { GCNFooterCTA } from "../components/GCNFooterCTA";
import { useLanguage } from "../context/LanguageContext";
export function PatientStoriesPage() {
  const { t } = useLanguage(); 

  // For PatientStoriesPage, we keep the original text in Spanish as requested to avoid losing 
  // the exact testimony content. Since we didn't extract these to keys yet (to preserve the exact words), 
  // they will remain in Spanish, while the UI wrapper is translated. 
  
  const stories = [ 
    { id: 1, region: 'Leste da África', image: '/images/telehealth_africa.jpg', content: 'Nossa filha pequena foi acometida por uma virose. Fomos à farmácia local e nos passaram um antibiótico muito forte. Lembrei da comunidade da Telessaúde Missionária e mandei mensagem. A equipe médica nos atendeu rapidamente, nos orientou e passou uma medicação com menos efeitos colaterais. Em dois dias, ela já estava bem melhor. Se não fosse esse apoio, teríamos dado um remédio que poderia ter causado danos. Somos muito gratos por esse cuidado em uma região de difícil acesso.' }, 
    { id: 2, region: 'Cordilheira dos Andes, América do Sul', image: '/images/missionary_mountains.jpg', content: 'Quero agradecer pelo atendimento da equipe médica que me ajudou em relação ao estado de saúde que eu estava passando. Graças a Deus, agora estou mais tranquila com as explicações. Isso faz total diferença, principalmente fazendo missões em uma cidadezinha no meio das montanhas, onde o atendimento médico é bem restrito. Ter vocês como apoio é fundamental. Deus abençoe cada profissional envolvido.' }, 
    { id: 3, region: 'Região Ribeirinha, América do Sul', image: '/images/rural_care.jpg', content: 'Uma missionária recém-casada estava com muitas dores e mal-estar, pensando ser uma doença grave. Como não havia atendimento médico no local, apenas um laboratório, a equipe orientou à distância quais exames ela deveria fazer, suspeitando de gestação. Os resultados confirmaram: grávida de cinco semanas! O casal ficou muito feliz. Com o diagnóstico à distância, ela pôde ser encaminhada para fazer o pré-natal na cidade mais próxima.' }, 
    { id: 4, region: 'Comunidade Quilombola, América do Sul', image: '/images/rural_care.jpg', content: 'Acompanhamos uma missionária grávida em uma região de difícil acesso. Ela entrou em trabalho de parto na própria base missionária, não dando tempo de chegar ao hospital. A equipe deu suporte e orientação à distância para auxiliar no momento. O bebê nasceu saudável. Após o nascimento, a ambulância chegou e os levou ao hospital. Continuamos o acompanhamento pediátrico e orientando a mãe de primeira viagem. Uma verdadeira bênção e prova do cuidado do Senhor.' }, 
    { id: 5, region: 'Interior, América do Sul', image: '/images/missionary_mountains.jpg', content: 'Eu estava há um ano e meio sem conseguir ter uma noite de sono agradável devido a fortes dores no ombro, sem conseguir sequer levantar o braço. A região onde estamos fica muito distante da cidade, sem recursos de saúde. Após um atendimento online e um encontro presencial para aplicações durante uma viagem, as dores sumiram. Pude levantar meu braço novamente! Foi um momento de muita emoção. Louvo a Deus pela Telessaúde.' }, 
    { id: 6, region: 'Sertão, América do Sul', image: '/images/rural_care.jpg', content: 'Precisei de orientação médica para minha filha nos primeiros dias de vida e entrei em contato com a Telessaúde Missionária. Fui muito bem atendida e recebi orientações essenciais. No final da ligação, o médico fez uma oração pela nossa família. Quando a ligação terminou, senti uma graça de Deus para aquele momento e a providência foi instantânea. Testemunho para edificar a fé e louvar a Deus por essa iniciativa que abençoa missionários pelo mundo.' } 
  ]; 
  
  return ( 
    <div className="bg-light-gray min-h-screen font-body"> 
      <GCNNavigation /> 
      {/* Hero Section */} 
      <section className="pt-32 pb-20 px-6 md:px-12 bg-[#1A365D] text-white"> 
        <div className="max-w-6xl mx-auto text-center"> 
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-institutional font-bold mb-6 text-mustard" > 
            {t('patientStories.title')} 
          </motion.h1> 
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto" > 
            {t('patientStories.subtitle')} 
          </motion.p> 
        </div> 
      </section> 
      {/* Stories Grid */} 
      <section className="py-24 px-6 md:px-12"> 
        <div className="max-w-6xl mx-auto"> 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
            {stories.map((story, idx) => ( 
              <motion.div key={story.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-light-gray flex flex-col" > 
                <div className="h-48 overflow-hidden relative"> 
                  <img src={story.image} alt={`Historia en ${story.region}`} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" /> 
                  <div className="absolute top-4 left-4 bg-inst-blue text-white text-xs font-opsec px-3 py-1 rounded-sm shadow-sm tracking-wider uppercase"> 
                    {story.region} 
                  </div> 
                </div> 
                <div className="p-8 flex flex-col flex-grow"> 
                  <p className="text-gray-600 text-sm italic mb-6 flex-grow leading-relaxed"> "{story.content}" </p> 
                  <div className="mt-4 pt-4 border-t border-light-gray"> 
                    <p className="text-xs font-bold text-[#1A365D] uppercase tracking-wider"> Misionero en el campo </p> 
                  </div> 
                </div> 
              </motion.div> 
            ))} 
          </div> 
        </div> 
      </section> 
      <GCNFooterCTA /> 
      <GCNFooter /> 
    </div> 
  );
}
