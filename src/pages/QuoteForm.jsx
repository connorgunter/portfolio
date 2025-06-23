import { useState } from "react";
import "../css/QuoteForm.css";
import SuccessMessage from "../pages/SuccessMessage.jsx";

const QuoteForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));
  };

  return (
    <section id="quote" className="quote-section">
      <h2 className="quote-heading">Request a Quote</h2>

      {submitted ? (
        <SuccessMessage />
      ) : (
        <form
          name="quote"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="quote-form"
        >
          <input type="hidden" name="form-name" value="quote" />
          <input type="hidden" name="bot-field" />

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" required placeholder="Your Name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="business">Business</label>
              <input type="text" name="business" placeholder="Business Name" />
            </div>

            <div className="form-group">
              <label htmlFor="package">Package</label>
              <select name="package" required>
                <option value="">Select</option>
                <option value="Starter">Starter – $499</option>
                <option value="Pro">Pro – $899</option>
                <option value="Premium">Premium – $1499</option>
              </select>
            </div>

            <div className="button-container">
              <button type="submit">Request Quote</button>
            </div>
          </div>
        </form>
      )}
    </section>
  );
};

export default QuoteForm;
