import { links } from './links';

export const projectData = {
  "mars-botics": {
    "id": "mars-botics",
    "title": "MARS-Botics — AI-Powered Gmail Assistant",
    "problem": "Business users spend excessive time manually processing emails and drafting context-aware responses, creating workflow bottlenecks.",
    "solution": "Built a full-stack application with a Spring Boot backend and React frontend that automates email processing using LLM pipelines and semantic search for intelligent, context-aware replies.",
    "tech": ["Java", "Spring Boot", "PostgreSQL", "React", "Gmail API", "VectorDB", "LangChain", "Docker"],
    "role": [
      "Designed RESTful API architecture and database schema",
      "Implemented Gmail API integration for email ingestion",
      "Built VectorDB pipeline for semantic document search",
      "Configured Docker-based deployment pipeline"
    ],
    "outcome": [
      "Reduced manual email reply time by automating context retrieval",
      "Deployed to production with end-to-end email workflow automation",
      "Integrated multi-model LLM support (Gemini, LLaMA)"
    ],
    "liveDemo": links.projects.marsBotics.liveDemo,
    "github": links.projects.marsBotics.github,
    "screenshot": "https://placehold.co/1200x600/0d9488/ffffff?text=MARS-Botics+Dashboard",
    "screenshots": []
  },
  "nlidb": {
    "id": "nlidb",
    "title": "Text-to-SQL — Natural Language Database Query System",
    "problem": "Non-technical users need database insights but lack SQL knowledge, creating developer bottlenecks for data access.",
    "solution": "Built a two-agent LLM architecture where Agent 1 (Generator) converts natural language to SQL, and Agent 2 (Validator) enforces security and correctness before execution.",
    "tech": ["Python", "PostgreSQL", "Streamlit", "LLM APIs (OpenAI, Gemini, DeepSeek)", "Prompt Engineering", "SQL Validation"],
    "role": [
      "Designed two-agent LLM pipeline with generator and validator agents",
      "Implemented SQL security layer (read-only access, injection prevention)",
      "Built auto-visualization engine that selects chart types based on results",
      "Integrated multi-provider LLM support with failover"
    ],
    "outcome": [
      "Enabled non-technical users to query databases using plain English",
      "Zero SQL injection vulnerabilities (strict validation layer)",
      "Supports 5+ LLM providers with automatic fallback"
    ],
    "github": "https://github.com/AbhiSondakar/text-to-sql",
    "screenshot": "/nlidb-screenshots/screenshot-1.png",
    "screenshots": [
      "/nlidb-screenshots/screenshot-1.png",
      "/nlidb-screenshots/screenshot-2.png",
      "/nlidb-screenshots/screenshot-3.png",
      "/nlidb-screenshots/screenshot-4.png",
      "/nlidb-screenshots/screenshot-5.png"
    ]
  }
};
