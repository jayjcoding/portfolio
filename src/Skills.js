import React from 'react';
import './Skills.css';

const skillsData = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'C++', icon: 'fab fa-c++' },
      { name: 'JavaScript', icon: 'fab fa-js' },
      // Add more programming languages here
    ],
  },
  // {
    // category: 'Frameworks & Libraries',
    // skills: [
    //   { name: 'React', icon: 'fab fa-react' },
    //   { name: 'Node.js', icon: 'fab fa-node-js' },
    //   // Add more frameworks and libraries here
    // ],
  // },
  {
    category: 'Tools & Technologies',
    skills: [
      { name: 'Git', icon: 'fab fa-git-alt' },
      { name: 'SnapAR & SparkAR', icon: 'fab fa-ar' },
      // Add more tools and technologies here
    ],
  },
  {
    category: 'Others',
    skills: [
      { name: 'MySQL', icon: 'fab fa-git-sql' },
      { name: 'Web API', icon: 'fab fa-api' },
      // Add more tools and technologies here
    ],
  },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      {skillsData.map((category, index) => (
        <div key={index} className="category">
          <h3>{category.category}</h3>
          <div className="skills-list">
            {category.skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
