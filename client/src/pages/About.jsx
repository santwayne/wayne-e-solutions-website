import Reveal from '../components/Reveal.jsx';
import PhotoSlot from '../components/PhotoSlot.jsx';
import AboutIllustration from '../components/illustrations/AboutIllustration.jsx';
import '../styles/about.css';

const values = [
  {
    title: 'Ship real software',
    desc: 'Every product on our site is a working build, not a mockup — you can see it running before you commit.',
  },
  {
    title: 'Two-market fluency',
    desc: 'We build for Indian and Canadian small businesses side by side, and understand what each market actually needs.',
  },
  {
    title: 'Honest scoping',
    desc: 'If something is still in development, we say so. Status badges on our products page are not marketing.',
  },
  {
    title: 'Small, senior team',
    desc: 'A compact team that stays close to every build, rather than a large bench passing work down the chain.',
  },
];

const team = [
  { role: 'Founder', note: 'Leads strategy, client relationships and product direction.' },
  { role: 'Co-founder, Design', note: 'Shapes the visual identity and creative direction across products and clients.' },
  { role: 'Web Development', note: 'Builds and maintains client-facing websites and web apps.' },
  { role: 'Software Development', note: 'Architects and ships the backend for our SaaS products.' },
];

export default function About() {
  return (
    <>
      <section className="section section--soft about-hero">
        <div className="container about-hero__grid">
          <div>
            <span className="eyebrow">About Wayne E Solutions</span>
            <h1>A five-year-old team that still ships like a startup.</h1>
            <p>
              Wayne E Solutions started as a referral-driven agency serving
              Canadian small businesses, and has grown into a software studio that
              builds our own products alongside client work — from AI calling
              systems to full SaaS platforms.
            </p>
          </div>
          <PhotoSlot
            label="Office or team photo"
            hint="1000 × 750px recommended"
            ratio="4 / 3"
            className="about-hero__shot"
          />
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <Reveal>
            <span className="eyebrow">Our story</span>
            <h2>From marketing agency to product studio</h2>
            <p>
              We began by running SEO, Google Business Profile and social media
              campaigns for restaurants, real-estate agents, HVAC companies and
              beauty businesses across Ontario and Manitoba. Along the way, we
              started building the internal tools our clients kept asking for —
              and realised we were better at building software than we gave
              ourselves credit for.
            </p>
            <p>
              Today Wayne E Solutions runs on two tracks: digital marketing
              services for Canadian and Indian SMB clients, and an in-house
              product line — WayneRing, Waynur, PropertyPro, Sukoon and more —
              built by the same team that manages your campaign or your call
              center.
            </p>
          </Reveal>
          <Reveal delay={1} className="about-grid__side">
            <div className="about-illustration-wrap" aria-hidden="true">
              <AboutIllustration />
            </div>
            <div className="about-grid__values">
              {values.map((v) => (
                <div className="value-card" key={v.title}>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">The team</span>
            <h2>Small enough to know every product, top to bottom</h2>
          </Reveal>
          <div className="team-grid">
            {team.map((t, i) => (
              <Reveal as="div" delay={i} className="team-card" key={t.role}>
                <PhotoSlot label="Photo" ratio="1 / 1" className="team-card__avatar" />
                <span className="team-card__role">{t.role}</span>
                <p>{t.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
