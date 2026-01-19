import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-50 via-emerald-50 to-slate-50 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-emerald-600 font-semibold text-lg tracking-wide uppercase">
              Backend Developer
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
              Building Robust
              <br />
              <span className="text-emerald-600">Server Architecture</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Specialized in Java Spring Boot, MySQL, and scalable backend solutions
              that power modern applications
            </p>
          </div>

          <div className="flex justify-center space-x-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-white text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl border border-slate-200"
            >
              View Projects
            </a>
          </div>

          <div className="flex justify-center space-x-6 pt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-emerald-600 transition-colors duration-200"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-emerald-600 transition-colors duration-200"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-slate-600 hover:text-emerald-600 transition-colors duration-200"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400 hover:text-emerald-600 transition-colors duration-200"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
