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
      </nav>
    </header>
  );
}

export default Header;
