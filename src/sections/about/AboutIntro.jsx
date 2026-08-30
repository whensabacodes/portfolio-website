import { Link } from 'react-router-dom';
import Sticker from '../../decorative/Sticker/Sticker';
import aboutPhoto from '../../assets/portrait/saba-qaiser.jpg';
import { site } from '../../data/site';

function AboutIntro({ copy }) {
  const contactCta = copy.contactCta;

  return (
    <header className="about-section about-section--primary about-intro">
      <div className="about-intro__copy">
        <p className="about-page__hand-label">{copy.label}</p>
        <h1 className="about-intro__greeting">{copy.greeting}</h1>
        <p className="about-intro__title">{copy.title}</p>
        <div className="about-intro__bio">
          {copy.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
        {contactCta ? (
          <Link to={contactCta.to} className="about-intro__cta">
            {contactCta.label}
          </Link>
        ) : null}
      </div>

      <figure className="about-intro__photo-wrap">
        <Sticker className="about-intro__tape about-intro__tape--left" rotation={-6}>
          <span aria-hidden="true" />
        </Sticker>
        <Sticker className="about-intro__tape about-intro__tape--right" rotation={5}>
          <span aria-hidden="true" />
        </Sticker>
        <div className="about-intro__photo-card">
          <img
            src={aboutPhoto}
            alt={`Portrait of ${site.displayName}`}
            className="about-intro__photo"
            width={640}
            height={640}
          />
        </div>
        <figcaption className="about-intro__photo-caption" aria-hidden="true">
          me, somewhere between coffee and code
        </figcaption>
      </figure>
    </header>
  );
}

export default AboutIntro;
