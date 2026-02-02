import { useState, useEffect } from 'react';
import {Languages, Menu, X} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const { lang, toggleLang } = useLanguage();

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItemsByLang = {
    en: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
      { label: 'Experience', href: '#experience' },
      { label: 'Contact', href: '#contact' },
    ],
    ko: [
      { label: '홈', href: '#home' },
      { label: '소개', href: '#about' },
      { label: '기술', href: '#skills' },
      { label: '프로젝트', href: '#projects' },
      { label: '경험', href: '#experience' },
      { label: '연락', href: '#contact' },
    ],
  } as const;

  const navItems = navItemsByLang[lang];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-emerald-600">&lt;Dev/&gt;</div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-slate-700 hover:text-emerald-600 transition-colors duration-200 font-medium">
                {item.label}
              </button>
            ))}
          <button
              onClick={toggleLang}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:text-emerald-600 hover:border-emerald-200 hover:bg-emerald-50 transition-colors duration-200 font-medium"
              aria-label="Change language"
              title="Change language">
            <Languages size={18} />
            <span>{lang === 'en' ? 'EN' : 'KO'}</span>
          </button>
        </div>

          <button
            className="md:hidden text-slate-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:text-emerald-600 hover:bg-slate-50 rounded-md transition-colors duration-200">
                {item.label}
              </button>
            ))}
            <button
                onClick={toggleLang}
                className="block w-full text-left px-3 py-2 text-slate-700 hover:text-emerald-600 hover:bg-slate-50 rounded-md transition-colors duration-200">
              {lang === 'en' ? '한국어로 보기' : 'View in English'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
