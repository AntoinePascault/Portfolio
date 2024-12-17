import React from 'react';
import { GraduationCap, Calendar, Building2, BookOpen, Briefcase, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const educationData = [
  {
    type: 'education',
    year: '2022 - 2025',
    degree: 'BUT Informatique',
    institution: 'IUT de Dijon',
    location: 'Dijon, France',
    description: 'Formation complète en informatique couvrant le développement logiciel, le réseau, la sécurité, la gestion de projets et les systèmes d\'information.',
    skills: ['Développement Web', 'Développement Application', 'Réseau', 'Sécurité', 'Base de données', 'Gestion de projet'],
    icon: GraduationCap
  },
  {
    type: 'experience',
    year: 'Janvier 2023 - Mars 2023',
    degree: 'Stage Réseau & Sécurité',
    institution: 'Loire Habitat',
    location: 'Saint-Étienne, France',
    description: 'Stage axé sur la sécurité et le monitoring réseau : audit de sécurité avec PingCastle, surveillance réseau via Zabbix, et développement de requêtes PL/SQL pour l\'export de données.',
    skills: ['Sécurité Réseau', 'PingCastle', 'Zabbix', 'PL/SQL', 'Base de données'],
    icon: Building2
  }
];

const TimelineItem = ({ item, index }: { item: typeof educationData[0], index: number }) => {
  const { theme } = useTheme();
  
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'from-blue-400 to-blue-600';
      case 'experience':
        return 'from-green-400 to-green-600';
      default:
        return 'from-blue-400 to-blue-600';
    }
  };

  return (
    <div className="relative pl-12 pb-12 last:pb-0 group">
      {/* Timeline Line */}
      <div className={`absolute left-4 top-0 h-full w-0.5 ${
        theme === 'light' ? 'bg-gray-300' : 'bg-gray-800'
      } group-last:bg-gradient-to-b ${
        theme === 'light' 
          ? 'group-last:from-gray-300 group-last:to-transparent' 
          : 'group-last:from-gray-800 group-last:to-transparent'
      }`}></div>
      
      {/* Timeline Icon */}
      <div className={`absolute left-0 top-1 w-8 h-8 rounded-full bg-gradient-to-r ${getTypeColor(item.type)} shadow-lg transform group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
        <item.icon className="w-4 h-4 text-white" />
      </div>

      {/* Content Card */}
      <div className={`relative ${
        theme === 'light'
          ? 'bg-[#f5f5ed]/80 border-gray-200 hover:border-blue-400/50'
          : 'bg-gray-900/50 border-gray-800 hover:border-blue-500/50'
      } backdrop-blur-sm p-6 rounded-2xl border transition-all duration-300 group-hover:transform group-hover:-translate-y-1`}>
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

        {/* Content */}
        <div className="relative space-y-4">
          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-blue-600 font-medium">
              <Calendar className="w-4 h-4" />
              <span>{item.year}</span>
              <span className={`w-1.5 h-1.5 rounded-full ${
                theme === 'light' ? 'bg-gray-300' : 'bg-gray-700'
              }`}></span>
              <MapPin className="w-4 h-4" />
              <span className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>{item.location}</span>
            </div>
            <h3 className={`text-xl font-bold ${
              theme === 'light' 
                ? 'text-gray-800 group-hover:text-blue-600' 
                : 'text-white group-hover:text-blue-400'
            } transition-colors`}>
              {item.degree}
            </h3>
            <p className={`text-lg ${
              theme === 'light' ? 'text-gray-700' : 'text-gray-300'
            }`}>{item.institution}</p>
          </div>

          {/* Description */}
          <p className={`leading-relaxed ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-400'
          }`}>
            {item.description}
          </p>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className={`px-3 py-1 text-xs rounded-full border ${
                  theme === 'light'
                    ? 'bg-blue-50/50 text-blue-600 border-blue-200'
                    : 'bg-gray-800/50 text-blue-400 border-gray-700'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Education() {
  const { theme } = useTheme();
  
  return (
    <section id="formation-et-experiences" className={`py-20 ${
      theme === 'light' ? 'bg-[#f0f0e8]' : ''
    }`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Formation & Expérience
            </span>
          </h2>
          <p className={`text-xl ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-400'
          }`}>
            Mon parcours académique et professionnel
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {/* Legend */}
          <div className="flex justify-center gap-8 mb-12">
            {[
              { type: 'education', label: 'Formation', icon: BookOpen },
              { type: 'experience', label: 'Expérience', icon: Briefcase }
            ].map((item) => (
              <div key={item.type} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${
                  item.type === 'education' ? 'from-blue-400 to-blue-600' :
                  'from-green-400 to-green-600'
                }`}></div>
                <span className="text-gray-400 text-sm">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Timeline Items */}
          <div className="relative">
            {educationData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}