import "./Footer.css";
function Footer(props) {
  return (
    <div className="footer-container">
      <p className="footer-text">Contact Me</p>
      <div className="github-logo-container">
        <a
          href="https://github.com/connorgunter"
          rel="noopener noreferrer"
          target="_blank"
          className="github-link"
        >
          <img
            className="github-logo"
            src="../../public/images/GitHub-logo.png"
          ></img>
        </a>
      </div>
    </div>
  );
}

export default Footer;
