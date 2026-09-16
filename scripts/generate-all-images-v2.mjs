import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "../public/vlogimg");
const API_KEY = "AQ.Ab8RN6IDy8iLIs78ZhO4BGQJ4Qu5CsORECD65vvBa-CU7Nn32A";

// YouTube thumbnail style: bright, clear, specific, eye-catching
const THUMB = "professional photography, bright and clear, sharp focus, vibrant colors, high contrast, clean composition, 16:9 aspect ratio, no text, no watermarks, photorealistic, eye-catching thumbnail style";
const DARK = "cinematic dark photography, dramatic lighting, moody, professional video production, sharp focus, 16:9 aspect ratio, no text, no watermarks, photorealistic";

// Each post gets cover (thumbnail) + 2 section images
const posts = [
  {
    id: "myth-busting-format",
    cover: { file: "myth-busting-cover.jpg", prompt: `Two business founders in sharp suits facing each other across a conference table, direct eye contact, camera visible between them on a tripod, bright modern office background, authentic interview setup, trust and honesty. ${THUMB}` },
    sections: [
      { file: "myth-busting-s1.jpg", prompt: `Close-up of a person's face showing genuine surprise and relief, hearing an honest answer on camera, softbox lighting, emotional reaction shot, authentic moment. ${THUMB}` },
      { file: "myth-busting-s2.jpg", prompt: `Before and after split: left side empty consultation room, right side same room filled with converting customers, visual proof of video marketing ROI. ${THUMB}` },
    ]
  },
  {
    id: "10-questions-format",
    cover: { file: "10-questions-cover.jpg", prompt: `A confident business presenter standing in front of a large screen showing key questions, bright modern boardroom, professional suit, engaging body language, direct eye contact with camera. ${THUMB}` },
    sections: [
      { file: "10-questions-s1.jpg", prompt: `A checklist on a tablet screen being reviewed by a business executive, each item checked off in gold, professional planning moment, bright office. ${THUMB}` },
      { file: "10-questions-s2.jpg", prompt: `Video analytics dashboard on a laptop showing engagement metrics climbing upward, green graphs, ROI numbers, business success visualization. ${THUMB}` },
    ]
  },
  {
    id: "corporate-event-marketing-engine",
    cover: { file: "corporate-event-cover.jpg", prompt: `A massive corporate conference hall with dramatic stage lighting, speaker on stage to large crowd, professional video cameras in foreground capturing the event, high energy. ${THUMB}` },
    sections: [
      { file: "corporate-event-s1.jpg", prompt: `A professional videographer with cinema camera equipment moving through a corporate event crowd, capturing candid networking moments, bright event venue. ${THUMB}` },
      { file: "corporate-event-s2.jpg", prompt: `A branded event recap video playing on a large monitor showing highlights, executives watching, impressed reactions, marketing team reviewing content. ${THUMB}` },
    ]
  },
  {
    id: "format-driven-employer-branding",
    cover: { file: "format-driven-eb-cover.jpg", prompt: `A diverse, happy team of young tech professionals in a bright modern Israeli high-tech office, laughing and collaborating, employer branding shoot in progress, warm sunlight. ${THUMB}` },
    sections: [
      { file: "format-driven-eb-s1.jpg", prompt: `LinkedIn job posting on a screen showing hundreds of qualified applicants, recruiter smiling at results, employer branding success, bright office. ${THUMB}` },
      { file: "format-driven-eb-s2.jpg", prompt: `Behind the scenes of an employer branding video shoot, crew setting up lights while real employees are filmed authentically laughing in background. ${THUMB}` },
    ]
  },
  {
    id: "kickstarter-blueprint",
    cover: { file: "kickstarter-blueprint-cover.jpg", prompt: `A sleek innovative product on a bright white pedestal with dramatic spotlighting, crowdfunding campaign atmosphere, product reveal moment, $1.1M raised badge visible, excitement. ${THUMB}` },
    sections: [
      { file: "kickstarter-blueprint-s1.jpg", prompt: `A laptop screen showing a Kickstarter campaign with a funding progress bar at 847 percent funded, team celebrating around it, startup energy. ${THUMB}` },
      { file: "kickstarter-blueprint-s2.jpg", prompt: `A founder speaking directly to camera, authentic and passionate, product prototype in hand, convincing potential backers, natural light, genuine connection. ${THUMB}` },
    ]
  },
  {
    id: "tech-product-video-60sec",
    cover: { file: "tech-product-video-cover.jpg", prompt: `A glowing tech product interface on a dark screen with a 60-second timer countdown, data visualizations and AI elements surrounding it, futuristic but clear and sharp. ${THUMB}` },
    sections: [
      { file: "tech-product-video-s1.jpg", prompt: `A product designer and director reviewing storyboard frames for a tech explainer video, clean desk, precise layout, professional creative collaboration, bright studio. ${THUMB}` },
      { file: "tech-product-video-s2.jpg", prompt: `Side by side: complex technical diagram on left, simple clean animation frame on right, showing how video simplifies complex technology, bright contrast. ${THUMB}` },
    ]
  },
  {
    id: "social-content",
    cover: { file: "social-content-cover.jpg", prompt: `One filming day split into multiple content pieces shown on four glowing screens around a central camera, YouTube Instagram LinkedIn TikTok, content multiplication strategy, bright colors. ${THUMB}` },
    sections: [
      { file: "social-content-s1.jpg", prompt: `A content calendar on a screen showing 30 posts scheduled from a single video shoot, organized and colorful, content strategy visualization. ${THUMB}` },
      { file: "social-content-s2.jpg", prompt: `Video engagement analytics across multiple platforms on one dashboard, all graphs trending upward, social media success metrics, bright data visualization. ${THUMB}` },
    ]
  },
  {
    id: "ai-storyboard-workflow",
    cover: { file: "ai-storyboard-cover.jpg", prompt: `AI-generated storyboard frames displayed on a large monitor, Midjourney-style concept art, filmmaker comparing digital frames to notes, creative production workflow, bright creative studio. ${THUMB}` },
    sections: [
      { file: "ai-storyboard-s1.jpg", prompt: `Split screen showing a Midjourney AI prompt on left and the resulting cinematic storyboard frame on right, creative AI workflow in video production. ${THUMB}` },
      { file: "ai-storyboard-s2.jpg", prompt: `A director's hands arranging printed AI storyboard images on a light table, pre-production planning with AI tools, organized creative process. ${THUMB}` },
    ]
  },
  {
    id: "ai-production",
    cover: { file: "ai-production-cover.jpg", prompt: `A human director's hand on a cinema camera lens with glowing AI neural network visualization overlaid, real human creativity meets artificial intelligence, hybrid production concept. ${THUMB}` },
    sections: [
      { file: "ai-production-s1.jpg", prompt: `Video editing software on screen with AI color grading applied automatically, before and after comparison visible, AI-enhanced post-production workflow. ${THUMB}` },
      { file: "ai-production-s2.jpg", prompt: `A filmmaker using Runway AI on a tablet to generate video transitions, futuristic AI video tool interface glowing, next-generation production workflow. ${THUMB}` },
    ]
  },
  {
    id: "real-estate-drone",
    cover: { file: "drone-realestate-cover.jpg", prompt: `Stunning aerial drone view of a modern luxury Israeli residential tower at golden hour, Mediterranean sea in background, premium real estate photography, sweeping cinematic shot. ${THUMB}` },
    sections: [
      { file: "drone-realestate-s1.jpg", prompt: `A luxury penthouse apartment interior filmed in golden hour light, wide angle lens, high-end real estate video tour, warm inviting atmosphere, modern design. ${THUMB}` },
      { file: "drone-realestate-s2.jpg", prompt: `Real estate agent reviewing drone footage on iPad at a premium property site with the actual building visible behind them, professional property marketing. ${THUMB}` },
    ]
  },
  {
    id: "investor-pitch-tips",
    cover: { file: "investor-pitch-cover.jpg", prompt: `A startup founder presenting a compelling pitch to a panel of attentive investors in a sleek modern boardroom, large screen behind them, high stakes business moment, professional energy. ${THUMB}` },
    sections: [
      { file: "investor-pitch-s1.jpg", prompt: `An investor pitch video playing on a boardroom screen, investors leaning forward engaged, one writing notes, compelling fundraising content at work. ${THUMB}` },
      { file: "investor-pitch-s2.jpg", prompt: `A startup team celebrating after a successful funding round, laptop showing confirmation email, champagne, office energy, success after video pitch. ${THUMB}` },
    ]
  },
  {
    id: "corporate-business-card-film",
    cover: { file: "corporate-business-card-cover.jpg", prompt: `A confident business owner watching their brand film for the first time on a large screen, proud expression, office setting, the film visible on screen showing their team and product. ${THUMB}` },
    sections: [
      { file: "corporate-business-card-s1.jpg", prompt: `A professional brand film playing at a business meeting, potential client watching with interest, business development through video content, bright conference room. ${THUMB}` },
      { file: "corporate-business-card-s2.jpg", prompt: `Website analytics on a laptop showing spike in inquiries after brand film launch, before and after comparison, measurable video ROI for a business. ${THUMB}` },
    ]
  },
  {
    id: "celebrity-event-employer-branding",
    cover: { file: "celebrity-event-cover.jpg", prompt: `A celebrity guest arriving at a corporate branded event, camera crew capturing the moment, crowd excitement, stage lights, branded backdrop, entertainment meets business. ${THUMB}` },
    sections: [
      { file: "celebrity-event-s1.jpg", prompt: `Behind the scenes of a corporate event with a celebrity, production crew managing cameras and lights, candid authentic moment that becomes great content. ${THUMB}` },
      { file: "celebrity-event-s2.jpg", prompt: `Event highlights reel playing on screens inside the company office post-event, employees watching and engaged, internal content from the branded event. ${THUMB}` },
    ]
  },
  {
    id: "event-recap-brand-asset",
    cover: { file: "event-recap-cover.jpg", prompt: `A video editor in a bright edit suite assembling an event recap film, multiple screen monitors showing event footage, professional editing timeline, creative post-production. ${THUMB}` },
    sections: [
      { file: "event-recap-s1.jpg", prompt: `An event recap video thumbnail showing the most exciting highlight moment from a corporate conference, split second capture, dynamic and engaging. ${THUMB}` },
      { file: "event-recap-s2.jpg", prompt: `A marketing manager sharing the event recap video link on LinkedIn from laptop, engagement notifications appearing, content going viral internally. ${THUMB}` },
    ]
  },
  {
    id: "vertica-flagship-case-study",
    cover: { file: "vertica-flagship-cover.jpg", prompt: `A premium lifestyle health product being held by an athlete in dynamic motion, product photography meets lifestyle video, vibrant bright colors, energy drink or supplement brand. ${THUMB}` },
    sections: [
      { file: "vertica-flagship-s1.jpg", prompt: `A product lifestyle video shoot in progress, athlete performing, camera crew capturing dynamic movement, bright studio setup, premium brand content creation. ${THUMB}` },
      { file: "vertica-flagship-s2.jpg", prompt: `Social media analytics showing a product video going viral, thousands of shares, positive comments, influencer engagement, brand awareness metrics climbing. ${THUMB}` },
    ]
  },
  {
    id: "instructional-video-customer-journey",
    cover: { file: "instructional-video-cover.jpg", prompt: `A person successfully using a medical health device at home, clear step-by-step visual, clean bright domestic setting, patient empowerment through instructional video, warm trustworthy. ${THUMB}` },
    sections: [
      { file: "instructional-video-s1.jpg", prompt: `A healthcare professional reviewing a patient instructional video on an iPad, nodding approval, clear and effective medical communication tool. ${THUMB}` },
      { file: "instructional-video-s2.jpg", prompt: `Customer support call volume dropping shown on a graph, with an instructional video thumbnail next to it, visual proof that video reduces support tickets. ${THUMB}` },
    ]
  },
  {
    id: "hybrid-distribution-employer-branding",
    cover: { file: "hybrid-distribution-cover.jpg", prompt: `One camera setup in center, four glowing screens around it showing LinkedIn YouTube Instagram company website, video distribution strategy visualization, bright colors, clear concept. ${THUMB}` },
    sections: [
      { file: "hybrid-distribution-s1.jpg", prompt: `A marketing team reviewing a content distribution calendar, multiple platforms mapped out on screen, organized cross-platform video strategy session. ${THUMB}` },
      { file: "hybrid-distribution-s2.jpg", prompt: `Multi-platform video analytics dashboard showing combined reach across all channels, total views adding up from different platforms, video marketing success. ${THUMB}` },
    ]
  },
  {
    id: "kama-ole-seret-tadmit",
    cover: { file: "kama-ole-seret-tadmit-cover.jpg", prompt: `A transparent price breakdown on a bright screen showing video production costs itemized clearly, coins stacked next to a camera, honest pricing guide visual, clean infographic style. ${THUMB}` },
    sections: [
      { file: "kama-ole-seret-tadmit-s1.jpg", prompt: `A client and video producer shaking hands over a signed production agreement, budget document visible, transparent professional relationship, bright office. ${THUMB}` },
      { file: "kama-ole-seret-tadmit-s2.jpg", prompt: `ROI calculator on screen showing video production investment vs revenue generated, clear positive return, investment pays off visualization. ${THUMB}` },
    ]
  },
  {
    id: "seret-giyus-hon-startup",
    cover: { file: "seret-giyus-hon-startup-cover.jpg", prompt: `A startup founder passionately presenting their pitch video on a large screen to venture capitalists, modern conference room, energy and excitement, fundraising success atmosphere. ${THUMB}` },
    sections: [
      { file: "seret-giyus-hon-startup-s1.jpg", prompt: `An investor watching a startup pitch video on tablet, leaning forward interested, taking notes, genuine engagement with fundraising content. ${THUMB}` },
      { file: "seret-giyus-hon-startup-s2.jpg", prompt: `Term sheet being signed after a successful fundraising round, startup team celebrating, video pitch on laptop in background that helped close the deal. ${THUMB}` },
    ]
  },
  {
    id: "employer-branding-video-israel",
    cover: { file: "employer-branding-video-cover.jpg", prompt: `A vibrant diverse Israeli high-tech team in a modern Tel Aviv office, bright colors, team collaboration, authentic smiles, Google-style workspace, employer branding excellence. ${THUMB}` },
    sections: [
      { file: "employer-branding-video-s1.jpg", prompt: `LinkedIn talent application pipeline showing surge in qualified candidates after employer branding video launch, recruitment success metrics, HR manager smiling. ${THUMB}` },
      { file: "employer-branding-video-s2.jpg", prompt: `Behind the scenes of filming employees authentically at work, crew capturing genuine moments, not staged, real workplace culture on camera. ${THUMB}` },
    ]
  },
  {
    id: "hafakat-video-b2b",
    cover: { file: "hafakat-video-b2b-cover.jpg", prompt: `Two business executives watching a B2B product video together on a large screen, taking notes, professional meeting room, serious business decision making process, bright environment. ${THUMB}` },
    sections: [
      { file: "hafakat-video-b2b-s1.jpg", prompt: `A B2B sales pipeline dashboard showing deals progressing faster, with a company video thumbnail at top, video accelerating the sales cycle visualization. ${THUMB}` },
      { file: "hafakat-video-b2b-s2.jpg", prompt: `A corporate procurement team evaluating vendor videos on screen, comparing options, professional B2B purchase decision process, bright boardroom. ${THUMB}` },
    ]
  },
  {
    id: "kama-ole-seret-tadmit-2", // for madrich-michir posts
    cover: { file: "madrich-michir-cover.jpg", prompt: `A professional video production guide open on a laptop, checklist of 7 key questions, business owner choosing the right studio, decision-making process visualization, bright and clear. ${THUMB}` },
    sections: [
      { file: "madrich-michir-s1.jpg", prompt: `A business owner comparing two video production company portfolios on dual screens, making an informed decision, professional research process. ${THUMB}` },
      { file: "madrich-michir-s2.jpg", prompt: `A portfolio showreel playing in a meeting room, production company presenting their best work, client impressed, choosing the right video partner. ${THUMB}` },
    ]
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
    throw new Error(`${res.status}: ${err.slice(0, 150)}`);
  }
  const data = await res.json();
  const parts = data?.candidates?.[0]?.content?.parts ?? [];
  const imgPart = parts.find((p) => p.inlineData?.mimeType?.startsWith("image/"));
  if (!imgPart) throw new Error("No image in response");
  const buf = Buffer.from(imgPart.inlineData.data, "base64");
  fs.writeFileSync(path.join(OUT_DIR, outFile), buf);
  console.log(`  ✓ ${outFile} (${Math.round(buf.length / 1024)}KB)`);
}

(async () => {
  let ok = 0, fail = 0, skip = 0;
  for (const post of posts) {
    console.log(`\n[${post.id}]`);
    const all = [post.cover, ...post.sections];
    for (const img of all) {
      const dest = path.join(OUT_DIR, img.file);
      if (fs.existsSync(dest)) {
        console.log(`  ⏭ ${img.file}`);
        skip++; continue;
      }
      try {
        await generateImage(img.prompt, img.file);
        ok++;
        await new Promise(r => setTimeout(r, 800));
      } catch (e) {
        console.error(`  ✗ ${img.file}: ${e.message}`);
        fail++;
      }
    }
  }
  console.log(`\nDone: ${ok} new, ${skip} skipped, ${fail} failed`);
})();
