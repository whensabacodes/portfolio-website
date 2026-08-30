function HeroScrollPrompt() {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.getElementById('what-i-do');
    if (!target) return;

    const reduced =
      document.documentElement.getAttribute('data-reduced-motion') === 'true' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    target.scrollIntoView({
      behavior: reduced ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  return (
    <a href="#what-i-do" className="hero-scroll" onClick={handleClick}>
      <span className="hero-scroll__arrow" aria-hidden="true">
        ↓
      </span>
      <span className="hero-scroll__label">Scroll to explore</span>
    </a>
  );
}

export default HeroScrollPrompt;
