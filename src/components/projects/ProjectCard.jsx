import { getPreviewImages } from '../../data/projects';
import { InlineGallery } from '../media/Gallery';

function ProjectCard({ project, onOpenGallery }) {
  const images = getPreviewImages(project);
  const showViewProject = project.link && project.link !== '#';

  return (
    <article className="project-card">
      <InlineGallery images={images} onOpen={onOpenGallery} />

      <h3>{project.title}</h3>
      <p className="project-card__description">{project.description}</p>
      <p className="project-card__tech">{project.tech}</p>
      {project.bullets?.length > 0 && (
        <ul>
          {project.bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      )}

      <div className="project-card__actions">
        {showViewProject && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__btn project-card__btn--primary"
          >
            View project
          </a>
        )}
        {images.length > 0 && (
          <button
            type="button"
            className="project-card__btn project-card__btn--secondary"
            onClick={onOpenGallery}
          >
            View images
          </button>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
