import { useState, useEffect } from "react";
import "../css/About.css"

function About() {
  const [about, setAbout] = useState(null);

  const getAboutData = async () => {

    const response = await fetch("./skills.json");

    const data = await response.json();

    setAbout(data);
  };

  useEffect(() => { getAboutData() } , []);

  const loaded = () => (
    <div className="about-container">
      <h2 className="about-name">{about.name}</h2>
      <h3 className="about-email">Email: {about.email}</h3>
      <p className="about-bio">{about.bio}</p>
    </div>
  );

  return (
    <div id="about">
    {about ? loaded() : <h1>Loading...</h1>};
    </div>
  )
}

export default About;