import "../css/Footer.css";
function Footer() {
  return (
    <div className="text-center">
      <p className="text-black mb-2.5 text-xl">Contact Me</p>
      <div className="flex justify-center mt-2.5">
        <a
          className="ml-2.5"
          href="https://github.com/connorgunter"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className="github-logo" src="../../images/github.png" />
        </a>
        <a
          className="ml-2.5"
          href="https://www.linkedin.com/in/connor-gunter-903124293/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className="linkedin-logo" src="../../images/linkedin-logo.png" />
        </a>
        <a className=" ml-2.5" href="https://mail.google.com/mail/?view=cm&fs=1&to=connorgunter02@gmail.com">
          <img className="gmail-logo" src="../../images/gmail.png" />
        </a>
      </div>
      <br />
      <div className="radial-gradient text-white p-4">
        <p>All Rights Reserved by Connor Gunter ©</p>
      </div>
    </div>
  );
}
export default Footer;
