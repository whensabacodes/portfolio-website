import cameraPng from '../../assets/doodles/camera.png';

/**
 * Interests camera — PNG asset (replaces SVG palette doodle).
 * Hover/focus motion via parent .hero-orbit-item + .orbit-doodle--camera.
 */
function PlaygroundPaletteDoodle({ className = '' }) {
  return (
    <img
      className={`orbit-doodle orbit-doodle--png orbit-doodle--camera orbit-doodle--palette ${className}`.trim()}
      src={cameraPng}
      alt=""
      width={64}
      height={64}
      decoding="async"
      aria-hidden="true"
      draggable={false}
    />
  );
}

export default PlaygroundPaletteDoodle;
