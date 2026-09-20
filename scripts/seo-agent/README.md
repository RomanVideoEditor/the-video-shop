# SEO Agent — videoshop

Automated closed-loop SEO agent that runs every 2 weeks, measures real GSC data,
generates content, and commits/PRs the changes.

## How It Works

1. **Measure** — queries Google Search Console for keyword positions across 6 service topics
2. **Pick** — selects the weakest-ranking topic not touched in the last 60 days
3. **Generate** — uses Claude to write FAQ items (safe) or a blog post (PR)
4. **Apply** — FAQ items auto-commit to main; blog posts open a PR for review
5. **Report** — sends an email summary with before/after position data
6. **Close** — on the next run, measures followup metrics and closes the previous cycle

## Cycle Schedule

Runs on the **1st and 15th of each month** at 11:00 Israel time.

## GitHub Secrets Required

Add these in **GitHub → Settings → Secrets and variables → Actions**:

| Secret | Value |
|--------|-------|
| `FIREBASE_PROJECT_ID` | Firebase project ID (e.g. `videoshop-seo`) |
| `FIREBASE_SERVICE_ACCOUNT_JSON` | Full JSON of Firebase service account key |
| `GOOGLE_SERVICE_ACCOUNT_JSON` | Full JSON of Google service account with GSC + GA4 access |
| `GA4_PROPERTY_ID` | GA4 property ID (format: `G-XXXXXXXX`) |
| `GSC_SITE_URL` | GSC site URL (e.g. `https://www.the-videoshop.com/`) |
| `ANTHROPIC_API_KEY` | Claude API key |
| `NOTIFY_EMAIL` | Email address for summaries (default: gornih.roman@gmail.com) |
| `SMTP_FROM` | Sender address (e.g. `seo-agent@the-videoshop.com`) |
| `SMTP_HOST` | SMTP server hostname |
| `SMTP_USER` | SMTP username |
| `SMTP_PASS` | SMTP password |

> `GITHUB_TOKEN` is provided automatically by GitHub Actions — no secret needed.

## Firebase Setup

1. Create a Firebase project at console.firebase.google.com
2. Enable Firestore in Native mode
3. Create a Service Account with Firestore write access
4. Download the JSON key → paste as `FIREBASE_SERVICE_ACCOUNT_JSON` secret

## Google APIs Setup

1. Create a Service Account in Google Cloud Console
2. Grant it:
   - **Search Console** → add service account email as a property user (View access)
   - **GA4** → add service account email as a Viewer
3. Download the JSON key → paste as `GOOGLE_SERVICE_ACCOUNT_JSON` secret
4. Enable **Search Console API** in your Google Cloud project

## Manual Run

Trigger manually from GitHub → Actions → "SEO Agent" → Run workflow.

## Files

```
scripts/seo-agent/
├── index.js      — main orchestrator
├── config.js     — keyword topics & env config
├── state.js      — Firebase Firestore CRUD
├── gsc.js        — Google Search Console API
├── claude.js     — Claude AI content generation
├── changes.js    — GitHub file commits & PRs
├── email.js      — email summary
└── package.json  — dependencies

.github/workflows/
└── seo-agent.yml — GitHub Actions cron workflow
```
