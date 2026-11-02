import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PopupModal } from 'react-calendly';
import SEOHead, { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../components/SEOHead';
import CtaBand from '../components/CtaBand';
import AlternatingRow from '../components/AlternatingRow';
import heroExecsImg from '../assets/hero-execs.jpg';
import industriesSvg from '../assets/svg/industries-served.svg';
import testimonialSvg from '../assets/svg/testimonial-card.svg';
import servicegroupimg from '../assets/image/netfusion-services.jpg';
import partnership from '../assets/image/netfusion-partnership.jpg';
import promoVideo from '../assets/Video/Promo-video.mp4';
import modern from "../assets/image/Modern.avif"
import hand from "../assets/image/Shaking-Hands.avif"
import testimony from "../assets/image/testimony.jpg"
import zenp from "../assets/image/zenp.jpeg"
import avatar from "../assets/image/avatarimg.jpg"
import avatar2 from "../assets/image/avatar2.jpg"
import nirsal from "../assets/image/nirsal.jpeg"
import './Home.scss';
import CoreModules from '../components/CoreModules';

const stats = [
  { value: '20+', label: 'Years combined banking & fintech expertise' },
  { value: '99.9%', label: 'Core banking uptime' },
  { value: '100k+', label: 'Transactions processed per second' },
  { value: '24/7', label: 'Technical support' },
  { value: '100%', label: 'Scalable & secure architecture' },
];

const products = [
  { name: 'ALL-FINANCIAL Core Banking Suite', desc: 'A complete, modular core banking platform built for scale.' },
  { name: 'Digital Banking Platform', desc: 'Internet and mobile banking your customers will actually enjoy.' },
  { name: 'Islamic Banking', desc: 'Shariah-compliant products for non-interest financial institutions.' },
  { name: 'Loan Management System', desc: 'Automated origination, scoring, disbursement and recovery.' },
  { name: 'Customer Relationship Management', desc: 'A 360° view of every customer relationship, in one place.' },
  { name: 'AML & Compliance Solution', desc: 'Real-time monitoring built for African regulatory realities.' },
  { name: 'API Integration Platform', desc: 'Open banking APIs that connect to your wider ecosystem.' },
  { name: 'Reporting & Analytics Dashboard', desc: 'Decision-ready insight across every branch and product.' },
];

const industries = [
  { label: 'Microfinance Banks',     bg: '#082c5c', icon: 'microfinance' },
  { label: 'Commercial Banks',       bg: '#1a7a6e', icon: 'commercial' },
  { label: 'Finance Houses',         bg: '#082c5c', icon: 'finance-house' },
  { label: 'Central Banks',          bg: '#1a7a6e', icon: 'central' },
  { label: 'Credit Unions',          bg: '#1a7a6e', icon: 'credit' },
  { label: 'Islamic Institutions',   bg: '#082c5c', icon: 'islamic' },
  { label: 'Lending Institutions',   bg: '#1a7a6e', icon: 'lending' },
  { label: 'Fintech Organizations',  bg: '#082c5c', icon: 'fintech' },
  { label: 'Mortgage Banks',         bg: '#082c5c', icon: 'mortgage' },
  { label: 'Investment Banking',     bg: '#1a7a6e', icon: 'investment' },
  { label: 'Finance Companies',      bg: '#082c5c', icon: 'finance-co' },
  { label: 'Digital Banks',          bg: '#1a7a6e', icon: 'digital' },
  { label: 'SACCOs',                 bg: '#1a7a6e', icon: 'sacco' },
  { label: 'Cooperatives',           bg: '#082c5c', icon: 'cooperative' },
];

const industryIcon = (type) => {
  const props = { xmlns: 'http://www.w3.org/2000/svg', width: 36, height: 36, viewBox: '0 0 24 24', fill: 'none', stroke: '#fff', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (type) {
    case 'microfinance': return <svg {...props}><circle cx="9" cy="7" r="2"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><circle cx="19" cy="8" r="2"/><path d="M19 14h2a2 2 0 0 1 2 2v1"/></svg>;
    case 'commercial': return <svg {...props}><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/></svg>;
    case 'finance-house': return <svg {...props}><path d="M3 9.5 12 3l9 6.5V21H3V9.5z"/><path d="M9 21v-6h6v6"/></svg>;
    case 'central': return <svg {...props}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10"/></svg>;
    case 'credit': return <svg {...props}><circle cx="8" cy="12" r="3"/><circle cx="16" cy="12" r="3"/></svg>;
    case 'islamic': return <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>;
    case 'lending': return <svg {...props}><rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h6M9 11h6M9 15h4"/></svg>;
    case 'fintech': return <svg {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
    case 'mortgage': return <svg {...props}><circle cx="11" cy="11" r="7"/><path d="m16.5 16.5 4 4"/><path d="M8 11h6M11 8v6"/></svg>;
    case 'investment': return <svg {...props}><path d="M18 20V10M12 20V4M6 20v-6"/></svg>;
    case 'finance-co': return <svg {...props}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h.01M11 15h2"/></svg>;
    case 'digital': return <svg {...props}><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M12 18h.01"/></svg>;
    case 'sacco': return <svg {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M12 8v4M12 12h.01"/></svg>;
    case 'cooperative': return <svg {...props}><path d="M3 9.5 12 3l9 6.5V21H3V9.5z"/><circle cx="12" cy="13" r="3"/></svg>;
    default: return null;
  }
};

const africanCountries = [
  "Nigeria", "Rwanda", "Ghana", "Kenya", "Uganda", 
  "Tanzania", "Zambia", "Côte d'Ivoire", "Senegal", "Cameroon"
];

const whyUs = [
  {
    title: 'Go Live Faster',
    desc: 'Deploy your core banking application within 8–12 weeks with our proven implementation methodology.',
    image: servicegroupimg,
    alt: 'Implementation team working through a go-live checklist',
    shape: 'rounded',
    badge: { icon: '\u23F1', text: '8–12 week go-live' },
  },
  {
    title: 'Modern, Scalable Platform',
    desc: 'Grow from a single branch to a multi-branch or multi-country operation without switching systems.',
    image: modern,
    alt: 'Bank operations lead monitoring branch performance on a laptop',
    shape: 'circle',
  },
  {
    title: 'Complete Banking Ecosystem',
    desc: 'Core banking, loans, digital banking, CRM, AML and analytics — in one connected platform.',
    image: partnership,
    alt: 'Team reviewing connected banking modules during a planning session',
    shape: 'arch',
  },
  {
    title: 'Built for Compliance',
    desc: 'Comprehensive audit trails, AML monitoring, KYC processes and regulatory reporting, by default.',
    image: hand,
    alt: 'Compliance officer reviewing audit and regulatory reports',
    shape: 'rounded',
    badge: { icon: '\u2713', text: 'Audit-ready' },
  },
];

// Inline SVG icon helper for AF features section
const AfIcon = ({ name }) => {
  const p = { xmlns: 'http://www.w3.org/2000/svg', width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'shield':       return <svg {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
    case 'layers':       return <svg {...p}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
    case 'users':        return <svg {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
    case 'git-branch':   return <svg {...p}><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>;
    case 'file-text':    return <svg {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>;
    case 'zap':          return <svg {...p}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
    case 'activity':     return <svg {...p}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>;
    case 'database':     return <svg {...p}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>;
    case 'lock':         return <svg {...p}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
    case 'link':         return <svg {...p}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>;
    case 'trending-up':  return <svg {...p}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
    default: return null;
  }
};

export default function Home() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <>
      <SEOHead
        title="NETFUSION | Core Banking Software & Digital Banking Platform for Africa"
        description="Enterprise core banking, digital banking and financial technology solutions built for African banks, microfinance institutions and fintechs."
        path="/"
        jsonLd={[ORGANIZATION_SCHEMA, WEBSITE_SCHEMA]}
      />

      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero__bg-grid" />
        <div className="container home-hero__inner">
          <div className="home-hero__copy">
            <span className="home-hero__eyebrow">
              BANKING TECHNOLOGY, BUILT FOR AFRICA
            </span>
            <h1 className="home-hero__title">
              Powering the <br />
              future of <br />
              banking <br />
              <span className="home-hero__highlight">across Africa.</span>
            </h1>
            <p className="home-hero__lead">
              Enterprise core banking, digital banking and financial technology
              solutions designed to help institutions operate securely,
              efficiently and at scale.
            </p>
            <div className="home-hero__actions">
              <button onClick={() => setIsCalendlyOpen(true)} className="home-hero__btn-primary">
                Request a demo <span className="arrow">&rarr;</span>
              </button>
              <Link to="/products" className="home-hero__btn-secondary">
                Explore our platform <span className="arrow">&#x2197;</span>
              </Link>
            </div>
            <div className="home-hero__trust">
              <div className="home-hero__avatars">
                <img
                  src={avatar}
                  alt="Client portrait"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                  alt="Client portrait"
                />
                <img
                  src={avatar2}
                  alt="Client portrait"
                />
              </div>
              <p>
                Trusted by <strong>financial institutions</strong> across the continent.
              </p>
            </div>
            <div className="home-hero__scroll">
              <span>SCROLL TO DISCOVER</span>
              <span className="line" />
            </div>
          </div>


        </div>
        <div className="home-hero__visual">
          <div className="home-hero__image-wrapper">
            <img
              src={heroExecsImg}
              alt="African banking technology executives reviewing digital platform"
              className="home-hero__image"
            />
            <div className="home-hero__image-fade" />
          </div>
          <div className="home-hero__card">
            <span className="home-hero__card-label">Today's transaction value</span>
            <div className="home-hero__card-value-row">
              <span className="home-hero__card-value">&#x20A6;1.42B</span>
              <span className="home-hero__card-badge">&#x2191; 12.8%</span>
            </div>
            <svg viewBox="0 0 160 36" className="home-hero__sparkline" aria-hidden="true">
              <defs>
                <linearGradient id="sparklineGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2e9b9c" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#2e9b9c" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,28 Q20,24 40,26 T80,18 T120,20 T160,8 L160,36 L0,36 Z"
                fill="url(#sparklineGrad)"
              />
              <path
                d="M0,28 Q20,24 40,26 T80,18 T120,20 T160,8"
                fill="none"
                stroke="#2e9b9c"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-bar section">
        <div className="container stats-bar__grid">
          {stats.map((s) => (
            <div className="stats-bar__item" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CORE MODULES */}
      <CoreModules />

      {/* ALL-FINANCIAL KEY FEATURES & FUNCTIONS */}
      <section className="section af-features">
        <div className="container">
          <div className="af-features__header">
            <div className="af-features__title-col">
              <h2 className="af-features__title">
                All-Financial key<br />features &amp; functions
              </h2>
            </div>
            <div className="af-features__intro-col">
              <p className="af-features__intro">
                Eight capabilities that run your institution every day, in one secure core platform, and four outcomes your board will notice.
              </p>
            </div>
          </div>

          <div className="af-features__grid">
            {[
              { num: '01', icon: 'shield',    label: 'Anti-money laundering' },
              { num: '02', icon: 'layers',    label: 'Multi tenancy' },
              { num: '03', icon: 'users',     label: 'Maker checker' },
              { num: '04', icon: 'git-branch',label: 'Unlimited branches' },
              { num: '05', icon: 'file-text', label: 'Audit trail functionality' },
              { num: '06', icon: 'zap',       label: 'Loan automation' },
              { num: '07', icon: 'activity',  label: 'Past due management system' },
              { num: '08', icon: 'database',  label: 'Database accessibility' },
            ].map(({ num, icon, label }) => (
              <div className="af-features__card" key={num}>
                <div className="af-features__card-top">
                  <div className="af-features__icon-wrap">
                    <AfIcon name={icon} />
                  </div>
                  <span className="af-features__num">{num}</span>
                </div>
                <span className="af-features__label">{label}</span>
              </div>
            ))}
          </div>

          {/* WHAT IT GIVES YOU */}
          <div className="af-gives">
            <div className="af-gives__eyebrow">WHAT IT GIVES YOU</div>
            <div className="af-gives__grid">
              {[
                {
                  icon: 'lock',
                  title: 'Secure Operations',
                  desc: 'Built with strong controls to ensure data security and regulatory compliance.',
                },
                {
                  icon: 'activity',
                  title: 'Real-time Insights',
                  desc: 'Get accurate, real-time information for better decision making.',
                },
                {
                  icon: 'link',
                  title: 'Operational Efficiency',
                  desc: 'Automate processes and reduce manual workload across the board.',
                },
                {
                  icon: 'trending-up',
                  title: 'Business Growth',
                  desc: 'Scalable and flexible platform that grows with your institution.',
                },
              ].map(({ icon, title, desc }) => (
                <div className="af-gives__card" key={title}>
                  <div className="af-gives__icon-wrap">
                    <AfIcon name={icon} />
                  </div>
                  <h4 className="af-gives__card-title">{title}</h4>
                  <p className="af-gives__card-desc">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROMO VIDEO */}
      <section className="section home-video">
        <div className="container">
          <div className="home-video__head">
            <span className="eyebrow">&mdash; WATCH PRODUCT DEMO</span>
            <h2>Experience NETFUSION in Action</h2>
            <p>See how our next-generation core banking and digital solutions power scale, efficiency, and growth for financial institutions.</p>
          </div>
          <div className="home-video__player-wrap">
            <video
              className="home-video__video"
              src={promoVideo}
              controls
              preload="metadata"
              playsInline
            />
          </div>
        </div>
      </section>

      {/* PRODUCTS OVERVIEW */}
      <section className="section home-products">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Products</span>
            <h2>Everything your institution needs, in one suite</h2>
            <p className="lead">Built around the ALL-FINANCIAL Core Banking Suite, for microfinance banks, finance houses, SACCOs, credit unions and fintechs.</p>
          </div>
          <div className="grid grid-4 home-products__grid">
            {products.map((p) => (
              <article className="card home-products__card" key={p.name}>
                <div className="icon-badge">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M4 12h16M4 6h16M4 18h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                </div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <Link to="/products" className="home-products__link">Learn more &rarr;</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US — alternating photo + text */}
      <section className="why-us">
        <div className="container">
          <div className="section-head center" style={{ paddingTop: '64px' }}>
            <span className="eyebrow">Why financial institutions choose us</span>
            <h2>A platform built to remove friction, not add to it</h2>
          </div>
        </div>
        {whyUs.map((w, i) => (
          <AlternatingRow
            key={w.title}
            image={w.image}
            alt={w.alt}
            eyebrow={String(i + 1).padStart(2, '0')}
            title={w.title}
            description={w.desc}
            reverse={i % 2 === 1}
            shape={w.shape}
            badge={w.badge}
          />
        ))}
      </section>

      {/* INDUSTRIES */}
      <section className="section industries">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Industries</span>
            <h2>Built for every kind of financial institution</h2>
          </div>
          <div className="industries__grid">
            {industries.map((item) => (
              <div className="industries__card" key={item.label}>
                <div className="industries__icon" style={{ background: item.bg }}>
                  {industryIcon(item.icon)}
                </div>
                <span className="industries__label">{item.label}</span>
                <span className="industries__bar" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHERE WE ARE GOING */}
      <section className="section where-we-are-going">
        <div className="container">
          <div className="where-we-are-going__inner">
            <div className="where-we-are-going__heading">
              <span className="eyebrow">Where We Are Going</span>
              <h2>FROM NIGERIA TO AFRICA</h2>
            </div>
            <div className="where-we-are-going__copy">
              <p className="lead">
                NETFUSION began with a deep understanding of Nigeria's financial services ecosystem. Today, our ambition is broader: to provide modern financial technology infrastructure for institutions across Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AFRICA MARKET */}
      <section className="africa-market">
        <div className="container">
          <div className="africa-market__content">
            <h2>BUILT FOR AFRICA.<br /><span className="text-teal">READY TO SCALE.</span></h2>
            <p>
              From microfinance institutions and SACCOS to commercial banks and emerging fintechs, NETFUSION provides technology infrastructure designed around the operational realities of African financial institutions.
            </p>
          </div>
        </div>
        
        <div className="africa-market__ticker-wrap">
          <div className="africa-market__ticker">
            {[...africanCountries, ...africanCountries].map((country, index) => (
              <div className="ticker-group" key={index}>
                <span className="ticker-item">{country}</span>
                <span className="ticker-separator"></span>
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <div className="africa-market__footer">
            <span className="eyebrow">AFRICA IS OUR MARKET.</span>
            <p>Designed for deployment across diverse African financial ecosystems.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      {/* <section className="section section--alt testimonial">
        <div className="container testimonial__inner">
          <div className="testimonial__photo">
            <img src={testimony} />
          </div>
          <div className="testimonial__card svg-wrap">
            <img src={testimonialSvg} alt="Client testimonial with a five star rating" />
          </div>
        </div>
      </section> */}


      {/* TRUST BAR */}
      <section className="trust-bar">
        <div className="container">
          <div className="trust-bar__top">
            <div className="trust-bar__heading">
              <span className="eyebrow">&mdash; TRUSTED TECHNOLOGY PARTNER</span>
              <h2>Trusted by financial institutions <br /><span className="trust-bar__highlight">that move Africa forward.</span></h2>
            </div>
            <div className="trust-bar__desc">
              <p>We partner with ambitious institutions to create banking experiences that are simple, secure and ready for what's next.</p>
            </div>
          </div>
          <div className="trust-bar__logos-wrap">
            <div className="trust-bar__marquee">
              <div className="trust-bar__logos">
                <div className="trust-logo-item">
                  <img src="/logos/molusi.jpg" alt="Molusi MFB" className="trust-logo-img" />
                  <span className="trust-logo-text">Molusi MFB</span>
                </div>
                <div className="trust-logo-item">
                  <img src="/logos/hmfb.jpg" alt="HMFB" className="trust-logo-img" />
                  <span className="trust-logo-text">Honey MFB</span>
                </div>
                <div className="trust-logo-item">
                  <img src={zenp} alt="ZENP FC" className="trust-logo-img" />
                  <span className="trust-logo-text">ZENP FC</span>
                </div>
              </div>
              <div className="trust-bar__logos" aria-hidden="true">
                <div className="trust-logo-item">
                  <img src="/logos/molusi.jpg" alt="Molusi MFB" className="trust-logo-img" />
                  <span className="trust-logo-text">Molusi MFB</span>
                </div>
                <div className="trust-logo-item">
                  <img src="/logos/hmfb.jpg" alt="HMFB" className="trust-logo-img" />
                  <span className="trust-logo-text">Honey MFB</span>
                </div>
                <div className="trust-logo-item">
                  <img src={zenp} alt="ZENP FC" className="trust-logo-img" />
                  <span className="trust-logo-text">ZENP FC</span>
                </div>
                <div className="trust-logo-item">
                  <img src={nirsal} alt="ZEN" className="trust-logo-img" />
                  <span className="trust-logo-text">NIRSAL</span>
                </div>
              </div>
              <div className="trust-bar__logos" aria-hidden="true">
                <div className="trust-logo-item">
                  <img src="/logos/molusi.jpg" alt="Molusi MFB" className="trust-logo-img" />
                  <span className="trust-logo-text">Molusi MFB</span>
                </div>
                <div className="trust-logo-item">
                  <img src="/logos/hmfb.jpg" alt="HMFB" className="trust-logo-img" />
                  <span className="trust-logo-text">Honey MFB</span>
                </div>
                <div className="trust-logo-item">
                  <img src={zenp} alt="ZENP FC" className="trust-logo-img" />
                  <span className="trust-logo-text">ZENP FC</span>
                </div>
                <div className="trust-logo-item">
                  <img src={nirsal} alt="ZEN" className="trust-logo-img" />
                  <span className="trust-logo-text">NIRSAL</span>
                </div>
              </div>
              <div className="trust-bar__logos" aria-hidden="true">
                <div className="trust-logo-item">
                  <img src="/logos/molusi.jpg" alt="Molusi MFB" className="trust-logo-img" />
                  <span className="trust-logo-text">Molusi MFB</span>
                </div>
                <div className="trust-logo-item">
                  <img src="/logos/hmfb.jpg" alt="HMFB" className="trust-logo-img" />
                  <span className="trust-logo-text">Honey MFB</span>
                </div>
                <div className="trust-logo-item">
                  <img src={zenp} alt="ZENP FC" className="trust-logo-img" />
                  <span className="trust-logo-text">ZENP FC</span>
                </div>
                <div className="trust-logo-item">
                  <img src={nirsal} alt="ZEN" className="trust-logo-img" />
                  <span className="trust-logo-text">NIRSAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <CtaBand />
      </div>
      <PopupModal
        url="https://calendly.com/allfinancialbanking"
        onModalClose={() => setIsCalendlyOpen(false)}
        open={isCalendlyOpen}
        rootElement={document.getElementById("root")}
      />
    </>
  );
}
