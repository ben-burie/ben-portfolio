import React from 'react';

const projects = [
  { title: "Project One", description: "Description of project one.", link: "#" },
  { title: "Project Two", description: "Description of project two.", link: "#" },
];

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link}>View Project</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
