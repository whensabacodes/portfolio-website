import { site } from '../../../data/site';
import aboutPhoto from '../../../assets/portrait/portrait-image.png';
import { useReveal } from '../../../hooks/useReveal';
import { TextLink } from '../../../components/ui';
import Sticker from '../../../decorative/Sticker/Sticker';

function AboutTeaser() {
  const revealRef = useReveal();

  return (
    <section className="home-about" id="about" ref={revealRef}>
      <div className="container container--wide">
        <div className="home-about__layout">
          <div className="home-about__copy home-reveal">
            <p className="section-label">About</p>
            <h2 className="home-about__title">{site.aboutTeaser.heading}</h2>
            <p className="home-about__text text-muted">{site.aboutTeaser.paragraph}</p>
            <TextLink to="/about" className="home-about__link">
              More about me →
            </TextLink>
          </div>

          <figure className="home-about__figure home-reveal home-reveal--delay">
            <Sticker className="home-about__tape home-about__tape--left" rotation={-4}>
              <span aria-hidden="true" />
            </Sticker>
            <img
              src={aboutPhoto}
              alt={`Portrait of ${site.displayName}`}
              className="home-about__photo"
              loading="lazy"
            />
            <Sticker className="home-about__tape home-about__tape--right" rotation={3}>
              <span aria-hidden="true" />
            </Sticker>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default AboutTeaser;
