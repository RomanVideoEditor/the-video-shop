/**
 * Generate authentic BTS/editorial images for all blog posts.
 * Uses filenames matching what videos.ts already references.
 * Style: documentary photography, real sets, no faces, authentic messy environments.
 */

import fs from "fs";
import path from "path";
import https from "https";

const API_KEY = "AQ.Ab8RN6IDy8iLIs78ZhO4BGQJ4Qu5CsORECD65vvBa-CU7Nn32A";
const OUT_DIR = path.join(process.cwd(), "public", "vlogimg");

const STYLE = "documentary photography, Sony A7 camera, natural available light, slightly desaturated, candid, real working environment, no faces visible OR backs turned to camera, grain texture, authentic messy real setting, professional video production world, NOT stock photo NOT AI art NOT perfect lighting";

// fileBase: matches what's in videos.ts (no extension needed, we add -cover/s1/s2.jpg)
const posts = [
  {
    fileBase: "myth-busting-cover", s1: "myth-busting-s1", s2: "myth-busting-s2",
    cover: "video interview setup in a small conference room, two chairs facing camera, soft ring light on stand, cables on floor, camera operator adjusting lens from behind",
    d1: "close-up of video editing monitor showing interview footage timeline, hands on keyboard, dark editing room with glowing screens",
    d2: "camera tripod and teleprompter in a bright office, crew member checking frame composition from behind",
  },
  {
    fileBase: "10-questions-cover", s1: "10-questions-s1", s2: "10-questions-s2",
    cover: "videographer from behind setting up a camera on tripod in a modern bright office, empty interview chair visible ahead, production equipment around",
    d1: "editing desk with monitor showing talking head interview clips on timeline, sticky notes, coffee cup, dim room light",
    d2: "behind the scenes of a talking head shoot, camera and softbox lights visible from side, interviewer holding printed question sheet, subject blurred in background",
  },
  {
    fileBase: "video-to-brand-cover", s1: "video-to-brand-s1", s2: "video-to-brand-s2",
    cover: "motion designer from behind at dual monitor setup running After Effects, dark room, glowing screens with animation timeline",
    d1: "close-up of monitor showing drone HUD animation in dark editing suite, hand on Wacom tablet",
    d2: "production studio mood board wall with printed frames pinned up, color swatches, hand reaching to rearrange images",
  },
  {
    fileBase: "content-package-cover", s1: "content-package-s1", s2: "content-package-s2",
    cover: "overhead flat lay of video production gear on a table: hard drives, SD cards, camera batteries, clapperboard, notebook with handwritten production notes",
    d1: "camera operator from behind filming in a large warehouse, subject in distance, industrial space, natural high windows light",
    d2: "post production setup from side angle, editor at desk with hard drives and monitors, cables and cups around, focused work",
  },
  {
    fileBase: "akerstein-100-cover", s1: "akerstein-100-s1", s2: "akerstein-100-s2",
    cover: "drone operator from behind launching drone at an outdoor industrial or construction site, helmet on, open sky, concrete environment",
    d1: "camera on slider rail at an industrial facility, operator adjusting focus from behind, concrete textures and dust in environment",
    d2: "color grading session on monitor showing outdoor footage, editor's hands on grading panel, dark room glow",
  },
  {
    fileBase: "corporate-event-cover", s1: "corporate-event-s1", s2: "corporate-event-s2",
    cover: "videographer from behind filming a corporate conference hall, crowd of professionals seated, presentation screen in distance, available ambient light",
    d1: "event videographer on side aisle filming a presenter on stage, handheld camera visible, blurry crowd in background",
    d2: "backstage of a business event, cables running along floor, monitor showing live feed, production crew member watching screen from behind",
  },
  {
    fileBase: "format-driven-eb-cover", s1: "format-driven-eb-s1", s2: "format-driven-eb-s2",
    cover: "camera operator following an employee in a busy open office, candid documentary style, from behind, natural window light, coworkers blurred",
    d1: "editing suite showing employer branding office footage on timeline, editor's hands on keyboard, dark office environment",
    d2: "interview lighting setup in an office kitchen or breakroom, camera and lights being positioned, empty interview chair, authentic environment",
  },
  {
    fileBase: "kickstarter-blueprint-cover", s1: "kickstarter-blueprint-s1", s2: null,
    cover: "product arranged on white surface, hands adjusting position, camera on tripod shooting product from above, studio diffusion umbrella visible from side",
    d1: "videographer filming product demonstration on a table, natural window light, camera angle showing setup environment",
    d2: null,
  },
  {
    fileBase: "tech-product-video-cover", s1: "tech-product-video-s1", s2: "tech-product-video-s2",
    cover: "tech product on a dark reflective surface, camera rig visible from above, hands adjusting cables, dark studio with blue accent light glow",
    d1: "monitor in editing suite showing fast-cut tech product video, hands scrubbing timeline, dark environment glow",
    d2: "overhead shot of editing desk with keyboard, hard drives, product packaging, handwritten shot list on paper",
  },
  {
    fileBase: "social-content-cover", s1: "social-content-s1", s2: "social-content-s2",
    cover: "video editor from behind with multiple monitors showing social media layouts and vertical video formats, dark room, headphones around neck",
    d1: "phone and laptop on desk showing same video content in different aspect ratios, hands cropping in editing software",
    d2: "monitor showing social media analytics dashboard, content grid visible, casual home office or café setting",
  },
  {
    fileBase: "ai-storyboard-cover", s1: "ai-storyboard-s1", s2: "ai-storyboard-s2",
    cover: "hand drawing rough storyboard frames on paper with pencil, reference images nearby, coffee cup on messy desk, natural window light",
    d1: "laptop screen showing AI image generation results for storyboarding, hand scrolling through options, desk with notes",
    d2: "storyboard sheets spread on a table, some hand-drawn, some printed, person's arm pointing at a frame from side",
  },
  {
    fileBase: "ai-production-cover", s1: "ai-production-s1", s2: "ai-production-s2",
    cover: "monitor showing AI video generation interface with multiple video clips visible, editing suite, dark room, editor's silhouette from behind",
    d1: "laptop on desk showing AI-generated video frames comparison, messy desk with notebooks around, candid moment",
    d2: "screen reflection showing a person from behind working on AI video production tools, dark room, multiple monitors glow",
  },
  {
    fileBase: "drone-realestate-cover", s1: "drone-realestate-s1", s2: "drone-realestate-s2",
    cover: "drone operator from behind launching drone in front of a modern apartment building exterior, open blue sky, morning golden light",
    d1: "camera operator on a gimbal filming a modern empty apartment interior, from behind, natural window light, unfurnished clean room",
    d2: "drone operator from behind on rooftop with cityscape in background, drone visible taking off, clear sky",
  },
  {
    fileBase: "investor-pitch-cover", s1: "investor-pitch-s1", s2: "investor-pitch-s2",
    cover: "behind the scenes of a pitch video shoot, presenter at podium with teleprompter, camera and crew visible from side, bright conference room",
    d1: "camera operator adjusting focus on a presenter from behind, boardroom setting, afternoon light through windows",
    d2: "editing monitor showing pitch video with financial charts overlay, hands on keyboard, professional office environment",
  },
  {
    fileBase: "corporate-business-card-cover", s1: "corporate-business-card-s1", s2: "corporate-business-card-s2",
    cover: "corporate video shoot in an office, talent blurred in background, camera and diffusion lights in foreground, crew member from behind checking monitor",
    d1: "video editor desk with company brand film on monitor, corporate visuals visible, dark office environment late night",
    d2: "behind the scenes lighting setup for corporate interview, light stands and large softboxes, empty chair marked for talent",
  },
  {
    fileBase: "celebrity-event-cover", s1: "celebrity-event-s1", s2: "celebrity-event-s2",
    cover: "event videographer from behind filming a large company party, colorful event lights, blurred crowd of employees, camera visible in foreground",
    d1: "backstage area of corporate event, camera monitor showing live floor feed, crew member watching screen from behind",
    d2: "editor from behind working on event highlight video, fast-cut footage visible on monitor, dark editing suite environment",
  },
  {
    fileBase: "event-recap-cover", s1: "event-recap-s1", s2: "event-recap-s2",
    cover: "videographer from behind filming a medical tech conference, audience of professionals, presenter at front podium, natural conference lighting",
    d1: "editing suite showing multi-camera conference footage on timeline, editor's hands, dark room, monitor glow, cables",
    d2: "handheld camera operator at a business networking event, people mingling in background blurred, candid documentary moment",
  },
  {
    fileBase: "vertica-flagship-cover", s1: "vertica-flagship-s1", s2: "vertica-flagship-s2",
    cover: "video shoot for a healthcare product, camera and diffused lighting setup from side, product on table, crew member from behind adjusting angle",
    d1: "color grading session of a vibrant lifestyle product commercial, vivid colors on monitor, editor's silhouette in dark room",
    d2: "dance rehearsal being filmed, camera operator at edge of frame, bright studio with mirrors, choreographer from behind",
  },
  {
    fileBase: "instructional-video-cover", s1: "instructional-video-s1", s2: "instructional-video-s2",
    cover: "overhead camera rig filming a product on a table, top-down camera setup clearly visible from side, hands adjusting product position",
    d1: "monitor showing instructional video with animated arrows and step graphics, editor reviewing playback, messy desk",
    d2: "camera operator filming close-up of a device being used, macro lens setup, natural window light, product in focus",
  },
  {
    fileBase: "hybrid-distribution-cover", s1: "hybrid-distribution-s1", s2: "hybrid-distribution-s2",
    cover: "video editor from behind with multiple screens showing social media vertical and horizontal video layouts, dark room, headphones",
    d1: "phone and laptop on a desk showing same video cropped for different platforms, hands adjusting crop in editing app",
    d2: "monitor showing content distribution dashboard with multiple platform thumbnails, casual office or home studio setting",
  },
  {
    fileBase: "kama-ole-seret-tadmit-cover", s1: "kama-ole-seret-tadmit-s1", s2: null,
    cover: "production equipment being packed in cases after a shoot, cases open, cables being coiled, warehouse space",
    d1: "budget spreadsheet open on a laptop screen, hand with pen writing production cost notes, desk with coffee",
    d2: null,
  },
  {
    fileBase: "seret-giyus-hon-startup-cover", s1: "seret-giyus-hon-startup-s1", s2: null,
    cover: "startup pitch video shoot in a co-working space, projector screen in background, camera setup visible, crew from behind",
    d1: "monitor showing startup pitch video with financial slides, editor reviewing in startup office environment",
    d2: null,
  },
  {
    fileBase: "employer-branding-video-cover", s1: "employer-branding-video-s1", s2: null,
    cover: "camera operator filming employees at work in an open plan office, from behind, natural daylight flooding in, candid documentary style",
    d1: "editor reviewing employer branding office footage, screen showing B-roll clips of office life, dark editing suite",
    d2: null,
  },
  {
    fileBase: "hafakat-video-b2b-cover", s1: "hafakat-video-b2b-s1", s2: null,
    cover: "b2b video shoot in a corporate boardroom, camera on tripod beside empty meeting table, city view from window, warm afternoon light",
    d1: "monitor showing b2b explainer animation in progress, editor's desk with reference printouts and markers",
    d2: null,
  },
  {
    fileBase: "madrich-michir-cover", s1: null, s2: null,
    cover: "producer reviewing a production quote on a laptop with calculator and notepad nearby, coffee on a wooden desk, natural window light",
    d1: null,
    d2: null,
  },
];

async function generateImage(prompt, outPath) {
  const body = JSON.stringify({
    contents: [{ parts: [{ text: `${prompt}, ${STYLE}` }] }],
    generationConfig: { responseModalities: ["IMAGE"] },
  });

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${API_KEY}`;

  return new Promise((resolve) => {
    const req = https.request(url, { method: "POST", headers: { "Content-Type": "application/json" } }, (res) => {
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => {
        try {
          const data = JSON.parse(Buffer.concat(chunks).toString());
          const part = data?.candidates?.[0]?.content?.parts?.find((p) => p.inlineData);
          if (!part) {
            const errMsg = data?.error?.message || JSON.stringify(data).slice(0, 200);
            console.error(`  ERROR: ${errMsg}`);
            resolve(false);
            return;
          }
          fs.writeFileSync(outPath, Buffer.from(part.inlineData.data, "base64"));
          console.log(`  ✓ ${path.basename(outPath)}`);
          resolve(true);
        } catch (e) {
          console.error(`  PARSE ERROR: ${e.message}`);
          resolve(false);
        }
      });
    });
    req.on("error", (e) => { console.error(`  REQ ERROR: ${e.message}`); resolve(false); });
    req.write(body);
    req.end();
  });
}

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  for (const post of posts) {
    console.log(`\n[${post.fileBase}]`);
    const imgs = [
      { file: post.fileBase + ".jpg", prompt: post.cover },
      post.s1 ? { file: post.s1 + ".jpg", prompt: post.d1 } : null,
      post.s2 ? { file: post.s2 + ".jpg", prompt: post.d2 } : null,
    ].filter(Boolean);

    for (const { file, prompt } of imgs) {
      if (!prompt) continue;
      const outPath = path.join(OUT_DIR, file);
      const ok = await generateImage(prompt, outPath);
      if (ok) await sleep(2500);
      else await sleep(6000);
    }
  }

  console.log("\nDone.");
}

main();
