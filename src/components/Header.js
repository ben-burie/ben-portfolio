import React, { useState } from 'react';

const Header = () => {

  const [tooltipStyle, setTooltipStyle] = useState({ display: 'none', left: 0, top: 0 });
  const [tooltipText, setTooltipText] = useState('Copy to Clipboard');

  const handleMouseEnter = (e) => {
    setTooltipStyle({
      display: 'block',
      left: e.pageX + 10, // Offset the tooltip slightly from the cursor
      top: e.pageY + 10,
    });
  };

  const handleMouseMove = (e) => {
    setTooltipStyle({
      display: 'block',
      left: e.pageX + 10,
      top: e.pageY + 10,
    });
  };

  const handleMouseLeave = () => {
    setTooltipStyle({ display: 'none' });
    setTooltipText('Copy to Clipboard');
  };

  const handleClick = () => {
    copyToClipboard('example@gmail.com');
    setTooltipText('Copied!');
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).catch((err) => {
      console.error('Failed to copy: ', err);
    });
  };

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
      <div className="ext-links">
        <a href="https://drive.google.com/file/d/1SQGHt0ZOHgTVnwO0yE3Uuha7zYWk_FrG/view?usp=sharing" target="_blank" id="resume-link">Resume/CV</a>
        <a href="#" 
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}>example@gmail.com</a>
        <div className="tooltip" style={tooltipStyle}>
          {tooltipText}
        </div>
      </div>
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