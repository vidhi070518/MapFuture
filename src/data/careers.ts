import { Career } from '../types';

export const careers: Career[] = [
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    tagline: 'Bridge the gap between raw data and strategic business decisions.',
    overview: 'Data Analysts collect, process, and perform statistical analyses on large datasets. They translate numbers and metrics into actionable business insights, visual dashboards, and comprehensive reports that guide executive decisions. It is one of the most accessible entry points into the tech industry.',
    metrics: {
      avgSalary: '$78,500/yr',
      jobGrowth: '+25% (Much faster than average)',
      difficulty: 'Medium',
      duration: '4-6 Months'
    },
    confidenceMetrics: {
      beginnerScore: 85,
      learningCurveDescription: 'Softer initial curve. Spreadsheet tasks and dashboard design provide visual, rewarding feedback early. The difficulty steps up when learning relational database structures and writing intermediate SQL joins.',
      recommendedPriorKnowledge: 'General computer proficiency and basic mathematical concepts (ratios, averages, percentages). No programming background required.',
      suggestedWeeklyCommitment: '10-12 hours per week',
      timeToJobReady: '4-6 Months'
    },
    whyChooseThisCareer: {
      whoEnjoysThis: [
        'People who love solving puzzles and discovering hidden patterns.',
        'Individuals who like organizing chaotic lists into clean, clear visual presentations.',
        'Communicators who enjoy explaining "what the facts mean" to help business leaders succeed.'
      ],
      personalityFit: [
        'Detail-oriented and thorough.',
        'Inquisitive, constantly asking "why" behind the numbers.',
        'Logical thinker who enjoys structured approaches.',
        'Strong verbal or visual communicator.'
      ],
      remoteOpportunities: 'Very High. Most data team operations run asynchronously, and companies frequently hire remote analysts to handle automated reports.',
      industryOutlook: 'Consistent and strong. Every modern enterprise is drowning in data and requires skilled analysts to help cut waste and locate new revenue.',
      beginnerFriendliness: 'Excellent. Tabular systems like Excel and SQL query engines provide immediate visual outputs and have beginner-friendly english-like command syntaxes.',
      commonMotivations: [
        'Transitioning from non-technical departments (sales, marketing, customer support) to a tech role.',
        'Seeking a stable career that blends logical analysis with business strategy.',
        'Desiring a structured career path with clear, measurable deliverables.'
      ]
    },
    skills: [
      {
        name: 'Structured Query Language (SQL)',
        category: 'Technical',
        description: 'Writing complex queries to extract, filter, join, and aggregate data from relational databases (PostgreSQL, MySQL, SQL Server).',
        level: 'Intermediate',
        importance: 5
      },
      {
        name: 'Microsoft Excel',
        category: 'Tool',
        description: 'Advanced data manipulation using pivot tables, VLOOKUP/XLOOKUP, index-match, statistical formulas, and power query.',
        level: 'Beginner',
        importance: 4
      },
      {
        name: 'Python (Pandas, NumPy)',
        category: 'Technical',
        description: 'Using programming for data cleaning, exploratory data analysis (EDA), and data manipulation on large datasets.',
        level: 'Intermediate',
        importance: 4
      },
      {
        name: 'Tableau or Power BI',
        category: 'Tool',
        description: 'Building interactive dashboards, creating calculated fields, and designing clear data stories for non-technical stakeholders.',
        level: 'Intermediate',
        importance: 5
      },
      {
        name: 'Statistical Analysis & Hypothesis Testing',
        category: 'Foundational',
        description: 'Understanding mean, median, mode, standard deviation, probability distributions, A/B testing, and correlation vs causation.',
        level: 'Intermediate',
        importance: 3
      },
      {
        name: 'Data Storytelling & Communication',
        category: 'Soft',
        description: 'Translating complex analytical findings into simple, impactful presentations for business leaders.',
        level: 'Advanced',
        importance: 5
      },
      {
        name: 'Critical Thinking',
        category: 'Soft',
        description: 'Asking the right business questions and identifying anomalies, trends, and opportunities within raw data.',
        level: 'Advanced',
        importance: 4
      }
    ],
    roadmap: [
      {
        phase: 'Phase 1',
        title: 'Data Foundations & Excel',
        duration: '4 weeks',
        description: 'Begin with learning how data is structured and master spreadsheet tools, which remain the backbone of business analysis.',
        skillsToLearn: ['Data types', 'Spreadsheet basics', 'XLOOKUP & Pivot Tables', 'Data Cleaning in Excel', 'Intro to Statistics'],
        projectsToBuild: ['Sales Performance Report in Excel using pivot charts and interactive slicers.'],
        milestones: ['Analyze a dataset of 5,000+ rows', 'Create a clean, formatted PDF executive report']
      },
      {
        phase: 'Phase 2',
        title: 'SQL & Database Querying',
        duration: '5 weeks',
        description: 'Learn how to retrieve data from professional databases. SQL is the single most critical skill for any Data Analyst.',
        skillsToLearn: ['SELECT, WHERE, ORDER BY', 'JOINS (Inner, Left, Right, Full)', 'GROUP BY & Aggregations', 'Subqueries & CTEs', 'Window Functions'],
        projectsToBuild: ['SQL Database Analysis: Write queries to extract business KPIs (Customer Retention, MoM Growth) from a sample DVD Rental database.'],
        milestones: ['Solve intermediate SQL challenges on HackerRank/LeetCode', 'Design a database schema from scratch']
      },
      {
        phase: 'Phase 3',
        title: 'Data Visualization & BI Tools',
        duration: '4 weeks',
        description: 'Learn how to present data. Convert raw tables into beautiful, interactive, and automated dashboards using Tableau or Power BI.',
        skillsToLearn: ['Data modeling', 'Creating relationships', 'DAX (Power BI) or Calculated Fields (Tableau)', 'Chart types & Dashboard layout rules', 'Interactive Slicers'],
        projectsToBuild: ['Interactive HR Diversity & Turnover Dashboard published on Tableau Public or Power BI Service.'],
        milestones: ['Publish first interactive dashboard online', 'Receive peer feedback on visual design hierarchy']
      },
      {
        phase: 'Phase 4',
        title: 'Python for Data Analysis',
        duration: '6 weeks',
        description: 'Scale your capabilities. Python allows you to clean messier datasets, automate reports, and perform advanced statistical operations.',
        skillsToLearn: ['Python syntax', 'Jupyter Notebooks', 'Pandas for DataFrames', 'NumPy for math operations', 'Matplotlib & Seaborn for plotting'],
        projectsToBuild: ['Exploratory Data Analysis (EDA) on housing market trends using Jupyter Notebook and Python libraries.'],
        milestones: ['Clean a messy, unformatted CSV file using Pandas', 'Create at least 5 different statistical plots programmatically']
      },
      {
        phase: 'Phase 5',
        title: 'Capstone & Portfolio Assembly',
        duration: '3 weeks',
        description: 'Combine SQL, Python, and Tableau into one comprehensive end-to-end project. Publish and present your work to employers.',
        skillsToLearn: ['Git & GitHub', 'Technical writing', 'Resume optimization', 'Interview techniques'],
        projectsToBuild: ['End-to-End Analytics Case Study: Extract data using SQL, clean/analyze using Python, visualize in Tableau, and document on GitHub.'],
        milestones: ['Host portfolio repository on GitHub with detailed README.md', 'Optimize LinkedIn profile for data analytics']
      }
    ],
    certifications: [
      {
        title: 'Google Data Analytics Professional Certificate',
        provider: 'Google via Coursera',
        url: 'https://www.coursera.org/professional-certificates/google-data-analytics',
        duration: '3-6 Months',
        cost: '$39/month',
        isFree: false,
        difficulty: 'Beginner',
        hasCertificate: true,
        description: 'Covers spreadsheets, SQL querying basics, Tableau visualization, R programming foundations, and structured case studies.',
        whyTakeIt: 'This course is beginner-friendly and teaches SQL, spreadsheets, dashboards, and portfolio-ready analytics projects. Highly recognized by industry recruiters as a strong baseline.'
      },
      {
        title: 'Power BI Data Analyst Associate (PL-300)',
        provider: 'Microsoft',
        url: 'https://learn.microsoft.com/en-us/credentials/certifications/power-bi-data-analyst-associate/',
        duration: '1-2 Months',
        cost: '$165 (Exam Voucher)',
        isFree: false,
        difficulty: 'Intermediate',
        hasCertificate: true,
        description: 'Focuses strictly on Microsoft Power BI, data models, DAX formulas, dashboard designs, and enterprise workspace deployments.',
        whyTakeIt: 'An official certification that passes automatic applicant tracking systems (ATS). Best for resumes when applying to corporate offices using the Microsoft stack.'
      },
      {
        title: 'SQL for Data Science Specialization',
        provider: 'UC Davis via Coursera',
        url: 'https://www.coursera.org/specializations/sql-data-science',
        duration: '2 Months',
        cost: '$39/month',
        isFree: false,
        difficulty: 'Beginner',
        hasCertificate: true,
        description: 'Deep dive into standard SQL query architectures, subqueries, database joins, query profiling, and SQL integrations with Apache Spark.',
        whyTakeIt: 'Focuses 100% on the single most tested skill in technical analyst interviews. Crucial for building quick, bug-free query reflexes.'
      }
    ],
    projects: [
      {
        title: 'E-Commerce Cohort Retention Analysis',
        description: 'Analyze online retail transaction data to calculate customer lifetime value (CLV), churn rates, and monthly cohort retention using SQL and Python.',
        difficulty: 'Intermediate',
        duration: '12 hours',
        techStack: ['SQL (PostgreSQL)', 'Python (Pandas)', 'Jupyter Notebook', 'Seaborn'],
        keyFeatures: [
          'Monthly cohorts grouped by customer purchase date',
          'Interactive retention heatmap showing percentage drop-offs',
          'RFM (Recency, Frequency, Monetary) Customer Segmentation modeling'
        ],
        stepByStep: [
          'Download the Online Retail dataset from UCI Machine Learning Repository.',
          'Load data into a local PostgreSQL database and write query aggregates to check for null values and duplicates.',
          'Write a Common Table Expression (CTE) to identify the first purchase month for each customer.',
          'Join active months to the first purchase month to calculate cohort retention percentages.',
          'Export SQL results into Jupyter Notebook and plot a visual heatmap using Seaborn.',
          'Write a 500-word executive summary explaining recommendations to improve retention for the weakest cohorts.'
        ],
        deliverable: 'A GitHub repository containing the SQL script, Python Jupyter notebook, and a README detailing business findings.'
      },
      {
        title: 'Real Estate Market Visual Explorer',
        description: 'Build an interactive dashboard mapping real estate listings, average pricing per square foot, and historical price changes with geographic plotting.',
        difficulty: 'Beginner',
        duration: '8 hours',
        techStack: ['Tableau Public', 'MS Excel', 'Kaggle Datasets'],
        keyFeatures: [
          'Interactive map displaying pricing bubble sizes by zip code',
          'Filters for bedrooms, bathrooms, price range, and property type',
          'Historical price trend line chart forecasting future pricing'
        ],
        stepByStep: [
          'Acquire a housing price dataset from Kaggle.',
          'Clean ZIP code formats and filter out outlier values in Excel.',
          'Import data into Tableau Public and define geographic roles for state, city, and zip codes.',
          'Create a map worksheet showing average listing price.',
          'Create a bar chart showing average price per square foot by property type.',
          'Assemble elements into a cohesive dashboard layout (using containers, standard padding, and dark mode theme).',
          'Publish dashboard to Tableau Public.'
        ],
        deliverable: 'A live link to an interactive Tableau Public dashboard with an embedded source overview.'
      }
    ],
    portfolioGuidance: {
      overview: 'For Data Analysts, code syntax matters, but communicating insights matters more. Your portfolio should not just show Python code; it should show clean dashboards and write-ups detailing WHAT the numbers mean and HOW it helps the business make money.',
      platforms: [
        {
          name: 'GitHub',
          description: 'Used to store code scripts (SQL, Python) and detailed case study descriptions in README.md markdown format.',
          tips: [
            'Use folders for each project, and rename files from "untitled.ipynb" to descriptive names like "housing_eda.ipynb".',
            'Write a clear README.md that starts with: Executive Summary, Key Findings, Business Recommendations, and Tech Stack.'
          ]
        },
        {
          name: 'Tableau Public / Power BI Service',
          description: 'A platform to host and showcase interactive dashboards that prospective hiring managers can click through.',
          tips: [
            'Customize tooltips so they look neat and custom, not default.',
            'Choose a unified color palette (3-4 colors maximum) and stick to standard alignment spacing.'
          ]
        }
      ],
      resumeTips: [
        'Do not list responsibilities; list quantifiable achievements (e.g., "Identified $15k in annual shipping waste using a SQL query of delivery logs").',
        'Add a "Technical Skills" bar listing: SQL, Excel, Tableau/PowerBI, Python, Git.',
        'Include clickable hyperlinks to your live Tableau Public dashboards directly inside your PDF resume.'
      ],
      checklist: [
        'Have at least 1 SQL-focused dataset cleanup project.',
        'Have at least 1 interactive dashboard showing KPI tracking.',
        'Have at least 1 Python notebook doing data cleansing or API scraping.',
        'Ensure all projects have a written "Business Recommendations" section.'
      ]
    },
    guidance: {
      startingPoint: 'Begin by mastering Excel formatting, pivot tables, and statistical math basics before trying to code.',
      learningOrder: [
        '1. Spreadsheets & Statistics (Excel)',
        '2. Relational Querying (SQL)',
        '3. Dashboard Visuals (Tableau or Power BI)',
        '4. Analytical Scripting (Python & Pandas)'
      ],
      beginnerAdvice: 'Focus heavily on SQL. Many beginners jump straight into learning complex machine learning algorithms, but entry-level hiring managers care infinitely more that you can write clean database Joins, CTEs, and group aggregates.',
      commonMistakes: [
        'Stuck in "tutorial hell" without building an independent analysis.',
        'Creating visual dashboards with too many colors and confusing charts.',
        'Publishing SQL code on GitHub without writing what the business value actually represents.'
      ],
      motivationalQuote: 'Data is only useful if it helps someone make a better decision. Focus on the stories, not just the code.'
    },
    nextSteps: {
      jobSearchTips: [
        'Look for titles like Junior Data Analyst, Operations Analyst, Marketing Analyst, Business Intelligence Analyst, or Reporting Analyst.',
        'Search for local mid-sized businesses who might not have a formal data science team but need reporting help.'
      ],
      networkingTips: [
        'Attend local Data+Design or Tableau User Groups (TUGs).',
        'Write short LinkedIn posts sharing one neat trick you learned in SQL, tagging the dashboard you created.'
      ],
      interviewPrep: [
        'Practice live coding SQL JOINS and GROUP BYs. Expect technical tests using platforms like Coderpad.',
        'Prepare two stories in STAR format (Situation, Task, Action, Result) describing how you tackled a messy dataset.'
      ]
    }
  },
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    tagline: 'Architect the future by building intelligent agents, LLM integrations, and cognitive software.',
    overview: 'AI Engineers specialize in designing, fine-tuning, and integrating artificial intelligence technologies into software products. Rather than just researching models, they focus on engineering software that utilizes Large Language Models (LLMs), building Retrieval-Augmented Generation (RAG) pipelines, managing vector stores, and creating autonomous agent architectures.',
    metrics: {
      avgSalary: '$142,000/yr',
      jobGrowth: '+48% (Explosive Growth)',
      difficulty: 'Hard',
      duration: '8-12 Months'
    },
    confidenceMetrics: {
      beginnerScore: 45,
      learningCurveDescription: 'Steep learning curve. Requires a strong software engineering base. You will master standard programming syntax first, then transition into vector databases, embedding vectors, and model architectures.',
      recommendedPriorKnowledge: 'Solid familiarity with object-oriented programming (preferably Python), fundamental command line commands, and basic algebra.',
      suggestedWeeklyCommitment: '15-20 hours per week',
      timeToJobReady: '8-12 Months'
    },
    whyChooseThisCareer: {
      whoEnjoysThis: [
        'Builders who want to create software that acts, reasons, and speaks organically.',
        'Developers who love experimenting with prompt chains, neural networks, and automation.',
        'Problem solvers eager to work at the bleeding-edge interface of software engineering and research.'
      ],
      personalityFit: [
        'Highly experimental, comfortable with probabilistic (non-deterministic) outputs.',
        'Persistent debugger who does not mind tweaking settings for hours.',
        'System architect who cares about API latency and rate limits.',
        'Voracious reader of new AI papers and model releases.'
      ],
      remoteOpportunities: 'Excellent. High-growth startups, research labs, and decentralized open-source projects rely heavily on remote AI engineers.',
      industryOutlook: 'Unprecedented growth. Virtually every software company is refactoring their codebase to integrate generative AI and agentic behaviors.',
      beginnerFriendliness: 'Difficult. Building production-grade AI tools requires deep backend engineering foundations and linear algebra awareness.',
      commonMotivations: [
        'Transitioning from traditional Full-Stack Web Development to intelligent system specialties.',
        'Desiring to architect autonomous applications, search systems, and custom chatbot platforms.',
        'Fascinated by natural language processing and agent coordination structures.'
      ]
    },
    skills: [
      {
        name: 'Advanced Python & OOP',
        category: 'Technical',
        description: 'Writing scalable, modular Python code, using async features, and understanding object-oriented programming for large codebases.',
        level: 'Advanced',
        importance: 5
      },
      {
        name: 'LLM Orchestration (LangChain, LlamaIndex)',
        category: 'Tool',
        description: 'Building workflows around prompts, models, parser, chains, and memories to control natural language processing pathways.',
        level: 'Advanced',
        importance: 5
      },
      {
        name: 'Vector Databases (Pinecone, ChromaDB, PGVector)',
        category: 'Tool',
        description: 'Understanding text embedding models, indexing strategies, semantic search, and querying vector spaces efficiently.',
        level: 'Intermediate',
        importance: 4
      },
      {
        name: 'API Development (FastAPI, Flask)',
        category: 'Technical',
        description: 'Creating high-performance APIs to expose machine learning models and LLM wrappers to frontend services.',
        level: 'Intermediate',
        importance: 4
      },
      {
        name: 'Deep Learning & PyTorch',
        category: 'Technical',
        description: 'Understanding neural network architectures, backpropagation, and utilizing PyTorch for custom modeling.',
        level: 'Intermediate',
        importance: 3
      },
      {
        name: 'Prompt Engineering & Fine-tuning',
        category: 'Foundational',
        description: 'Structuring system prompts, managing few-shot examples, and fine-tuning open-source models using QLoRA/PEFT.',
        level: 'Advanced',
        importance: 4
      },
      {
        name: 'Cloud & Containerization (Docker, AWS/GCP)',
        category: 'Tool',
        description: 'Packaging AI services into containers and deploying them to scalable cloud infrastructures.',
        level: 'Intermediate',
        importance: 4
      }
    ],
    roadmap: [
      {
        phase: 'Phase 1',
        title: 'Python Mastery & Software Engineering',
        duration: '6 weeks',
        description: 'Deepen your programming skills. You need to write clean, async, and well-tested Python before working with AI structures.',
        skillsToLearn: ['Decorators & Generators', 'Asyncio & Concurrency', 'Object-Oriented Programming', 'Testing with pytest', 'Docker basics'],
        projectsToBuild: ['Multi-threaded Web Scraper that extracts structured articles and saves them to a Postgres database.'],
        milestones: ['Write a modular package with unit tests', 'Dockerize a local database app']
      },
      {
        phase: 'Phase 2',
        title: 'Machine Learning & Neural Networks',
        duration: '8 weeks',
        description: 'Learn the underlying math. Understand supervised vs unsupervised learning, data preprocessing, and training basic neural networks.',
        skillsToLearn: ['Linear Algebra & Calculus basics', 'Scikit-Learn algorithms', 'Feature engineering', 'Deep Learning concepts', 'PyTorch fundamentals'],
        projectsToBuild: ['Handwritten Digit Classifier using PyTorch and custom neural network layers.'],
        milestones: ['Understand train/val/test splits and overfitting', 'Achieve >98% test accuracy on a classification dataset']
      },
      {
        phase: 'Phase 3',
        title: 'LLMs, Embeddings & RAG Systems',
        duration: '8 weeks',
        description: 'Learn the core architecture of LLM-based products. Master embeddings, semantic search, and Retrieval-Augmented Generation.',
        skillsToLearn: ['OpenAI/Anthropic API structures', 'Text Embeddings', 'Vector Databases', 'LangChain/LlamaIndex framework', 'RAG evaluation (Ragas)'],
        projectsToBuild: ['Enterprise Document Q&A system: Upload a PDF handbook, embed text, store in Pinecone, and query using a custom chat UI.'],
        milestones: ['Understand cosine similarity and indexing options', 'Optimize retrieval context size to minimize API cost and latency']
      },
      {
        phase: 'Phase 4',
        title: 'Fine-Tuning & Open-Source LLMs',
        duration: '6 weeks',
        description: 'Take control of the models. Run, modify, and host open-source LLMs (like LLaMA, Mistral) on local or cloud GPUs.',
        skillsToLearn: ['Hugging Face library', 'QLoRA, LoRA, and PEFT', 'Dataset formatting for fine-tuning', 'Inference optimization (vLLM)'],
        projectsToBuild: ['Custom SQL-Generator: Fine-tune a LLaMA-3 model using LoRA to write SQL queries from natural language questions.'],
        milestones: ['Format a JSONL training dataset', 'Fine-tune a model and plot the loss convergence curve']
      },
      {
        phase: 'Phase 5',
        title: 'AI Agents & Deployment',
        duration: '6 weeks',
        description: 'Build systems that act. Create autonomous agents that use tools, search the web, write code, and coordinate tasks to achieve goals.',
        skillsToLearn: ['Agent loop structures (ReAct pattern)', 'LangGraph/CrewAI for multi-agent systems', 'API deployment with FastAPI', 'GPU hosting (Replicate, Hugging Face Spaces)'],
        projectsToBuild: ['Autonomous Research Agent: Takes a topic, searches the web, drafts a report, critic-reviews, and emails the PDF.'],
        milestones: ['Build a system with multi-step loops and state memory', 'Deploy the final model API to cloud production']
      }
    ],
    certifications: [
      {
        title: 'Deep Learning Specialization',
        provider: 'DeepLearning.AI via Coursera',
        url: 'https://www.coursera.org/specializations/deep-learning',
        duration: '3-4 Months',
        cost: '$49/month',
        isFree: false,
        difficulty: 'Intermediate',
        hasCertificate: true,
        description: 'Taught by Andrew Ng. Covers neural networks, hyperparameter tuning, structure of ML projects, CNNs, and sequence models (LSTMs).',
        whyTakeIt: 'The gold standard theoretical certification. Teaches deep learning concepts from scratch, helping you understand how neural weights, loss functions, and transformer attention heads actually function.'
      },
      {
        title: 'Natural Language Processing Specialization',
        provider: 'DeepLearning.AI via Coursera',
        url: 'https://www.coursera.org/specializations/natural-language-processing-tensorflow-pytorch',
        duration: '2 Months',
        cost: '$49/month',
        isFree: false,
        difficulty: 'Advanced',
        hasCertificate: true,
        description: 'Covers tokenization, text representation, translation models, sequence-to-sequence algorithms, and transformer designs.',
        whyTakeIt: 'Crucial specialization for working with language models. Explains attention mechanisms, context windows, and vector representations in detail.'
      },
      {
        title: 'AWS Certified Machine Learning - Specialty',
        provider: 'Amazon Web Services',
        url: 'https://aws.amazon.com/certification/certified-machine-learning-specialty/',
        duration: '2-3 Months',
        cost: '$300 (Exam Voucher)',
        isFree: false,
        difficulty: 'Advanced',
        hasCertificate: true,
        description: 'Validates ability to design, deploy, and maintain machine learning architectures using the AWS Cloud (SageMaker, S3, Glue).',
        whyTakeIt: 'Excellent for showing backend MLOps proficiency. Proves to companies that you can deploy models securely, handle cloud data pipelines, and control GPU costs.'
      }
    ],
    projects: [
      {
        title: 'Autonomous Multi-Agent Market Analyst',
        description: 'Build a multi-agent system where different AI agents (Web Searcher, Finance Reader, Writer) collaborate to generate investment reports on public equities.',
        difficulty: 'Advanced',
        duration: '24 hours',
        techStack: ['LangGraph', 'CrewAI', 'FastAPI', 'OpenAI GPT-4o', 'Tavily Search API'],
        keyFeatures: [
          'Stateful agent workflows with human-in-the-loop approval gates',
          'Parallel execution of search agents',
          'Markdown report generation with dynamic charts'
        ],
        stepByStep: [
          'Initialize a Python project and configure virtual environment.',
          'Define the state object representing the workflow using LangGraph.',
          'Implement a search node that queries Tavily Search API for ticker news.',
          'Implement an analyst node that compiles financial metrics and computes ratios.',
          'Implement a writer node that translates research notes into a formatted executive brief.',
          'Expose the graph execution through a FastAPI endpoint using SSE (Server-Sent Events) for real-time streaming tokens.',
          'Deploy the service container to Render or AWS App Runner.'
        ],
        deliverable: 'A GitHub repository containing the complete backend API, a Dockerfile, and instructions to test streaming outputs.'
      },
      {
        title: 'Optimized RAG Engine for Engineering Documentation',
        description: 'Create a Retrieval-Augmented Generation pipeline using hybrid keyword-vector search and re-ranking to query large-scale product manuals.',
        difficulty: 'Intermediate',
        duration: '16 hours',
        techStack: ['LlamaIndex', 'ChromaDB', 'Cohere ReRank', 'Python', 'Streamlit'],
        keyFeatures: [
          'Hierarchical node parsing (Parent-Child document splitting)',
          'Hybrid search combining BM25 keyword matching and vector search',
          'Reranking phase using Cohere API to increase precision'
        ],
        stepByStep: [
          'Gather a folder of PDF documentation manuals.',
          'Write a script to clean up markdown headings and table contents from PDFs.',
          'Configure LlamaIndex to parse files using a hierarchical node reader (small chunks linked to larger parent chunks).',
          'Insert text chunks as embeddings into a local ChromaDB instance.',
          'Create a hybrid query retriever combining dense vector search and BM25.',
          'Add a post-processor reranker using Cohere ReRank to sort the top 20 retrieved chunks down to the top 5 most relevant.',
          'Wrap the pipeline in a clean Streamlit interface with chat memory.'
        ],
        deliverable: 'A Streamlit dashboard repository with a setup script that automatically builds and populates the database.'
      }
    ],
    portfolioGuidance: {
      overview: 'AI Engineering is highly practical. Hiring managers are skeptical of portfolios containing only basic "wrappers" (just a prompt sent to OpenAI API). You must show engineering complexity: how you handle token limits, cache embeddings, evaluate accuracy, and optimize latency.',
      platforms: [
        {
          name: 'GitHub',
          description: 'Your central hub. Projects must show software engineering discipline, not just messy script files.',
          tips: [
            'Provide clear installation instructions and a sample `.env.example` file.',
            'Include a system architecture diagram (use Mermaid.js) explaining how data flows between LLMs, vectors, and tools.'
          ]
        },
        {
          name: 'Hugging Face / Spaces',
          description: 'A platform to host live, running demos of your models or web apps (Streamlit, Gradio).',
          tips: [
            'Host custom fine-tuned model cards showing training metrics, hyperparameters, and usage blocks.',
            'Keep demos fast. If hosting an LLM, use quantization (GGUF) so it loads quickly on free tier CPU/GPU spaces.'
          ]
        }
      ],
      resumeTips: [
        'Highlight integration and performance improvements: e.g., "Reduced LLM token costs by 42% by implementing semantic chunk caching."',
        'Avoid listing generic skills. Be specific: list "LangChain, Vector DBs (Chroma, Pinecone), PyTorch, Hugging Face, PEFT/LoRA, Docker."',
        'List links to live, interactive demos on Hugging Face Spaces so recruiters can try your AI tools instantly.'
      ],
      checklist: [
        'Build at least 1 complex RAG pipeline with a custom chunking and reranking strategy.',
        'Build at least 1 autonomous agent that makes decisions and calls tools.',
        'Build at least 1 project using an open-source model (llama/mistral) deployed on custom endpoints.',
        'Have evaluation logs proving your system has high accuracy and low hallucination rate.'
      ]
    },
    guidance: {
      startingPoint: 'Solidify your Python scripting and API structures before looking at prompt frameworks.',
      learningOrder: [
        '1. Advanced Python & Docker Container Basics',
        '2. Vector Databases & Text Embeddings',
        '3. Prompt Orchestration (LangChain/LlamaIndex)',
        '4. Open-source Model Deployments & LoRA Tuning'
      ],
      beginnerAdvice: 'Do not build basic OpenAI wrapper apps. Recruiter filters are saturated with simple prompt templates. Demonstrate actual software engineering depth: build system evaluations, configure caching, control tokens, and create memory state loops.',
      commonMistakes: [
        'Trying to fine-tune a model before attempting vector retrieval optimizations.',
        'Neglecting API costs, leading to massive token overhead during logic loops.',
        'Relying on frameworks blindly without understanding the underlying API calls.'
      ],
      motivationalQuote: 'The best AI engines are not just models, they are cohesive software architectures. Master the data flow.'
    },
    nextSteps: {
      jobSearchTips: [
        'Look for titles like AI Engineer, LLM Engineer, Machine Learning Software Engineer, or Prompt Engineer.',
        'Target startups or software agencies who are currently building conversational products and need quick integration specialists.'
      ],
      networkingTips: [
        'Contribute to open-source libraries like LangChain, CrewAI, or Hugging Face Transformers.',
        'Attend local AI hacker house meetups or join Discord channels (e.g., Latent Space, LangChain Discord).'
      ],
      interviewPrep: [
        'Be ready to explain the transformer architecture: self-attention, key/query/value matrices, and tokenization.',
        'Prepare for system design questions: how to design a real-time chat service that scales to 10,000 active users.'
      ]
    }
  },
  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst',
    tagline: 'Defend organizational boundaries, monitor networks, and neutralize digital threats.',
    overview: 'Cybersecurity Analysts protect networks, systems, and data from cyber attacks. They monitor network traffic for security breaches, investigate suspicious activities, configure defensive systems (Firewalls, SIEMs), perform vulnerability assessments, and execute incident response plans when a breach occurs. It is a critical defense role.',
    metrics: {
      avgSalary: '$95,200/yr',
      jobGrowth: '+32% (Much faster than average)',
      difficulty: 'Medium',
      duration: '6-9 Months'
    },
    confidenceMetrics: {
      beginnerScore: 65,
      learningCurveDescription: 'Moderate learning curve. Computer networks and administration terminal scripts have a dense learning phase, but SIEM dashboards and vulnerability scans follow logical, step-by-step practices.',
      recommendedPriorKnowledge: 'General knowledge of operating systems (Windows and Linux) and file directory systems. No programming required.',
      suggestedWeeklyCommitment: '12-15 hours per week',
      timeToJobReady: '6-9 Months'
    },
    whyChooseThisCareer: {
      whoEnjoysThis: [
        'Defenders who love securing boundaries and setting up firewall architectures.',
        'Detectives who enjoy auditing audit logs to trace system intruders.',
        'System administrators who like configuring server structures, virtualization, and networks.'
      ],
      personalityFit: [
        'Vigilant and detail-focused under constant monitoring cycles.',
        'Methodical investigator who enjoys searching through system records.',
        'Calm and analytical when security incidents occur.',
        'Compliance-oriented, respecting rules and governance protocols.'
      ],
      remoteOpportunities: 'Moderate to High. Security Operations Center (SOC) shift rotations and analysis are widely performed remotely, though hardware configuration may require on-site presence.',
      industryOutlook: 'Extremely strong. Global cyber attacks scale with software expansion, and regulatory laws mandate constant security audits.',
      beginnerFriendliness: 'Good. Defensive security uses structured scripts, packet inspect tools, and alert software that can be studied without programming experience.',
      commonMotivations: [
        'Evolving from IT Helpdesk or Tech Support roles into cyber defense specialties.',
        'Motivated by securing network privacy and defending corporate infrastructure.',
        'Enjoys threat modeling, packet investigations, and risk assessment audits.'
      ]
    },
    skills: [
      {
        name: 'Computer Networking & Protocols',
        category: 'Foundational',
        description: 'Deep understanding of TCP/IP, OSI model, subnetting, DNS, DHCP, and traffic routing rules.',
        level: 'Advanced',
        importance: 5
      },
      {
        name: 'Linux Administration',
        category: 'Technical',
        description: 'Navigating command line, file system permissions, shell scripting, managing user processes, and server hardening.',
        level: 'Intermediate',
        importance: 4
      },
      {
        name: 'Network Traffic Analysis (Wireshark)',
        category: 'Tool',
        description: 'Capturing packets, writing capture filters, analyzing TCP streams, and detecting anomalies or malware signatures.',
        level: 'Advanced',
        importance: 5
      },
      {
        name: 'SIEM Tools (Splunk, Elastic Stack)',
        category: 'Tool',
        description: 'Ingesting logs, writing search queries, creating alert rules, and monitoring security dashboards.',
        level: 'Intermediate',
        importance: 4
      },
      {
        name: 'Vulnerability Scanning (Nessus, Nmap)',
        category: 'Tool',
        description: 'Running active scans, assessing system exposures, interpreting CVEs, and recommending patch plans.',
        level: 'Intermediate',
        importance: 4
      },
      {
        name: 'Incident Response & Triaging',
        category: 'Technical',
        description: 'Following containment protocols, preserving digital evidence, and compiling post-incident forensic reports.',
        level: 'Intermediate',
        importance: 4
      },
      {
        name: 'Security Governance & Compliance',
        category: 'Foundational',
        description: 'Familiarity with frameworks like SOC2, ISO 27001, NIST, GDPR, and HIPAA compliance requirements.',
        level: 'Beginner',
        importance: 3
      }
    ],
    roadmap: [
      {
        phase: 'Phase 1',
        title: 'IT & Networking Basics',
        duration: '8 weeks',
        description: 'Understand how computers talk to each other. You cannot defend a network if you do not understand packets and routers.',
        skillsToLearn: ['TCP/IP Stack', 'DNS, HTTP, SSH, FTP', 'Subnetting & Routing', 'Windows Active Directory basics', 'Virtualization (VirtualBox/VMware)'],
        projectsToBuild: ['Virtual Lab Setup: Install PfSense Firewall, Windows Server, and Linux clients in an isolated virtual network.'],
        milestones: ['Successfully subnet an IP range', 'Ping and route packets between three virtual machines']
      },
      {
        phase: 'Phase 2',
        title: 'Linux Hardening & Command Line',
        duration: '6 weeks',
        description: 'Master the server operating system. Most security monitoring and server environments run on Linux.',
        skillsToLearn: ['Linux commands (grep, find, awk)', 'Permissions & File Ownership', 'SSH security', 'Cron jobs & automation', 'Bash scripting'],
        projectsToBuild: ['Log Parser Script: Write a Bash/Python script that scans system auth logs, aggregates failed logins, and blocks suspicious IPs.'],
        milestones: ['Perform all server tasks without a GUI', 'Automate a daily system backup script']
      },
      {
        phase: 'Phase 3',
        title: 'Defensive Security & Logs (SIEM)',
        duration: '8 weeks',
        description: 'Learn how to detect threats. Configure systems to record events and write rules to identify unauthorized activities.',
        skillsToLearn: ['Syslog structures', 'SIEM installation (Elastic/Splunk)', 'Log ingestion pipeline', 'Writing KQL/SPL search queries', 'Alert creation'],
        projectsToBuild: ['Personal SOC Lab: Spin up Elastic SIEM on a cloud instance, feed Windows/Linux logs, and generate alerts for brute-force attacks.'],
        milestones: ['Construct an active dashboard tracking failed log-ins', 'Trigger an automated email alert when root access is gained']
      },
      {
        phase: 'Phase 4',
        title: 'Packet Analysis & Threat Detection',
        duration: '8 weeks',
        description: 'Investigate raw network traffic. Learn to identify data exfiltration, port scans, and malware calls within packet streams.',
        skillsToLearn: ['Wireshark capture filters', 'TCP handshake inspection', 'Decrypting SSL/TLS concepts', 'Snort Intrusion Detection rules'],
        projectsToBuild: ['Forensic PCAP Investigation: Analyze a packet capture of a network breach, identifying the entry vector and stolen data.'],
        milestones: ['Differentiate between normal traffic patterns and malicious scans', 'Write custom rules for Snort IDS']
      },
      {
        phase: 'Phase 5',
        title: 'Vulnerability Management & Certification Prep',
        duration: '6 weeks',
        description: 'Identify weaknesses before attackers do. Prepare for your first security credentials and optimize your resume.',
        skillsToLearn: ['Nmap scanning flags', 'Nessus vulnerability assessment', 'CVSS scoring system', 'CompTIA Security+ preparation'],
        projectsToBuild: ['Corporate Network Vulnerability Report: Run Nmap/Nessus scans on a vulnerable machine, rank severity, and write remediation patches.'],
        milestones: ['Identify critical CVEs on active virtual systems', 'Pass multiple mock CompTIA Security+ exams']
      }
    ],
    certifications: [
      {
        title: 'CompTIA Security+',
        provider: 'CompTIA',
        url: 'https://www.comptia.org/certifications/security',
        duration: '2 Months',
        cost: '$400',
        isFree: false,
        difficulty: 'Beginner',
        hasCertificate: true,
        description: 'Covers core cybersecurity concepts, threats, network defense topologies, risk management, and security architecture.',
        whyTakeIt: 'This course is beginner-friendly and validates core security concepts. Essential for passing the initial recruiter filter. Required for most government IT contracts.'
      },
      {
        title: 'Google Cybersecurity Professional Certificate',
        provider: 'Google via Coursera',
        url: 'https://www.coursera.org/professional-certificates/google-cybersecurity',
        duration: '3-6 Months',
        cost: '$39/month',
        isFree: false,
        difficulty: 'Beginner',
        hasCertificate: true,
        description: 'Covers network security, Python scripting, SQL data searches, SIEM logs with QRadar, and intrusion logs.',
        whyTakeIt: 'Excellent, highly interactive beginner program. Includes practice labs with SIEM tools and includes a 30% discount voucher for the CompTIA Security+ exam.'
      },
      {
        title: 'eLearnSecurity Junior Penetration Tester (eJPT)',
        provider: 'INE',
        url: 'https://ine.com/learning/paths/elearnsecurity-junior-penetration-tester-v2',
        duration: '2 Months',
        cost: '$249',
        isFree: false,
        difficulty: 'Intermediate',
        hasCertificate: true,
        description: 'A 100% practical, hands-on certification that simulates a real penetration test. Covers assessment, host scanning, and network attacks.',
        whyTakeIt: 'A practical, hands-on exam that proves you can actively perform network scans and system auditing rather than just memorizing definitions.'
      }
    ],
    projects: [
      {
        title: 'Home SOC & HoneyPot Laboratory',
        description: 'Set up an active cloud server honeypot (decoy system) designed to attract hackers. Route connection logs to a central Elastic SIEM and visualize global brute-force sources.',
        difficulty: 'Advanced',
        duration: '20 hours',
        techStack: ['Ubuntu Server', 'Cowrie Honeypot', 'Elasticsearch', 'Kibana', 'Logstash', 'Docker'],
        keyFeatures: [
          'Fake filesystem mimicking high-value servers',
          'GeoIP mapping dashboard displaying attacker origin countries',
          'Automated IP blacklist generation'
        ],
        stepByStep: [
          'Deploy a cheap virtual private server (VPS) on DigitalOcean/AWS.',
          'Install Docker and run Cowrie Honeypot on port 22 (routing actual admin SSH to a secret port).',
          'Configure Kibana dashboard to query the Elasticsearch indices.',
          'Set up Logstash filter to clean honeypot logs and convert IP addresses into geographic coordinates using GeoIP.',
          'Design Kibana metrics tracking top username passwords tried by hackers (e.g. admin, root).',
          'Compile findings into a forensic report analyzing trends in modern automated attack bots.'
        ],
        deliverable: 'A step-by-step setup documentation blog post with screenshot proof of Kibana charts displaying live worldwide attacks.'
      },
      {
        title: 'Network Malware Traffic Analysis (PCAP Review)',
        description: 'Perform a forensic analysis of a packet capture file (PCAP) to document a ransomware intrusion, pinpointing the victim IP, malware strain, and domain queries.',
        difficulty: 'Intermediate',
        duration: '10 hours',
        techStack: ['Wireshark', 'NetworkMiner', 'VirusTotal', 'Markdown'],
        keyFeatures: [
          'Reconstructing HTTP traffic streams to extract malicious binaries',
          'Mapping out the compromised host timeline',
          'Investigating indicators of compromise (IOCs)'
        ],
        stepByStep: [
          'Download a sample PCAP file from Malware-Traffic-Analysis.net.',
          'Open the file in Wireshark and filter for HTTP/HTTPS requests to identify suspicious domains.',
          'Inspect DNS queries to find commands sent to command-and-control (C2) servers.',
          'Extract suspicious downloaded files from the HTTP stream and calculate their SHA256 hashes.',
          'Cross-reference file hashes on VirusTotal to identify the exact malware signature.',
          'Write a detailed Incident Response Investigation report documenting the timeline of the attack and recommending host containment steps.'
        ],
        deliverable: 'A formal Incident Analysis Report written in markdown documenting host vulnerabilities, malware hashes, and mitigation strategies.'
      }
    ],
    portfolioGuidance: {
      overview: 'Unlike web developers, cybersecurity analysts do not build apps. Your portfolio should showcase home labs, log analyses, write-ups of retired HackTheBox/TryHackMe boxes, and network blueprints. You must prove you can read logs, diagnose vulnerability scan results, and write professional security reports.',
      platforms: [
        {
          name: 'GitHub',
          description: 'A place to store log parsing scripts, automated bash firewall setups, and detailed lab write-ups.',
          tips: [
            'Upload PDF reports you have written. A well-written report is often the deciding factor in hiring an analyst.',
            'Include system maps showing network segmentations drawn using tools like Draw.io.'
          ]
        },
        {
          name: 'Personal Technical Blog',
          description: 'Write articles explaining your lab setups, detailing TryHackMe challenges, or analyzing recent CVE vulnerabilities.',
          tips: [
            'Write in a simple, analytical style. Prove you can communicate risk to both business owners and IT staff.',
            'Always obscure sensitive credentials or personal IP addresses in screenshots.'
          ]
        }
      ],
      resumeTips: [
        'Place certifications (e.g., CompTIA Security+) at the very top of your resume.',
        'List hands-on tool proficiencies: Wireshark, Splunk, Elastic SIEM, Nmap, Active Directory, Nessus, Linux Bash.',
        'Describe home labs under "Professional Projects" showing SIEM log analysis or server setups.'
      ],
      checklist: [
        'Have at least 1 document showing network architecture design.',
        'Have at least 1 detailed malware or log analysis investigation report.',
        'Have a write-up documenting a configured home lab (active firewall/SIEM).',
        'Ensure you have solved at least 50 security rooms on TryHackMe or HackTheBox.'
      ]
    },
    guidance: {
      startingPoint: 'Begin by studying IP networking configurations and virtualization before learning ethical hacking.',
      learningOrder: [
        '1. Networking Topologies & Subnets (CompTIA Network+)',
        '2. OS Administration & Shell Scripting (Linux)',
        '3. Log Management & Audits (Splunk/Elastic)',
        '4. Vulnerability Assessment & Pen-Testing Basics (Nmap/Wireshark)'
      ],
      beginnerAdvice: 'Security filters are rigid. Prioritize passing the CompTIA Security+ exam to clear automated HR application checkers. Without this baseline credential, it is difficult to secure an interview for Junior SOC roles.',
      commonMistakes: [
        'Jumping straight into hacking tools without learning standard TCP/IP networking.',
        'Neglecting to document honeypots and labs with system diagram files.',
        'Failing to practice technical incident response reporting write-ups.'
      ],
      motivationalQuote: 'Defenders must protect the entire surface, while attackers only need to find a single entry. Build strong foundations.'
    },
    nextSteps: {
      jobSearchTips: [
        'Look for titles like SOC Analyst Level 1, Junior Security Analyst, Cybersecurity Specialist, or IT Security Specialist.',
        'Apply for entry-level desktop support or network admin roles first if you struggle to land a security role immediately; these build essential background.'
      ],
      networkingTips: [
        'Join local DefCon groups (DC groups) or local ISACA/OWASP chapters.',
        'Participate in team-based Capture The Flag (CTF) events to meet local engineers.'
      ],
      interviewPrep: [
        'Be ready to explain the CIA Triad (Confidentiality, Integrity, Availability) and the 3-way TCP Handshake.',
        'Expect questions asking how you would handle an alert indicating a user just downloaded a known malware file.'
      ]
    }
  }
];
