import { Link } from 'react-router-dom';
import { orbitDoodles } from '../../../decorative/orbit';

/**
 * Orbit navigation doodle — doodle + filename; richer note on hover/focus.
 */
function HeroOrbitItem({ item }) {
  const {
    to,
    position,
    accent,
    doodle,
    filename,
    description,
    ariaLabel,
    label,
  } = item;
  const isHash = typeof to === 'string' && to.startsWith('#');
  const DoodleVisual = doodle ? orbitDoodles[doodle] : null;

  const className = [
    'hero-orbit-item',
    `hero-orbit-item--${position}`,
    accent ? `hero-orbit-item--accent-${accent}` : '',
    doodle ? `hero-orbit-item--doodle-${doodle}` : '',
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {DoodleVisual ? (
        <span className="hero-orbit-item__icon" aria-hidden="true">
          <DoodleVisual />
        </span>
      ) : null}
      {filename ? (
        <span className="hero-orbit-item__filename">{filename}</span>
      ) : null}
      {description ? (
        <span className="hero-orbit-item__note" aria-hidden="true">
          {description}
        </span>
      ) : null}
    </>
  );

  const sharedProps = {
    className,
    'data-orbit-position': position,
    'aria-label': ariaLabel || `${label}${filename ? `, ${filename}` : ''}`,
  };

  if (isHash) {
    return (
      <a href={to} {...sharedProps}>
        {content}
      </a>
    );
  }

  return (
    <Link to={to} {...sharedProps}>
      {content}
    </Link>
  );
}

export default HeroOrbitItem;
