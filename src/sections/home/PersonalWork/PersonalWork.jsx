import { useState } from 'react';
import { Link } from 'react-router-dom';
import Gallery from '../../../components/media/Gallery';
import HomeProjectCard from '../../../components/projects/HomeProjectCard';
import { getPersonalProjects } from '../../../data/projects';
import { useReveal } from '../../../hooks/useReveal';
import Sticker from '../../../decorative/Sticker/Sticker';
import Arrow from '../../../decorative/Arrow/Arrow';

function PersonalWork() {
  const [galleryProject, setGalleryProject] = useState(null);
  const revealRef = useReveal();
  const projects = getPersonalProjects();

  return (
    <section className="home-work home-work--personal" id="personal" ref={revealRef}>
      <div className="container container--wide">
        <header className="home-work__header home-reveal">
          <Sticker className="home-work__sticker" rotation={6}>
            <span>side quests</span>
          </Sticker>
          <p className="section-label">Personal work</p>
          <h2 className="home-work__title home-work__title--playful text-hand">
            Things I made because I wanted to
          </h2>
          <p className="home-work__lede text-muted">
            Experiments, micro-sites, and prototypes — where curiosity meets
            craft.
          </p>
        </header>

        <div className="home-work__grid home-work__grid--personal">
          {projects.map((project, index) => (
            <HomeProjectCard
              key={project.id}
              project={project}
              variant="personal"
              index={index}
              onOpenGallery={() => setGalleryProject(project)}
            />
          ))}
        </div>

        <div className="home-work__cta home-reveal">
          <Link to="/playground" className="home-work__link">
            Enter playground
            <Arrow direction="right" />
          </Link>
        </div>
      </div>

      <Gallery project={galleryProject} onClose={() => setGalleryProject(null)} />
    </section>
  );
}

export default PersonalWork;
