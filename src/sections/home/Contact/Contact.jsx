import { site } from '../../../data/site';
import { useReveal } from '../../../hooks/useReveal';
import { Button } from '../../../components/ui';

function Contact() {
  const revealRef = useReveal();
  const { contact, contactHeading, contactIntro, contactCta } = site;
  const handle = contact.instagramHandle
    ? `@${contact.instagramHandle.replace(/^@/, '')}`
    : null;

  return (
    <section className="home-contact" id="contact" ref={revealRef}>
      <div className="container container--narrow">
        <div className="home-contact__inner home-reveal">
          <p className="section-label">Contact</p>
          <h2 className="home-contact__title text-display">{contactHeading}</h2>
          <p className="home-contact__intro text-muted">{contactIntro}</p>

          <nav className="home-contact__links cluster" aria-label="Contact links">
            {contact.email ? (
              <a
                href={`mailto:${contact.email}`}
                className="home-contact__link"
              >
                {contact.email}
              </a>
            ) : null}
            {handle && contact.instagramUrl ? (
              <a
                href={contact.instagramUrl}
                className="home-contact__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram {handle}
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            ) : null}
          </nav>

          <Button to="/contact" variant="primary">
            {contactCta || 'Get in touch →'}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
