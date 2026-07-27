import { NavLink } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import PhotoSlot from '../components/PhotoSlot.jsx';
import PipelineIllustration from '../components/illustrations/PipelineIllustration.jsx';
import '../styles/custom-software.css';

const offerings = [
  {
    title: 'AI Voice & Calling Systems',
    desc: 'Outbound and inbound voice agents built on Vapi, ElevenLabs and Deepgram — for lead follow-up, surveys, appointment reminders and support lines, in English, Hindi or Punjabi.',
  },
  {
    title: 'Custom SaaS Platforms',
    desc: 'Full-stack web applications built around your workflow — school management, real-estate CRMs, field-service dispatch, billing and reporting.',
  },
  {
    title: 'Digital Marketing Systems',
    desc: 'SEO, Google Business Profile management, Meta Ads and content calendars — plus the internal tools to track and report on all of it.',
  },
  {
    title: 'Web & App Development',
    desc: 'Marketing websites, client portals and mobile apps built on React, Node.js and modern cloud hosting.',
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery call',
    desc: 'We talk through what you need, what already exists, and whether custom software is actually the right answer.',
  },
  {
    step: '02',
    title: 'Scope & proposal',
    desc: 'A written scope with timeline, cost and what "done" looks like — no vague estimates.',
  },
  {
    step: '03',
    title: 'Build in the open',
    desc: 'Working demos as we go, not a single reveal at the end. You see progress every week.',
  },
  {
    step: '04',
    title: 'Launch & support',
    desc: 'Deployment, handover documentation, and ongoing support once it\'s live.',
  },
];

export default function CustomSoftware() {
  return (
    <>
      <section className="section section--soft custom-hero">
        <div className="container">
          <span className="eyebrow">Custom Software</span>
          <h1>Software built around how your business actually works.</h1>
          <p>
            We don't sell templates — we build the specific tool your team
            needs, using the same stack that powers our own products.
          </p>
          <NavLink to="/contact" className="btn btn--gold">
            Start a conversation
          </NavLink>
          <div className="custom-hero__pipeline" aria-hidden="true">
            <PipelineIllustration />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head offerings-head">
            <div>
              <span className="eyebrow">What we build</span>
              <h2>Four areas we work in most</h2>
            </div>
            <PhotoSlot
              label="Team working"
              hint="Photo of your team at work"
              ratio="4 / 3"
              className="offerings-head__shot"
            />
          </div>
          <div className="offerings-grid">
            {offerings.map((o, i) => (
              <Reveal as="div" delay={i} className="offering-card" key={o.title}>
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How we work</span>
            <h2>Four steps from idea to live product</h2>
          </div>
          <div className="process-list">
            {process.map((p, i) => (
              <Reveal as="div" delay={i} className="process-item" key={p.step}>
                <span className="process-item__step">{p.step}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-banner section--dark">
        <div className="container cta-banner__inner">
          <h2>Tell us what you're trying to build.</h2>
          <p>A 20-minute call is usually enough to know if we're a fit.</p>
          <NavLink to="/contact" className="btn btn--gold">
            Book a discovery call
          </NavLink>
        </div>
      </section>
    </>
  );
}
