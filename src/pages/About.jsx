import { useState } from 'react';
import { Link } from 'react-router-dom';
import Lightbox from '../components/media/Lightbox';
import { site } from '../data/site';
import { experience, skills } from '../data/experience';
import { certificates } from '../data/certificates';
import aboutPhoto from '../assets/portrait/portrait-image.png';

function About() {
  const [lightboxCertificate, setLightboxCertificate] = useState(null);

  const openAt = (cert) => setLightboxCertificate(cert);
  const close = () => setLightboxCertificate(null);

  const goPrev = () => {
    if (!lightboxCertificate) return;
    const idx = certificates.findIndex((c) => c.id === lightboxCertificate.id);
    const prevIdx = (idx - 1 + certificates.length) % certificates.length;
    setLightboxCertificate(certificates[prevIdx]);
  };

  const goNext = () => {
    if (!lightboxCertificate) return;
    const idx = certificates.findIndex((c) => c.id === lightboxCertificate.id);
    const nextIdx = (idx + 1) % certificates.length;
    setLightboxCertificate(certificates[nextIdx]);
  };

  return (
    <div className="page">
      <section className="about">
        <div className="split-section">
          <div className="left-side">
            <h1>About</h1>
            {site.about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <div className="right-side">
            <div className="about__visual">
              <img
                src={aboutPhoto}
                alt="Developer portrait"
                className="about__photo fade-in"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="page__inner">
        <h2 className="page__heading">Career</h2>
        <p className="page__lede">
          Experience entries below are extracted from existing portfolio
          content. Dates will be added when verified.
        </p>
        <ul>
          {experience.map((job) => (
            <li key={job.id} style={{ marginBottom: '1.5rem' }}>
              <strong>{job.organization}</strong>
              {job.role ? ` — ${job.role}` : null}
              <p>{job.summary}</p>
              <ul>
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="page__inner">
        <h2 className="page__heading">How I work</h2>
        <ul>
          {site.about.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="page__note">Skills mentioned in existing content:</p>
        <p>{skills.join(' · ')}</p>
      </section>

      <section id="interests" className="interests fade-in-up" style={{ opacity: 1 }}>
        <div className="interests__inner">
          <div className="interests__header">
            <h2 className="interests__heading">Beyond code</h2>
            <p className="interests__intro">{site.interestsIntro}</p>
          </div>
          <div className="interests__content">
            <p className="interests__tagline">{site.interestsTagline}</p>
            <div className="interests__grid">
              {site.interests.map((interest) => (
                <div key={interest.id} className="interests__item">
                  <div className="interests__text">
                    <div className="interests__label">{interest.label}</div>
                    <p className="interests__desc">{interest.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="certificates">
        <div className="certificates__inner">
          <h2 className="certificates__heading">Certificates & achievements</h2>
          <p className="certificates__description">
            Curated from existing materials. Not a primary navigation item in
            V2 — shown here as an About archive.
          </p>
          <div className="certificates__grid">
            {certificates.map((cert) => (
              <div key={cert.id} className="certificates__item">
                <div
                  className="certificates__thumb"
                  onClick={() => openAt(cert)}
                  onKeyDown={(e) => e.key === 'Enter' && openAt(cert)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${cert.caption}`}
                >
                  <img src={cert.image} alt="" />
                </div>
                <p className="certificates__caption">{cert.caption}</p>
                <button
                  type="button"
                  className="certificates__view-btn"
                  onClick={() => openAt(cert)}
                >
                  View certificate
                </button>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/portfolio/certificates" className="certificates__btn">
              Compatibility archive view
            </Link>
          </p>
        </div>
      </section>

      <Lightbox
        open={Boolean(lightboxCertificate)}
        title="Certificate preview"
        image={lightboxCertificate?.image}
        caption={lightboxCertificate?.caption}
        onClose={close}
        onPrev={goPrev}
        onNext={goNext}
        showNav={certificates.length > 1}
      />
    </div>
  );
}

export default About;
