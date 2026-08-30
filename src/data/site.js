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
    email: 'sabaqaiser39@gmail.com',
    emailIsPlaceholder: false,
    instagramHandle: 'zforart',
    instagramUrl: 'https://www.instagram.com/zforart/',
    linkedIn: 'https://linkedin.com',
    linkedInIsPlaceholder: true,
    github: 'https://github.com',
    githubIsPlaceholder: true,
  },
  contactPage: {
    heading: 'Contact',
    intro:
      'Have a project, an opportunity, or just an interesting idea? Let’s talk.',
    speechBubble: 'Hey there! Got something interesting in mind?',
    form: {
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me a little about your project...',
      submitLabel: 'Submit',
    },
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
  workPage: {
    eyebrow: 'work.exe',
    heading: 'WORK',
    lede: "Things I've shipped professionally.",
    description:
      "A collection of products, features, and interfaces I've worked on at Wingify and Appventurez — plus client work delivered along the way.",
    pathRoot: 'work/',
  },
  homeSelectedWork: {
    eyebrow: 'work.exe',
    heading: "Things I've shipped professionally.",
    lede:
      'A preview of products and interfaces from Wingify and Appventurez — open a folder, or see the full archive.',
    cta: 'See all work →',
  },
  aboutPage: {
    label: 'about me',
    greeting: "Hi, I'm Saba.",
    title: 'UI/UX Engineer & Frontend Developer',
    paragraphs: [
      "I'm a UI/UX Engineer and Frontend Developer who likes being somewhere between a good idea and the screen it eventually becomes. I care about the details people notice, the ones they don't, and especially the tiny things that make an interface feel obvious instead of complicated.",
      "I've spent the last few years building real products with different teams — client and product interfaces at Appventurez, then VWO's product experience at Wingify, including Heatmaps, Session Recordings, Funnels, AI features, and reusable components.",
      "These days I'm studying in Germany, but I still spend a lot of free time building and tinkering with interfaces. I'm happiest when engineering, visual thinking, and a slightly obsessive attention to detail get to sit at the same table.",
    ],
    germany: {
      label: 'india → germany',
      heading: 'A big move, a new chapter.',
      paragraphs: [
        "I moved from India to Germany for my master's, and it's turned into more than just going back to university.",
        "I'm pursuing an M.Sc. in Research in Computer & Systems Engineering (RCSE) at TU Ilmenau — started in 2025. Between lectures, I keep building personal projects and poking at frontend and UI ideas that won't leave me alone.",
        "It's a quieter kind of busy: studying, making things, and figuring out what comes next.",
      ],
      note: 'studying, building, exploring',
    },
    journey: {
      label: 'so far',
      heading: "Where I've been",
      workLinkLabel: 'See the work →',
    },
    care: {
      heading: 'What I care about',
      paragraphs: [
        'I care about the parts of an interface people notice without realizing they\'re noticing them — spacing, interaction, empty states, tiny transitions, and the moment something just clicks.',
        'Good design doesn\'t stop at looking right. I like getting close to the implementation: reusable components, accessibility, edge cases, and translating product ideas into interfaces that feel intuitive.',
      ],
      note: 'details · usability · craft',
    },
    sideNotes: {
      label: 'away from the keyboard',
      heading: 'What I get curious about',
      items: [
        {
          id: 'photography',
          label: 'Photography',
          description:
            'I carry a camera more often than I probably need to. I like documenting places, little details, and things that catch my eye.',
        },
        {
          id: 'travel',
          label: 'Travel & exploring',
          description:
            "I like going somewhere I've never been before and seeing what the place has to say for itself.",
        },
        {
          id: 'museums',
          label: 'Art & museums',
          description:
            'Museums are one of my favourite ways to collect inspiration. I especially enjoy looking at how artists approach colour, composition and storytelling.',
        },
        {
          id: 'books',
          label: 'Books',
          description:
            "Reading is my quieter way of disappearing into someone else's world for a while.",
        },
        {
          id: 'gadgets',
          label: 'Technology & gadgets',
          description:
            "I have a weakness for interesting gadgets. I like figuring out how they work, what makes them useful, and whether they're actually worth buying.",
        },
        {
          id: 'personal-projects',
          label: 'Building things',
          description:
            "Some ideas don't need a reason to exist. If something catches my attention, I'll probably end up building it.",
          linkTo: '/work',
          linkLabel: 'See projects →',
        },
      ],
    },
    contactCta: {
      label: "Let's talk →",
      to: '/contact',
    },
  },
  contactIntro:
    "Have a project, an opportunity, or just an interesting idea? Let's talk.",
  contactHeading: 'Wanna build something?',
  contactCta: 'Get in touch →',
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
      description: "Things I've built because I wanted to.",
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
        'Photography, travel, art, books, gadgets & inspiration.',
      ariaLabel: 'Explore interests beyond code',
    },
    {
      id: 'contact',
      label: 'Contact',
      to: '/contact',
      position: 'mid-left',
      accent: 'lavender',
      doodle: 'envelope',
      filename: 'contact.txt',
      description: "Get in touch — let's build something interesting.",
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
      description: "Experience, background & the work I've done.",
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
      description: "Professional work I've shipped.",
      ariaLabel: 'View professional work',
    },
    {
      id: 'currently',
      label: 'Currently',
      to: '/about',
      position: 'bottom-right',
      accent: 'lavender',
      doodle: 'notebook',
      filename: 'currently.log',
      description:
        "What I'm learning, building and thinking about right now.",
      ariaLabel: 'See what Saba is currently working on',
    },
  ],
};
