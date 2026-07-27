# Wayne E Solutions — Website (React + Node)

A 5-page company website: **Home, About, Products, Custom Software, Contact.**
Design is inspired by a Wix construction-business layout (hero → about →
benefits → services/projects → testimonials → contact) but adapted for a
software agency, with its own visual identity — not a copy.

## Structure

```
wayne-website/
  client/   → React (Vite) frontend, all 5 pages
  server/   → Node/Express backend, powers the contact form
```

## Design system

- **Colors:** deep indigo `#12122b` (dark sections), off-white `#f6f4ee`
  (light sections), brass gold `#c89b3c` (primary accent/CTA), signal teal
  `#1d8a8a` (status "live" indicator), rust `#b5533c` (secondary accent).
- **Type:** Fraunces (headlines), IBM Plex Sans (body), IBM Plex Mono
  (labels, status pills, nav) — loaded from Google Fonts in `index.html`.
- **Signature element:** the "Product Status Board" — every product is shown
  as a dashboard-style card with a LIVE / BETA / IN DEV status pill, since
  that's literally what the products page is: a status board of real,
  shipped, or in-progress software.
- All product info lives in one file: `client/src/data/products.js`. Add,
  remove, or edit a product there and it updates on both the Home preview
  and the full Products page automatically.

## Running it locally

### 1. Backend

```bash
cd server
npm install
cp .env.example .env
npm run dev
```

Runs on `http://localhost:4000`. Contact form submissions are saved to
`server/data/submissions.json` (auto-created). Read the note inside
`server/routes/contact.js` for where to plug in email/Slack notifications.

### 2. Frontend

```bash
cd client
npm install
npm run dev
```

Runs on `http://localhost:5173` and proxies `/api/*` calls to the backend
(configured in `client/vite.config.js`).

## Images on this site

- **Original SVG illustrations** — hand-built, no stock/AI photos, no
  copyright risk: `HeroIllustration`, `AboutIllustration`,
  `ProductsBoardIllustration`, `PipelineIllustration`, `SignalIllustration`
  (all in `client/src/components/illustrations/`).
- **Photo placeholders** — dashed boxes marked `PhotoSlot` showing exactly
  what photo goes where and at what size: a screenshot on every product
  card, an office/team photo on the About and Custom Software pages, and an
  avatar on each team card and the testimonial. Replace each `<PhotoSlot .../>`
  with a normal `<img src="..." alt="..." />` once you have the real photo.

## What to customize before going live

- **Logo:** currently a text mark ("WE") in `Navbar.jsx` / `Footer.jsx` —
  swap in your logo file when ready.
- **Contact email/socials:** update in `Footer.jsx` and `Contact.jsx`.
- **Testimonial:** placeholder quote in `Home.jsx` — swap in a real client
  quote once you have one you're happy sharing.
- **Team section:** roles are shown without names in `About.jsx` — add names
  if you want them public.
- **Contact form email notifications:** already wired via Resend — see
  "Email notifications for the contact form" below to turn it on.

## Email notifications for the contact form

Every submission is always saved to `server/data/submissions.json`.
To also get an email each time someone submits the form:

1. Sign up free at **resend.com** and verify you can send from a test address.
2. Get your API key (Resend dashboard → API Keys).
3. On the server, create `server/.env` (copy `server/.env.example`) and fill in:
   ```
   RESEND_API_KEY=re_your_key_here
   CONTACT_NOTIFY_EMAIL=hello@wayneesolutions.com
   ```
4. Restart the backend so it picks up the new `.env`:
   - Local: `npm run dev` (server folder)
   - Docker: `docker compose up -d --build`

Until `RESEND_API_KEY` is set, the site works exactly as before — the
submission is just saved to the file, no email is sent, no errors.

## Deploying to AWS

Full step-by-step guide: **`DEPLOY_AWS.md`** — covers launching an EC2
instance, installing Docker, and running both containers with
`docker compose up -d --build`. Includes `Dockerfile`s for both `client`
and `server`, plus a root-level `docker-compose.yml` that wires them
together (nginx serves the React build and proxies `/api/*` to the
Node backend).

## Deployment notes

- `client` builds to a static bundle (`npm run build` → `client/dist`) —
  deploy to Vercel/Netlify or serve via any static host.
- `server` is a standard Express app — deploy to Railway/Render, same as
  your other backends.
- In production, point the frontend's API calls at your deployed backend URL
  instead of the local proxy (set `VITE_API_URL` and adjust `Contact.jsx` if
  you'd like — currently it assumes both are served from the same domain).
