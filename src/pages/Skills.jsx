import { useState, useEffect } from "react";
import "../css/Skills.css";

function Skills() {
  const [skills, setSkills] = useState({
    Languages: [],
    "Libraries & Frameworks": [],
    "Databases & Other": [],
  });
  const [isLoading, setIsLoading] = useState(true);

  const getSkillsData = async () => {
    try {
      const response = await fetch("./skills.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setSkills(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSkillsData();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const renderSkills = (skillCategory) => (
    <div className="skills-grid">
      <h2>{skillCategory}</h2>
      <ul>
        {skills[skillCategory].map((skill, idx) => (
          <div key={idx}>
          <p>{skill.name}</p>
          <img className="skills-logos" src={skill.url}/>
          </div>
        ))}
      </ul>
    </div>
  );

  return (
    <div id="skills">
      <div className="skills-header-container">
        <h1 className="skills-header">Skills</h1>
        <img className="skills-img" src="../../images/skills.png" />
      </div>
      <div className="skills">
        {renderSkills("Languages")}
        {renderSkills("Libraries & Frameworks")}
        {renderSkills("Databases & Other")}
      </div>
    </div>
  );
}

export default Skills;
