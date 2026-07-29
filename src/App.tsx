import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Home } from './pages/Home';
import { TrayectoriaAcademica } from './pages/TrayectoriaAcademica';
import { GlobalCareNetworkPage } from "./pages/GlobalCareNetworkPage";
import { GlobalCareNetworkHistoryPage } from "./pages/GlobalCareNetworkHistoryPage";
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trayectoria" element={<TrayectoriaAcademica />} />
          <Route path="/global-care-network" element={<GlobalCareNetworkPage />} />
          <Route path="/global-care-network/historia" element={<GlobalCareNetworkHistoryPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
