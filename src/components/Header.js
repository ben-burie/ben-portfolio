import React, { useState } from 'react';

const Header = () => {

  const [tooltipStyle, setTooltipStyle] = useState({ display: 'none', left: 0, top: 0 });
  const [tooltipText, setTooltipText] = useState('');

  const handleMouseEnter = (e, text) => {
    setTooltipText(text);
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
        <a href="https://drive.google.com/file/d/1SQGHt0ZOHgTVnwO0yE3Uuha7zYWk_FrG/view?usp=sharing" target="_blank" rel="noopener noreferrer" id="resume-link">Resume/CV</a>
        <a href="#header" 
        onMouseEnter={(e) => handleMouseEnter(e, 'Copy to Clipboard')}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}>example@gmail.com</a>
      </div>
      <nav>
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
        <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
        <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
      </nav>
      <div className="header-content">
        <h1>Ben Burie</h1>
        <h3>Aspiring Software Engineer</h3>
      </div>
      <img src="images\profile-circle.png" alt="profile" className="header-image"></img>
      <div className="down-arrow">
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
        onMouseEnter={(e) => handleMouseEnter(e, 'Scroll Down')}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}>
          <svg
            className="hover-svg"
            width="64px"
            height="64px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#404040"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.43200000000000005"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M6.34292 7.75734L4.92871 9.17155L11.9998 16.2426L19.0708 9.17158L17.6566 7.75737L11.9998 13.4142L6.34292 7.75734Z"
                fill="#404040"
              ></path>
            </g>
          </svg>
        </a>
      </div>
      <div className="tooltip" style={tooltipStyle}>
          {tooltipText}
      </div>
    </section>
  );
};

export default Header;