import folderPng from '../../assets/doodles/folder.png';

/**
 * Projects folder — PNG asset (replaces SVG doodle).
 * Hover/focus motion via parent .hero-orbit-item + .orbit-doodle--folder.
 */
function ProjectFolderDoodle({ className = '' }) {
  return (
    <img
      className={`orbit-doodle orbit-doodle--png orbit-doodle--folder ${className}`.trim()}
      src={folderPng}
      alt=""
      width={76}
      height={76}
      decoding="async"
      aria-hidden="true"
      draggable={false}
    />
  );
}

export default ProjectFolderDoodle;
