export const profile = {
  name: "Sahiti Lavu",
  title: "AI Engineer",
  tagline: "Generative AI · Agentic Systems · GraphRAG · Multimodal AI",
  summary:
    "AI Engineer specializing in Generative AI, Agentic Systems, GraphRAG, and Multimodal AI, with 4+ years of experience building production-scale LLM applications, diffusion models, and enterprise knowledge systems. Skilled in Python, PyTorch, LangChain, AWS/GCP, vector databases, and MLOps, with expertise in RAG, AI agents, model evaluation, and scalable AI deployment.",
  location: "Cincinnati, OH",
  email: "sahiti.lavu@example.com",
  github: "https://github.com/sahitilavu",
  linkedin: "https://www.linkedin.com/in/sahiti-lavu",
};

export const education = {
  degree: "Master of Science in Information Technology",
  school: "University of Cincinnati, OH",
};

export const skills = [
  {
    category: "Generative AI",
    items: [
      "LLMs",
      "RAG",
      "GraphRAG",
      "Prompt Engineering",
      "Fine-Tuning",
      "LoRA",
      "LangChain",
      "LangGraph",
      "MCP",
      "Hugging Face",
      "OpenAI SDK",
      "Claude API",
      "Vector Databases",
      "Agentic AI",
    ],
  },
  {
    category: "Machine Learning",
    items: [
      "PyTorch",
      "XGBoost",
      "LightGBM",
      "Scikit-learn",
      "Deep Learning",
      "NLP",
      "Computer Vision",
    ],
  },
  {
    category: "Cloud & MLOps",
    items: [
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "MLflow",
      "Weights & Biases",
      "FastAPI",
      "Model Monitoring",
      "vLLM",
    ],
  },
  {
    category: "Data Engineering",
    items: ["SQL", "PostgreSQL", "Pinecone", "FAISS", "ETL Pipelines"],
  },
];

export const experience = [
  {
    company: "Notion",
    role: "AI Engineer",
    period: "Aug 2025 – May 2026",
    highlights: [
      "Developed enterprise-grade Retrieval-Augmented Generation (RAG) systems powering intelligent workspace search and AI-assisted knowledge discovery across documents, wikis, and project artifacts.",
      "Built agentic AI workflows leveraging LangChain, tool-calling architectures, and vector databases, improving retrieval relevance and reducing enterprise search latency.",
      "Implemented evaluation pipelines, prompt optimization strategies, and context management frameworks that improved answer groundedness and reduced hallucinations.",
      "Designed scalable AI microservices and REST APIs supporting semantic search, document understanding, and AI-assisted content generation — including knowledge intelligence capabilities across millions of indexed documents and collaborative workspace artifacts.",
      "Collaborated with product, backend, and ML teams to integrate LLM capabilities into productivity workflows used by enterprise customers.",
    ],
  },
  {
    company: "Neural Garage",
    role: "AI/ML Engineer",
    period: "May 2022 – May 2024",
    highlights: [
      "Designed and deployed advanced SDXL-based image generation systems using Multi-LoRA, ControlNet, and composable diffusion architectures for controllable content generation.",
      "Built and maintained large-scale synthetic datasets using LLaVA-13B, BLIP-2, and automated captioning pipelines to support multimodal model training.",
      "Fine-tuned custom diffusion models using Kohya-SS, LoRA adaptation, Noise Offset, and Min-SNR weighting techniques, improving generation quality and consistency.",
      "Conducted hyperparameter optimization across diffusion architectures, improving visual fidelity, style adherence, and character consistency by 18%.",
      "Integrated SAM, ControlNet, and IP-Adapter workflows, improving localized image editing accuracy and regional coherence by 25%.",
      "Collaborated with research teams on multimodal AI initiatives involving computer vision, generative AI, and vision-language models.",
    ],
  },
  {
    company: "Adobe",
    role: "Machine Learning Intern",
    period: "Apr 2021 – Mar 2022",
    highlights: [
      "Developed machine learning pipelines for content intelligence and document understanding applications using Python, Scikit-learn, and deep learning frameworks.",
      "Built data preprocessing and feature engineering workflows on large-scale text and image datasets to support AI-powered creative and productivity products.",
      "Trained and evaluated NLP and computer vision models for classification, semantic tagging, and content recommendation use cases.",
      "Automated model evaluation, experimentation, and reporting workflows, reducing manual analysis effort and improving reproducibility.",
      "Collaborated with data scientists and software engineers to deploy and monitor machine learning models in cloud-based development environments.",
    ],
  },
];

export const projects = [
  {
    title: "GraphRAG Knowledge Intelligence System",
    description:
      "Designed a GraphRAG-powered enterprise knowledge platform combining vector search and knowledge graphs across 5M+ documents.",
    highlights: [
      "Implemented hybrid retrieval, reranking, and graph traversal techniques to improve factual accuracy by 35%.",
      "Built evaluation pipelines for hallucination detection and answer groundedness.",
    ],
    tags: ["GraphRAG", "Vector Search", "Knowledge Graphs", "LangChain"],
  },
  {
    title: "Enterprise Agentic AI Platform",
    description:
      "Built a multi-agent enterprise AI platform capable of planning, retrieval, reasoning, and tool execution across internal knowledge systems.",
    highlights: [
      "Implemented memory management, workflow orchestration, and MCP-based integrations with Slack, Jira, and Confluence.",
      "Reduced manual operational effort by 65% through autonomous task execution and intelligent workflow automation.",
    ],
    tags: ["Multi-Agent Systems", "MCP", "Workflow Automation"],
  },
  {
    title: "LLM Evaluation & Safety Platform",
    description:
      "Built an evaluation framework for benchmarking LLMs across factuality, reasoning, latency, and safety metrics.",
    highlights: [
      "Implemented hallucination detection, prompt-injection testing, and automated regression evaluation pipelines.",
      "Reduced unsafe or low-confidence outputs through systematic evaluation and guardrail optimization.",
    ],
    tags: ["LLM Evaluation", "AI Safety", "Guardrails"],
  },
];

export const publications = [
  {
    title:
      "Enhancing Acute Lymphoblastic Leukemia Classification with a Rapid and Effective CNN Model",
    venue: "Published in ICDCECE",
  },
];

export const certifications = [
  "AWS Certified Solutions Architect – Associate (SAA-C03)",
  "AWS Certified Machine Learning Engineer – Associate",
  "Databricks Generative AI Engineer Associate",
  "AWS Cloud Technical Essentials",
];
