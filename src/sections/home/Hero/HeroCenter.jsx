import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { site } from '../../../data/site';
import { useMotionContext } from '../../../components/motion/MotionProvider';

function HeroCenter() {
  const helloRef = useRef(null);
  const { reducedMotion } = useMotionContext();
  const paintEnabled = !reducedMotion;

  const handlePointerMove = (event) => {
    if (!paintEnabled) return;
    if (event.pointerType === 'touch') return;

    const el = helloRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    el.style.setProperty('--cursor-x', `${x}%`);
    el.style.setProperty('--cursor-y', `${y}%`);
    el.dataset.paintActive = 'true';
  };

  const handlePointerLeave = () => {
    const el = helloRef.current;
    if (!el) return;
    el.dataset.paintActive = 'false';
  };

  return (
    <div className="hero-center">
      <Link
        to="/about"
        className="hero-center__file"
        aria-label="Open About page (about_me.md)"
      >
        about_me.md
      </Link>

      <Link
        ref={helloRef}
        to="/about"
        className={[
          'hero-center__hello',
          paintEnabled ? 'hero-center__hello--paint' : null,
        ]
          .filter(Boolean)
          .join(' ')}
        aria-label={`Hi, I'm ${site.displayName}. Open About page`}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        Hi, I&apos;m {site.displayName}.
      </Link>

      <h1 className="hero-center__title">{site.professionalTitle}</h1>
      <p className="hero-center__tagline">{site.heroTagline}</p>
    </div>
  );
}

export default HeroCenter;
