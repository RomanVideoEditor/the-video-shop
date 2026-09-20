// ─── PAGESPEED INSIGHTS MONITORING ───────────────────────────────────────────
// Checks Core Web Vitals for key pages via Google PageSpeed Insights API.
// Free, no billing needed — just pass the API key.

const PAGES_TO_CHECK = [
  { label: "דף הבית",         url: "https://www.the-videoshop.com/he" },
  { label: "קורפורייט",       url: "https://www.the-videoshop.com/he/services/corporate" },
  { label: "הייטק",           url: "https://www.the-videoshop.com/he/services/hightech" },
  { label: "אנימציה",         url: "https://www.the-videoshop.com/he/services/animation" },
  { label: "AI וידאו",        url: "https://www.the-videoshop.com/he/services/ai" },
  { label: "נדל\"ן",          url: "https://www.the-videoshop.com/he/services/realestate" },
];

const SCORE_THRESHOLD = 70; // alert if performance drops below this

async function checkPage(url, apiKey) {
  const endpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile&key=${apiKey}`;
  const res = await fetch(endpoint);
  if (!res.ok) throw new Error(`PageSpeed API error ${res.status} for ${url}`);
  const data = await res.json();

  const cats = data.lighthouseResult?.categories || {};
  const audits = data.lighthouseResult?.audits || {};

  return {
    url,
    performance:   Math.round((cats.performance?.score   ?? 0) * 100),
    accessibility: Math.round((cats.accessibility?.score ?? 0) * 100),
    seo:           Math.round((cats.seo?.score           ?? 0) * 100),
    lcp:  audits["largest-contentful-paint"]?.displayValue  ?? "–",
    cls:  audits["cumulative-layout-shift"]?.displayValue   ?? "–",
    fcp:  audits["first-contentful-paint"]?.displayValue    ?? "–",
    tbt:  audits["total-blocking-time"]?.displayValue       ?? "–",
  };
}

export async function runPageSpeedAudit(apiKey) {
  if (!apiKey) {
    console.warn("[pagespeed] No API key — skipping audit");
    return null;
  }

  console.log("[pagespeed] Running PageSpeed audit on", PAGES_TO_CHECK.length, "pages...");
  const results = [];

  for (const page of PAGES_TO_CHECK) {
    try {
      const score = await checkPage(page.url, apiKey);
      results.push({ label: page.label, ...score });
      console.log(`[pagespeed] ${page.label}: perf=${score.performance}, seo=${score.seo}, lcp=${score.lcp}`);
      // Throttle — PSI allows 25 req/100s per key
      await new Promise((r) => setTimeout(r, 1500));
    } catch (err) {
      console.warn(`[pagespeed] Failed for ${page.url}: ${err.message}`);
      results.push({ label: page.label, url: page.url, error: err.message });
    }
  }

  const alerts = results.filter((r) => !r.error && r.performance < SCORE_THRESHOLD);
  if (alerts.length) {
    console.warn(`[pagespeed] ⚠️  ${alerts.length} page(s) below performance threshold (${SCORE_THRESHOLD}):`);
    alerts.forEach((r) => console.warn(`   ${r.label}: ${r.performance}`));
  }

  return { results, alerts, threshold: SCORE_THRESHOLD };
}
