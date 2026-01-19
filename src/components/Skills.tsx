const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Spring Boot', level: 90 },
        { name: 'Spring Security', level: 85 },
        { name: 'Hibernate/JPA', level: 88 },
        { name: 'RESTful APIs', level: 92 },
        { name: 'Microservices', level: 80 },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 75 },
        { name: 'Redis', level: 80 },
        { name: 'Database Design', level: 88 },
        { name: 'Query Optimization', level: 85 },
      ],
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 85 },
        { name: 'Maven/Gradle', level: 88 },
        { name: 'Jenkins/CI-CD', level: 80 },
        { name: 'Linux', level: 82 },
        { name: 'AWS', level: 75 },
      ],
    },
    {
      title: 'Additional Skills',
      skills: [
        { name: 'Unit Testing (JUnit)', level: 88 },
        { name: 'API Documentation', level: 90 },
        { name: 'Agile/Scrum', level: 85 },
        { name: 'Problem Solving', level: 92 },
        { name: 'System Design', level: 87 },
        { name: 'Performance Tuning', level: 83 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-emerald-600 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
