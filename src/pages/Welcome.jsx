import "../css/Welcome.css";
function Welcome() {
  return (
    <div
      id="welcome"
      className="welcome-bg flex flex-col items-center justify-center -ml-2 w-screen h-screen"
    >
      <div className="h-auto mb-5">
        <h3 className="anta-regular text-white pl-5 text-base md:text-lg lg:text-xl">
          Hello there, Welcome to my site
        </h3>
        <h1 className="anta-regular text-white text-3xl md:text-4xl lg:text-5xl font-normal not-italic pl-5 rounded-lg">
          I'm Connor Gunter
        </h1>
        <h1 className="anta-regular text-white text-3xl md:text-4xl lg:text-5xl font-normal not-italic pl-5 rounded-lg">
          Full Stack Developer
        </h1>
      </div>
      <div>
        <a
          href="https://github.com/connorgunter"
          target="_blank"
          rel="noreferrer"
        >
          <button className="github-btn welcome-btns ">
            <img
              src="../../images/github.png"
              className="w-[25px] mr-[5px] github-black"
            />
            <img
              src="../../images/github-white.png"
              className="w-[25px] mr-[5px] github-white"
            />
            GitHub
          </button>
        </a>
        <a
          href="https://drive.google.com/file/d/1pombqrcirYJQMgBH3dexe6YZwDQ5BL4C/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button className="welcome-btns resume-btn">
            <img
              src="../../images/resume.png"
              className="w-[25px] mr-[5px] resume-black"
            />
            <img
              src="../../images/resume-white.png"
              className="w-[25px] mr-[5px] resume-white"
            />
            Resume
          </button>
        </a>
      </div>
    </div>
  );
}

export default Welcome;
