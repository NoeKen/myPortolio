// app/projects/page.js
import ProjectCard from '@/app/[components]/projectCard/ProjectCard';

export default function Projects() {
    const projects = [
        {
            image: './assets/conges.png', // Remplace par le chemin de l'image de ton projet EchoArt
            title: 'Plateforme de gestion de congés',
            description: 'Applications Power Apps pour la demande, gestion et suivi des congés, avec automatisations et envoie de mails.',
            // title: 'EchoArt',
            // description: 'Plateforme de partage d\'images captivantes d\'animaux, permettant aux utilisateurs de télécharger et de partager leurs œuvres.',
            technologies: ['Power Apps', 'Power Automate', 'SharePoint', 'Power FX'],
        },
        {
            image: 'path/to/shareSpace.jpg', // Remplace par le chemin de l'image de ton projet ShareSpace
            title: 'ShareSpace',
            description: 'Une plateforme de petites annonces locales pour la consultation d\'événements et la location d\'espaces.',
            technologies: ['Next.js', 'Firebase', 'Tailwind CSS'],
        },
        {
            image: 'path/to/organicFoodApp.jpg', // Remplace par le chemin de l'image de ton application d'alimentation bio
            title: 'Application d\'Alimentation Bio',
            description: 'Application mobile connectant les consommateurs avec des producteurs locaux d\'aliments biologiques.',
            technologies: ['React Native', 'Node.js', 'MongoDB'],
        },
        {
            image: 'path/to/cookingNetworkApp.jpg', // Remplace par le chemin de l'image de ton application de réseau social pour cuisiniers
            title: 'Réseau Social de Cuisiniers',
            description: 'Application mobile pour partager des recettes et promouvoir des marques alimentaires.',
            technologies: ['React Native', 'Firebase', 'GraphQL'],
        }
    ];
    

  return (
    <section className="projects-section">
      <h1>Mes Projets</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project= {project}
            // title={project.title}
            // description={project.description}
            // image={project.image}
          />
        ))}
      </div>
    </section>
  );
}
