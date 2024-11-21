import React from 'react';

const Header = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling
        block: 'start',     // Align the top of the section with the viewport
      });
    }
  };

  return (
    <section id="header" className="section header">
      <nav>
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
        <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
      </nav>
      <div className="header-content">
        <h1>Ben Burie</h1>
        <h3>Aspiring Software Engineer</h3>
      </div>
      <img src="images\profile-circle.png" alt="profile" className="header-image"></img>
    </section>
  );
};

export default Header;