import coffeePng from '../../assets/doodles/coffee.png';

/**
 * Currently coffee — PNG asset (replaces SVG notebook doodle).
 * Hover/focus motion via parent .hero-orbit-item + .orbit-doodle--coffee.
 */
function CurrentlyNotebookDoodle({ className = '' }) {
  return (
    <img
      className={`orbit-doodle orbit-doodle--png orbit-doodle--coffee orbit-doodle--notebook ${className}`.trim()}
      src={coffeePng}
      alt=""
      width={64}
      height={64}
      decoding="async"
      aria-hidden="true"
      draggable={false}
    />
  );
}

export default CurrentlyNotebookDoodle;
