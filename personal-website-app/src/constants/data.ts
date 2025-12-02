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
    id: "go-for-phd-or-work-in-industry",
    type: "article",
    title: "Go for Ph.D. or Work in the Industry?",
    subtitle: "What's next? A master's degree graduate dilemma",
    image: "/img_post_phd.webp",
    category: "Research & Blogs",
    date: "April 14, 2024",
    readTime: "2 min read",
    mediumUrl: "https://medium.com/@ridhwanashir/go-for-ph-d-or-work-in-the-industry-79742b95e399",
    content: `As a fresh master's graduate from Telkom University with a degree in Informatics, I stand at a crossroads. The thrill of academic achievement is behind me, and ahead of me lies a pivotal decision: pursue a Ph.D. or dive into the industry?

## The Crossroads

For some, the path is clear-cut. A Ph.D. is a no-brainer for those with a passion for academia, a desire to delve deeper into research, and the drive to contribute to the vast ocean of knowledge. Yet, for others like myself, it can be really confusing as the decision is shrouded in uncertainty.

## Factors to Consider

The choice between academia and industry is influenced by many factors. A significant consideration is the **widening salary gap**. [On average, professionals in the industry earn about 30% more than their counterparts in academia.](!https://graduate.northeastern.edu/knowledge-hub/working-in-industry-vs-academia/) This difference in salary is even more pronounced at the onset of one's career, where industry roles often offer a more appealing starting point.

![Career Decision](/img_post_phd_2.webp)

Top-tier academic institutions also present formidable barriers with their stringent requirements, which can be discouraging for aspiring academics. Furthermore, government policies sometimes emphasize the quantity of research output over quality, potentially leading to less impactful research and more paperwork for academics.

## The Industry Perspective

[In contrast, the industry landscape has evolved to value practical skills over formal qualifications.](!https://graduate.northeastern.edu/resources/working-in-industry-vs-academia/) Companies are increasingly seeking candidates with:

- Technical prowess and adaptable skills
- Real-world problem-solving abilities
- Practical experience over theoretical knowledge

## My Personal Journey

Ultimately, the decision may rest on individual opportunities and personal inclinations. Me personally, I'm currently open to any opportunity that presents itself first. By applying to countless job vacancies while still looking for Ph.D. scholarships.

> Within this [NEET](!https://en.wikipedia.org/wiki/NEET) period, I have found that maybe what truly matters is adopting a lifelong learning mindset.

During this time also, I am really glad that I have friends and family that support me emotionally, financially, and intellectually.

## Final Thoughts

For those who also share my confusion, remember that regardless of the path you choose, the right mindset will pave the way to success. By having the right mindset, no matter what path we choose, we will thrive and excel!

So here's to seizing opportunities, embracing the journey, and navigating the future with an open heart and an eager mind. May we all find our way, be it in the hallowed halls of academia or the dynamic realm of the industry.`
  },
  {
    id: "journey-of-self-reflection-lifes-checkpoint",
    type: "article",
    title: "A Journey of Self-Reflection: Life's Checkpoint",
    subtitle: "Hello, it's me again, Ridhwan",
    image: "/img_post_its_me.webp",
    category: "Research & Blogs",
    date: "April 10, 2024",
    readTime: "6 min read",
    mediumUrl: "https://medium.com/@ridhwanashir/hello-its-me-again-ridhwan-1b8dc03e019f",
    content: `Hey there! Still remember me? It's really been a while, or its just how I feel?

Now here I am with microphone in hand, ready to tell another story. Well, the truth is, life's been a whirlwind these past few years, and I couldn't resist sharing some of the twists and turns.

So, as I sit down to reflect on my journey thus far, I am filled with gratitude for the transformative experiences that have shaped me into the person I am today.

## Childhood Foundations

Growing up in a strict religious household wasn't always sunshine and rainbows. Mainly because the lack of communication and understanding, I only feels praying was only to fulfill our responsibility to god and my parents command. I think their way of teaching miss the point on how to love and understand the reason behind it. Nevertheless, I'm glad that I used to pray, even though back then when it wasn't from my own heart.

My parents always emphasized the importance of experiences over material possessions, shaping my worldview and fostering a curiosity that would fuel my journey of self-discovery. Our economy wasn't good back then (even our house doesn't have ceramic floor and barely painted), but they managed to afford a computer, an internet connection, and sandbox toys instead of a console game such as Nintendo or PlayStation (PS stands for 'play satan' they said 😁).

I play a lot of strategy games such as Age of Empires, Command and Conquer, Roller Coaster Tycoon, World of Warcraft/Dota, etc. I mirror my brother by watching old youtube channel like PewDiePie, Smosh, MysteryGuitarMan, etc. It boost my problem solving skills and expose me to the English language.

Looking it back, a really wise choice by my parents because it shaped me to reveled in the joy of exploration and the thrill of unraveling life's mysteries.

## School Adventures

As I navigated the halls of elementary, junior high, and senior high school, I encountered a tapestry of experiences that would leave unforgettable mark on my memories. From forging lifelong friendships to grappling with academic rigors, each chapter of my educational journey brought with it valuable lessons in resilience, empathy, and self-expression.

Junior high — the breeding ground for mischief, mayhem, and lifelong friendships. I got the chance to get to the best junior high school in town (at least, it was back then). Here, amidst a whirlwind of hormones and homework, I forged bonds (and bands, called Vanable) that would withstand the test of time.

> I learned more about life in those formative years than any textbook could ever teach me.

And let's not forget the extracurricular sleepovers at school (complete with midnight exploration and ghost stories), student trips that bordered on the absurd, and the epic school farewell that left us all with memories to last a lifetime.

Fast forward to senior high school, where I found myself facing the age-old question: what do I want to be when I grow up? (although it was a bit late to realize that on the last semester)

I found my passion in architecture engineering and was studying REAL hard to get there. My try out tests were also show promising results! BUT despite my passion for architecture/structural engineering, dear old Dad had other plans — namely, enrolling me in Telkom University, where he happened to be a lecturer, because he say "if you choose engineering, then Telkom is the way to go", damn.

## College Chronicles

Ah, college — where dreams were born, friendships forged, and sleep is a distant memory. But why am I here? it's not the choice that I made (I was really upset with this for a while)

But hey, life's full of surprises, right? While Telkom wasn't exactly what I had in mind, but it turned out to be a blessing in disguise. As I strutted onto the campus of Telkom University, I knew I was in for a wild ride. From late-night study sessions to impromptu dance parties, I dove headfirst into the chaos and emerged with a newfound love for all things computer science.

Sure, there were rough patches — like bad break up, arguments with family, and getting scammed, — but through it all, I emerged stronger, wiser, and more resilient.

As I delved deeper into my studies, I seized every opportunity to expand my horizons — joining campus organizations, assisting lecturers, and diving headfirst into internships that challenged me to think outside the box. When graduation day finally arrived, I did so with a near-perfect CGPA and a newfound sense of purpose, so the journey didn't end there. Driven by a thirst for knowledge and a desire to make a difference, I embarked on a fast-track program for my master's degree in informatics.

JUST KIDDING HAHA, I was my parents will that I enroll for master degree.

## Master's/Career Madness

When I thought things couldn't get any crazier, I found myself knee-deep in the world of master's degree madness. Especially when it's not coming from your own heart (again), because I want to work ASAP and get some 💲💲💲. Until I realized, the chance to enroll for a master is such a privilege that not everyone can have. So, here I dove headfirst into the academic abyss to fulfill my parents will and make them happy 🥰.

From late-night thesis sessions to caffeine-fueled study binges, doing master really pushed me, until it hits me real hard in the face. I'm down, unmotivated, FOMO, need some money, I need to get to work.

After tossing my cap in the air and bidding farewell to the hallowed halls of academia (temporarily), I was thrust into the world of professionals— and it was a wild ride. I started working on a Malaysian tech company remotely, and I was stumbled, fumbled, and stressed out HAHA.

In there, I'm doing new things with new technologies (Langchain), that I must learn from the very beginning, and if there was an error, most of the time there are no solution online 😥(even in the forum discussion). I also take a psychology test that im an extrovert?? so, working remotely may drained me more. There is also my parents will that wants me to finish my master first.

After careful consideration, I finally decided to resign from my job after ~4 months, after I completed all the task and project that I've been worked on. — there is a moment that really makes me happy, at my last moment in the company, the product that I've built is demonstrated in front of everyone, and they giving me applause and congratulations. The feeling of all your hardworks getting a proper appreciation and also can have real good impact, is what I've always been want. I found that it's what makes me feels fulfilled.

> I found more about myself, especially my work values and what truly drives me.

I continued to finish my thesis and let me tell you, defending my thesis felt like slaying a dragon — exhilarating, nerve-wracking, and oh-so-satisfying all at once. Then, on February 26th, I was officially an Informatics Master 😄

## Future Frontiers

As I stand on the edge of the unknown, a whirlwind of emotions swirls within me. There's a knot of uncertainty in the pit of my stomach, mingled with a tinge of fear and a dash of excitement. With each step forward, I'm propelled into a world of endless possibilities, where the only constant is change.

Armed with my newly acquired master's degree and a heart full of dreams, I embark on this journey with a sense of excitement and anticipation. What lies ahead is a mystery waiting to unfold — a tapestry of challenges, triumphs, and everything in between.

But amidst the uncertainty, there's a flicker of hope burning bright within me. For I know that with each hurdle I overcome and each obstacle I face, I grow stronger, wiser, and more resilient. And so, I embrace the future with open arms, ready to seize every opportunity that comes my way.

So here's to the next chapter, filled with laughter, learning, and the thrill of the unknown. This post also coincide with the Ied Al-Fitr, marking a fresh new start!

**Until next time, stay curious, stay courageous, and above all, stay fabulous!**`
  },
  {
    id: "outstanding-charges-google-cloud-bigquery",
    type: "article",
    title: "Outstanding Charges on the Google Cloud Platform BigQuery",
    subtitle: "How I accidentally racked up USD 1400 in charges and got it resolved",
    image: "/img_post_gcp_header.webp",
    category: "Research & Blogs",
    date: "January 22, 2023",
    readTime: "5 min read",
    mediumUrl: "https://medium.com/@ridhwanashir/outstanding-charges-on-the-google-cloud-platform-bigquery-d580182ae793",
    content: `On Sunday morning, I woke up and checked my emails as I received a new email about a tax invoice from Google Payment. It shows an outstanding amount of charges of about IDR 21.000.000 or USD 1400.

![Tax invoice from Google Payment](/img_post_gcp_tax_invoice.webp)

I panicked and tried to find the cause of the charge and if there was any solution to dispute the charge because I was new at that time and still learning to use GCP services. I find there is very little information on how to handle this kind of situation. Hence I am sharing this information in my writings.

## Understanding the Problem

### What is Google Cloud Platform?

Google Cloud Platform (GCP) is a collection of cloud computing services offered by Google that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search and YouTube. GCP offers various services, including computing power, storage and databases, analytics, and machine learning. These services can be used to build and run applications, store and analyze data, and perform various other tasks. GCP also offers various tools for managing and deploying these services, such as the Google Cloud Console, the gcloud command-line tool, and the Cloud SDK.

### Google BigQuery

One of the services on GCP is Google BigQuery, a fully-managed, cloud-native data warehouse that enables super-fast SQL queries using the processing power of Google's infrastructure. It allows you to analyze large and complex datasets with high performance using a SQL-like syntax, and it integrates with other Google Cloud services like Cloud Storage and Cloud Dataflow. BigQuery is a part of the Google Cloud Platform (GCP), allowing everyone to easily store, manage, and analyze large and complex datasets. It is designed to handle big data and can handle billions of rows and terabytes of data with near-real-time query performance. It also supports various data formats such as CSV, JSON, Avro, Parquet, and more. It also allows doing machine learning on top of the big data.

## The Causes

My purpose in using Google BigQuery is for my thesis research that requires the Global Dataset on Events, Location, and Tone (GDELT), a big dataset that records events from all around the globe that is available on BigQuery. My mistake is that because I only plan to see the data and do a few queries, I do not learn how to do it correctly on BigQuery.

After I searched for information and carefully checked what are the causes of such outstanding charges, in my case of running queries for the public big dataset on BigQuery is that I am doing it the wrong way. **I copy the entire GDELT dataset into my account, therefore has huge costs on active storage services, with daily charges of about USD 170.**

![The Billing Reports on GCP Console](/img_post_gcp_tax_billing_report_console.webp)

The thing to note is that Google is already giving a free trial credit worth USD 300 for new users to try and learn the GCP, but in my case, it runs out in no time.

## The Solutions

### Google Support

On the GCP console, there is a support page that I used to get in contact with a Google Support technician. I managed to get a solution to my problem that apparently can dispute the charges on my account. Since the charge is valid, normally, it was not possible to dispute the charge. However, Google Support can request a **one-time service adjustment** for the charges. The process takes time about a week in my case.

![One-time service charge adjustment](/img_post_gcp_one_time_charge_adjustment.webp)

I was relieved and glad that such a solution exists and I do not have to pay such an amount for things that I don't really use because of my mistake. I really encourage people to be careful about things that involve a billing credit and try to understand the platform first.

## Additional Notes

### GCP Billing Reports

To understand how to read the report tab on the GCP Billing page, a BigQuery charge consists of 3 SKUs, namely active storage, analysis using queries, and log volume.

![BigQuery SKUs breakdown](/img_post_gcp_skus.webp)

[Learn more about cost breakdown reports here.](https://cloud.google.com/billing/docs/how-to/cost-breakdown)

### Using Public Big Dataset

For using a public big dataset, you don't need to have a billing account at all. Apparently, the public dataset can be accessed freely with the right approach.

[Learn how to access BigQuery Public Data Sets here.](https://www.optimizesmart.com/how-to-access-bigquery-public-data-sets/)

### Other Cases

I found that in other cases, sometimes people forget to turn off their billing account with running active storage or services. This can lead to this same problem in which charges can be disputed for one time only. Google also will notify the user via email if the charges exceed USD 100 limit or if a failed transaction occurs. But we can also create an alert on budget and alert features.

[Learn how to create budgets and budget alerts here.](https://cloud.google.com/billing/docs/how-to/budgets)

> I hope this writing can help you, and don't give up on learning!`
  },
  {
    id: "ai-powered-data-analytics-platform",
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
    id: "enterprise-software-solution",
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
    id: "mobile-app-development",
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