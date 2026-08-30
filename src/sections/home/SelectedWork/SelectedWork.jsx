import { Link } from 'react-router-dom';
import { getHomepageWorkPreview } from '../../../data/projects';
import { site } from '../../../data/site';
import { useReveal } from '../../../hooks/useReveal';
import { WorkFolder } from '../../work';

function SelectedWork() {
  const revealRef = useReveal();
  const projects = getHomepageWorkPreview(4);
  const copy = site.homeSelectedWork;

  return (
    <section className="home-work home-work--pro" id="work" ref={revealRef}>
      <div className="container container--wide">
        <header className="home-work__header home-reveal">
          <p className="section-label home-work__eyebrow">{copy.eyebrow}</p>
          <h2 className="home-work__title">{copy.heading}</h2>
          <p className="home-work__lede text-muted">{copy.lede}</p>
        </header>

        <ul className="home-work__folders home-reveal">
          {projects.map((project) => (
            <li key={project.id} className="home-work__folder-item">
              <WorkFolder project={project} showCompany />
            </li>
          ))}
        </ul>

        <div className="home-work__cta home-reveal">
          <Link to="/work" className="home-work__link">
            {copy.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SelectedWork;
