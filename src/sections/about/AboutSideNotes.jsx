import { Link } from 'react-router-dom';

function AboutSideNotes({ copy }) {
  return (
    <section
      id="interests"
      className="about-section about-life"
      aria-labelledby="about-life-heading"
    >
      <div className="about-life__header">
        <p className="about-page__hand-label">{copy.label}</p>
        <h2 id="about-life-heading" className="about-page__section-heading">
          {copy.heading}
        </h2>
      </div>

      <ul className="about-life__board">
        {copy.items.map((item) => (
          <li key={item.id} className="about-life__item">
            <h3 className="about-life__label">{item.label}</h3>
            <p className="about-life__desc">{item.description}</p>
            {item.linkTo ? (
              <Link to={item.linkTo} className="about-life__link">
                {item.linkLabel}
              </Link>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AboutSideNotes;
