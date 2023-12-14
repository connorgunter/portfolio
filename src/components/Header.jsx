import { Link } from "react-router-dom";
import "../css/Header.css";

function Header() {
  return (
    <header>
      <div className="header-container">
        <img className="portrait" src="../../images/ai-portrait-og.png" />
        <h1>Connor Gunter: FullStack Developer</h1>
      </div>
      <nav>
        <Link to="/">
          <div className="link">HOME</div>
        </Link>
        <Link to="/about">
          <div className="link">ABOUT</div>
        </Link>
        <Link to="/projects">
          <div className="link">PROJECTS</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
