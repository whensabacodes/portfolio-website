import { site } from '../../../data/site';
import HeroOrbitItem from './HeroOrbitItem';

function HeroOrbit() {
  return (
    <nav className="hero-orbit" aria-label="Explore the site">
      {site.heroOrbit.map((item) => (
        <HeroOrbitItem key={item.id} item={item} />
      ))}
    </nav>
  );
}

export default HeroOrbit;
