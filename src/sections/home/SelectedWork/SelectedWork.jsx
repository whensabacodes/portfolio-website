import { useState } from 'react';
import { Link } from 'react-router-dom';
import Gallery from '../../../components/media/Gallery';
import HomeProjectCard from '../../../components/projects/HomeProjectCard';
import { getFeaturedProjects } from '../../../data/projects';
import { useReveal } from '../../../hooks/useReveal';
import Arrow from '../../../decorative/Arrow/Arrow';

function SelectedWork() {
  const [galleryProject, setGalleryProject] = useState(null);
  const revealRef = useReveal();
  const projects = getFeaturedProjects().filter((p) => p.type === 'professional');

  return (
    <section className="home-work home-work--pro" id="work" ref={revealRef}>
      <div className="container container--wide">
        <header className="home-work__header home-reveal">
          <p className="section-label">Selected work</p>
          <h2 className="home-work__title">Things I&apos;ve built for other people</h2>
          <p className="home-work__lede text-muted">
            Professional interfaces — analytics, e-commerce, dashboards, and CMS
            tooling from 4+ years of frontend/UI engineering.
          </p>
        </header>

        <div className="home-work__grid">
          {projects.map((project, index) => (
            <HomeProjectCard
              key={project.id}
              project={project}
              variant="professional"
              index={index}
              onOpenGallery={() => setGalleryProject(project)}
            />
          ))}
        </div>

        <div className="home-work__cta home-reveal">
          <Link to="/work" className="home-work__link">
            View work
            <Arrow direction="right" />
          </Link>
        </div>
      </div>

      <Gallery project={galleryProject} onClose={() => setGalleryProject(null)} />
    </section>
  );
}

export default SelectedWork;
