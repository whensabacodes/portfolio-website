import { site } from '../../../data/site';
import { useReveal } from '../../../hooks/useReveal';
import HandDrawnLine from '../../../decorative/HandDrawnLine/HandDrawnLine';

function WhatIDo() {
  const revealRef = useReveal();

  return (
    <section className="home-what" id="what-i-do" ref={revealRef}>
      <div className="container">
        <div className="home-what__header home-reveal">
          <p className="section-label">What I do</p>
          <h2 className="home-what__title">More than writing code</h2>
          <HandDrawnLine className="home-what__line" />
        </div>

        <ul className="home-what__list">
          {site.whatIDo.map((item, index) => (
            <li
              key={item.id}
              className={`home-what__item home-reveal home-reveal--delay-${index + 1}`}
            >
              <span className="home-what__item-title text-hand">
                {item.title}
              </span>
              <p className="home-what__item-desc">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WhatIDo;
