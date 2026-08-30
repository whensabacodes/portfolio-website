import { Link } from 'react-router-dom';

function BackToHome({ className = '' }) {
  return (
    <Link to="/" className={`back-home ${className}`.trim()}>
      <span className="back-home__arrow" aria-hidden="true">
        ←
      </span>
      <span className="back-home__label">home</span>
    </Link>
  );
}

export default BackToHome;
