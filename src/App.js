// src/App.js
import React from 'react';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import { useState , useEffect} from 'react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

  // const closeMenu = () => {
  //   setIsMenuOpen(false);
  // };
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSectionId = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Adjust offset as needed
        const sectionBottom = sectionTop + section.offsetHeight;

        // Debugging logs
        //console.log(`Checking section: ${section.id}`);
        //console.log(`sectionTop: ${sectionTop}, sectionBottom: ${sectionBottom}, scrollY: ${window.scrollY}`);

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          currentSectionId = section.id;
        }
      });


        setSelectedSection(capitalizeFirstLetter(currentSectionId));
      //console.log(`Current Section: ${currentSectionId}`);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on mount to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


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
        <nav className="mobile-nav">
          <div className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => { setSelectedSection('Home'); setIsMenuOpen(false); }}>Home</a>
            <a href="#about" onClick={() => { setSelectedSection('About'); setIsMenuOpen(false); }}>About</a>
            <a href="#projects" onClick={() => { setSelectedSection('Projects'); setIsMenuOpen(false); }}>Projects</a>
            <a href="#skills" onClick={() => { setSelectedSection('Skills'); setIsMenuOpen(false); }}>Skills</a>
            <a href="#contact" onClick={() => { setSelectedSection('Contact'); setIsMenuOpen(false); }}>Contact</a>
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
