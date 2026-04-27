export const NAV_LINKS = ['About', 'Experience', 'Projects', 'Contact'];

export const TYPEWRITER_SEQUENCE = [
  'CS Student.',
  2000,
  'Linux Enthusiast.',
  2000,
  'BJJ Practitioner.',
  2000,
  'Cantonese Speaker.',
  2000,
];

export const EXPERIENCE = [
  {
    role: 'Frontend Developer Intern',
    company: 'SureMark Digital',
    location: 'Provo, Utah',
    period: 'Sept 2025 – Present',
    bullets: [
      'Built the "Sign Content" Chrome Extension feature end-to-end, translating Figma designs into production-ready code',
      'Authored responsive HTML email templates adhering to cross-client compatibility standards',
      'Designed and implemented robust API routes for signed asset management',
      'Developed a comprehensive testing suite achieving 100% test coverage across all signed assets',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'Medicipher',
    location: 'Remote',
    period: 'May 2025 – Sept 2025',
    bullets: [
      'Built a Python BeautifulSoup scraper that processed ~1,700 pages for automated medical data extraction',
      'Integrated Gemini 1.5 Flash API to perform intelligent data cleansing and normalization on scraped content',
      'Contributed Tailwind CSS UI work to the RUGS drug-information tool, improving layout consistency and responsiveness',
    ],
  },
  {
    role: 'Volunteer Representative',
    company: 'Church of Jesus Christ of Latter-day Saints',
    location: 'Hong Kong, China',
    period: 'Sept 2020 – Sept 2022',
    bullets: [
      'Led and motivated a team of 16 volunteer representatives across multiple regional assignments',
      'Identified structural communication gaps and implemented solutions that improved team effectiveness',
      'Achieved full Cantonese fluency through 18 months of daily immersive language use',
    ],
  },
  {
    role: 'Grill Cook',
    company: 'Seven Brothers Burgers',
    location: 'Laie, HI',
    period: 'Aug 2019 – Sept 2020',
    bullets: [
      'Thrived in a fast-paced, high-pressure kitchen requiring rapid coordination and communication',
      'Progressed from prep cook → fryer → grill cook, earning expanded responsibility over time',
      'Trained incoming staff on task management and demand-pacing techniques',
    ],
  },
];

export const PROJECTS = [
  {
    id: 'Excel_Learning_Path',
    badge: 'LATEST',
    badgeColor: 'emerald',
    category: 'Collaboration & Development',
    filterCategory: 'Collaboration',
    date: '2024',
    headline:
      'Bridging the Gap: New Excel Learning Path Launches for Business Students',
    byline: 'By Carter Lee  |  Collaboration & Development',
    summary:
      'Developed in February 2024 as part of a class project under Professor Wood, this learning path was built alongside two accounting students. As the technical lead, I bridged the gap between data tools and business accounting requirements by designing hands-on challenges in SQL, Power BI, and Alteryx using real-world datasets—making advanced analytics accessible to non-technical students.',
    tags: ['SQL', 'Power BI', 'Alteryx', 'Excel'],
    link: 'https://www.techhub.training/t/excel-learning-path/2225',
    featured: true,
  },
  {
    id: 'Jobs_Inventory',
    badge: 'STARTUP',
    badgeColor: 'amber',
    category: 'Full-Stack Web Application',
    filterCategory: 'Web Application',
    date: '2024',
    headline: '🛠️ Jobs & Inventory Management System',
    byline: 'By Carter Lee  |  Resource Logistics',
    summary:
      'Engineered a centralized resource management platform designed to track company assets and job assignments in real-time. The system features a React-based frontend with a Node.js/Express backend, utilizing MongoDB for persistent storage of user credentials and inventory data. Implemented WebSockets to provide a live team chat and real-time user presence updates, ensuring seamless coordination across the organization.',
    highlights: [
      {
        label: 'Security',
        text: 'Implemented secure user authentication using Argon2 password hashing and HTTPS protocols.',
      },
      {
        label: 'Real-time Interaction',
        text: 'Developed a bidirectional communication layer using WebSockets for instant team messaging without page refreshes.',
      },
      {
        label: 'Full-Stack Deliverable',
        text: 'Integrated third-party APIs (Inspirational Quotes) to enhance the user login experience and UI engagement.',
      },
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'WebSockets', 'Express'],
    link: 'https://github.com/Tarotar30127/startup',
    featured: false,
  },
  {
    id: 'BYU_Chess',
    badge: 'JAVA',
    badgeColor: 'blue',
    category: 'Full-Stack Development',
    filterCategory: 'Networking',
    date: '2024',
    headline: '♕ BYU CS 240 Chess',
    byline: 'By Carter Lee  |  Networking & Design',
    summary:
      'Developed a full-stack, multiplayer chess application featuring a networked client-server architecture. Built in Java, the project implements complex game logic, HTTP and WebSocket communication for real-time play, and database persistence. Includes a command-line client and a server designed with a shared module architecture to manage game state and user sessions.',
    tags: ['Java', 'Networking', 'SQL', 'Client-Server', 'Software Design'],
    link: 'https://github.com/Tarotar30127/chess',
    featured: false,
  },
  {
    id: 'Pi_Security',
    badge: 'SECURITY',
    badgeColor: 'amber',
    category: 'Hardware',
    filterCategory: 'Security',
    date: '2023',
    headline: 'Network Lockdown: Hardware-Level Security via Raspberry Pi',
    byline: 'By Carter Lee  |  Security & Hardware',
    summary:
      'Implementing network-wide ad blocking and DNS-level traffic monitoring using Pi-hole on Kali Linux.',
    tags: ['Raspberry Pi', 'Kali Linux', 'Networking', 'Security'],
    link: '#',
    featured: false,
  },
];

export const SKILLS = [
  { label: 'Python', category: 'Language' },
  { label: 'Java', category: 'Language' },
  { label: 'C++', category: 'Language' },
  { label: 'Linux (Kali / Ubuntu)', category: 'OS' },
  { label: 'Raspberry Pi', category: 'Hardware' },
  { label: 'macOS / Windows', category: 'OS' },
  { label: 'Cantonese', category: 'Language' },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/Tarotar30127',
  linkedin: 'https://www.linkedin.com/in/carterclee2020/',
  email: 'cartercklee@gmail.com',
};
