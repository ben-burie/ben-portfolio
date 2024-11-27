import React from 'react';

const About = () => {

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
  <section id="about" className="section about">
    <div className ="about-header">
        <h2>About</h2>
        <h3>I am a<span>computer science</span>student with a<span>passion</span>for 
        <span>learning</span>both inside and outside of the classroom.</h3>
        <ul>
            <li><h3>Software<span>Development</span></h3></li>
            <li><h3>Web<span>Development</span></h3></li>
            <li><h3>Data<span>Science</span></h3></li>
            <li><h3>Machine<span>Learning</span></h3></li>
        </ul>
    </div>
    <div className="about-content">
        <div className="student">
            <h2>Student</h2>
            <p>B.S in Computer Science</p>
            <p>Minor in Data Science</p>
        </div>
        <div className="skills">
            <h2>Skills</h2>
            <p>Java</p>
            <p>Python</p>
            <p>JavaScript</p>
            <p>HTML/CSS</p>
            <p>GitHub</p>
            <p>Visual Studio</p>
        </div>
        <div className="involvement">
            <h2>Involvement</h2>
            <p>ACM - UWW Chapter Member</p>
            <p>UWW Running Club Officer</p>
        </div>
    </div>
    <div className="down-arrow-about">
        <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
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
  </section>
);
};

export default About;
