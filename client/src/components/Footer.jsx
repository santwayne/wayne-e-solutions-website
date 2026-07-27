import { NavLink } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import '../styles/footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__col">
          <div className="navbar__logo">
            <span className="navbar__logo-mark">WE</span>
            <span className="navbar__logo-text">Wayne E Solutions</span>
          </div>
          <p className="footer__tag">
            Software development &amp; digital marketing for growing businesses
            in India and Canada.
          </p>
        </div>

        <div className="footer__col">
          <span className="eyebrow">Explore</span>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/custom-software">Custom Software</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="footer__col">
          <span className="eyebrow">Offices</span>
          <p><MapPin size={14} /> Ludhiana, Punjab, India</p>
          <p><MapPin size={14} /> Ontario &amp; Manitoba, Canada</p>
        </div>

        <div className="footer__col">
          <span className="eyebrow">Get in touch</span>
          <a href="mailto:hello@wayneesolutions.com"><Mail size={14} /> hello@wayneesolutions.com</a>
          <a href="https://aicalling.wayneesolutions.com" target="_blank" rel="noreferrer">
            <Phone size={14} /> aicalling.wayneesolutions.com
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {year} Wayne E Solutions. All rights reserved.</span>
      </div>
    </footer>
  );
}
