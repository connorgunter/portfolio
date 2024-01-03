import { useState, useEffect } from "react";
import "../css/About.css"

function About() {
  // create state to hold about data
  const [about, setAbout] = useState(null);

  // create function to make api call
  const getAboutData = async () => {

		// make api call and get response
    const response = await fetch("./skills.json");

		// turn response into javascript object
    const data = await response.json();

		// set the about state to the data
    setAbout(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => { getAboutData() } , []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div className="about-container">
      <h2 className="about-name">{about.name}</h2>
      <h3 className="about-email">Email: {about.email}</h3>
      <p className="about-bio">{about.bio}</p>
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return (
    <div id="about">
    {about ? loaded() : <h1>Loading...</h1>};
    </div>
  )
}

export default About;