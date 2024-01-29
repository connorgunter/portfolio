import "../css/Header.css";

function Header() {
  return (
    <header>
      <div className="header-container">
        <img className="portrait" src="../../images/ai-portrait-og.png" />
        <h1>Connor Gunter: FullStack Developer</h1>
      </div>
      <nav>
        <a href="#home">
          <div className="link">HOME</div>
        </a>
        <a href="#about">
          <div className="link">ABOUT</div>
        </a>
        <a href="#projects">
          <div className="link">PROJECTS</div>
        </a>
        <div className="resume-container">
        <a rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1pombqrcirYJQMgBH3dexe6YZwDQ5BL4C/view?usp=sharing">
        <img className="resume" src="../../images/resume.png"/>
        <span className="popup">Resume</span>
        </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
