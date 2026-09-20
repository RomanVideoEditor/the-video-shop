// ─── FILE CHANGES & GITHUB PR ────────────────────────────────────────────────
import { Octokit } from "octokit";
import { readFileSync } from "fs";
import { CONFIG } from "./config.js";

const octokit = new Octokit({ auth: CONFIG.githubToken });
const [owner, repo] = CONFIG.githubRepo.split("/");

// ── Helpers ───────────────────────────────────────────────────────────────────

function getFileContent(path) {
  return readFileSync(`${process.cwd()}/${path}`, "utf8");
}

async function getGithubFile(filePath) {
  const { data } = await octokit.rest.repos.getContent({ owner, repo, path: filePath });
  const content = Buffer.from(data.content, "base64").toString("utf8");
  return { content, sha: data.sha };
}

// ── Safe changes (direct commit to main) ─────────────────────────────────────

/**
 * Append new faqItems to a service page file.
 * The service page exports `faqItems` as a const array — we inject new items.
 */
export async function commitFaqItems(topicId, newFaqItems) {
  // Map topic id → file path for service pages
  const serviceFiles = {
    corporate: "src/app/[locale]/services/corporate/page.tsx",
    hightech:  "src/app/[locale]/services/hightech/page.tsx",
    animation: "src/app/[locale]/services/animation/page.tsx",
    ai:        "src/app/[locale]/services/ai/page.tsx",
    realestate:"src/app/[locale]/services/realestate/page.tsx",
    training:  "src/app/[locale]/services/training/page.tsx",
    pricing:   "src/app/[locale]/pricing/page.tsx",
  };

  const filePath = serviceFiles[topicId];
  if (!filePath) throw new Error(`Unknown topicId: ${topicId}`);

  const { content, sha } = await getGithubFile(filePath);

  const heItems = newFaqItems
    .map((item) => `          { q: ${JSON.stringify(item.qHe)}, a: ${JSON.stringify(item.aHe)} },`)
    .join("\n");
  const enItems = newFaqItems
    .map((item) => `          { q: ${JSON.stringify(item.qEn)}, a: ${JSON.stringify(item.aEn)} },`)
    .join("\n");

  // Anchor: find the faqItems prop to avoid matching BreadcrumbSchema crumbs
  const faqStart = content.indexOf("faqItems={isHe ? [");
  if (faqStart === -1) throw new Error(`Could not find faqItems prop in ${filePath}`);

  // Insert Hebrew items: find ] : [ AFTER faqItems start
  const heMarkerPos = content.indexOf("] : [", faqStart);
  if (heMarkerPos === -1) throw new Error(`Could not find Hebrew/English divider in ${filePath}`);
  let updated = content.slice(0, heMarkerPos) + `\n${heItems}\n` + content.slice(heMarkerPos);

  // Insert English items: find ]} AFTER ] : [ (now shifted in updated string)
  const faqStartUpdated = updated.indexOf("faqItems={isHe ? [");
  const dividerPos = updated.indexOf("] : [", faqStartUpdated);
  const enMarkerPos = updated.indexOf("]}", dividerPos + 5);
  if (enMarkerPos === -1) throw new Error(`Could not find English FAQ closing in ${filePath}`);
  updated = updated.slice(0, enMarkerPos) + `\n${enItems}\n` + updated.slice(enMarkerPos);

  await octokit.rest.repos.createOrUpdateFileContents({
    owner,
    repo,
    path: filePath,
    message: `seo-agent: add FAQ items for ${topicId} [skip ci]`,
    content: Buffer.from(updated).toString("base64"),
    sha,
  });

  return { filePath, itemsAdded: newFaqItems.length };
}

// ── Blog post PR ──────────────────────────────────────────────────────────────

/**
 * Create a new blog post in src/lib/videos.ts and open a PR.
 * The post object must have: id, titleHe, titleEn, excerptHe, excerptEn, tags, bodyHe, bodyEn
 */
// Map topic id → a relevant existing cover image from /public/vlogimg/
const TOPIC_COVER_IMAGES = {
  corporate:  "/vlogimg/corporate-business-card-cover.jpg",
  hightech:   "/vlogimg/investor-pitch-cover.jpg",
  animation:  "/vlogimg/ai-storyboard-cover.jpg",
  ai:         "/vlogimg/ai-production-cover.jpg",
  realestate: "/vlogimg/drone-realestate-cover.jpg",
  training:   "/vlogimg/instructional-video-cover.jpg",
  pricing:    "/vlogimg/madrich-michir-cover.jpg",
};

export async function openBlogPostPr(post) {
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  const coverImage = post.topicId ? (TOPIC_COVER_IMAGES[post.topicId] || null) : null;
  const branch = `seo-agent/blog-${post.id}-${Date.now()}`;

  // 1. Get current main SHA
  const { data: refData } = await octokit.rest.git.getRef({
    owner, repo, ref: "heads/main",
  });
  const baseSha = refData.object.sha;

  // 2. Create branch
  await octokit.rest.git.createRef({
    owner, repo,
    ref: `refs/heads/${branch}`,
    sha: baseSha,
  });

  // 3. Read videos.ts and prepend new post
  const videosPath = "src/lib/videos.ts";
  const { content: videosContent, sha: videosSha } = await getGithubFile(videosPath);

  const newEntry = `  {
    id: ${JSON.stringify(post.id)},
    date: "${today}",
    titleHe: ${JSON.stringify(post.titleHe)},
    titleEn: ${JSON.stringify(post.titleEn)},
    excerptHe: ${JSON.stringify(post.excerptHe)},
    excerptEn: ${JSON.stringify(post.excerptEn)},
    tags: ${JSON.stringify(post.tags)},${coverImage ? `\n    coverImage: ${JSON.stringify(coverImage)},` : ""}
    bodyHe: ${JSON.stringify(post.bodyHe)},
    bodyEn: ${JSON.stringify(post.bodyEn)},
  },`;

  // Insert after "export const vlogPosts: VlogPost[] = [" line
  const insertPoint = /export const vlogPosts[^=]*=\s*\[/;
  if (!insertPoint.test(videosContent)) {
    throw new Error("Could not find vlogPosts array in src/lib/videos.ts");
  }

  const updatedVideos = videosContent.replace(
    insertPoint,
    (match) => `${match}\n${newEntry}`
  );

  // 4. Commit to branch
  await octokit.rest.repos.createOrUpdateFileContents({
    owner, repo,
    path: videosPath,
    message: `seo-agent: add blog post "${post.titleEn}"`,
    content: Buffer.from(updatedVideos).toString("base64"),
    sha: videosSha,
    branch,
  });

  // 5. Open PR
  const { data: pr } = await octokit.rest.pulls.create({
    owner, repo,
    title: `[SEO Agent] Blog: ${post.titleHe}`,
    head: branch,
    base: "main",
    body: `## SEO Agent — New Blog Post\n\n**Hebrew:** ${post.titleHe}\n**English:** ${post.titleEn}\n\n**Tags:** ${post.tags.join(", ")}\n\n> Auto-generated by the SEO agent on ${today}. Review the content before merging.`,
  });

  return { prNumber: pr.number, prUrl: pr.html_url, branch };
}
