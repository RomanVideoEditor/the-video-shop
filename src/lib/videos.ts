export type VideoCategory =
  | "hightech"
  | "product"
  | "ai"
  | "realestate"
  | "commercial"
  | "creative"
  | "recruitment";

/** Convert "1:30" → "PT1M30S" for schema.org VideoObject duration */
export function toIsoDuration(mmss: string): string {
  const [m, s] = mmss.split(":").map(Number);
  return `PT${m}M${s}S`;
}

/** YouTube thumbnail URL for a given video ID */
export function ytThumb(youtubeId: string) {
  return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
}

/** Vimeo thumbnail URL */
export function vimeoThumb(vimeoId: string) {
  return `https://vumbnail.com/${vimeoId}.jpg`;
}

export interface PortfolioVideo {
  id: string;
  youtubeId?: string;
  vimeoId?: string;
  titleHe: string;
  titleEn: string;
  challengeHe: string;
  challengeEn: string;
  solutionHe: string;
  solutionEn: string;
  category: VideoCategory;
  client?: string;
  duration?: string; // "mm:ss"
  date?: string;     // "YYYY-MM-DD"
  vertical?: boolean; // 9:16 aspect ratio (Shorts/Reels)
}

export const portfolioVideos: PortfolioVideo[] = [
  {
    id: "lyfe-social-content",
    youtubeId: "d2xNLprySKQ",
    titleHe: "LYFE — בנק תוכן סושיאל מיום צילום אחד | קבוצת אשטרום",
    titleEn: "LYFE — Social Content Bank from One Filming Day | Ashtrom Group",
    challengeHe: "לייצר נכסים דיגיטליים רבים לרשתות החברתיות עבור מתחם LYFE — בלי להכפיל ימי צילום ותקציבים.",
    challengeEn: "Generate multiple social media digital assets for the LYFE complex — without multiplying filming days and budgets.",
    solutionHe: "Max ROI Production: יום צילום מרוכז אחד עם אסטרטגיית תוכן מקיפה. צילום מודולרי (רחפן, גוף ראשון, אווירה) סביב עוגן ויזואלי מרכזי — הכדורים המטאליים בלובי. בפוסט: עריכה קצבית, Motion Overlays ו-Beat-matching לעשרות גרסאות.",
    solutionEn: "Max ROI Production: one concentrated filming day with a comprehensive content strategy. Modular shooting (drone, POV, atmosphere) around a central visual anchor — the metallic orbs in the lobby. In post: rhythmic editing, motion overlays, and beat-matching to produce dozens of versions.",
    category: "commercial",
    client: "Ashtrom Group / LYFE",
    duration: "0:30",
    date: "2024-01-01",
    vertical: true,
  },
  {
    id: "ashtrom-sorry-for-asking",
    youtubeId: "cbqFpHi5gHE",
    titleHe: "סליחה על השאלה — Format-Driven Employer Branding | קבוצת אשטרום",
    titleEn: "Sorry for Asking — Format-Driven Employer Branding | Ashtrom Group",
    challengeHe: "לייצר תוכן מיתוג מעסיק שמחזיק צופה 15 דקות תמימות — ומרגיש כמו בחירה, לא כמו חובה.",
    challengeEn: "Create employer branding content that holds a viewer for 15 full minutes — and feels like a choice, not an obligation.",
    solutionHe: "פורמט 'סליחה על השאלה' מוסב לעולם הארגוני: תחקיר מעמיק, ליהוק עובדים מכל אתרי אשטרום ברחבי הארץ, בימוי non-actors תחת תנאי שטח אמיתיים (אתרי בנייה, מפעלים, משרדים). עריכה סיפורית שמאזנת הומור, גאווה מקצועית ורגעים אנושיים — ויוצרת כלי גיוס ויום כיף פנים-ארגוני בהפקה אחת.",
    solutionEn: "The 'Sorry for Asking' format adapted for the corporate world: deep research, casting employees across all Ashtrom sites nationwide, directing non-actors in real field conditions (construction sites, factories, offices). Narrative editing that balances humor, professional pride, and human moments — creating both a recruitment tool and an internal team-building experience in one production.",
    category: "recruitment",
    client: "Ashtrom Group",
    duration: "15:00",
    date: "2023-09-01",
  },
  {
    id: "ashtrom-employer-branding",
    youtubeId: "3wO3R6Xr8bU",
    titleHe: "להיות אשטרומיסט — מיתוג מעסיק | קבוצת אשטרום",
    titleEn: "Being an Ashtromist — Employer Branding | Ashtrom Group",
    challengeHe: "לקחת קונצרן בנייה ותשתית עצום עם אלפי עובדים בעשרות מוקדים ולזקק אותו לזהות ארגונית אחת שכולם — מצוות השטח ועד ההנהלה — מזדהים איתה.",
    challengeEn: "Take a massive construction and infrastructure conglomerate with thousands of employees across dozens of sites and distill it into one organizational identity that everyone — from field crews to management — identifies with.",
    solutionHe: "שבוע הפקה אחד, עשרות לוקיישנים ברחבי הארץ. שילוב צילומי רחפן, שטח ומשרדים עם Sound Design קצבי שמתכתב עם פעימות התעשייה. בימוי non-actors שהוציא גאווה ואותנטיות אמיתית. תוצאה: המונח 'אשטרומיסט' הפך לזהות — לא לסיסמה.",
    solutionEn: "One production week, dozens of locations across the country. Drone, field, and office footage combined with rhythmic sound design that echoes the industry's pulse. Non-actor directing that brought out real pride and authenticity. Result: 'Ashtromist' became an identity — not a slogan.",
    category: "recruitment",
    client: "Ashtrom Group",
    duration: "2:10",
    date: "2023-06-01",
  },
  {
    id: "iron-arrow-airobotics",
    youtubeId: "iMfsWqluFpo",
    titleHe: "IRON ARROW — מערכת יירוט אוטונומית | Airobotics / Ondas Group",
    titleEn: "IRON ARROW — Autonomous Mass Interception System | Airobotics / Ondas Group",
    challengeHe: "להמחיש בפני ממשלות, צבאות ומשקיעים מערכת יירוט אוטונומית שלא ניתן לצלם — בצורה שתשדר עליונות טכנולוגית ואמינות מבצעית.",
    challengeEn: "Visualize an autonomous interception system for governments, militaries, and investors — in a way that conveys technological superiority and operational credibility.",
    solutionHe: "סרט קונספט AI פוטוריאליסטי מלא: עקביות מכנית קפדנית של סיבי פחמן ורכיבי מל\"ט, סימולציה דינמית של VTOL ונחיל יירוט, HUD overlays טכניים, ועיצוב סאונד תעשייתי. כל פריים — Midjourney, כל תנועה — Kling.",
    solutionEn: "Full photorealistic AI concept film: meticulous hard-surface consistency of carbon fiber and UAV components, dynamic VTOL and swarm simulation, technical HUD overlays, and industrial sound design. Every frame — Midjourney. Every motion — Kling.",
    category: "ai",
    client: "Airobotics / Ondas Group",
    duration: "2:30",
    date: "2025-05-01",
  },
  {
    id: "safe-ground-ai",
    youtubeId: "8c9gf7cM8hk",
    titleHe: "Safe Ground Program — AI Concept Film",
    titleEn: "Safe Ground Program — AI Concept Film",
    challengeHe: "להמחיש בפני ממשלות ומשקיעים בינלאומיים סיכון תפעולי נסתר בפרויקט שיקום מורכב — בלי לצלם כלום, בלי שחקנים, בלי לוקיישן.",
    challengeEn: "Visualize a hidden operational risk in a complex reconstruction project for international governments and investors — without filming anything, no actors, no location.",
    solutionHe: "סרט קונספט פוטוריאליסטי מלא ב-AI: מ-Midjourney לסטוריבורד ועד Kling ו-Runway לגנרציית התנועה. HUD overlays ב-After Effects, קריינות בינלאומית, ועיצוב סאונד קולנועי מלא. תוצאה: סרט פיצ' שנראה כמו הפקה בינלאומית של מיליוני דולרים.",
    solutionEn: "Full photorealistic AI concept film: from Midjourney storyboard to Kling and Runway for motion generation. HUD overlays in After Effects, international VO, and full cinematic sound design. Result: a pitch film that looks like a multi-million dollar international production.",
    category: "ai",
    client: "Safe Ground Program",
    duration: "2:45",
    date: "2025-03-01",
  },
  {
    id: "dride-4k-kickstarter",
    youtubeId: "JncBv6FbkRc",
    titleHe: "Dride 4K — סרט קיקסטארטר שגייס 1.1 מיליון דולר",
    titleEn: "Dride 4K — Kickstarter Film That Raised $1.1 Million",
    challengeHe: "להפוך מצלמת רכב בשלב פיתוח מתקדם לקמפיין גיוס המונים שיגייס מעל מיליון דולר מ-3,748 תומכים — בלי מוצר מוגמר על המדף.",
    challengeEn: "Turn an advanced-stage dashcam into a crowdfunding campaign that raises over $1M from 3,748 backers — without a finished product on the shelf.",
    solutionHe: "Kickstarter Blueprint קלאסי: Hook קולנועי, הצגת כאב (חום קיצוני, פגיעות בחנייה), הצגת גיבור המוצר, Feature Walkthrough ו-Pitch ישיר ליזמים. שילוב Live Action + הדמיות 3D של פנים המכשיר נטרל את חשש האמינות. הצגת 'כבר רכשנו אלפי CPUs' סגרה את ההתנגדות האחרונה.",
    solutionEn: "Classic Kickstarter Blueprint: cinematic hook, pain presentation (extreme heat, parking hits), hero product reveal, feature walkthrough, and direct founder pitch. Live Action + 3D renders of device internals neutralized credibility fear. 'We already purchased thousands of CPUs' closed the final objection.",
    category: "product",
    client: "Dride",
    duration: "3:15",
    date: "2023-04-01",
  },
  {
    id: "bright-data-ai-explainer",
    youtubeId: "HKkqkHBSt7Q",
    titleHe: "Bright Data — כשה-AI שלך רעב לדאטה | Motion Graphics & Tech Storytelling",
    titleEn: "Bright Data — When Your AI Is Hungry for Data | Motion Graphics & Tech Storytelling",
    challengeHe: "להסביר תשתית דאטה מורכבת לקהל של CTOs ומנהלי מוצר AI — בפחות מ-60 שניות, בלי להאבד בטכני ובלי לאבד את האנרגיה.",
    challengeEn: "Explain a complex data infrastructure to an audience of CTOs and AI product managers — in under 60 seconds, without getting lost in technical details or losing energy.",
    solutionHe: "Tech Storytelling שמתחיל מהכאב: מודלי AI שנשארים מאחור בגלל חוסר דאטה. Motion Graphics תלת-ממד עם Particle Systems שמדמים זרימת מידע ורשתות. UI Simulation של שגיאות קוד ממשיות, גרף השוואתי מול מתחרים, ו-Beat-matching מדויק לפסקול אלקטרוני. 60 שניות שמסיימות עם CTA ברור.",
    solutionEn: "Tech Storytelling that opens with the pain: AI models falling behind due to data starvation. 3D Motion Graphics with Particle Systems simulating data flow and networks. UI Simulation with real code errors, a competitive benchmark graph, and precise beat-matching to an electronic soundtrack. 60 seconds that end with a clear CTA.",
    category: "hightech",
    client: "Bright Data",
    duration: "1:00",
    date: "2024-06-01",
  },
  {
    id: "iron-bullet-airobotics",
    vimeoId: "TODO_iron_bullet",
    titleHe: "Iron Bullet — Airobotics / Ondas Group",
    titleEn: "Iron Bullet — Airobotics / Ondas Group",
    challengeHe: "לגייס הון ממשקיעים בינלאומיים ורגולטורים ממשלתיים עבור מערכת רחפני יירוט אוטונומית — עם מידע רגיש ומגבלות חשיפה קשות.",
    challengeEn: "Raise capital from international investors and government regulators for an autonomous interception drone system — with sensitive information and strict exposure limitations.",
    solutionHe: "פיתחנו סרט פיצ' עם ויזואליזציות פוטוריאליסטיות ב-Midjourney ו-Kling, תסריט טכני מורכב וסטוריבורד קולנועי שמציג את המערכת בפעולה מבלי לחשוף מידע סווג.",
    solutionEn: "We developed a pitch film with photorealistic visualizations in Midjourney and Kling, a complex technical script, and a cinematic storyboard showcasing the system in action without revealing classified information.",
    category: "ai",
    client: "Airobotics / Ondas Group",
    duration: "2:00",
    date: "2023-09-01",
  },
  {
    id: "palo-alto-recruitment",
    vimeoId: "TODO_palo_alto",
    titleHe: "סרט הגיוס הכי גנרי אי פעם | Palo Alto Networks",
    titleEn: "The Most Generic Recruitment Video Ever | Palo Alto Networks",
    challengeHe: "לגייס מפתחים מוכשרים בשוק תחרותי מאוד — בלי להישמע כמו כולם.",
    challengeEn: "Recruit talented developers in a highly competitive market — without sounding like everyone else.",
    solutionHe: "הפכנו את הקונבנציה על ראשה: סרט שמודע לעצמו ומלגלג על סרטי הגיוס הקלישאתיים, ובדיוק בגלל זה בלט ועבד.",
    solutionEn: "We flipped the convention: a self-aware film that mocks clichéd recruitment videos — and that's exactly why it stood out and worked.",
    category: "recruitment",
    client: "Palo Alto Networks",
    duration: "1:23",
  },
  {
    id: "ashtrom-port",
    vimeoId: "TODO_ashtrom",
    titleHe: "Ashtrom Port – Where Work Feels Good",
    titleEn: "Ashtrom Port – Where Work Feels Good",
    challengeHe: "השקת מרחב קו-וורקינג חדש של אשטרום — לייצר אווירה שמוכרת חוויה, לא רק שטח.",
    challengeEn: "Launching Ashtrom's new coworking space — creating an atmosphere that sells an experience, not just space.",
    solutionHe: "סרט תדמית עם זרימה דינמית וצילום סטייליסטי שהעניק למקום אופי ייחודי.",
    solutionEn: "A brand video with dynamic flow and stylish cinematography that gave the space a unique character.",
    category: "realestate",
    client: "Ashtrom Properties",
    duration: "0:46",
  },
  {
    id: "humavox-robbery",
    vimeoId: "TODO_humavox_robbery",
    titleHe: "Humavox Wireless Power: The Robbery",
    titleEn: "Humavox Wireless Power: The Robbery",
    challengeHe: "להסביר טכנולוגיית טעינה אלחוטית מורכבת בצורה שתישאר בזיכרון.",
    challengeEn: "Explain complex wireless charging technology in a way that stays in memory.",
    solutionHe: "קומדיה קולנועית: שודדים במוזיאון שהציוד שלהם גווע מסוללה — אבל ה-Humavox POD פועל בשלמות.",
    solutionEn: "Cinematic comedy: museum robbers whose equipment dies from dead batteries — but the Humavox POD works perfectly.",
    category: "creative",
    client: "Humavox",
    duration: "1:20",
  },
  {
    id: "humavox-pod",
    vimeoId: "TODO_humavox_pod",
    titleHe: "Humavox POD – Wireless Power, Seamlessly Delivered",
    titleEn: "Humavox POD – Wireless Power, Seamlessly Delivered",
    challengeHe: "סרט מוצר B2B לטכנולוגיה חדשנית שעדיין לא ידועה לשוק.",
    challengeEn: "A B2B product video for innovative technology not yet known to the market.",
    solutionHe: "שילוב של פוטאג' שטוק, צילום live action ומושן גרפיקס מותאם אישית לסרט שמסביר ומרגש.",
    solutionEn: "A combination of stock footage, live action filming, and custom motion graphics for a film that explains and excites.",
    category: "product",
    client: "Humavox",
    duration: "1:08",
  },
  {
    id: "cropx",
    vimeoId: "TODO_cropx",
    titleHe: "CROPX – The Internet of Soil",
    titleEn: "CROPX – The Internet of Soil",
    challengeHe: "להסביר טכנולוגיית חקלאות חכמה למשקיעים ולקהל בינלאומי.",
    challengeEn: "Explain smart agriculture technology to international investors and audiences.",
    solutionHe: "סרט investor pitch קולנועי שהציג את הטכנולוגיה בשדות האמיתיים ובמעבדה.",
    solutionEn: "A cinematic investor pitch film showcasing the technology in real fields and in the lab.",
    category: "hightech",
    client: "CROPX",
    duration: "1:41",
  },
  {
    id: "im-givatayim",
    vimeoId: "TODO_givatayim",
    titleHe: "Urban Pulse – IM גבעתיים",
    titleEn: "Urban Pulse – IM Givatayim",
    challengeHe: "השקת פרויקט מגורים יוקרתי בגבעתיים — לייצר סרט שמצדיק את מחיר הפרמיום.",
    challengeEn: "Launch of a luxury residential project in Givatayim — create a film that justifies the premium price.",
    solutionHe: "סרט קולנועי עם hyperlapse ועדשות tilt-shift, עם קריינות של כובי מידן.",
    solutionEn: "Cinematic film with hyperlapse and tilt-shift lenses, narrated by Kobi Meidan.",
    category: "realestate",
    client: "יח דמרי",
    duration: "1:15",
  },
  {
    id: "parazero",
    vimeoId: "TODO_parazero",
    titleHe: "ParaZero – מערכת פארשוט לרחפנים",
    titleEn: "ParaZero – Drone Parachute Recovery System",
    challengeHe: "להציג פתרון בטיחות לרחפנים לקהל מקצועי בינלאומי.",
    challengeEn: "Present a drone safety solution to an international professional audience.",
    solutionHe: "סרט מוצר B2B עם צילומי רחפן אמיתיים ועריכה דינמית שמציגה את המוצר בפעולה.",
    solutionEn: "A B2B product film with real drone footage and dynamic editing showcasing the product in action.",
    category: "product",
    client: "ParaZero",
    duration: "1:23",
  },
  {
    id: "dride",
    vimeoId: "TODO_dride",
    titleHe: "DRIDE – המצלמת הרכב המחוברת הקטנה ביותר",
    titleEn: "DRIDE – Smallest Connected DashCam",
    challengeHe: "להציג מוצר טכנולוגי לשוק הבינלאומי בצורה שמבדלת אותו מהמתחרים.",
    challengeEn: "Present a tech product to the international market in a way that differentiates it from competitors.",
    solutionHe: "קמפיין דיגיטלי סאטירי שהשתמש בוויס-אובר סרקסטי להשוואה עם מצלמות זולות.",
    solutionEn: "A satirical digital campaign using sarcastic voiceover to compare with cheap cameras.",
    category: "commercial",
    client: "DRIDE",
    duration: "1:20",
  },
  {
    id: "travelperk",
    vimeoId: "TODO_travelperk",
    titleHe: "All in One – TravelPerk",
    titleEn: "All in One – TravelPerk Commercial",
    challengeHe: "להסביר פלטפורמת נסיעות עסקיות מורכבת בפחות מדקה.",
    challengeEn: "Explain a complex business travel platform in under a minute.",
    solutionHe: "סרט מסחרי מהיר, חכם וממוקד שהצליח לתקשר את הערך הבסיסי של המוצר בצורה בלתי נשכחת.",
    solutionEn: "A fast, smart, and focused commercial that successfully communicated the product's core value in an unforgettable way.",
    category: "commercial",
    client: "TravelPerk",
    duration: "0:42",
  },
  {
    id: "userway",
    vimeoId: "TODO_userway",
    titleHe: "UserWay // Neil – נגישות שמשנה חיים",
    titleEn: "UserWay // Neil – Accessibility That Changes Lives",
    challengeHe: "להציג כלי נגישות דיגיטלית דרך סיפור אנושי אמיתי ומרגש.",
    challengeEn: "Present a digital accessibility tool through a real and moving human story.",
    solutionHe: "סרט דוקומנטרי קצר על Neil Elefant, עיוור בעין אחת, שמציג את השפעת הנגישות על חייו.",
    solutionEn: "A short documentary film about Neil Elefant, blind in one eye, showing the impact of accessibility on his life.",
    category: "creative",
    client: "UserWay",
    duration: "1:47",
  },
];

// Blog posts
export interface VlogPost {
  id: string;
  coverImage?: string; // path under /public, e.g. "/blog/ai-cover.jpg"
  titleHe: string;
  titleEn: string;
  excerptHe: string;
  excerptEn: string;
  bodyHe: string;
  bodyEn: string;
  date: string;
  readingTime?: number; // minutes
  tags: string[];
  relatedServiceHref?: string;
  relatedServiceLabelHe?: string;
  relatedServiceLabelEn?: string;
  relatedYoutubeId?: string;
  relatedVimeoId?: string;
}

// Body syntax:
//   ## Heading      → <h2>
//   ### Heading     → <h3>
//   **bold**        → inline <strong>
//   [IMAGE]         → mid-article image placeholder
//   blank line      → paragraph break

export const vlogPosts: VlogPost[] = [
  {
    id: "format-driven-employer-branding",
    coverImage: "/blog/format-driven-eb-cover.svg",
    titleHe: "כשהפורמט עושה את העבודה: איך 'סליחה על השאלה' הפך לכלי Employer Branding מנצח",
    titleEn: "When the Format Does the Work: How 'Sorry for Asking' Became a Winning Employer Branding Tool",
    excerptHe: "לקחת פורמט טלוויזיוני מוכר ולהסב אותו לצרכים עסקיים — זו לא רק הברקה קריאטיבית. זו אסטרטגיית תוכן שמספקת שתי ציפורים במכה אחת: כלי גיוס אותנטי ויום כיף פנים-ארגוני.",
    excerptEn: "Taking a well-known TV format and adapting it for corporate use — that's not just creative brilliance. It's a content strategy that delivers two birds with one stone: an authentic recruitment tool and an internal team-building event.",
    readingTime: 6,
    bodyHe: `## הפורמט כגשר בין אנשים לחברה

יש טעות נפוצה שחברות גדולות עושות עם Employer Branding: הן מייצרות סרטים מלוטשים על "הערכים שלנו" ו"היתרונות שלנו" — ולא מביאות אף עובד אמיתי לדבר בגובה העיניים.

התוצאה? תוכן שנראה טוב בסרגל המידות הטכני, אבל לא מצליח לגרום למועמד פוטנציאלי לחשוב "אני רוצה לעבוד שם."

בפרויקט שיצרנו עבור קבוצת אשטרום, ניגשנו לאתגר אחרת לחלוטין. במקום לבנות תסריט על החברה — לקחנו פורמט שאנשים כבר אוהבים ויודעים, והסבנו אותו.

[IMAGE]

## מדוע פורמט מוכר עובד ב-Employer Branding

הפורמט של "סליחה על השאלה" — שאלות אישיות ישירות, תשובות ספונטניות, אווירה של כיף ואותנטיות — עושה משהו שסרטוני תדמית לא מצליחים לעשות: **הוא מוריד את המחסום.**

הצופה מגיע עם ציפיות פורמט: הוא יודע שזה הולך להיות מצחיק, קצת נוקב, ואמיתי. הוא לא מוכן לסרטון שיווקי — הוא מוכן לאנשים. ואז האנשים של אשטרום בדיוק מסיפרים לו מה זה בעצם לעבוד שם.

## האתגר האמיתי: 15 דקות מהצילומים

בניגוד לסרטון קצר, פרויקט בן 15 דקות דורש מגוון אתגרים:

**תחקיר וליהוק:** הלב של הפורמט הוא הצוות הנכון. עבדנו על זיהוי עובדים מכל מחלקה ואתר — כאלה שיביאו גיוון, אנרגיה, ויאמינו בתהליך. השאלות עצמן גם עברו עיצוב מדוקדק: האיזון בין שאלות שמצחיקות לבין כאלה שמביאות עומק אמיתי.

**בימוי non-actors בתנאי שטח:** ראיין עובדים אמיתיים בתנאי אתר בנייה — רעש, אבק, לוגיסטיקה — זה אתגר שונה לגמרי מסטודיו. היכולת לגרום לעובד להרגיש בנוח מספיק כדי לצחוק, להתרגש ולהיות כן מול מצלמה — זה עיקר העבודה.

**עריכה סיפורית לאורך:** 15 דקות לא מתחזקות את עצמן. העריכה קבעה את הקצב, בחרה את הרגעים שמחזיקים ומרגשים, שילבה B-roll מחיי החברה, ויצרה קשת שלמה — מהומור ועד גאווה מקצועית אמיתית.

## ערך כפול: פנים וחוץ ארגוני

מה שמייחד את הפרויקט הזה הוא שהוא מספק שתי תוצאות עסקיות שונות מהפקה אחת:

**פנים ארגוני:** יום הצילומים עצמו הפך לאירוע מגבש. העובדים שהשתתפו הרגישו שרואים אותם ומעריכים אותם. הסרט שעלה אחר כך עשה גאווה לכל מי שהופיע בו — וגם לאלה שלא.

**חוץ ארגוני:** מועמד שצופה ב-15 דקות של עובדים אמיתיים שמספרים על שגרת החיים של קבוצת אשטרום — הוא לא רק מבין את ה-DNA הארגוני, הוא כבר נמצא בתוכו.

## מה זה אומר עבורכם

אם יש לכם חברה עם סיפורים ייחודיים שעדיין לא סופרו — Format-Driven Content הוא הדרך להוציא אותם. הפורמט הנכון מוריד את ההתנגדות של הצופה, בונה אמינות מהיום הראשון ומייצר תוכן שאנשים בוחרים לצפות בו.

**הסרט הטוב ביותר הוא זה שהצופה שוכח שהוא מיתוג.**`,
    bodyEn: `## The Format as a Bridge Between People and Company

There's a common mistake large companies make with Employer Branding: they produce polished films about "our values" and "our benefits" — without bringing a single real employee to speak eye-to-eye.

The result? Content that looks good on technical metrics, but fails to make a potential candidate think "I want to work there."

In the project we created for Ashtrom Group, we approached the challenge completely differently. Instead of building a script about the company — we took a format people already love and know, and adapted it.

[IMAGE]

## Why a Familiar Format Works in Employer Branding

The "Sorry for Asking" format — direct personal questions, spontaneous answers, an atmosphere of fun and authenticity — does something brand films can't: **it lowers the barrier.**

The viewer arrives with format expectations: they know it's going to be funny, a little pointed, and real. They're not prepared for a marketing video — they're prepared for people. And then Ashtrom's people tell them exactly what it's really like to work there.

## The Real Challenge: 15 Minutes Held Together

Unlike a short film, a 15-minute project demands a different range of challenges:

**Research and casting:** The heart of the format is the right team. We worked on identifying employees from every department and site — people who would bring diversity, energy, and believe in the process. The questions themselves were also carefully crafted: the balance between questions that make people laugh and ones that bring real depth.

**Directing non-actors in field conditions:** Interviewing real employees on a construction site — noise, dust, logistics — is a completely different challenge from a studio. The ability to make an employee comfortable enough to laugh, get emotional, and be honest on camera — that's the core of the work.

**Long-form narrative editing:** 15 minutes don't sustain themselves. Editing determined the pacing, chose the moments that hold and move, integrated B-roll from company life, and created a complete arc — from humor to genuine professional pride.

## Double Value: Internal and External

What distinguishes this project is that it delivers two different business outcomes from one production:

**Internal:** The filming day itself became a bonding event. The employees who participated felt seen and appreciated. The film that came out afterward created pride for everyone who appeared in it — and even those who didn't.

**External:** A candidate who watches 15 minutes of real employees describing the daily life of Ashtrom Group — they're not just understanding the organizational DNA, they're already inside it.

## What This Means for You

If you have a company with unique stories that haven't been told yet — Format-Driven Content is the way to bring them out. The right format lowers viewer resistance, builds credibility from day one, and creates content people choose to watch.

**The best film is the one the viewer forgets is branding.**`,
    date: "2025-05-15",
    tags: ["Employer Branding", "Format Content", "Long-Form", "Behind the Scenes"],
    relatedServiceHref: "/services/corporate",
    relatedServiceLabelHe: "מיתוג מעסיק וסרטי גיוס",
    relatedServiceLabelEn: "Employer Branding & Recruitment",
    relatedYoutubeId: "cbqFpHi5gHE",
  },
  {
    id: "kickstarter-blueprint",
    coverImage: "/blog/kickstarter-blueprint-cover.svg",
    titleHe: "ה-Blueprint של סרט קיקסטארטר: איך הופכים ספקנים לתומכים משלמים",
    titleEn: "The Kickstarter Blueprint: How to Turn Skeptics into Paying Backers",
    excerptHe: "סרטון קיקסטארטר מוצלח פועל לפי חוקים שונים לחלוטין מסרטון תדמית. כשהמוצר עוד לא קיים — האמון הוא הכל. ניתוח הקמפיין של Dride 4K שגייס 1.1 מיליון דולר.",
    excerptEn: "A successful Kickstarter video plays by completely different rules than a brand film. When the product doesn't exist yet — trust is everything. Analysis of the Dride 4K campaign that raised $1.1 million.",
    readingTime: 6,
    bodyHe: `## קמפיין גיוס המונים ≠ סרטון תדמית

רוב חברות ההפקה מגיעות לקמפיין קיקסטארטר עם הכלים של סרטוני מותג: אסתטיקה יפה, מוזיקה מרגשת, מסרים ברמה גבוהה. התוצאה? סרטון מרשים שלא מוכר כלום.

בגיוס המונים, הצופה הוא לא לקוח שרוכש מוצר מוכח. הוא משקיע בחזון של מוצר שעוד לא קיים בשוק. הפחד מכשלון, מאיחור במשלוח, מבעיות ייצור — כל אלה עובדים נגדכם. הסרטון צריך לנטרל התנגדויות, לא רק לייצר התרגשות.

בפרויקט Dride 4K — מצלמת רכב 4K שפוצחה לקמפיין קיקסטארטר — בנינו כל שנייה של הסרטון סביב מבנה אחד מוכח.

[IMAGE]

## ה-Kickstarter Blueprint: חמישה שלבים

### שלב 1 — ה-Hook הקולנועי (0–10 שניות)

החמש עד עשר שניות הראשונות הן הכל. הגולש בקיקסטארטר רואה עשרות פרויקטים. ה-Hook לא צריך להסביר — הוא צריך לעצור.

Dride 4K פתח עם המוצר בפעולה, רכב בתנועה, גימור מטאלי שמשדר "זה לא מוצר מוסכייה — זה טכנולוגיה רצינית." לפני שהצופה שמע מילה אחת, הוא כבר הבין שזה שונה.

### שלב 2 — הצגת הכאב (The Problem)

אחרי ה-Hook, לא מציגים את המוצר — מציגים את הבעיה. **חום קיצוני** שמשבית מצלמות רגילות. **פגיעה ברכב חונה** ללא עדים ובלי ראיות. **קושי בשיתוף** חומרים עם ביטוח ומשטרה.

הצופה צריך לחשוב "זה בדיוק מה שקרה לי" לפני שהוא שומע על הפתרון. ברגע שיש זיהוי עם הבעיה — הפתרון כבר חצי מכור.

### שלב 3 — גיבור המוצר (The Hero Reveal)

עכשיו, ורק עכשיו, מציגים את המוצר — עם תיאור נועז: **"The most rigid dashcam on the planet."** זה לא תיאור מפרט, זה הצהרת עמדה. זה מה שגורם לתומך לרצות לספר לחברים שלו.

### שלב 4 — Feature Walkthrough שמתרגם ל-Benefits

כל פיצ'ר טכני מתרגם מיד לתועלת רגשית:

**"שלדת אלומיניום לפיזור חום"** → "לא תפסיק לעבוד כשהרכב עומד בשמש של ישראל."
**"חיישן מכ"ם Radar-based"** → "תדע שמישהו פגע ברכב שלך שניות לפני שזה קרה."
**"4G/5G עם ענן"** → "החומרים שמורים לפני שהגנב הספיק לברוח."

המפרט הטכני הוא הראיה. התועלת הרגשית היא הסיבה לקנות.

### שלב 5 — נטרול ההתנגדות הגדולה

בקיקסטארטר, ההתנגדות הסמויה תמיד אותה: "זה ישלח בזמן? זה לא יעלם לי עם הכסף?" התשובה לא יכולה להיות "אנחנו אמינים." היא צריכה להיות **עדות קונקרטית**.

Dride 4K הציג בסרטון: "כבר רכשנו אלפי מעבדים מראש." זה משפט אחד שנטרל פחד של כל Backer שחשב פעמיים. לא הבטחות — עובדות.

## התוצאה: 3,748 תומכים, $1,191,083

הפרויקט גייס מעל 1.1 מיליון דולר. לא בגלל שהמוצר היה הכי טוב בשוק — אלא כי הסרטון בנה אמון, תרגם טכנולוגיה לרגש, ונתן לצופה סיבה לפעול **עכשיו**.

**סרטון קמפיין הוא המנוע העסקי המרכזי של הגיוס. הוא לא "חלק מהקמפיין" — הוא הקמפיין.**`,
    bodyEn: `## Crowdfunding Video ≠ Brand Film

Most production companies come to a Kickstarter campaign with brand film tools: beautiful aesthetics, moving music, high-level messaging. The result? An impressive video that sells nothing.

In crowdfunding, the viewer isn't a customer buying a proven product. They're investing in the vision of a product that doesn't exist in the market yet. Fear of failure, late delivery, production issues — all working against you. The video needs to neutralize objections, not just generate excitement.

In the Dride 4K project — a 4K dashcam cracked for a Kickstarter campaign — we built every second of the video around one proven structure.

[IMAGE]

## The Kickstarter Blueprint: Five Stages

### Stage 1 — The Cinematic Hook (0–10 seconds)

The first five to ten seconds are everything. A Kickstarter browser sees dozens of projects. The hook doesn't need to explain — it needs to stop.

Dride 4K opened with the product in action, a car in motion, metallic finish that communicates "this isn't a garage product — this is serious technology." Before the viewer heard a single word, they already understood this was different.

### Stage 2 — The Pain Presentation

After the hook, don't present the product — present the problem. **Extreme heat** that disables regular cameras. **Parking hits** with no witnesses and no evidence. **Difficulty sharing** footage with insurance and police.

The viewer needs to think "that's exactly what happened to me" before they hear about the solution. Once there's identification with the problem — the solution is already half sold.

### Stage 3 — The Hero Reveal

Now, and only now, present the product — with a bold declaration: **"The most rigid dashcam on the planet."** This isn't a spec description, it's a position statement. This is what makes a backer want to tell their friends.

### Stage 4 — Feature Walkthrough That Translates to Benefits

Every technical feature immediately translates to an emotional benefit:

**"Aluminum chassis for heat dissipation"** → "It won't stop working when your car sits in the Israeli sun."
**"Radar-based sensor"** → "You'll know someone hit your car seconds before it happened."
**"4G/5G with cloud"** → "Footage is saved before the thief had time to escape."

The technical spec is the proof. The emotional benefit is the reason to buy.

### Stage 5 — Neutralizing the Big Objection

In Kickstarter, the hidden objection is always the same: "Will it ship on time? Will my money disappear?" The answer can't be "we're trustworthy." It needs to be **concrete evidence**.

Dride 4K showed in the video: "We've already purchased thousands of processors in advance." One sentence that neutralized the fear of every backer who thought twice. Not promises — facts.

## The Result: 3,748 Backers, $1,191,083

The project raised over $1.1 million. Not because the product was the best on the market — but because the video built trust, translated technology into emotion, and gave the viewer a reason to act **now**.

**A campaign video is the primary business engine of the fundraise. It's not "part of the campaign" — it is the campaign.**`,
    date: "2025-04-01",
    tags: ["Crowdfunding", "Kickstarter", "Product Launch", "Direct Response"],
    relatedServiceHref: "/services/hightech",
    relatedServiceLabelHe: "סרטי מוצר והשקות",
    relatedServiceLabelEn: "Product & Launch Films",
    relatedYoutubeId: "JncBv6FbkRc",
  },
  {
    id: "tech-product-video-60sec",
    coverImage: "/blog/tech-product-video-cover.svg",
    titleHe: "איך להסביר טכנולוגיה מורכבת ב-60 שניות? האמנות של סרטי מוצר לעולם ה-AI והדאטה",
    titleEn: "How to Explain Complex Technology in 60 Seconds? The Art of Product Films for the AI and Data World",
    excerptHe: "האתגר הגדול של חברות הייטק ו-SaaS הוא לא הפיתוח — אלא היכולת להסביר מה המוצר שלהן עושה ב-60 שניות. שלושת החוקים לסרטון מוצר טכנולוגי שממיר צופים ללידים.",
    excerptEn: "The biggest challenge for high-tech and SaaS companies isn't development — it's explaining what their product does in 60 seconds. Three laws of a technology product film that converts viewers to leads.",
    readingTime: 5,
    bodyHe: `## האתגר שכל חברת הייטק מכירה

האתגר הגדול ביותר של חברות הייטק וסטארטאפים בתחום ה-AI וה-Deep Tech הוא לא הפיתוח עצמו — אלא היכולת להסביר ללקוחות ולמשקיעים מה המוצר שלהם באמת עושה, ואיך הוא פותר להם את הבעיה בצורה פשוטה ומהירה. כשהמוצר שלכם מבוסס על אלגוריתמים, תשתית נתונים או חיבורי API, אי אפשר פשוט "לצלם אותו בשטח".

כאן נכנס לתמונה השילוב בין קריאטיב חכם, Motion Graphics מתקדם וסיפור סיפורים טכנולוגי.

בפרויקט שיצרנו עבור Bright Data, המטרה הייתה לפצח את האופן שבו תשתית הדאטה שלהם מניעה ומזינה מודלים של בינה מלאכותית. במקום להשתמש בהסברים טקסטואליים ארוכים, תרגמנו את הארכיטקטורה המורכבת לשפה חזותית קולנועית ודינמית.

[IMAGE]

## חוק 1: להתחיל מהכאב — לא מהפיצ'ר

הלקוח שלכם לא קונה טכנולוגיה, הוא קונה פתרון לבעיה. הסרטון נפתח בחרדה הגדולה ביותר של מפתחי AI — מודלים שנשארים מאחור ומאבדים את היתרון התחרותי שלהם בגלל חוסר במידע עדכני. ברגע שהגדרתם את הכאב בשניות הראשונות, הקהל שלכם קשוב לפתרון.

**רוב חברות הטכנולוגיה עושות את הטעות ההפוכה:** הן מתחילות בפיצ'רים, ב"מה יש לנו", ב-USPs. הצופה עוד לא יודע למה לו אכפת. תנו לו סיבה לצפות — אז תציגו את הפתרון.

## חוק 2: מטפורות ויזואליות שמייצגות מה שלא ניתן לצלם

דאטה הוא לא דבר מוחשי. כדי להראות זרימה, נפח ומהירות של מידע, השתמשנו במערכות חלקיקים תלת-ממדיות ובגרפיקה בתנועה המדמה רשתות עצביות וזרימת קוד.

שלושה כלים שעושים את זה נכון:

**Particle Systems:** כדורים, נקודות ונתיבים שזורמים בחלל — מדמים את הכמות העצומה של נתונים שעוברים דרך המערכת. הצופה מרגיש "סקייל" בלי להבין מספרים.

**UI Simulation:** ממשקי מסך אמיתיים עם שגיאות קוד מוכרות (404, 502, timeout errors) — הצופה הטכני מזהה אותם מיד ומזדהה עם הכאב. זה לא עיצוב גנרי, זה שפה משותפת.

**Beat-matching:** כל תנועה גרפית מסונכרנת עם הביט של הפסקול. זה לא מקרי — זה מה שגורם לסרטון להרגיש "חי" ואנרגטי גם כשאין בו שחקן אחד.

## חוק 3: לדבר בשפה של מקבלי ההחלטות

מנהלי מוצר, CTOs וסמנכ"לי טכנולוגיה מחפשים אמינות. שילוב של מונחים מקצועיים נכונים (LLMs, MCP, A2A, Petabyte scale), תצוגות ממשק מוכרות ונתונים השוואתיים מול מתחרים — מעניקים לסרטון את הסמכותיות הדרושה.

**הגרף ההשוואתי הוא כלי שיווקי עוצמתי:** הוא הופך שאלה של "האם לקנות" לשאלה של "למה לא לקנות". מקבל ההחלטות רואה את הנתונים, מבין את הפער — ועובר לשלב הבא.

## מה זה שווה בפועל

סרטון מוצר חכם הוא לא רק חלון ראווה יפה — הוא זרוע המכירות והשיווק הדיגיטלית של החברה שלכם. הוא מסוגל לקחת את הטכנולוגיה המורכבת ביותר ולתרגם אותה לערך עסקי ברור — בין אם על דף הנחיתה, בהצגה למשקיעים, או ב-LinkedIn.

**60 שניות שנעשות נכון שוות יותר מ-6 עמודי מצגת.**`,
    bodyEn: `## The Challenge Every High-Tech Company Knows

The biggest challenge for high-tech companies and startups in AI and Deep Tech isn't the development itself — it's the ability to explain to clients and investors what the product actually does, and how it solves their problem simply and quickly. When your product is based on algorithms, data infrastructure, or API connections, you simply can't "film it in the field."

This is where the combination of smart creative, advanced Motion Graphics, and Tech Storytelling comes in.

In the project we created for Bright Data, the goal was to crack the way their data infrastructure powers and feeds AI models. Instead of using long textual explanations, we translated the complex architecture into a cinematic, dynamic visual language.

[IMAGE]

## Law 1: Start with the Pain — Not the Feature

Your client isn't buying technology, they're buying a solution to a problem. The video opens with the biggest anxiety of AI developers — models falling behind and losing their competitive advantage due to a lack of current data. Once you define the pain in the first seconds, your audience is listening for the solution.

**Most tech companies make the opposite mistake:** they start with features, with "what we have," with USPs. The viewer doesn't yet know why they should care. Give them a reason to watch — then present the solution.

## Law 2: Visual Metaphors That Represent the Unfilmable

Data isn't a tangible thing. To show the flow, volume, and speed of information, we used 3D particle systems and motion graphics simulating neural networks and code flow.

Three tools that do this right:

**Particle Systems:** spheres, points, and paths flowing through space — simulating the enormous volume of data passing through the system. The viewer feels "scale" without understanding numbers.

**UI Simulation:** real screen interfaces with familiar error codes (404, 502, timeout errors) — the technical viewer recognizes them immediately and identifies with the pain. This isn't generic design, it's a shared language.

**Beat-matching:** every graphic movement is synchronized with the soundtrack's beat. This isn't accidental — it's what makes the video feel "alive" and energetic even without a single actor.

## Law 3: Speak the Language of Decision-Makers

Product managers, CTOs, and technology VPs look for credibility. Combining the right professional terminology (LLMs, MCP, A2A, Petabyte scale), familiar interface displays, and comparative data against competitors — gives the video the authority it needs.

**The comparison graph is a powerful sales tool:** it turns the question of "whether to buy" into "why not to buy." The decision-maker sees the data, understands the gap — and moves to the next stage.

## What This Is Worth in Practice

A smart product film isn't just a pretty showpiece — it's your company's digital sales and marketing arm. It can take the most complex technology and translate it into clear business value — whether on a landing page, in an investor presentation, or on LinkedIn.

**60 seconds done right are worth more than 6 slides of a deck.**`,
    date: "2025-06-01",
    tags: ["High-Tech", "Motion Graphics", "Tech Storytelling", "SaaS"],
    relatedServiceHref: "/services/hightech",
    relatedServiceLabelHe: "הייטק וסטארטאפ",
    relatedServiceLabelEn: "High-Tech & Startup Video",
    relatedYoutubeId: "HKkqkHBSt7Q",
  },
  {
    id: "max-roi-production",
    coverImage: "/blog/social-content-cover.svg",
    titleHe: "פיצוח ה-ROI של הסושיאל: איך הופכים יום צילום אחד לעשרות סרטוני תוכן מנצחים",
    titleEn: "Cracking Social ROI: How One Filming Day Becomes Dozens of Winning Content Videos",
    excerptHe: "הרשתות רעבות לתוכן כל יום. תקציבי ההפקה מוגבלים. הפתרון לא נמצא בעוד ימי צילום — הוא נמצא בתכנון חכם יותר.",
    excerptEn: "Social media is hungry for content every day. Production budgets are limited. The solution isn't more filming days — it's smarter planning.",
    readingTime: 5,
    bodyHe: `## הבעיה שמנהלי שיווק לא אוהבים לדבר עליה

מנהלי שיווק ודיגיטל בחברות גדולות מכירים את התסכול: הרשתות צריכות תוכן כל יום, אבל ימי צילום עולים כסף. כל Reel, כל Short, כל Story — אם מייצרים אותם בנפרד, העלות מתפוצצת. הפתרון הנפוץ? להתפשר על איכות. להשתמש בחומרים ישנים. לעלות פחות.

זו טעות.

**יש גישה אחרת.** היא לא דורשת יותר ימי צילום — היא דורשת תכנון שונה לחלוטין לפני שמגיעים לסט.

## Max ROI Production: עיקרון אחד, עשרות תוצאות

הגישה שלנו מבוססת על פירוק יום הצילום לרכיבים — מה שאנחנו קוראים **"צילום מודולרי"**. במקום להגיע עם תסריט אחד ולצלם אותו קדימה-אחורה, אנחנו מגיעים עם מפת תוכן: רשימת "קוביות" שכל אחת מהן עובדת לבד — וגם יחד עם האחרות.

בפרויקט LYFE של קבוצת אשטרום, המטרה הייתה לייצר נכסים דיגיטליים לרשתות החברתיות לאירועי השנה החדשה. יכולנו להגיע, לצלם סרטון אחד ולהסתיים.

במקום זה, הגענו עם אסטרטגיית תוכן מלאה ליום אחד.

[IMAGE]

## שלב 1 — פיצוח ה"עוגן הויזואלי"

לפני שאנחנו נוגעים במצלמה, אנחנו מחפשים את **ה-Scroll-stopper**: האלמנט שיעצור אצבע בגלילה תוך שנייה.

בLYFE, הכדורים המטאליים הענקיים בלובי היו התשובה. השתקפויות, צבעים, אינטראקציה עם אנשים — הם הפכו ל"עוגן" שמחבר בין כל הסרטונים ומייצר זיהוי מיידי של המקום.

כל פרויקט יש לו עוגן כזה. לא תמיד הוא ברור מיד — זה חלק מעבודת הפרה-פרודקשן.

## שלב 2 — צילום מודולרי בשטח

**רחפן:** פתיחות, סקייל, כניסות דרמטיות למרחב.
**גוף ראשון (POV):** תחושת "אתה שם". הצופה נכנס למרחב.
**זוויות נמוכות:** מייצרות גובה ויוקרה.
**אווירה ואנשים:** הרגעים האנושיים האמיתיים — חיוכים, תנועה, אנרגיה.

כל "קובייה" מצולמת בטייקים קצרים, מכמה זוויות. בסוף היום — בנק חומרים עשיר שניתן לחתוך אותו בדרכים שונות.

## שלב 3 — פוסט-פרודקשן מותאם פלטפורמה

כאן קורה הקסם. אותם חומרים גלם עוברים:

**Beat-matching:** עריכה שמסונכרנת עם הביט של המוזיקה — יוצרת תחושת אנרגיה גבוהה גם בסרטון של 15 שניות.

**Motion Overlays:** שכבות גרפיות שמעניקות לוידאו את הלוק הטרנדי — בלי לאבד את היוקרה של המותג.

**חיתוך לפלטפורמות:** אותו יום צילום → 9:16 לReels ו-TikTok, 16:9 ליוטיוב, 1:1 לפיד. גרסאות לחגים, לקמפיינים עונתיים, לפוסטים שוטפים.

## מה יוצא בסוף

מיום צילום אחד מתוכנן נכון, חברות מקבלות:
- 8-15 סרטוני Reels/Shorts מוכנים לעלייה
- חומר גלם ל-20-30 גרסאות עתידיות
- נכסים ויזואליים לשימוש חוזר לאורך כל השנה

**אתם לא צריכים יותר ימי צילום. אתם צריכים ימי צילום חכמים יותר.**

The Video Shop מביאה את האסטרטגיה, את הצוות ואת המתודולוגיה. אתם מביאים את הסיפור שרוצים לספר.`,
    bodyEn: `## The Problem Marketing Managers Don't Like Talking About

Marketing and digital managers at large companies know the frustration: social media needs content every day, but filming days cost money. Every Reel, every Short, every Story — if produced separately, costs explode. The common solution? Compromise on quality. Use old materials. Post less.

That's a mistake.

**There's another approach.** It doesn't require more filming days — it requires completely different planning before arriving on set.

## Max ROI Production: One Principle, Dozens of Results

Our approach is based on breaking down the filming day into components — what we call **"modular shooting."** Instead of arriving with one script and filming it front to back, we arrive with a content map: a list of "building blocks" where each one works alone — and also with the others.

In the LYFE project for Ashtrom Group, the goal was to create digital assets for social media for New Year events. We could have arrived, filmed one video, and left.

Instead, we arrived with a complete content strategy for one day.

[IMAGE]

## Stage 1 — Identifying the Visual Anchor

Before we touch a camera, we look for **the scroll-stopper**: the element that will stop a scrolling finger within a second.

At LYFE, the giant metallic orbs in the lobby were the answer. Reflections, colors, interaction with people — they became the "anchor" connecting all the videos and creating immediate recognition of the location.

Every project has such an anchor. It's not always immediately obvious — that's part of the pre-production work.

## Stage 2 — Modular Shooting on Location

**Drone:** openings, scale, dramatic entrances into the space.
**POV (point of view):** the feeling of "you're there." The viewer enters the space.
**Low angles:** create height and luxury.
**Atmosphere and people:** the real human moments — smiles, movement, energy.

Each "building block" is filmed in short takes, from multiple angles. At the end of the day — a rich footage bank that can be cut in different ways.

## Stage 3 — Platform-Tailored Post-Production

This is where the magic happens. The same raw footage goes through:

**Beat-matching:** editing synchronized to the music beat — creates a high-energy feeling even in a 15-second video.

**Motion Overlays:** graphic layers that give the video a trending look — without losing the brand's luxury feel.

**Platform cutting:** same filming day → 9:16 for Reels and TikTok, 16:9 for YouTube, 1:1 for feed. Versions for holidays, seasonal campaigns, ongoing posts.

## What Comes Out in the End

From one well-planned filming day, companies receive:
- 8-15 Reels/Shorts ready to post
- Raw material for 20-30 future versions
- Visual assets for reuse throughout the year

**You don't need more filming days. You need smarter filming days.**

The Video Shop brings the strategy, the crew, and the methodology. You bring the story you want to tell.`,
    date: "2025-02-15",
    tags: ["Social Media", "ROI", "Content Strategy", "Behind the Scenes"],
    relatedServiceHref: "/services/corporate",
    relatedServiceLabelHe: "מיתוג מעסיק וסרטי גיוס",
    relatedServiceLabelEn: "Employer Branding & Recruitment",
    relatedYoutubeId: "d2xNLprySKQ",
  },
  {
    id: "ai-storyboard-workflow",
    coverImage: "/blog/ai-storyboard-cover.svg",
    titleHe: "איך מייצרים סרט AI שנראה כמו הפקה של מיליון דולר — מהסטוריבורד ועד המסירה",
    titleEn: "How to Produce an AI Film That Looks Like a Million-Dollar Production — From Storyboard to Delivery",
    excerptHe: "הסוד לא נמצא בכלי. הוא נמצא בתהליך. אחרי עשרות פרויקטי AI — הנה המתודולוגיה המלאה שלנו, שלב אחרי שלב.",
    excerptEn: "The secret isn't in the tool. It's in the process. After dozens of AI projects — here's our complete methodology, step by step.",
    readingTime: 8,
    bodyHe: `## הנחת היסוד הלא נכונה

רוב האנשים שמגיעים אלינו עם בקשה לסרט AI חושבים שהתהליך נראה כך: כותבים פרומפט → מקבלים סרט → מסיימים.

הם מגלים שזה לא עובד ככה. ואנחנו לא מפתיעים אותם — אנחנו מסבירים למה.

**הפקת AI מקצועית עוברת אותם שלבים בדיוק כמו הפקה קלאסית.** ה-AI הוא לא קיצור דרך — הוא כלי ייצור חדש. כמו שמצלמת ARRI לא מצלמת בעצמה, Kling לא מפיק בעצמו. מישהו צריך לדעת מה לבקש ממנה, ומה לעשות עם מה שיוצא.

הנה התהליך המלא שלנו, כפי שהוא מתרחש בפועל.

## שלב 1 — הבריף: לא "מה אתם רוצים" אלא "מה אתם רוצים שיקרה"

הפגישה הראשונה שלנו עם לקוח AI אף פעם לא מתחילה בשאלה "איזה סרט תרצו?". היא מתחילה בשאלה: **"מה הצופה צריך לחשוב, להרגיש ולעשות שלוש שניות אחרי שהסרט מסתיים?"**

ההבדל הזה קריטי.

לקוח שמגיע ואומר "אנחנו רוצים סרט שמציג את הטכנולוגיה שלנו" עדיין לא יודע מה הוא רוצה. לקוח שמגיע ואומר "אנחנו רוצים שמנמ"ר של תאגיד בנייה בינלאומי יצלצל אלינו אחרי הצפייה" — זה בריף שאפשר לעבוד איתו.

הבריף הנכון מגדיר:
- **קהל יעד ספציפי** — לא "עסקים" אלא "VP Operations בחברת קבלנות בינלאומית שמשתתף בדיון תקציב"
- **פעולה מוגדרת** — לא "מודעות" אלא "בקשת פגישה / שליחת RFP"
- **חסם אחד שצריך לפרוץ** — מה מונע מהצופה לפעול כרגע? אי-אמון? חוסר ידע? לא מבין את הדחיפות?

[IMAGE]

## שלב 2 — ארכיטקטורת הנרטיב

אחרי הבריף אנחנו כותבים מסמך של שני עמודים לפני שנוגעים באיזה כלי שהוא:

**The Story Spine:**
- **Act 1 — הסטטוס קוו:** העולם כפי שהוא נראה בלי הפתרון
- **Act 2 — הבעיה הנסתרת:** הסיכון שהצופה לא ידע עליו (ולכן לא פעל)
- **Act 3 — ה-turning point:** הרגע שבו הפתרון מוכנס
- **Act 4 — העולם החדש:** מה נראה אחרי

המבנה הזה עובד בכל סרט — B2B, הומניטרי, טכנולוגי, נדל"ן. אנושות לא השתנתה. אנחנו עדיין מחוברים לסיפורים שנבנו ככה.

לאחר מכן: **תסריט מלא.** כל שניה מחושבת. VO, תיאור ויזואלי, גרפיקה, מוזיקה — הכל כתוב על הנייר לפני שפותחים Midjourney.

## שלב 3 — הסטוריבורד עם AI

**זה הצעד שרוב הלקוחות לא מצפים לו — וזה הצעד שמכריע את כל הפרויקט.**

אנחנו לא יוצרים סטוריבורד "על הדרך". אנחנו מוציאים שלושה עד חמישה ימים **רק** על הסטוריבורד.

הסטוריבורד ב-Midjourney מגדיר:
- **כל angle** — שוט מהצדדים? מלמעלה? POV?
- **לוק ויזואלי** — טון, פלטת צבעים, depth of field, lighting direction
- **ה-art direction של הדמויות** — מה הם לובשים? איפה הם עומדים? מה הם עושים?
- **ה-environment** — איפה מתרחשת כל סצנה? איזה שעה ביום?

כל frame ב-Midjourney עובר לפחות 8-12 iterations לפני שאנחנו מרוצים ממנו. כל שוט שיישמע כמו "קרוב מספיק" — יהפוך לבעיה בשלב הגנרציה.

**הסטוריבורד הוא גם כלי ניהול לקוח.** לפני שאנחנו מייצרים שנייה אחת של וידאו, הלקוח מאשר כל frame. זה מונע את אחת הבעיות הגדולות ביותר בהפקות AI: "זה לא מה שחשבתי שיצא".

## שלב 4 — אישור הלקוח

לפני הגנרציה, הלקוח מקבל:
1. תסריט עם טיימינג מדויק
2. Storyboard מלא (20-40 frames)
3. Mood board — reference של לוק וטון

הלקוח מאשר את שלושת המסמכים. **רק אז** מתחילה העבודה האמיתית.

זה לוקח עוד שבוע. אבל זה חוסך שלושה שבועות של iterations אחרי הגנרציה.

[IMAGE]

## שלב 5 — גנרציית התנועה

עכשיו, לבסוף, נכנסים Kling ו-Runway Gen-3 Alpha לתמונה.

**ב-Kling:** כל frame מה-Midjourney הופך ל-seed לגנרציית תנועה. אנחנו מגדירים: כיוון תנועת המצלמה, מהירות, תנועת הדמויות, ואת ה-motion style הכולל. לכל שניה אחת שתיכנס לסרט הסופי — מייצרים 8-15 variants ובוחרים אחת.

**ב-Runway:** בעיקר עבור shots שדורשים שליטה מדויקת יותר בתנועת המצלמה, או לצמצם inconsistency בין frames.

**ה-consistency challenge:** זו הבעיה מספר אחת ב-AI. כל frame שנוצר בנפרד עלול לא לשבת עם הקודם. אנחנו פותרים אותה עם:
- Visual style guide קפדני שנמסר לכל פרומפט
- Reference image עקבי לכל דמות/לוקיישן
- Color correction בפוסט שמאחד את הכל

## שלב 6 — פוסט-פרודקשן

**עריכה:** כל ה-clips עולים ל-DaVinci Resolve. בונים את הסרט לפי התסריט והסטוריבורד המאושרים. זה לא "שיחקנו" ב-AI — זה עריכה רצינית עם תשומת לב לקצב, tension, ו-breathing.

**HUD & Motion Graphics:** ב-After Effects — כל אלמנט גרפי שאנחנו מוסיפים (UI overlays, גרפים, כותרות, annotations) מעוצב לפי שפה ויזואלית מותאמת לסרט. לא template. לא Canva.

**Color Grading:** כל clip עובר grading ב-DaVinci כדי לאחד את הלוק. AI מייצר inconsistencies בצבע — grading מקצועי מוחק אותן.

**Sound Design ו-Mix:** קריינות, מוזיקה, Foley — הכל מעוצב ומיוצב. הסרט הסופי מגיע עם LUFS מנורמלים לכל הפלטפורמות.

## מה זה עולה בזמן

לקוחות מצפים שסרט AI ייקח שבוע. סרט AI מקצועי לוקח **אותו הזמן כמו הפקה קלאסית** — בין 4 ל-8 שבועות.

הפירוט:
- בריף ואישור כיוון: שבוע
- תסריט + סטוריבורד + אישור לקוח: שבוע וחצי
- גנרציה: שבועיים
- פוסט-פרודקשן + פידבק: שבועיים

ה"קסם" של AI לא מקצר את הזמן — הוא מרחיב את מה שאפשר ליצור. בתקציב שבעבר ייצר פרומו פשוט, היום אפשר לייצר עולם.

## מה AI יכול — ומה הוא לא יכול

**AI מנצח כשצריך לצלם את הלא-ניתן לצילום:**
- עולמות עתידיים
- מערכות שסווגות או לא נגישות
- Scale שאין לו תקציב — שמיים, הרס, המונים
- מדינות או אזורים שאי אפשר לנסוע אליהם

**AI מפסיד כשנדרש הרגע האנושי האמיתי:**
- עדות של לקוח
- CEO מסביר חזון
- עובד מדבר על מה שהוא אוהב בחברה

לכן ב-Hybrid productions שלנו — תמיד יש שניות של live action אמיתי. הן מה שנותנות לסרט את ה"אמת" שהמוח האנושי מחפש.

The Video Shop לא מוכרים "סרטי AI". אנחנו מפיקים **סרטים שמשתמשים בכלי הנכון לכל רגע.** לפעמים זה מצלמה. לפעמים זה Kling. תמיד זה תסריט.`,
    bodyEn: `## The Wrong Assumption

Most people who come to us with an AI film request think the process looks like this: write a prompt → get a film → done.

They discover that's not how it works. And we don't surprise them — we explain why.

**Professional AI production goes through the exact same stages as classical production.** AI is not a shortcut — it's a new production tool. Just as an ARRI camera doesn't film itself, Kling doesn't produce itself. Someone needs to know what to ask of it, and what to do with what comes out.

Here's our complete process, as it actually happens.

## Stage 1 — The Brief: Not "What Do You Want" But "What Do You Want to Happen"

Our first meeting with an AI client never starts with "what film do you want?" It starts with: **"What should the viewer think, feel, and do three seconds after the film ends?"**

This difference is critical.

A client who comes and says "we want a film that shows our technology" doesn't yet know what they want. A client who comes and says "we want the COO of an international construction corporation to call us after watching" — that's a brief you can work with.

The right brief defines:
- **Specific target audience** — not "businesses" but "VP Operations at an international contracting company attending a budget meeting"
- **Defined action** — not "awareness" but "request a meeting / send an RFP"
- **One barrier to break** — what's preventing the viewer from acting right now? Mistrust? Lack of knowledge? Not understanding the urgency?

[IMAGE]

## Stage 2 — Narrative Architecture

After the brief we write a two-page document before touching any tool:

**The Story Spine:**
- **Act 1 — Status quo:** The world as it looks without the solution
- **Act 2 — The hidden problem:** The risk the viewer didn't know about (and therefore didn't act)
- **Act 3 — The turning point:** The moment the solution is introduced
- **Act 4 — The new world:** What it looks like after

This structure works in every film — B2B, humanitarian, technological, real estate. Humanity hasn't changed. We're still wired to connect to stories built this way.

Then: **a full script.** Every second calculated. VO, visual description, graphics, music — everything written on paper before opening Midjourney.

## Stage 3 — AI Storyboarding

**This is the step most clients don't expect — and it's the step that decides the entire project.**

We don't create a storyboard "on the way." We spend three to five days **only** on the storyboard.

The Midjourney storyboard defines:
- **Every angle** — side shot? overhead? POV?
- **Visual look** — tone, color palette, depth of field, lighting direction
- **Art direction of characters** — what are they wearing? where are they standing? what are they doing?
- **The environment** — where does each scene take place? what time of day?

Every Midjourney frame goes through at least 8-12 iterations before we're satisfied. Every shot that sounds "close enough" — will become a problem in the generation stage.

**The storyboard is also a client management tool.** Before we generate a single second of video, the client approves every frame. This prevents one of the biggest problems in AI productions: "that's not what I thought would come out."

## Stage 4 — Client Approval

Before generation, the client receives:
1. Script with precise timing
2. Complete storyboard (20-40 frames)
3. Mood board — look and tone reference

The client approves all three documents. **Only then** does the real work begin.

This takes another week. But it saves three weeks of iterations after generation.

[IMAGE]

## Stage 5 — Motion Generation

Now, finally, Kling and Runway Gen-3 Alpha enter the picture.

**In Kling:** every frame from Midjourney becomes a seed for motion generation. We define: camera movement direction, speed, character movement, and overall motion style. For every second that will go into the final film — we generate 8-15 variants and choose one.

**In Runway:** primarily for shots requiring more precise camera movement control, or to reduce inconsistency between frames.

**The consistency challenge:** this is the number one problem in AI. Every separately generated frame may not sit with the previous one. We solve it with:
- A strict visual style guide passed to every prompt
- Consistent reference image for every character/location
- Color correction in post that unifies everything

## Stage 6 — Post-Production

**Editing:** all clips go into DaVinci Resolve. We build the film according to the approved script and storyboard. This isn't "playing with AI" — it's serious editing with attention to rhythm, tension, and breathing.

**HUD & Motion Graphics:** in After Effects — every graphic element we add (UI overlays, graphs, titles, annotations) is designed according to a visual language tailored to the film. Not a template. Not Canva.

**Color Grading:** every clip goes through grading in DaVinci to unify the look. AI generates inconsistencies in color — professional grading erases them.

**Sound Design & Mix:** voiceover, music, Foley — all designed and balanced. The final film arrives with LUFS normalized for every platform.

## What This Costs in Time

Clients expect an AI film to take a week. A professional AI film takes **the same time as a classical production** — between 4 and 8 weeks.

The breakdown:
- Brief and direction approval: one week
- Script + storyboard + client approval: one and a half weeks
- Generation: two weeks
- Post-production + feedback: two weeks

The AI "magic" doesn't shorten the time — it expands what's possible. With a budget that previously produced a simple promo, today you can produce a world.

## What AI Can Do — And What It Can't

**AI wins when you need to film the unfilmable:**
- Future worlds
- Classified or inaccessible systems
- Scale with no budget — skies, destruction, crowds
- Countries or regions you can't travel to

**AI loses when a genuine human moment is required:**
- Client testimony
- CEO explaining a vision
- Employee talking about what they love about the company

That's why in our hybrid productions — there are always seconds of real live action. They're what give the film the "truth" the human brain is looking for.

The Video Shop doesn't sell "AI films." We produce **films that use the right tool for every moment.** Sometimes that's a camera. Sometimes that's Kling. Always that's a script.`,
    date: "2025-04-10",
    tags: ["AI", "Workflow", "Storyboard", "Behind the Scenes"],
    relatedServiceHref: "/services/ai",
    relatedServiceLabelHe: "הפקות וידאו AI",
    relatedServiceLabelEn: "AI Video Production",
    relatedYoutubeId: "iMfsWqluFpo",
  },
  {
    id: "ai-video-2024",
    coverImage: "/blog/ai-production-cover.svg",
    titleHe: "למה רוב סרטי ה-AI נראים מזויפים — ומה קורה כשבמאי אמיתי מחזיק בהגה",
    titleEn: "Why Most AI Films Look Fake — And What Happens When a Real Director Takes the Wheel",
    excerptHe: "כולם יכולים ללחוץ על כפתור ב-Kling. לא כולם יודעים מה לעשות עם מה שיוצא. אחרי עשרות פרויקטי AI — הנה מה שלמדנו.",
    excerptEn: "Anyone can click a button in Kling. Not everyone knows what to do with what comes out. After dozens of AI projects — here's what we learned.",
    readingTime: 6,
    bodyHe: `בשנתיים האחרונות, כל אחד עם מחשב נייד יכול ליצור וידאו "מקצועי" בכמה קליקים. Kling, Runway Gen-3 Alpha, Midjourney — הכלים נגישים, זולים, ומרשימים. ובדיוק בגלל זה, רוב מה שנוצר בהם נראה אותו דבר: זוהר, ריק מתוכן, ובלי נשמה.

אנחנו ב-The Video Shop מגיעים מרקע שונה לגמרי. 20 שנה של בימוי קלאסי. מצלמות, תאורה, שחקנים, מיקים. כשה-AI הגיע, ניסינו להתחמק ממנו. עד שהבנו שזאת לא השאלה הנכונה.

## הטעות שכולם עושים

הטעות הגדולה ביותר שאנחנו רואים? להתחיל מה-AI. לכתוב פרומפט, לקבל תמונה יפה, ולבנות סביבה הפקה.

זה הפוך לחלוטין ממה שצריך לקרות.

**הכלי לא קובע את הסיפור — הסיפור קובע את הכלי.** בדיוק כמו שבמאי טוב לא בוחר לנצ' לפני שיש קונספט, אנחנו לא פותחים Midjourney לפני שיש פסקת מטרה ברורה. מה רוצים שהצופה ירגיש? מה פעולה שרוצים שיעשה? רק אז מתחילים.

[IMAGE]

## מה שינה לנו — פרויקט שגרם לנו להפסיק לפחד

הפרויקט הראשון שבו שילבנו AI היה סרט B2B לחברת טכנולוגיה ביטחונית שרצתה להמחיש מערכת אוטונומית בפעולה. הבעיה: לא ניתן לצלם את המערכת. לא ניתן לחשוף אותה. הצוות שלה קטן. התקציב — לא בסדר גודל של הוליווד.

השתמשנו ב-Midjourney לפיתוח ה-art direction של כל סצנה, ב-Kling לגנרציית התנועה, ועטפנו הכל בצילומי live action של האנשים האמיתיים בחברה. שבועות של עבודה — לא שעות. כמות iterations בלתי נסבלת. בדיקות, שיפורים, ביטולים מחדש.

התוצאה? לקוח שהפך את הסרט לנכס השיווקי המרכזי שלו לשנה שלמה. לא כי הוא "נראה טכנולוגי" — אלא כי הוא **סיפר סיפור שהוא לא יכול היה לספר אחרת.**

## למה סרטי AI רוב הזמן נכשלים

**חוסר עקביות ויזואלית.** AI מייצר frames יפים בנפרד שלא יושבים יחד. לא מאותה מצלמה, לא מאותה תאורה, לא מאותו עולם. רואים את זה מיד. התיקון? Art direction קפדני — פלטת צבעים מוגדרת, reference מדויק, ו-10 iterations לכל שנייה מוצגת.

**תנועת מצלמה לא-טבעית.** AI אוהב תנועות שאף פעם לא תצולמנה במציאות. הצופה לא מזהה את זה בצורה מודעת — הוא פשוט מרגיש שמשהו לא בסדר. כבמאים, אנחנו עורכים כל תנועה לפי כללי הקולנוע הקלאסי, גם בעולם הדיגיטלי.

**אין רגע אנושי.** הבעיה העמוקה ביותר: AI טוב ב"נראה". הוא לא טוב ב"מרגיש". לכן ב-Hybrid productions שלנו, תמיד יש רגעים של צילום live action אמיתי — אדם, מבט, רגע — שמחזירים את הצופה למציאות.

## הדבר שלקוחות לא מצפים לו: הזמן

לקוחות חושבים שסרט AI לוקח שבוע. אנחנו עובדים בדיוק ההפך — הפקת AI שלנו לוקחת **לפחות כמו הפקה רגילה**, ולפעמים יותר.

זה לא כישלון של הטכנולוגיה. זה ההצלחה שלה. **כשתוצר לוקח פחות זמן מהנדרש — זה נראה.** הלקוחות שמגיעים אלינו מחפשים משהו שיעמוד לאורך זמן. נכס שישרת אותם שנה, שנתיים, שלוש — לא קליפ שנראה טוב עד שמישהו אחר יעשה אחד בשבוע הבא.

הגישה שלנו היא להתחייב לפרויקט בדיוק כמו שהייתה זו הפקה קולנועית: תסריט, storyboard, art direction, עריכה, פידבק, שיפור. שוב ושוב עד שזה נכון.

## מה צריך להיות שונה בבריף שלכם

אם אתם שוקלים הפקת AI לחברה שלכם, שאלו את עצמכם:

**1. מה הסיפור?** לא "אנחנו רוצים סרט AI" — אלא "מה אנחנו רוצים שהצופה יחשוב, ירגיש ויעשה אחרי שיסיים לצפות?"

**2. מה לא ניתן לצלם?** זה המקום האמיתי שבו AI זורח — עתיד, עולמות דמיוניים, סקייל שאין תקציב לו. לא כתחליף לצילום רגיל.

**3. האם יש אדם בסרט?** אנחנו ממליצים כמעט תמיד לשלב Live Action, גם בהיקף קטן. זה מה שמבדיל בין "עוד סרט AI" לבין סרט שנזכרים בו.

The Video Shop לא מוכרים "סרטי AI". אנחנו מפיקים **סרטי B2B שמשתמשים ב-AI בחוכמה**. ההבדל הזה שווה הכל.`,
    bodyEn: `In the last two years, anyone with a laptop can create "professional" video in a few clicks. Kling, Runway Gen-3 Alpha, Midjourney — the tools are accessible, cheap, and impressive. And that's exactly why most of what gets made with them looks the same: shiny, empty, and soulless.

At The Video Shop, we come from a completely different background. 20 years of classical directing. Cameras, lighting, actors, mics. When AI arrived, we tried to avoid it. Until we understood that was the wrong question.

## The Mistake Everyone Makes

The biggest mistake we see? Starting with the AI. Writing a prompt, getting a beautiful image, and building a production around it.

That's completely backwards from what should happen.

**The tool doesn't determine the story — the story determines the tool.** Just like a good director doesn't choose a lens before there's a concept, we don't open Midjourney before there's a clear objective paragraph. What do you want the viewer to feel? What action do you want them to take? Only then do you start.

[IMAGE]

## What Changed for Us — The Project That Made Us Stop Being Afraid

The first project where we integrated AI was a B2B film for a defense tech company that wanted to depict an autonomous system in action. The problem: you can't film the system. You can't expose it. Their team is small. The budget — not Hollywood scale.

We used Midjourney for the art direction of every scene, Kling for motion generation, and wrapped everything in live action footage of the company's real people. Weeks of work — not hours. An unbearable amount of iterations. Testing, improving, scrapping and starting over.

The result? A client who turned the film into their primary marketing asset for an entire year. Not because it "looked technological" — but because it **told a story they couldn't have told any other way.**

## Why AI Films Usually Fail

**Visual inconsistency.** AI generates beautiful frames separately that don't sit together. Not from the same camera, not from the same lighting, not from the same world. You see it immediately. The fix? Careful art direction — defined color palette, precise reference, 10 iterations per second shown.

**Unnatural camera movement.** AI loves movements that would never be filmed in reality. The viewer doesn't consciously identify this — they just feel something is off. As directors, we edit every movement according to classical cinema rules, even in the digital world.

**No human moment.** The deepest problem: AI is good at "looks like." It's not good at "feels like." That's why in our hybrid productions, there are always live action moments — a person, a look, a moment — that bring the viewer back to reality.

## The Thing Clients Don't Expect: Time

Clients think an AI film takes a week. We work exactly the opposite — our AI production takes **at least as long as a regular production**, and sometimes longer.

This isn't a failure of the technology. It's its success. **When a deliverable takes less time than required — it shows.** The clients who come to us are looking for something that will last. An asset that will serve them for a year, two years, three — not a clip that looks good until someone else makes one next week.

Our approach is to commit to the project just like it was a cinematic production: script, storyboard, art direction, editing, feedback, improvement. Again and again until it's right.

## What Should Be Different in Your Brief

If you're considering an AI production for your company, ask yourself:

**1. What's the story?** Not "we want an AI film" — but "what do we want the viewer to think, feel, and do after they finish watching?"

**2. What can't be filmed?** That's the real place AI shines — the future, imaginary worlds, scale that no budget can achieve. Not as a replacement for regular filming.

**3. Is there a person in the film?** We almost always recommend including live action, even in a small scope. That's what differentiates "another AI film" from a film people remember.

The Video Shop doesn't sell "AI films." We produce **B2B films that use AI intelligently.** That difference is worth everything.`,
    date: "2024-11-15",
    tags: ["AI", "B2B", "Kling", "Runway"],
    relatedServiceHref: "/services/ai",
    relatedServiceLabelHe: "הפקות וידאו AI",
    relatedServiceLabelEn: "AI Video Production",
    relatedYoutubeId: "8c9gf7cM8hk",
  },
  {
    id: "real-estate-drone",
    coverImage: "/blog/drone-realestate-cover.svg",
    titleHe: "צילום רחפן לנדל\"ן: המדריך שהיזמים לא מקבלים מהמפיקים שלהם",
    titleEn: "Drone Filming for Real Estate: The Guide Developers Never Get From Their Producers",
    excerptHe: "80% מהעבודה ביום צילום רחפן לא קורה באוויר. ומה שקורה לפני ההמראה קובע אם הפרויקט שלכם ייראה כמו Ashtrom — או כמו כולם.",
    excerptEn: "80% of the work on a drone filming day doesn't happen in the air. And what happens before takeoff determines whether your project looks like Ashtrom — or like everyone else.",
    readingTime: 5,
    bodyHe: `יום צילום רחפן טוב לא מתחיל בהמראה. הוא מתחיל שבוע לפני — עם תכנון של כיוון האור, תחזית רוח, מסלולי טיסה, ואישורים רגולטוריים. מי שמגיע לאתר בלי כל זה, מגיע לגמבל. ואנחנו לא מגמבלים עם הפרויקטים של הלקוחות שלנו.

## מה ההבדל בין "צלם רחפן" לבין הפקת אוויר מקצועית

ישנם בישראל מאות מפעילי רחפן עם רישיון תעופה. פחות ממאה מהם מבינים סינמטוגרפיה. ועוד פחות יודעים לספר את **הסיפור של המיקום** — לא רק לצלם אותו מלמעלה.

כשאנחנו עובדים על פרויקט נדל"ן, אנחנו לא שואלים "מאיפה לצלם?" — אנחנו שואלים "מה צריך הרוכש הפוטנציאלי להבין ולהרגיש?" ומשם בונים את כל מסלול הטיסה.

**הקשר מוכר לפני שהנכס מוכר.** תחבורה, ירק, שכנות, נוף — כל אלה צריכים להיות בסרט. לא בתור "רקע" — בתור חלק מהנרטיב.

[IMAGE]

## הציוד שאנחנו עובדים איתו — ולמה זה משנה

אנחנו מפעילים DJI Inspire 3 לצילומים שדורשים quality מקסימלי. זה הרחפן שמשמש הפקות קולנועיות. Zenmuse X9, 8K RAW, שליטה עצמאית על ה-gimbal. לא כי אנחנו אוהבים ציוד יקר — אלא כי **בפוסט-פרודקשן, כל פיקסל שווה כסף.**

לצילומים שדורשים גמישות — כניסה לשטחים מוגבלים, צילום בין מבנים, shots שצריכים תגובה מהירה — אנחנו מפעילים DJI Mini 4 Pro. קטן, שקט, נראה פחות "מאיים" לצוות השטח.

שני הרחפנים עובדים ב-4K RAW לפחות, עם Log profile שמשאיר מרחב עריכה מקסימלי בגוון הצבע.

## מה הלקוחות לא יודעים (ומה המתחרים שלכם לא יגידו לכם)

**80% מהעבודה היא בעריכה.** ביום צילום, אנחנו מצלמים פי 10 ממה שישמש בסרט הסופי. כל קדר, כל תנועה — נבחרים בקפידה בפוסט. קצב חתכים, מעברים, בחירת הרגע המדויק — זה מה שעושה את ההבדל בין "רחפן שצילם" לבין "סרט נדל"ן".

**תאורת הזהב שווה הכל.** "Golden hour" — שעה אחרי זריחה ושעה לפני שקיעה — היא לא "עוד אפשרות". עבור נדל"ן פרימיום, היא לרוב **ההבדל בין פרויקט שמוכר את עצמו לבין פרויקט שנמכר בהנחה.** לכן אנחנו מגיעים לאתר לפני שהצוות שלכם עולה על מיטות.

**רגולציה היא לא בירוקרטיה — היא הגנה עליכם.** אנחנו מסדירים אישורי רשות התעופה האזרחית לכל פרויקט, מתאמים עם גורמי ביטחון במידת הצורך, ומגיעים עם ביטוח מלא. פרויקט נדל"ן עם צילום לא מאושר — גם אם הוא יפה — יכול לייצר בעיות משפטיות שאין טעם לקחת.

## מה מייחד הפקת וידאו נדל"ן שנבנית לאורך זמן

הלקוחות שהכי מרוצים מאיתנו הם אלה שעבדו איתנו על יותר מפרויקט אחד. כי הם מבינים שסרט נדל"ן טוב הוא **נכס לשנים** — לא תמונה שמחליפים בכל קמפיין.

חברות כמו אשטרום עובדות עם הפקות שיחזיקו 3-5 שנים. הן לא מחפשות "צלם רחפן זול" — הן מחפשות **שותף שיבין את הפרויקט מהמבט הראשון ועד הסרט הסופי.** אנחנו מגיעים לסט של אשטרום בדיוק כמו שמגיעים לכל לקוח — עם הקשב המלא, הציוד הטוב ביותר, והמחויבות לתוצאה.`,
    bodyEn: `A good drone filming day doesn't start at takeoff. It starts a week before — with planning for light direction, wind forecast, flight paths, and regulatory approvals. Anyone who arrives at the site without all that is gambling. And we don't gamble with our clients' projects.

## The Difference Between a "Drone Pilot" and Professional Aerial Production

There are hundreds of licensed drone operators in Israel. Fewer than a hundred understand cinematography. And even fewer know how to tell **the story of the location** — not just film it from above.

When we work on a real estate project, we don't ask "where should we film from?" — we ask "what does the potential buyer need to understand and feel?" And from there we build the entire flight path.

**Context sells before the property sells.** Transportation, greenery, neighborhood, views — all of these need to be in the film. Not as "background" — as part of the narrative.

[IMAGE]

## The Equipment We Work With — And Why It Matters

We operate the DJI Inspire 3 for shoots requiring maximum quality. This is the drone used in cinematic productions. Zenmuse X9, 8K RAW, independent gimbal control. Not because we love expensive equipment — but because **in post-production, every pixel is worth money.**

For shoots requiring flexibility — entering restricted areas, filming between buildings, shots that need quick response — we operate the DJI Mini 4 Pro. Small, quiet, less "threatening" to the site crew.

Both drones work in 4K RAW minimum, with a Log profile that leaves maximum color grading room.

## What Clients Don't Know (And What Your Competitors Won't Tell You)

**80% of the work is in editing.** On filming day, we shoot 10 times more than will be used in the final film. Every frame, every movement — chosen carefully in post. Cut rhythm, transitions, choosing the precise moment — that's what makes the difference between "a drone that filmed" and "a real estate film."

**Golden light is worth everything.** The "golden hour" — one hour after sunrise and one hour before sunset — isn't "just another option." For premium real estate, it's often **the difference between a project that sells itself and a project sold at a discount.** That's why we arrive at the site before your team gets out of bed.

**Regulation isn't bureaucracy — it's protection for you.** We arrange Civil Aviation Authority approvals for every project, coordinate with security bodies when needed, and arrive with full insurance. A real estate project with unauthorized filming — even if beautiful — can create legal problems not worth taking.

## What Distinguishes Real Estate Video Production Built to Last

The clients most satisfied with us are those who've worked with us on more than one project. Because they understand that a good real estate film is **an asset for years** — not an image you replace with every campaign.

Companies like Ashtrom work with productions that will hold for 3-5 years. They're not looking for a "cheap drone pilot" — they're looking for **a partner who understands the project from the first look to the final film.** We arrive at an Ashtrom set exactly as we arrive to every client — with full attention, the best equipment, and a commitment to the result.`,
    date: "2024-10-03",
    tags: ["Real Estate", "Drone", "Behind the Scenes"],
    relatedServiceHref: "/services/realestate",
    relatedServiceLabelHe: "וידאו נדל\"ן ואדריכלות",
    relatedServiceLabelEn: "Real Estate Video",
  },
  {
    id: "investor-pitch-tips",
    coverImage: "/blog/investor-pitch-cover.svg",
    titleHe: "5 הטעויות שהפכו סרטי Investor Pitch מוצלחים לשכחים — וכיצד לא ליפול בהן",
    titleEn: "5 Mistakes That Turn Good Investor Pitch Films Forgettable — And How to Avoid Them",
    excerptHe: "הפקנו עשרות סרטי Investor Pitch. הטעויות האלה חוזרות על עצמן שוב ושוב — ולא כי הלקוחות טיפשים, אלא כי אף אחד לא אמר להם את האמת.",
    excerptEn: "We've produced dozens of Investor Pitch films. These mistakes repeat themselves again and again — not because clients are foolish, but because nobody told them the truth.",
    readingTime: 5,
    bodyHe: `לאחר 20 שנה בתעשייה ועשרות סרטי Investor Pitch שהפקנו, ראינו את אותן הטעויות חוזרות שוב ושוב. ולא כי הלקוחות אינם מקצועיים. אלא כי בתעשייה שלנו, יותר מדי אנשים אומרים "כן" לכל מה שהלקוח רוצה — במקום לומר לו את מה שהוא צריך לשמוע.

אנחנו לא עושים את זה.

## 1. יותר מדי מידע בפחות מדי זמן

Investor Pitch טוב מספר סיפור **אחד** בצורה ברורה. לא שלושה סיפורים. לא "בואו נכניס גם את ה-roadmap". לא "בואו נסביר גם את הטכנולוגיה".

המשקיעים שיושבים מולכם ראו מאות פיצ'ים. **אם הם לא מבינים את הערך הבסיסי בתוך 30 שניות — איבדתם אותם.** כל מסר נוסף שנכנס אחרי הרגע ההוא הוא רעש. לא מידע.

הפתרון: כתבו את הסרט כמו שכותבים הדלקת אש — מה הניצוץ, מה הדלק, מה הלהבה. סיפור אחד. ישר. חזק.

[IMAGE]

## 2. להתמקד בטכנולוגיה ולא בבעיה

משקיעים לא קונים טכנולוגיה. **הם קונים פתרון לבעיה גדולה שהם מאמינים שהיא אמיתית.** חברה שמתחילה בסרט שלה ב"הפלטפורמה שלנו מבוססת על ארכיטקטורה distributed של X עם שכבת Y" — כבר איבדה את החדר.

התחילו עם הבעיה. הגדירו אותה בצורה שמישהו מחוץ לתחום יכול להרגיש. תנו לה לנשום שנייה. רק אז — ורק לאחר שהצופה כבר "בפנים" — הציגו את הפתרון.

## 3. תאורה ואודיו גרועים — הרוצח הכי שקט

לא משנה כמה הסיפור טוב. **אם ה-CEO נראה כמו שצילמו אותו בחדר ישיבות עם לייטינג ניאון ו-echo — המשקיע שם לב.** הוא אולי לא יגיד את זה בקול. אבל זה יחלחל לאופן שבו הוא מעריך את הרצינות של הפרויקט.

אנחנו מסרבים לצלם ראיונות בחדרי ישיבות. לא כי אנחנו קשוחים — אלא כי אנחנו יודעים שמנהל קרן שמסתכל על פיצ' שנראה "בית ספר" לא יוכל להפריד בין האיכות החזותית לבין האיכות הנתפסת של הפרויקט. התאורה היא חלק מהמותג.

## 4. אין רגע של אמת אנושי

כולם מספרים על ה-TAM שלהם. על ה-ARR שלהם. על ה-moat שלהם. **מי שנזכרים בהם לאחר 10 פיצ'ים ביום אחד הם אלה שסיפרו סיפור שאי אפשר לשכוח.**

זה יכול להיות עובד שמדבר על למה הוא בא לעבוד בחברה. לקוח שמתאר את החיים לפני ואחרי. מייסד שמספר את הרגע שבו הבין שיש פה משהו. רגע אחד של אמת שווה יותר מ-40 סלייד של מצגת.

## 5. הפיצ' ארוך מדי — וסיים בלי CTA

Investor Pitch: **עד 2 דקות.** חתכו בחוסר רחמים. כל מה שאפשר לחתוך — תחתכו. אם אתם מתווכחים עם עצמכם אם לכלול משהו — אל תכלילו אותו.

ואז הטעות השנייה: הסרט נגמר, הצופה אמור לעשות משהו — **ואין שום הנחיה.** CTA ברור בסוף הוא לא "מכירתיות זולה" — הוא כבוד לזמן הצופה. "בואו נדבר", "השאירו פרטים", "קבעו פגישה" — אחד מהם. ישיר.

---

בThe Video Shop, אנחנו עובדים על כל פיצ' כמו שעובדים על סרט. שבועות, לא ימים. פידבק, עריכות, שוב פידבק. לא כי אנחנו מסובכים — אלא כי **הפיצ' שמגייס הון הוא כזה שעבדו עליו עד שכבר לא ניתן לשפר אותו יותר.** רק אז הוא מוכן.`,
    bodyEn: `After 20 years in the industry and dozens of Investor Pitch films we've produced, we've seen the same mistakes repeat themselves again and again. Not because clients are unprofessional. But because in our industry, too many people say "yes" to everything the client wants — instead of telling them what they need to hear.

We don't do that.

## 1. Too Much Information in Too Little Time

A good Investor Pitch tells **one** story clearly. Not three stories. Not "let's add the roadmap too." Not "let's explain the technology too."

The investors sitting across from you have seen hundreds of pitches. **If they don't understand the core value within 30 seconds — you've lost them.** Every additional message that comes after that moment is noise. Not information.

The solution: write the film like you're lighting a fire — what's the spark, what's the fuel, what's the flame. One story. Straight. Strong.

[IMAGE]

## 2. Focusing on Technology, Not the Problem

Investors don't buy technology. **They buy a solution to a big problem they believe is real.** A company that starts its film with "Our platform is based on a distributed architecture of X with Y layer" — has already lost the room.

Start with the problem. Define it in a way someone outside the field can feel. Let it breathe for a second. Only then — and only after the viewer is already "inside" — present the solution.

## 3. Bad Lighting and Audio — The Quietest Killer

No matter how good the story is. **If the CEO looks like they were filmed in a conference room with neon lighting and echo — the investor notices.** They may not say it out loud. But it will seep into how they evaluate the seriousness of the project.

We refuse to film interviews in conference rooms. Not because we're difficult — but because we know that a fund manager looking at a pitch that looks "amateur" won't be able to separate the visual quality from the perceived quality of the project. Lighting is part of the brand.

## 4. No Moment of Human Truth

Everyone talks about their TAM. Their ARR. Their moat. **The ones remembered after 10 pitches in one day are those who told a story that couldn't be forgotten.**

This could be an employee talking about why they came to work at the company. A customer describing life before and after. A founder sharing the moment they realized there was something here. One moment of truth is worth more than 40 slides of a presentation.

## 5. The Pitch Is Too Long — And Ended Without a CTA

Investor Pitch: **up to 2 minutes.** Cut mercilessly. Everything that can be cut — cut it. If you're arguing with yourself about whether to include something — don't include it.

And then the second mistake: the film ends, the viewer is supposed to do something — **and there's no direction.** A clear CTA at the end isn't "cheap salesmanship" — it's respect for the viewer's time. "Let's talk," "Leave your details," "Schedule a meeting" — one of them. Direct.

---

At The Video Shop, we work on every pitch like we work on a film. Weeks, not days. Feedback, edits, more feedback. Not because we're complicated — but because **the pitch that raises capital is one that was worked on until it could no longer be improved.** Only then is it ready.`,
    date: "2024-09-20",
    tags: ["Hightech", "Investor Pitch", "Tips"],
    relatedServiceHref: "/services/hightech",
    relatedServiceLabelHe: "סרטי הייטק וסטארטאפים",
    relatedServiceLabelEn: "High-Tech & Startup Videos",
  },
];

// FAQ data — used for SEO schema + FAQ section
export interface FAQItem {
  questionHe: string;
  questionEn: string;
  answerHe: string;
  answerEn: string;
}

export const faqItems: FAQItem[] = [
  {
    questionHe: "כמה עולה סרט תדמית לחברה?",
    questionEn: "How much does a corporate brand film cost?",
    answerHe: "העלות תלויה בסקופ: מספר ימי צילום, לוקיישנים, שחקנים ורמת הפוסט-פרודקשן. סרטי B2B ותדמית שלנו מתחילים בטווח של עשרות אלפי שקלים ועולים בהתאם למורכבות. אנחנו תמיד מתחילים בשיחת הכרה חינמית כדי להבין מה מתאים לתקציב שלכם.",
    answerEn: "The cost depends on scope: number of filming days, locations, talent, and level of post-production. Our B2B and brand films start in the range of tens of thousands of shekels and scale with complexity. We always start with a free introductory call to understand what fits your budget.",
  },
  {
    questionHe: "כמה זמן לוקח להפיק סרט?",
    questionEn: "How long does it take to produce a film?",
    answerHe: "סרט B2B סטנדרטי לוקח בין 3 ל-6 שבועות מקיק-אוף ועד סרט סופי: שבוע לקונספט וסטוריבורד, יום-יומיים לצילום, ו-2-3 שבועות לעריכה ופוסט-פרודקשן עם לולאות פידבק. פרויקטי אקספרס קצרים יותר.",
    answerEn: "A standard B2B film takes between 3 and 6 weeks from kickoff to final film: one week for concept and storyboard, one to two days for filming, and 2-3 weeks for editing and post-production with feedback loops. Express projects are shorter.",
  },
  {
    questionHe: "האם אתם עובדים עם חברות קטנות או רק עם ארגונים גדולים?",
    questionEn: "Do you work with small companies or only large organizations?",
    answerHe: "אנחנו עובדים עם סטארטאפים בשלב ה-seed ועם חברות ציבוריות גדולות — השיקול שלנו הוא לא גודל החברה אלא איכות הפרויקט והתאמה קריאייטיבית. עבדנו עם חברות כמו Palo Alto Networks, Humavox, Ashtrom ו-CROPX לצד סטארטאפים בשלביהם הראשונים.",
    answerEn: "We work with seed-stage startups and large public companies alike — our consideration is not company size but project quality and creative fit. We've worked with companies like Palo Alto Networks, Humavox, Ashtrom, and CROPX alongside early-stage startups.",
  },
  {
    questionHe: "מה ההבדל בין הפקת AI לבין הפקה רגילה?",
    questionEn: "What is the difference between AI production and regular production?",
    answerHe: "הפקת AI משלבת כלים כמו Kling, Runway Gen-3 Alpha ו-Midjourney כדי ליצור ויזואלים שלא ניתן לצלם בצורה רגילה — עולמות דיגיטליים, אנימציות, הדמיות — בתקציב נגיש. ב-Hybrid productions אנחנו משלבים AI עם צילומי live action לתוצאה שנראית כמו הפקת ענק.",
    answerEn: "AI production integrates tools like Kling, Runway Gen-3 Alpha, and Midjourney to create visuals that cannot be filmed conventionally — digital worlds, animations, visualizations — at accessible budgets. In hybrid productions, we combine AI with live action footage for a result that looks like a major production.",
  },
  {
    questionHe: "האם אתם מספקים גם את המוזיקה והסאונד?",
    questionEn: "Do you also provide the music and sound?",
    answerHe: "כן. אנחנו מגיעים עם ספריית מוזיקה מורשית מלאה, ובפרויקטים מתאימים עובדים עם מלחינים ומוזיקאים ליצירת מוזיקה מקורית. עיצוב הסאונד, מיקס ומאסטרינג — הכל כלול בחבילה.",
    answerEn: "Yes. We come with a full licensed music library, and for suitable projects we work with composers and musicians to create original music. Sound design, mixing, and mastering — all included in the package.",
  },
  {
    questionHe: "האם ניתן לקבל את הסרט בכמה פורמטים (אינסטגרם, יוטיוב, לינקדאין)?",
    questionEn: "Can we get the film in multiple formats (Instagram, YouTube, LinkedIn)?",
    answerHe: "בהחלט. כל פרויקט מסופק בפורמטים מותאמים לכל הפלטפורמות הרלוונטיות: 16:9 ליוטיוב ולינקדאין, 9:16 לרילס ו-Stories, 1:1 לפיד, וגרסאות קצרות לפרסום ממומן.",
    answerEn: "Absolutely. Every project is delivered in formats tailored to all relevant platforms: 16:9 for YouTube and LinkedIn, 9:16 for Reels and Stories, 1:1 for feed, and short versions for paid advertising.",
  },
  {
    questionHe: "האם הסטודיו מעורב ישירות בכל פרויקט?",
    questionEn: "Is the studio personally involved in every project?",
    answerHe: "כן. הסטודיו מעורב ישירות בכל פרויקט מהפגישה הראשונה ועד הסרט הסופי. אין מצב שנמכר לכם בוטיק ותקבלו קו ייצור. זה בדיוק מה שאומר 'בוטיק'.",
    answerEn: "Yes. The studio is directly involved in every project from the first meeting to the final film. There's no situation where you're sold boutique and get a production line. That's exactly what 'boutique' means.",
  },
];
