import { Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from '../layouts/SiteLayout';
import Home from '../pages/Home';
import Work from '../pages/Work';
import CaseStudy from '../pages/CaseStudy';
import About from '../pages/About';
import Playground from '../pages/Playground';
import Resume from '../pages/Resume';
import CertificatesArchive from '../pages/CertificatesArchive';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="work/:slug" element={<CaseStudy />} />
        <Route path="about" element={<About />} />
        <Route path="playground" element={<Playground />} />
        <Route path="resume" element={<Resume />} />

        {/* Compatibility */}
        <Route path="portfolio" element={<Navigate to="/" replace />} />
        <Route
          path="portfolio/certificates"
          element={<CertificatesArchive />}
        />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
