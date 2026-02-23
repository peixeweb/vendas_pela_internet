import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app/terms" element={<TermsPage />} />
        <Route path="/app/privacy" element={<PrivacyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
