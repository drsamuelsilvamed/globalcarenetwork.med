import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Home } from './pages/Home';
import { AboutGCNPage } from './pages/AboutGCNPage';
import { WhatWeDoPage } from './pages/WhatWeDoPage';
import { ProjectsPage } from './pages/ProjectsPage';
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
          <Route path="/what-we-do" element={<WhatWeDoPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/leadership" element={<SobreMi />} />
          <Route path="/resources" element={<ResourcesPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
