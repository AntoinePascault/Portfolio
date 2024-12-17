import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollTo } from '../hooks/useScrollTo';
import { useTheme } from '../context/ThemeContext';

export default function Hero() {
  const scrollTo = useScrollTo();
  const { theme } = useTheme();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollTo(id);
  };

  return (
    <section id="home" className={`relative min-h-screen flex items-center justify-center pt-16 ${
      theme === 'light' ? 'bg-[#f0f0e8]' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-blue-500 font-mono">Bonjour, je suis</p>
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                  Antoine Pascault
                </span>
              </h1>
              <p className={`text-2xl md:text-3xl font-light ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}>
                Etudiant en Informatique.
              </p>
            </div>
            
            <p className={`text-xl max-w-xl ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-300'
            }`}>
              Passionné par la création d'expériences web innovantes et élégantes. 
              Je transforme des idées en applications web modernes et performantes.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="#projets" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                onClick={(e) => handleClick(e, 'projets')}
              >
                Voir mes projets
              </a>
              <a 
                href="#me-contacter" 
                className={`px-8 py-3 border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  theme === 'light' ? 'hover:bg-blue-50' : ''
                }`}
                onClick={(e) => handleClick(e, 'me-contacter')}
              >
                Me contacter
              </a>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
            <div className={`relative ${
              theme === 'light' 
                ? 'bg-[#f5f5ed]/90 border-[#e5e5dd]' 
                : 'bg-gray-900/50 border-gray-800'
            } backdrop-blur-sm p-8 rounded-2xl border-2`}>
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <pre className={`text-sm font-mono ${
                  theme === 'light' ? 'text-gray-800' : ''
                }`}>
                  <code className="text-blue-500">const</code>{" "}
                  <code className="text-purple-500">developer</code> = {"{"}
                  <br />
                  {"  "}name: <code className="text-green-500">'Antoine'</code>,
                  <br />
                  {"  "}role: <code className="text-green-500">'Full Stack Developer'</code>,
                  <br />
                  {"  "}skills: [
                  <br />
                  {"    "}<code className="text-green-500">'React'</code>,
                  <code className="text-green-500">'Next.js'</code>,
                  <code className="text-green-500">'TypeScript'</code>,
                  <br />
                  {"    "}<code className="text-green-500">'Node.js'</code>,
                  <code className="text-green-500">'Express'</code>,
                  <code className="text-green-500">'MySQL'</code>,
                  <br />
                  {"    "}<code className="text-green-500">'Tailwind'</code>,
                  <code className="text-green-500">'Git'</code>
                  <br />
                  {"  "}],
                  <br />
                  {"}"};
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#projets" 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce p-2 rounded-full backdrop-blur-sm border-2 ${
          theme === 'light'
            ? 'bg-white/50 border-gray-200'
            : 'bg-gray-800/50 border-gray-700'
        }`}
        onClick={(e) => handleClick(e, 'projets')}
      >
        <ChevronDown className="w-6 h-6 text-blue-500" />
      </a>
    </section>
  );
}