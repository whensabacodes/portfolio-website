import laptopPng from '../../assets/doodles/laptop.png';

/**
 * Work laptop — PNG asset (replaces SVG doodle).
 * Hover/focus motion via parent .hero-orbit-item + .orbit-doodle--laptop.
 */
function WorkLaptopDoodle({ className = '' }) {
  return (
    <img
      className={`orbit-doodle orbit-doodle--png orbit-doodle--laptop ${className}`.trim()}
      src={laptopPng}
      alt=""
      width={88}
      height={88}
      decoding="async"
      aria-hidden="true"
      draggable={false}
    />
  );
}

export default WorkLaptopDoodle;
