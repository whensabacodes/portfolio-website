import { site } from '../../../data/site';
import { useReveal } from '../../../hooks/useReveal';

function Currently() {
  const revealRef = useReveal();

  return (
    <section className="home-currently" id="currently" ref={revealRef}>
      <div className="container">
        <header className="home-currently__header home-reveal">
          <p className="section-label">Currently</p>
          <h2 className="home-currently__title">Right now</h2>
          <p className="home-currently__summary text-muted">{site.currently.summary}</p>
        </header>

        <dl className="home-currently__grid">
          {site.currently.sections.map((block, index) => (
            <div
              key={block.id}
              className={`home-currently__block home-reveal home-reveal--delay-${index + 1}`}
            >
              <dt className="home-currently__label text-label">{block.label}</dt>
              <dd className="home-currently__items">
                <ul>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default Currently;
