// src/App.js
import React from 'react';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import { useState } from 'react';
import './App.css'; 
function App() {

  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = './Jay Jashnani_Resume.pdf'; 
    link.download = 'Jay_Jashnani_Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [selectedSection, setSelectedSection] = useState('Home');
  return (
    <div className="App">
      <header>
        <nav id="nav-bar" className="navbar">
          <a href="#home" className={selectedSection === 'Home' ? 'selected-link' : 'nav-link'}
          onClick={() => setSelectedSection('Home')}>Home</a>
          <a href="#about" className={selectedSection === 'About' ? 'selected-link' : 'nav-link'}
          onClick={() => setSelectedSection('About')}>About</a>
          <a href="#projects" className={selectedSection === 'Projects' ? 'selected-link' : 'nav-link'}
          onClick={() => setSelectedSection('Projects')}>Projects</a>
          <a href="#skills" className={selectedSection === 'Skills' ? 'selected-link' : 'nav-link'}
          onClick={() => setSelectedSection('Skills')}>Skills</a>
          <a href="#contact" className={selectedSection === 'Contact' ? 'selected-link' : 'nav-link'}
          onClick={() => setSelectedSection('Contact')}>Contact Me</a>
          <div className='navbar-right'>
            <button className='resume-button' onClick={downloadFile}>Resume</button> 
          </div>
        </nav>
      </header>
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
