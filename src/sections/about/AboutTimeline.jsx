import { Link } from 'react-router-dom';
import { journeyTimeline } from '../../data/experience';

function periodDateTime(entry) {
  if (entry.end) return `${entry.start}/${entry.end}`;
  return entry.start;
}

function AboutTimeline({ copy }) {
  return (
    <section
      className="about-section about-timeline"
      aria-labelledby="about-timeline-heading"
    >
      <p className="about-page__hand-label">{copy.label}</p>
      <h2 id="about-timeline-heading" className="about-page__section-heading">
        {copy.heading}
      </h2>

      <ol className="about-timeline__list">
        {journeyTimeline.map((entry) => (
          <li
            key={entry.id}
            className={[
              'about-timeline__item',
              entry.current ? 'about-timeline__item--current' : '',
              entry.kind === 'education' ? 'about-timeline__item--education' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <p className="about-timeline__period">
              <time dateTime={periodDateTime(entry)}>{entry.period}</time>
            </p>
            <div className="about-timeline__body">
              <p className="about-timeline__org">{entry.organization}</p>
              <p className="about-timeline__title">{entry.title}</p>
              {entry.kind === 'education' ? (
                <p className="about-timeline__meta">Academic · current chapter</p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>

      <Link to="/work" className="about-page__inline-link">
        {copy.workLinkLabel}
      </Link>
    </section>
  );
}

export default AboutTimeline;
