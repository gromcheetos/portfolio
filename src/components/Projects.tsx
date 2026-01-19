import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform API',
      description:
        'Developed a comprehensive RESTful API for an e-commerce platform handling product management, user authentication, order processing, and payment integration. Implemented caching strategies for improved performance.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'Redis', 'JWT'],
      github: 'https://github.com',
      demo: 'https://example.com',
      color: 'from-emerald-400 to-teal-500',
    },
    {
      title: 'Microservices Architecture',
      description:
        'Designed and implemented a microservices-based system for a fintech application. Built separate services for user management, transactions, notifications, and reporting with inter-service communication using REST and message queues.',
      technologies: ['Spring Boot', 'PostgreSQL', 'RabbitMQ', 'Docker', 'Kubernetes'],
      github: 'https://github.com',
      demo: 'https://example.com',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      title: 'Real-Time Analytics Dashboard Backend',
      description:
        'Built a high-performance backend system for processing and serving real-time analytics data. Optimized complex database queries and implemented efficient data aggregation pipelines.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'MongoDB', 'WebSocket'],
      github: 'https://github.com',
      demo: 'https://example.com',
      color: 'from-green-400 to-emerald-500',
    },
    {
      title: 'Content Management System API',
      description:
        'Created a flexible CMS backend with role-based access control, content versioning, and a powerful search functionality. Implemented comprehensive API documentation using Swagger.',
      technologies: ['Spring Boot', 'MySQL', 'Elasticsearch', 'Spring Security'],
      github: 'https://github.com',
      demo: 'https://example.com',
      color: 'from-teal-400 to-cyan-500',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-slate-100"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-slate-600 hover:text-emerald-600 transition-colors duration-200"
                  >
                    <Github size={20} />
                    <span className="font-medium">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-slate-600 hover:text-emerald-600 transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                    <span className="font-medium">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
