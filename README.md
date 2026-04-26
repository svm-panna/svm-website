# Swami Vivekanand Mahavidyalaya — Website

**Live site:** https://swamivivekanandmahavidyalaya.edu.in  
**Admin panel:** https://administration.swamivivekanandmahavidyalaya.edu.in  
**Tech:** Next.js 14 · TypeScript · Tailwind CSS · NextAuth.js · Vercel  

---

## Table of contents

1. [Project structure](#project-structure)
2. [Local development](#local-development)
3. [First-time setup (GitHub + Vercel)](#first-time-setup)
4. [DNS configuration at ERNET](#dns-configuration-ernet)
5. [Migrating DNS to Cloudflare (later)](#cloudflare-migration)
6. [Environment variables](#environment-variables)
7. [Admin panel usage](#admin-panel)
8. [Content management](#content-management)
9. [Deployment pipeline](#deployment-pipeline)
10. [LMS readiness](#lms-readiness)

---

## Project structure

```
svm-website/
├── app/
│   ├── page.tsx                  ← Homepage
│   ├── layout.tsx                ← Root layout
│   ├── site/                     ← Public-facing pages
│   │   ├── about/
│   │   ├── academics/
│   │   ├── admissions/
│   │   ├── campus/
│   │   ├── students/
│   │   └── contact/
│   ├── admin/                    ← Admin panel (auth-protected)
│   │   ├── login/
│   │   ├── dashboard/
│   │   ├── notices/
│   │   ├── courses/
│   │   ├── faculty/
│   │   ├── gallery/
│   │   └── settings/
│   └── api/                      ← REST API routes
│       ├── auth/[...nextauth]/
│       ├── notices/
│       ├── courses/
│       ├── settings/
│       └── contact/
├── components/
│   ├── site/                     ← Public site components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── admin/                    ← Admin components
│       └── Sidebar.tsx
├── data/                         ← JSON content files (editable via admin)
│   ├── notices.json
│   ├── courses.json
│   ├── faculty.json
│   └── settings.json
├── lib/
│   ├── auth.ts                   ← NextAuth config
│   ├── data.ts                   ← Data read/write helpers
│   └── utils.ts                  ← Utility functions
├── .github/workflows/
│   ├── deploy.yml                ← Auto-deploy on push to main
│   └── preview.yml               ← Preview deploy on PRs
├── vercel.json                   ← Vercel + subdomain routing config
└── .env.example                  ← Copy to .env.local
```

---

## Local development

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/svm-website.git
cd svm-website

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local and fill in values (see below)

# 4. Run dev server
npm run dev
# → http://localhost:3000  (public site)
# → http://localhost:3000/admin  (admin panel)
```

**To test the admin subdomain locally**, add to `/etc/hosts`:
```
127.0.0.1 administration.localhost
```
Then visit: `http://administration.localhost:3000`

---

## First-time setup

### Step 1 — Create GitHub repository

```bash
# In the project folder:
git init
git add .
git commit -m "Initial commit — SVM website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/svm-website.git
git push -u origin main
```

### Step 2 — Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
2. Click **New Project** → Import your `svm-website` repo
3. Framework preset will auto-detect as **Next.js**
4. Add environment variables (see [Environment variables](#environment-variables))
5. Click **Deploy**

### Step 3 — Set up GitHub Secrets for CI/CD

Go to your GitHub repo → **Settings → Secrets and variables → Actions**  
Add these secrets:

| Secret | Where to get it |
|--------|----------------|
| `VERCEL_TOKEN` | Vercel → Account Settings → Tokens |
| `VERCEL_ORG_ID` | `.vercel/project.json` after first deploy |
| `VERCEL_PROJECT_ID` | `.vercel/project.json` after first deploy |

### Step 4 — Add admin subdomain in Vercel

In Vercel project → **Settings → Domains**, add:
- `swamivivekanandmahavidyalaya.edu.in`
- `www.swamivivekanandmahavidyalaya.edu.in`
- `administration.swamivivekanandmahavidyalaya.edu.in`

---

## DNS configuration (ERNET)

Log into your ERNET domain control panel and add these records:

### For the main website (Vercel)
```
Type    Name    Value                       TTL
A       @       76.76.21.21                 300
CNAME   www     cname.vercel-dns.com        300
CNAME   administration cname.vercel-dns.com 300
```

> **Note:** Vercel's IP for A record is `76.76.21.21`. Verify this at vercel.com/docs.

### For email (if using Gmail / Google Workspace)
```
Type    Name    Value                   Priority  TTL
MX      @       aspmx.l.google.com      1         300
MX      @       alt1.aspmx.l.google.com 5         300
TXT     @       v=spf1 include:_spf.google.com ~all
```

---

## Cloudflare migration (later)

When you're ready to move from ERNET DNS to Cloudflare:

1. Sign up at [cloudflare.com](https://cloudflare.com)
2. Add your domain `swamivivekanandmahavidyalaya.edu.in`
3. Cloudflare will scan and import existing DNS records
4. **IMPORTANT:** Set the proxy status to **DNS only (grey cloud)** for Vercel records — do NOT enable orange cloud proxy for Vercel
5. At ERNET control panel, change nameservers to the two Cloudflare NS records provided
6. Propagation takes 24–48 hours

Benefits of Cloudflare: free SSL, DDoS protection, analytics, firewall rules.

---

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

### Required for admin login
```bash
NEXTAUTH_SECRET=<run: openssl rand -base64 32>
NEXTAUTH_URL=https://swamivivekanandmahavidyalaya.edu.in
ADMIN_USERNAME=admin
ADMIN_PASSWORD_HASH=<see below>
ADMIN_EMAIL=admin@swamivivekanandmahavidyalaya.edu.in
```

**Generate password hash:**
```bash
node -e "const b=require('bcryptjs'); console.log(b.hashSync('YourSecurePassword',12))"
```
Paste the output as `ADMIN_PASSWORD_HASH`.

### Optional (for contact form emails)
```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_gmail@gmail.com
SMTP_PASS=your_16_char_app_password  # Google: Security → App passwords
```

### Add to Vercel
In Vercel → Project → Settings → Environment Variables, add all the above.

---

## Admin panel

**URL:** `https://administration.swamivivekanandmahavidyalaya.edu.in`

The admin panel lets you:

| Section | What you can do |
|---------|----------------|
| **Dashboard** | Overview of site stats |
| **Notices** | Add / edit / delete notices shown on homepage |
| **Courses** | Edit programme details, seats, eligibility |
| **Faculty** | Add/edit faculty members and their qualifications |
| **Gallery** | Upload and manage campus photos |
| **Settings** | Edit homepage text, stats, contact details, ticker |

Changes save immediately to the JSON files in `/data/`. On Vercel, since the site is statically built, for data that changes often (notices, events) the API routes serve live JSON. For a full rebuild, push a commit.

---

## Content management

All editable content is in `/data/*.json`. You can:
1. Edit via the admin panel (recommended)
2. Edit the JSON files directly and push to GitHub (triggers auto-redeploy)

---

## Deployment pipeline

```
Developer pushes to main branch
        ↓
GitHub Actions runs (deploy.yml)
        ↓
1. npm ci          (install deps)
2. tsc --noEmit    (type check)
3. next lint       (ESLint)
4. vercel build    (build)
5. vercel deploy   (deploy to production)
        ↓
Live at swamivivekanandmahavidyalaya.edu.in
```

PRs get preview deployments automatically (preview.yml).

---

## LMS readiness

The API namespace `/api/lms/*` is reserved and undisturbed.  
Future LMS options:
- **Moodle**: Deploy separately on a VPS, point `lms.swamivivekanandmahavidyalaya.edu.in` to it
- **Custom LMS**: Build additional Next.js routes under `/app/lms/`
- **Shared SSO**: NextAuth already configured — extend with OAuth provider for LMS login

The subdomain `lms.swamivivekanandmahavidyalaya.edu.in` can be configured independently in Vercel/DNS when ready.

---

## Maintenance

```bash
# Update dependencies
npm update

# Check for security issues
npm audit

# Generate a new admin password hash
node -e "const b=require('bcryptjs'); console.log(b.hashSync('NewPassword',12))"
```
