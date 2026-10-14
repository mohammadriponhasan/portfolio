import type { ProjectCaseStudy } from '../types';

export const projectsData: ProjectCaseStudy[] = [
  {
    id: 'aviosms-aviofdma',
    title: 'AvioSMS & AvioFDMA (Safety & Flight Data Analysis)',
    shortTitle: 'AvioSMS / AvioFDMA',
    tagText: 'Commercial Aviation Safety',
    tagColor: 'text-[#38BDF8]',
    tagBg: 'bg-[#38BDF8]/10',
    dotColor: 'bg-[#38BDF8]',
    subTag: 'Flagship Enterprise Product',
    category: 'aviation',
    role: 'Product Owner & Technical PM',
    clients: 'US-Bangla Airlines & Air Astra',
    period: '2023 – Present',
    desc: 'Spearheaded the conceptualization, regulatory modeling, and iterative deployment of an integrated safety management ecosystem adhering strictly to ICAO Doc 9859 and ICAO Annex 6.',
    overview: 'AvioSMS and AvioFDMA form a mission-critical enterprise suite deployed across commercial carriers. It combines real-time safety incident reporting, risk matrix mitigation workflows, automated flight data exceedance telemetry decoding, and regulatory audit compliance into a unified, high-security web ecosystem.',
    challenges: [
      'Commercial airline operations generate thousands of disparate flight hours and safety observations in paper or fragmented spreadsheets, creating lag in discovering critical flight risk trends.',
      'Raw Quick Access Recorder (QAR) and black-box telemetry data arrive in vendor-specific proprietary binary encodings that required real-time ingestion, parsing, and correlation against statutory flight thresholds.',
      'Strict international surveillance audits by civil aviation authorities permit zero ambiguity or data tampering in safety investigation logs.'
    ],
    solutions: [
      'Engineered end-to-end ingestion pipelines for Flight Data Decoders, converting binary flight telemetries (pitch, roll, descent rates, airspeed exceedances) into interactive visual trend dashboards.',
      'Digitized the 4 comprehensive pillars of ICAO aviation SMS: Safety Policy, Safety Risk Management (SRM), Safety Assurance (SA), and Safety Promotion.',
      'Built automated risk assessment workflows assigning Severity × Likelihood scores to voluntary and mandatory occurrence reports with immutable audit trails.'
    ],
    architectureHighlights: [
      'Multi-tenant airline data partitioning with granular role-based access control (Captains, Safety Officers, VP Flight Ops, Quality Inspectors).',
      'High-throughput parser handling asynchronous telemetry uploads with validation gates.',
      'Automated alert dispatcher triggering emergency notifications on high-severity flight exceedance events.'
    ],
    regulatoryStandards: [
      'ICAO Doc 9859 (Safety Management Manual)',
      'ICAO Annex 6 (Operation of Aircraft)',
      'Civil Aviation Authority of Bangladesh (CAAB) Regulations',
      'ISO 9001:2015 Quality Management Systems'
    ],
    techStack: [
      'React & TypeScript',
      'Enterprise RESTful APIs',
      'Flight Data Binary Decoders',
      'PostgreSQL',
      'Role-Based ACL Security',
      'Jira / Confluence Agile Tooling'
    ],
    bullets: [
      'Engineered ingestion modules for Flight Data Decoders, parsing raw black box and QAR telemetries into visual pilot incident trends.',
      'Digitized all 4 pillars of aviation SMS: Policy, Risk Management, Safety Assurance, and Safety Promotion.'
    ],
    metrics: [
      { val: 90, label: 'Paperwork Automated', sub: 'Replaced manual safety reporting', suffix: '%+', color: 'text-[#10B981]' },
      { val: 0, label: 'ISO Findings', sub: 'Zero software non-conformances', suffix: '', color: 'text-[#38BDF8]' }
    ]
  },
  {
    id: 'amr-system',
    title: 'Aviation Medical Record (AMR) System',
    shortTitle: 'AMR Aviation Medical',
    tagText: 'Healthcare Compliance',
    tagColor: 'text-[#10B981]',
    tagBg: 'bg-[#10B981]/10',
    dotColor: 'bg-[#10B981]',
    subTag: 'Airline Crew Health',
    category: 'compliance',
    role: 'Technical Product Manager',
    clients: 'US-Bangla Airlines & Air Astra',
    period: '2023 – 2024',
    desc: 'Architected and rolled out a high-security, HIPAA-aligned aviation medical tracking platform specifically tailored for commercial flight crews, captains, cabin personnel, and airline chief medical officers.',
    overview: 'A specialized aeromedical records and statutory compliance management platform. It manages strict recurring flight medical licensing for commercial pilots, flight engineers, and cabin attendants, ensuring zero grounded flights due to lapsed medical certificates or missed statutory testing windows.',
    challenges: [
      'A single grounded flight due to an expired pilot aeromedical certificate costs airlines tens of thousands of dollars in delays, rescheduling, and regulatory fines.',
      'Sensitive medical diagnoses, psychological evaluations, and fitness certs demanded impenetrable role separation so airline management could see readiness status without violating patient confidentiality.',
      'Mandatory random drug and alcohol screenings required randomized selection algorithms that could stand up to civil aviation regulatory scrutiny.'
    ],
    solutions: [
      'Configured proactive multi-tier notification engines alerting crew members and medical administrators at 90, 60, 30, and 7-day intervals prior to aeromedical expiration.',
      'Implemented cryptographically verifiable random screening selectors with certified audit logs.',
      'Delivered granular permission matrices separating Chief Medical Officer clinical notes from Chief Pilot operational clearance dashboards.'
    ],
    architectureHighlights: [
      'HIPAA & GDPR-ready encrypted data at rest and in transit.',
      'Audit log micro-service recording every record access, modification, and certificate renewal timestamp.',
      'Automated document scanning and OCR ingestion for third-party clinic medical clearances.'
    ],
    regulatoryStandards: [
      'ICAO Annex 1 (Personnel Licensing - Medical Provisions)',
      'CAAB Aeromedical Standards for Class 1 & Class 2 Medicals',
      'HIPAA Confidentiality Compliance Guidelines',
      'FAA / EASA Alignment Standards'
    ],
    techStack: [
      'React Enterprise SPA',
      'Node / Spring Microservices',
      'PostgreSQL with Column Encryption',
      'PDF Generation & Digital Signatures',
      'Automated CRON Alerting Service'
    ],
    bullets: [
      'Automated alerts for mandatory periodic Class 1 & Class 2 aeromedical fitness expiration schedules.',
      'Streamlined random drug and alcohol compliance testing logs with cryptographic audit trails.'
    ],
    metrics: [
      { val: 100, label: 'Regulatory Clearance', sub: 'Direct Civil Aviation compliance', suffix: '%', color: 'text-[#10B981]' },
      { val: 0, label: 'Grounded Flights', sub: 'Due to expired crew fitness certs', suffix: 'Zero', isText: true, color: 'text-[#38BDF8]' }
    ]
  },
  {
    id: 'cartup-discovery',
    title: 'Cartup.com – Advanced Search & Faceted Discovery',
    shortTitle: 'Cartup.com Search Engine',
    tagText: 'E-Commerce Scale',
    tagColor: 'text-blue-400',
    tagBg: 'bg-blue-400/10',
    dotColor: 'bg-blue-400',
    subTag: 'Discovery & Search',
    category: 'ecommerce',
    role: 'Lead Business Analyst & Product Lead',
    clients: 'Retail E-Commerce',
    period: '2018 – 2020',
    desc: 'Redesigned the primary discovery engine for a high-inventory multi-category marketplace. Mapped customer navigation journeys and specified advanced attribute-based faceted querying logic.',
    overview: 'Cartup.com is a high-volume retail e-commerce platform boasting tens of thousands of SKUs across electronics, apparel, and home essentials. This initiative transformed an outdated keyword-only search engine into an intelligent, attribute-faceted discovery ecosystem that lifted conversions and cut bounce rates.',
    challenges: [
      'Users experienced high bounce rates due to brittle exact-match search queries that failed on common misspellings or synonyms.',
      'Complex filter requests (brand, size, price range, availability) suffered from multi-second latency, causing drop-offs on mobile devices.',
      'Merchants lacked control over sponsored placements and high-margin product boosts.'
    ],
    solutions: [
      'Formulated an exhaustive product taxonomy hierarchy with normalized attributes and dynamic facet indexing.',
      'Implemented intelligent phonetic matching and typo tolerance, cutting "zero results found" screens by 60%.',
      'Partnered with engineering squads to optimize caching layers, achieving sub-200ms faceted filter response times.'
    ],
    architectureHighlights: [
      'Elasticsearch inverted indices with weighted boost rules on product titles, categories, and tags.',
      'Edge-cached search API endpoints minimizing database strain during flash sales.',
      'A/B testing test harness tracking click-through rates (CTR) and add-to-cart conversions per search variant.'
    ],
    regulatoryStandards: [
      'PCI-DSS Compliance for Transactional Interfaces',
      'Web Content Accessibility Guidelines (WCAG 2.1 AA)'
    ],
    techStack: [
      'Elasticsearch',
      'React UI Components',
      'Redis Distributed Caching',
      'Google Analytics 360',
      'Hotjar Heatmaps',
      'Jira Agile'
    ],
    bullets: [
      'Formulated full product taxonomy tree with dynamic filter indexing for sub-second query latency.',
      'Implemented intelligent fallback search queries reducing "zero results returned" occurrences.'
    ],
    metrics: [
      { val: 34, label: 'Bounce Rate Drop', sub: 'Immediate post-release improvement', suffix: '%', prefix: '-', color: 'text-[#38BDF8]' },
      { val: 22, label: 'Search-to-Cart', sub: 'Intent conversion uplift', suffix: '%', prefix: '+', color: 'text-[#10B981]' }
    ]
  },
  {
    id: 'transport-fuel-engine',
    title: 'Transport Management & Fuel Efficiency Engine',
    shortTitle: 'Fleet & Jet Fuel Engine',
    tagText: 'Fleet & Logistics',
    tagColor: 'text-[#38BDF8]',
    tagBg: 'bg-[#38BDF8]/10',
    dotColor: 'bg-[#38BDF8]',
    subTag: 'Aviation Ground Operations',
    category: 'fleet',
    role: 'Project Co-Ordinator & Product Owner',
    clients: 'Operations & Logistics',
    period: '2023',
    desc: 'Led product lifecycle for a centralized airline ramp logistics and ground vehicle management suite with integrated jet fuel uplift and consumption tracking algorithms.',
    overview: 'A mission-critical ground operations and logistics portal handling hundreds of airport tarmac vehicles, passenger transport buses, baggage tugs, and aircraft refuelers. Features automated legal fitness checks alongside an enterprise jet fuel variance reconciliation calculator.',
    challenges: [
      'Airside vehicles operating without valid BRTA or airport security permits risk grounding flight turnarounds and triggering substantial civil aviation penalties.',
      'Jet fuel represents one of the largest single operating expenses for airlines; manual paper fuel slips frequently suffered from manual data entry discrepancies against flight plan estimates.'
    ],
    solutions: [
      'Automated proactive permit renewal workflows with digital document repositories and expiring license escalations.',
      'Built a three-way variance reconciliation calculator linking supplier fuel delivery slips, Captain cockpit fuel logs, and dispatch flight plan estimates.',
      'Surfaced instantaneous fuel burn variance anomalies to the Director of Flight Operations.'
    ],
    architectureHighlights: [
      'GPS and odometer telemetry integration tracking maintenance intervals and ground route efficiency.',
      'Automated invoice variance matching alerting accounting before payouts are made.',
      'Mobile-optimized ramp operator web portal for fast check-in and check-out logs.'
    ],
    regulatoryStandards: [
      'Civil Aviation Airside Vehicle Licensing Directives',
      'Bangladesh Road Transport Authority (BRTA) Regulations',
      'Airline Financial Audit Compliance'
    ],
    techStack: [
      'React & Tailwind',
      'REST APIs & Webhooks',
      'PostgreSQL Relational DB',
      'PDF Receipt Extractor',
      'Sprint Burndown Governance'
    ],
    bullets: [
      'Automated regulatory road permits, fitment checks, and BRTA vehicle fitness tracking across corporate fleets.',
      'Built variance reconciliation engine connecting supplier fuel delivery slips with on-board flight logs.'
    ],
    metrics: [
      { val: 100, label: 'BRTA Fleet Compliant', sub: 'Zero legal ground disruptions', suffix: '%', color: 'text-[#10B981]' },
      { val: 0, label: 'Fuel Variance Cut', sub: 'Prevented invoicing leakage', suffix: 'Significant', isText: true, color: 'text-[#38BDF8]' }
    ]
  }
];
