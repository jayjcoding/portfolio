import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-container">
            <div className="head-container"><h2>About Me</h2></div>
            <div className='box-container'>
                <div className="image-container">
                    <img src="https://via.placeholder.com/150" alt="profile" />
                </div>
                <div className="info-container">
                    <p>I am a full-stack developer with a passion for creating functional and beautiful websites and applications. I have experience with JavaScript, React, Node.js, and MongoDB. I'm always eager to learn new technologies and expand my skills. In my free time, I enjoy working on personal projects, reading, and spending time with family and friends.</p>
                    <p>I am a passionate learner and technologist with expertise in public speaking and AI. I quickly grasp and apply new technologies and am enthusiastic about AI's real-world applications. I am proficient in using APIs for data integration and have experience in public speaking and debating. I seek an innovative organization that values diverse skills and offers growth opportunities.</p>

                </div>
            </div>
        </div>
    );
}

export default About;