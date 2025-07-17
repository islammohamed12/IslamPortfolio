export const aiKnowledge = {
  personal: {
    name: "Islam Elsayed",
    title: "Mobile App Developer & Development Team Lead",
    location: "Dubai, United Arab Emirates",
    email: "islammohamed12@gmail.com",
    linkedin: "linkedin.com/in/islammohamed92",
    github: "github.com/islammohamed92",
    languages: ["Arabic (Native)", "English (Advanced)"],
    experience: "13+ years",
    availability: "Available for new projects and collaboration opportunities"
  },

  bio: {
    summary: "Experienced mobile app developer with expertise in React Native and IBM MobileFirst, with leadership capabilities in managing development teams. Specialized in building high-performance applications and developing government e-solutions.",
    background: "From Egypt to UAE, comprehensive experience in mobile and web development with focus on enterprise solutions and AI integration.",
    expertise: "Specialized in creating innovative mobile solutions with extensive experience in React Native, IBM MobileFirst, and cross-platform development."
  },

  skills: {
    mobile: ["React Native", "IBM MobileFirst", "Flutter", "iOS Development", "Android Development", "Cross-platform Development"],
    web: ["React", "Node.js", "Next.js", "Angular", "TypeScript", "JavaScript"],
    backend: ["Python", ".NET Core", "MongoDB", "PostgreSQL", "AWS", "Azure"],
    ai: ["OpenAI Integration", "FAISS", "LangChain", "AI Chatbots", "Machine Learning"],
    tools: ["Git", "Docker", "CI/CD", "Agile", "DevOps", "JIRA"]
  },

  experience: {
    current: {
      role: "Full Stack Development Technical Leader | Mobile Application Architect",
      company: "Federal Authority for Government Human Resources (FAHR)",
      period: "September 2022 - Present",
      highlights: [
        "Leading multinational development team for advanced AI and HR applications",
        "Achieved 40% efficiency improvement through OpenAI and FAISS integration",
        "Managed 10 major app releases with new self-service features",
        "Developed AI-powered virtual assistant with voice and LLM capabilities"
      ]
    },
    previous: [
      {
        role: "Senior Mobile Developer",
        company: "Various companies in UAE and Egypt",
        period: "2011 - 2022",
        highlights: [
          "Developed banking and insurance applications",
          "Built government service platforms",
          "Led cross-platform mobile development teams"
        ]
      }
    ]
  },

  // Removed duplicate projects array - now using work-projects.json

  contact: {
    email: "islammohamed12@gmail.com",
    linkedin: "https://linkedin.com/in/islammohamed92",
    location: "Dubai, UAE",
    availability: "Available for new projects and collaboration opportunities"
  },

  booking: {
    calendly: "https://calendly.com/islammelsayed",
    description: "Book a call to discuss development projects or technical consultations"
  },

  resume: {
    download: "/api/download-cv",
    filename: "cv-islam-mohamed.pdf",
    description: "Download my latest CV with comprehensive experience and skills"
  },

  education: [
    {
      degree: "Bachelor of Computer Science",
      institution: "Cairo University",
      year: "2011",
      location: "Cairo, Egypt"
    }
  ],

  certifications: [
    "IBM MobileFirst Platform Foundation",
    "React Native Advanced Concepts",
    "AWS Certified Developer",
    "Google Cloud Professional Developer"
  ]
};

export const aiPrompts = {
  system: `You are Islam Elsayed's personal AI assistant. You help answer questions about Islam's skills, experience, projects, and contact information. Always respond in a friendly, professional manner.

Key Information:
- Name: Islam Elsayed
- Role: Mobile App Developer & Development Team Lead
- Location: Dubai, UAE
- Experience: 13+ years
- Specialties: React Native, IBM MobileFirst, Cross-platform Development

Available Features:
1. About Islam (Bio, Skills, Experience)
2. Contact Information
3. Book a Meeting/Call
4. Portfolio/Projects Showcase
5. Resume/CV Access
6. Tech Stack Explanation

Always provide accurate, helpful information and guide users to appropriate actions when needed.`,

  greetings: [
    "Hello! I'm Islam's AI assistant. How can I help you today?",
    "Hi there! I can tell you about Islam's skills, projects, or help you get in touch. What would you like to know?",
    "Welcome! I'm here to help you learn about Islam's experience and connect with him. What can I assist you with?"
  ],

  fallback: "I'm sorry, I don't have information about that. I can help you with questions about Islam's skills, projects, experience, or contact information. What would you like to know?"
}; 