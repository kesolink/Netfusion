import SEOHead, { breadcrumbSchema } from '../components/SEOHead';
import CtaBand from '../components/CtaBand';
import AlternatingRow from '../components/AlternatingRow';
import ecosystemSvg from '../assets/svg/core-banking-ecosystem.svg';
import integrationsSvg from '../assets/svg/integrations-network.svg';
import groupimg from "../assets/image/building.png"
import hand from "../assets/image/Shaking-Hands.avif"
import groupmain from "../assets/image/group-main.png"
import { Link } from 'react-router-dom';
import { PopupButton } from 'react-calendly';
import './Products.scss';

const benefits = [
  {
    title: 'Real-Time, Every Time',
    desc: 'Transactions post instantly across branches, agents and digital channels — no overnight batch jobs, no waiting.',
    image: groupmain,
    alt: 'Operations team monitoring real-time transaction volumes',
    shape: 'rounded',
    badge: { icon: '\u26A1', text: '1000+ TPS' },
  },
  {
    title: 'Bank-Grade Security & Compliance',
    desc: 'Comprehensive audit trails, AML monitoring and KYC workflows are built into the platform, not added on later.',
    image: hand,
    alt: 'Compliance officer reviewing security and audit reports',
    shape: 'circle',
  },
  {
    title: 'Local Support, Regional Vision',
    desc: 'A local implementation and customer success team who understand African banking, on call around the clock.',
    image: groupimg,
    alt: 'NETFUSION support specialist assisting a client team',
    shape: 'arch',
    badge: { icon: '\u2713', text: '24/7 support' },
  },
];

const products = [
  { name: 'ALL-FINANCIAL Core Banking Suite', desc: 'The comprehensive platform at the heart of everything: accounts, transactions, ledgers and more.' },
  { name: 'Digital Banking Platform', desc: 'Internet banking and mobile banking your customers actually want to use.' },
  { name: 'Islamic Banking', desc: 'Shariah-compliant products and profit-sharing structures for non-interest institutions.' },
  { name: 'Loan Management System', desc: 'End-to-end loan origination, credit scoring, disbursement and recovery automation.' },
  { name: 'Customer Relationship Management', desc: 'A single, shared view of every customer across every channel and product.' },
  { name: 'AML & Compliance Solution', desc: 'Continuous transaction monitoring built around local and international regulation.' },
  { name: 'API Integration Platform', desc: 'Open, documented APIs to connect your core to the wider financial ecosystem.' },
  { name: 'Reporting & Analytics Dashboard', desc: 'Real-time, decision-ready reporting across branches, products and portfolios.' },
  { name: 'All-Financial POS Solution', desc: 'Seamless in-store and on-the-go payments acceptance with real-time reconciliation.' },
  { name: 'All-Financial Digital Banking', desc: 'Next-generation digital experiences across web and mobile with unified identity and security.' },
  { name: 'ATM Cards Integration', desc: 'Instant card issuance, lifecycle management and switch integration made simple.' },
  { name: 'USSD Solution', desc: 'Secure, reliable USSD banking for feature phones and low-bandwidth environments.' },
  { name: 'Global Standing Instruction (GSI) Integration', desc: 'Automate recurring payments and collections across borders with full control.' },
  { name: 'AI AML Integration', desc: 'Leverage AI/ML to detect risk, reduce false positives and stay ahead of financial crime.' },
];

const modules = [
  'Customer Management',
  'Account Management',
  'Loans & Credit',
  'Financial Management',
  'Fixed Assets',
  'Fixed Deposit & Investment',
  'Regulatory Reporting',
  'E-Channels',
  'Teller & Vault',
  'Funds Transfer',
  'NIP & NPS',
  'Collateral',
  'HQ Operations',
  'AML / KYC',
  'Audit & Controls',
  'CABAL Dashboards',
  'Reporting & Analytics',
  'Administration',
  'Cheque Managment',
  'GSI'
];

export default function Products() {
  const SOFTWARE_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ALL-FINANCIAL Core Banking Suite',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Cloud, On-Premise, Hybrid',
    description: 'Enterprise core banking platform for microfinance banks, and fintechs across Africa.',
    provider: { '@type': 'Organization', name: 'NETFUSION Ideal & Innovations Solutions Ltd' },
  };

  return (
    <>
      <SEOHead
        title="ALL-FINANCIAL Core Banking Suite | NETFUSION Products"
        description="Explore NETFUSION's enterprise banking suite: core banking, digital banking, loan management, CRM, AML compliance and API integration."
        path="/products"
        jsonLd={[
          SOFTWARE_SCHEMA,
          breadcrumbSchema([{ name: 'Products', path: '/products' }]),
        ]}
      />

      <section className="products-hero section">
        <div className="container products-hero__inner">
          <span className="eyebrow">Enterprise Banking Solutions</span>
          <h1>ALL-FINANCIAL Core Banking</h1>
          <p className="lead">
            One modular platform covering core banking, digital banking, loans,
            compliance and analytics &mdash; so your institution invests only in
            what it needs, with room to grow into the rest.
          </p>
          <div className="products-hero__actions">
            <PopupButton
              url="https://calendly.com/allfinancialbanking"
              rootElement={document.getElementById("root")}
              text="Request Demo"
              className="btn btn-primary"
            />
            <Link to="/services" className="btn btn-outline">See Implementation Process</Link>
          </div>
        </div>
      </section>

      <section className="section products-grid">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">The suite</span>
            <h2>Fourteen products. One connected platform.</h2>
          </div>
          <div className="grid grid-4">
            {products.map((p) => (
              <article className="card products-grid__card" key={p.name}>
                <div className="icon-badge">
                  <svg viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2"/><path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ALL-FINANCIAL — alternating photo + text */}
      <section className="why-product">
        <div className="container">
          <div className="section-head center" style={{ paddingTop: '64px' }}>
            <span className="eyebrow">Why ALL-FINANCIAL</span>
            <h2>Built to perform, secure by design</h2>
          </div>
        </div>
        {benefits.map((b, i) => (
          <AlternatingRow
            key={b.title}
            image={b.image}
            alt={b.alt}
            title={b.title}
            description={b.desc}
            reverse={i % 2 === 1}
            shape={b.shape}
            badge={b.badge}
          />
        ))}
      </section>

      <section className="section section--alt ecosystem">
        <div className="container ecosystem__inner">
          <div className="section-head center">
            <span className="eyebrow">How it fits together</span>
            <h2>Every module, connected to one core</h2>
            <p className="lead">
              ALL-FINANCIAL sits at the centre of your operation, with digital
              banking, loans, CRM, compliance, reporting and open APIs wired
              directly into it &mdash; not bolted on afterwards.
            </p>
          </div>
          <div className="svg-wrap ecosystem__art">
            <img src={ecosystemSvg} alt="ALL-FINANCIAL Core Banking Suite connected to digital banking, loan management, CRM, AML compliance, API integration, reporting and Islamic banking modules" />
          </div>
        </div>
      </section>

      <section className="section modules">
        <div className="container">
          <div className="section-head center modules__head">
            <h2>One integrated core. <span className="highlight-cyan">20 modules.</span></h2>
          </div>
          <div className="modules__grid">
            {modules.map((name) => (
              <div className="modules__card" key={name}>
                <span className="modules__card-text">{name}</span>
              </div>
            ))}
          </div>
        </div>          
      </section>

      <section className="section section--alt integrations">
        <div className="container integrations__inner">
          <div className="section-head center">
            <span className="eyebrow">Seamless integrations</span>
            <h2>Connects with the infrastructure you already run</h2>
            <p className="lead">NIP, NPS, Interswitch, Verve, SMS and email gateways, open APIs and third-party applications &mdash; all supported out of the box.</p>
          </div>
          <div className="svg-wrap integrations__art">
            <img src={integrationsSvg} alt="NETFUSION platform connected to NIP, NPS, Interswitch, Verve, SMS gateway, email gateway, open APIs and third-party applications" />
          </div>
        </div>
      </section>

      <div className="container">
        <CtaBand
          title="See ALL-FINANCIAL on your own data"
          subtitle="Request a guided walkthrough with our solutions team, tailored to your institution."
          primaryLabel="Request Demo"
        />
      </div>
    </>
  );
}
