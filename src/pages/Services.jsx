import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PopupButton } from 'react-calendly';
import SEOHead, { breadcrumbSchema } from '../components/SEOHead';
import CtaBand from '../components/CtaBand';
import tcoSvg from '../assets/svg/lower-tco.svg';
import faqSvg from '../assets/svg/faq-chat.svg';
import heroExecsImg from '../assets/hero-execs.jpg';
import timelineSvg from '../assets/svg/implementation-timeline.svg';
import './Services.scss';

const services = [
  { name: 'Core Banking Implementation', desc: 'End-to-end setup and configuration of ALL-FINANCIAL for your institution.' },
  { name: 'Digital Transformation', desc: 'A structured path from legacy systems to a modern digital operation.' },
  { name: 'Software Customization', desc: 'Configure workflows, products and approval chains around how you actually operate.' },
  { name: 'System Integration', desc: 'Connect core banking to switches, gateways and third-party platforms.' },
  { name: 'Data Migration', desc: 'Safe, validated migration of customer, account and transaction history.' },
  { name: 'User Training', desc: 'Hands-on training so your teams are confident from day one.' },
  { name: 'Managed Support Services', desc: 'Ongoing operational support so your internal team can focus elsewhere.' },
  { name: 'Annual Maintenance', desc: 'Scheduled updates, patches and platform health checks.' },
  { name: 'Cloud Deployment', desc: 'Provisioning and management across cloud, private cloud or hybrid.' },
  { name: 'Technical Support', desc: '24/7 access to engineers who know your deployment inside out.' },
];

const faqs = [
  { q: 'How long does implementation take?', a: 'Most institutions go live in 8–12 weeks, depending on the number of modules, data volume and integration scope.' },
  { q: 'Can we deploy on our own infrastructure?', a: 'Yes. ALL-FINANCIAL supports cloud, private cloud, on-premise and hybrid deployment models.' },
  { q: 'Do you support data migration from our existing core?', a: 'Yes, our implementation team validates and migrates customer, account and transaction history as part of onboarding.' },
  { q: 'What happens after go-live?', a: 'You move into managed support with 24/7 technical assistance, scheduled maintenance and a named customer success contact.' },
];

export default function Services() {
  const [openFaq, setOpenFaq] = useState(0);

  const FAQ_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <SEOHead
        title="Banking Technology Services | Implementation & Support"
        description="Core banking implementation, data migration, system integration, training and managed support — deployed in 8–12 weeks."
        path="/services"
        jsonLd={[
          FAQ_SCHEMA,
          breadcrumbSchema([{ name: 'Services', path: '/services' }]),
        ]}
      />

      <section className="services-hero section">
        <div className="container services-hero__inner">
          <span className="eyebrow">Services</span>
          <h1>Implementation and support, done properly</h1>
          <p className="lead">
            From first workshop to go-live and beyond &mdash; our team handles
            configuration, data migration, integration and training, so your
            institution goes live with confidence, not chaos.
          </p>
          <div className="services-hero__actions">
            <PopupButton
              url="https://calendly.com/allfinancialbanking"
              rootElement={document.getElementById("root")}
              text="Talk to a Banking Technology Expert \u2192"
              className="btn btn-primary"
            />
          </div>
        </div>
      </section>

      <section className="section services-grid">
        <div className="container">
          <div className="services-grid__layout">

            {/* Partnership feature card — spans 2 of 3 columns */}
            <div className="services-promo">
              <img
                src={heroExecsImg}
                alt="Banking specialists working side by side with client teams"
                className="services-promo__img"
              />
              <div className="services-promo__overlay" />
              <div className="services-promo__content">
                <span className="services-promo__eyebrow">PARTNERSHIP IN PRACTICE</span>
                <h2 className="services-promo__title">
                  Technology is only<br />
                  as good as its{' '}
                  <span className="services-promo__accent">delivery.</span>
                </h2>
                <p className="services-promo__lead">
                  Our banking specialists work side-by-side with your teams
                  to make change feel simple.
                </p>
              </div>
            </div>

            {/* Service cards — each occupies 1 column, flowing naturally */}
            {services.map((s, i) => (
              <article className="card services-grid__card" key={s.name}>
                <span className="services-grid__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
              </article>
            ))}

          </div>
        </div>
      </section>

      <section className="section section--alt process">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Our process</span>
            <h2>A proven path from kickoff to go-live</h2>
          </div>
          <div className="svg-wrap process__art">
            <img src={timelineSvg} alt="Implementation roadmap: discovery and planning, configuration, data migration and testing, then go-live, across eight to twelve weeks" />
          </div>
        </div>
      </section>

      <section className="section tco">
        <div className="container tco__inner">
          <div className="svg-wrap tco__art">
            <img src={tcoSvg} alt="Lower total cost of ownership: cost decreasing over time while platform value increases" />
          </div>
          <div className="tco__copy">
            <span className="eyebrow">Lower total cost of ownership</span>
            <h2>Pay for what you use, scale into the rest</h2>
            <p className="lead">
              A modular solution that lets you invest only in the capabilities
              you need today, while keeping the flexibility to expand as your
              institution grows.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt faq">
        <div className="container faq__inner">
          <div className="faq__list">
            <span className="eyebrow">FAQs</span>
            <h2>Questions institutions ask us most</h2>
            <div className="faq__items">
              {faqs.map((f, i) => (
                <div className={`faq__item ${openFaq === i ? 'is-open' : ''}`} key={f.q}>
                  <button className="faq__q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                    {f.q}
                    <span className="faq__toggle">{openFaq === i ? '\u2212' : '+'}</span>
                  </button>
                  {openFaq === i && <p className="faq__a">{f.a}</p>}
                </div>
              ))}
            </div>
          </div>
          <div className="svg-wrap faq__art">
            <img src={faqSvg} alt="Frequently asked questions represented as a question and answer chat exchange" />
          </div>
        </div>
      </section>

      <div className="container">
        <CtaBand
          title="Let's plan your implementation"
          subtitle="Tell us about your institution and we'll map out a go-live timeline."
          primaryLabel="Talk to an Expert"
        />
      </div>
    </>
  );
}
