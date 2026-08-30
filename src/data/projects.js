// Project images live in src/assets/projects/<id>/. Import and wire below.

import placeholder from '../assets/projects/placeholder.svg';

import appventurezCms1 from '../assets/projects/appventurez/cms/appventurez-cms-1.png';
import appventurezCms2 from '../assets/projects/appventurez/cms/appventurez-cms-2.png';
import appventurezCms3 from '../assets/projects/appventurez/cms/appventurez-cms-3.png';
import appventurezCms4 from '../assets/projects/appventurez/cms/appventurez-cms-4.png';
import appventurezCms5 from '../assets/projects/appventurez/cms/appventurez-cms-5.png';
import appventurezCms6 from '../assets/projects/appventurez/cms/appventurez-cms-6.png';
import appventurezCms7 from '../assets/projects/appventurez/cms/appventurez-cms-7.png';
import appventurezCms8 from '../assets/projects/appventurez/cms/appventurez-cms-8.png';

import superdeli1 from '../assets/projects/superdeli/superdeli-1.png';
import superdeli2 from '../assets/projects/superdeli/superdeli-2.png';
import superdeli3 from '../assets/projects/superdeli/superdeli-3.png';
import superdeli4 from '../assets/projects/superdeli/superdeli-4.png';
import superdeli5 from '../assets/projects/superdeli/superdeli-5.png';
import superdeli6 from '../assets/projects/superdeli/superdeli-6.png';

import instacei1 from '../assets/projects/instacei/instacei-1.png';
import instacei2 from '../assets/projects/instacei/instacei-2.png';
import instacei3 from '../assets/projects/instacei/instacei-3.png';
import instacei4 from '../assets/projects/instacei/instacei-4.png';
import instacei5 from '../assets/projects/instacei/instacei-5.png';
import instacei6 from '../assets/projects/instacei/instacei-6.png';
import instacei7 from '../assets/projects/instacei/instacei-7.png';

import vwoInsights1 from '../assets/projects/vwo-insights/vwo-insights-1.png';
import vwoInsights2 from '../assets/projects/vwo-insights/vwo-insights-2.png';
import vwoInsights3 from '../assets/projects/vwo-insights/vwo-insights-3.png';
import vwoInsights4 from '../assets/projects/vwo-insights/vwo-insights-4.png';
import vwoInsights5 from '../assets/projects/vwo-insights/vwo-insights-5.png';
import vwoInsights6 from '../assets/projects/vwo-insights/vwo-insights-6.png';
import vwoInsights7 from '../assets/projects/vwo-insights/vwo-insights-7.png';
import vwoInsights8 from '../assets/projects/vwo-insights/vwo-insights-8.png';

import happyBirthday1 from '../assets/projects/happy-birthday-website/happy-birthday-1.png';
import happyBirthday2 from '../assets/projects/happy-birthday-website/happy-birthday-2.png';
import happyBirthday3 from '../assets/projects/happy-birthday-website/happy-birthday-3.png';

/**
 * @typedef {'professional' | 'personal' | 'experiment'} ProjectType
 * @typedef {'complete' | 'incomplete' | 'placeholder'} AssetStatus
 * @typedef {'wingify' | 'appventurez'} WorkCompanyId
 */

/**
 * Employer folders for /work grouping (not client/project names).
 * Projects map to employers via `company`; SuperDeli + InstaCEI → appventurez.
 */
export const workCompanies = [
  { id: 'wingify', label: 'At Wingify', path: 'wingify/' },
  { id: 'appventurez', label: 'At Appventurez', path: 'appventurez/' },
];

/** @type {Array<Object>} */
export const projects = [
  {
    id: 'vwo-insights',
    slug: 'vwo-insights',
    title: 'VWO Insights – Analytics UI Modules',
    type: 'professional',
    featured: true,
    description:
      'Enterprise-level UI features for analyzing user behavior and improving product conversion flows.',
    technologies: ['Angular', 'TypeScript', 'SCSS'],
    tech: 'Angular, TypeScript, SCSS',
    link: '',
    bullets: [
      'Developed and optimized Heatmaps, Session Recordings, Surveys, Funnels, and Form Analytics',
      'Improved performance and responsiveness across the analytics dashboard',
      'Led design–dev discussions for more intuitive user flows',
    ],
    images: [
      { src: vwoInsights1, alt: 'VWO Insights analytics dashboard' },
      { src: vwoInsights2, alt: 'VWO Insights heatmaps' },
      { src: vwoInsights3, alt: 'VWO Insights session recordings' },
      { src: vwoInsights4, alt: 'VWO Insights surveys' },
      { src: vwoInsights5, alt: 'VWO Insights funnels' },
      { src: vwoInsights6, alt: 'VWO Insights form analytics' },
      { src: vwoInsights7, alt: 'VWO Insights dashboard' },
      { src: vwoInsights8, alt: 'VWO Insights UI' },
    ],
    status: 'complete',
    assetStatus: 'complete',
    caseStudyAvailable: false,
    company: 'wingify',
    folderLabel: 'VWO Insights',
  },
  {
    id: 'superdeli',
    slug: 'superdeli',
    title: 'SuperDeli – Customer-Facing Web App',
    type: 'professional',
    featured: true,
    description:
      'Modern e-commerce storefront with smooth UX and conversion-focused UI.',
    technologies: ['React', 'JavaScript', 'SCSS'],
    tech: 'React, JavaScript, SCSS',
    link: '',
    bullets: [
      'Built responsive interfaces for product browsing and order flows',
      'Collaborated closely with designers to refine UI components',
      'Ensured cross-device performance and accessibility',
    ],
    images: [
      { src: superdeli1, alt: 'SuperDeli storefront' },
      { src: superdeli2, alt: 'SuperDeli product browsing' },
      { src: superdeli3, alt: 'SuperDeli order flow' },
      { src: superdeli4, alt: 'SuperDeli interface' },
      { src: superdeli5, alt: 'SuperDeli UI' },
      { src: superdeli6, alt: 'SuperDeli dashboard' },
    ],
    status: 'complete',
    assetStatus: 'complete',
    caseStudyAvailable: false,
    company: 'appventurez',
    folderLabel: 'SuperDeli',
  },
  {
    id: 'instacei',
    slug: 'instacei',
    title: 'InstaCEI – Construction Management UI',
    type: 'professional',
    featured: true,
    description:
      'Dashboard UI for managing construction workflows and project operations.',
    technologies: ['Angular', 'JavaScript'],
    tech: 'Angular, JavaScript',
    link: '',
    bullets: [
      'Implemented clean dashboard layouts and modular UI components',
      'Designed and coded several data-driven UI screens',
      'Worked cross-functionally with backend + design teams',
    ],
    images: [
      { src: instacei1, alt: 'InstaCEI dashboard' },
      { src: instacei2, alt: 'InstaCEI construction management UI' },
      { src: instacei3, alt: 'InstaCEI project operations' },
      { src: instacei4, alt: 'InstaCEI workflow screen' },
      { src: instacei5, alt: 'InstaCEI data-driven UI' },
      { src: instacei6, alt: 'InstaCEI interface' },
      { src: instacei7, alt: 'InstaCEI management dashboard' },
    ],
    status: 'complete',
    assetStatus: 'complete',
    caseStudyAvailable: false,
    company: 'appventurez',
    folderLabel: 'InstaCEI',
  },
  {
    id: 'appventurez-cms',
    slug: 'appventurez-cms',
    title: 'Appventurez — Website Development + CMS Panel',
    type: 'professional',
    featured: true,
    description:
      "Built the complete UI for appventurez.com during my internship and developed and maintained the CMS panel for case studies and content. Delivered the company website as my first major project and was offered a full-time Software Engineer role.",
    technologies: ['React', 'HTML/CSS'],
    tech: 'React, HTML/CSS',
    link: 'https://appventurez.com',
    bullets: [
      "Designed and developed the full UI for the company's website (appventurez.com) as my first major project during the internship.",
      'Performed so well in delivering the website UI that I was offered a full-time Software Engineer role.',
      'Built and maintained the Appventurez CMS panel used for managing case studies and portfolio entries.',
      'Managed and updated the company blog through WordPress with weekly content uploads.',
      'Designed and built branded HTML email templates for client communication during holidays, offers, and special seasons.',
      'Ensured UI consistency, responsive layouts, and clean component structure across the website and CMS.',
    ],
    images: [],
    websiteImages: [],
    cmsImages: [
      { src: appventurezCms1, alt: 'Appventurez CMS panel – overview' },
      { src: appventurezCms2, alt: 'Appventurez CMS panel – content list' },
      { src: appventurezCms3, alt: 'Appventurez CMS panel – editor view' },
      { src: appventurezCms4, alt: 'Appventurez CMS panel – form layout' },
      { src: appventurezCms5, alt: 'Appventurez CMS panel – case studies' },
      { src: appventurezCms6, alt: 'Appventurez CMS panel – content workflow' },
      { src: appventurezCms7, alt: 'Appventurez CMS panel – dashboard' },
      { src: appventurezCms8, alt: 'Appventurez CMS panel – management screen' },
    ],
    status: 'complete',
    assetStatus: 'incomplete', // website screenshots not yet added
    caseStudyAvailable: false,
    hasGalleryTabs: true,
    company: 'appventurez',
    folderLabel: 'Appventurez CMS',
  },
  {
    id: 'note-taking-app',
    slug: 'note-taking-app',
    title: 'Note-Taking App',
    type: 'personal',
    featured: false,
    description:
      'A React + JavaScript application for creating, deleting, and persisting notes using LocalStorage',
    technologies: ['React', 'JavaScript', 'LocalStorage'],
    tech: 'React, JavaScript, LocalStorage',
    link: '',
    bullets: [
      'Implemented CRUD operations with persistent data storage',
      'Built intuitive UI for note creation and management',
      'Utilized LocalStorage API for client-side data persistence',
    ],
    images: [{ src: placeholder, alt: 'Note-taking app interface' }],
    status: 'incomplete',
    assetStatus: 'placeholder',
    caseStudyAvailable: false,
    playground: true,
  },
  {
    id: 'valentines-website',
    slug: 'valentines-website',
    title: "Valentine's Day Website",
    type: 'experiment',
    featured: false,
    description:
      'A creative HTML, CSS, JavaScript micro-project demonstrating innovative UI design and interactive elements',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    tech: 'HTML, CSS, JavaScript',
    link: '',
    bullets: [
      'Designed engaging visual animations and transitions',
      'Implemented interactive user experience elements',
      'Showcased creative frontend design techniques',
    ],
    images: [{ src: placeholder, alt: "Valentine's Day website" }],
    status: 'incomplete',
    assetStatus: 'placeholder',
    caseStudyAvailable: false,
    playground: true,
  },
  {
    id: 'happy-birthday-website',
    slug: 'happy-birthday-website',
    title: 'Happy Birthday Website',
    type: 'experiment',
    featured: false,
    description:
      'A creative HTML, CSS, JavaScript micro-project built for a friend, demonstrating innovative UI design and interactive elements.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    tech: 'HTML, CSS, JavaScript',
    link: '',
    bullets: [
      'Designed engaging visual animations and transitions',
      'Implemented interactive user experience elements',
      'Showcased creative frontend design techniques',
    ],
    images: [
      { src: happyBirthday1, alt: 'Happy Birthday website – home' },
      { src: happyBirthday2, alt: 'Happy Birthday website – interactive view' },
      { src: happyBirthday3, alt: 'Happy Birthday website – celebration' },
    ],
    status: 'complete',
    assetStatus: 'complete',
    caseStudyAvailable: false,
    playground: true,
  },
  {
    id: 'ai-therapist',
    slug: 'ai-therapist',
    title: 'AI Therapist Prototype',
    type: 'experiment',
    featured: false,
    description:
      'A React-based conversational UI showcasing advanced frontend state management and user interaction patterns',
    technologies: ['React', 'JavaScript'],
    tech: 'React, JavaScript',
    link: '',
    bullets: [
      'Built conversational interface with dynamic state management',
      'Implemented smooth user interaction flows',
      'Demonstrated complex frontend state handling',
    ],
    images: [{ src: placeholder, alt: 'AI Therapist prototype interface' }],
    status: 'incomplete',
    assetStatus: 'placeholder',
    caseStudyAvailable: false,
    playground: true,
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug) ?? null;
}

export function getProjectsByType(type) {
  return projects.filter((project) => project.type === type);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getProfessionalProjects() {
  return projects.filter((project) => project.type === 'professional');
}

export function getWorkCompany(companyId) {
  return workCompanies.find((company) => company.id === companyId) ?? null;
}

/** Professional projects grouped by company folder order. */
export function getProfessionalProjectsGrouped(companyFilter = 'all') {
  const professional = getProfessionalProjects();
  const filtered =
    companyFilter === 'all'
      ? professional
      : professional.filter((project) => project.company === companyFilter);

  return workCompanies
    .map((company) => ({
      company,
      projects: filtered.filter((project) => project.company === company.id),
    }))
    .filter((group) => group.projects.length > 0);
}

/**
 * Homepage Work teaser — small subset from the same professional projects.
 * Prefers Wingify first, then Appventurez (CMS before client projects).
 */
export function getHomepageWorkPreview(limit = 4) {
  const professional = getProfessionalProjects();
  const wingify = professional.filter((project) => project.company === 'wingify');
  const appventurez = professional
    .filter((project) => project.company === 'appventurez')
    .sort((a, b) => {
      if (a.id === 'appventurez-cms') return -1;
      if (b.id === 'appventurez-cms') return 1;
      return 0;
    });

  return [...wingify, ...appventurez].slice(0, limit);
}

export function getPersonalProjects() {
  return projects.filter(
    (project) => project.type === 'personal' || project.type === 'experiment',
  );
}

export function getPreviewImages(project) {
  if (project?.images?.length) return project.images;
  const website = project?.websiteImages || [];
  const cms = project?.cmsImages || [];
  if (website.length || cms.length) return [...website, ...cms];
  return [];
}
