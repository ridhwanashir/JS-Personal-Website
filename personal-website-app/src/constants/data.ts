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
    id: "stock-sentiment-analysis-bmri",
    type: "project",
    title: "Stock Price Sentiment Analysis (Bank Mandiri)",
    subtitle: "The Influence of Sentiment on the Movement of Bank Mandiri (BMRI) Stock Price with Word2Vec Feature Expansion and NBSVM Classifier",
    image: "/project_x.jpg",
    category: "Data & ML",
    date: "2020",
    readTime: "8 min read",
    technologies: ["Python", "Word2Vec", "NBSVM", "TF-IDF", "Web Scraping", "NLP"],
    status: "Completed",
    content: `# Stock Price Sentiment Analysis (Bank Mandiri)

This academic research project analyzes the correlation between social media/news sentiment and stock price movements for Bank Mandiri (BMRI), one of Indonesia's largest state-owned banks.

## Research Overview

The study investigates whether public sentiment extracted from news articles and social media can predict or explain stock price fluctuations. This is a fundamental question in computational finance that bridges natural language processing with quantitative analysis.

## Methodology

The research pipeline consists of several sophisticated stages:

### 1. Data Collection
- **Web Crawling**: Automated collection of news articles and social media posts mentioning Bank Mandiri
- **Stock Data**: Historical BMRI stock prices from the Indonesia Stock Exchange (IDX)
- **Dataset Size**: 21,684 sentiment-labeled data points

### 2. Text Processing Pipeline
\`\`\`
Crawling Data → Dataset → Preprocessing → Feature Extraction → Classification → Evaluation
\`\`\`

### 3. Feature Engineering
- **TF-IDF Vectorization**: Converting text to numerical features
- **Word2Vec Expansion**: Using word embeddings to expand vocabulary and reduce out-of-vocabulary errors
- **Feature Fusion**: Combining traditional and neural features

### 4. Classification
The **Naïve Bayes-Support Vector Machine (NBSVM)** classifier was chosen for its effectiveness in text classification tasks, combining the probabilistic foundation of Naive Bayes with the discriminative power of SVMs.

## Key Findings

### Weak Correlation Discovery
One of the most significant findings was the **weak relationship between sentiment and immediate stock price movements**. This challenges the common assumption that positive news directly leads to price increases.

### Time-Shifting Effect
The analysis revealed a **time-shifting phenomenon** where sentiment impact on stock prices is not immediate but delayed. This suggests that:
- Market participants don't react instantaneously to sentiment
- There may be information processing delays
- Other market factors often dominate short-term price movements

### Model Performance
The classification model achieved an accuracy of **70.42%**, demonstrating reasonable predictive capability for sentiment classification despite the challenges of:
- **Tiny Dataset**: Only 21,684 labeled sentiments
- **Uneven Data Distribution**: Imbalanced class representation
- **Vocabulary Variations**: Indonesian language complexities

## Technical Challenges

### Data Quality Issues
- Limited labeled data availability
- Noise in social media text
- Sarcasm and context-dependent sentiment

### Feature Space
The Word2Vec expansion helped address vocabulary mismatch problems, reducing errors when encountering new or misspelled words.

## System Architecture

The solution integrates multiple components:
- NBSVM classification engine
- TF-IDF feature extraction
- Word2Vec embedding layer for vocabulary expansion
- Evaluation metrics pipeline

---

*This project was completed as part of undergraduate research. Full thesis and detailed methodology available upon request.*

**[🔗 More details coming soon...]**`
  },
  {
    id: "indonesian-stock-index-prediction-sbu-lstm",
    type: "project",
    title: "Indonesian Stock Index Prediction (SBU-LSTM)",
    subtitle: "IHSG Price Prediction using Stacked Bidirectional Unidirectional LSTM with GDELT News Sentiment",
    image: "/project_x.jpg",
    category: "Data & ML",
    date: "2022",
    readTime: "10 min read",
    technologies: ["TensorFlow", "Python", "BigQuery", "GDELT", "LSTM", "Deep Learning"],
    status: "Completed",
    content: `# Indonesian Stock Index Prediction (SBU-LSTM)

A master's thesis project focused on predicting the Indonesian Composite Stock Index (IHSG) using advanced deep learning architectures combined with global news sentiment analysis.

## Research Motivation

### The Problem
Transactional decisions in stock markets are often driven by **emotion rather than rational analysis**, causing excessive market volatility. This emotional trading behavior creates inefficiencies that sophisticated models might be able to exploit or at least predict.

### Research Question
Can we improve stock index predictions by incorporating global news sentiment as an additional feature alongside traditional technical indicators?

## Technical Approach

### Model Architecture: SBU-LSTM

The **Stacked Bidirectional Unidirectional Long Short-Term Memory** network was designed to:
- Capture temporal dependencies in both directions (bidirectional layers)
- Stack multiple LSTM layers for hierarchical feature learning
- Handle the sequential nature of time-series data

### Data Sources

#### 1. GDELT Event Dataset
The **Global Database of Events, Language, and Tone (GDELT)** provides:
- Real-time monitoring of global news
- Sentiment scores for events
- Geographic and thematic classification
- Historical data accessed via **Google BigQuery**

#### 2. IHSG Historical Data
- Daily opening, closing, high, and low prices
- Trading volume
- Technical indicators

## Processing Pipeline

\`\`\`
Data Preparation → Preprocessing → Data Splitting → Model Training → Evaluation
\`\`\`

### Feature Engineering
Multiple sentiment variables were extracted and tested:
- **4 Sentiment Variables**: Comprehensive sentiment features
- **Tone Change**: Relative sentiment shifts
- **Optimism Score**: Positive sentiment indicator
- Combined and individual variable experiments

## Experimental Results

The model was evaluated using standard regression metrics:

| Experiment | MAE | RMSE | MAPE |
|------------|-----|------|------|
| 4 Sentiment Variables | ... | ... | ... |
| Only Tone Change | ... | ... | ... |
| **Only Optimism** | ... | ... | **0.800%** |

### Key Finding
The **"Only Optimism"** variable experiment yielded the best performance with a MAPE of **0.800%**, suggesting that positive sentiment is the most predictive sentiment dimension for index movements.

## Technical Stack

- **TensorFlow/Keras**: Deep learning framework
- **Python**: Primary programming language
- **Google BigQuery**: GDELT data access and processing
- **Pandas/NumPy**: Data manipulation
- **Matplotlib/Seaborn**: Visualization

## Implications

This research demonstrates that:
1. News sentiment can enhance traditional technical analysis
2. Not all sentiment features are equally predictive
3. Deep learning architectures can effectively model complex market dynamics

---

*This project was completed as part of master's thesis research at Telkom University. Full thesis available upon request.*

**[🔗 More details coming soon...]**`
  },
  {
    id: "coca-cola-logo-classification",
    type: "project",
    title: "Coca-Cola Logo Classification",
    subtitle: "Computer vision model to detect Coca-Cola logos in images using transfer learning",
    image: "/project_x.jpg",
    category: "Data & ML",
    date: "2021",
    readTime: "5 min read",
    technologies: ["TensorFlow", "InceptionV3", "Python", "Transfer Learning", "Computer Vision"],
    status: "Completed",
    content: `# Coca-Cola Logo Classification

A computer vision project designed to detect and classify whether an image contains a Coca-Cola logo, demonstrating the power of transfer learning for brand recognition tasks.

## Project Goal

Build a binary classifier that can accurately determine:
- **Coca-Cola**: Image contains the Coca-Cola logo
- **Not Coca-Cola**: Image does not contain the logo

This type of model has practical applications in:
- Brand monitoring on social media
- Advertising effectiveness measurement
- Retail shelf analysis
- Trademark infringement detection

## Technical Approach

### Transfer Learning with InceptionV3

Rather than training a deep neural network from scratch (which requires massive datasets and computational resources), this project leverages **transfer learning**:

- **Base Model**: InceptionV3 pre-trained on ImageNet
- **Weights**: Using ImageNet weights as starting point
- **Fine-tuning**: Adapting the model to our specific logo detection task

### Why InceptionV3?

- Proven performance on image classification tasks
- Efficient architecture with inception modules
- Good balance between accuracy and computational cost
- Pre-trained on 1000+ object categories

## Implementation Details

### Data Pipeline
\`\`\`python
# ImageDataGenerator for data augmentation and scaling
datagen = ImageDataGenerator(
    rescale=1./255,
    rotation_range=20,
    width_shift_range=0.2,
    height_shift_range=0.2,
    horizontal_flip=True,
    validation_split=0.2
)
\`\`\`

### Model Architecture
- InceptionV3 base (frozen initial layers)
- Custom classification head
- Binary output with sigmoid activation

### Training Configuration
- Optimizer: Adam
- Loss: Binary Crossentropy
- Early stopping with patience

## Results

### Performance Metrics
Training was remarkably efficient due to transfer learning:

| Metric | Value |
|--------|-------|
| Training Accuracy | **95%** |
| Validation Accuracy | **94%** |
| Epochs to Convergence | **2** |

### Key Observations
- The model converged extremely quickly (only 2 epochs!)
- High validation accuracy indicates good generalization
- Transfer learning dramatically reduced training time

## Dataset

The training data includes:
- Various Coca-Cola logo images (different angles, lighting, contexts)
- Negative examples (other beverages, random objects, similar red logos)
- Data augmentation to increase variety

## Challenges & Learnings

### Challenges
- Distinguishing similar red logos (Pepsi variations, generic cola brands)
- Handling partial logo visibility
- Various logo orientations and scales

### Solutions
- Robust data augmentation
- Diverse training examples
- Transfer learning providing strong feature extractors

---

*This project demonstrates practical application of transfer learning for brand recognition.*

**[🔗 More details coming soon...]**`
  },
  {
    id: "hotel-recommendation-deepfm",
    type: "project",
    title: "Hotel Recommendation Optimization",
    subtitle: "User-based hotel recommendation system using DeepFM for Bangkit Academy x Traveloka",
    image: "/project_x.jpg",
    category: "Data & ML",
    date: "2022",
    readTime: "7 min read",
    technologies: ["TensorFlow", "DeepFM", "Python", "Collaborative Filtering", "Content-Based Filtering"],
    status: "Completed",
    content: `# Hotel Recommendation Optimization

A capstone project for **Bangkit Academy** in collaboration with **Traveloka**, building a sophisticated hotel recommendation system that combines multiple recommendation strategies.

## Project Overview

### The Challenge
Travelers often struggle to find hotels that match their preferences among thousands of options. Traditional filtering (by price, rating, location) doesn't capture the nuanced preferences that make a hotel truly suitable for a specific user.

### Our Solution
A hybrid recommendation system utilizing **DeepFM (Deep Factorization Machines)** that learns complex user-hotel interactions to provide personalized recommendations.

## Technical Architecture

### Recommendation Strategies

#### 1. Content-Based Filtering
Recommends hotels based on **hotel attributes and facilities**:
- Amenities (pool, gym, spa, wifi)
- Room features
- Location characteristics
- Price range

#### 2. Collaborative Filtering
Leverages **user similarities** to recommend hotels:
- Users who liked similar hotels
- Booking patterns
- Rating behaviors

#### 3. DeepFM: The Best of Both Worlds
DeepFM combines:
- **FM Component**: Captures low-order feature interactions (like traditional factorization machines)
- **Deep Component**: Learns high-order feature interactions through neural networks

This hybrid approach outperforms both individual strategies.

## Data Sources

### 1. Datafiniti Hotel Review Datasets
- User reviews and ratings
- Hotel metadata
- Geographic information

### 2. Goibibo Indian Hotels Datasets
- Additional hotel features
- Pricing information
- Booking patterns

### Data Pipeline
\`\`\`
Review Dataset ──┐
                 ├──→ Data Merging ──→ Feature Engineering ──→ Final Hotel Dataset
User Dataset ────┤
                 │
Hotel Dataset ───┘
\`\`\`

## Model Training

### Feature Engineering
- User embedding features
- Hotel embedding features
- Cross features (user-hotel interactions)
- Contextual features (seasonality, booking time)

### Training Process
- Train/validation/test split
- Early stopping
- Hyperparameter tuning

## Application Prototype

### Mobile UI Features
- Personalized hotel recommendations
- Hotel listing with prices and ratings
- Detailed hotel information
- Booking integration

### User Experience
- Seamless browsing experience
- Real-time recommendations
- Filter and sort options

## Results & Impact

The DeepFM-based system showed significant improvements over baseline methods:
- Better personalization
- Higher user engagement
- Improved booking conversion

---

*This project was completed as the capstone for Bangkit Academy 2022, a collaboration between Google, Tokopedia, Gojek, and Traveloka.*

**[🔗 More details coming soon...]**`
  },
  {
    id: "data-visualization-exercises",
    type: "project",
    title: "Data Visualization Exercises",
    subtitle: "Collection of visualization projects exploring various datasets with Python",
    image: "/project_x.jpg",
    category: "Data & ML",
    date: "2021",
    readTime: "5 min read",
    technologies: ["Python", "Matplotlib", "Seaborn", "Plotly", "GeoPandas", "WordCloud"],
    status: "Completed",
    content: `# Data Visualization Exercises

A collection of data visualization projects demonstrating various techniques for exploring and presenting data insights using Python.

## Projects Overview

### 1. Video Game Sales WordCloud
**Dataset**: Global video game sales data

Visualizing the most popular games through word cloud representation:
- Games like "Wii Sports" and "Super Mario Bros" prominently featured
- Size represents global sales volume
- Color coding by genre or platform

| Rank | Name | Global Sales |
|------|------|--------------|
| 1 | Wii Sports | 82.74M |
| 2 | Super Mario Bros | 40.24M |
| 3 | Mario Kart Wii | 35.82M |

### 2. COVID-19 Active Cases Geoplot
**Dataset**: Indonesian COVID-19 data (May 2, 2021)

Geographic visualization of active COVID-19 cases across Indonesia:
- Color-coded provinces by case count
- Interactive tooltips with detailed statistics
- Choropleth map using GeoPandas

### 3. Game Genre Distribution
**Dataset**: Video game sales by genre

Bar chart analysis showing:
- **Action**: Most popular genre
- **Sports**: Second highest
- **Shooter**: Third position

Insights into gaming industry trends and consumer preferences.

### 4. Interactive Stock Price Visualization
**Dataset**: NIKKEI stock index

Interactive line graph features:
- Adjusted Close price over time
- Zoom and pan capabilities
- Hover details for specific dates
- Built with Plotly for interactivity

## Technical Stack

\`\`\`python
# Core visualization libraries
import matplotlib.pyplot as plt
import seaborn as sns
import plotly.express as px
import geopandas as gpd
from wordcloud import WordCloud
\`\`\`

## Visualization Techniques Demonstrated

### Static Visualizations
- Bar charts for categorical comparisons
- Line plots for time series
- Scatter plots for correlations
- Word clouds for text data

### Geographic Visualizations
- Choropleth maps
- Point maps
- Heat maps on geographic data

### Interactive Visualizations
- Zoomable charts
- Hover interactions
- Dynamic filtering
- Animated transitions

## Key Learnings

1. **Choose the right visualization** for the data type
2. **Color theory** matters for readability
3. **Interactivity** enhances exploration
4. **Geographic context** adds meaning to location data

---

*These exercises were completed as part of data science coursework and personal learning.*

**[🔗 More details coming soon...]**`
  },
  {
    id: "weather-forecast-classification",
    type: "project",
    title: "Weather Forecast Classification",
    subtitle: "Comparative study of ML algorithms for weather prediction (specifically snow forecasting)",
    image: "/project_x.jpg",
    category: "Data & ML",
    date: "2021",
    readTime: "6 min read",
    technologies: ["Python", "Scikit-learn", "SVM", "Random Forest", "Logistic Regression", "KNN"],
    status: "Completed",
    content: `# Weather Forecast Classification

A comparative study evaluating multiple machine learning algorithms for weather prediction, with a specific focus on snow forecasting.

## Research Objective

Determine which machine learning algorithm performs best for predicting weather conditions, particularly snowfall, using historical meteorological data.

## Algorithms Compared

### 1. Support Vector Machine (SVM)
- Kernel-based classification
- Effective for high-dimensional data
- Robust to outliers

### 2. Random Forest
- Ensemble of decision trees
- Built-in feature importance
- Handles non-linear relationships

### 3. Logistic Regression
- Probabilistic classifier
- Interpretable coefficients
- Baseline comparison

### 4. K-Nearest Neighbor (KNN)
- Instance-based learning
- No training phase
- Sensitive to feature scaling

### 5. Naive Bayes
- Probabilistic approach
- Fast training
- Assumes feature independence

### 6. Decision Tree
- Rule-based classification
- Highly interpretable
- Prone to overfitting

## Data Preprocessing

### Steps Performed
\`\`\`python
# Preprocessing pipeline
1. Handling duplicates
2. Dropping null values
3. Feature scaling (StandardScaler)
4. Train-test split (80-20)
\`\`\`

### Features Used
| Feature | Description |
|---------|-------------|
| SuhuMin | Minimum temperature |
| SuhuMax | Maximum temperature |
| Humidity | Relative humidity % |
| WindSpeed | Wind speed (km/h) |
| Pressure | Atmospheric pressure |
| Visibility | Visibility distance |

### Target Variable
- Binary classification: Snow / No Snow

## Experimental Results

### Accuracy Comparison

| Algorithm | Accuracy |
|-----------|----------|
| **SVM** | **~85.36%** |
| Random Forest | ~84.2% |
| Logistic Regression | ~82.1% |
| KNN | ~80.5% |
| Decision Tree | ~78.3% |
| Naive Bayes | ~76.8% |

### Key Findings

1. **SVM achieved the highest accuracy** (~85.36%)
2. **Random Forest** performed comparably well
3. **Tree-based methods** showed overfitting tendencies
4. **Feature scaling** significantly impacted KNN and SVM

## Analysis

### Why SVM Performed Best
- Effective kernel transformation
- Robust margin maximization
- Handles feature interactions well

### Feature Importance (Random Forest)
1. Temperature (Min/Max) - highest importance
2. Humidity - significant predictor
3. Pressure - moderate importance
4. WindSpeed - lower importance

## Implementation

\`\`\`python
from sklearn.svm import SVC
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import cross_val_score

# Best performing model
svm_model = SVC(kernel='rbf', C=1.0)
svm_model.fit(X_train, y_train)
\`\`\`

---

*This project was completed as part of machine learning coursework.*

**[🔗 More details coming soon...]**`
  },
  {
    id: "realtime-hand-gesture-detection",
    type: "project",
    title: "Real-time Hand Gesture Detection",
    subtitle: "Web-based computer vision application using TensorFlow.js for Rock-Paper-Scissors recognition",
    image: "/project_x.jpg",
    category: "Data & ML",
    date: "2022",
    readTime: "5 min read",
    technologies: ["TensorFlow.js", "JavaScript", "Webcam API", "Computer Vision", "Transfer Learning"],
    status: "Completed",
    content: `# Real-time Hand Gesture Detection

A web-based computer vision application that uses your webcam to train and recognize hand gestures in real-time, specifically for the classic Rock-Paper-Scissors game.

## Project Overview

### Concept
Instead of using a pre-trained model, this application allows users to **train their own gesture recognition model directly in the browser**. This demonstrates the power of transfer learning and on-device machine learning.

### Tech Stack
- **TensorFlow.js**: Machine learning in the browser
- **Webcam API**: Real-time video capture
- **HTML/CSS/JavaScript**: Web interface

## How It Works

### 1. Training Phase
Users train the model by capturing samples for each gesture:

\`\`\`
Rock ✊ → Capture 30+ samples
Paper 🖐 → Capture 30+ samples  
Scissors ✌ → Capture 30+ samples
\`\`\`

### 2. Model Training
The neural network learns to distinguish between gestures:
- Transfer learning from MobileNet base
- Custom classification head
- Training happens in-browser

### 3. Inference Phase
Real-time prediction with confidence scores:
- Live webcam feed
- Instant gesture recognition
- Confidence bar visualization

## User Interface

### Training Panel
- **Sample Counter**: Shows captured samples per class
- **Capture Buttons**: One for each gesture
- **Train Network**: Initiates model training
- **Status Indicator**: Training progress

### Inference Panel
- **Live Video Feed**: Webcam stream
- **Prediction Display**: Current gesture
- **Confidence Bars**: Probability for each class

## Example Predictions

| Gesture | Prediction | Confidence |
|---------|------------|------------|
| 🖐 | Paper | 94% |
| ✌ | Scissors | 91% |
| ✊ | Rock | 89% |

## Technical Details

### Transfer Learning Approach
\`\`\`javascript
// Using MobileNet as feature extractor
const mobilenet = await tf.loadLayersModel('mobilenet/model.json');
const layer = mobilenet.getLayer('conv_pw_13_relu');
const truncatedModel = tf.model({
  inputs: mobilenet.inputs,
  outputs: layer.output
});
\`\`\`

### Real-time Processing
- Frame capture at 30 FPS
- Preprocessing per frame
- Async prediction pipeline
- Smooth confidence updates

## Features

✅ **No server required** - runs entirely in browser
✅ **Privacy-first** - data never leaves device
✅ **Customizable** - train with your own gestures
✅ **Real-time** - instant feedback
✅ **Educational** - learn ML concepts hands-on

## Challenges Solved

### Lighting Variations
- Data augmentation during capture
- Multiple samples in different conditions

### Hand Position Variations
- Encourage varied sample capture
- Robust feature learning

### Performance
- Optimized TensorFlow.js operations
- Efficient webcam handling

---

*This project demonstrates client-side machine learning for interactive applications.*

**[🔗 Try the demo coming soon...]**`
  },
  {
    id: "axrail-customer365-chatbot",
    type: "project",
    title: "Axrail Customer365 (WhatsApp Chatbot)",
    subtitle: "Enterprise-grade CRM and AI chatbot solution leveraging LLM for customer engagement",
    image: "/project_x.jpg",
    category: "Software Engineering",
    date: "2023",
    readTime: "6 min read",
    technologies: ["Python", "LangChain", "OpenAI GPT", "AWS Lambda", "DynamoDB", "WhatsApp API"],
    status: "Completed",
    content: `# Axrail Customer365 (WhatsApp Chatbot)

An enterprise-grade CRM and AI-powered chatbot solution designed to help businesses "Win Your Customers Back with Data" through intelligent customer engagement on WhatsApp.

## Role & Contribution

**Position**: AI/Data Engineer at Axrail Pte Ltd

Built the core AI engine powering the chatbot's natural language understanding and response generation capabilities.

## Solution Overview

### Vision
Transform customer service through an AI-first approach:
- **24/7 Availability**: Always-on customer support
- **Multi-language**: Respond in customer's preferred language
- **Intelligent Routing**: Understand intent and take action
- **Data-Driven**: Leverage customer data for personalization

## Technical Architecture

### System Flow
\`\`\`
Customer Message (WhatsApp)
        ↓
OpenAI Embedding Model
        ↓
Vector Search (Context Retrieval)
        ↓
DynamoDB (History/Context)
        ↓
GPT Completion Model
        ↓
Final Answer → Customer
\`\`\`

### Key Components

#### 1. Intent Detection
Using LangChain for sophisticated intent classification:
- Order inquiries
- Product questions
- Complaint handling
- Voucher requests

#### 2. Context Management
- **Conversation History**: Stored in DynamoDB
- **Customer Profile**: Enriched with CRM data
- **Session Memory**: Maintains conversation flow

#### 3. Function Calling
Specific intents trigger AWS Lambda functions:

| Intent | Action |
|--------|--------|
| "Get Voucher" | → Lambda: voucher_service |
| "Check Order" | → Lambda: order_lookup |
| "Store Hours" | → Lambda: store_info |

## Features

### Multi-language Support
- Automatic language detection
- Response in user's language
- Seamless language switching

### Custom Functions
\`\`\`python
# Example: Voucher retrieval function
def get_voucher(customer_id: str) -> dict:
    # Query DynamoDB for available vouchers
    # Return personalized offers
    pass
\`\`\`

### Intelligent Responses
- Context-aware answers
- Personality customization
- Escalation to human agents

## Tech Stack

| Component | Technology |
|-----------|------------|
| LLM Framework | LangChain |
| AI Model | OpenAI GPT |
| Compute | AWS Lambda |
| Database | Amazon DynamoDB |
| Messaging | WhatsApp Business API |
| Embeddings | OpenAI Ada |

## Business Impact

- **Response Time**: <5 seconds average
- **Availability**: 24/7/365
- **Languages**: 10+ supported
- **Customer Satisfaction**: Improved engagement

---

*Developed during tenure at Axrail Pte Ltd, Kuala Lumpur.*

**[🔗 More details available upon request...]**`
  },
  {
    id: "axrail-question-generation",
    type: "project",
    title: "Axrail Question Generation",
    subtitle: "EdTech MVP for generating educational questions from PDF documents using LLM",
    image: "/project_x.jpg",
    category: "Software Engineering",
    date: "2023",
    readTime: "5 min read",
    technologies: ["Python", "LangChain", "OpenAI GPT", "AWS", "PDF Processing"],
    status: "Completed",
    content: `# Axrail Question Generation

An EdTech MVP (Minimum Viable Product) designed to automatically generate educational questions from uploaded PDF documents, leveraging the power of Large Language Models.

## Project Overview

### The Problem
Teachers and educators spend countless hours creating quizzes and assessments. Manual question creation is:
- Time-consuming
- Repetitive
- Often inconsistent in difficulty

### Our Solution
An AI-powered system that:
- Scans PDF documents (textbooks, articles, notes)
- Extracts key concepts
- Generates relevant questions automatically
- Allows difficulty customization

## Key Features

### 1. PDF Upload & Processing
Users can upload source materials:
- Textbooks
- Research papers
- Course notes
- Study guides

**Example sources**:
- Biology texts (cell structure, genetics)
- History materials (world events, timelines)
- Science documents (physics, chemistry)

### 2. Configuration Options

| Setting | Options |
|---------|---------|
| Question Outline | Free text keywords |
| Number of Questions | 5, 10, 20, custom |
| Difficulty Level | Easy, Intermediate, Hard |
| Question Type | MCQ, True/False, Short Answer |

### 3. Intelligent Generation

\`\`\`
Upload PDF → Extract Text → Identify Topics → Generate Questions → Review & Edit
\`\`\`

## Example Output

### Input: Biology Textbook
**Topic**: Cell Organelles
**Difficulty**: Intermediate

### Generated Questions:

**Q1**: Which organelle is responsible for producing ATP, the energy currency of the cell?
- A) Nucleus
- B) Mitochondria ✓
- C) Ribosome
- D) Golgi apparatus

**Q2**: What is the primary function of the rough endoplasmic reticulum?
- A) Lipid synthesis
- B) Protein synthesis ✓
- C) Energy production
- D) Waste disposal

## Technical Architecture

### Processing Pipeline
\`\`\`python
# Simplified flow
pdf_text = extract_text(uploaded_pdf)
chunks = split_into_chunks(pdf_text)
embeddings = create_embeddings(chunks)
relevant_context = retrieve_context(keywords, embeddings)
questions = generate_questions(relevant_context, difficulty, count)
\`\`\`

### Tech Stack
- **Python**: Core application
- **LangChain**: LLM orchestration
- **OpenAI GPT**: Question generation
- **AWS**: Cloud infrastructure
- **PDF Libraries**: Text extraction

## User Interface

### Upload Panel
- Drag-and-drop PDF upload
- File list management
- Source material preview

### Configuration UI
- Keyword input field
- Question count selector
- Difficulty toggles (Easy/Intermediate/Hard)
- Question type selection

### Output Panel
- Generated questions display
- Correct answer highlighting
- Export options (PDF, Word, CSV)

## Applications

- **Schools**: Quiz generation for teachers
- **Universities**: Exam preparation
- **Corporate Training**: Assessment creation
- **Self-study**: Practice question generation

---

*Developed during tenure at Axrail Pte Ltd as an EdTech MVP.*

**[🔗 More details available upon request...]**`
  },
  {
    id: "timesheet-project-management-system",
    type: "project",
    title: "Timesheet & Project Management System",
    subtitle: "Cloud-based automation system for employee time tracking and report generation",
    image: "/project_x.jpg",
    category: "Software Engineering",
    date: "2023",
    readTime: "6 min read",
    technologies: ["Google Apps Script", "Google Drive API", "AWS Lambda", "DynamoDB", "Google Sheets"],
    status: "Completed",
    content: `# Timesheet & Project Management System

A cloud-based automation system designed to streamline employee time tracking, project management, and automated report generation, improving resource allocation efficiency by 50%.

## Project Overview

### The Challenge
Manual timesheet management leads to:
- Delayed reporting
- Data entry errors
- Inconsistent formats
- Difficult resource allocation
- Time-consuming reconciliation

### Our Solution
An integrated system connecting Google Workspace with AWS services for seamless automation.

## System Architecture

### Data Flow
\`\`\`
Project Manager / Employees
        ↓
Google Sheets (Timesheets)
        ↓
Apps Script (Automation)
        ↓
Google Drive API (File Management)
        ↓
AWS Lambda (Processing)
        ↓
Amazon DynamoDB (Storage)
        ↓
Automated Reports
\`\`\`

### File Organization

\`\`\`
📁 Project Folder
├── 📁 Timesheets
│   ├── Week_01_2023.xlsx
│   ├── Week_02_2023.xlsx
│   └── ...
├── 📁 Reports
│   ├── Monthly_Summary.pdf
│   └── Resource_Allocation.pdf
└── 📁 Invoices
    ├── Client_A_Invoice.pdf
    └── Client_B_Invoice.pdf
\`\`\`

## Features

### 1. Automated Timesheet Collection
- Employees submit via Google Sheets
- Validation rules enforce data quality
- Automatic deadline reminders

### 2. Project Tracking
- Real-time project hours
- Budget vs. actual comparison
- Resource utilization metrics

### 3. Report Generation
- Weekly summaries
- Monthly analytics
- Client invoices
- Resource allocation reports

### 4. Integration Points
| System | Purpose |
|--------|---------|
| Google Sheets | Data entry & storage |
| Google Drive | File organization |
| Apps Script | Automation logic |
| AWS Lambda | Backend processing |
| DynamoDB | Persistent storage |

## Technical Implementation

### Google Apps Script
\`\`\`javascript
function onTimesheetSubmit(e) {
  // Validate submission
  // Store in DynamoDB
  // Trigger report update
  // Send confirmation
}
\`\`\`

### AWS Lambda Functions
- **ProcessTimesheet**: Validates and stores data
- **GenerateReport**: Creates PDF reports
- **SendReminders**: Notifies pending submissions

### DynamoDB Schema
- **Projects**: Project metadata
- **Timesheets**: Individual submissions
- **Employees**: User information
- **Reports**: Generated reports

## Business Impact

### Efficiency Gains
- **50% improvement** in resource allocation
- **Automated** report generation
- **Real-time** project visibility
- **Reduced** manual data entry

### User Experience
- Simple Google Sheets interface
- Mobile-friendly submission
- Instant confirmation
- Self-service reporting

---

*Developed at Axrail Pte Ltd to streamline internal operations.*

**[🔗 More details available upon request...]**`
  },
  {
    id: "telurec-recruitment-platform",
    type: "project",
    title: "TeluRec (Recruitment Platform)",
    subtitle: "Decentralized and active recruitment platform design with integrated testing and interviews",
    image: "/project_x.jpg",
    category: "Software Engineering",
    date: "2020",
    readTime: "5 min read",
    technologies: ["System Design", "UML", "Business Process Modeling", "UI/UX"],
    status: "Completed",
    content: `# TeluRec (Recruitment Platform)

A comprehensive design for a decentralized recruitment system that streamlines the hiring process from job posting to offer acceptance.

## Concept

### Vision
**"Decentralized & Active Recruitment Platform"**

A modern recruitment system that:
- Empowers job seekers with better visibility
- Streamlines HRD workflows
- Integrates assessment tools
- Provides transparent hiring pipeline

## Core Features

### 1. Manage Job Applicant
- Centralized applicant database
- Profile management
- Application tracking
- Communication history

### 2. Integrated Test
- Built-in assessment tools
- Technical skill evaluation
- Personality assessments
- Automated scoring

### 3. Integrated Interview
- Scheduling system
- Video interview support
- Interview feedback collection
- Panel interview coordination

### 4. Job Offering
- Offer letter generation
- Negotiation tracking
- Acceptance/rejection handling
- Onboarding initiation

## System Design

### Business Process Flow

\`\`\`
                    JOB SEEKER                                    HRD
                        │                                          │
                        ↓                                          │
               [Browse Vacancies]                                  │
                        │                                          │
                        ↓                                          ↓
               [Apply for Job] ────────────────────→ [Review Applications]
                        │                                          │
                        │                                          ↓
                        │                              [Schedule Assessment]
                        │                                          │
                        ↓                                          │
               [Complete Test] ←───────────────────────────────────┘
                        │                                          │
                        ↓                                          ↓
               [Attend Interview] ←───────────────── [Conduct Interview]
                        │                                          │
                        │                                          ↓
                        │                              [Make Decision]
                        │                                          │
                        ↓                                          ↓
               [Receive Offer] ←─────────────────── [Send Offer/Rejection]
                        │
                        ↓
               [Accept/Decline]
\`\`\`

### Use Case Diagram

**Actors:**
- Job Seeker
- HRD (Human Resources Department)
- System Administrator

**Use Cases:**
| Actor | Actions |
|-------|---------|
| Job Seeker | Read Job Vacancy, Upload Document, Apply, Complete Test, Accept Offer |
| HRD | Post Vacancy, Review Applications, Schedule Interview, Hire/Reject |
| Admin | Manage Users, Configure System, Generate Reports |

## Swimlane Diagram

The process is divided into clear responsibilities:

### Job Seeker Lane
1. Browse available positions
2. Submit application
3. Complete assessments
4. Attend interviews
5. Respond to offers

### HRD Lane
1. Create job postings
2. Screen applications
3. Administer tests
4. Conduct interviews
5. Make hiring decisions

### System Lane
1. Match candidates
2. Send notifications
3. Schedule coordination
4. Document management

## Design Artifacts

### Included Diagrams
- **Business Process Map**: Swimlane diagram
- **Use Case Diagram**: Actor-system interactions
- **Entity Relationship Diagram**: Database design
- **Wireframes**: UI mockups

## Key Differentiators

✅ **Decentralized**: Not tied to single company
✅ **Active Matching**: AI-powered job matching
✅ **Integrated Tools**: Testing and interviews built-in
✅ **Transparent Pipeline**: Clear status tracking

---

*This project was developed as part of system analysis and design coursework.*

**[🔗 More details coming soon...]**`
  },
  {
    id: "ui-ux-design-projects",
    type: "project",
    title: "Design Projects (UI/UX)",
    subtitle: "Collection of user interface designs including websites, portfolios, and mobile applications",
    image: "/project_x.jpg",
    category: "Designs & Art",
    date: "2021-2023",
    readTime: "4 min read",
    technologies: ["Figma", "Adobe XD", "UI Design", "UX Design", "Wireframing", "Prototyping"],
    status: "Completed",
    content: `# Design Projects (UI/UX)

A curated collection of user interface and user experience designs spanning websites, mobile applications, and interactive prototypes.

## Projects Overview

---

## 1. E-Commerce Website Mockup

### Pages Designed
- **Homepage**: Hero section, featured products, categories
- **Product Detail**: Images, specifications, reviews, add to cart
- **Search Page**: Filters, sorting, grid/list view
- **Sign Up/Login**: Registration flow, social login
- **User Profile**: Order history, settings, preferences

### Design Principles
- Clean, minimalist aesthetic
- Clear visual hierarchy
- Intuitive navigation
- Mobile-responsive layouts

---

## 2. Personal Portfolio

### Theme
*"Data-driven Software Engineer with a passion for machine learning"*

### Design Elements
- **Dark Mode UI**: Modern, eye-friendly design
- **Skills Section**: Visual representation (Python, Figma, TensorFlow)
- **Work Experience**: Card-based timeline
- **Project Showcase**: Interactive gallery

### Highlights
- Smooth animations
- Glassmorphism effects
- Gradient accents
- Professional typography

---

## 3. Solar/IoT Application

### System Design
**Hardware Integration:**
\`\`\`
Solar Panel ──→ Charge Controller ──→ Battery ──→ Mobile Device
                        │
                        └──→ IoT Sensor ──→ Cloud ──→ App
\`\`\`

### Mobile Screens

#### Dashboard
- Energy production metrics
- Battery status
- System health indicators

#### Support
- FAQ section
- Contact form
- Live chat integration

#### Transactions
- Energy credits
- Payment history
- Billing details

#### Monitoring
- Real-time charts
- Historical data
- Alerts & notifications

### Design Focus
- Data visualization
- Real-time updates
- Clean dashboard UI
- Intuitive controls

---

## Design Process

### Workflow
\`\`\`
Research → Wireframes → High-Fidelity → Prototype → Testing
\`\`\`

### Tools Used
| Tool | Purpose |
|------|---------|
| Figma | Primary design tool |
| Adobe XD | Prototyping |
| Sketch | UI components |
| InVision | User testing |

## Design Philosophy

### Principles I Follow
1. **User-Centered**: Design for real user needs
2. **Consistency**: Unified design language
3. **Accessibility**: Inclusive design practices
4. **Performance**: Designs that translate to fast UIs

### Style Preferences
- Clean typography
- Purposeful whitespace
- Subtle animations
- Dark mode options

---

*These designs showcase my UI/UX capabilities alongside technical skills.*

**[🔗 Figma files available upon request...]**`
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