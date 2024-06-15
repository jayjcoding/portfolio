import React from 'react';
import './Projects.css';

function Projects(){
  return (
    <div className="project-container">
      <div className="head-container"><h2>Projects</h2></div>
      <div className='box-container'>
        <div className="image-container">
          <img src="https://via.placeholder.com/150" alt="profile" />
        </div>
        <div className="info-container">
          <div className="title-container">
            <h3>Talk With AI</h3>
          </div>
          <div className="skills">
            <button className='skill-button'>Python</button><button className='skill-button'>ElevenLabs API</button><button className='skill-button'>ChatGPT API</button>
          </div>
          <p> Converse with any fictional or non-fictional character by using GPT API. This project uses ChatGPT API and ElevenLabs API to
            generate text and speech respectively. It follows a simple 3-step approach:- STT(Speech to text), TTT(Text to text), and TTS(Text to
            speech) via GPT and ElevenLabs APIs.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
