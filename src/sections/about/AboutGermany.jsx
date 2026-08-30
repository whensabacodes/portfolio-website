import Sticker from '../../decorative/Sticker/Sticker';
import tuIlmenauPhoto from '../../assets/portrait/tu-ilmenau.jpg';
import tuIlmenauPhoto2 from '../../assets/portrait/tu-ilmenau2.JPG';

function AboutGermany({ copy }) {
  return (
    <section
      className="about-section about-germany"
      aria-labelledby="about-germany-heading"
    >
      <div className="about-germany__copy">
        <p className="about-page__hand-label">{copy.label}</p>
        <h2 id="about-germany-heading" className="about-page__section-heading">
          {copy.heading}
        </h2>
        <div className="about-page__prose about-page__prose--narrow">
          {copy.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="about-germany__visual" aria-label="TU Ilmenau campus photographs">
        <figure className="about-germany__shot about-germany__shot--one">
          <Sticker className="about-germany__tape about-germany__tape--one" rotation={-6}>
            <span aria-hidden="true" />
          </Sticker>
          <div className="about-germany__photo-card">
            <img
              src={tuIlmenauPhoto}
              alt="Technische Universität Ilmenau campus — Humboldtbau"
              className="about-germany__photo"
              width={750}
              height={600}
              loading="lazy"
            />
          </div>
        </figure>

        <figure className="about-germany__shot about-germany__shot--two">
          <Sticker className="about-germany__tape about-germany__tape--two" rotation={5}>
            <span aria-hidden="true" />
          </Sticker>
          <div className="about-germany__photo-card">
            <img
              src={tuIlmenauPhoto2}
              alt="TU Ilmenau campus plaza with welcome banner"
              className="about-germany__photo"
              width={1660}
              height={1107}
              loading="lazy"
            />
          </div>
        </figure>

        <p className="about-germany__caption">{copy.note}</p>
      </div>
    </section>
  );
}

export default AboutGermany;
