// ─── CONFIGURATION ───────────────────────────────────────────────────────────
// All values come from GitHub Secrets / environment variables.
// See README.md for setup instructions.

export const CONFIG = {
  // ── Site ──
  siteUrl: "https://www.the-videoshop.com",
  siteLocale: "he",          // primary locale for GSC queries

  // ── GitHub ──
  githubRepo: process.env.GITHUB_REPOSITORY || "YOUR_USERNAME/the-video-shop",
  githubToken: process.env.GITHUB_TOKEN,

  // ── Firebase ──
  firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
  firebaseCredentials: process.env.FIREBASE_SERVICE_ACCOUNT_JSON
    ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON)
    : null,

  // ── Google APIs ──
  googleCredentials: process.env.GOOGLE_SERVICE_ACCOUNT_JSON
    ? JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON)
    : null,
  ga4PropertyId: process.env.GA4_PROPERTY_ID || "G-KJBDYMNGWW",
  gscSiteUrl: process.env.GSC_SITE_URL || "https://www.the-videoshop.com/",

  // ── Claude API ──
  anthropicApiKey: process.env.ANTHROPIC_API_KEY,

  // ── Email ──
  emailTo: process.env.NOTIFY_EMAIL || "gornih.roman@gmail.com",
  emailFrom: process.env.SMTP_FROM || "seo-agent@the-videoshop.com",
  smtpHost: process.env.SMTP_HOST,
  smtpUser: process.env.SMTP_USER,
  smtpPass: process.env.SMTP_PASS,

  // ── Agent behavior ──
  cycleDays: 14,             // days between cycles
  safeChangePatterns: [      // changes that auto-merge without PR
    "faqItems",
    "aggregateRating",
    "keywords:",
  ],
};

// ── Target keyword clusters → service pages ──────────────────────────────────
export const KEYWORD_TOPICS = [
  {
    id: "corporate",
    label: "סרטי תדמית וסרטי חברה",
    pagePath: "/services/corporate",
    keywords: [
      "סרט תדמית לחברה",
      "סרטי חברה",
      "כמה עולה סרט תדמית",
      "הפקת וידאו תאגידי",
      "corporate video production israel",
    ],
  },
  {
    id: "hightech",
    label: "הייטק וסטארטאפים",
    pagePath: "/services/hightech",
    keywords: [
      "הפקת סרט תדמית להייטק",
      "סרט תדמית לסטארט אפ",
      "investor pitch video israel",
      "tech startup video production israel",
      "video production for startups",
    ],
  },
  {
    id: "animation",
    label: "אנימציה",
    pagePath: "/services/animation",
    keywords: [
      "סרטון אנימציה לחברה",
      "אנימציה הסברתית",
      "animated explainer video israel",
      "explainer video studio",
    ],
  },
  {
    id: "ai",
    label: "וידאו AI",
    pagePath: "/services/ai",
    keywords: [
      "וידאו AI לעסקים",
      "הפקת סרטון עם בינה מלאכותית",
      "ai video production agency",
      "ai video production israel",
    ],
  },
  {
    id: "realestate",
    label: "נדל\"ן",
    pagePath: "/services/realestate",
    keywords: [
      "וידאו נדל\"ן מסחרי",
      "צילום רחפן ישראל",
      "real estate video production israel",
    ],
  },
  {
    id: "pricing",
    label: "מחירים",
    pagePath: "/pricing",
    keywords: [
      "כמה עולה הפקת וידאו",
      "מחיר יום צילום",
      "how much does a corporate video cost",
      "video production cost israel",
    ],
  },
];
