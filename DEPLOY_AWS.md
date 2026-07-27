# Deploying Wayne E Solutions website to AWS (EC2 + Docker)

This uses a single AWS EC2 instance running both containers via Docker
Compose — the simplest reliable path to "live on AWS" for a site this size.
No Kubernetes, no ECS, no extra AWS services required to get started.

## What you'll have running

```
Internet → EC2 (port 80) → nginx (client container, serves the React build)
                                  └── /api/* → proxied to → Node/Express (server container, port 4000 internal)
```

---

## Step 1 — Launch an EC2 instance

1. AWS Console → **EC2 → Launch Instance**
2. **Name:** `wayne-e-solutions-web`
3. **AMI:** Ubuntu Server 22.04 LTS (or 24.04 LTS)
4. **Instance type:** `t3.micro` is enough to start (free-tier eligible on `t2.micro`)
5. **Key pair:** create or select one — you'll need the `.pem` file to SSH in
6. **Network settings → Edit security group**, allow:
   - SSH (port 22) — from "My IP" (safer than "Anywhere")
   - HTTP (port 80) — from Anywhere (0.0.0.0/0)
   - HTTPS (port 443) — from Anywhere (0.0.0.0/0) — needed later for SSL
7. Launch the instance, note its **public IPv4 address**.

## Step 2 — SSH in and install Docker

```bash
ssh -i your-key.pem ubuntu@<EC2_PUBLIC_IP>
```

Then on the instance:

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y docker.io docker-compose-plugin
sudo systemctl enable --now docker
sudo usermod -aG docker $USER
# log out and back in so the group change takes effect
exit
```

SSH back in, then verify:
```bash
docker --version
docker compose version
```

## Step 3 — Get the code onto the instance

**Option A — via GitHub (recommended, once the repo is pushed):**
```bash
git clone https://github.com/santwayne/<your-repo-name>.git
cd <your-repo-name>
```

**Option B — upload the zip directly:**
```bash
# from your local machine
scp -i your-key.pem wayne-e-solutions-website.zip ubuntu@<EC2_PUBLIC_IP>:~
# back on the EC2 instance
sudo apt install -y unzip
unzip wayne-e-solutions-website.zip
cd wayne-website
```

## Step 4 — Build and run

From the project root (where `docker-compose.yml` lives):

```bash
docker compose up -d --build
```

This builds both images and starts them in the background. Check status:
```bash
docker compose ps
docker compose logs -f
```

## Step 5 — Visit the site

Open `http://<EC2_PUBLIC_IP>` in a browser — the site should load, and the
Contact form should submit successfully (test it — a submission gets saved
inside the `server` container's persistent volume).

---

## Step 6 — Point your domain at it (optional but recommended)

1. Buy/use a domain (Route 53, GoDaddy, etc.)
2. Add an **A record** pointing to the EC2 public IP
   (better: allocate an **Elastic IP** in EC2 first so the address doesn't
   change on reboot, then point the A record at that)

## Step 7 — Add HTTPS with a free SSL certificate (optional but recommended)

Easiest path: run Certbot alongside nginx. Since nginx is running *inside* a
container here, the simplest approach is to add a small reverse-proxy on the
host, or switch the client container to also handle certs. If you want this
set up, ask and it can be added as a `docker-compose` + Certbot combo — for
now the site works fine over plain HTTP for testing and soft-launch.

---

## Everyday operations

**Redeploy after code changes:**
```bash
git pull   # or re-upload the zip and unzip over the old folder
docker compose up -d --build
```

**View logs:**
```bash
docker compose logs -f server   # backend only
docker compose logs -f client   # nginx/frontend only
```

**Stop everything:**
```bash
docker compose down
```

**Check contact form submissions saved on the server:**
```bash
docker exec -it wayne-server cat /app/data/submissions.json
```

---

## Cost note

A `t3.micro`/`t2.micro` instance running 24/7 costs roughly $7–9/month
outside the AWS free tier (first 12 months are free-tier eligible on
`t2.micro` for new accounts). No other AWS services are required for this
setup.
