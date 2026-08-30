import { site } from '../../data/site';
import ContactForm from './ContactForm';

function ContactContent() {
  const { contact, contactPage } = site;
  const handle = contact.instagramHandle
    ? `@${contact.instagramHandle.replace(/^@/, '')}`
    : null;

  return (
    <div className="contact-content">
      <header className="contact-content__intro">
        <h1 className="contact-content__heading">{contactPage.heading}</h1>
        <p className="contact-content__lede">{contactPage.intro}</p>
      </header>

      <ul className="contact-content__links">
        <li>
          <a
            className="contact-content__email"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>
        </li>
        {handle && contact.instagramUrl ? (
          <li className="contact-content__instagram">
            <span className="contact-content__instagram-label">Instagram</span>
            <a
              className="contact-content__instagram-handle"
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {handle}
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </li>
        ) : null}
      </ul>

      <ContactForm />
    </div>
  );
}

export default ContactContent;
