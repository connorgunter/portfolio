import "../css/Footer.css";
function Footer() {
  return (
    <div className="footer-container radial-gradient text-center w-full">
      <p className="text-white mb-2.5 text-xl">Contact Me</p>
      <div className="flex justify-center mt-2.5">
        <a
          className="ml-2.5"
          href="https://github.com/connorgunter"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className="github-logo" src="../../images/github-white.png" />
        </a>
        <a
          className="ml-2.5"
          href="https://www.linkedin.com/in/connor-gunter-903124293/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className="linkedin-logo" src="../../images/linkedin-white.png" />
        </a>
        <a className=" ml-2.5" href="https://mail.google.com/mail/?view=cm&fs=1&to=connorgunter02@gmail.com">
          <img className="gmail-logo" src="../../images/gmail-white.png" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
