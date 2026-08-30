import { Link } from 'react-router-dom';
import { getPreviewImages } from '../../data/projects';
import { Tag } from '../ui';

function HomeProjectCard({
  project,
  variant = 'professional',
  onOpenGallery,
  index = 0,
}) {
  const images = getPreviewImages(project);
  const preview = images[0];
  const isIncomplete =
    project.assetStatus === 'placeholder' || project.assetStatus === 'incomplete';

  return (
    <article
      className={`home-project home-project--${variant} home-reveal home-reveal--delay-${(index % 3) + 1}`}
    >
      <button
        type="button"
        className="home-project__media"
        onClick={() => images.length > 0 && onOpenGallery?.()}
        disabled={images.length === 0}
        aria-label={
          images.length > 0
            ? `View images for ${project.title}`
            : `No images for ${project.title}`
        }
      >
        {preview ? (
          <img src={preview.src} alt={preview.alt} loading="lazy" />
        ) : (
          <span className="home-project__placeholder">No preview yet</span>
        )}
        {isIncomplete && (
          <span className="home-project__status">
            {project.assetStatus === 'placeholder' ? 'Placeholder' : 'Incomplete'}
          </span>
        )}
      </button>

      <div className="home-project__body">
        <h3 className="home-project__title">{project.title}</h3>
        <p className="home-project__desc text-muted">{project.description}</p>
        <div className="home-project__tags cluster">
          {(project.technologies || project.tech?.split(', ') || []).map(
            (tech) => (
              <Tag key={tech}>{tech}</Tag>
            ),
          )}
        </div>
        <div className="home-project__actions cluster">
          <Link to={`/work/${project.slug}`} className="text-link">
            Details
          </Link>
          {images.length > 0 && (
            <button
              type="button"
              className="home-project__gallery-btn"
              onClick={onOpenGallery}
            >
              Images
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export default HomeProjectCard;
