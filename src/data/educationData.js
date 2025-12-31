import { links } from './links';

// Education data following the same pattern as projectData.js
export const educationData = {
    degree: {
        title: "Bachelor of Engineering",
        specialization: "Computer Science (AI and ML)",
        institution: "Global Academy of Technology, Bengaluru",
        duration: "Aug 2023 - Jun 2027 (Expected)",
        cgpa: "8.25"
    },

    coursework: [
        { name: "Data Structures & Algorithms", category: "data" },
        { name: "Database Management Systems", category: "data" },
        { name: "Data Analysis", category: "data" },
        { name: "Data Warehouse & Mining", category: "data" },
        { name: "Operating Systems", category: "systems" },
        { name: "Computer Networking", category: "systems" },
        { name: "Software Engineering", category: "systems" },
        { name: "Artificial Intelligence", category: "ai" },
        { name: "Machine Learning", category: "ai" },
        { name: "Web Development", category: "ai" }
    ],

    certifications: [
        {
            title: "Programming Using Java",
            provider: "Infosys Springboard",
            description: "Core Java, OOP, Collections, Exception Handling",
            link: links.certificates.javaProgramming
        },
        {
            title: "Docker",
            provider: "Simplilearn",
            description: "Containers, Dockerfiles, Deployment",
            link: links.certificates.docker
        },
        {
            title: "Machine Learning",
            provider: "Infosys Springboard",
            description: "ML Foundation, Model Training, Evaluation",
            link: links.certificates.machineLearning
        },
        {
            title: "Computer Networking Basics",
            provider: "Cisco",
            description: "OSI/TCP-IP, Protocols, Network Infrastructure",
            link: links.certificates.networkingBasics
        },
        {
            title: "Data Science",
            provider: "Cisco",
            description: "EDA, Visualization, Data Insights",
            link: links.certificates.datascience
        },
        {
            title: "Agentic AI Day",
            provider: "Participation Certificate",
            description: "Autonomous AI Agents, LLM Workflows",
            link: links.certificates.agenticAI
        }
    ]
};
