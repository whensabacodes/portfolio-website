import HeroCenter from './HeroCenter';
import HeroOrbit from './HeroOrbit';
import HeroDecor from './HeroDecor';

function Hero() {
  return (
    <section className="home-hero" id="home" aria-label="Introduction">
      <div className="home-hero__canvas">
        <HeroDecor />
        <HeroOrbit />
        <div className="home-hero__heart">
          <HeroCenter />
        </div>
      </div>
    </section>
  );
}

export default Hero;
