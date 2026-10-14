import type { ExperienceRole } from '../types';

export const experienceData: ExperienceRole[] = [
  {
    id: 'technonext',
    title: 'Technical Product Manager / Product Owner',
    company: 'TechnoNext Software Ltd.',
    location: 'Dhaka, Bangladesh',
    period: 'Jan 2023 – Present',
    type: 'Full-Time Leadership Role',
    isActive: true,
    tagColor: 'text-[#38BDF8]',
    summary: 'Directing product definition, cross-functional squad execution, and enterprise customer governance across flagship enterprise aviation platforms including AvioSMS, AvioFDMA, and Aviation Medical Record (AMR).',
    responsibilities: [
      'Oversee product roadmap, sprint cadences, and acceptance criteria for 15+ engineering, QA, and business analysis team members.',
      'Lead direct executive steering meetings with VP of Flight Operations, Chief Pilots, and Chief Medical Officers at US-Bangla Airlines and Air Astra.',
      'Maintain zero audit non-conformances across multiple third-party ISO and statutory aviation surveillance reviews.',
      'Introduce automated flight data decoder pipelines enabling near-instantaneous flight exceedance trend monitoring.',
      'Enforce strict quality gates (ISTQB CTFL v4.0 aligned) ensuring zero critical regressions reach staging and production.',
      'Manage multi-squad backlog prioritization using RICE and MoSCoW frameworks, balancing client customizations with core product roadmap.'
    ],
    technologies: ['Jira Software', 'Confluence', 'React', 'REST APIs', 'PostgreSQL', 'Figma', 'ICAO Doc 9859', 'ISO 9001'],
    deliverables: [
      'AvioSMS production release across 2 commercial airlines',
      'AvioFDMA automated flight decoder pipeline',
      'AMR aeromedical compliance suite with automated notification engine',
      'Zero-defect audit sign-off from CAAB inspectors'
    ]
  },
  {
    id: 'innovative-professional',
    title: 'Senior Product & Business Analyst',
    company: 'Innovative Professional Ltd.',
    location: 'Dhaka, Bangladesh',
    period: 'Aug 2017 – Jun 2020',
    type: 'Full-Time',
    isActive: false,
    tagColor: 'text-[#10B981]',
    summary: 'Spearheaded product discovery, requirements management, and feature rollout for consumer automotive marketplace portals and e-commerce transactional platforms.',
    responsibilities: [
      'Designed monetization mechanics including premium seller listing promotions and paid search boosting engine.',
      'Conducted extensive buyer journey mapping and usability tests, iteratively lifting seller platform lead conversions.',
      'Authored comprehensive PRD and BRD documentation transitioning offshore dev teams into Scrum execution.',
      'Managed defect prioritization and release regression verification for weekly deployment cycles.',
      'Structured faceted catalog navigation trees reducing bounce rates and search latency.'
    ],
    technologies: ['Scrum / Kanban', 'User Story Mapping', 'Wireframing', 'SQL', 'Redmine', 'Google Analytics', 'A/B Testing'],
    deliverables: [
      'Automotive portal monetization engine rollout',
      'Faceted search & filter redesign for e-commerce marketplace',
      'Unified PRD repository standardizing dev team specifications'
    ]
  },
  {
    id: 'asian-powertech',
    title: 'Assistant Engineer',
    company: 'Asian Powertech Ltd.',
    location: 'Dhaka, Bangladesh',
    period: 'Dec 2016 – Jun 2017',
    type: 'Engineering Foundations',
    isActive: false,
    tagColor: 'text-slate-400',
    summary: 'Provided technical pre-sales analysis, client solution architecture, and electrical equipment requirement evaluations for commercial infrastructure accounts. Cultivated the rigorous systems-thinking principles that underpin his software product management philosophy today.',
    responsibilities: [
      'Conducted technical specifications analysis for commercial power distribution systems.',
      'Calculated load capacities, power factor corrections, and single-line circuit diagrams.',
      'Liaised between client engineering leads and manufacturing contractors to ensure requirement compliance.',
      'Established high-precision documentation habits and root cause analysis methodologies.'
    ],
    technologies: ['AutoCAD', 'Load Analysis', 'Systems Engineering', 'Technical Specs', 'Single-Line Diagrams'],
    deliverables: [
      'Infrastructure engineering proposal packages',
      'Client technical sign-off packages for high-capacity installations'
    ]
  }
];
