import { useState } from 'react';
import { site } from '../../data/site';
import { Button } from '../../components/ui';

function ContactForm() {
  const { email } = site.contact;
  const copy = site.contactPage.form;
  const [name, setName] = useState('');
  const [fromEmail, setFromEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio enquiry from ${name.trim() || 'visitor'}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${name.trim()}`,
        `Email: ${fromEmail.trim()}`,
        '',
        message.trim(),
      ].join('\n'),
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="contact-name">
          {copy.nameLabel}
        </label>
        <input
          id="contact-name"
          className="contact-form__input"
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder={copy.namePlaceholder}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="contact-email">
          {copy.emailLabel}
        </label>
        <input
          id="contact-email"
          className="contact-form__input"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder={copy.emailPlaceholder}
          value={fromEmail}
          onChange={(event) => setFromEmail(event.target.value)}
        />
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="contact-message">
          {copy.messageLabel}
        </label>
        <textarea
          id="contact-message"
          className="contact-form__textarea"
          name="message"
          rows={6}
          required
          placeholder={copy.messagePlaceholder}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>

      <Button type="submit" variant="primary" className="contact-form__submit">
        {copy.submitLabel}
      </Button>
    </form>
  );
}

export default ContactForm;
