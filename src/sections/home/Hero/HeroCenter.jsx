import { site } from '../../../data/site';

function HeroCenter() {
  return (
    <div className="hero-center">
      <p className="hero-center__file" aria-hidden="true">
        about_me.md
      </p>
      <p className="hero-center__hello">Hi, I&apos;m {site.displayName}.</p>
      <h1 className="hero-center__title">{site.professionalTitle}</h1>
      <p className="hero-center__tagline">{site.heroTagline}</p>
    </div>
  );
}

export default HeroCenter;
