import "../css/Header.css";

function Desktop() {
  return (
    <header className="hidden sm:flex">
      <nav className="desktop-nav">
        <a href="#welcome">
        <img className="portrait" src="../../images/ai-portrait-og.png" />
        </a>
        <div className="links">
          <a href="#about">
            <div className="link">ABOUT</div>
          </a>
          <a href="#skills">
            <div className="link">SKILLS</div>
          </a>
          <a href="#projects">
            <div className="link">PROJECTS</div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Desktop;
