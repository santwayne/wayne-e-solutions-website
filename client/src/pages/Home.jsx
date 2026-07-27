import { NavLink } from 'react-router-dom';
import { Cpu, Globe2, ShieldCheck, Headphones } from 'lucide-react';
import products from '../data/products.js';
import ProductCard from '../components/ProductCard.jsx';
import Reveal from '../components/Reveal.jsx';
import PhotoSlot from '../components/PhotoSlot.jsx';
import HeroIllustration from '../components/illustrations/HeroIllustration.jsx';
import '../styles/home.css';

const benefits = [
  { icon: Cpu, title: 'Real Software', desc: 'Working products, not mockups or slide decks.' },
  { icon: Globe2, title: 'Two Markets', desc: 'Built for clients across India and Canada.' },
  { icon: ShieldCheck, title: 'Honest Scoping', desc: 'Status badges tell you what\'s actually live.' },
  { icon: Headphones, title: 'Senior Team', desc: 'A small team that stays close to every build.' },
];

const services = [
  { title: 'AI Voice & Calling', desc: 'Outbound and inbound calling agents that talk in English, Hindi and Punjabi.' },
  { title: 'Custom SaaS Builds', desc: 'Full-stack platforms — school ERPs, real-estate tools, field-service dashboards.' },
  { title: 'Digital Marketing', desc: 'SEO, Google Business Profile management, Meta Ads and social content.' },
  { title: 'Web Development', desc: 'Marketing sites and web apps built on React, Node.js and modern hosting.' },
];

const featured = products.filter((p) =>
  ['wayneRing', 'waynur', 'propertyPro', 'sukoon'].includes(p.slug)
);

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__bg" aria-hidden="true" />
        <div className="container hero__grid">
          <div className="hero__inner">
            <span className="eyebrow">Wayne E Solutions — Ludhiana · Ontario · Manitoba</span>
            <h1 className="hero__title">We build the software your business runs on.</h1>
            <p className="hero__sub">
              A software development and digital marketing team shipping AI calling
              systems, SaaS platforms and marketing engines for businesses across
              India and Canada.
            </p>
            <div className="hero__actions">
              <NavLink to="/custom-software" className="btn btn--gold">Start a project</NavLink>
              <NavLink to="/products" className="btn btn--outline-dark">See our products</NavLink>
            </div>
          </div>
          <div className="hero__art" aria-hidden="true">
            <HeroIllustration />
          </div>
        </div>
      </section>

      <Reveal as="section" className="section about-teaser">
        <div className="container about-teaser__inner">
          <div className="about-teaser__text">
            <span className="eyebrow">About us</span>
            <h2>A software studio built inside a marketing agency</h2>
            <p>
              We started running digital marketing campaigns for Canadian small
              businesses, then began building the internal tools our clients kept
              asking for. Today that's turned into a full product line — AI
              calling systems, school and real-estate platforms, and more —
              built by the same team that runs your campaign.
            </p>
            <NavLink to="/about" className="about-teaser__link">Read our story →</NavLink>
          </div>
          <div className="about-teaser__panel" aria-hidden="true">
            <span className="about-teaser__panel-label">12</span>
            <span className="about-teaser__panel-caption">products shipped or in build</span>
          </div>
        </div>
      </Reveal>

      <section className="section section--soft benefits">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <span className="eyebrow">Our benefits</span>
            <h2>Why teams work with us</h2>
          </Reveal>
          <div className="benefits-grid">
            {benefits.map(({ icon: Icon, title, desc }, i) => (
              <Reveal as="div" delay={i} className="benefit-card" key={title}>
                <Icon className="benefit-card__icon" size={26} strokeWidth={1.6} />
                <h3>{title}</h3>
                <p>{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">What we do</span>
            <h2>Four ways we help you grow</h2>
          </Reveal>
          <div className="services-grid">
            {services.map((s, i) => (
              <Reveal as="div" delay={i} className="services-grid__item" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Recent builds</span>
            <h2>Software we've built and shipped</h2>
          </Reveal>
          <div className="product-grid">
            {featured.map((p, i) => (
              <Reveal as="div" delay={i} key={p.slug}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
          <div className="section-cta">
            <NavLink to="/products" className="btn btn--outline-light">View all 12 products</NavLink>
          </div>
        </div>
      </section>

      <Reveal as="section" className="section testimonial">
        <div className="container testimonial__inner">
          <span className="eyebrow">Client feedback</span>
          <blockquote>
            "Add a short quote here from a client — what changed for their
            business after working with you, in their own words."
          </blockquote>
          <div className="testimonial__author">
            <PhotoSlot label="Photo" ratio="1 / 1" className="testimonial__avatar" />
            <span className="testimonial__name">Client name, Business name — City</span>
          </div>
        </div>
      </Reveal>

      <section className="section cta-banner">
        <div className="container cta-banner__inner">
          <h2>Have an idea for custom software?</h2>
          <p>Tell us what you're trying to build — we'll tell you honestly if it's a fit.</p>
          <NavLink to="/contact" className="btn btn--gold">Get in touch</NavLink>
        </div>
      </section>
    </>
  );
}
