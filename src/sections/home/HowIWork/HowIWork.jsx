import { site } from '../../../data/site';
import { useReveal } from '../../../hooks/useReveal';

function HowIWork() {
  const revealRef = useReveal();

  return (
    <section className="home-how" id="how-i-work" ref={revealRef}>
      <div className="container container--wide">
        <div className="home-how__layout">
          <div className="home-how__intro home-reveal">
            <p className="section-label">How I work</p>
            <h2 className="home-how__title">
              I care about the people behind the product
            </h2>
            <p className="home-how__lede text-muted">
              Startup teams need engineers who can think with designers, talk with
              clients, and still ship polished interfaces. That&apos;s the balance I
              aim for.
            </p>
          </div>

          <ul className="home-how__list">
            {site.howIWork.map((item, index) => (
              <li
                key={item.id}
                className={`home-how__item home-reveal home-reveal--delay-${index + 1}`}
              >
                <h3 className="home-how__item-title">{item.title}</h3>
                <p className="home-how__item-desc text-muted">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HowIWork;
