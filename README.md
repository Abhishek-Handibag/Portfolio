# Abhishek Handibag - Portfolio Website

A modern, responsive portfolio website showcasing my work as an AI Engineer, featuring projects in Generative AI, Computer Vision, LLM integrations, and Full-Stack Development.

## 🚀 Live Demo

Visit the live portfolio: [Portfolio Website](https://me.deepquerry.com/)

## 👨‍💻 About

This portfolio website represents my professional journey as an AI Engineer based in Pune, India. It highlights my expertise in:

- **Artificial Intelligence & Machine Learning**: LLMs, Generative AI, Computer Vision
- **AI Orchestration**: LangChain, LangGraph, Google ADK, Azure AI Foundry, CrewAI
- **Backend Development**: FastAPI, Django, Flask, Node.js
- **Vector Databases**: PGVector, Azure Cosmos DB, Neo4j
- **Cloud & DevOps**: AWS, Docker, Azure

## ✨ Features

- **Responsive Design**: Fully responsive layout optimized for all devices
- **Modern UI/UX**: Clean, professional interface with smooth animations
- **Interactive Sections**:
  - Hero section with social media links
  - About section with professional background
  - Projects showcase with 10+ featured projects
  - Skills visualization with proficiency levels
  - Certifications display
  - Contact form with Formspree integration
- **Smooth Navigation**: Fixed navbar with section scroll functionality
- **Type Animation**: Dynamic typing effect in hero section
- **Gradient Effects**: Modern gradient text and hover effects

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0**: UI library
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and dev server

### Form Handling
- **Formspree**: Contact form submissions

### Development Tools
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## 📂 Project Structure

```
Portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   ├── components/
│   │   ├── Layout/        # Layout components
│   │   │   ├── Navbar.tsx # Navigation bar
│   │   │   └── Footer.tsx # Footer component
│   │   └── Sections/      # Page sections
│   │       ├── Hero.tsx   # Landing/hero section
│   │       ├── About.tsx  # About section
│   │       ├── Projects.tsx    # Projects showcase
│   │       ├── Skills.tsx      # Skills & technologies
│   │       ├── Certifications.tsx # Certifications
│   │       └── Contact.tsx     # Contact form
│   ├── styles/            # Custom CSS files
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # App entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind CSS config
├── tsconfig.json          # TypeScript config
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Abhishek-Handibag/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Sections Overview

### Hero Section
Introduction with animated typing effect, professional title, and quick access to projects and contact form. Includes social media links (GitHub, LinkedIn, Twitter, Email).

### About Section
Professional background highlighting expertise in AI Engineering, Full-Stack Development, and key achievements with 10+ completed projects.

### Projects Section
Showcase of featured projects including:
- **StockSage**: Multi-agent AI financial intelligence system with Google ADK
- **VaultShare**: Secure file-sharing platform with AES-128 encryption
- **Driver Drowsiness Detection**: Real-time computer vision system
- **LLM-powered Assistant**: FastAPI chatbot with vector search
- **Enterprise RAG Chatbot**: Internal documentation assistant
- **Multimodal YouTube Chatbot**: Video content Q&A system
- And more...

### Skills Section
Categorized skills with proficiency visualization:
- AI/ML & LLMs (Python, LangChain, PyTorch, OpenCV)
- AI Orchestration (Azure AI Foundry, Google ADK, CrewAI, RAG)
- Backend & APIs (FastAPI, Django, Flask, Node.js)
- Databases & Cloud (PostgreSQL, PGVector, Neo4j, Azure, AWS)

### Certifications Section
Professional certifications including:
- Neo4j Certified Professional
- Google IT Automation with Python
- Google Data Analytics

### Contact Section
Interactive contact form powered by Formspree for direct communication, along with email and location information.

## 🎨 Customization

### Update Personal Information

Edit the content in respective component files:
- `src/components/Sections/Hero.tsx` - Name, title, social links
- `src/components/Sections/About.tsx` - Bio and details
- `src/components/Sections/Projects.tsx` - Project information
- `src/components/Sections/Skills.tsx` - Skills and proficiency
- `src/components/Sections/Certifications.tsx` - Certifications

### Styling

- Tailwind CSS classes are used throughout the components
- Custom styles in `src/styles/Portfolio.css`
- Global styles in `src/index.css`
- Tailwind configuration in `tailwind.config.js`

### Contact Form

Update the Formspree form ID in `src/components/Sections/Contact.tsx`:
```typescript
const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID");
```

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
```

This generates optimized files in the `dist/` directory.

### Deployment Options

- **Vercel**: Connect GitHub repo for automatic deployments
- **Netlify**: Drag and drop `dist/` folder or connect repository
- **GitHub Pages**: Use `gh-pages` package
- **Azure Static Web Apps**: Deploy via Azure portal or CLI
- **AWS S3 + CloudFront**: Host static files on S3

## 🔗 Connect With Me

- **Email**: abhishek.handibag@gmail.com
- **LinkedIn**: [linkedin.com/in/abhishek-handibag](https://www.linkedin.com/in/abhishek-handibag/)
- **GitHub**: [github.com/Abhishek-Handibag](https://github.com/Abhishek-Handibag)
- **Twitter**: [@AIwithAbhishek](https://x.com/AIwithAbhishek)
- **Location**: Pune, India

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with React and Vite
- Styled with Tailwind CSS
- Icons by Font Awesome
- Form handling by Formspree

---

**Made with ❤️ by Abhishek Handibag**
