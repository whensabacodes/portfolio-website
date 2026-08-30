/**
 * Global site / portfolio identity.
 * Placeholder contact values are marked — replace before shipping.
 */

export const site = {
  displayName: 'Saba Qaiser',
  shortName: 'Saba',
  professionalTitle: 'Frontend Developer & UI Engineer',
  heroTagline:
    'I turn ideas into thoughtful interfaces — blending frontend engineering, UI craft, and a little personality.',
  shortIntroduction:
    'I design and develop fast, scalable, and visually refined user interfaces. My work blends clean engineering, thoughtful design, and an obsession with user experience — to create products that feel effortless and work flawlessly.',
  location: {
    primary: null, // TODO: e.g. Germany / Berlin
    openTo: ['Berlin', 'Frankfurt', 'Stuttgart', 'Munich', 'Hamburg', 'Cologne'],
    alsoOpenTo: ['Warsaw', 'Europe'],
  },
  availability: {
    seeking: [
      'Frontend development',
      'UI engineering',
      'Creative digital experiences',
    ],
    roleTypes: [
      'Frontend Engineer',
      'UI Engineer',
      'Product Engineer',
      'Design Systems Engineer',
      'Creative Developer',
      'Werkstudent',
      'Internship',
    ],
    statusLabel: 'Open to frontend / UI roles',
  },
  contact: {
    email: 'hello@example.com',
    emailIsPlaceholder: true,
    linkedIn: 'https://linkedin.com',
    linkedInIsPlaceholder: true,
    github: 'https://github.com',
    githubIsPlaceholder: true,
    instagram: null,
  },
  currently: {
    summary:
      'Open to internship roles in frontend development, UI engineering, and creative digital experiences.',
    sections: [
      {
        id: 'building',
        label: 'Building',
        items: ['This portfolio experience'],
      },
      {
        id: 'experimenting',
        label: 'Experimenting with',
        items: ['Creative frontend', 'AI interfaces'],
      },
      {
        id: 'looking-for',
        label: 'Looking for',
        items: [
          'Frontend / UI engineering opportunities',
          'Creative digital experiences',
        ],
      },
    ],
  },
  whatIDo: [
    {
      id: 'think',
      title: 'Think',
      description: 'I ask why before deciding how.',
    },
    {
      id: 'build',
      title: 'Build',
      description: 'I turn ideas into interfaces people can actually use.',
    },
    {
      id: 'communicate',
      title: 'Communicate',
      description:
        'I enjoy client conversations, collaboration, and translating vague requirements into concrete interfaces.',
    },
    {
      id: 'experiment',
      title: 'Experiment',
      description: 'I build things simply because I want to know if I can.',
    },
  ],
  howIWork: [
    {
      id: 'collaboration',
      title: 'Collaboration over silos',
      description:
        'I work closely with design and product teams — not just implementing tickets, but shaping flows and clarifying requirements together.',
    },
    {
      id: 'clarity',
      title: 'Clarity in the craft',
      description:
        'Clean UI architecture, maintainable components, and interfaces that stay fast as products grow.',
    },
    {
      id: 'curiosity',
      title: 'Curiosity as fuel',
      description:
        'I explore new tools, layouts, and interaction patterns — the same curiosity that shows up in personal experiments.',
    },
    {
      id: 'stakeholders',
      title: 'Stakeholder-minded',
      description:
        'From client conversations to internal demos, I care about how interfaces land for the people who use and buy them.',
    },
  ],
  aboutTeaser: {
    heading: "I'm a frontend engineer who likes making things.",
    paragraph:
      "I'm a frontend engineer specializing in clean UI architecture, design systems, and seamless user journeys. I combine creativity, structured thinking, and engineering precision to build modern interfaces that feel intuitive and look refined.",
  },
  about: {
    paragraphs: [
      "I'm a frontend engineer specializing in clean UI architecture, design systems, and seamless user journeys. I combine creativity, structured thinking, and engineering precision to build modern interfaces that feel intuitive and look refined.",
      "With 4+ years of experience across VWO Insights, SuperDeli, InstaCEI, and internal CMS platforms, I've worked on high-impact features such as heatmaps, session recordings, surveys, funnels, and dashboard interfaces. My work focuses on performance, UX clarity, and maintainable component systems.",
    ],
    highlights: [
      'Strong experience with React, Angular, JavaScript/TypeScript, SCSS',
      'Built data visualization modules (Heatmaps, Funnels, Recordings)',
      'Collaborated with design teams to refine UI/UX at scale',
      'Led UI architecture discussions and mentored interns',
      'Improved performance, refactored legacy code, and ensured production stability',
    ],
  },
  interests: [
    {
      id: 'coding-ui',
      label: 'Coding & UI experimentation',
      description: 'Trying new frameworks and layout ideas',
    },
    {
      id: 'music',
      label: 'Music',
      description: 'Listening, playing, and discovering sounds',
    },
    {
      id: 'art',
      label: 'Art & digital sketching',
      description: 'Doodles and digital illustration',
    },
    {
      id: 'reading',
      label: 'Reading & research rabbit-holes',
      description: 'Deep dives into random topics',
    },
    {
      id: 'psychology',
      label: 'Psychology & human behavior',
      description: 'Why we think and act the way we do',
    },
    {
      id: 'fitness',
      label: 'Fitness & self-improvement',
      description: 'Staying active and building habits',
    },
    {
      id: 'writing',
      label: 'Writing & storytelling',
      description: 'Words, structure, and narrative',
    },
    {
      id: 'productivity',
      label: 'Tech tools & productivity systems',
      description: 'Workflows, automation, and organization',
    },
  ],
  interestsIntro:
    'Outside of work, I explore creative, technical, and expressive hobbies that keep me curious and balanced.',
  interestsTagline:
    "I'm endlessly curious — outside of tech I explore anything that sharpens creativity, expression, and how humans think.",
  contactIntro:
    "Let's build something meaningful together. I'm open to internship roles in frontend development, UI engineering, and creative digital experiences.",
  contactHeading: 'Wanna build something?',
  seo: {
    defaultTitle: 'Saba Qaiser — Frontend Developer & UI Engineer',
    defaultDescription:
      'Portfolio of a frontend / UI engineer — product interfaces, design systems, and creative experiments.',
    siteUrl: null, // TODO: set production URL
  },
  navigation: [
    { label: 'Home', to: '/', showInNav: false },
    { label: 'Work', to: '/work' },
    { label: 'About', to: '/about' },
    { label: 'Interests', to: '/about#interests' },
    { label: 'Resume', to: '/resume', showInNav: false },
  ],
  /**
   * Hero orbit — doodle destinations around identity.
   * Persistent filename + hover/focus description.
   */
  heroOrbit: [
    {
      id: 'projects',
      label: 'Projects',
      to: '/work',
      position: 'top-left',
      accent: 'mint',
      doodle: 'folder',
      filename: 'projects/',
      description:
        'Personal projects, experiments, and things I build when nobody asks me to.',
      ariaLabel: 'View projects',
    },
    {
      id: 'interests',
      label: 'Interests',
      to: '/about#interests',
      position: 'top-right',
      accent: 'cyan',
      doodle: 'palette',
      filename: 'interests.log',
      description:
        'Photography, travel, museums, books, technology, and the places I go looking for inspiration.',
      ariaLabel: 'Explore interests beyond code',
    },
    {
      id: 'contact',
      label: 'Contact',
      to: '#contact',
      position: 'mid-left',
      accent: 'lavender',
      doodle: 'envelope',
      filename: 'contact.txt',
      description:
        "Get in touch. Let's build something thoughtful, useful, and a little more interesting together.",
      ariaLabel: 'Contact Saba Qaiser',
    },
    {
      id: 'resume',
      label: 'Resume',
      to: '/resume',
      position: 'mid-right',
      accent: 'mint',
      doodle: 'clipboard',
      filename: 'resume.pdf',
      description:
        "Want the short version? Here's where you can find my experience, skills, and background. Think we'd make a good team? Hire me.",
      ariaLabel: 'View resume',
    },
    {
      id: 'work',
      label: 'Work',
      to: '/work',
      position: 'bottom-left',
      accent: 'cyan',
      doodle: 'laptop',
      filename: 'work.exe',
      description:
        "Frontend work I've shipped professionally — products, interfaces, and problems I've solved along the way.",
      ariaLabel: 'View professional work',
    },
    {
      id: 'currently',
      label: 'Currently',
      to: '#currently',
      position: 'bottom-right',
      accent: 'lavender',
      doodle: 'notebook',
      filename: 'currently.log',
      description:
        "Currently pursuing my Master's, learning German, building new things, and figuring out what comes next.",
      ariaLabel: 'See what Saba is currently working on',
    },
  ],
};
