import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './styles.css'

const App = () => {

  return (
    <main>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
};

export default App;