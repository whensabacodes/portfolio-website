import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { site } from '../data/site';
import {
  AboutIntro,
  AboutGermany,
  AboutTimeline,
  AboutCare,
  AboutSideNotes,
} from '../sections/about';

function About() {
  const copy = site.aboutPage;
  const location = useLocation();

  useEffect(() => {
    if (location.hash !== '#interests') return;

    const reduceMotion =
      document.documentElement.getAttribute('data-reduced-motion') === 'true' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scrollToInterests = () => {
      const el = document.getElementById('interests');
      if (!el) return;
      el.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    };

    const timeoutId = window.setTimeout(scrollToInterests, 50);
    return () => window.clearTimeout(timeoutId);
  }, [location.pathname, location.hash]);

  return (
    <div className="about-page">
      <div className="about-page__inner container">
        <AboutIntro copy={copy} />
        <AboutGermany copy={copy.germany} />
        <AboutTimeline copy={copy.journey} />
        <AboutCare copy={copy.care} />
        <AboutSideNotes copy={copy.sideNotes} />
      </div>
    </div>
  );
}

export default About;
