import "../css/SuccessMessage.css";
const SuccessMessage = () => (
  <section className="success-section">
    <div className="success-card">
      <h1 className="success-title">🎉 Thank You!</h1>
      <p className="success-message">
        We've received your request and will get back to you shortly.
      </p>
      <a href="/" className="success-btn">
        Return Home
      </a>
    </div>
  </section>
);
export default SuccessMessage;
