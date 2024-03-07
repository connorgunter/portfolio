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
          <h1 className="project-header anta-regular">My Projects</h1>
          <img className="projects-img" src="../../images/rocket-lunch.png" />
        </div>
        <div className="projects-container">
          {projects.map((project, idx) => (
            <div className="project-card" key={idx}>
              <h1 className="text-white anta-regular">{project.name}</h1>
              <img className="project-image" src={project.image} />
              <div className="buttons">
                <a href={project.git}>
                  <button className="anta-regular bg-[#1d2625] border-solid border-4 border-[#b7673c] text-white px-6 py-2 text-sm uppercase tracking-widest hover:bg-[#b7673c] hover:text-black">
                    Github
                  </button>
                </a>
                <a href={project.live}>
                  <button className="anta-regular bg-[#1d2625] border-solid border-4 border-[#b7673c] text-white px-6 py-2 text-sm uppercase tracking-widest hover:bg-[#b7673c] hover:text-black">
                    Link!
                  </button>
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
