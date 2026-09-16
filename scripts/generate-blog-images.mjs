import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "../public/blog");
const API_KEY = "AQ.Ab8RN6IDy8iLIs78ZhO4BGQJ4Qu5CsORECD65vvBa-CU7Nn32A";

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

// Cinematic style prefix applied to every prompt
const STYLE = "cinematic dark photography, professional video production studio, dramatic lighting, shallow depth of field, moody high-contrast, 16:9 aspect ratio, no text, no watermarks, photorealistic";

const posts = [
  {
    file: "myth-busting-cover.jpg",
    prompt: `Two business founders sitting face-to-face in a dimly lit modern office, speaking authentically on camera, professional interview setup with soft key light, trust and honesty atmosphere. ${STYLE}`,
  },
  {
    file: "10-questions-cover.jpg",
    prompt: `A confident presenter speaking directly to a camera on a professional set, ten glowing question marks subtly in the background, clean modern studio, corporate content creation. ${STYLE}`,
  },
  {
    file: "corporate-event-cover.jpg",
    prompt: `A large corporate conference hall with dramatic stage lighting, crowd of professionals, speaker on stage, video cameras capturing the event, high-energy business atmosphere. ${STYLE}`,
  },
  {
    file: "format-driven-eb-cover.jpg",
    prompt: `Young tech employees laughing authentically in a modern open-plan office, natural candid employer branding moment, warm golden hour light through floor-to-ceiling windows. ${STYLE}`,
  },
  {
    file: "kickstarter-blueprint-cover.jpg",
    prompt: `A sleek product on a pedestal with dramatic spotlight, crowdfunding campaign concept, bold product reveal, dark background with golden accent light rays. ${STYLE}`,
  },
  {
    file: "tech-product-video-cover.jpg",
    prompt: `Abstract data streams and glowing circuit paths merging into a clear 60-second timer on screen, AI and technology visualization, futuristic minimal aesthetic. ${STYLE}`,
  },
  {
    file: "social-content-cover.jpg",
    prompt: `A single camera rig pointing at a subject, surrounded by multiple glowing smartphone screens showing different social media content, content multiplication concept, studio environment. ${STYLE}`,
  },
  {
    file: "ai-storyboard-cover.jpg",
    prompt: `A filmmaker reviewing glowing AI-generated storyboard frames on a large digital display, Midjourney-style concept art on screen, creative production workflow. ${STYLE}`,
  },
  {
    file: "ai-production-cover.jpg",
    prompt: `A human director's hand on a camera lens with AI neural network visualizations overlaid, real meets artificial intelligence in video production, hybrid production concept. ${STYLE}`,
  },
  {
    file: "drone-realestate-cover.jpg",
    prompt: `Aerial drone view of a modern Israeli high-rise real estate development at golden hour, sweeping cinematic shot, luxury architecture, Mediterranean light. ${STYLE}`,
  },
  {
    file: "investor-pitch-cover.jpg",
    prompt: `A startup founder presenting to a panel of investors in a sleek boardroom, pitch deck on large screen, tension and focus, high stakes business moment. ${STYLE}`,
  },
  {
    file: "corporate-business-card-cover.jpg",
    prompt: `A professional business person holding a camera lens toward the viewer, corporate brand film concept, clean modern office background, confident and trustworthy. ${STYLE}`,
  },
  {
    file: "celebrity-event-cover.jpg",
    prompt: `Behind-the-scenes of a glamorous corporate event with a celebrity guest, camera crew capturing candid moments, stage lights and crowd energy, branded entertainment. ${STYLE}`,
  },
  {
    file: "event-recap-cover.jpg",
    prompt: `A video editor in a dark edit suite reviewing event footage on multiple screens, timeline visible, turning raw event footage into a polished brand film. ${STYLE}`,
  },
  {
    file: "vertica-flagship-cover.jpg",
    prompt: `A lifestyle product shoot with a dancer mid-motion, dynamic choreography, sleek product on set, health and lifestyle branding, energetic and bold creative direction. ${STYLE}`,
  },
  {
    file: "instructional-video-cover.jpg",
    prompt: `A person using a HealthTech medical device at home, clean instructional product video feel, warm domestic lighting, step-by-step guidance atmosphere, trustworthy and calming. ${STYLE}`,
  },
  {
    file: "hybrid-distribution-cover.jpg",
    prompt: `A single video production set with light beams splitting into four different digital screens showing LinkedIn, Instagram, YouTube and a website, distribution strategy concept. ${STYLE}`,
  },
  // SEO posts without coverImage — add new files
  {
    file: "kama-ole-seret-tadmit-cover.jpg",
    prompt: `A price tag made of film strips, budget and cost concept for video production, Israeli business context, coins and camera equipment on a desk. ${STYLE}`,
  },
  {
    file: "seret-giyus-hon-startup-cover.jpg",
    prompt: `A startup founder pitching to venture capitalists, investor pitch film atmosphere, whiteboard with growth charts, intense focus and ambition. ${STYLE}`,
  },
  {
    file: "employer-branding-video-cover.jpg",
    prompt: `A diverse team of tech professionals collaborating in a modern Israeli high-tech office, employer branding film shoot in progress, authentic workplace culture. ${STYLE}`,
  },
  {
    file: "hafakat-video-b2b-cover.jpg",
    prompt: `Two business executives shaking hands in front of a camera crew, B2B video production deal, professional corporate environment, strategic business content creation. ${STYLE}`,
  },
  {
    file: "madrich-michir-cover.jpg",
    prompt: `A filmmaker reviewing a detailed production budget breakdown on a laptop in a studio, professional video pricing guide concept, organized production planning. ${STYLE}`,
  },
  {
    file: "vlog-default-cover.jpg",
    prompt: `A professional video camera on a tripod in a modern studio, golden bokeh lights in background, video production blog concept, clean and cinematic. ${STYLE}`,
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
    throw new Error(`API error ${res.status}: ${err}`);
  }

  const data = await res.json();
  // Find the image part in the response
  const parts = data?.candidates?.[0]?.content?.parts ?? [];
  const imgPart = parts.find((p) => p.inlineData?.mimeType?.startsWith("image/"));
  if (!imgPart) throw new Error(`No image in response: ${JSON.stringify(data).slice(0, 300)}`);

  const buf = Buffer.from(imgPart.inlineData.data, "base64");
  fs.writeFileSync(path.join(OUT_DIR, outFile), buf);
  console.log(`✓ ${outFile} (${Math.round(buf.length / 1024)}KB)`);
}

(async () => {
  console.log(`Generating ${posts.length} images...\n`);
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
      // Small delay to avoid rate limiting
      await new Promise(r => setTimeout(r, 800));
    } catch (e) {
      console.error(`✗ ${p.file}: ${e.message}`);
      fail++;
    }
  }
  console.log(`\nDone: ${ok} OK, ${fail} failed`);
})();
