import { Experience, Post } from '../../types/global';

export const EXPERIENCES: Experience[] = [
  { 
    logo: "/indosat_logo.png",
    company: "Indosat Ooredoo Hutchison",
    duration: "Sep 2025 - Present",
    role: "Data Scientist",
    location: "Jakarta, Indonesia",
    companyUrl: "https://ioh.co.id/portal/en/iohindex",
    summary: "Indosat is one of the leading Indonesian telecommunications and digital services companies serving millions of customers nationwide.",
    achievements: [
      "Driving data-driven initiatives by finding actionable insights from telco big data to support business decisions",
      "Leveraging advanced analytics and machine learning for business insights and B2B opportunities",
      "Developing agentic AI capabilities to existing products and services using Google Agent Development Kit (ADK)",
    ],
    technologies: ["Python", "Google Cloud Platform", "Machine Learning", "Data Analytics", "Agentic AI", "Google Agent Development Kit (ADK)"],
    highlight: "Current Role"
  },
  { 
    logo: "/metrodata_logo.png",
    company: "PT Metrodata Electronics, Tbk.",
    duration: "Apr 2024 - Sep 2025",
    role: "Technical Consultant",
    location: "Jakarta, Indonesia",
    companyUrl: "https://www.metrodata.co.id/",
    summary: "Metrodata is a leading information communication technology (ICT) company in Indonesia, delivering enterprise solutions.",
    achievements: [
      "Integrated AI capabilities on new and existing products leveraging Azure services (Azure AI, Function App, App Service, CosmosDB, SQL, AI Search) with RAG and Agentic AI using Langchain and Langgraph",
      "Leveraged Microsoft Fabric to gain insights and Fabric SDK to retrieve context for Agentic AI tools",
      "Delivered Projects and POCs for banking, digital payment, government ministries, manufacturing, plantation, and consumer goods sectors",
      "Led multiple projects and established new development culture, improving resource management efficiency and speeding up project execution by 50%",
      "Provided mentorship on Microsoft events covering Generative AI, Azure OpenAI, and Langchain/Langgraph"
    ],
    technologies: ["Azure AI", "Langchain", "Langgraph", "CosmosDB", "Microsoft Fabric", "Python"],
    highlight: "Won Best Team Award - MII Star Q4 2024"
  },
  { 
    logo: "/logo_axrail_2.png",
    company: "Axrail Pte Ltd",
    duration: "Mar 2023 - Jun 2023",
    role: "AI/Data Engineer",
    location: "Kuala Lumpur, Malaysia",
    companyUrl: "https://www.axrail.ai/",
    summary: "Axrail is a data and AI solutions company leveraging AWS cloud technologies to help businesses grow revenue streams and reduce IT infrastructure costs.",
    achievements: [
      "Developed custom automation system to track employee performance and generate reports using Google Spreadsheet, Apps Script, and AWS services, improving resource allocation by 50%",
      "Built WhatsApp Chatbot CRM enabling multi-language responses with broad functionality using ChatGPT LLM with Langchain and AWS services",
      "Created Question Generation application that scans books/PDFs and generates custom questions automatically using OpenAI GPT with Langchain and prompt engineering"
    ],
    technologies: ["AWS", "Langchain", "OpenAI GPT", "Python", "Apps Script"],
    highlight: "50% Resource Allocation Improvement and Leveraged LLM for Business Solutions"
  },
  { 
    logo: "/techbros_logo.png",
    company: "Techbros",
    duration: "Sep 2021 - Nov 2021",
    role: "One Day CEO (Apprenticeship)",
    location: "Düsseldorf, North Rhine-Westphalia, Germany",
    companyUrl: "https://techbros.io",
    summary: "A short leadership program by Techbros focused on entrepreneurship, leadership, and practical business planning.",
    achievements: [
      "Participated in mentorship sessions with the Techbros CEO on entrepreneurship and leadership",
      "Developed a business model canvas for a project leveraging Techbros resources",
      "Served as 'One Day CEO' presenting project plans and receiving team feedback"
    ],
    technologies: ["Leadership", "Business Modeling"],
    highlight: "One Day CEO Finalist"
  },
  { 
    logo: "/techbros_logo.png",
    company: "Techbros GmbH",
    duration: "Jun 2021 - Oct 2021",
    role: "Data Science Engineer Intern",
    location: "Düsseldorf, North Rhine-Westphalia, Germany",
    companyUrl: "https://techbros.io",
    summary: "Contributed to data and web projects including product aggregation, web scraping, and sentiment analysis to support business insights.",
    achievements: [
      "Built a product aggregator website and designed UI mockups",
      "Implemented a web scraper for Blibli and developed sentiment analysis for telecom providers",
      "Improved data workflows using Python, NumPy, and Pandas"
    ],
    technologies: ["Python", "NumPy", "Pandas", "Web Scraping", "Sentiment Analysis"],
    highlight: "Internship Completion Certificate"
  },
  { 
    logo: "/telkom_university_logo.png",
    company: "Telkom University",
    duration: "Aug 2019 - Jul 2021",
    role: "Lecturer Assistant",
    location: "Bandung, Indonesia",
    companyUrl: "https://telkomuniversity.ac.id/",
    summary: "Telkom University is a top-ranked private university in Indonesia, consistently recognized among the best universities nationwide.",
    achievements: [
      "Assisted 4 different lecturers on Basic Algorithm, Data Structure, Object Oriented Programming, Algorithm Complexity Analysis, and Digital System",
      "Served as substitute instructor in several classes",
      "Reviewed and assessed tasks, quizzes, and student final projects",
      "Led mentor division at FORTRAN 2020 - Computer Science new student orientation"
    ],
    technologies: ["Python", "Java", "C++", "Data Structures", "Algorithms"],
    highlight: ""
  },
];

export const POSTS: Post[] = [
  {
    id: "1",
    type: "article",
    title: "Go for Ph.D. or Work in the Industry?",
    subtitle: "What's next? A master's degree graduate dilemma",
    image: "/project_x.jpg",
    category: "Research & Blogs",
    date: "April 14, 2024",
    readTime: "2 min read",
    content: `As a fresh master's graduate from Telkom University with a degree in Informatics, I stand at a crossroads. The thrill of academic achievement is behind me, and ahead of me lies a pivotal decision: pursue a Ph.D. or dive into the industry?

## The Crossroads

For some, the path is clear-cut. A Ph.D. is a no-brainer for those with a passion for academia, a desire to delve deeper into research, and the drive to contribute to the vast ocean of knowledge. Yet, for others like myself, it can be really confusing as the decision is shrouded in uncertainty.

## Factors to Consider

The choice between academia and industry is influenced by many factors. A significant consideration is the **widening salary gap**. On average, professionals in the industry earn about 30% more than their counterparts in academia. This difference in salary is even more pronounced at the onset of one's career, where industry roles often offer a more appealing starting point.

![Career Decision](/project_x.jpg)

Top-tier academic institutions also present formidable barriers with their stringent requirements, which can be discouraging for aspiring academics. Furthermore, government policies sometimes emphasize the quantity of research output over quality, potentially leading to less impactful research and more paperwork for academics.

## The Industry Perspective

In contrast, the industry landscape has evolved to value practical skills over formal qualifications. Companies are increasingly seeking candidates with:

- Technical prowess and adaptable skills
- Real-world problem-solving abilities
- Practical experience over theoretical knowledge

## My Personal Journey

Ultimately, the decision may rest on individual opportunities and personal inclinations. Me personally, I'm currently open to any opportunity that presents itself first. By applying to countless job vacancies while still looking for Ph.D. scholarships.

> Within this NEET period, I have found that maybe what truly matters is adopting a lifelong learning mindset.

During this time also, I am really glad that I have friends and family that support me emotionally, financially, and intellectually.

## Final Thoughts

For those who also share my confusion, remember that regardless of the path you choose, the right mindset will pave the way to success. By having the right mindset, no matter what path we choose, we will thrive and excel!

So here's to seizing opportunities, embracing the journey, and navigating the future with an open heart and an eager mind. May we all find our way, be it in the hallowed halls of academia or the dynamic realm of the industry.`
  },
  {
    id: "2",
    type: "project",
    title: "AI-Powered Data Analytics Platform",
    subtitle: "Machine learning platform for predictive analytics",
    image: "/project_x.jpg",
    category: "Data & ML",
    date: "2024",
    readTime: "5 min read",
    technologies: ["Python", "TensorFlow", "React", "AWS"],
    status: "In Development",
    content: `# AI-Powered Data Analytics Platform

A comprehensive machine learning platform designed for predictive analytics, enabling businesses to make data-driven decisions with confidence.

## Overview

This platform leverages cutting-edge machine learning algorithms to provide actionable insights from complex datasets. Built with scalability in mind, it handles everything from small business analytics to enterprise-level data processing.

## Key Features

- **Predictive Modeling**: Advanced algorithms for forecasting trends
- **Real-time Analytics**: Live dashboard with instant updates
- **Custom Visualizations**: Interactive charts and graphs
- **API Integration**: Seamless connection with existing systems

## Tech Stack

The platform is built using modern technologies:
- **Python** for backend processing and ML models
- **TensorFlow** for deep learning capabilities
- **React** for the frontend dashboard
- **AWS** for cloud infrastructure and scaling

*More details coming soon as the project progresses.*`
  },
  {
    id: "3",
    type: "project",
    title: "Enterprise Software Solution",
    subtitle: "Full-stack application for business process automation",
    image: "/project_x.jpg",
    category: "Software Engineering",
    date: "2024",
    readTime: "4 min read",
    technologies: ["Node.js", "React", "PostgreSQL", "Docker"],
    status: "In Development",
    content: `# Enterprise Software Solution

A full-stack application designed to automate and streamline business processes, reducing manual work and increasing operational efficiency.

## Project Goals

- Automate repetitive business tasks
- Provide real-time process monitoring
- Enable seamless team collaboration
- Ensure data security and compliance

## Architecture

Built on a microservices architecture for maximum flexibility and scalability.

*More details coming soon as the project progresses.*`
  },
  {
    id: "4",
    type: "project",
    title: "Mobile App Development",
    subtitle: "Cross-platform mobile application with real-time features",
    image: "/project_x.jpg",
    category: "Software Engineering",
    date: "2024",
    readTime: "3 min read",
    technologies: ["React Native", "Firebase", "TypeScript"],
    status: "In Development",
    content: `# Mobile App Development

A cross-platform mobile application featuring real-time synchronization and modern UI/UX design.

## Features

- Cross-platform compatibility (iOS & Android)
- Real-time data synchronization
- Push notifications
- Offline-first architecture

*More details coming soon as the project progresses.*`
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