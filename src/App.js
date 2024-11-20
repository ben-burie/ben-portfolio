import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => (
  <div>
    <Header />
    <main>
      <About />
      <Projects />
      <Contact />
    </main>
  </div>
);

export default App;
