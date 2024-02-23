import "../css/Footer.css";
function Footer() {
  return (
    <div className="footer-container">
      <p className="footer-text">Contact Me</p>
      <div className="contact-logos-container">
        <a
          href="https://github.com/connorgunter"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className="github-logo" src="../../images/github-mark.png" />
        </a>
        <a
          href="https://www.linkedin.com/in/connor-gunter-903124293/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className="linkedin-logo" src="../../images/linkedin-logo.png" />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=connorgunter02@gmail.com">
          <img className="gmail-logo" src="../../images/gmail.png" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
