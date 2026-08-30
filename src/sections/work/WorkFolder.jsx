import { Link } from 'react-router-dom';
import folderPng from '../../assets/doodles/folder.png';
import { getWorkCompany } from '../../data/projects';

/**
 * Interactive project folder — links to /work/:slug.
 * Shared by /work and the homepage Work teaser.
 * Hover/focus motion is CSS-only; reduced-motion disables transforms.
 */
function WorkFolder({ project, showCompany = false }) {
  const company = getWorkCompany(project.company);
  const label = project.folderLabel || project.title;
  const openHint = project.caseStudyAvailable
    ? 'Open case study'
    : 'Open project';
  const companyName = company?.label?.replace(/^At\s+/i, '') || '';

  return (
    <Link
      to={`/work/${project.slug}`}
      className={`work-folder${showCompany ? ' work-folder--with-company' : ''}`}
      aria-label={`${label}. ${openHint}.${companyName ? ` ${companyName}.` : ''}`.trim()}
    >
      {showCompany && companyName ? (
        <span className="work-folder__company">{companyName}</span>
      ) : null}
      <span className="work-folder__icon" aria-hidden="true">
        <img
          className="work-folder__image"
          src={folderPng}
          alt=""
          width={120}
          height={120}
          decoding="async"
          draggable={false}
        />
      </span>
      <span className="work-folder__name">{label}</span>
      {project.tech ? (
        <span className="work-folder__meta">{project.tech}</span>
      ) : null}
    </Link>
  );
}

export default WorkFolder;
