import { useState, useEffect } from "react";
import "../css/Skills.css";

function Skills() {
  const [skills, setSkills] = useState({ Languages: [], "Libraries & Frameworks": [], "Databases & Other": [] });
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
    }catch (err){
      console.log(err)
    }
  }

  useEffect(() => {
    getSkillsData();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const renderSkills = (skillCategory) => (
    <div>
      <h2>{skillCategory}</h2>
      <ul>
        {skills[skillCategory].map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div id="skills">
      <h1>Skills</h1>
      {renderSkills("Languages")}
      {renderSkills("Libraries & Frameworks")}
      {renderSkills("Databases & Other")}
    </div>
  );
}

export default Skills;
