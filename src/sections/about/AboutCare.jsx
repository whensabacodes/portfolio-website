import Sticker from '../../decorative/Sticker/Sticker';
import codePhoto from '../../assets/portrait/code.jpg';

function AboutCare({ copy }) {
  return (
    <section
      className="about-section about-care"
      aria-labelledby="about-care-heading"
    >
      <div className="about-care__main">
        <h2 id="about-care-heading" className="about-page__section-heading">
          {copy.heading}
        </h2>
        <div className="about-page__prose about-page__prose--editorial">
          {copy.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </div>

      <figure className="about-care__visual">
        <Sticker className="about-care__tape" rotation={-4}>
          <span aria-hidden="true" />
        </Sticker>
        <div className="about-care__photo-card">
          <img
            src={codePhoto}
            alt="Desk setup with coffee and code on screen"
            className="about-care__photo"
            width={736}
            height={981}
            loading="lazy"
          />
        </div>
        {copy.note ? (
          <figcaption className="about-care__caption">{copy.note}</figcaption>
        ) : null}
      </figure>
    </section>
  );
}

export default AboutCare;
