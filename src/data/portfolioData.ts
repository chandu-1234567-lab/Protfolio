export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  category: string;
  summary: string;
  bulletPoints: string[];
  techStack: string[];
  githubUrl: string;
  image: string;
  highlights: string[];
  badgeColor: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  period: string;
  score: string;
  scoreType: string;
  description?: string;
  courses?: string[];
}

export interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
}

export interface TrainingItem {
  program: string;
  provider: string;
  period: string;
  points: string[];
  skills: string[];
}

export const PERSONAL_INFO = {
  name: "Chandra Sekhar Sriram",
  initials: "CS",
  role: "Data Engineer & Software Developer",
  tagline: "I design and build reliable data pipelines, real-time streaming architectures, and clear business dashboards that transform complex raw data into actionable decision-making tools.",
  about: `I am a Computer Science & Engineering student at Lovely Professional University specializing in Data Engineering. I enjoy taking raw, unstructured data and engineering robust systems to process, clean, and transform it at scale.

My work includes real-time streaming with Apache Kafka, data warehouse design and transformations using Snowflake & dbt, automated workflow scheduling with Apache Airflow & Docker, and building intuitive executive dashboards in Power BI. I focus on code clarity, database query performance, and reliable pipeline automation.`,
  location: "Vijayawada, Andhra Pradesh, India",
  phone: "+91 9652457321",
  rawPhone: "9652457321",
  email: "sanchichandu572@gmail.com",
  linkedin: "https://www.linkedin.com/in/chandra-sekhara-sriram-sanchi",
  linkedinUsername: "chandra-sekhara-sriram-sanchi",
  github: "https://github.com/chandu-1234567-lab",
  githubUsername: "chandu-1234567-lab",
  availability: "Open for Data Engineering Roles & Opportunities",
  quickStats: [
    { label: "Core Specialty", value: "Data Engineering", color: "blue" },
    { label: "Real-Time Tech", value: "Kafka, Snowflake, dbt", color: "indigo" },
    { label: "12th Standard", value: "94.4%", color: "teal" },
    { label: "10th Standard", value: "100% (10.0 GPA)", color: "amber" },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "spotify-pipeline",
    title: "Real-Time Spotify Music Analytics Pipeline",
    subtitle: "Real-Time Event Streaming, Data Transformation & Power BI Analytics",
    period: "Jan 2026 – Mar 2026",
    category: "Data Engineering & Streaming",
    image: "/images/spotify_analytics.jpg",
    summary: "An end-to-end data pipeline that ingests simulated live Spotify listening activity, loads records into cloud storage, cleans and structures relational datasets using dbt on Snowflake, and delivers real-time analytical dashboards in Power BI.",
    bulletPoints: [
      "Built low-latency real-time streaming producers and consumers using Python, Apache Kafka, and MinIO object storage.",
      "Designed clean modular data models using dbt and Snowflake for data transformation, testing, and automated schema documentation.",
      "Automated and scheduled continuous pipeline workflows with Apache Airflow DAGs packaged in Docker containers.",
      "Developed interactive Power BI dashboards to track top trending songs, artist stream counts, regional listening distribution, and listener device habits."
    ],
    techStack: ["Python", "Apache Kafka", "Snowflake", "dbt", "MinIO", "Apache Airflow", "Docker", "Power BI", "SQL"],
    githubUrl: "https://github.com/Chandu-Sanchi/spotify_project",
    highlights: ["Real-time Kafka streaming", "dbt data modeling", "Airflow automation", "Power BI dashboards"],
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
  },
  {
    id: "irctc-analytics",
    title: "IRCTC Ticket Booking Trend Dashboard",
    subtitle: "Data Pipeline, MySQL Schema Optimization & Passenger Capacity Analysis",
    period: "Feb 2024 – Mar 2024",
    category: "ETL & Analytics",
    image: "/images/irctc_dashboard.jpg",
    summary: "An end-to-end ETL system to process high-volume railway ticket booking datasets, designing optimized MySQL schemas for fast analytical queries and building interactive Power BI dashboards for capacity planning.",
    bulletPoints: [
      "Developed Python ETL scripts to extract, validate, and cleanse historical IRCTC booking records, standardizing date formats and route information.",
      "Designed structured relational tables with composite indexing in MySQL, significantly boosting aggregation query speed.",
      "Built comprehensive Power BI dashboards to visualize route-wise passenger volumes, seasonal spikes, and peak booking timeframes to assist with capacity allocation."
    ],
    techStack: ["Python", "MySQL", "Advanced SQL", "Pandas", "Power BI", "Data Modeling"],
    githubUrl: "https://github.com/chandu-1234567-lab/Irctc",
    highlights: ["Optimized MySQL queries", "Automated Python ETL", "Demand forecasting", "Interactive Power BI"],
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
  }
];

export const SKILL_GROUPS = [
  {
    category: "Data Engineering & Big Data",
    color: "border-blue-200 bg-blue-50/50 text-blue-900",
    pillColor: "bg-blue-50 text-blue-700 border-blue-200",
    skills: ["Apache Kafka", "Snowflake", "dbt (data build tool)", "Apache Spark", "Apache Airflow", "MinIO / Object Storage", "ETL/ELT Pipelines", "Schema Design"]
  },
  {
    category: "Programming & Databases",
    color: "border-indigo-200 bg-indigo-50/50 text-indigo-900",
    pillColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    skills: ["Python", "Advanced SQL", "MySQL", "Java", "Data Structures & Algorithms (DSA)", "Object-Oriented Programming (OOP)"]
  },
  {
    category: "Analytics & Business Intelligence",
    color: "border-teal-200 bg-teal-50/50 text-teal-900",
    pillColor: "bg-teal-50 text-teal-700 border-teal-200",
    skills: ["Power BI", "Pandas", "NumPy", "PyTorch / Machine Learning", "Data Modeling", "Trend Analysis"]
  },
  {
    category: "DevOps & Engineering Tools",
    color: "border-slate-200 bg-slate-50/50 text-slate-900",
    pillColor: "bg-slate-100 text-slate-700 border-slate-200",
    skills: ["Docker", "Git", "GitHub", "Linux / Bash", "VS Code", "CI/CD Basics"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "Lovely Professional University (LPU)",
    degree: "B.Tech in Computer Science and Engineering",
    location: "Jalandhar, Punjab",
    period: "2023 – 2027",
    score: "CGPA: 7.5",
    scoreType: "CGPA",
    description: "Academic focus on Distributed Systems, Big Data Analytics, Database Management Systems, Data Structures & Algorithms, and Cloud Computing.",
    courses: ["Distributed Systems", "DBMS", "DSA", "Big Data Analytics", "Operating Systems", "Cloud Computing"]
  },
  {
    institution: "Narayana Shivani Bhavan",
    degree: "Senior Secondary (12th Standard) — Science",
    location: "Vijayawada, Andhra Pradesh",
    period: "2021 – 2023",
    score: "94.4%",
    scoreType: "Percentage",
    description: "Completed intermediate education in Science (Mathematics, Physics, and Chemistry) with 94.4%."
  },
  {
    institution: "Narayana Kennedy Campus",
    degree: "Secondary School (10th Standard)",
    location: "Vijayawada, Andhra Pradesh",
    period: "2018 – 2021",
    score: "100% (10.0 GPA)",
    scoreType: "Percentage",
    description: "Achieved a perfect academic score across all curriculum subjects."
  }
];

export const TRAININGS: TrainingItem[] = [
  {
    program: "Python with Data Structures & Algorithms (DSA)",
    provider: "CSE Pathshala",
    period: "Jun 2025 – Jul 2025",
    points: [
      "In-depth training in core Python, OOP patterns, and time-space complexity optimization.",
      "Implemented fundamental data structures from scratch: Linked Lists, Stacks, Queues, Binary Trees, and Graphs.",
      "Enhanced algorithmic problem-solving techniques for production code quality."
    ],
    skills: ["Python", "DSA", "OOP", "Algorithm Optimization"]
  }
];

export const CERTIFICATIONS: CertificateItem[] = [
  {
    title: "Scaler Deep Learning Course",
    issuer: "Scaler Academy",
    date: "May 2026",
    description: "Comprehensive study of deep learning foundations, neural network architectures, and PyTorch implementation.",
    skills: ["Deep Learning", "PyTorch", "Python"]
  },
  {
    title: "Cloud Computing Certification",
    issuer: "NPTEL (IIT)",
    date: "November 2025",
    description: "Certified by IIT on cloud infrastructure, distributed virtualization, cloud storage paradigms, and fault tolerance.",
    skills: ["Cloud Computing", "Distributed Systems", "Virtualization"]
  }
];
