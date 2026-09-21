// ─── AUTO-MERGE SEO AGENT PRs ─────────────────────────────────────────────────
// 1. Find open "[SEO Agent]" PRs that are >24h old and have all CI checks passing
// 2. Run a Claude Sonnet quality review (score 1–10)
//    ≥ 7 → merge via squash
//    < 7 → post a review comment with feedback + request changes
import { Octokit }   from "octokit";
import Anthropic     from "@anthropic-ai/sdk";
import { CONFIG }    from "./config.js";

const octokit = new Octokit({ auth: CONFIG.githubToken });
const claude  = new Anthropic({ apiKey: CONFIG.anthropicApiKey });
const [owner, repo] = CONFIG.githubRepo.split("/");

const MIN_AGE_HOURS  = 24;
const MIN_SCORE      = 7;      // merge threshold (1–10)

// ── Fetch post preview from PR branch ────────────────────────────────────────

async function fetchPostPreviewFromBranch(branchRef) {
  try {
    const { data } = await octokit.rest.repos.getContent({
      owner, repo,
      path: "src/lib/videos.ts",
      ref: branchRef,
    });
    const content = Buffer.from(data.content, "base64").toString("utf8");

    // Extract the FIRST entry in vlogPosts (new posts are prepended)
    const extractField = (field) => {
      const r = new RegExp(`${field}:\\s*"((?:[^"\\\\]|\\\\.)*)"`);
      const m = content.match(r);
      return m ? m[1].replace(/\\n/g, "\n").replace(/\\"/g, '"') : "";
    };

    return {
      titleEn:   extractField("titleEn"),
      titleHe:   extractField("titleHe"),
      excerptEn: extractField("excerptEn"),
      bodyEn:    extractField("bodyEn").slice(0, 1200), // first ~200 words
    };
  } catch (err) {
    console.warn(`[automerge] Could not fetch post preview: ${err.message}`);
    return null;
  }
}

// ── Claude Sonnet quality review ─────────────────────────────────────────────

async function reviewBlogPost(post) {
  const prompt = `You are a senior content editor reviewing a B2B blog post for videoshop (the-videoshop.com), a boutique video production studio in Tel Aviv targeting corporate clients (Intel, tech startups, real estate developers).

POST TO REVIEW:
Title (EN): ${post.titleEn}
Title (HE): ${post.titleHe}
Excerpt: ${post.excerptEn}
Body preview (first ~200 words):
${post.bodyEn}

Score this post 1–10 using this rubric:
- Specificity (0–3): Does it mention real prices (NIS), timelines, or named clients? Generic = 0, specific = 3
- B2B relevance (0–3): Does it speak directly to decision-makers at Israeli companies? Consumer tone = 0, sharp B2B = 3
- Unique insight (0–2): Does it say something a competitor couldn't copy? Could be from any studio = 0, clearly videoshop's POV = 2
- No fluff (0–2): Dense, valuable sentences throughout? Padded with filler = 0, every sentence earns its place = 2

Total: 1–10. Threshold for publish: 7.

Return ONLY valid JSON:
{
  "score": 8,
  "verdict": "approve",
  "positives": "One sentence on the strongest aspect",
  "feedback": "One sentence on the main weakness (if any), or empty string if approved cleanly",
  "specificityScore": 2,
  "b2bScore": 3,
  "insightScore": 2,
  "fluffScore": 1
}`;

  const response = await claude.messages.create({
    model:      "claude-sonnet-5",
    max_tokens: 300,
    messages:   [{ role: "user", content: prompt }],
  });

  const text = response.content[0].text.trim();
  try { return JSON.parse(text); }
  catch {
    const m = text.match(/\{[\s\S]*\}/);
    if (m) return JSON.parse(m[0]);
    throw new Error(`Review returned invalid JSON: ${text.slice(0, 100)}`);
  }
}

// ── Post a review comment ────────────────────────────────────────────────────

async function postReviewComment(prNumber, review, post) {
  const scoreBar = "█".repeat(review.score) + "░".repeat(10 - review.score);
  const body = `## 🤖 SEO Agent — Quality Review

**Score: ${review.score}/10** \`${scoreBar}\`

| Criterion | Score |
|-----------|-------|
| Specificity (prices, clients, timelines) | ${review.specificityScore}/3 |
| B2B relevance | ${review.b2bScore}/3 |
| Unique insight | ${review.insightScore}/2 |
| No fluff | ${review.fluffScore}/2 |

**✅ Strength:** ${review.positives}

**⚠️ Needs improvement:** ${review.feedback || "—"}

---
Score below ${MIN_SCORE}/10 — this post was **not merged**. The next SEO agent cycle will generate a new post with improved guidance. You can also edit this PR manually and the automerge will retry tomorrow.`;

  await octokit.rest.issues.createComment({
    owner, repo,
    issue_number: prNumber,
    body,
  });
}

// ── Main ──────────────────────────────────────────────────────────────────────

export async function autoMergeSeoAgentPrs() {
  const { data: prs } = await octokit.rest.pulls.list({
    owner, repo, state: "open", per_page: 30,
  });

  const seoPrs = prs.filter((pr) => pr.title.startsWith("[SEO Agent]"));
  console.log(`[automerge] ${seoPrs.length} open SEO Agent PR(s) found`);

  const merged  = [];
  const blocked = [];

  for (const pr of seoPrs) {
    const ageHours = (Date.now() - new Date(pr.created_at).getTime()) / 3600000;

    if (ageHours < MIN_AGE_HOURS) {
      console.log(`[automerge] PR #${pr.number} is only ${ageHours.toFixed(1)}h old — waiting`);
      continue;
    }

    // ── CI checks ────────────────────────────────────────────────────────────
    const { data: checks } = await octokit.rest.checks.listForRef({
      owner, repo, ref: pr.head.sha, per_page: 100,
    });

    const failed = checks.check_runs.filter(
      (c) => c.conclusion === "failure" || c.conclusion === "timed_out"
    );
    if (failed.length > 0) {
      console.log(`[automerge] PR #${pr.number} has ${failed.length} failed check(s) — skipping`);
      continue;
    }

    const pending = checks.check_runs.filter(
      (c) => c.status === "in_progress" || c.status === "queued"
    );
    if (pending.length > 0) {
      console.log(`[automerge] PR #${pr.number} has ${pending.length} pending check(s) — waiting`);
      continue;
    }

    // ── Quality review ────────────────────────────────────────────────────────
    const post = await fetchPostPreviewFromBranch(pr.head.ref);
    if (!post || !post.titleEn) {
      console.warn(`[automerge] PR #${pr.number} — could not extract post content, merging anyway`);
    } else {
      console.log(`[automerge] Reviewing: "${post.titleEn}"...`);
      let review;
      try {
        review = await reviewBlogPost(post);
        console.log(`[automerge] Score: ${review.score}/10 (${review.verdict}) — ${review.positives}`);
      } catch (err) {
        console.warn(`[automerge] Review failed: ${err.message} — merging anyway`);
        review = null;
      }

      if (review && review.score < MIN_SCORE) {
        console.log(`[automerge] PR #${pr.number} scored ${review.score}/10 — posting feedback, not merging`);
        await postReviewComment(pr.number, review, post);
        blocked.push({ number: pr.number, title: pr.title, score: review.score });
        continue;
      }

      if (review) {
        // Leave a brief approval note before merging
        await octokit.rest.issues.createComment({
          owner, repo,
          issue_number: pr.number,
          body: `## 🤖 SEO Agent — Quality Review: **${review.score}/10** ✅\n\n${review.positives}\n\n_Auto-merging now._`,
        });
      }
    }

    // ── Merge ─────────────────────────────────────────────────────────────────
    await octokit.rest.pulls.merge({
      owner, repo,
      pull_number:    pr.number,
      merge_method:   "squash",
      commit_title:   pr.title,
      commit_message: `Auto-merged by SEO agent after ${Math.round(ageHours)}h review window`,
    });

    console.log(`[automerge] ✓ Merged PR #${pr.number}: ${pr.title}`);
    merged.push({ number: pr.number, title: pr.title });
  }

  if (blocked.length) {
    console.log(`[automerge] ${blocked.length} PR(s) blocked by quality gate:`);
    blocked.forEach((b) => console.log(`  PR #${b.number} score=${b.score}/10`));
  }

  return { merged, blocked };
}

// Run directly if invoked as a standalone script
if (process.argv[1]?.endsWith("automerge.js")) {
  autoMergeSeoAgentPrs()
    .then(({ merged, blocked }) =>
      console.log(`[automerge] Done. ${merged.length} merged, ${blocked.length} blocked.`)
    )
    .catch((err) => { console.error("[automerge] Fatal:", err.message); process.exit(1); });
}
