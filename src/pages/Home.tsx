import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { AreasColaboracion } from '../components/AreasColaboracion';
import { About } from '../components/About';
import { GlobalCareNetwork } from '../components/GlobalCareNetwork';
import { QueHago } from '../components/QueHago';
import { Contacto } from '../components/Contacto';
import { Footer } from '../components/Footer';
import { ArticulosPlaceholder, PodcastPlaceholder } from '../components/Placeholders';

export function Home() {
  return (
    <main className="min-h-screen bg-brand-cream font-sans selection:bg-brand-black selection:text-white flex flex-col">
      <Navigation />
      <Hero />
      <About />
      <QueHago />
      <ArticulosPlaceholder />
      <PodcastPlaceholder />
      <GlobalCareNetwork />
      <AreasColaboracion />
      <Contacto />
      <Footer />
    </main>
  );
}
