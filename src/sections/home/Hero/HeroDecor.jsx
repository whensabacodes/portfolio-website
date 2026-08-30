import Doodle from '../../../decorative/Doodle/Doodle';
import Arrow from '../../../decorative/Arrow/Arrow';

/**
 * Sparse decorative layer — tiny marks only, not a content collage.
 */
function HeroDecor() {
  return (
    <div className="hero-decor" aria-hidden="true">
      <Doodle className="hero-decor__mark hero-decor__mark--star">
        <svg viewBox="0 0 24 24" width="18" height="18" focusable="false">
          <path
            d="M12 2.5 L13.8 9.2 L20.5 9.5 L15.2 13.6 L17.2 20.2 L12 16.4 L6.8 20.2 L8.8 13.6 L3.5 9.5 L10.2 9.2 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
        </svg>
      </Doodle>

      <Doodle className="hero-decor__mark hero-decor__mark--asterisk">
        <svg viewBox="0 0 20 20" width="14" height="14" focusable="false">
          <path
            d="M10 2 L10 18 M3 6 L17 14 M3 14 L17 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </Doodle>

      <Doodle className="hero-decor__mark hero-decor__mark--dots">
        <svg viewBox="0 0 28 12" width="24" height="10" focusable="false">
          <circle cx="4" cy="6" r="1.5" fill="currentColor" />
          <circle cx="14" cy="5" r="1.3" fill="currentColor" />
          <circle cx="24" cy="7" r="1.6" fill="currentColor" />
        </svg>
      </Doodle>

      <span className="hero-decor__float-arrow hero-decor__float-arrow--a">
        <Arrow direction="down-right" />
      </span>
    </div>
  );
}

export default HeroDecor;
