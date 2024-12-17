import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const { theme } = useTheme();

  return (
    <section id="a-propos" className={`py-20 ${
      theme === 'light' ? 'bg-[#f0f0e8]' : ''
    }`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            À propos de moi
          </span>
        </h2>
        <div className={`max-w-3xl mx-auto space-y-6 ${
          theme === 'light' ? 'text-gray-700' : 'text-gray-300'
        }`}>
          <p>
            Je suis un étudiant passionné d'informatique, particulièrement intéressé par le développement web
            et les technologies modernes. Mon parcours m'a permis d'acquérir une solide base en programmation
            et une compréhension approfondie des besoins du web d'aujourd'hui.
          </p>
          <p>
            Ma curiosité naturelle et mon désir d'apprendre me poussent constamment à explorer de nouvelles
            technologies et à relever de nouveaux défis. Je suis particulièrement à l'aise avec les technologies
            front-end comme React, TypeScript et Tailwind CSS.
          </p>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Mes Objectifs
            </h3>
            <div className={`space-y-4 ${
              theme === 'light' ? 'text-gray-700' : 'text-gray-300'
            }`}>
              <p>
                Mon objectif principal est de poursuivre mes études en école d'ingénieur pour approfondir mes connaissances
                et me spécialiser dans le domaine de la cybersécurité. Cette orientation me permettra de combiner ma passion
                pour le développement web avec les enjeux cruciaux de la sécurité informatique.
              </p>
              <p>
                Bien que je sois particulièrement attiré par le développement d'applications web modernes et innovantes,
                je souhaite acquérir une expertise en cybersécurité pour contribuer à la protection des systèmes
                d'information et au développement d'applications plus sécurisées.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
