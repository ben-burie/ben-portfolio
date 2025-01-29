import React from 'react';

const runnersToolboxLink = "https://github.com/ben-burie/TheRunnersToolbox";
const bankPortalLink = "https://github.com/ben-burie/CsFinal-finalversion";
const wordleLink = "https://github.com/fordashton3/WordleProject";

const projects = [
  { title: "The Runners Toolbox", description: "Web application that provides a variety of services for runners and endurance athletes.", techStack: "HTML/CSS, JavaScript", link: runnersToolboxLink },
  { title: "Bank Portal Simulation", description: "Interactive application that allows users to simulate virtual banking transactions.", techStack: "Java", link: bankPortalLink },
  { title: "Wordle Game Clone", description: "Thrilling word game that resembles the popular New York Times version.", techStack: "Python", link: wordleLink }
];

const Projects = () => (
  <section id="projects" className="section projects">
    <h2>Projects</h2>
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <h4>{project.description}</h4>
          <p>{project.techStack}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
