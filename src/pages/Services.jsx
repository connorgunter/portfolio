import "../css/Services.css";
import QuoteForm from "./QuoteForm";
const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="section-title-with-icon">
        <h2 className="section-title anta-regular">Business Services</h2>
        <img
          src="/images/handshake.png"
          alt="Handshake"
          className="section-icon"
        />
      </div>

      <p className="section-description">
        I help small businesses launch fast, clean websites that drive real
        results — complete with branding and Google Business setup.
      </p>

      <div className="services-grid">
        <div className="service-card">
          <h3>Starter – $499</h3>
          <ul>
            <li>1-page responsive website</li>
            <li>Google Business Profile setup</li>
            <li>Contact form + social links</li>
            <li>3–5 day delivery</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>Pro – $899</h3>
          <ul>
            <li>3–5 page website</li>
            <li>Basic branding assets</li>
            <li>Booking or quote form</li>
            <li>Everything from Starter</li>
          </ul>
        </div>

        <div className="service-card">
          <h3>Premium – $1,499</h3>
          <ul>
            <li>SEO-optimized copy</li>
            <li>Gallery, reviews, advanced features</li>
            <li>Post-launch support</li>
            <li>Everything from Pro</li>
          </ul>
        </div>
      </div>
      <div>
        <QuoteForm />
      </div>
    </section>
  );
};

export default Services;
