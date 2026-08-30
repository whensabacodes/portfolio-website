/**
 * Professional experience — employer → related projects.
 * SuperDeli and InstaCEI are client projects delivered while at Appventurez.
 *
 * Dates use year ranges confirmed for the About journey timeline.
 * Do not invent months beyond the labels below.
 */

const appventurez = {
  id: 'appventurez',
  organization: 'Appventurez Pvt. Ltd.',
  role: 'Frontend Developer / Software Engineer Trainee → Full-time',
  start: '2019',
  end: '2020',
  periodLabel: '2019 → 2020',
  summary:
    'Built the complete UI for appventurez.com during an internship, developed/maintained the CMS panel, and delivered client project UIs including SuperDeli and InstaCEI. Offered a full-time Software Engineer role after delivering the website UI.',
  highlights: [
    'Designed and developed the full UI for appventurez.com',
    'Built and maintained the CMS panel for case studies and portfolio entries',
    'Built customer-facing e-commerce interfaces for SuperDeli',
    'Built dashboard UI for InstaCEI construction workflows',
    'Managed company blog content via WordPress',
    'Designed branded HTML email templates for client communication',
  ],
  relatedProjectIds: ['appventurez-cms', 'superdeli', 'instacei'],
  technologies: ['React', 'Angular', 'JavaScript', 'HTML/CSS', 'SCSS', 'WordPress'],
};

const wingify = {
  id: 'wingify-vwo',
  organization: 'Wingify Software / VWO',
  role: 'Software Engineer - 2 / Frontend Developer',
  start: '2021',
  end: '2025',
  periodLabel: '2021 → 2025',
  summary:
    'Worked on VWO Insights analytics UI modules for analyzing user behavior and improving product conversion flows.',
  highlights: [
    'Developed and optimized Heatmaps, Session Recordings, Surveys, Funnels, and Form Analytics',
    'Improved performance and responsiveness across the analytics dashboard',
    'Led design–dev discussions for more intuitive user flows',
  ],
  relatedProjectIds: ['vwo-insights'],
  technologies: ['Angular', 'TypeScript', 'SCSS'],
};

const tuIlmenau = {
  id: 'tu-ilmenau-rcse',
  organization: 'TU Ilmenau',
  role: 'M.Sc. Research in Computer & Systems Engineering (RCSE)',
  shortTitle: 'M.Sc. RCSE',
  start: '2025',
  end: null,
  periodLabel: '2025 → Present',
  current: true,
  summary:
    "Master's degree in Research in Computer & Systems Engineering at TU Ilmenau.",
};

/** Professional employers (Work / resume consumers). Order: most recent first. */
export const experience = [wingify, appventurez];

/** Academic chapters — kept separate from employment experience. */
export const education = [tuIlmenau];

/**
 * About-page timeline — reverse chronological (current → oldest).
 * Built from the same objects as experience/education — no duplicate facts.
 */
export const journeyTimeline = [
  {
    id: tuIlmenau.id,
    kind: 'education',
    organization: tuIlmenau.organization,
    title: tuIlmenau.role,
    period: tuIlmenau.periodLabel,
    start: tuIlmenau.start,
    end: tuIlmenau.end,
    current: true,
  },
  {
    id: wingify.id,
    kind: 'work',
    organization: wingify.organization,
    title: wingify.role,
    period: wingify.periodLabel,
    start: wingify.start,
    end: wingify.end,
    current: false,
  },
  {
    id: appventurez.id,
    kind: 'work',
    organization: appventurez.organization,
    title: appventurez.role,
    period: appventurez.periodLabel,
    start: appventurez.start,
    end: appventurez.end,
    current: false,
  },
];

/** Cross-cutting skills mentioned in existing About content */
export const skills = [
  'React',
  'Angular',
  'JavaScript/TypeScript',
  'SCSS',
  'Data visualization (Heatmaps, Funnels, Recordings)',
  'Design–dev collaboration',
  'UI architecture',
  'Mentoring',
  'Performance & legacy refactoring',
];
