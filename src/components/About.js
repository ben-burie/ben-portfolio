import React, { useState } from 'react';

const About = () => {

  const [tooltipStyle, setTooltipStyle] = useState({ display: 'none', left: 0, top: 0 });
  const [tooltipText, setTooltipText] = useState('');

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({
            behavior: 'smooth', // Smooth scrolling
            block: 'start',     // Align the top of the section with the viewport
          });
        }
    };

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

    return (
  <section id="about" className="section about">
    <div className ="about-header">
        <h2>About</h2>
        <h3>I am a<span>computer science</span>student with a<span>passion</span>for 
        <span>learning</span>both inside and outside of the classroom.</h3>
        <ul>
            <li><h3>B.S in Computer Science</h3></li>
            <li><h3>Minor in Data Science</h3></li>
            <li><h3>UWW Association for Computer Machinery (ACM)</h3></li>
            <li><h3>UWW Running Club - Risk Management Officer</h3></li>
        </ul>
    </div>
    <div className="about-content">
        <img src="\images\coding-html-svgrepo-com.svg" alt="computer" style={{ width: '300px', height: 'auto' }} ></img>
    </div>
    <div className="down-arrow">
        <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
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

export default About;
