import { PopupButton } from 'react-calendly';
import finalCtaSvg from '../assets/svg/final-cta.svg';
import './CtaBand.scss';

export default function CtaBand({
  title = 'Ready to modernise your banking operations?',
  subtitle = 'Talk to our team and see the ALL-FINANCIAL Core Banking Suite in action.',
  primaryLabel = 'Schedule a Demo',
  primaryTo = '/support',
}) {
  return (
    <section className="cta-band section">
      <div className="container cta-band__inner">
        <div className="cta-band__text">
          <span className="eyebrow">Get started</span>
          <h2>{title}</h2>
          <p className="lead">{subtitle}</p>
          <div className="cta-band__actions">
            <PopupButton
              url="https://calendly.com/allfinancialbanking"
              rootElement={document.getElementById("root")}
              text={primaryLabel}
              className="btn btn-primary"
            />
            {/* <PopupButton
              url="https://calendly.com/allfinancialbanking"
              rootElement={document.getElementById("root")}
              text="Talk to an Expert"
              className="btn btn-outline"
            /> */}
          </div>
        </div>
        <div className="cta-band__art svg-wrap">
          <img
  src={finalCtaSvg}
  alt=""
  role="presentation"
  style={{ cursor: 'pointer' }}
  onClick={() => window.location.href = 'https://calendly.com/allfinancialbanking'}
/>
        </div>
      </div>
    </section>
  );
}
