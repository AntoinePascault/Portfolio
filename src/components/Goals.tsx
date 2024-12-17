import React from 'react';
import { Target, Rocket, Brain, Users, Code2, Globe2 } from 'lucide-react';

const goals = [
  {
    icon: Target,
    title: 'Career Objectives',
    description: 'Become a Full-Stack Developer specializing in cloud-native applications and contribute to open-source projects.'
  },
  {
    icon: Brain,
    title: 'Learning Goals',
    description: 'Master cloud technologies (AWS, Azure) and deepen knowledge in AI/ML development.'
  },
  {
    icon: Code2,
    title: 'Technical Growth',
    description: 'Build expertise in microservices architecture and containerization technologies.'
  },
  {
    icon: Users,
    title: 'Leadership',
    description: 'Develop team leadership skills and mentor junior developers in the community.'
  },
  {
    icon: Globe2,
    title: 'Global Impact',
    description: 'Create innovative solutions that solve real-world problems and benefit society.'
  },
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'Launch a tech startup focusing on sustainable technology solutions.'
  }
];

export default function Goals() {
  return (
    <section id="goals" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Future Goals
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <div key={index} className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform duration-300 border-2 border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                  <goal.icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-100">{goal.title}</h3>
              </div>
              <p className="text-gray-400">{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}