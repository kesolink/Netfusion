import diagramSvg from "../assets/svg/netfusion-modules-diagram1.svg?raw";
import "./CoreModules.scss";

const integrations = [
  { key: "nps", label: "NPS" },
  { key: "nip", label: "NIP" },
  { key: "atm", label: "ATM" },
  { key: "sms", label: "SMS Gateway" },
  { key: "email", label: "Email Gateway" },
  { key: "api", label: "API" },
];

const features = [
  {
    key: "integrated",
    title: "Integrated",
    desc: "All-in-one platform that works together.",
  },
  {
    key: "efficient",
    title: "Efficient",
    desc: "Automate processes and save time.",
  },
  {
    key: "secure",
    title: "Secure",
    desc: "Bank-grade security you can trust.",
  },
  {
    key: "scalable",
    title: "Scalable",
    desc: "Built to grow with your institution.",
  },
];

function IntegrationIcon({ type }) {
  const common = {
    stroke: "#FFFFFF",
    strokeWidth: 2,
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (type) {
    case "nps":
      return (
        <svg viewBox="0 0 28 28" width="26" height="26">
          <circle cx="9" cy="9" r="5" {...common} />
          <circle cx="19" cy="19" r="5" {...common} />
          <line x1="12.5" y1="12.5" x2="15.5" y2="15.5" {...common} />
        </svg>
      );
    case "nip":
      return (
        <svg viewBox="0 0 28 28" width="26" height="26">
          <path d="M6,10 h12 l-4,-4" {...common} />
          <path d="M22,18 h-12 l4,4" {...common} />
        </svg>
      );
    case "atm":
      return (
        <svg viewBox="0 0 28 28" width="26" height="26">
          <rect x="6" y="4" width="16" height="20" rx="2" {...common} />
          <line x1="10" y1="9" x2="18" y2="9" {...common} />
          <line x1="10" y1="14" x2="18" y2="14" {...common} />
          <circle cx="10" cy="19" r="1.2" fill="#FFFFFF" stroke="none" />
          <circle cx="18" cy="19" r="1.2" fill="#FFFFFF" stroke="none" />
        </svg>
      );
    case "sms":
      return (
        <svg viewBox="0 0 28 28" width="26" height="26">
          <path
            d="M5,7 h18 a2,2 0 0 1 2,2 v9 a2,2 0 0 1 -2,2 h-13 l-5,4 v-4 a2,2 0 0 1 -2,-2 v-9 a2,2 0 0 1 2,-2 z"
            {...common}
          />
        </svg>
      );
    case "email":
      return (
        <svg viewBox="0 0 28 28" width="26" height="26">
          <rect x="4" y="6" width="20" height="16" rx="2" {...common} />
          <path d="M4,8 L14,16 L24,8" {...common} />
        </svg>
      );
    case "api":
      return (
        <svg viewBox="0 0 28 28" width="26" height="26">
          <circle cx="14" cy="14" r="6" {...common} />
          {[0, 60, 120, 180, 240, 300].map((a) => {
            const r1 = 6,
              r2 = 11;
            const rad = (Math.PI / 180) * a;
            const x1 = 14 + r1 * Math.cos(rad);
            const y1 = 14 + r1 * Math.sin(rad);
            const x2 = 14 + r2 * Math.cos(rad);
            const y2 = 14 + r2 * Math.sin(rad);
            return (
              <line
                key={a}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                {...common}
              />
            );
          })}
        </svg>
      );
    default:
      return null;
  }
}

function FeatureIcon({ type }) {
  const common = {
    stroke: "#12796C",
    strokeWidth: 2.2,
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (type) {
    case "integrated":
      return (
        <svg viewBox="0 0 32 32" width="28" height="28">
          <path
            d="M16,4 L27,9 V16 C27,22 22,26 16,28 C10,26 5,22 5,16 V9 Z"
            {...common}
          />
          <path d="M10,16 L14,20 L22,11" {...common} />
        </svg>
      );
    case "efficient":
      return (
        <svg viewBox="0 0 32 32" width="28" height="28">
          <path d="M6,22 A11,11 0 0 1 26,22" {...common} />
          <line x1="16" y1="21" x2="9" y2="14" {...common} />
          <circle cx="16" cy="21" r="1.6" fill="#12796C" stroke="none" />
        </svg>
      );
    case "secure":
      return (
        <svg viewBox="0 0 32 32" width="28" height="28">
          <rect x="8" y="15" width="16" height="12" rx="2" {...common} />
          <path d="M11,15 V10 a5,5 0 0 1 10,0 v5" {...common} />
        </svg>
      );
    case "scalable":
      return (
        <svg viewBox="0 0 32 32" width="28" height="28">
          <line x1="6" y1="26" x2="6" y2="18" {...common} />
          <line x1="14" y1="26" x2="14" y2="12" {...common} />
          <line x1="22" y1="26" x2="22" y2="6" {...common} />
          <path d="M4,10 L13,4 L22,9" {...common} />
        </svg>
      );
    default:
      return null;
  }
}

export default function CoreModules() {
  return (
    <section className="cb-section" aria-labelledby="cb-heading">
      <div className="cb-container">
        <header className="cb-header">
          <p className="cb-eyebrow">NETFUSION &middot; ALL-FINANCIAL</p>
          <h2 id="cb-heading" className="cb-title">
            <span className="cb-title-line cb-title-navy">All-Financial</span>
            <span className="cb-title-line cb-title-teal">Core Banking</span>
          </h2>
          <p className="cb-intro">
            A complete suite of powerful modules to manage every aspect of
            your financial institution seamlessly.
          </p>
        </header>

        <div
          className="cb-diagram"
          role="img"
          aria-label="Diagram of the twelve All-Financial Core Banking modules connected to a central hub: KYC/CRM, Credit Management, Integration, Thrift and Collection, Investments, Teller, Products, Accounts and Transfers, Audit and Reports, Messaging, Fixed Assets, and Securities."
          dangerouslySetInnerHTML={{ __html: diagramSvg }}
        />

        <div className="cb-integrations">
          <div className="cb-integrations-copy">
            <h3>Powerful Integrations</h3>
            <p>Seamlessly connect with leading networks and services.</p>
          </div>
          <ul className="cb-integrations-list">
            {integrations.map((item) => (
              <li key={item.key} className="cb-integration-item">
                <span className="cb-integration-icon">
                  <IntegrationIcon type={item.key} />
                </span>
                <span className="cb-integration-label">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="cb-features">
        <div className="cb-container cb-features-grid">
          {features.map((f) => (
            <div key={f.key} className="cb-feature">
              <span className="cb-feature-icon">
                <FeatureIcon type={f.key} />
              </span>
              <div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}