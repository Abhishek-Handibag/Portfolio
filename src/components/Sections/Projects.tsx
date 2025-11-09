interface Project {
  icon: string;
  iconColor: string;
  title: string;
  description: string;
  technologies: string[];
  borderColor: string;
}

const Projects = () => {
  // Combine all projects into a single array
  const projects: Project[] = [
    {
      icon: "chart-line",
      iconColor: "blue",
      title: "StockSage - AI Multi-Agent Financial Intelligence System ⭐",
      description:
        "Professional-grade AI-powered multi-agent system built with Google's Agent Development Kit (ADK) and FastAPI for comprehensive financial market analysis and web intelligence. Features LLM-driven coordinator, financial data analysis via Alpha Vantage MCP (stocks, forex, crypto), web intelligence with Google Custom Search, and production-ready REST API.",
      technologies: [
        "Google ADK",
        "FastAPI",
        "Alpha Vantage MCP",
        "Multi-Agent",
        "RAG",
        "Gemini 2.5 Flash"
      ],
      borderColor: "blue"
    },
    {
      icon: "lock",
      iconColor: "pink",
      title: "VaultShare - Secure File Sharing Platform",
      description:
        "Engineered a secure file-sharing platform with enterprise-grade security features including client-side AES-128 encryption, PBKDF2 key derivation for enhanced security, JWT-based session control and OTP verification, file versioning and encrypted previews. Containerized deployment with Docker.",
      technologies: [
        "Django",
        "React",
        "AES-128",
        "PBKDF2",
        "JWT",
        "Docker"
      ],
      borderColor: "pink"
    },
    {
      icon: "car",
      iconColor: "red",
      title: "Driver Drowsiness Detection System",
      description:
        "Real-time drowsiness detection system leveraging facial landmarks (EAR, MAR, FAR) via DLIB to monitor driver alertness. Integrated audio alerts for drowsiness detection, automated dataset generation for validation, and web interface using Flask. Designed for potential in-vehicle deployment.",
      technologies: [
        "OpenCV",
        "DLIB",
        "Flask",
        "Python",
        "Computer Vision"
      ],
      borderColor: "red"
    },
    {
      icon: "robot",
      iconColor: "blue",
      title: "LLM-powered Assistant",
      description:
        "Built a FastAPI chatbot using Google Gemini, LangChain, and PGVector to assist users with documentation, navigation, and experience generation. Added vector search for contextual understanding.",
      technologies: [
        "FastAPI",
        "Google Gemini",
        "LangChain",
        "PGVector"
      ],
      borderColor: "blue"
    },
    {
      icon: "comments",
      iconColor: "green",
      title: "Enterprise RAG Chatbot",
      description:
        "Developed an internal chatbot that helps users log issues, escalate complaints, and build use-cases by retrieving structured insights using LangChain and enterprise integrations.",
      technologies: [
        "RAG",
        "LangChain",
        "Enterprise AI",
        "Chatbot"
      ],
      borderColor: "green"
    },
    {
      icon: "youtube",
      iconColor: "yellow",
      title: "Multimodal YouTube Chatbot",
      description:
        "Created a backend system that fetches YouTube videos, generates transcripts, and embeds them into PGVector for semantic search and question-answering over video content using Flask, React, and Python.",
      technologies: [
        "Flask",
        "React",
        "PGVector",
        "YouTube API"
      ],
      borderColor: "yellow"
    },
    {
      icon: "eye",
      iconColor: "red",
      title: "CognitiveEye - Real-time Surveillance System",
      description:
        "Developed a real-time surveillance system using OpenCV and YOLO to monitor live camera feeds. The system detects changes frame-by-frame, identifies objects, and raises alerts for unwanted or suspicious activities.",
      technologies: [
        "OpenCV",
        "YOLO",
        "Python",
        "NumPy"
      ],
      borderColor: "red"
    }
    
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="gradient-text">Projects</span>
        </h2>
        
        {/* Show all projects in a single section */}
        <ProjectSection title="Projects" textColor="blue" projects={projects} />
      </div>
    </section>
  )
}

const ProjectSection = ({ title, textColor, projects }: { title: string; textColor: string; projects: Project[] }) => (
  <>
    <h3 className={`text-2xl font-semibold mb-8 text-${textColor}-400`}>{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </>
)

const ProjectCard = ({ icon, iconColor, title, description, technologies, borderColor }: Project) => (
  <div className={`project-card rounded-xl p-6 border border-gray-700 hover:border-${borderColor}-400 transition duration-300 card-hover`}>
    <div className="flex justify-between items-start mb-4">
      <div>
        <i className={`fas fa-${icon} text-3xl text-${iconColor}-400 mb-3`}></i>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
      </div>
      <div className="flex space-x-2">
        <a href="#" className={`text-gray-400 hover:text-${iconColor}-400 transition duration-300`}>
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
    <p className="text-gray-300 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => {
        // Assign color classes based on technology name for accurate tag coloring
        let colorClass = "";
        switch (tech) {
          case "FastAPI":
          case "Python":
          case "RAG":
          case "Flask":
          case "OpenCV":
          case "Django":
            colorClass = "bg-blue-900 text-blue-300";
            break;
          case "Google Gemini":
          case "OpenAI":
          case "DLIB":
          case "React":
          case "LangChain":
            colorClass = "bg-purple-900 text-purple-300";
            break;
          case "PGVector":
          case "Enterprise AI":
          case "Cryptography":
            colorClass = "bg-green-900 text-green-300";
            break;
          case "Data Generation":
          case "Chatbot":
          case "YouTube API":
          case "Docker":
          case "Computer Vision":
            colorClass = "bg-yellow-900 text-yellow-300";
            break;
          default:
            colorClass = "bg-blue-900 text-blue-300";
        }
        // Special case for "Cryptography" and "Enterprise AI"
        if (tech === "Cryptography" || tech === "Enterprise AI") {
          colorClass = "bg-green-900 text-green-300";
        }
        // Special case for "Docker"
        if (tech === "Docker") {
          colorClass = "bg-yellow-900 text-yellow-300";
        }
        // Special case for "React"
        if (tech === "React") {
          colorClass = "bg-purple-900 text-purple-300";
        }
        return (
          <span key={index} className={`text-xs ${colorClass} px-2 py-1 rounded-full`}>
            {tech}
          </span>
        );
      })}
    </div>
  </div>
)

export default Projects
