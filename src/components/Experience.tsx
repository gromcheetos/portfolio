import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Backend Developer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description:
        'Lead backend development for enterprise-level applications using Spring Boot and MySQL. Architected microservices infrastructure and mentored junior developers.',
      achievements: [
        'Reduced API response time by 45% through optimization',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Led migration from monolithic to microservices architecture',
      ],
    },
    {
      title: 'Backend Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      description:
        'Developed and maintained RESTful APIs for multiple client projects. Focused on database design, query optimization, and API security.',
      achievements: [
        'Built scalable API handling 10M+ requests daily',
        'Designed database schemas for 5+ major projects',
        'Improved system performance by 35% through caching',
      ],
    },
    {
      title: 'Junior Java Developer',
      company: 'StartUp Ventures',
      period: '2018 - 2020',
      description:
        'Worked on various backend features using Java and Spring framework. Gained experience in full software development lifecycle.',
      achievements: [
        'Contributed to core API development',
        'Implemented unit tests achieving 85% code coverage',
        'Participated in agile development processes',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-emerald-600"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-emerald-600 font-semibold mb-2">
                    <Briefcase size={18} />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-slate-600 mt-2 md:mt-0">
                  <Calendar size={18} />
                  <span className="font-medium">{exp.period}</span>
                </div>
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                {exp.description}
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-slate-900">Key Achievements:</h4>
                <ul className="list-none space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li
                      key={achIndex}
                      className="flex items-start space-x-2 text-slate-700"
                    >
                      <span className="text-emerald-600 mt-1">▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
