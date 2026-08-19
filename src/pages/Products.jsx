import SEOHead, { breadcrumbSchema } from '../components/SEOHead';
import CtaBand from '../components/CtaBand';
import AlternatingRow from '../components/AlternatingRow';
import ecosystemSvg from '../assets/svg/core-banking-ecosystem.svg';
import integrationsSvg from '../assets/svg/integrations-network.svg';
import groupimg from "../assets/image/building.png"
import hand from "../assets/image/Shaking-Hands.avif"
import { Link } from 'react-router-dom';
import { PopupButton } from 'react-calendly';
import './Products.scss';

const benefits = [
  {
    title: 'Real-Time, Every Time',
    desc: 'Transactions post instantly across branches, agents and digital channels — no overnight batch jobs, no waiting.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
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
];

const modules = [
  { name: 'Customer Information Management (CIF)', desc: 'A single customer record shared across every product and channel.' },
  { name: 'Teller Operations', desc: 'Fast, accurate over-the-counter transaction processing.' },
  { name: 'Account Management', desc: 'Open, manage and reconcile savings, current and deposit accounts.' },
  { name: 'Loan Management', desc: 'Origination through to repayment, with configurable workflows.' },
  { name: 'Credit Management', desc: 'Scoring, exposure limits and portfolio-level credit control.' },
  { name: 'Funds Transfer', desc: 'Intra-bank and interbank transfers, processed in real time.' },
  { name: 'Investment Management', desc: 'Track and manage fixed deposits and investment products.' },
  { name: 'Fixed Assets', desc: 'Register, depreciate and report on institutional assets.' },
  { name: 'General Ledger', desc: 'A single source of financial truth, always audit-ready.' },
  { name: 'Audit Trail & Reports', desc: 'Every action logged, timestamped and traceable.' },
  { name: 'Mobile Banking', desc: 'A branded mobile experience for your customers, on any device.' },
  { name: 'Internet Banking', desc: 'Secure, full-featured online banking for individuals and businesses.' },
  { name: 'Agency Banking', desc: 'Extend your reach through agents without extending your risk.' },
  { name: 'API Integrations', desc: 'Plug into NIP, NPS, card schemes and third-party services.' },
  { name: 'AML & KYC', desc: 'Screening, watchlists and know-your-customer workflows, built in.' },
  { name: 'CRM', desc: 'Manage relationships, service requests and follow-ups in one place.' },
  { name: 'Reporting & Analytics', desc: 'Configurable dashboards for operations, risk and the board.' },
];

export default function Products() {
  const SOFTWARE_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ALL-FINANCIAL Core Banking Suite',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Cloud, On-Premise, Hybrid',
    description: 'Enterprise core banking platform for commercial banks, microfinance banks, and fintechs across Africa.',
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
              text="Request Demo \u2192"
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
            <h2>Eight products. One connected platform.</h2>
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
          <div className="section-head center">
            <span className="eyebrow">Inside the suite</span>
            <h2>Modules within the Core Banking Suite</h2>
          </div>
          <div className="grid grid-3 modules__grid">
            {modules.map((m) => (
              <div className="modules__item" key={m.name}>
                <span className="modules__dot" />
                <div>
                  <h3>{m.name}</h3>
                  <p>{m.desc}</p>
                </div>
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
