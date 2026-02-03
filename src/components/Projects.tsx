import { ExternalLink, Github, ShieldCheck } from 'lucide-react';
import { projects } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';

const Projects = () => {
  const { lang } = useLanguage();
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
          {projects.map((project) => ( // for(Project project : projects){ renderCard(project);}
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-slate-100">
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {project.title[lang]}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description[lang]}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.github ? (
                  <a href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-slate-600 hover:text-emerald-600 transition-colors duration-200">
                    <Github size={20} />
                    <span className="font-medium">Code</span>
                  </a>
                  ) :(
                      <span className="flex items-center space-x-2 text-emerald-600 font-semibold">
                        <ShieldCheck size={20} />
                        <span>In Production</span>
                      </span>
                  )}
                  {project.externalLink &&(
                  <a href={project.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-slate-600 hover:text-emerald-600 transition-colors duration-200">
                    <ExternalLink size={20} />
                    <span className="font-medium">{project.externalLabel === 'production' ? 'Live System' : 'Demo'}</span>
                    </a>
                  )}
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
