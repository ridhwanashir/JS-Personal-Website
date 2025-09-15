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