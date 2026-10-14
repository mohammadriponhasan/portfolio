import type { CompetencyCategory } from '../types';

export const competencyCategories: CompetencyCategory[] = [
  {
    id: 'agile-delivery',
    title: 'Delivery & Agile Governance',
    subtitle: 'Execution & Mathematical Capacity Planning',
    iconName: 'rocket',
    accentColor: 'text-[#38BDF8]',
    accentBg: 'bg-[#38BDF8]/10',
    borderColor: 'hover:border-[#38BDF8]/30',
    description: 'Driving engineering throughput with mathematical forecasting, capacity alignment, critical path calculation, and ruthless impediment elimination.',
    skills: [
      'Scrum & Kanban',
      'Sprint Planning',
      'Multi-Squad Roadmapping',
      'Backlog Grooming',
      'Velocity & Burndown Analytics',
      'Capacity Planning',
      'Release Planning',
      'Critical Path Method (CPM)',
      'Budget Forecasting'
    ],
    toolsAndFrameworks: ['Jira Software', 'Redmine', 'Confluence', 'Miro', 'Notion Enterprise', 'GitLab']
  },
  {
    id: 'product-discovery',
    title: 'Product Discovery & Specification',
    subtitle: 'Requirements Engineering & Value Delivery',
    iconName: 'clipboard',
    accentColor: 'text-[#10B981]',
    accentBg: 'bg-[#10B981]/10',
    borderColor: 'hover:border-[#10B981]/30',
    description: 'Extracting clarity from ambiguity through structured stakeholder workshops, disciplined user stories, edge-case analysis, and measurable acceptance criteria.',
    skills: [
      'User Stories & Gherkin AC',
      'PRD / BRD / SRS Authoring',
      'RICE Prioritization',
      'MoSCoW & Kano Analysis',
      'UAT Governance',
      'Stakeholder Alignment',
      'Root Cause Analysis (5-Whys)',
      'Defect Triage Lifecycles'
    ],
    toolsAndFrameworks: ['Figma', 'Draw.io', 'Postman', 'Swagger/OpenAPI', 'Hotjar', 'Google Analytics']
  },
  {
    id: 'technical-domain',
    title: 'Technical & Domain Governance',
    subtitle: 'Aviation Compliance & Systems Architecture',
    iconName: 'plane',
    accentColor: 'text-blue-400',
    accentBg: 'bg-blue-400/10',
    borderColor: 'hover:border-blue-400/30',
    description: 'Domain competence spanning international civil aviation safety frameworks, automated flight data extraction, telemetry pipelines, and enterprise tooling.',
    skills: [
      'ICAO Doc 9859 (SMS Framework)',
      'ICAO Annex 6 (Operation of Aircraft)',
      'ISO 9001 & ISO 27001 Audit Prep',
      'SQA & Test Automation Strategy',
      'API & Telemetry Data Decoders',
      'High-Availability Architecture',
      'UI/UX Design Systems',
      'Full SDLC Lifecycle Ownership'
    ],
    toolsAndFrameworks: ['RESTful APIs', 'JSON/XML Parsers', 'QAR/Blackbox Telemetry', 'PostgreSQL', 'Docker', 'AWS Cloud']
  }
];
