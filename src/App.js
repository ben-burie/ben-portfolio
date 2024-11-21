import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles.css'

const App = () => (
    <main>
      <Header />
      <About />
      <Projects />
      <Contact />
    </main>
);

export default App;
