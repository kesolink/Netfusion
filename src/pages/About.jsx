import SEOHead, { breadcrumbSchema } from '../components/SEOHead';
import CtaBand from '../components/CtaBand';
import AlternatingRow from '../components/AlternatingRow';
import PhotoBadges from '../components/PhotoBadges';
import TeamRing from '../components/TeamRing';
import missionSvg from '../assets/svg/mission-vision-compass.svg';
import teamPhoto from '../assets/image/netfusion-industries.jpg';
import backupImg from '../assets/image/backup.png';
import customer from "../assets/image/netfusion-customer-success.jpg"
import board from "../assets/image/board-paper.png";
import build from"../assets/image/building.png"
import Excellence from "../assets/image/Excellence.png"
import circle2 from "../assets/image/circle2-img.png"
import circle3 from "../assets/image/circle-img.png"
import circle4 from "../assets/image/netfusion-products.jpg"
import live from "../assets/svg/hero-network.svg"
import './About.scss';

const values = [
  {
    name: 'Innovation That Solves Real Challenges',
    desc: 'We continuously develop modern banking technology that helps institutions embrace digital transformation and respond confidently to changing customer and regulatory demands.',
    image: board,
    alt: 'NETFUSION product team reviewing a banking platform on screen',
    shape: 'rounded',
    badge: { icon: '\u26A1', text: 'Always improving' },
  },
  {
    name: 'Customer Success',
    desc: "Our clients' success is at the centre of everything we do. We take the time to understand their business and deliver solutions tailored to their needs.",
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80',
    alt: 'NETFUSION account manager meeting with a bank client',
    shape: 'circle',
  },
  {
    name: 'Integrity & Trust',
    desc: 'Trust is the foundation of every financial institution. We conduct our business with transparency, accountability and professionalism.',
    image: customer,
    alt: 'Portrait of a NETFUSION relationship manager',
    shape: 'rounded',
    badge: { icon: '\u2713', text: 'CBN-licensed partner' },
  },
  {
    name: 'Collaboration',
    desc: 'We believe the best results come from working together \u2014 partnering closely with clients, technology partners and industry stakeholders.',
    image: build,
    alt: 'Team collaborating around a table during an implementation workshop',
    shape: 'arch',
  },
  {
    name: 'Excellence',
    desc: 'From implementation to ongoing support, we focus on quality, reliability and continuous improvement in everything we deliver.',
    image: Excellence,
    alt: 'NETFUSION engineer focused on delivering a project milestone',
    shape: 'rounded',
  },
];

const teamPhotos = [
  circle3,
  circle4,
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=160&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=160&q=80',
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=160&q=80',
  circle2,
  Excellence,
];

export default function About() {
  return (
    <>
      <SEOHead
        title="About NETFUSION | African Banking Technology Company"
        description="20+ years of banking and fintech expertise. Learn how NETFUSION helps financial institutions modernize with secure, scalable technology."
        path="/about"
        jsonLd={[breadcrumbSchema([{ name: 'About', path: '/about' }])]}
      />

      <section className="about-hero section">
        <div className="container about-hero__inner">
          <div className="about-hero__copy">
            <span className="eyebrow">About</span>
            <h1>NETFUSION Ideal And Innovations Solutions Ltd</h1>
            <p className="lead">
              NETFUSION is a leading African banking technology company
              dedicated to helping financial institutions build secure,
              scalable and future-ready banking operations.
            </p>
            <p>
              At the heart of our offering is the ALL-FINANCIAL Core Banking
              Suite &mdash; built for microfinance banks, 
              finance houses, SACCOs, credit unions and fintechs. With more
              than 20 years of combined banking and financial technology
              expertise, we help institutions modernize with confidence and
              deliver secure, customer-focused financial services across
              Africa.
            </p>
          </div>
          <div className="about-hero__photo">
            <img src={teamPhoto} alt="NETFUSION implementation team reviewing a banking system rollout" />
          </div>
        </div>
      </section>

      <section className="section section--alt mission" id="mission">
        <div className="container mission__inner">
          <div className="svg-wrap mission__art">
            <img src={missionSvg} alt="Compass guiding a rising growth path, representing NETFUSION's mission and vision" />
          </div>
          <div className="mission__copy">
            <div className="mission__block">
              <h3>Our Mission</h3>
              <p>To empower financial institutions across Africa with secure, innovative and scalable banking technology that simplifies operations, strengthens compliance and accelerates digital transformation.</p>
            </div>
            <div className="mission__block">
              <h3>Our Vision</h3>
              <p>A future where every financial institution, regardless of size, has access to secure, intelligent, scalable banking technology that expands financial inclusion across Africa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES \u2014 alternating photo + text */}
      <section className="values" id="values">
        <div className="container">
          <div className="section-head center" style={{ paddingTop: '64px' }}>
            <span className="eyebrow">What drives us</span>
            <h2>Our values</h2>
            <p className="lead">
              At NETFUSION, our values define how we innovate, collaborate
              and deliver technology that enables financial institutions to
              succeed.
            </p>
          </div>
        </div>
        {values.map((v, i) => (
          <AlternatingRow
            key={v.name}
            image={v.image}
            alt={v.alt}
            title={v.name}
            description={v.desc}
            reverse={i % 2 === 1}
            shape={v.shape}
            badge={v.badge}
          />
        ))}
      </section>

      {/* LOCAL EXPERTISE \u2014 hero photo w/ badges + team ring */}
      <section className="section section--alt expertise">
        <div className="container expertise__inner">
          <div className="expertise__copy">
            <span className="eyebrow">Local expertise. Regional vision.</span>
            <h2>Backed by people who understand African banking</h2>
            <p className="lead">
              Decades of banking and financial technology experience,
              supported by local implementation and customer success teams
              who stay with you well past go-live.
            </p>
            <PhotoBadges
              className="expertise__photo"
              src={backupImg}
              alt="NETFUSION implementation team on-site with a client bank"
              badges={[
                { position: 'top-left', icon: '20+', text: 'Years combined expertise' },
                { position: 'bottom-right', icon: '\u2713', text: 'Go-live supported' },
              ]}
            />
          </div>
          <div className="expertise__ring">
            {/* <TeamRing photos={live} label="NETFUSION" /> */}
            <img src={live} alt="" />
            {/* <p className="expertise__ring-caption">Implementation &amp; customer success team</p> */}
          </div>
        </div>
      </section>

      <div className="container">
        <CtaBand
          title="Meet the team behind ALL-FINANCIAL"
          subtitle="Talk to our banking technology experts about your institution's goals."
          primaryLabel="Talk to an Expert"
        />
      </div>
    </>
  );
}
