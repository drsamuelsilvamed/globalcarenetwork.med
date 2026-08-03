import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Home } from './pages/Home';
import { AboutGCNPage } from './pages/AboutGCNPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { TelemedicinePage } from './pages/TelemedicinePage';
import { DigitalHealthPage } from './pages/DigitalHealthPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { SobreMi } from './pages/SobreMi';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutGCNPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/telemedicine" element={<TelemedicinePage />} />
          <Route path="/digital-health" element={<DigitalHealthPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/founder" element={<SobreMi />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
