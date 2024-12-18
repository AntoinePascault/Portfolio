import React, { useState } from 'react';
import { Code2 } from 'lucide-react';
import ProjectDetails from './ProjectDetails';
import { useTheme } from '../context/ThemeContext';

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  readme: string;
}

const defaultReadme = `<h1>Projet Example</h1>

<h2>Description</h2>
Ce projet est un exemple de démonstration montrant mes compétences en développement.

<h2>Fonctionnalités principales</h2>
- Feature 1
- Feature 2
- Feature 3

<h2>Technologies utilisées</h2>
- Tech 1
- Tech 2
- Tech 3

<h2>Installation</h2>
<pre><code class="language-bash">npm install
npm start</code></pre>

<h2>Structure du projet</h2>
<pre><code>
src/
  ├── components/
  ├── pages/
  ├── utils/
  └── App.tsx
</code></pre>

<h2>Captures d'écran</h2>
[Screenshots à venir]

<h2>Contribution</h2>
Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou un pull request.
`;

const projects: Project[] = [
  {
    title: "ScorBUT",
    description: "Un système de récompenses ludique pour les étudiants de l'IUT, similaire aux trophées des jeux vidéo. Les étudiants peuvent gagner des badges en participant à des événements ou en réalisant des accomplissements académiques.",
    image: "/Portfolio/images/ScorBUT.jpg",
    technologies: ["PHP", "JavaScript", "MySQL", "HTML", "CSS", "Bootstrap", "PHPUnit", "Jest"],
    readme: `# ScorBUT - Système de Récompenses Étudiant

## À propos du projet
ScorBUT est une plateforme web interactive qui rend l'expérience étudiante plus engageante grâce à un système de récompenses. Comme dans un jeu vidéo, les étudiants peuvent débloquer des trophées en :
- Participant à des événements de l'école
- Obtenant de bons résultats académiques
- S'impliquant dans la vie étudiante
- Et bien plus encore !

## Aperçu des fonctionnalités

### Page de connexion
![Page de connexion](/Portfolio/images/Connexion.png)
Interface de connexion sécurisée pour accéder à votre espace personnel.

### Liste des utilisateurs
![Page des utilisateurs](/Portfolio/images/Users.png)
Vue d'ensemble de tous les utilisateurs de la plateforme.

### Profil personnel
![Page de profil](/Portfolio/images/Profil.png)
Visualisez vos accomplissements et personnalisez votre profil.

### Galerie des trophées
![Page des trophées](/Portfolio/images/Trophies.png)
Découvrez tous les trophées disponibles à débloquer.

### Détails des trophées
![Page d'un trophée](/Portfolio/images/Trophy.png)
Informations détaillées sur chaque trophée et conditions d'obtention.

### Attribution des récompenses
![Page d'attribution](/Portfolio/images/Attribuate.png)
Interface d'attribution des trophées pour les gestionnaires.

## Comment ça marche ?

### Pour les étudiants
- Connectez-vous avec votre compte étudiant
- Explorez les trophées disponibles
- Participez aux activités pour les débloquer
- Personnalisez votre profil avec un avatar
- Comparez vos réussites avec vos camarades

### Pour les enseignants et le personnel
En tant que gestionnaire, vous pouvez :
- Créer de nouveaux trophées pour motiver les étudiants
- Attribuer des récompenses aux étudiants méritants
- Suivre la participation aux événements
- Encourager l'engagement étudiant

### Pour l'administration
Les administrateurs peuvent :
- Gérer tous les utilisateurs
- Créer des catégories de trophées
- Superviser l'ensemble du système
- Importer facilement des listes d'étudiants

## Accès rapide
Pour tester l'application, utilisez ces identifiants :
- Étudiant : etu1@gmail.com
- Enseignant : gestion@gmail.com
- Administration : admin@gmail.com

Mot de passe pour tous les comptes : **password**

## Notre équipe
Ce projet a été réalisé par :
- Alix JAUGEY
- Pierre VANHOVE
- Antoine PASCAULT
- Dorian VIVOT
- Axel BURILLIER
`,
  },
  {
    title: "REGIS",
    description: "Application web de gestion de randonnées itinérantes permettant de planifier des itinéraires sur plusieurs jours, gérer les hébergements, repas, budgets et points d'intérêt. Mise à jour en temps réel des informations pendant la randonnée.",
    image: "/Portfolio/images/REGIS.jpg",
    technologies: ["C#", "ASP.NET Core", "React", "HTML", "CSS", "Jest", "SQL"],
    readme: `# REGIS - Application de Gestion de Randonnées Itinérantes

## Description de l'application

L'application REGIS a pour but d'aider les utilisateurs à préparer et suivre des randonnées itinérantes. Elle permet de créer des itinéraires de randonnée sur plusieurs jours, de planifier les hébergements et repas à l'avance, d'estimer le budget et d'identifier des points d'intérêt le long du parcours. L'application permet aux utilisateurs de mettre à jour les informations en temps réel, comme les dépenses et les remarques sur les lieux d'hébergement.  

## Fonctionnalités

- Planifier et modifier une randonnée
- Ajouter des étapes et les modifier :
  - Ajouter un lien VisioRando
  - Ajouter et modifier des repas
  - Ajouter et modifier des hébergements
  - Ajouter et modifier des budgets
  - Ajouter et modifier des points d'intérêt

## Structure technique

### Backend (API)
- API REST développée en C# avec ASP.NET Core
- Tests unitaires avec le framework de test intégré
- Architecture en couches (Controllers, Services, Models)
- Base de données relationnelle

### Frontend (Client)
- Interface utilisateur en React/TypeScript
- Tests unitaires avec Jest
- Gestion des dépendances avec npm
- Interface responsive et moderne

## Captures d'écran

### Page d'accueil
![Page d'accueil](/Portfolio/images/home.jpg)

### Page de randonnée
![Page de randonnée](/Portfolio/images/hike.jpg)

### Page d'étape
![Page d'étape](/Portfolio/images/step.jpg)

### Page de budget
![Page de budget](/Portfolio/images/budget.jpg)

## Équipe de projet

- Marion Raynal
- Ezai Comtois
- Yamato Nief
- Antoine Pascault
`,
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { theme } = useTheme();

  return (
    <section id="projets" className={`py-20 ${
      theme === 'light' ? 'bg-[#f0f0e8]' : ''
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Mes Projets
            </span>
          </h2>
          <p className={`max-w-2xl mx-auto ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-300'
          }`}>
            Découvrez une sélection de mes projets les plus significatifs,
            démontrant mes compétences techniques et ma passion pour le développement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group relative backdrop-blur-sm rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${
                theme === 'light'
                  ? 'bg-[#f5f5ed]/80 border-gray-200 hover:border-blue-400/50'
                  : 'bg-gray-900/50 border-gray-800 hover:border-blue-500/50'
              }`}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image with Overlay */}
              <div className="group relative aspect-video overflow-hidden rounded-xl bg-gray-900">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                )}
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className={`text-xl font-bold transition-colors ${
                  theme === 'light'
                    ? 'text-gray-800 group-hover:text-blue-600'
                    : 'text-white group-hover:text-blue-400'
                }`}>
                  {project.title}
                </h3>
                <p className={
                  theme === 'light' ? 'text-gray-600 text-sm' : 'text-gray-300 text-sm'
                }>
                  {project.description}
                </p>
                
                {/* Technologies Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-3 py-1 text-xs rounded-full border ${
                        theme === 'light'
                          ? 'bg-blue-50/50 text-blue-600 border-blue-200'
                          : 'bg-gray-800 text-blue-400 border-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetails 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}