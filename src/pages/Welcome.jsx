import "../css/Welcome.css";
function Welcome() {
  return (
    <div id="welcome" className="welcome-bg flex flex-col text-center items-center justify-center -ml-2 w-screen h-screen">
      <div className="header-container">
        <h1 className="welcome-header">Connor Gunter: FullStack Developer</h1>
      </div>
      <div className="button-container">
        <a
          href="https://github.com/connorgunter"
          target="_blank"
          rel="noreferrer"
        >
          <button className="github-btn welcome-btns ">
            <img src="../../images/github.png" className="button-imgs github-black" />
            <img src="../../images/github-white.png" className="button-imgs github-white"/>
            GitHub
          </button>
        </a>
        <a
          href="https://drive.google.com/file/d/1pombqrcirYJQMgBH3dexe6YZwDQ5BL4C/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button className="welcome-btns resume-btn">
            <img src="../../images/resume.png" className="button-imgs resume-black" />
            <img src="../../images/resume-white.png" className="button-imgs resume-white" />
            Resume
          </button>
        </a>
      </div>
    </div>
  );
}

export default Welcome;
