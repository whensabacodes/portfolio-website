/**
 * Future extension point: laptop / filesystem presentation for Work + personal projects.
 *
 * Intended visual model (not yet rendered):
 *
 *   LAPTOP
 *     └── folders/
 *           ├── project-01/
 *           ├── project-02/
 *           └── ...
 *
 *   personal/
 *     └── project-01/
 *
 * Existing `projects` data remains the source of truth.
 * Wire folder metadata here later — do not invent project names.
 *
 * @typedef {Object} ProjectFolderMeta
 * @property {string} id
 * @property {'professional'|'personal'} kind
 * @property {string} [folderLabel]  e.g. "vwo-insights/"
 * @property {string} projectSlug    matches projects[].slug
 */

/** @type {ProjectFolderMeta[]} */
export const projectFolders = [];

/**
 * Resolve folder presentation entries from existing projects when ready.
 * Currently returns an empty list so Work stays on existing cards.
 */
export function getProjectFolders() {
  return projectFolders;
}
