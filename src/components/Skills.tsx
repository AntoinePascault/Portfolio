import React from 'react';
import { Code, Database, Globe, Brain, Users, Cog } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

type Skill = {
  name: string;
};

const skills = {
  'Langages web': {
    icon: Globe,
    description: 'Développement web frontend',
    skills: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'React' },
      { name: 'Tailwind' }
    ]
  },
  'Langages de programmation': {
    icon: Code,
    description: 'Langages de programmation backend',
    skills: [
      { name: 'C#' },
      { name: 'Python' },
      { name: 'Java' }
    ]
  },
  'Base de données': {
    icon: Database,
    description: 'Gestion et manipulation des données',
    skills: [
      { name: 'MySQL' },
      { name: 'Cypher' }
    ]
  },
  'Compétences globales': {
    icon: Cog,
    description: 'Compétences transversales',
    skills: [
      { name: 'Gestion de projet' },
      { name: 'Git/GitHub' },
      { name: 'Méthodologies Agiles' }
    ]
  },
  'Soft Skills': {
    icon: Users,
    description: 'Compétences humaines et relationnelles',
    skills: [
      { name: 'Travail en équipe' },
      { name: 'Communication' },
      { name: 'Adaptabilité' },
      { name: 'Résolution de problèmes' },
      { name: 'Autonomie' },
      { name: 'Curiosité' }
    ]
  }
};

function SkillItem({ skill }: { skill: Skill }) {
  const { theme } = useTheme();
  
  return (
    <div className="relative group">
      <div className={`relative backdrop-blur-sm rounded-lg p-4 
        transform hover:scale-[1.02] hover:-translate-y-0.5
        transition-all duration-300 ease-out
        shadow-lg ${
          theme === 'light'
            ? 'bg-white/80 ring-1 ring-blue-200 hover:ring-2 hover:ring-blue-300 hover:bg-white/90 shadow-blue-100/5 hover:shadow-blue-200/20'
            : 'bg-[#0f1729]/80 ring-1 ring-blue-500/20 hover:ring-2 hover:ring-blue-500/40 hover:bg-[#0f1729]/90 shadow-blue-500/5 hover:shadow-blue-500/20'
        }`}>
        <span className={`font-medium text-[15px] ${
          theme === 'light' ? 'text-gray-700' : 'text-white'
        }`}>{skill.name}</span>
      </div>
    </div>
  );
}

export default function Skills() {
  const { theme } = useTheme();

  return (
    <section id="competences" className={`py-20 ${
      theme === 'light' ? 'bg-[#f0f0e8]' : ''
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Compétences Techniques
            </span>
          </h2>
          <p className={`max-w-2xl mx-auto ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-300'
          }`}>
            Un ensemble complet de compétences en développement, 
            avec une expertise particulière en développement web et programmation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
          {Object.entries(skills).map(([category, { icon: Icon, description, skills }]) => (
            <div 
              key={category}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-xl ${
                theme === 'light' 
                  ? 'opacity-20 group-hover:opacity-30' 
                  : 'opacity-30 group-hover:opacity-50'
              } transition-all duration-500`} />
              <div className={`relative backdrop-blur-sm rounded-xl p-8 
                transition-all duration-300 ${
                  theme === 'light'
                    ? 'bg-white/60 ring-1 ring-blue-200 group-hover:ring-blue-300 shadow-lg shadow-blue-100/5 group-hover:shadow-blue-200/20'
                    : 'bg-[#0f1729]/60 ring-1 ring-blue-500/20 group-hover:ring-blue-500/30 shadow-lg shadow-blue-500/5 group-hover:shadow-blue-500/20'
                }`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur-md ${
                      theme === 'light'
                        ? 'opacity-30 group-hover:opacity-40'
                        : 'opacity-40 group-hover:opacity-60'
                    } transition-opacity duration-300`} />
                    <div className={`relative p-3 rounded-lg transition-all duration-300 ${
                      theme === 'light'
                        ? 'bg-blue-100/50 ring-1 ring-blue-200 group-hover:ring-blue-300'
                        : 'bg-blue-500/10 ring-1 ring-blue-500/20 group-hover:ring-blue-500/40'
                    }`}>
                      <Icon className={`w-8 h-8 ${
                        theme === 'light'
                          ? 'text-blue-600 group-hover:text-blue-700'
                          : 'text-blue-400 group-hover:text-blue-300'
                      } transition-colors duration-300`} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                      {category}
                    </h3>
                    <p className={`${
                      theme === 'light'
                        ? 'text-gray-600 group-hover:text-gray-700'
                        : 'text-gray-300 group-hover:text-gray-200'
                    } transition-colors duration-300`}>{description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {skills.map((skill, index) => (
                    <SkillItem key={index} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}