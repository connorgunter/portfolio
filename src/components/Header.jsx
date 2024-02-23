import "../css/Header.css";

function Header() {
  return (
    <header>
      <nav>
        <img className="portrait" src="../../images/ai-portrait-og.png" />
        <div className="links">
          <a href="#home">
            <div className="link">HOME</div>
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

export default Header;
