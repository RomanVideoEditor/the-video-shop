// ─── AUTO-MERGE SEO AGENT PRs ─────────────────────────────────────────────────
// Merges open "[SEO Agent]" PRs that are >24h old and have all checks passing.
import { Octokit } from "octokit";
import { CONFIG } from "./config.js";

const octokit = new Octokit({ auth: CONFIG.githubToken });
const [owner, repo] = CONFIG.githubRepo.split("/");
const MIN_AGE_HOURS = 24;

export async function autoMergeSeoAgentPrs() {
  const { data: prs } = await octokit.rest.pulls.list({
    owner, repo, state: "open", per_page: 30,
  });

  const seoPrs = prs.filter((pr) => pr.title.startsWith("[SEO Agent]"));
  console.log(`[automerge] ${seoPrs.length} open SEO Agent PR(s) found`);

  const merged = [];

  for (const pr of seoPrs) {
    const ageHours = (Date.now() - new Date(pr.created_at).getTime()) / 3600000;

    if (ageHours < MIN_AGE_HOURS) {
      console.log(`[automerge] PR #${pr.number} is only ${ageHours.toFixed(1)}h old — waiting`);
      continue;
    }

    // Verify all CI checks have passed
    const { data: checks } = await octokit.rest.checks.listForRef({
      owner, repo, ref: pr.head.sha, per_page: 100,
    });

    const failed = checks.check_runs.filter(
      (c) => c.conclusion === "failure" || c.conclusion === "timed_out"
    );
    if (failed.length > 0) {
      console.log(`[automerge] PR #${pr.number} has ${failed.length} failed check(s) — skipping`);
      failed.forEach((c) => console.log(`  ✗ ${c.name}`));
      continue;
    }

    const pending = checks.check_runs.filter(
      (c) => c.status === "in_progress" || c.status === "queued"
    );
    if (pending.length > 0) {
      console.log(`[automerge] PR #${pr.number} has ${pending.length} pending check(s) — waiting`);
      continue;
    }

    // Merge via squash
    await octokit.rest.pulls.merge({
      owner, repo,
      pull_number: pr.number,
      merge_method: "squash",
      commit_title: pr.title,
      commit_message: `Auto-merged by SEO agent after ${Math.round(ageHours)}h review window`,
    });

    console.log(`[automerge] ✓ Merged PR #${pr.number}: ${pr.title}`);
    merged.push({ number: pr.number, title: pr.title });
  }

  return merged;
}

// Run directly if invoked as a standalone script
if (process.argv[1]?.endsWith("automerge.js")) {
  autoMergeSeoAgentPrs()
    .then((merged) => console.log(`[automerge] Done. ${merged.length} PR(s) merged.`))
    .catch((err) => { console.error("[automerge] Fatal:", err.message); process.exit(1); });
}
