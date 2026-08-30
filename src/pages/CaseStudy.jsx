import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import Gallery from '../components/media/Gallery';
import { getPreviewImages, getProjectBySlug } from '../data/projects';

function CaseStudy() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const [galleryOpen, setGalleryOpen] = useState(false);

  if (!project) {
    return (
      <div className="page">
        <div className="page__inner">
          <h1 className="page__heading">Project not found</h1>
          <p className="page__lede">
            No project matches <code>{slug}</code>.
          </p>
          <Link to="/work">Back to work</Link>
        </div>
      </div>
    );
  }

  const images = getPreviewImages(project);

  return (
    <div className="page">
      <div className="page__inner">
        <p className="page__note">
          <Link to="/work">← Work</Link>
        </p>
        <h1 className="page__heading">{project.title}</h1>
        <p className="page__lede">{project.description}</p>
        <p className="page__note">{project.tech}</p>

        {!project.caseStudyAvailable && (
          <p className="page__note">
            Full case study narrative is not written yet. Existing project
            details and media are shown below.
          </p>
        )}

        {project.bullets?.length > 0 && (
          <ul>
            {project.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}

        {project.link ? (
          <p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View live project
            </a>
          </p>
        ) : null}

        {images.length > 0 && (
          <p>
            <button type="button" onClick={() => setGalleryOpen(true)}>
              View images
            </button>
          </p>
        )}

        {project.assetStatus === 'placeholder' && (
          <p className="page__note">
            Media for this project is still a placeholder.
          </p>
        )}
        {project.assetStatus === 'incomplete' && (
          <p className="page__note">
            Some media for this project is still incomplete.
          </p>
        )}
      </div>

      <Gallery
        project={galleryOpen ? project : null}
        onClose={() => setGalleryOpen(false)}
      />
    </div>
  );
}

export default CaseStudy;
