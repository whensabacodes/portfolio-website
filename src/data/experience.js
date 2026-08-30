/**
 * Professional experience extracted from existing portfolio content.
 * Do not embellish — expand only with verified facts in a later content phase.
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
    id: 'superdeli',
    organization: 'SuperDeli',
    role: null,
    start: null,
    end: null,
    summary:
      'Built customer-facing e-commerce interfaces with conversion-focused UI.',
    highlights: [
      'Built responsive interfaces for product browsing and order flows',
      'Collaborated closely with designers to refine UI components',
      'Ensured cross-device performance and accessibility',
    ],
    relatedProjectIds: ['superdeli'],
    technologies: ['React', 'JavaScript', 'SCSS'],
  },
  {
    id: 'instacei',
    organization: 'InstaCEI',
    role: null,
    start: null,
    end: null,
    summary:
      'Dashboard UI for managing construction workflows and project operations.',
    highlights: [
      'Implemented clean dashboard layouts and modular UI components',
      'Designed and coded several data-driven UI screens',
      'Worked cross-functionally with backend + design teams',
    ],
    relatedProjectIds: ['instacei'],
    technologies: ['Angular', 'JavaScript'],
  },
  {
    id: 'appventurez',
    organization: 'Appventurez',
    role: 'Intern → Software Engineer (offered full-time)',
    start: null,
    end: null,
    summary:
      'Built the complete UI for appventurez.com during an internship and developed/maintained the CMS panel. Offered a full-time Software Engineer role after delivering the website UI.',
    highlights: [
      'Designed and developed the full UI for appventurez.com',
      'Built and maintained the CMS panel for case studies and portfolio entries',
      'Managed company blog content via WordPress',
      'Designed branded HTML email templates for client communication',
    ],
    relatedProjectIds: ['appventurez-cms'],
    technologies: ['React', 'HTML/CSS', 'WordPress'],
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
