import { ContactVisual, ContactContent } from '../sections/contact';

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-page__inner container">
        <div className="contact-page__layout">
          <ContactVisual />
          <ContactContent />
        </div>
      </div>
    </div>
  );
}

export default Contact;
