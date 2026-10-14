import type { CertificationItem } from '../types';

export const certificationsData: CertificationItem[] = [
  {
    id: 'pmp',
    title: 'PMP® – Project Management Professional',
    shortTitle: 'PMP® Certified',
    issuer: 'Project Management Institute (PMI)',
    licenseNumber: 'License #4465221',
    issueDate: 'Issued 2024',
    status: 'Verified Active',
    accentColor: '#10B981',
    iconType: 'shield',
    desc: 'Mastery in predictive, agile, and hybrid delivery models, scope management, governance, critical path scheduling, and enterprise organizational transformation.',
    skillsAcquired: [
      'Agile & Hybrid Frameworks',
      'Earned Value Analysis (EVA)',
      'Risk & Stakeholder Management',
      'Critical Path Scheduling',
      'Resource & Budget Optimization'
    ],
    credentialUrl: 'https://www.pmi.org/certifications/project-management-pmp'
  },
  {
    id: 'istqb',
    title: 'ISTQB® – CTFL v4.0 Certified Tester',
    shortTitle: 'ISTQB® CTFL v4.0',
    issuer: 'International Software Testing Qualifications Board',
    licenseNumber: 'CTFL Foundation Level v4.0 Standard',
    issueDate: 'Certified',
    status: 'Verified Active',
    accentColor: '#38BDF8',
    iconType: 'check',
    desc: 'Rigorous quality engineering principles, defect lifecycle governance, risk-based test planning, static analysis methods, and automated quality gate enforcement.',
    skillsAcquired: [
      'Risk-Based Test Strategy',
      'Defect Severity & Triage',
      'White-Box & Black-Box Testing',
      'Regression & Integration Gates',
      'Static Code & Architecture Reviews'
    ],
    credentialUrl: 'https://www.istqb.org/'
  },
  {
    id: 'genai-pmi',
    title: 'Generative AI Overview for Project Managers',
    shortTitle: 'PMI Generative AI',
    issuer: 'Project Management Institute (PMI)',
    licenseNumber: 'Specialization Badge: AI in Delivery',
    issueDate: 'PMI Credential',
    status: 'Credential',
    accentColor: '#60A5FA',
    iconType: 'brain',
    desc: 'Leveraging LLMs and generative systems to accelerate requirements gathering, automated sprint synthesis, test-case authoring, and project risk telemetry.',
    skillsAcquired: [
      'Prompt Engineering for PMs',
      'Automated PRD/User Story Synthesis',
      'Risk Forecast Modeling with LLMs',
      'AI Workflow Integration'
    ],
    credentialUrl: 'https://www.pmi.org/'
  },
  {
    id: 'mentogrid',
    title: 'Mastering Digital Product Management',
    shortTitle: 'Digital Product Management',
    issuer: 'MentoGrid Product Academy',
    licenseNumber: 'Advanced Track Cohort Completed',
    issueDate: 'Professional Cohort',
    status: 'Completed',
    accentColor: '#94A3B8',
    iconType: 'layers',
    desc: 'Advanced unit economics, user psychology, conversion optimization funnels, product-led growth (PLG) mechanics, and enterprise SaaS retention.',
    skillsAcquired: [
      'Product-Led Growth (PLG)',
      'Customer Journey Mapping',
      'Unit Economics & LTV/CAC',
      'Cohort Retention Analysis'
    ]
  }
];
