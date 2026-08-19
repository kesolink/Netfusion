import { Link } from 'react-router-dom';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="nf-footer">
      <div className="container nf-footer__top">
        <div className="nf-footer__brand">
          <div className="nf-footer__logo">
            <img src="/logos/Netfusion-logo.jpg" alt="NETFUSION" style={{ height: '42px', width: 'auto', objectFit: 'contain', background: '#ffffff', padding: '6px 12px', borderRadius: '8px' }} />
          </div>
          <p>
            Enterprise core banking, digital banking and financial technology
            solutions helping institutions across Africa operate securely,
            efficiently, and at scale.
          </p>
          <div className="nf-footer__social">
            <a href="https://www.linkedin.com/company/netfusionideal/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
                <path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
              </svg>
            </a>
            <a href="https://x.com/netfusionltd" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50" fill="#FFF">
                <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
              </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61575661177421&__cft__[0]=AZZwawANi5DF3VJ_TuSDT5BQ3YL3L82YTJud1JUbYZ4WTJ6Ingr3wUA5rd6lMQwsJftzIm9RznCITmWi_Ee5-i7LejR81o4C9YzKJFAJXXWj1IT3JR0-tKRHORFdy9cmiiAywkQeDwTY9axb0WoJoTa9JdD6-KaEIwKW6jAwVevbEf0hbqsCTQ_UOiYA6n7aE7CdkLdg0HEc2k-7rn9AVfuj&__tn__=-UC%2CP-R" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
                <path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="nf-footer__col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/about#values">Our Values</Link></li>
            <li><Link to="/support">Careers</Link></li>
            <li><Link to="/support">Contact Us</Link></li>
          </ul>
        </div>

        <div className="nf-footer__col">
          <h4>Products</h4>
          <ul>
            <li><Link to="/products">ALL-FINANCIAL Core Banking</Link></li>
            <li><Link to="/products">Digital Banking Platform</Link></li>
            <li><Link to="/products">Islamic Banking</Link></li>
            <li><Link to="/products">Loan Management</Link></li>
            <li><Link to="/products">AML &amp; Compliance</Link></li>
          </ul>
        </div>

        <div className="nf-footer__col">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services">Core Banking Implementation</Link></li>
            <li><Link to="/services">Digital Transformation</Link></li>
            <li><Link to="/services">Data Migration</Link></li>
            <li><Link to="/services">Managed Support</Link></li>
          </ul>
        </div>

        <div className="nf-footer__col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:info@netfusionideal.com">info@netfusionideal.com</a></li>
            <li><a href="mailto:sales@netfusionideal.com">sales@netfusionideal.com</a></li>
            <li><a href="mailto:support@netfusionideal.com">support@netfusionideal.com</a></li>
            <li>
              <a href="https://www.google.com/maps/search/?api=1&query=46+Akinsoji+St,+Fadeyi,+Lagos+100252,+Lagos,+Nigeria" target="_blank" rel="noopener noreferrer">
                46 Akinsoji St, Fadeyi, Lagos 100252,<br />Lagos, Nigeria
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container nf-footer__bottom">
        <span>&copy; 2025 NETFUSION &mdash; Ideal &amp; Innovations Solutions Ltd. All rights reserved.</span>
        <div className="nf-footer__legal">
          <a href="#">Terms &amp; Conditions</a>
          <a href="#">Privacy &amp; Security</a>
        </div>
      </div>
    </footer>
  );
}
