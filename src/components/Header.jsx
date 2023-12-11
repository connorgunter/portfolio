import { Link } from "react-router-dom";
import "../css/Header.css"

function Header() {

  //an example of an inline style for the nav tag for an initial layout - later additions, or 

  return (
    <header>
      <h1>Connor Gunter</h1>
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
