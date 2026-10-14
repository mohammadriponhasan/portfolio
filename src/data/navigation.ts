export interface NavLink {
  name: string;
  href: string;
  id: string;
}

export const navLinks: NavLink[] = [
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Competencies', href: '#competencies', id: 'competencies' },
  { name: 'Products & Impact', href: '#products', id: 'products' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Education', href: '#education', id: 'education' },
  { name: 'Certifications', href: '#certifications', id: 'certifications' },
];
