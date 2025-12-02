// Global type definitions for the personal website project

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.webp' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

// Component prop types
export interface Experience {
  logo: string;
  company: string;
  duration: string;
  role: string;
  location: string;
  companyUrl?: string;
  // Storytelling fields
  summary?: string;
  achievements?: string[];
  technologies?: string[];
  highlight?: string;
}

export interface Certification {
  image: string;
  title: string;
  issuer: string;
  date: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  url?: string;
  github?: string;
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  summary: string;
  category: string;
  date: string;
  readTime: string;
}

// Unified Post type for projects and articles
export interface Post {
  id: string;
  type: 'project' | 'article';
  title: string;
  subtitle: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  content: string; // Markdown content for full page render
  summary?: string; // Optional preview text for modal
  // Project-specific fields
  technologies?: string[];
  status?: string;
  url?: string;
  github?: string;
  // Article-specific fields
  mediumUrl?: string; // Link to Medium article
}

// Layout props
export interface LayoutProps {
  children: React.ReactNode;
}

// Page component props
export interface HomePageProps {
  experiences?: Experience[];
  certifications?: Certification[];
  projects?: Project[];
}