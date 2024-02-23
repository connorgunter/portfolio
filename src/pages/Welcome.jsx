import "../css/Welcome.css";
function Welcome() {
  return (
    <div className="welcome-container">
      <div className="header-container">
        <h1 className="welcome-header">Connor Gunter: FullStack Developer</h1>
      </div>
      <div className="button-container">
        <a
          href="https://github.com/connorgunter"
          target="_blank"
          rel="noreferrer"
        >
          <button className="welcome-btns">
            <img src="../../images/github-mark.png" className="resume-img" />
            GitHub
          </button>
        </a>
        <a
          href="https://drive.google.com/file/d/1pombqrcirYJQMgBH3dexe6YZwDQ5BL4C/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button className="welcome-btns">
            <img src="../../images/resume.png" className="resume-img" />
            Resume
          </button>
        </a>
      </div>
    </div>
  );
}

export default Welcome;
