import { Code2, Database, Server, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Clean Code',
      description: 'Writing maintainable, testable, and scalable code following best practices',
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Database Design',
      description: 'Expert in relational database design, optimization, and complex queries',
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'API Development',
      description: 'Building RESTful APIs and microservices with Spring Boot framework',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance',
      description: 'Optimizing backend performance and implementing caching strategies',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              I'm a passionate backend developer with expertise in building robust,
              scalable server-side applications. My focus is on creating efficient
              APIs and database architectures that serve as the foundation for
              powerful digital experiences.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              With deep knowledge of Java Spring Boot and MySQL, I specialize in
              developing enterprise-grade solutions that handle complex business
              logic, ensure data integrity, and deliver exceptional performance
              under demanding conditions.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              I believe in writing clean, well-documented code and following
              industry best practices to create systems that are not only
              functional but also maintainable and scalable for future growth.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-slate-100"
              >
                <div className="text-emerald-600 mb-3">{highlight.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-slate-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
