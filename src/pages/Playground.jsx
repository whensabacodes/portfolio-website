import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/projects/ProjectCard';
import Gallery from '../components/media/Gallery';
import BackToHome from '../components/navigation/BackToHome';
import { getPlaygroundItems } from '../data/playground';

function Playground() {
  const [galleryProject, setGalleryProject] = useState(null);
  const items = getPlaygroundItems();

  return (
    <div className="page projects">
      <div className="projects__inner">
        <BackToHome />
        <h1 className="projects__heading">Playground</h1>
        <p className="page__lede">
          Creative experiments and small frontend projects. Incomplete media is
          marked honestly rather than invented.
        </p>
        <div className="projects__grid">
          {items.map((project) => (
            <div key={project.id}>
              <ProjectCard
                project={project}
                onOpenGallery={() => setGalleryProject(project)}
              />
              {project.assetStatus !== 'complete' && (
                <p className="page__note" style={{ marginTop: '0.5rem' }}>
                  Assets: {project.assetStatus}
                </p>
              )}
              <p style={{ marginTop: '0.5rem' }}>
                <Link to={`/work/${project.slug}`}>Open detail page</Link>
              </p>
            </div>
          ))}
        </div>
      </div>
      <Gallery project={galleryProject} onClose={() => setGalleryProject(null)} />
    </div>
  );
}

export default Playground;
