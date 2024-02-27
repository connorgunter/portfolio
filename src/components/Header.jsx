import Desktop from "./Desktop";
import Mobile from "./Mobile";
import "../css/Header.css"

function Header() {
  return (
    <header className="header-main">
      <nav>
        <Desktop />
        <Mobile />
      </nav>
    </header>
  );
}

export default Header;
