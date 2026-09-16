import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "../public/vlogimg");
const API_KEY = "AQ.Ab8RN6IDy8iLIs78ZhO4BGQJ4Qu5CsORECD65vvBa-CU7Nn32A";

const STYLE = "cinematic dark photography, dramatic lighting, moody high-contrast, 16:9 aspect ratio, no text, no watermarks, photorealistic";

// Section images — different angle from the hero cover image
const posts = [
  {
    file: "myth-busting-s1.jpg",
    prompt: `Close-up of a camera monitor showing a testimonial interview in progress, director reviewing authentic candid footage, edit suite glow, truth and transparency in filmmaking. ${STYLE}`,
  },
  {
    file: "10-questions-s1.jpg",
    prompt: `A business executive reviewing video footage on a laptop in a dark conference room, checking ROI metrics and video analytics on screen, strategic content review. ${STYLE}`,
  },
  {
    file: "corporate-event-s1.jpg",
    prompt: `A camera operator with a professional cinema rig moving through a crowded corporate event, capturing candid moments, dynamic event videography behind the scenes. ${STYLE}`,
  },
  {
    file: "format-driven-eb-s1.jpg",
    prompt: `A recruitment manager reviewing employer branding video content on a large monitor, LinkedIn profile visible, strategic hiring through video content. ${STYLE}`,
  },
  {
    file: "kickstarter-blueprint-s1.jpg",
    prompt: `A crowdfunding campaign launch moment, team celebrating around a laptop showing live pledges rising, product on table, startup energy and momentum. ${STYLE}`,
  },
  {
    file: "tech-product-video-s1.jpg",
    prompt: `A product designer and video director reviewing a 60-second tech explainer video on a monitor, wireframes and storyboard notes on desk, precision and clarity. ${STYLE}`,
  },
  {
    file: "social-content-s1.jpg",
    prompt: `A content strategist mapping out a cross-platform video distribution plan on a whiteboard, YouTube, Instagram, LinkedIn icons, content repurposing strategy session. ${STYLE}`,
  },
  {
    file: "ai-storyboard-s1.jpg",
    prompt: `AI-generated storyboard frames displayed on multiple screens in a dark creative studio, Midjourney-style visuals, director comparing frames, pre-production AI workflow. ${STYLE}`,
  },
  {
    file: "ai-production-s1.jpg",
    prompt: `A video editor using AI tools to color grade and enhance footage on a professional editing workstation, neural network visualization on secondary screen, AI-enhanced post-production. ${STYLE}`,
  },
  {
    file: "drone-realestate-s1.jpg",
    prompt: `A real estate developer reviewing drone footage of a luxury Israeli property on a tablet at the construction site, Mediterranean sky, premium real estate marketing. ${STYLE}`,
  },
  {
    file: "investor-pitch-s1.jpg",
    prompt: `A startup pitch video playing on a boardroom screen to attentive investors, laptop with metrics on table, successful fundraising moment, venture capital atmosphere. ${STYLE}`,
  },
  {
    file: "corporate-business-card-s1.jpg",
    prompt: `A business owner watching their brand film for the first time, emotional reaction, pride and satisfaction, laptop screen reflecting on their face in a dark room. ${STYLE}`,
  },
  {
    file: "celebrity-event-s1.jpg",
    prompt: `Behind-the-scenes camera crew capturing a celebrity appearance at a branded corporate event, directional lighting, glamour meets business, content creation moment. ${STYLE}`,
  },
  {
    file: "event-recap-s1.jpg",
    prompt: `A video editor assembling an event recap film on a multi-screen setup, timeline visible with event footage clips, color grading tools, crafting the narrative of a successful event. ${STYLE}`,
  },
  {
    file: "vertica-flagship-s1.jpg",
    prompt: `A product marketing team reviewing a lifestyle brand video on a large studio monitor, sleek product packaging visible, creative direction feedback session, premium brand content. ${STYLE}`,
  },
  {
    file: "instructional-video-s1.jpg",
    prompt: `A medical device being demonstrated in clean instructional video style, close-up of hands using the device, clinical yet approachable lighting, HealthTech product tutorial. ${STYLE}`,
  },
  {
    file: "hybrid-distribution-s1.jpg",
    prompt: `A marketing analytics dashboard showing video performance across multiple platforms, engagement graphs, view counts climbing, ROI of video content distribution strategy. ${STYLE}`,
  },
  {
    file: "kama-ole-seret-tadmit-s1.jpg",
    prompt: `A detailed video production budget spreadsheet on a laptop screen in a production office, equipment rental costs, crew rates, transparent pricing breakdown. ${STYLE}`,
  },
  {
    file: "seret-giyus-hon-startup-s1.jpg",
    prompt: `A startup fundraising video playing to a room of angel investors, emotional storytelling on screen, money and trust in the room, investment decision moment. ${STYLE}`,
  },
  {
    file: "employer-branding-video-s1.jpg",
    prompt: `An Israeli high-tech office with diverse team members being filmed authentically for employer branding, natural candid laughter, recruitment video production in progress. ${STYLE}`,
  },
  {
    file: "hafakat-video-b2b-s1.jpg",
    prompt: `A B2B sales meeting where a video presentation on screen is convincing a corporate buyer, professional boardroom, decision makers watching a product demo film. ${STYLE}`,
  },
  {
    file: "madrich-michir-s1.jpg",
    prompt: `A client and video producer reviewing a production proposal together, pricing document on tablet, transparent and professional partnership, trust-building moment. ${STYLE}`,
  },
  {
    file: "vlog-default-s1.jpg",
    prompt: `A filmmaker reviewing footage on a monitor in a dark studio, creative flow state, professional video production workflow, artistic and focused atmosphere. ${STYLE}`,
  },
];

async function generateImage(prompt, outFile) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${API_KEY}`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { responseModalities: ["TEXT", "IMAGE"] },
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`API error ${res.status}: ${err.slice(0, 200)}`);
  }

  const data = await res.json();
  const parts = data?.candidates?.[0]?.content?.parts ?? [];
  const imgPart = parts.find((p) => p.inlineData?.mimeType?.startsWith("image/"));
  if (!imgPart) throw new Error(`No image in response`);

  const buf = Buffer.from(imgPart.inlineData.data, "base64");
  fs.writeFileSync(path.join(OUT_DIR, outFile), buf);
  console.log(`✓ ${outFile} (${Math.round(buf.length / 1024)}KB)`);
}

(async () => {
  console.log(`Generating ${posts.length} section images...\n`);
  let ok = 0, fail = 0;
  for (const p of posts) {
    const dest = path.join(OUT_DIR, p.file);
    if (fs.existsSync(dest)) {
      console.log(`⏭ ${p.file} (already exists)`);
      ok++;
      continue;
    }
    try {
      await generateImage(p.prompt, p.file);
      ok++;
      await new Promise(r => setTimeout(r, 1000));
    } catch (e) {
      console.error(`✗ ${p.file}: ${e.message}`);
      fail++;
    }
  }
  console.log(`\nDone: ${ok} OK, ${fail} failed`);
})();
