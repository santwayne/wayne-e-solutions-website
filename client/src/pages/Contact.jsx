import { useState } from 'react';
import SignalIllustration from '../components/illustrations/SignalIllustration.jsx';
import '../styles/contact.css';

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section className="section contact-page">
      <div className="container contact-grid">
        <div className="contact-info">
          <span className="eyebrow">Contact</span>
          <h1>Tell us about your project.</h1>
          <p>
            Whether it's custom software, an AI calling system, or a marketing
            campaign — send us the details and we'll reply with next steps.
          </p>

          <div className="contact-info__block">
            <span className="eyebrow">India office</span>
            <p>Ludhiana, Punjab, India</p>
          </div>
          <div className="contact-info__block">
            <span className="eyebrow">Canada operations</span>
            <p>Ontario &amp; Manitoba, Canada</p>
          </div>
          <div className="contact-info__block">
            <span className="eyebrow">Email</span>
            <a href="mailto:hello@wayneesolutions.com">hello@wayneesolutions.com</a>
          </div>

          <div className="contact-info__art" aria-hidden="true">
            <SignalIllustration />
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__row">
            <label>
              First name*
              <input
                required
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
              />
            </label>
            <label>
              Last name*
              <input
                required
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
              />
            </label>
          </div>

          <label>
            Email*
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </label>

          <label>
            Phone
            <input name="phone" value={form.phone} onChange={handleChange} />
          </label>

          <label>
            What are you looking to build?*
            <textarea
              required
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
            />
          </label>

          <button className="btn btn--outline-light" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          {status === 'success' && (
            <p className="contact-form__note contact-form__note--ok">
              Thanks — we've received your message and will reply soon.
            </p>
          )}
          {status === 'error' && (
            <p className="contact-form__note contact-form__note--err">
              Something went wrong sending that. Please try again or email us directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
