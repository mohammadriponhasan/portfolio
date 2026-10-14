export interface MetricItem {
  val: number;
  label: string;
  sub: string;
  suffix?: string;
  prefix?: string;
  isText?: boolean;
  color?: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  shortTitle: string;
  tagText: string;
  tagColor: string;
  tagBg: string;
  dotColor: string;
  subTag: string;
  category: 'aviation' | 'compliance' | 'ecommerce' | 'fleet';
  role: string;
  clients: string;
  period: string;
  desc: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  architectureHighlights: string[];
  regulatoryStandards: string[];
  techStack: string[];
  bullets: string[];
  metrics: MetricItem[];
}

export interface ExperienceRole {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: string;
  isActive: boolean;
  tagColor: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  deliverables: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  shortTitle: string;
  issuer: string;
  licenseNumber?: string;
  issueDate: string;
  status: 'Verified Active' | 'Completed' | 'Credential';
  accentColor: string;
  iconType: 'shield' | 'check' | 'brain' | 'layers';
  desc: string;
  skillsAcquired: string[];
  credentialUrl?: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  institutionShort: string;
  location: string;
  period: string;
  level: string;
  description: string;
  focusAreas: string[];
  relevanceToProduct: string;
}

export interface CompetencyCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: 'rocket' | 'clipboard' | 'plane' | 'shield' | 'brain' | 'database';
  accentColor: string;
  accentBg: string;
  borderColor: string;
  description: string;
  skills: string[];
  toolsAndFrameworks: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  organization?: string;
  subject: string;
  message: string;
  urgency?: 'normal' | 'priority' | 'urgent';
}

export interface ProfileData {
  fullName: string;
  preferredName: string;
  primaryTitle: string;
  secondaryTitle: string;
  credentialsShort: string;
  experienceYears: number;
  avatarUrl: string;
  location: string;
  email: string;
  phone: string;
  phoneFormatted: string;
  linkedInUrl: string;
  pmpLicense: string;
  istqbLevel: string;
  statusBadge: string;
  executiveSummary: string[];
  coreSuperpower: {
    title: string;
    description: string;
  };
  pillars: {
    title: string;
    description: string;
    icon: 'gauge' | 'shield' | 'handshake';
    color: string;
  }[];
  executiveQuote: {
    quote: string;
    author: string;
    credential: string;
  };
}
