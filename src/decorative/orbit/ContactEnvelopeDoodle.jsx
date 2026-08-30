import phonePng from '../../assets/doodles/phone.png';

/**
 * Contact phone — PNG asset (replaces SVG envelope doodle).
 * Hover/focus motion via parent .hero-orbit-item + .orbit-doodle--phone.
 */
function ContactEnvelopeDoodle({ className = '' }) {
  return (
    <img
      className={`orbit-doodle orbit-doodle--png orbit-doodle--phone orbit-doodle--envelope ${className}`.trim()}
      src={phonePng}
      alt=""
      width={40}
      height={72}
      decoding="async"
      aria-hidden="true"
      draggable={false}
    />
  );
}

export default ContactEnvelopeDoodle;
