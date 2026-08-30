/**
 * Folder presentation metadata for /work.
 * Existing `projects` data remains the source of truth.
 */

import {
  getProfessionalProjects,
  getWorkCompany,
  workCompanies,
} from './projects';

/**
 * @typedef {Object} ProjectFolderMeta
 * @property {string} id
 * @property {'professional'|'personal'} kind
 * @property {string} folderLabel
 * @property {string} projectSlug
 * @property {string} [companyId]
 */

/** @returns {ProjectFolderMeta[]} */
export function getProjectFolders() {
  return getProfessionalProjects().map((project) => ({
    id: project.id,
    kind: 'professional',
    folderLabel: project.folderLabel || project.title,
    projectSlug: project.slug,
    companyId: project.company,
  }));
}

export function getWorkSidebarFilters() {
  const usedCompanyIds = new Set(
    getProfessionalProjects().map((project) => project.company),
  );

  return [
    { id: 'all', label: 'All projects', path: 'all/' },
    ...workCompanies
      .filter((company) => usedCompanyIds.has(company.id))
      .map((company) => ({
        id: company.id,
        label: company.label,
        path: company.path,
      })),
  ];
}

export { getWorkCompany, workCompanies };
