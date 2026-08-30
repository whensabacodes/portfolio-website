import phonePng from '../../assets/doodles/phone.png';
import { site } from '../../data/site';

function ContactVisual() {
  const bubble = site.contactPage.speechBubble;

  return (
    <aside className="contact-visual" aria-hidden="true">
      <span className="contact-visual__star" />
      <div className="contact-visual__bubble">
        <p className="contact-visual__bubble-text">{bubble}</p>
      </div>
      <div className="contact-visual__focal">
        <img
          className="contact-visual__phone"
          src={phonePng}
          alt=""
          width={120}
          height={220}
          decoding="async"
          draggable={false}
        />
      </div>
    </aside>
  );
}

export default ContactVisual;
