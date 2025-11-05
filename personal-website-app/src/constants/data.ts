import { Experience } from '../../types/global';

export const EXPERIENCES: Experience[] = [
  { 
    logo: "/indosat_logo.png",
    company: "Indosat Ooredoo Hutchison",
    duration: "Sep 2025 - Current",
    role: "Data Scientist",
    location: "Jakarta, Indonesia",
    companyUrl: "https://ioh.co.id/portal/en/iohindex"
  },
  { 
    logo: "/metrodata_logo.png",
    company: "PT Metrodata Electronics, Tbk.",
    duration: "Apr 2024 - Sep 2025",
    role: "Technical Consultant",
    location: "Jakarta, Indonesia",
    companyUrl: "https://www.metrodata.co.id/"
  },
  { 
    logo: "/logo_axrail_2.png",
    company: "Axrail Pte Ltd",
    duration: "Feb 2023 - Jun 2023",
    role: "AI/Data Engineer",
    location: "Kuala Lumpur, Malaysia",
    companyUrl: "https://www.axrail.ai/"
  },
  { 
    logo: "/techbros_logo.png",
    company: "Techbros Gmbh",
    duration: "Jun 2021 - Oct 2021",
    role: "Data Science Intern",
    location: "Dusseldorf, Germany",
    companyUrl: "https://techbros.io"
  },
  { 
    logo: "/telkom_university_logo.png",
    company: "Telkom University",
    duration: "Aug 2019 - Jul 2021",
    role: "Lecturer Assistant",
    location: "Bandung, Indonesia",
    companyUrl: "https://telkomuniversity.ac.id/"
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "AI-Powered Data Analytics Platform",
    description: "Machine learning platform for predictive analytics",
    image: "/project_x.jpg",
    technologies: ["Python", "TensorFlow", "React", "AWS"],
    status: "In Development"
  },
  {
    id: 2,
    title: "Enterprise Software Solution",
    description: "Full-stack application for business process automation",
    image: "/project_x.jpg",
    technologies: ["Node.js", "React", "PostgreSQL", "Docker"],
    status: "In Development"
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Cross-platform mobile application with real-time features",
    image: "/project_x.jpg",
    technologies: ["React Native", "Firebase", "TypeScript"],
    status: "In Development"
  }
];

export const CERTIFICATIONS = [
  { src: "/certifications-azure-ai-engineer-assoc.png", alt: "Azure AI Engineer Associate certification", title: "Azure", subtitle: "AI Engineer Associate", date: "Issued Jun 2025" },
  { src: "/certifications-microsoft-ai.webp", alt: "Microsoft Azure AI Fundamentals certification", title: "Microsoft Azure", subtitle: "AI Fundamentals", date: "Issued Jun 2024" },
  { src: "/certifications-aws-sa.png", alt: "AWS Solution Architect certification", title: "AWS", subtitle: "Solution Architect", date: "Issued Apr 2024" },
  { src: "/certifications-google-data.png", alt: "Google Data Analytics certification", title: "Google", subtitle: "Data Analytics", date: "Issued Feb 2023" },
  { src: "/certifications-tensorflow.png", alt: "TensorFlow Developer certification", title: "TensorFlow", subtitle: "Developer", date: "Issued Jul 2022" },
  { src: "/certifications-google-data.png", alt: "Google Python Automation certification", title: "Google", subtitle: "Python Automation", date: "Issued Mar 2022" },
];

export const WORKS_CATEGORIES = [
  {
    title: "Data & ML",
    image: "/works_data_ml_bg.png",
    alt: "Data and Machine Learning background"
  },
  {
    title: "Designs & Art", 
    image: "/works_design_bg.png",
    alt: "Design and Art background"
  },
  {
    title: "Software Engineering",
    image: "/works_software_bg.png", 
    alt: "Software Engineering background"
  },
  {
    title: "Research and Blogs",
    image: "/works_research_bg.png",
    alt: "Research and Blogs background"
  }
];

export const ARTICLES = [
  {
    id: "1",
    title: "Building Scalable Machine Learning Pipelines with MLOps",
    subtitle: "A comprehensive guide to implementing production-ready ML systems",
    image: "/project_x.jpg",
    category: "Data & ML",
    date: "October 15, 2025",
    readTime: "8 min read",
    summary: "In this article, we explore the essential components of building scalable machine learning pipelines using modern MLOps practices. Learn how to automate model training, deployment, and monitoring while ensuring reproducibility and reliability. We'll cover tools like MLflow, Kubernetes, and CI/CD integration to create robust ML systems that can handle production workloads efficiently."
  },
  {
    id: "2",
    title: "Understanding Transformer Architecture in Deep Learning",
    subtitle: "From attention mechanisms to modern language models",
    image: "/project_x.jpg",
    category: "Data & ML",
    date: "September 28, 2025",
    readTime: "12 min read",
    summary: "Dive deep into the transformer architecture that revolutionized natural language processing. This article breaks down the self-attention mechanism, positional encoding, and multi-head attention that power models like GPT and BERT. We'll explore the mathematical foundations and practical implementations, making it accessible for both beginners and experienced practitioners."
  },
  {
    id: "3",
    title: "Cloud Native Architecture: Best Practices for AWS",
    subtitle: "Designing resilient and cost-effective cloud solutions",
    image: "/project_x.jpg",
    category: "Software Engineering",
    date: "September 10, 2025",
    readTime: "10 min read",
    summary: "Master the art of building cloud-native applications on AWS. This guide covers architectural patterns like microservices, serverless computing, and containerization. Learn about AWS services including Lambda, ECS, and EKS, along with best practices for security, scalability, and cost optimization. Perfect for solution architects and cloud engineers looking to design enterprise-grade systems."
  },
  {
    id: "4",
    title: "Data Engineering: From ETL to Modern Data Lakes",
    subtitle: "Building efficient data pipelines for analytics",
    image: "/project_x.jpg",
    category: "Data & ML",
    date: "August 22, 2025",
    readTime: "9 min read",
    summary: "Explore the evolution of data engineering from traditional ETL processes to modern data lake architectures. Learn about Apache Spark, Delta Lake, and cloud data warehouses like Snowflake and BigQuery. This article provides practical insights into designing data pipelines that can handle massive volumes while maintaining data quality and governance."
  },
  {
    id: "5",
    title: "Introduction to Reinforcement Learning",
    subtitle: "Teaching machines to learn through trial and error",
    image: "/project_x.jpg",
    category: "Data & ML",
    date: "August 5, 2025",
    readTime: "11 min read",
    summary: "Get started with reinforcement learning, one of the most exciting areas of AI. This article explains core concepts like agents, environments, rewards, and policies. We'll walk through practical examples using OpenAI Gym and implement basic algorithms like Q-learning and Deep Q-Networks (DQN). Perfect for those looking to understand how machines learn to play games and make decisions."
  },
  {
    id: "6",
    title: "Microservices vs Monoliths: Making the Right Choice",
    subtitle: "Architectural decisions for scalable applications",
    image: "/project_x.jpg",
    category: "Software Engineering",
    date: "July 18, 2025",
    readTime: "7 min read",
    summary: "Navigate the complex decision between microservices and monolithic architectures. This article presents a balanced view of both approaches, discussing trade-offs in terms of complexity, scalability, deployment, and team organization. Learn when to choose each architecture based on your project requirements, team size, and business goals."
  },
  {
    id: "7",
    title: "The Art of UI/UX Design: Creating Intuitive Interfaces",
    subtitle: "Principles and practices for exceptional user experiences",
    image: "/project_x.jpg",
    category: "Design & Art",
    date: "July 5, 2025",
    readTime: "8 min read",
    summary: "Explore the fundamental principles of UI/UX design that create memorable user experiences. This article covers color theory, typography, layout composition, and interaction design. Learn how to balance aesthetics with functionality, conduct user research, and iterate on designs based on feedback. Perfect for designers and developers looking to create interfaces that users love."
  },
  {
    id: "8",
    title: "Research Methods in Data Science",
    subtitle: "From hypothesis to publication-ready findings",
    image: "/project_x.jpg",
    category: "Research & Blogs",
    date: "June 28, 2025",
    readTime: "10 min read",
    summary: "A comprehensive guide to conducting rigorous research in data science. Learn about experimental design, statistical significance, reproducibility, and ethical considerations. This article walks through the entire research lifecycle from formulating hypotheses to publishing findings, with practical tips for avoiding common pitfalls and ensuring your work stands up to peer review."
  }
];