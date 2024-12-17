import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatAnchorId = (text: string) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Supprime les accents
      .replace(/[^a-z0-9]+/g, '-') // Remplace les espaces et caractères spéciaux par des tirets
      .replace(/^-+|-+$/g, ''); // Supprime les tirets au début et à la fin
  };

  const navItems = ['À propos', 'Formation et expériences', 'Projets', 'Compétences', 'Contact'];
  const socialLinks = [
    { Icon: Github, href: 'https://github.com/antoinepascault', label: 'GitHub' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/antoine-pascault-66b1b5290/', label: 'LinkedIn' },
    { Icon: Mail, href: 'mailto:antoine.pascault@outlook.fr', label: 'Email' }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? theme === 'dark'
            ? 'bg-[#0f1729]/80 backdrop-blur-sm'
            : 'bg-[#f0f0e8]/90 backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className={`container mx-auto px-4 py-4 ${
        theme === 'light' ? 'text-gray-800' : 'text-white'
      }`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#home" 
            className="relative group"
          >
            <span className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 ${
              theme === 'light' ? 'text-gray-800' : 'text-white'
            }`}>
              Antoine Pascault
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Nav Links */}
            <div className="flex gap-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${formatAnchorId(item)}`}
                  className="relative group py-2"
                >
                  <span className={`${
                    theme === 'light' 
                      ? 'text-gray-700 group-hover:text-gray-900' 
                      : 'text-gray-300 group-hover:text-white'
                    } transition-colors duration-300`}>
                    {item}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pl-6 border-l border-gray-700/30">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  theme === 'light'
                    ? 'hover:bg-gray-200 text-gray-700'
                    : 'hover:bg-white/5 text-gray-400'
                }`}
                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {theme === 'light' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </button>
              {socialLinks.map(({ Icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative group p-2 rounded-lg transition-all duration-300 ${
                    theme === 'light'
                      ? 'hover:bg-gray-200'
                      : 'hover:bg-white/5'
                  }`}
                  aria-label={label}
                >
                  <Icon className={`w-5 h-5 ${
                    theme === 'light'
                      ? 'text-gray-600 group-hover:text-blue-600'
                      : 'text-gray-400 group-hover:text-blue-400'
                  } transition-colors duration-300`} />
                  <span className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1 ${
                    theme === 'light'
                      ? 'bg-white text-gray-800'
                      : 'bg-[#0f1729]/90 text-gray-300'
                  } rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap`}>
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0f1729]/80 backdrop-blur-sm">
            <div className="container mx-auto px-4 space-y-4 py-4">
              {/* Mobile Nav Links */}
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${formatAnchorId(item)}`}
                    className={`text-gray-300 hover:text-white transition-colors duration-300 py-2 ${
                      theme === 'light' ? 'text-gray-800' : 'text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* Mobile Social Links */}
              <div className="flex justify-center gap-6 pt-4 border-t border-gray-700/30">
                {socialLinks.map(({ Icon, href, label }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 ${
                      theme === 'light'
                        ? 'text-gray-600 hover:text-blue-600'
                        : 'text-gray-400 hover:text-blue-400'
                    } transition-colors duration-300`}
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}