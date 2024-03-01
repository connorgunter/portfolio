import "../css/About.css";
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
  }, []);
  return (
    <div id="about" className="text-center p-5">
      <br />
      <br />
      <br />
      <h2 className="anta-regular">About</h2>
      <div className="flex items-center justify-evenly">
        <p className="text-[#333] text-lg leading-[1.6] max-w-[600px] my-5">
          I grew up in a charming town in southern Maine, surrounded by a
          community deeply rooted in various trade professions. However, I
          recognized early on that my ambitions reached beyond the traditional
          trades. My passion lies in the ever-expanding tech industry, and I
          have set my sights on Full Stack Development. This field captivates me
          with its constant evolution and the opportunity it offers for creative
          expression. As I navigate my professional journey, I am excited to
          contribute my skills and enthusiasm to the dynamic world of
          technology, demonstrating a commitment to innovation and pushing the
          boundaries of what is possible.
        </p>
        <img
          className="shadow-[0_4px_8px_rgba(0,0,0,0.1)] w-[250px] h-auto mt-5 rounded-[50%] border-[3px] border-solid border-[black]"
          src="../../images/maine.png"
        />
      </div>
      {/* <div className="a-c">
        <div className="about-container">
          <button className="accordion">My Journey</button>
          <div className="panel">
            <p>
              With over six years of experience in the food service industry, my
              initial career aspirations were rooted in culinary arts during my
              high school years. However, my longstanding passion for technology
              and computers eventually steered my career path in a different
              direction. At the age of 16, I acquired my first desktop computer,
              dedicating countless hours to gaming and enhancing its performance
              for an optimal gaming experience. This deep-seated interest in
              technology was further nurtured when my brother introduced me to
              the world of programming. Embracing this new-found passion, I
              decided to enroll in a bootcamp through General Assembly, a
              decision that has proven to be transformative and pivotal in my
              career journey.
            </p>
          </div>
          <button className="accordion">Goals</button>
          <div className="panel">
            <p>Panel 2</p>
          </div>
          {/* <button className="accordion"></button>
          <div className="panel">
            <p>Panel 3</p>
          </div> */}
        {/* </div> */}
      {/* {</div> */} 
    </div>
  );
}

export default Home;
