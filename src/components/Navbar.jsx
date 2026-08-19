import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { PopupButton } from 'react-calendly';
import './Navbar.scss';

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/support', label: 'Support' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, []);

  return (
    <header className={`nf-nav ${scrolled ? 'nf-nav--scrolled' : ''}`}>
      <div className="container nf-nav__inner">
        <NavLink to="/" className="nf-nav__logo" onClick={() => setOpen(false)}>
          <img src="/logos/Netfusion-logo.jpg" alt="NETFUSION" style={{ height: '42px', width: 'auto', objectFit: 'contain' }} />
        </NavLink>

        <nav className="nf-nav__links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => 'nf-nav__link' + (isActive ? ' is-active' : '')}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nf-nav__cta">
          <PopupButton
            url="https://calendly.com/allfinancialbanking"
            rootElement={document.getElementById("root")}
            text="Talk to an Expert"
            className="btn btn-outline btn-sm"
          />
          <PopupButton
            url="https://calendly.com/allfinancialbanking"
            rootElement={document.getElementById("root")}
            text="Request Demo"
            className="btn btn-primary btn-sm"
          />
        </div>

        <button
          className={`nf-nav__burger ${open ? 'is-open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      <div className={`nf-nav__mobile ${open ? 'is-open' : ''}`}>
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} className="nf-nav__mobile-link" onClick={() => setOpen(false)}>
            {l.label}
          </NavLink>
        ))}
        <div onClick={() => setOpen(false)}>
          <PopupButton
            url="https://calendly.com/allfinancialbanking"
            rootElement={document.getElementById("root")}
            text="Request Demo"
            className="btn btn-primary"
          />
        </div>
      </div>
    </header>
  );
}
