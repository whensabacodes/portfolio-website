import { Link } from 'react-router-dom';
import { getPlaygroundItems } from '../../../data/playground';
import { getPreviewImages } from '../../../data/projects';
import { useReveal } from '../../../hooks/useReveal';
import { Tag } from '../../../components/ui';
import Doodle from '../../../decorative/Doodle/Doodle';

function PlaygroundTeaser() {
  const revealRef = useReveal();
  const items = getPlaygroundItems().slice(0, 3);

  return (
    <section className="home-playground" id="playground-teaser" ref={revealRef}>
      <div className="container container--wide">
        <header className="home-playground__header home-reveal">
          <Doodle className="home-playground__doodle">~</Doodle>
          <p className="section-label">Playground</p>
          <h2 className="home-playground__title text-hand">
            I make things when nobody asks me to
          </h2>
        </header>

        <ul className="home-playground__list">
          {items.map((item, index) => {
            const preview = getPreviewImages(item)[0];
            return (
              <li
                key={item.id}
                className={`home-playground__item home-reveal home-reveal--delay-${index + 1}`}
              >
                <Link to={`/work/${item.slug}`} className="home-playground__card">
                  {preview && (
                    <img src={preview.src} alt="" className="home-playground__thumb" />
                  )}
                  <div className="home-playground__card-body">
                    <h3>{item.title}</h3>
                    <p className="text-muted">{item.description}</p>
                    {item.assetStatus !== 'complete' && (
                      <Tag>{item.assetStatus}</Tag>
                    )}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="home-playground__cta home-reveal">
          <Link to="/playground" className="text-link">
            Enter playground →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PlaygroundTeaser;
