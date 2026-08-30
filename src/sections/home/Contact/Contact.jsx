import { site } from '../../../data/site';
import { useReveal } from '../../../hooks/useReveal';
import { Button } from '../../../components/ui';

function Contact() {
  const revealRef = useReveal();
  const { contact, contactHeading, contactIntro } = site;

  const links = [
    contact.email && {
      label: contact.emailIsPlaceholder ? 'Email (placeholder)' : 'Email',
      href: `mailto:${contact.email}`,
    },
    contact.github && {
      label: contact.githubIsPlaceholder ? 'GitHub (placeholder)' : 'GitHub',
      href: contact.github,
      external: true,
    },
    contact.linkedIn && {
      label: contact.linkedInIsPlaceholder ? 'LinkedIn (placeholder)' : 'LinkedIn',
      href: contact.linkedIn,
      external: true,
    },
    contact.instagram && {
      label: 'Instagram',
      href: contact.instagram,
      external: true,
    },
  ].filter(Boolean);

  return (
    <section className="home-contact" id="contact" ref={revealRef}>
      <div className="container container--narrow">
        <div className="home-contact__inner home-reveal">
          <p className="section-label">Contact</p>
          <h2 className="home-contact__title text-display">{contactHeading}</h2>
          <p className="home-contact__intro text-muted">{contactIntro}</p>

          <nav className="home-contact__links cluster" aria-label="Contact links">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="home-contact__link"
                {...(link.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {contact.email && (
            <Button href={`mailto:${contact.email}`} variant="primary">
              Say hello
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
