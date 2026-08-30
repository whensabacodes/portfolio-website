import { Outlet } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';

function SiteLayout() {
  return (
    <div className="site-layout">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="site-layout__main" tabIndex={-1}>
        <Outlet />
      </main>
    </div>
  );
}

export default SiteLayout;
