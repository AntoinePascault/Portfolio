import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import SimpleFooter from './components/SimpleFooter';
import StarryBackground from './components/StarryBackground';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <StarryBackground />
        <Header />
        <main>
          <Hero />
          <About />
          <Education />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <SimpleFooter />
      </div>
    </ThemeProvider>
  );
}

export default App;