const Skills = () => (
  <section id="skills" className="py-20 bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        My <span className="gradient-text">Skills</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* AI/ML & LLM Technologies */}
        <div className="bg-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-6 text-blue-400 flex items-center">
            <i className="fas fa-brain mr-2"></i> AI/ML & LLMs
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Python</span>
                <span>95%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "95%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>LangChain/LangGraph</span>
                <span>92%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "92%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>PyTorch</span>
                <span>85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>OpenCV/YOLO</span>
                <span>88%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "88%" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Frameworks & Orchestration */}
        <div className="bg-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-6 text-purple-400 flex items-center">
            <i className="fas fa-project-diagram mr-2"></i> AI Orchestration
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Azure AI Foundry</span>
                <span>90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Google ADK</span>
                <span>88%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "88%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>CrewAI</span>
                <span>85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>RAG/MCP</span>
                <span>92%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "92%" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Backend & APIs */}
        <div className="bg-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-6 text-green-400 flex items-center">
            <i className="fas fa-code mr-2"></i> Backend & APIs
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>FastAPI</span>
                <span>93%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "93%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Django</span>
                <span>88%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "88%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Flask</span>
                <span>90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Node.js</span>
                <span>80%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "80%" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Databases & Cloud */}
        <div className="bg-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-6 text-yellow-400 flex items-center">
            <i className="fas fa-database mr-2"></i> Databases & Cloud
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>PostgreSQL/PGVector</span>
                <span>92%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "92%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Azure Cosmos DB</span>
                <span>85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Neo4j</span>
                <span>88%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "88%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>AWS/Docker</span>
                <span>87%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "87%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-16 mb-8 text-center text-yellow-400">
        Technologies I Work With
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fab fa-python text-3xl text-blue-400 mb-2"></i>
          <span className="text-sm">Python</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fas fa-bolt text-3xl text-green-400 mb-2"></i>
          <span className="text-sm">FastAPI</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fas fa-server text-3xl text-green-500 mb-2"></i>
          <span className="text-sm">Django</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fas fa-flask text-3xl text-gray-300 mb-2"></i>
          <span className="text-sm">Flask</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fas fa-link text-3xl text-purple-300 mb-2"></i>
          <span className="text-sm">LangChain</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fas fa-project-diagram text-3xl text-purple-400 mb-2"></i>
          <span className="text-sm">LangGraph</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fas fa-plug text-3xl text-teal-300 mb-2"></i>
          <span className="text-sm">MCP</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fas fa-users text-3xl text-red-400 mb-2"></i>
          <span className="text-sm">CrewAI</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fab fa-microsoft text-3xl text-blue-500 mb-2"></i>
          <span className="text-sm">Azure AI</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fab fa-google text-3xl text-blue-400 mb-2"></i>
          <span className="text-sm">Google ADK</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fas fa-gem text-3xl text-purple-500 mb-2"></i>
          <span className="text-sm">Gemini</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fas fa-fire text-3xl text-orange-400 mb-2"></i>
          <span className="text-sm">PyTorch</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fas fa-eye text-3xl text-green-300 mb-2"></i>
          <span className="text-sm">OpenCV</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fas fa-crosshairs text-3xl text-red-400 mb-2"></i>
          <span className="text-sm">YOLO</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fab fa-react text-3xl text-blue-500 mb-2"></i>
          <span className="text-sm">React</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fab fa-js text-3xl text-yellow-400 mb-2"></i>
          <span className="text-sm">JavaScript</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fab fa-node-js text-3xl text-green-500 mb-2"></i>
          <span className="text-sm">Node.js</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fas fa-database text-3xl text-purple-400 mb-2"></i>
          <span className="text-sm">PostgreSQL</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fas fa-circle-nodes text-3xl text-cyan-400 mb-2"></i>
          <span className="text-sm">Neo4j</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fab fa-microsoft text-3xl text-blue-600 mb-2"></i>
          <span className="text-sm">Cosmos DB</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fas fa-vector-square text-3xl text-indigo-400 mb-2"></i>
          <span className="text-sm">PGVector</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fab fa-docker text-3xl text-blue-300 mb-2"></i>
          <span className="text-sm">Docker</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fab fa-aws text-3xl text-orange-500 mb-2"></i>
          <span className="text-sm">AWS</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fas fa-cube text-3xl text-purple-500 mb-2"></i>
          <span className="text-sm">Terraform</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fas fa-table text-3xl text-yellow-300 mb-2"></i>
          <span className="text-sm">Pandas</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fas fa-square-root-alt text-3xl text-blue-400 mb-2"></i>
          <span className="text-sm">NumPy</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fas fa-chart-line text-3xl text-yellow-500 mb-2"></i>
          <span className="text-sm">PowerBI</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fas fa-desktop text-3xl text-teal-400 mb-2"></i>
          <span className="text-sm">Gradio</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fab fa-git-alt text-3xl text-orange-600 mb-2"></i>
          <span className="text-sm">Git</span>
        </div>
      </div>
    </div>
  </section>
)

export default Skills
