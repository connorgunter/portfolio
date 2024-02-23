import { useState, useEffect } from "react";
import "../css/Projects.css";

function Projects() {
  const [projects, setProjects] = useState(null);

  const getProjectsData = async () => {
    const response = await fetch("./projects.json");

    const data = await response.json();

    setProjects(data);
  };

  useEffect(() => {
    getProjectsData();
  }, []);

  const loaded = () => {
    return (
      <div id="projects">
        <br />
        <br />
        <br />
        <div className="projects-header-container">
          <h1 className="project-header">My Projects</h1>
          <img className="projects-img" src="../../images/programming.png" />
        </div>
        <div className="projects-container">
          {projects.map((project, idx) => (
            <div className="project-card" key={idx}>
              <h1>{project.name}</h1>
              <img className="project-image" src={project.image} />
              <div className="buttons">
                <a href={project.git}>
                  <button className="slide">Github</button>
                </a>
                <a href={project.live}>
                  <button className="slide">Link!</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;
