import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="project-container">
      <div className="head-container"><h2>Projects</h2></div>
      <div className='box-container'>
        <div className="video-container">
        <iframe
            width="100%"
            height="285"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"
            title="Talk With AI Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="info-container">
          <div className="title-container">
            <h3>
              <a href="https://github.com/jayjcoding/TalkWithAI" target="_blank" rel="noopener noreferrer">Talk With AI</a>
            </h3>
          </div>
          <div className="skills">
            <button className='skill-button'>Python</button><button className='skill-button'>ElevenLabs API</button><button className='skill-button'>ChatGPT API</button>
          </div>
          <p> Converse with any fictional or non-fictional character by using GPT API. This project uses ChatGPT API and ElevenLabs API to
            generate text and speech respectively. It follows a simple 3-step approach:- STT(Speech to text), TTT(Text to text), and TTS(Text to
            speech) via GPT and ElevenLabs APIs.</p>
        </div>
      </div>

      <div className='box-container'>
        <div className="video-container">
          <iframe
            width="100%"
            height="285"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"
            title="MovieBot Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="info-container">
          <div className="title-container">
            <h3>
              <a href="https://github.com/jayjcoding/Moviebot" target="_blank" rel="noopener noreferrer">Movie ChatBot</a>
            </h3>
          </div>
          <div className="skills">
            <button className='skill-button'>Python</button><button className='skill-button'>Streamlit</button><button className='skill-button'>ChatGPT API</button>
            <button className='skill-button'> Langchain</button><button className='skill-button'> Pandas</button>
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
