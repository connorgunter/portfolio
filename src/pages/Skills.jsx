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
    <div key={skillCategory} className="skill-category">
      <h2 className="skill-category-header">{skillCategory}</h2>
      <div className="skills-grid">
        {skills[skillCategory].map((skill, idx) => (
          <div key={idx} className="skills-logos">
            <img className="skills-logo" src={skill.url} alt={skill.name} />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div id="skills">
      <div className="skills-header-container">
        <h1 className="skills-header anta-regular">Skills</h1>
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
