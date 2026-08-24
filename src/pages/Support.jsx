import { useState, useRef } from 'react';
import { PopupButton } from 'react-calendly';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import SEOHead, { breadcrumbSchema } from '../components/SEOHead';
import contactSvg from '../assets/svg/contact-pin.svg';
import securitySvg from '../assets/svg/security-compliance.svg';
import customerSuccessImg from '../assets/image/service.png';
import supportimg from '../assets/image/support.png';
import './Support.scss';

const channels = [
  { title: 'Call Us', value: '08033677111', note: 'Mon–Fri, 8am–6pm WAT' },
  { title: 'Email Us', value: 'info@netfusionideal.com', note: 'Sales: sales@netfusionideal.com' },
  { title: 'WhatsApp', value: '+234 704 551 2215', note: 'Chat with our support team' },
  { title: 'Book a Demo', value: 'calendly.com/allfinancialbanking', note: 'Pick a time that works for you' },
];

export default function Support() {
  const [disable, setDisable] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisable(true);
    
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success('Email sent successfully!', {
            position: 'top-center',
            autoClose: 3000,
          });
          form.current.reset();
          setDisable(false);
        },
        (error) => {
          toast.error(`Failed to send email: ${error.text}`, {
            position: 'top-center',
            autoClose: 3000,
          });
          setDisable(false);
        }
      );
  };

  return (
    <>
      <SEOHead
        title="Contact NETFUSION | Request a Demo"
        description="Talk to a banking technology expert or schedule a demo of the ALL-FINANCIAL Core Banking Suite."
        path="/support"
        jsonLd={[breadcrumbSchema([{ name: 'Support', path: '/support' }])]}
      />

      <section className="support-hero section">
        <div className="container support-hero__inner">
          <span className="eyebrow">Support</span>
          <h1>We're here to help, whenever you need us</h1>
          <p className="lead">
            Whether you're evaluating ALL-FINANCIAL, mid-implementation, or
            already live &mdash; our team is one message away.
          </p>
        </div>
      </section>

      <section className="section section--alt customer-success">
        <div className="container customer-success__inner">
          <div className="customer-success__image-wrap">
            <img src={customerSuccessImg} alt="NETFUSION Customer Success Team Member" />
          </div>
          <div className="customer-success__content">
            <span className="eyebrow">MORE THAN A HELPDESK</span>
            <h2>
              Support that <br />
              understands <br />
              <span className="customer-success__highlight">your business.</span>
            </h2>
            <p>
              When your institution is moving quickly, the right answer is more than
              a ticket number. Our customer success team combines technical
              clarity with the context to help you make the best next move.
            </p>
            <a href="mailto:support@netfusionideal.com" className="customer-success__link">
              Meet your support team &nearrow;
            </a>
          </div>
        </div>
      </section>

      <section className="section contact-channels">
        <div className="container contact-channels__inner">
          <div className="grid grid-2 contact-channels__grid">
            {channels.map((c) => (
              <div className="card contact-channels__card" key={c.title}>
                <div className="icon-badge">
                  <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/><path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <h3>{c.title}</h3>
                {c.title === 'Book a Demo' ? (
                  <PopupButton
                    url="https://calendly.com/allfinancialbanking"
                    rootElement={document.getElementById("root")}
                    text={c.value}
                    className="contact-channels__value"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', padding: 0, font: 'inherit', textDecoration: 'underline' }}
                  />
                ) : (
                  <p className="contact-channels__value">{c.value}</p>
                )}
                <p className="contact-channels__note">{c.note}</p>
              </div>
            ))}
          </div>
          <div className="svg-wrap contact-channels__art">
            <img src={contactSvg} alt="Contact NETFUSION via phone, email or WhatsApp, with office location pin" />
          </div>
        </div>
      </section>

      <section className="section section--alt contact-form">
        <div className="container contact-form__inner">
          <div className="contact-form__photo">
            <img src={supportimg} alt="NETFUSION support specialist assisting a client" />
            <div className="contact-form__badge">
              <strong>24/7</strong>
              <span>Technical support</span>
            </div>
          </div>

          <div className="card contact-form__card">
            <h2>Send us a message</h2>
            <p className="lead">Tell us about your institution and what you need &mdash; we'll route it to the right person.</p>

            <form className="contact-form__form" ref={form} onSubmit={handleSubmit}>
              <div className="contact-form__row">
                <label>
                  Full name
                  <input type="text" name="from_name" required placeholder="Jane Doe" />
                </label>
                <label>
                  Work email
                  <input type="email" name="from_email" required placeholder="jane@yourbank.com" />
                </label>
              </div>
              <div className="contact-form__row">
                <label>
                  Institution
                  <input type="text" name="institution" placeholder="Your bank / fintech" />
                </label>
                <label>
                  I'm reaching out about
                  <select name="topic" defaultValue="Product demo">
                    <option>Product demo</option>
                    <option>Existing implementation</option>
                    <option>Technical support</option>
                    <option>Partnerships</option>
                  </select>
                </label>
              </div>
              <label>
                Message
                <textarea name="message" rows="4" placeholder="Tell us a bit about what you need" required></textarea>
              </label>
              <button type="submit" className="btn btn-primary" disabled={disable}>
                {disable ? 'Sending...' : 'Send Message \u2192'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="section security">
        <div className="container security__inner">
          <div className="svg-wrap security__art">
            <img src={securitySvg} alt="Trust shield representing security, surrounded by audit trail, KYC monitoring, encryption and regulatory compliance badges" />
          </div>
          <div className="security__copy">
            <span className="eyebrow">Security &amp; compliance</span>
            <h2>Fully CBN-licensed, built for regulatory reality</h2>
            <ul className="security__list">
              <li>Fully CBN-licensed</li>
              <li>Complies with AML and data protection laws</li>
              <li>100% electronic communications &mdash; fast, transparent, secure</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--alt office">
        <div className="container office__inner">
          <div>
            <span className="eyebrow">Visit us</span>
            <h2>Our office</h2>
            <p className="lead">46 Akinsoji St, Fadeyi, Lagos 100252,<br/>Lagos, Nigeria</p>
          </div>
          <div className="office__map-container" style={{ borderRadius: '16px', overflow: 'hidden', height: '450px', width: '100%', maxWidth: '600px' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.9733754479726!2d3.3701925!3d6.525046199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8dad488e6cc1%3A0x22141e92ed3a63b!2s46%20Akinsoji%20St%2C%20Fadeyi%2C%20Lagos%20100252%2C%20Lagos!5e0!3m2!1sen!2sng!4v1787054873606!5m2!1sen!2sng" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
              title="Office Location Map"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
