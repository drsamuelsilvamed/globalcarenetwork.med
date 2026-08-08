import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ScrollToTop } from './components/ScrollToTop';

// Core pages
import { Home } from './pages/Home';
import { AboutGCNPage } from './pages/AboutGCNPage';

// Who We Are
import { BoardOfDirectorsPage } from './pages/BoardOfDirectorsPage';
import { TransparencyPage } from './pages/TransparencyPage';
import { DeclarationOfFaithPage } from './pages/DeclarationOfFaithPage';
import { GlobalCareNetworkHistoryPage } from './pages/GlobalCareNetworkHistoryPage';

// What We Do
import { WhatWeDoPage } from './pages/WhatWeDoPage';
import { CommunityHealthPage } from './pages/CommunityHealthPage';
import { TelemedicinePage } from './pages/TelemedicinePage';
import { FieldRealityPage } from './pages/FieldRealityPage';
import { DigitalHealthPage } from './pages/DigitalHealthPage';

// Get Involved
import { GetInvolvedHubPage } from './pages/GetInvolvedHubPage';
import { DonatePage } from './pages/DonatePage';
import { VolunteerRecruitmentPage } from './pages/VolunteerRecruitmentPage';
import { ChurchEngagementPage } from './pages/ChurchEngagementPage';
import { PrayerNetworkPage } from './pages/PrayerNetworkPage';

// Stories & Impact
import { StoriesPage } from './pages/StoriesPage';
import { PatientStoriesPage } from './pages/PatientStoriesPage';

// Resources
import { ResourcesPage } from './pages/ResourcesPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';

// Leadership pages (personal brand)
import { SobreMi } from './pages/SobreMi';
import { MiTrayectoria } from './pages/MiTrayectoria';
import { TrayectoriaAcademica } from './pages/TrayectoriaAcademica';
import { Articulos } from './pages/Articulos';
import { Podcast } from './pages/Podcast';
import { ProjectsPage } from './pages/ProjectsPage';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* PILAR 1: QUIÉNES SOMOS */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutGCNPage />} />
          <Route path="/board" element={<BoardOfDirectorsPage />} />
          <Route path="/transparencia" element={<TransparencyPage />} />
          <Route path="/transparency" element={<TransparencyPage />} />
          <Route path="/declaracion-de-fe" element={<DeclarationOfFaithPage />} />
          <Route path="/history" element={<GlobalCareNetworkHistoryPage />} />

          {/* PILAR 2: QUÉ HACEMOS */}
          <Route path="/what-we-do" element={<WhatWeDoPage />} />
          <Route path="/community-health" element={<CommunityHealthPage />} />
          <Route path="/telemedicine" element={<TelemedicinePage />} />
          <Route path="/reality" element={<FieldRealityPage />} />
          <Route path="/digital-health" element={<DigitalHealthPage />} />

          {/* PILAR 3: PARTICIPA */}
          <Route path="/get-involved" element={<GetInvolvedHubPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/volunteer" element={<VolunteerRecruitmentPage />} />
          <Route path="/church-engagement" element={<ChurchEngagementPage />} />
          <Route path="/prayer" element={<PrayerNetworkPage />} />
          <Route path="/prayer-network" element={<PrayerNetworkPage />} />

          {/* PILAR 4: HISTORIAS E IMPACTO */}
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/patient-stories" element={<PatientStoriesPage />} />

          {/* PILAR 5: RECURSOS */}
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contacto" element={<ContactPage />} />

          {/* LIDERAZGO (personal brand pages) */}
          <Route path="/leadership" element={<SobreMi />} />
          <Route path="/trayectoria" element={<MiTrayectoria />} />
          <Route path="/academia" element={<TrayectoriaAcademica />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
