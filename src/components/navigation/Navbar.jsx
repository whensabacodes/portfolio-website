import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { site } from '../../data/site';
import ThemeToggle from '../theme/ThemeToggle';

function navItemIsActive(item, location) {
  const [path, hash] = item.to.split('#');
  if (hash) {
    return location.pathname === path && location.hash === `#${hash}`;
  }
  if (path === '/about') {
    return location.pathname === '/about' && !location.hash;
  }
  return location.pathname === path || location.pathname.startsWith(`${path}/`);
}

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (event) => {
    const alreadyHome = location.pathname === '/';

    if (alreadyHome && location.hash) {
      event.preventDefault();
      navigate('/', { replace: true });
    }

    if (alreadyHome) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  };

  return (
    <header className="navbar">
      <Link
        to="/"
        className="navbar__logo"
        aria-label={`${site.displayName}, home`}
        onClick={handleLogoClick}
      >
        {site.displayName}
      </Link>

      <div className="navbar__end">
        <nav className="navbar__links" aria-label="Primary">
          {site.navigation
            .filter((item) => item.showInNav !== false && item.to !== '/')
            .map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/' || item.to === '/about'}
                className={() =>
                  navItemIsActive(item, location) ? 'is-active' : undefined
                }
              >
                {item.label}
              </NavLink>
            ))}
        </nav>

        <div className="navbar__prefs" aria-label="Site preferences">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
