# REGIS - Application de Gestion de Randonnées Itinérantes

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
- Interface utilisateur en HTML/CSS/JavaScript
- Tests unitaires avec Jest
- Gestion des dépendances avec npm
- Interface responsive et moderne

## Installation

### Prérequis
- .NET 6.0 SDK ou supérieur
- Node.js et npm
- Un IDE (Visual Studio, VS Code, etc.)

### Installation de l'API
1. Cloner le repository
2. Ouvrir la solution `API.sln` dans Visual Studio
3. Restaurer les packages NuGet
4. Lancer l'API avec `dotnet run` ou via Visual Studio

### Installation du Client
1. Naviguer vers le dossier `Client`
2. Installer les dépendances :
```bash
npm install
```

## Lancement de l'application

### API
- Via Visual Studio : Lancer le projet API
- Via ligne de commande :
```bash
cd API
dotnet run
```

### Client
- Ouvrir `index.html` dans un navigateur web
- Pour les tests :
```bash
npm test
```

## Visuels
### Page d'accueil
![image](https://github.com/user-attachments/assets/231692be-1a74-40f7-86be-2e55ce20c598)

### Page de randonnée
![image](https://github.com/user-attachments/assets/7b83d109-05d1-404f-98db-101e75c0c429)

### Page d'étape 
![image](https://github.com/user-attachments/assets/0138ef4b-8c3c-426c-8d69-337d04e591ed)

### Page de budget
![image](https://github.com/user-attachments/assets/274513b4-8aa7-4f48-9c42-ef542bae772b)

## Équipe de projet

- Marion Raynal
- Ezai Comtois
- Yamato Nief
- Antoine Pascault
