import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/projects/ProjectCard';
import Gallery from '../components/media/Gallery';
import { getProfessionalProjects } from '../data/projects';

function Work() {
  const [galleryProject, setGalleryProject] = useState(null);
  const projects = getProfessionalProjects();

  return (
    <div className="page projects">
      <div className="projects__inner">
        <h1 className="projects__heading">Work</h1>
        <p className="page__lede">
          Professional projects. Case study pages are scaffolded and will be
          expanded when narratives are ready.
        </p>
        <div className="projects__grid">
          {projects.map((project) => (
            <div key={project.id}>
              <ProjectCard
                project={project}
                onOpenGallery={() => setGalleryProject(project)}
              />
              <p style={{ marginTop: '0.75rem' }}>
                <Link to={`/work/${project.slug}`}>Open project page</Link>
              </p>
            </div>
          ))}
        </div>
      </div>
      <Gallery project={galleryProject} onClose={() => setGalleryProject(null)} />
    </div>
  );
}

export default Work;
