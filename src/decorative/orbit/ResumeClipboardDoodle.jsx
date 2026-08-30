import resumePng from '../../assets/doodles/resume.png';

/**
 * Resume card — PNG asset (replaces SVG clipboard doodle).
 * Hover/focus motion via parent .hero-orbit-item + .orbit-doodle--resume.
 */
function ResumeClipboardDoodle({ className = '' }) {
  return (
    <img
      className={`orbit-doodle orbit-doodle--png orbit-doodle--resume ${className}`.trim()}
      src={resumePng}
      alt=""
      width={96}
      height={60}
      decoding="async"
      aria-hidden="true"
      draggable={false}
    />
  );
}

export default ResumeClipboardDoodle;
