import {Code2, Database, Server, Zap} from 'lucide-react';
import {highlights, paragraph} from "../data/about.ts";
import { useLanguage } from '../i18n/LanguageContext';


const iconByType = {
  code: <Code2 className="w-6 h-6" />,
  db: <Database className="w-6 h-6" />,
  server: <Server className="w-6 h-6" />,
  perform: <Zap className="w-6 h-6" />,
} as const;

const About = () => {
  const { lang } = useLanguage();

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
            {paragraph.map((content) =>(
            <p key={content.id} className="text-lg text-slate-700 leading-relaxed">
            {content.contents[lang]}
            </p>
              ))}
          </div>

        <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight) => (
              <div
                key={highlight.type}
                className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-slate-100">
                <div className="text-emerald-600 mb-3">{iconByType[highlight.type]}</div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  {highlight.title[lang]}
                </h3>
                <p className="text-sm text-slate-600">{highlight.description[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;