import "../css/QuoteForm.css";

const QuoteForm = () => {
  return (
    <section id="quote" className="quote-section">
      <h2 className="quote-heading">Request a Quote</h2>
      <form
        name="quote"
        method="POST"
        data-netlify="true"
        className="quote-form"
      >
        <input type="hidden" name="form-name" value="quote" />

        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Your Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="you@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="business">Business</label>
            <input
              type="text"
              name="business"
              id="business"
              placeholder="Business Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="package">Package</label>
            <select name="package" id="package" required>
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
    </section>
  );
};

export default QuoteForm;
