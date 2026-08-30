/**
 * Professional experience — employer → related projects.
 * SuperDeli and InstaCEI are client projects delivered while at Appventurez.
 */

export const experience = [
  {
    id: 'wingify-vwo',
    organization: 'Wingify / VWO',
    role: null, // Exact title not stated in prior content — refine later
    // Dates not present in existing content — leave unset rather than invent
    start: null,
    end: null,
    summary:
      'Worked on VWO Insights analytics UI modules for analyzing user behavior and improving product conversion flows.',
    highlights: [
      'Developed and optimized Heatmaps, Session Recordings, Surveys, Funnels, and Form Analytics',
      'Improved performance and responsiveness across the analytics dashboard',
      'Led design–dev discussions for more intuitive user flows',
    ],
    relatedProjectIds: ['vwo-insights'],
    technologies: ['Angular', 'TypeScript', 'SCSS'],
  },
  {
    id: 'appventurez',
    organization: 'Appventurez',
    role: 'Intern → Software Engineer (offered full-time)',
    start: null,
    end: null,
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
