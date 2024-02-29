import "../css/Home.css";
import { useEffect } from "react";
function Home() {

    useEffect(() => {
        const acc = document.getElementsByClassName("accordion");
        let i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
      }, [])
  return (
    <div id="about">
      <br />
      <br />
      <br />
      <h2 className="anta-regular">About</h2>
      <img className="home-image" src="../../images/maine.png" />
      <p className="home-p">
        I grew up in a charming town in southern Maine, surrounded by a
        community deeply rooted in various trade professions. However, I
        recognized early on that my ambitions reached beyond the traditional
        trades. My passion lies in the ever-expanding tech industry, and I have
        set my sights on Full Stack Development. This field captivates me with
        its constant evolution and the opportunity it offers for creative
        expression. As I navigate my professional journey, I am excited to
        contribute my skills and enthusiasm to the dynamic world of technology,
        demonstrating a commitment to innovation and pushing the boundaries of
        what is possible.
      </p>
      {/* <div className="a-c">
      <div className="about-container">
      <button className="accordion">My Journey</button>
      <div className="panel">
        <p>Panel 1</p>
      </div>
      <button className="accordion">Goals</button>
      <div className="panel">
        <p>Panel 2</p>
      </div>
      <button className="accordion"></button>
      <div className="panel">
        <p>Panel 3</p>
      </div>
      </div>
    </div> */}
    </div>
  );
}

export default Home;
