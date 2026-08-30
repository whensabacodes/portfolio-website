import {
  getPersonalProjects,
  getProjectBySlug,
} from './projects';

/**
 * Playground / creative experiments.
 * Sourced from existing personal & experiment projects — incomplete assets stay marked incomplete.
 */

const PLAYGROUND_SLUGS = [
  'happy-birthday-website',
  'valentines-website',
  'ai-therapist',
  'note-taking-app',
];

export const playground = PLAYGROUND_SLUGS.map((slug) => {
  const project = getProjectBySlug(slug);
  if (!project) return null;
  return {
    id: project.id,
    slug: project.slug,
    title: project.title,
    description: project.description,
    technologies: project.technologies,
    tech: project.tech,
    bullets: project.bullets,
    images: project.images,
    link: project.link,
    status: project.status,
    assetStatus: project.assetStatus,
    type: project.type,
  };
}).filter(Boolean);

/** Convenience: personal/experiment projects that belong on Playground */
export function getPlaygroundItems() {
  return playground;
}

/** Alternate view: all personal/experiment projects from projects.js */
export function getPlaygroundFromProjects() {
  return getPersonalProjects().filter((p) => p.playground);
}
