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
    id: "regev-gutman-10-questions",
    youtubeId: "gE-8-eOtQg0",
    titleHe: "10 שאלות — פורמט תוכן שעובד לכל עסק | רגב גוטמן",
    titleEn: "10 Questions — A Content Format That Works for Any Business | Regev Gutman",
    challengeHe: "לייצר תוכן שיווקי לרגב גוטמן — מוסד לימודי לסטודנטים במתמטיקה, כלכלה והנהלת חשבונות — שיהיה כיפי, אינפורמטיבי ויבנה אמון מול קהל של סטודנטים.",
    challengeEn: "Create marketing content for Regev Gutman — an educational institution helping students succeed in mathematics, economics, and accounting — that's fun, informative, and builds trust with a student audience.",
    solutionHe: "פורמט '10 שאלות': צילום באולפן, פרזנטור שמנוסה מול מצלמה, שאלות מגוונות שמשלבות מידע מקצועי עם אנרגיה קלה וכיפית. כתיבה פשוטה ותהליך צילום קצר — פרויקט שהלקוח מבין מהרגע הראשון. התוצר: סרטון שאפשר לפרק לעשרות קטעי Micro-Content לכל המדיות.",
    solutionEn: "The '10 Questions' format: studio filming, a camera-experienced presenter, varied questions combining professional information with light and fun energy. Simple writing and a short filming process — a project the client understands from day one. The output: one video that can be cut into dozens of micro-content clips for all platforms.",
    category: "commercial",
    client: "Regev Gutman",
    duration: "4:30",
    date: "2024-08-01",
  },
  {
    id: "iron-drone-airobotics",
    youtubeId: "N4iNxvFGA34",
    titleHe: "IRON DRONE — סרט שגייס שפה ויזואלית לחברה בורסאית | Airobotics / Ondas Group",
    titleEn: "IRON DRONE — The Film That Defined a Public Company's Visual Language | Airobotics / Ondas Group",
    challengeHe: "להפיק סרט מוצר לטכנולוגיה ביטחונית מתקדמת — בלי Brand Book, בלי שפת אינפוגרפיקה קיימת — ולצאת עם זהות מותגית שתאמץ כסטנדרט הרשמי.",
    challengeEn: "Produce a product film for advanced defense technology — without a Brand Book, without existing infographic language — and emerge with a brand identity adopted as the official standard.",
    solutionHe: "בניית Visual DNA מאפס: פלטת צבעים, טיפוגרפיה טכנולוגית, HUD/UI שמשדר סמכות מבצעית. Speed Ramps שמאיטים ברגעי הליבה הטכנולוגיים (שיגור, נעילת מטרה, יירוט) ומאיצים בתנועת מרדף. Drone-to-Drone Tracking אוויריים וסאונד-דיזיין כירורגי שיושב על הביט. התוצאה: הגרפיקה שפותחה לסרט הפכה לסטנדרט העיצובי הרשמי של ONDS.",
    solutionEn: "Built Visual DNA from scratch: color palette, tech typography, HUD/UI conveying operational authority. Speed Ramps that slow at core technical moments (launch, target lock, intercept) and accelerate in pursuit motion. Aerial Drone-to-Drone tracking and surgical sound design sitting on the beat. Result: the graphics developed for the film became ONDS's official design standard.",
    category: "ai",
    client: "Airobotics / Ondas Group",
    duration: "2:20",
    date: "2023-12-01",
  },
  {
    id: "green-wall-hero",
    youtubeId: "GoX5983yoQg",
    titleHe: "Green Wall — חבילת שיווק שלמה מ-2 ימי צילום | Hero Video",
    titleEn: "Green Wall — Full Marketing Package from 2 Filming Days | Hero Video",
    challengeHe: "לבנות תשתית שיווקית דיגיטלית מלאה לחברת Green Wall — Hero Video, סרטי אווירה, Testimonials — עם מינימום ימי צילום ומקסימום נכסים.",
    challengeEn: "Build a complete digital marketing infrastructure for Green Wall — Hero Video, atmosphere shorts, testimonials — with minimum filming days and maximum assets.",
    solutionHe: "2 ימי צילום: יום ראיונות מרוכז ויום שטח ורחפן. מאותם חומרי גלם: סרט מותג יוקרתי לפגישות ועמוד הבית, סרטי אווירה קצרים ל-Top of Funnel ברשתות, ו-3 Testimonials עצמאיים לטפטוף לאורך הגאנט השיווקי.",
    solutionEn: "2 filming days: one concentrated interview day and one field + drone day. From the same raw footage: a premium brand film for meetings and the homepage, short atmosphere films for Top-of-Funnel social media, and 3 standalone testimonials to drip throughout the marketing calendar.",
    category: "commercial",
    client: "Green Wall",
    duration: "2:45",
    date: "2024-03-01",
  },
  {
    id: "akerstein-100-years",
    youtubeId: "GFkN83F-DBU",
    titleHe: "100 שנה לאקרשטיין — מיתוג מחדש של מותג היסטורי לעתיד סינמטי",
    titleEn: "100 Years of Akerstein — Rebranding a Historic Brand for a Cinematic Future",
    challengeHe: "לחגוג 100 שנות היסטוריה של מותג תעשייתי כבד — עם ארכיון מתקופות שונות, מנהלים שמרנים ודיביזיות רבות — ולהוציא סרט אחד קצבי שמכבד את העבר ומביט קדימה.",
    challengeEn: "Celebrate 100 years of a heavy industrial brand — with multi-era archives, conservative management, and many divisions — and produce one rhythmic film that honors the past and looks forward.",
    solutionHe: "ארכיטקטורת תסריט אחודה שמחברת 100 שנות היסטוריה עם שפת מותג חדשנית. שילוב חומרי ארכיון (פילם, שחור-לבן, אנלוגי) בתוך צילומי 4K מודרניים ללא נפילת קצב. ימי צילום רחפן מרובים באתרי ייצור ופרויקטים ארציים, עם מעברים חדים מאוויר לקלוז-אפ. תוצאה: סרט דגל שמשמש פתיחת כנסים, ישיבות דירקטוריון ומיתוג מעסיק — במקביל.",
    solutionEn: "A unified script architecture connecting 100 years of history with an innovative brand language. Archival footage (film, black-and-white, analog) integrated into modern 4K without losing pace. Multiple drone filming days across production sites and national projects, with sharp aerial-to-closeup transitions. Result: a flagship film serving as a conference opener, board meeting asset, and employer branding — simultaneously.",
    category: "hightech",
    client: "Akerstein",
    duration: "3:20",
    date: "2023-10-01",
  },
  {
    id: "maccabi-corporate-event",
    youtubeId: "M0EhoVJsxJM",
    titleHe: "תיעוד אירוע עסקי — אשטרום נכסים | מנכס חד-פעמי לנכס שיווקי",
    titleEn: "Corporate Event Documentation — Ashtrom Properties | From One-Time Event to Marketing Asset",
    challengeHe: "להפוך כנס חברה חד-פעמי לתוכן שממשיך לעבוד חודשים קדימה — מבלי להפריע למהלך האירוע ולאנרגיה שלו.",
    challengeEn: "Turn a one-time corporate conference into content that keeps working months ahead — without disrupting the event's flow and energy.",
    solutionHe: "Run-and-Gun Filming: צוות קל ומנוסה שלוכד רגעים אמיתיים (חיוכים, רגעי הרצאה, אנרגיה קבוצתית) עם סאונד ישיר מהמיקסר. חומרי גלם מתוכננים למודולריות: סרטון סיכום קצבי, קליפים לרשתות, הרצאות מלאות ו-Micro-Content לגאנט השיווקי.",
    solutionEn: "Run-and-Gun Filming: a light, experienced crew capturing real moments (smiles, lecture highlights, group energy) with direct sound from the mixer. Footage planned for modularity: a rhythmic recap video, social media clips, full lecture recordings, and micro-content to fill the marketing calendar.",
    category: "commercial",
    client: "Ashtrom Properties",
    duration: "3:30",
    date: "2023-11-01",
  },
  {
    id: "ashtrom-properties-brand-film",
    youtubeId: "ome2LtSiFWQ",
    titleHe: "סרט תדמית | אשטרום נכסים — נדל\"ן מניב, היקף ארצי",
    titleEn: "Brand Film | Ashtrom Properties — Income-Producing Real Estate at National Scale",
    challengeHe: "להפגין גודל, יציבות ותחכום תאגידי בפחות מדקה וחצי — תוך הצגת פורטפוליו רחב של פרויקטים, ערים וטכנולוגיה לדיירים ומשקיעים.",
    challengeEn: "Demonstrate scale, stability, and corporate sophistication in under 90 seconds — while presenting a broad portfolio of projects, cities, and technology to tenants and investors.",
    solutionHe: "סרט 'כרטיס ביקור' תאגידי קלאסי: צילומי רחפן שמכסים אתרים ברחבי הארץ, היררכיית מסרים ברורה (1990 → היום → עתיד), הצגת AshtromHost כ-PropTech differentiator, ותקני LEED Gold ופאנלים סולאריים כ-ESG storytelling לשוק הנדל\"ן המודרני.",
    solutionEn: "Classic corporate 'business card' film: drone coverage across national sites, clear message hierarchy (1990 → today → future), AshtromHost app as a PropTech differentiator, and LEED Gold + solar panels as ESG storytelling for the modern real estate market.",
    category: "realestate",
    client: "Ashtrom Properties",
    duration: "1:30",
    date: "2023-03-01",
  },
  {
    id: "ashtrom-ashtromist-short",
    youtubeId: "loW4i8ZOLNA",
    titleHe: "להיות אשטרומיסט — גרסה קצרה לרשתות | קבוצת אשטרום",
    titleEn: "Being an Ashtromist — Short Version for Social Media | Ashtrom Group",
    challengeHe: "לדחוס את נשמת מיתוג המעסיק של קבוצת אשטרום — ה-DNA, הגאווה, הפריסה הארצית — לפורמט קצר שתופס קשב תוך 3 שניות.",
    challengeEn: "Compress the soul of Ashtrom Group's employer branding — the DNA, the pride, the national footprint — into a short format that captures attention within 3 seconds.",
    solutionHe: "עריכת 'פינג-פונג' קצבית: מעברים בין דוברים בתוך משפט, שינויי לוקיישן תכופים מהשטח למטה. צילומי רחפן ארוכים שמראים סקייל לצד פרופיל אישי בגובה עיניים. טיפוגרפיה עם + המותג בכל חיתוך. תוצאה: הגרסה הארוכה שומרת על נרטיב מלא, הגרסה הקצרה מניעה קמפיינים דיגיטליים — שתיהן מאותה הפקה אחת.",
    solutionEn: "Rhythmic 'ping-pong' editing: cuts between speakers mid-sentence, frequent location changes from field to HQ. Long drone shots showing scale alongside eye-level personal profiles. Brand '+' typography on every cut. Result: the long version holds the full narrative, the short version drives digital campaigns — both from the same production.",
    category: "recruitment",
    client: "Ashtrom Group",
    duration: "0:45",
    date: "2023-06-01",
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
    id: "myth-busting-format",
    coverImage: "/blog/myth-busting-cover.svg",
    titleHe: "להרוג את הפיל שבחדר: איך פורמט 'הפרכת מיתוסים' מגדיל המרות",
    titleEn: "Killing the Elephant in the Room: How the 'Myth Busting' Format Increases Conversions",
    excerptHe: "לכל מוצר יש חסמי קנייה. במקום להתעלם מהם, האסטרטגיה הטובה ביותר היא לשים אותם במרכז הפריים ולפרק אותם אחד אחד — ישירות מול המצלמה.",
    excerptEn: "Every product has purchase barriers. Instead of ignoring them, the best strategy is to put them center frame and dismantle them one by one — directly on camera.",
    readingTime: 4,
    bodyHe: `## הפחדים של הלקוח שלכם לא נעלמים — הם מתבטאים בחוסר רכישה

לכל מוצר ושירות יש חסמי קנייה. הלקוחות שלכם מלאים בחששות, שאלות וסטיגמות לפני שהם מוציאים את האשראי. רוב העסקים בוחרים להתעלם מזה ולשים בסרטונים שלהם רק את הצד הטוב.

הבעיה: הלקוח הפוטנציאלי עוצר בדיוק בגלל הדברים שלא אמרתם.

**האסטרטגיה הטובה ביותר היא לשים את ההתנגדויות במרכז הפריים — ולפרק אותן אחת אחת.**

[IMAGE]

## פורמט "הפרכת מיתוסים" בפעולה

בפרויקט שיצרנו עבור אתר הלימודים "רגב גוטמן" — מוסד שעוזר לסטודנטים לעבור מבחני הסמכה בכלכלה, הנהלת חשבונות ושמאות מקרקעין — בחרנו לא לעשות סרט תדמית רגיל.

במקום להראות ממשקי פלטפורמה יפים ותלמידים מאושרים, הושבנו את שני המייסדים מול המצלמה ושאלנו אותם ישירות: **מה הפחדים הכי גדולים שסטודנטים מביאים אליכם?**

"האם זה רק שיעור זום?" — תשובה. "האם החומר מעודכן למבחן של השנה?" — תשובה. "האם זה מתאים למבחני מועצת רואי חשבון?" — תשובה.

כל תשובה היא פינת קנייה שנפתחת.

## למה שני מנחים עובד טוב יותר מ"ראש מדבר" אחד

הפורמט של שני מייסדים זה לצד זה מייצר שתי תוצאות:

**דינמיקה טבעית:** כשיש שניים בפריים, הם מדברים אחד עם השני — לא "אל" המצלמה. זה מפחית את תחושת הנאום הפרסומי ומגדיל את תחושת השיחה האותנטית.

**סמכות כפולה:** שני מייסדים שיושבים יחד משדרים יציבות ארגונית. זה קריטי כשמוכרים מוצר חינוכי שדורש מהלקוח השקעה של זמן וכסף. הוא צריך לדעת שמי שמאחורי המוצר לא הולך לשום מקום.

## הנוסחה: כנות + דיוק + מינימום הסחות דעת

שימו לב לדברים שלא רואים בסרט הזה: אין B-roll מוגזם, אין גרפיקה שמסיחה דעת, אין מוזיקה שמנסה לרגש. הרקע חשוך מעט, התאורה רכה ואחידה על הפנים.

**זה לא עצלות. זה בחירה.**

כשהמטרה היא טיפול בהתנגדויות — כל אלמנט נוסף שמוסיפים מחליש את המסר. הלקוח צריך לשמוע ולהאמין. לא להתרשם.

הכתוביות (Burned-in subtitles) הן האלמנט הגרפי היחיד שנוסף — כי הן עוזרות לצפייה ללא סאונד ברשתות, ומדגישות את נקודות המפתח של כל תשובה.

## כשהשיווק הכי טוב הוא השיחה הכי כנה

סרטון "הפרכת מיתוסים" עובד בגלל פרדוקס: ככל שאתם מדברים יותר על הפחדים של הלקוח, כך הוא סומך עליכם יותר. כי הוא מרגיש שאתם מבינים אותו — לא מוכרים לו.

**המסר ללקוחות:** אם יש לכם מוצר שאנשים מהססים לקנות בגלל חסמים ספציפיים שידועים לכם — זה הפורמט שיפרק אותם.`,
    bodyEn: `## Your Client's Fears Don't Disappear — They Show Up as Non-Purchases

Every product and service has purchase barriers. Your clients are full of concerns, questions, and stigmas before they pull out their credit card. Most businesses choose to ignore this and only show the good side in their videos.

The problem: the potential client stops exactly because of the things you didn't say.

**The best strategy is to put the objections center frame — and dismantle them one by one.**

[IMAGE]

## The 'Myth Busting' Format in Action

In the project we created for "Regev Gutman" — an institution that helps students pass certification exams in economics, accounting, and real estate appraisal — we chose not to make a regular brand film.

Instead of showing pretty platform interfaces and happy students, we sat both founders in front of the camera and asked them directly: **what are the biggest fears students bring to you?**

"Is it just a Zoom class?" — answered. "Is the material updated for this year's exam?" — answered. "Does it work for CPA board exams?" — answered.

Every answer is a purchase objection that gets opened up and resolved.

## Why Two Presenters Works Better Than One "Talking Head"

The format of two founders side by side produces two outcomes:

**Natural dynamics:** When there are two in frame, they talk to each other — not "at" the camera. This reduces the feeling of an advertising speech and increases the feeling of an authentic conversation.

**Double authority:** Two founders sitting together signal organizational stability. This is critical when selling an educational product that requires the client to invest time and money. They need to know the people behind the product aren't going anywhere.

## The Formula: Honesty + Precision + Minimum Distractions

Notice what's not in this film: no excessive B-roll, no distracting graphics, no music trying to move you emotionally. The background is slightly dark, the lighting is soft and even on the faces.

**This isn't laziness. It's a choice.**

When the goal is objection handling — every additional element you add weakens the message. The client needs to hear and believe. Not be impressed.

The burned-in subtitles are the only graphic element added — because they help viewing without sound on social media, and highlight the key points of each answer.

## When the Best Marketing Is the Most Honest Conversation

A "myth busting" video works because of a paradox: the more you talk about your client's fears, the more they trust you. Because they feel you understand them — not selling to them.

**The message to clients:** if you have a product that people hesitate to buy due to specific known barriers — this is the format that will dismantle them.`,
    date: "2024-10-01",
    tags: ["Content Strategy", "Objection Handling", "EdTech", "Conversion"],
    relatedServiceHref: "/services/corporate",
    relatedServiceLabelHe: "סרטי תוכן ופורמטים",
    relatedServiceLabelEn: "Content Films & Formats",
    relatedYoutubeId: "gE-8-eOtQg0",
  },
  {
    id: "10-questions-format",
    coverImage: "/blog/10-questions-cover.svg",
    titleHe: "פורמט '10 שאלות': הדרך הקצרה ביותר לבנות אמון, מודעות ותוכן לכל המדיות",
    titleEn: "The '10 Questions' Format: The Shortest Path to Building Trust, Awareness, and Content for All Platforms",
    excerptHe: "פורמט שכולם מבינים מהרגע הראשון, כיפי לצפייה, מתחלק ל-Micro-Content ועובד לשירות לקוחות, מיתוג עסקי ופרסום — מיום צילום אחד קצר.",
    excerptEn: "A format everyone understands from day one, fun to watch, splits into micro-content, and works for customer service, business branding, and advertising — from one short filming day.",
    readingTime: 4,
    bodyHe: `## למה הפורמט הזה עובד כל כך טוב

יש פורמטים שדורשים הסבר ארוך ללקוח. "10 שאלות" הוא לא אחד מהם.

ברגע שאתם אומרים "נצלם אתכם עונים על 10 שאלות" — הלקוח מבין מיד לאן זה הולך. אין חרדת תסריט, אין ויכוחים על מסרים, אין פחד מ"מה יצא". הפורמט הוא הביטחון. וכשהלקוח בטוח — הוא נינוח. וכשהוא נינוח — הוא אותנטי.

זו הסיבה שפורמט "10 שאלות" מייצר את אחת מרמות האותנטיות הגבוהות ביותר שניתן להשיג בצילום.

[IMAGE]

## מה הפורמט עושה עבורכם

**בונה אמון מהיר:** הצופה רואה אדם אמיתי עונה על שאלות אמיתיות. לא שחקן, לא תסריט מלוטש. זה עובד במיוחד בעסקים שבהם האמון הוא הנכס הכי חשוב — חינוך, שירותים מקצועיים, בריאות.

**מעשיר במידע:** 10 שאלות = 10 הזדמנויות לתת ערך. כל תשובה יכולה לפצח שאלה שהלקוחות שלכם שואלים כל יום, לפרק מיתוס נפוץ, או לספר משהו שרוב האנשים לא יודעים על תחום העיסוק.

**גמיש בשימוש:** מהסרטון המלא אפשר להפיק:
- 10 קטעי Micro-Content קצרים (שאלה + תשובה = 30-60 שניות)
- Story Highlights לאינסטגרם
- פוסטים ב-LinkedIn עם ציטוטים
- FAQ מונפש לעמוד נחיתה

**הכתיבה היא שחרור:** לא צריך תסריט מורכב. כותבים 10 שאלות, מסדרים אותן מ"קלה ומפתיעה" ל"מקצועית ומעמיקה", וזהו. אפשר לסיים את כתיבת הפרויקט תוך שעה.

## מה שחשוב: הפרזנטור

הפורמט עובד — אבל הוא לא מחל על הצד האנושי. הפרזנטור (בין אם מישהו מהצוות של הלקוח או פרזנטור חיצוני) צריך להיות נוח מול מצלמה.

לא "שחקן" — נוח. יש הבדל עצום.

מישהו שנוח מול מצלמה: מחייך ספונטנית, עונה בשפה הטבעית שלו, לא מרגיש שהוא "מצלם פרסומת". מישהו שלא נוח: תשובות רובוטיות, עיניים נעות, אנרגיה נוקשה שמרגישה על המסך בבירור.

**בפרויקט עבור רגב גוטמן** — מוסד לימודי לסטודנטים בכלכלה, הנהלת חשבונות ומתמטיקה — הפרזנטור הגיע עם אנרגיה טבעית ומנוסה. התוצאה: 10 שאלות שמרגישות כמו שיחה עם חבר שמקצוען בתחום שלו. בדיוק מה שסטודנט צריך לראות לפני שהוא בוחר מאיפה ללמוד.

## מתי להשתמש בפורמט הזה

- שירות לקוחות: "10 דברים שכולם שואלים על [המוצר שלנו]"
- מיתוג אישי: "10 שאלות ל[שם], [תפקיד]"
- פרסום: "10 סיבות למה [המוצר/השירות]"
- חינוך: "10 טעויות שסטודנטים עושים ב[תחום]"
- גיוס עובדים: "10 שאלות שתרצו לשאול לפני שאתם מגישים קורות חיים"

יום צילום אחד. עריכה קצרה. תוכן שעובד לחצי שנה.`,
    bodyEn: `## Why This Format Works So Well

Some formats require a long explanation to the client. "10 Questions" is not one of them.

The moment you say "we'll film you answering 10 questions" — the client immediately understands where it's going. No script anxiety, no arguments about messaging, no fear of "what will come out." The format is the security. And when the client is secure — they're relaxed. And when they're relaxed — they're authentic.

This is why the "10 Questions" format produces one of the highest levels of authenticity achievable in filming.

[IMAGE]

## What the Format Does for You

**Builds trust fast:** The viewer sees a real person answering real questions. Not an actor, not a polished script. This works especially in businesses where trust is the most important asset — education, professional services, healthcare.

**Enriches with information:** 10 questions = 10 opportunities to provide value. Each answer can crack a question your clients ask every day, debunk a common myth, or tell something most people don't know about your field.

**Flexible in use:** From the full video you can produce:
- 10 short micro-content clips (question + answer = 30-60 seconds)
- Instagram Story Highlights
- LinkedIn posts with quotes
- Animated FAQ for a landing page

**Writing is liberation:** No complex script needed. Write 10 questions, arrange them from "light and surprising" to "professional and deep," and that's it. You can finish writing the project in an hour.

## What Matters: The Presenter

The format works — but it doesn't forgive the human side. The presenter (whether someone from the client's team or an external presenter) needs to be comfortable on camera.

Not "an actor" — comfortable. There's a huge difference.

Someone comfortable on camera: smiles spontaneously, answers in their natural language, doesn't feel like they're "filming a commercial." Someone not comfortable: robotic answers, moving eyes, stiff energy that reads clearly on screen.

**In the project for Regev Gutman** — an educational institution for students in economics, accounting, and mathematics — the presenter arrived with natural, experienced energy. The result: 10 questions that feel like a conversation with a friend who's an expert in their field. Exactly what a student needs to see before choosing where to study.

## When to Use This Format

- Customer service: "10 things everyone asks about [our product]"
- Personal branding: "10 questions for [name], [role]"
- Advertising: "10 reasons why [product/service]"
- Education: "10 mistakes students make in [field]"
- Recruitment: "10 questions you'll want to ask before submitting your CV"

One filming day. Short editing. Content that works for six months.`,
    date: "2024-09-01",
    tags: ["Content Strategy", "Format Content", "Social Media", "Personal Branding"],
    relatedServiceHref: "/services/corporate",
    relatedServiceLabelHe: "סרטי תוכן ופורמטים",
    relatedServiceLabelEn: "Content Films & Formats",
    relatedYoutubeId: "gE-8-eOtQg0",
  },
  {
    id: "video-to-brand-identity",
    coverImage: "/blog/video-to-brand-cover.svg",
    titleHe: "מוידאו למותג: הדרך החכמה לייצר שפה ויזואלית מנצחת לחברות טכנולוגיה",
    titleEn: "From Video to Brand: The Smart Way to Build a Winning Visual Language for Tech Companies",
    excerptHe: "חברות טכנולוגיה מוציאות הון על ספרי מותג סטטיים שלא מתרגמים למסך. בפרויקט IRON DRONE בנינו שפה ויזואלית מלאה מתוך הסרט עצמו — והיא הפכה לסטנדרט הרשמי של חברה בורסאית.",
    excerptEn: "Tech companies spend fortunes on static brand books that don't translate to screen. In the IRON DRONE project we built a complete visual language out of the film itself — and it became a public company's official design standard.",
    readingTime: 6,
    bodyHe: `## הבעיה עם ספרי מותג סטטיים

תהליך מיתוג של חברות טכנולוגיה, תשתיות וביטחון דורש לעיתים קרובות תקציבי עתק המועברים למשרדי פרסום עבור יצירת "ספר מותג" סטטי. הבעיה מתחילה כשהמותג פוגש את המסך.

אותם עיצובים סטטיים — הצבע, הטיפוגרפיה, הגריד — לא מתרגמים היטב לעולמות הווידאו, האנימציה והדיגיטל הדינמי. יוצרים מחדש ממקום ה-וידאו, ושם מוצאים שהחוקים שונים לחלוטין.

**השפה הוויזואלית של מותג מודרני צריכה להיוולד מתוך תנועה.**

[IMAGE]

## IRON DRONE: כשסרט מוצר הפך לזהות חברה

בפרויקט שהפקנו עבור מערכת IRON DRONE מבית Airobotics / Ondas Group, ניגשנו לאתגר ייחודי: החברה הגיעה ללא Brand Book מסודר ובלי שפת אינפוגרפיקה שמתאימה למוצר ביטחוני מתקדם.

במקום לחכות לסוכנות מיתוג — בנינו את השפה בעצמנו, ישירות מתוך עולם הסרט.

## שלב 1: Visual DNA מאפס

מחלקת הארט פיתחה קונספט ויזואלי מלא:

**פלטת צבעים:** כחול-מתכת עמוק, ירוק HUD צבאי, שחור תפעולי. כל צבע נבחר כדי לשדר שני דברים בו-זמנית: טכנולוגיה מתקדמת + אמינות מבצעית.

**טיפוגרפיה:** פונטים טכנולוגיים עם ריווח מדוד שמדמה ממשק cockpit. כל מספר, כל מפרט טכני — נראה כאילו הוא חלק מממשק אמיתי של מערכת נשק.

**HUD/UI Elements:** ממשקי מסך שנבנו מאפס: נעילות מטרה, טווחי זיהוי, אינדיקטורי גובה ומהירות. כל אלמנט תוכנן כך שהמדהים בו הוא **שהוא נראה אמיתי**.

## שלב 2: האתגר הקולנועי — מהירות פוגשת דיוק

לסרט יש שני מצבי עריכה שצריכים לדור בשלום:

**Speed Ramp מהיר** — רגעי מרדף, טיסה, תנועת נחיל. הצופה חייב להרגיש אדרנלין, מהירות, כוח תפעולי. Drone-to-Drone Tracking אוויריים, זוויות Low-angle שמגדילות את האגרסיביות.

**Speed Ramp איטי** — רגעי הליבה הטכנולוגיים: שיגור, נעילת מטרה, יירוט. פה הסרט מאט. הצופה צריך לראות, להבין, ולהאמין. בדיוק בנקודה הזו נכנסות שכבות ה-HUD שמסבירות את המכניקה.

**סאונד-דיזיין כירורגי:** כל הופעה של גרפיקה "מקבעת" על צליל — בין אם זה ping של מכ"ם, buzz של מנוע חשמלי, או click של נעילה. הסנכרון בין עריכה לסאונד הוא מה שהופך סרט מוצר אינפורמטיבי לחוויה קולנועית.

## התוצאה: השפה הפכה לסטנדרט

מה שהתחיל כסרט מוצר הפך לתשתית מותגית: **הגרפיקה, האנימציה וה-HUD שפיתחנו לסרט אומצו על ידי ONDS כסטנדרט הרשמי** לכלל מערך השיווק שלהם.

**ROI כפול:** הלקוח הגיע לסרט, יצא עם זהות מותגית. ללא תוספת תקציב. ללא משרד פרסום.

זו לא עבודת סוכנות. זו שותפות אסטרטגית.`,
    bodyEn: `## The Problem with Static Brand Books

Branding processes for technology, infrastructure, and defense companies often require enormous budgets transferred to ad agencies for creating a static "brand book." The problem starts when the brand meets the screen.

Those static designs — color, typography, grid — don't translate well to the worlds of video, animation, and dynamic digital. You recreate from the video side, and there you find the rules are completely different.

**A modern brand's visual language needs to be born from motion.**

[IMAGE]

## IRON DRONE: When a Product Film Became a Company's Identity

In the project we produced for the IRON DRONE system by Airobotics / Ondas Group, we faced a unique challenge: the company arrived without an organized Brand Book and without an infographic language suited to an advanced defense product.

Instead of waiting for a branding agency — we built the language ourselves, directly from within the film's world.

## Stage 1: Visual DNA from Scratch

The art department developed a complete visual concept:

**Color palette:** Deep metal blue, military HUD green, operational black. Each color chosen to communicate two things simultaneously: advanced technology + operational reliability.

**Typography:** Technical fonts with measured spacing simulating a cockpit interface. Every number, every technical spec — looks as if it's part of a real weapons system interface.

**HUD/UI Elements:** Screen interfaces built from scratch: target locks, detection ranges, altitude and speed indicators. Every element designed so the remarkable thing about it is **that it looks real**.

## Stage 2: The Cinematic Challenge — Speed Meets Precision

The film has two editing modes that need to coexist:

**Fast Speed Ramp** — chase moments, flight, swarm motion. The viewer must feel adrenaline, speed, operational power. Aerial Drone-to-Drone Tracking, Low-angle shots that increase aggression.

**Slow Speed Ramp** — core technical moments: launch, target lock, intercept. Here the film slows. The viewer needs to see, understand, and believe. Exactly at this point the HUD layers enter to explain the mechanics.

**Surgical Sound Design:** Every graphic appearance "locks" on a sound — whether a radar ping, an electric motor buzz, or a lock click. The sync between editing and sound is what turns an informative product film into a cinematic experience.

## The Result: The Language Became the Standard

What started as a product film became brand infrastructure: **the graphics, animation, and HUD we developed for the film were adopted by ONDS as the official standard** for their entire marketing operation.

**Double ROI:** The client came for a film, left with a brand identity. No extra budget. No ad agency.

This isn't agency work. This is strategic partnership.`,
    date: "2024-02-10",
    tags: ["Defense Tech", "Motion Design", "Brand Identity", "Visual Language"],
    relatedServiceHref: "/services/ai",
    relatedServiceLabelHe: "הפקות AI וסרטי ביטחון",
    relatedServiceLabelEn: "AI & Defense Tech Productions",
    relatedYoutubeId: "N4iNxvFGA34",
  },
  {
    id: "content-package-raw-footage",
    coverImage: "/blog/content-package-cover.svg",
    titleHe: "מחומרי גלם לנכסים דיגיטליים: איך בונים קמפיין וידאו שלם מיומיים של צילום",
    titleEn: "From Raw Footage to Digital Assets: How to Build a Complete Video Campaign from Two Filming Days",
    excerptHe: "הטעות הנפוצה ביותר: לגשת להפקה עם מחשבה על תוצר אחד. אולפן הפקות מתקדם לא חושב על 'סרט' — הוא חושב על 'מאגר נכסים'. ניתוח פרויקט Green Wall.",
    excerptEn: "The most common mistake: approaching production thinking about one output. An advanced production studio doesn't think 'film' — it thinks 'asset bank'. A breakdown of the Green Wall project.",
    readingTime: 5,
    bodyHe: `## הטעות שמפסידה לכם כסף בכל הפקה

הטעות הנפוצה ביותר של מותגים וחברות היא לגשת להפקת וידאו מתוך מחשבה על תוצר סופי אחד. "אנחנו צריכים סרט תדמית", הם אומרים. "אחד. מלוטש. לאתר."

התוצאה: השקעה מלאה של זמן, תקציב ואנרגיה — בנכס אחד שמתיישן מהרגע שהוא עולה לאוויר, בעוד הרשתות החברתיות דורשות נוכחות שוטפת ומגוונת לכל אורך השנה.

**אולפן הפקות מתקדם לא חושב על "סרט". הוא חושב על "מאגר נכסים".**

[IMAGE]

## הפרויקט: Green Wall, 2 ימי צילום, חבילה שלמה

בפרויקט של חברת Green Wall — חברת קירות ירוקים וגגות ירוקים — ניגשנו לצילומים עם תכנון אסטרטגי מראש.

**יום 1 — ראיונות מרוכזים:** כל הדוברים, כל הלקוחות הממליצים, כל המנהלים — ליום אחד מאורגן. כל ראיון צולם בצורה שמאפשרת שני סוגי שימוש: חלק מהסרט המרכזי, **וגם** יחידה עצמאית עם חיתוך ראשון-אחרון.

**יום 2 — שטח ורחפן:** לוקיישנים מרובים, צילומי אוויר, B-roll של המוצר בסביבות שונות. כל שוט מצולם עם שלוש מטרות: Hero Video, אווירה קצרה, קמפיין ממומן.

מאותם חומרי גלם, חדר העריכה הוציא:

## 3 שכבות תוכן, 3 נקודות במשפך

**שכבה 1 — The Hero Video (סרט המותג המרכזי)**

סרט יוקרתי, צילום רחפן, סיפור מסגרת, Production Value גבוה. נועד לשבת בעמוד הבית, לפתוח פגישות עם לקוחות אסטרטגיים ומשקיעים. זו ה-Flagship — הכרטיס ביקור.

**שכבה 2 — Visual Shorts (סרטי אווירה, Top of Funnel)**

גישת "Less is More": עריכה מינימליסטית, קצב נכון, טיפוגרפיה נקייה — בלי קריינות, בלי ראיונות. **המוצר כל כך ויזואלי** (קירות ירוקים, גגות, טבע בתוך עיר) שהוא מוכר את עצמו. הסרטים האלה עוצרים גלילה, מייצרים מודעות ועובדים מצוין בקמפיינים ממומנים קצרים.

**שכבה 3 — Standalone Testimonials (הוכחה חברתית לטפטוף)**

3 סרטי המלצות עצמאיים מיום הראיונות — כל אחד מהם יחידת תוכן עצמאית. הלקוח מטפטף אותם לאורך הגאנט: פוסט LinkedIn השבוע, עמוד נחיתה לקמפיין הבא, שליחה ישירה ללידים מתלבטים.

## מה שהלקוח קיבל

| מה | לאיפה |
|---|---|
| Hero Video | עמוד בית, פגישות, YouTube |
| 2 Visual Shorts (עברית + אנגלית) | קמפיינים ממומנים, Instagram, LinkedIn |
| 3 Testimonials | עמודי נחיתה, ליד נורצ'ינג, LinkedIn |

**ימי צילום:** 2. **נכסים שיווקיים:** 6+. **תוכן לחצי שנה:** כן.

זו לא חשיבה של ספק צילום. זו חשיבה של שותף אסטרטגי.`,
    bodyEn: `## The Mistake That Costs You Money on Every Production

The most common mistake companies make is approaching video production thinking about one final output. "We need a brand film," they say. "One. Polished. For the website."

The result: full investment of time, budget, and energy — in one asset that ages from the moment it goes live, while social media demands ongoing, varied presence throughout the year.

**An advanced production studio doesn't think "film." It thinks "asset bank."**

[IMAGE]

## The Project: Green Wall, 2 Filming Days, Full Package

In the Green Wall project — a green walls and rooftop greenery company — we approached the filming with strategic planning upfront.

**Day 1 — Concentrated interviews:** All speakers, all recommending clients, all managers — in one organized day. Every interview was filmed in a way that allows two types of use: part of the main film, **and also** a standalone unit with its own opening and close.

**Day 2 — Field and drone:** Multiple locations, aerial footage, B-roll of the product in different environments. Every shot filmed with three purposes: Hero Video, short atmosphere, paid campaign.

From the same raw footage, the editing suite produced:

## 3 Content Layers, 3 Points in the Funnel

**Layer 1 — The Hero Video (Central Brand Film)**

A premium film with drone cinematography, narrative framework, and high production value. Designed to sit on the homepage, open meetings with strategic clients and investors. This is the Flagship — the business card.

**Layer 2 — Visual Shorts (Atmosphere Films, Top of Funnel)**

The "Less is More" approach: minimalist editing, the right rhythm, clean typography — no voiceover, no interviews. **The product is so visual** (green walls, rooftops, nature inside a city) that it sells itself. These films stop scrolling, generate awareness, and work well in short paid campaigns.

**Layer 3 — Standalone Testimonials (Social Proof for Dripping)**

3 standalone testimonial films from the interview day — each an independent content unit. The client drips them across the calendar: a LinkedIn post this week, a landing page for the next campaign, a direct send to hesitant leads.

## What the Client Received

| What | Where |
|---|---|
| Hero Video | Homepage, meetings, YouTube |
| 2 Visual Shorts (Hebrew + English) | Paid campaigns, Instagram, LinkedIn |
| 3 Testimonials | Landing pages, lead nurturing, LinkedIn |

**Filming days:** 2. **Marketing assets:** 6+. **Content for six months:** Yes.

This isn't the thinking of a filming vendor. This is the thinking of a strategic partner.`,
    date: "2024-05-01",
    tags: ["Content Strategy", "Max ROI", "Video Campaign", "Social Media"],
    relatedServiceHref: "/services/corporate",
    relatedServiceLabelHe: "חבילות תוכן אסטרטגיות",
    relatedServiceLabelEn: "Strategic Content Packages",
    relatedYoutubeId: "GoX5983yoQg",
  },
  {
    id: "akerstein-100-rebranding",
    coverImage: "/blog/akerstein-100-cover.svg",
    titleHe: "100 שנה לאקרשטיין: איך לוקחים מותג היסטורי ומותגים אותו מחדש לעתיד סינמטי",
    titleEn: "100 Years of Akerstein: How to Take a Historic Brand and Rebrand It for a Cinematic Future",
    excerptHe: "חברה בת 100 שנה עם ארכיון של דורות, מנהלים שמרנים ואין-ספור דיביזיות. האתגר: סרט אחד של 3 דקות שמחזיק את כולם — ואת הצופה. ניתוח מלא של מה שהפך את הפרויקט הזה לאחת העבודות המורכבות ביותר בתיק.",
    excerptEn: "A 100-year-old company with generational archives, conservative management, and countless divisions. The challenge: one 3-minute film that holds everyone — and the viewer. A full breakdown of what made this project one of the most complex in the portfolio.",
    readingTime: 7,
    bodyHe: `## כשהלקוח הוא מפלצת של מורכבות (המשמעות הטובה)

יש פרויקטים שבהם האתגר הגדול ביותר הוא לא הצילום ולא העריכה — אלא ההבנה מה הסרט הזה צריך לעשות, עבור מי, ואיך לרצות אנשים עם אג'נדות שונות בלי לאבד את הנשמה של הסיפור.

אקרשטיין היא חברה שמרנית, ותיקה, ועמוסה בהיסטוריה. 100 שנה, משפחות מייסדים, תעשייה כבדה, פרויקטים ארציים — ומנהלים לכל מחלקה שיש לכל אחד מהם דעה על מה הסרט "חייב להראות."

זה בדיוק הפרויקט שמוכיח עד כמה ניהול לקוח חכם שווה לפחות כמו ניהול ציוד.

[IMAGE]

## אתגר 1: ארכיון שמגיע מכמה מאות שנים

כשעובדים על סרט יובל למותג ותיק, מקבלים הרים של חומרים: **פילמים 8mm ו-16mm** ממייסדים, **תמונות שחור-לבן** שהוסרקו בנסיבות לא ברורות, **וידאו אנלוגי VHS** מהשמונים, ו-**צילומים דיגיטליים** מהעשור האחרון — כולם ביחסי מסך שונים ואיכויות שונות.

האתגר הוא לא "לנקות" אותם — זה בלתי אפשרי ולא רצוי. **האתגר הוא לכלול אותם בצורה שמרגישה כבחירה קולנועית, לא כמגבלה טכנית.**

הפתרון: להחליט מראש שחומרי הארכיון יהיו "חלון לזמן" — לא ינסו להיות 4K. הם מוצגים עם גרעיניות, צבע חם ומסגרות שמאותתות "זיכרון", ואז נחתכים חדשות לבקרים לצילומי הרחפן המודרניים. המעבר בין העתיק לחדש הופך למוטיב הויזואלי המרכזי של הסרט.

## אתגר 2: לגרום לחברה עם 100 דעות להסכים על 100 שניות

בפרויקטים של תאגידים גדולים, כל סמנכ"ל רוצה שה"זרוע שלו" תקבל מספיק מסך-טיים. כל מחלקת שיווק רוצה את המסרים שלה. כל מנהל בכיר מחפש את עצמו בין הפריימים.

הפתרון: **אסטרטגיית תסריט שמאחדת מבפנים.** במקום לרשום "נראה מפעל, אחר כך נראה פרויקט, אחר כך נראה עובד" — בנינו חוט סיפורי רגשי אחד: **החומרים שיוצרים את ישראל.** כל זרוע של אקרשטיין היא פרק בסיפור הזה — לא בגלל שהיא "חייבת להיכנס", אלא כי היא חלק מהנרטיב.

כשמנהלים שמרנים קיבלו את התסריט עם הלוגיקה הזו, הם הבינו שהסרט כבד עליהם **יותר** מאשר אם היו מגיעים עם דרישות. הם קיבלו בעלות על הנרטיב.

## אתגר 3: להחזיק 3 דקות קשב בלי לאבד קצב

שלוש דקות זה נצח בוידאו ברשת. הפתרון הוא לא "לקצר" — הפתרון הוא **קצב עריכה שמשנה עצימות כל 20-30 שניות.**

הסרט בנוי כגלים: פתיחה רחבה (אוויר, מחוות, גדולה), אחר כך צלילה פנימה (קלוז-אפ על טקסטורה, חומר, ידיים), אחר כך שוב פתיחה. הקצב הזה מונע עייפות חזותית ומייצר תחושה של נשימה.

בנוסף, מוזיקת הרקע מאפשרת "עיגון קצבי" — בכל שינוי עצימות מוזיקלי, העריכה מחזירה קשב.

## מה שיוצא: נכס חברתי מולטי-פונקציונלי

הסרט הזה לא נועד רק ל-YouTube. הוא מוגש:

- **בפתיחת כנסים ואירועי יובל** — יצר "וואו מומנט" בפני קהל חיצוני ועובדים
- **בישיבות דירקטוריון ומשקיעים** — מיצב את אקרשטיין כמובילת שוק עם 100 שנות עמידה
- **כנכס Employer Branding** — עובדים ראו את עצמם כחלק מסיפור גדול מהם, וגאוות היחידה עלתה

**מיתוג מחדש לא אומר לזרוק את העבר. לפעמים זה אומר לגרום לעבר להיות הנכס הכי חזק שיש לך.**`,
    bodyEn: `## When the Client Is a Monster of Complexity (in the Best Way)

There are projects where the biggest challenge isn't the filming or the editing — it's understanding what the film needs to do, for whom, and how to satisfy people with different agendas without losing the soul of the story.

Akerstein is a conservative, veteran company loaded with history. 100 years, founding families, heavy industry, national projects — and managers in every department, each with opinions on what the film "must show."

This is exactly the project that proves how much smart client management is worth, at least as much as equipment management.

[IMAGE]

## Challenge 1: An Archive Spanning Several Eras

When you work on a legacy brand's anniversary film, you receive mountains of materials: **8mm and 16mm films** from founders, **black-and-white photos** scanned under unclear circumstances, **analog VHS video** from the eighties, and **digital footage** from the last decade — all in different aspect ratios and qualities.

The challenge isn't to "clean" them — that's impossible and undesirable. **The challenge is to include them in a way that feels like a cinematic choice, not a technical limitation.**

The solution: decide upfront that archive materials will be a "window in time" — they won't try to be 4K. They're presented with grain, warm color, and framing that signals "memory," then cut sharply to modern drone footage. The transition between old and new becomes the film's central visual motif.

## Challenge 2: Getting a Company with 100 Opinions to Agree on 100 Seconds

In large corporate projects, every VP wants their "arm" to get enough screen time. Every marketing department wants its messages. Every senior manager looks for themselves between the frames.

The solution: **a script strategy that unifies from within.** Instead of writing "we'll show a factory, then a project, then an employee" — we built one emotional narrative thread: **the materials that build Israel.** Every arm of Akerstein is a chapter in that story — not because it "has to fit in," but because it's part of the narrative.

When conservative managers received the script with this logic, they understood that the film honored them **more** than if they'd arrived with demands. They received ownership of the narrative.

## Challenge 3: Holding 3 Minutes of Attention Without Losing Pace

Three minutes is an eternity in online video. The solution isn't to "shorten" — it's **editing rhythm that changes intensity every 20-30 seconds.**

The film is built in waves: wide opening (aerial, gestures, scale), then diving inward (closeup on texture, material, hands), then opening wide again. This rhythm prevents visual fatigue and creates a breathing feeling.

Additionally, the backing music allows "rhythmic anchoring" — with every musical intensity shift, editing recaptures attention.

## What Comes Out: A Multi-Functional Corporate Asset

This film wasn't designed just for YouTube. It's delivered:

- **At conference and anniversary event openings** — created a "wow moment" in front of external audiences and employees
- **At board and investor meetings** — positioned Akerstein as a market leader with 100 years of standing
- **As an Employer Branding asset** — employees saw themselves as part of a story bigger than themselves, and unit pride soared

**Rebranding doesn't mean throwing away the past. Sometimes it means making the past the most powerful asset you have.**`,
    date: "2025-01-20",
    tags: ["Corporate Branding", "Archive Production", "Rebranding", "Industrial"],
    relatedServiceHref: "/services/corporate",
    relatedServiceLabelHe: "סרטי תדמית ומיתוג ארגוני",
    relatedServiceLabelEn: "Corporate Branding & Identity Films",
    relatedYoutubeId: "GFkN83F-DBU",
  },
  {
    id: "corporate-event-marketing-engine",
    coverImage: "/blog/corporate-event-cover.svg",
    titleHe: "אל תתנו לאירוע שלכם להסתיים כשהאורות כבים: איך הופכים כנס חברה לנכס שיווקי מתמשך",
    titleEn: "Don't Let Your Event End When the Lights Go Out: How to Turn a Corporate Conference into a Lasting Marketing Asset",
    excerptHe: "חברות משקיעות חודשים בתכנון אירוע, ואז האורות כבים — וזהו. בסביבה השיווקית המודרנית, זה פספוס אדיר. תיעוד אירועים עסקיים הוא כבר מזמן לא מזכרת — הוא מנוע תוכן.",
    excerptEn: "Companies spend months planning an event, then the lights go out — and that's it. In today's marketing environment, that's a massive missed opportunity. Corporate event documentation is no longer a keepsake — it's a content engine.",
    readingTime: 5,
    bodyHe: `## הפספוס הכי יקר בשיווק ארגוני

חברות וארגונים משקיעים תקציבים עצומים וחודשים ארוכים של תכנון בהפקת אירועים עסקיים. כולם מגיעים, נהנים, ואז האורות כבים — והאירוע נשאר בעיקר כחשבוניות מהקייטרינג וזיכרון רחוק.

בסביבה העסקית המודרנית, זה פספוס שיווקי אדיר.

אם אתם כבר משקיעים בהפקת אירוע — התיעוד שלו הוא לא "בונוס נחמד". הוא חובה אסטרטגית שמאפשרת לכם לסחוט את המקסימום מהתקציב ולייצר חומרי שיווק שממשיכים לעבוד חודשים קדימה.

[IMAGE]

## מה שלרוב מפספסים

רוב החברות חושבות על תיעוד אירוע כסרטון אחד: "Recap מהכנס." זה טוב, אבל זה עשירית מהאפשרות האמיתית.

אירוע עסקי אחד הוא בעצם **מכרה תוכן** שמספק:

**סמכות מקצועית (Thought Leadership):** הרצאות, פאנלים, ראיונות מומחים — כל אלה, כשנערכים נכון, הופכים לסדרת תוכן ב-LinkedIn שמבססת את מומחיות החברה חודשים אחרי שהכנס הסתיים.

**Employer Branding חי:** אנרגיה קבוצתית אמיתית, עובדים שנהנים, מנהלים שנגישים — זה לא ניתן לבים. סרטון אירוע מלוטש שמראה שהחברה משקיעה בעובדים שלה הוא מגנט גיוס שעובד 24/7.

**Micro-Content לגאנט השיווקי:** מ-15 שניות לסטוריז ועד ציטוטים של נואמים בגרפיקה — אירוע אחד יכול לספק תוכן לחצי שנה שלמה.

## איך אנחנו עובדים באירועים

הגישה שלנו היא **Run-and-Gun Filming**: צוות קל, מנוסה ובלתי נראה שלוכד את האנרגיה האמיתית של האירוע — בלי לעצור אנשים, בלי להפריע לזרימה, בלי חצובות שחוסמות מעברים.

**סאונד מהמיקסר:** כשיש נואם על במה, הסאונד שלנו מגיע ישיר מהמיקסר של האירוע — תוצאה? הקלטות הרצאות שאפשר להשתמש בהן, לא רק ב-B-roll.

**תכנון מודולרי מראש:** לפני האירוע, אנחנו מגדירים יחד את ה"קוביות" — מה צריך לסרטון הסיכום, מה לרשתות, מה להרצאות מלאות. כל שוט מצולם עם המטרה הסופית בראש.

**עריכה ב-3 רמות:** סרטון סיכום קצבי (2-3 דקות), גרסאות קצרות לרשתות (30-60 שניות), והרצאות מלאות עם עריכה נקייה וכותרות.

## התוצאה: המשכה מעבר לאולם

אירוע שתועד נכון ממשיך להניב ערך חודשים אחרי שהוא הסתיים:

- פוסטי LinkedIn עם ציטוטים ורגעי מפתח → Thought Leadership
- סרטוני Reel קצרים → מיתוג מעסיק ברשתות
- הרצאות מלאות ב-YouTube → שימור ידע ארגוני
- Story arcs של "מאחורי הקלעים" → אנושיות ותרבות ארגונית

**אל תשארו רק עם החשבוניות מהקייטרינג. תצאו מכל אירוע עם בנק תכנים שמציג את החברה שלכם בשיא תפארתה.**`,
    bodyEn: `## The Most Expensive Miss in Corporate Marketing

Companies and organizations invest enormous budgets and long months of planning into producing business events. Everyone shows up, has a great time, the lights go out — and the event lives on mainly as catering invoices and a distant memory.

In today's business environment, that's a massive marketing miss.

If you're already investing in producing an event — documenting it isn't a "nice bonus." It's a strategic necessity that lets you maximize your budget and generate marketing content that keeps working months ahead.

[IMAGE]

## What Most Companies Miss

Most companies think about event documentation as one video: "A conference recap." That's fine, but it's a tenth of the real opportunity.

One business event is essentially a **content mine** that provides:

**Thought Leadership:** Lectures, panels, expert interviews — all of these, when edited correctly, become a LinkedIn content series that establishes the company's expertise months after the conference ended.

**Live Employer Branding:** Real group energy, employees enjoying themselves, accessible managers — this can't be faked. A polished event video showing the company invests in its people is a recruitment magnet working 24/7.

**Micro-Content for the Marketing Calendar:** From 15-second Stories to speaker quote graphics — one event can supply content for an entire half-year.

## How We Work at Events

Our approach is **Run-and-Gun Filming**: a light, experienced, near-invisible crew that captures the real energy of the event — without stopping people, disrupting flow, or blocking walkways with tripods.

**Sound from the mixer:** When there's a speaker on stage, our sound comes directly from the event's mixer — result? Lecture recordings you can actually use, not just B-roll.

**Modular planning upfront:** Before the event, we define together the "building blocks" — what's needed for the recap video, what for social media, what for full lectures. Every shot is filmed with the final purpose in mind.

**Editing at 3 levels:** A rhythmic recap video (2-3 minutes), shorter social versions (30-60 seconds), and full lectures with clean editing and titles.

## The Result: Momentum Beyond the Venue

An event documented correctly keeps generating value months after it ended:

- LinkedIn posts with quotes and key moments → Thought Leadership
- Short Reel videos → Employer branding on social media
- Full lectures on YouTube → Organizational knowledge retention
- "Behind the scenes" story arcs → Humanity and company culture

**Don't walk away with just the catering invoices. Walk out of every event with a content bank that presents your company at its finest.**`,
    date: "2025-03-10",
    tags: ["Corporate Events", "Employer Branding", "Content Strategy", "LinkedIn"],
    relatedServiceHref: "/services/corporate",
    relatedServiceLabelHe: "תיעוד אירועים ומיתוג מעסיק",
    relatedServiceLabelEn: "Event Documentation & Employer Branding",
    relatedYoutubeId: "M0EhoVJsxJM",
  },
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
  {
    id: "corporate-business-card-film",
    coverImage: "/blog/corporate-business-card-cover.svg",
    titleHe: "סרט 'כרטיס הביקור' התאגידי: מתי הפורמט הקלאסי הוא הבחירה הנכונה",
    titleEn: "The Corporate 'Business Card' Film: When the Classic Format Is the Right Choice",
    excerptHe: "לא כל סרט חייב להיות פורץ דרך. כשהמטרה היא להוכיח גודל, יציבות וסמכות — ה'כרטיס ביקור' התאגידי הוא הכלי החד ביותר בארסנל.",
    excerptEn: "Not every film has to be groundbreaking. When the goal is to prove scale, stability, and authority — the corporate 'business card' is the sharpest tool in the arsenal.",
    readingTime: 5,
    bodyHe: `## הפרדוקס של הפורמט ה"שמרני"

בתעשיית הווידאו יש נטייה לרומנטיזציה: כולם רוצים "פורמט פורץ דרך", "נרטיב בלתי צפוי", "מהלך קריאייטיבי מפתיע". זה הגיוני כשמדובר בסרטוני ויראליות, קמפיינים לצרכן הסופי, או מיתוג מעסיק.

אבל יש לקוחות שונים לחלוטין: **חברות נדל"ן מניב, קרנות תשתית, תאגידים פיננסיים.** הלקוח שלהם — משקיע, בנק, שוכר עוגן — לא מחפש יצירתיות. הוא מחפש ביטחון.

לסרט כזה יש שם: **"כרטיס ביקור" תאגידי.** ולפורמט הזה יש תפקיד ספציפי מאוד.

[IMAGE]

## מה המסר האמיתי שסרט תדמית תאגידי מעביר

כשאשטרום נכסים — חברת נדל"ן מניב עם פורטפוליו של מגדלי משרדים, פארקים לוגיסטיים ומרכזי מסחר ברחבי ישראל — יצאה להפיק סרט תדמית, הם לא ביקשו "שיר אהבה למשרדים שלהם". הם ביקשו ויזיטקארטה שתענה על שאלה אחת:

**"למה אנחנו כדאיים לך כשותף, כשוכר, כמשקיע?"**

התשובה לשאלה הזו בנויה מארבעה אלמנטים:

### 1. ותק + היסטוריה = ביטחון
"הוקמה ב-1990" זה לא רק תאריך — זה "אנחנו שרדנו משבר 2008, קורונה, ועוד." חברה שפועלת 30+ שנה בנדל"ן מסחרי ישראלי עברה מחזורי שוק. זה מה שמשקיע רוצה לדעת.

### 2. פריסה ארצית = סקייל
רשימת הערים — תל אביב, הרצליה, חיפה, ירושלים, באר שבע — היא לא שיווק. זו הוכחה שלחברה יש **גב לוגיסטי** ולא רק פרויקט מקומי אחד.

### 3. PropTech = שדרוג תפיסתי
הצגת AshtromHost — האפליקציה לניהול הנכס — היא "טוויסט" שהופך חברת נדל"ן "אפורה" לחברת **PropTech**. עבור שוכרים צעירים, חברות טכנולוגיה, ושותפים בינלאומיים: זה הפרש בין "מוציא שכירות" לבין "ספק חווית עבודה".

### 4. ESG = כניסה לשיחה הגלובלית
LEED Gold ופאנלים סולאריים אינם נחמדות. בשוק הנדל"ן העסקי של 2024, **חברות Enterprise גדולות מחויבות לדיווח ESG.** הן לא יכולות להיכנס לבניין שאינו עומד בתקנים. כלומר — לנכס ירוק יש שוק שכירים שבניין "רגיל" לא ניגש אליו.

## למה רחפן הוא הכלי הכי חסכוני להוכחת גודל

בנדל"ן מסחרי, רחפן הוא לא "טרנד" — הוא **הפתרון ההנדסי** לבעיה ספציפית: איך מראים בניין של 50,000 מ"ר, מגרש בנייה פעיל, ופארק שלם — בלי להוציא מאות אלפים על תשתיות צילום?

תשובה: טיסת רחפן אחת + עורך טוב = אמינות ויזואלית שעולה על כל שחזור גרפי.

המעבר בין **אתר בנייה פעיל** → **מגדל גמור ומאוכלס** בסרט אחד עושה משהו שמצגות פאוורפוינט לא מצליחות: **הוא מוכיח שהחברה מסיימת פרויקטים.**

## מבנה ה"כרטיס ביקור" התאגידי — תבנית עבודה

**פתיחה (0:00–0:15):** הצהרת זהות. שם + נתון מרכזי (שנת ייסוד / מ"ר / ערים).

**גוף (0:15–1:00):** פאזות פעילות: פרויקטים → שירותים → טכנולוגיה → קיימות. כל פאזה 10-15 שניות, ויזואל ספציפי, טקסט מינימלי.

**סיכום (1:00–1:30):** Call to Action מרוסן. לא "התקשרו עכשיו!" אלא "זאת אשטרום." הרושם הוא הפנייה לפעולה.

## מתי **לא** לבחור בפורמט הזה

סרט "כרטיס ביקור" תאגידי הוא הבחירה הלא נכונה כש:

- **הקהל הוא צרכן סופי** — הם רוצים רגש, לא נתונים
- **המוצר חדש ולא מוכר** — צריך הסבר, לא הפגנת גודל
- **המטרה היא ויראליות** — הפורמט הזה לא מיועד לשיתוף ברשתות
- **הקמפיין הוא גיוס המונים** — שם הרגש הוא הכל

אבל כשמדובר ב-**B2B ארגוני, שוק נדל"ן, תשתיות, פיננסים** — הפורמט הזה לא "ישן". הוא **מדויק**.

---

ב-The Video Shop אנחנו יודעים לזהות מתי הפרויקט דורש "פרץ קריאייטיבי" ומתי הוא דורש **ביצוע מקצועי ומדויק של פורמט מנוסה.** שתי היכולות האלה שוות בדיוק אותו דבר.`,
    bodyEn: `## The Paradox of the "Conservative" Format

There's a tendency in video production to romanticize: everyone wants a "groundbreaking format," "unexpected narrative," "surprising creative move." That makes sense for viral content, B2C campaigns, or employer branding.

But there are completely different clients: **commercial real estate companies, infrastructure funds, financial corporations.** Their customer — investor, bank, anchor tenant — isn't looking for creativity. They're looking for confidence.

This type of film has a name: the corporate **"business card."** And this format has a very specific role.

[IMAGE]

## What a Corporate Brand Film Really Communicates

When Ashtrom Properties — a commercial real estate company with a portfolio of office towers, logistics parks, and commercial centers across Israel — set out to produce a brand film, they weren't asking for a "love letter to their offices." They were asking for a calling card that answers one question:

**"Why are we worth it — as a partner, as a tenant, as an investor?"**

The answer to that question is built from four elements:

### 1. Longevity + History = Confidence
"Founded in 1990" isn't just a date — it's "we survived 2008, COVID, and more." A company operating 30+ years in Israeli commercial real estate has been through market cycles. That's what an investor wants to know.

### 2. National Footprint = Scale
The list of cities — Tel Aviv, Herzliya, Haifa, Jerusalem, Beer Sheva — isn't marketing. It's proof the company has **logistical backbone** and not just one local project.

### 3. PropTech = Perceptual Upgrade
Showcasing AshtromHost — the property management app — is a "twist" that turns a "gray" real estate company into a **PropTech** company. For younger tenants, tech companies, and international partners: this is the difference between "landlord" and "work experience provider."

### 4. ESG = Entry into the Global Conversation
LEED Gold and solar panels aren't nice-to-haves. In the 2024 commercial real estate market, **large enterprise companies are committed to ESG reporting.** They can't enter a building that doesn't meet standards. Meaning — a green asset has a tenant market that a "regular" building simply can't access.

## Why Drone Footage Is the Most Cost-Efficient Way to Prove Scale

In commercial real estate, drone footage isn't a "trend" — it's the **engineering solution** to a specific problem: how do you show a 50,000 sqm building, an active construction site, and an entire park — without spending hundreds of thousands on camera infrastructure?

Answer: one drone flight + a good editor = visual credibility that surpasses any graphic reconstruction.

The cut from **active construction site** → **finished, occupied tower** in one film does something PowerPoint presentations cannot: **it proves the company finishes projects.**

## The Corporate "Business Card" Structure — A Working Template

**Opening (0:00–0:15):** Identity statement. Name + core metric (founding year / sqm / cities).

**Body (0:15–1:00):** Activity phases: projects → services → technology → sustainability. Each phase 10-15 seconds, specific visual, minimal text.

**Close (1:00–1:30):** Restrained call to action. Not "Call now!" but "This is Ashtrom." The impression *is* the call to action.

## When **Not** to Choose This Format

The corporate "business card" film is the wrong choice when:

- **The audience is the end consumer** — they want emotion, not data
- **The product is new and unknown** — it needs explanation, not a show of force
- **The goal is virality** — this format isn't designed for social sharing
- **The campaign is crowdfunding** — there, emotion is everything

But when it comes to **B2B enterprise, real estate, infrastructure, finance** — this format isn't "old." It's **precise**.

---

At The Video Shop, we know how to identify when a project demands a "creative leap" and when it demands **professional, precise execution of a proven format.** Both capabilities are worth exactly the same thing.`,
    date: "2023-04-15",
    tags: ["Real Estate", "Corporate", "Strategy", "B2B"],
    relatedYoutubeId: "ome2LtSiFWQ",
    relatedServiceHref: "/services/realestate",
    relatedServiceLabelHe: "סרטי נדל\"ן ותשתיות",
    relatedServiceLabelEn: "Real Estate & Infrastructure Films",
  },
  {
    id: "hybrid-distribution-employer-branding",
    coverImage: "/blog/hybrid-distribution-cover.svg",
    titleHe: "הפקה אחת, ארבעה ערוצים: המדריך למערך ההפצה ההיברידי של מיתוג מעסיק",
    titleEn: "One Production, Four Channels: The Guide to Hybrid Distribution for Employer Branding",
    excerptHe: "הגרסה הקצרה של 'להיות אשטרומיסט' לא הייתה אחרי-מחשבה — היא הייתה חלק מהתכנון מהיום הראשון. כך בונים מערך הפצה שמגיע לכל קהל ביומו ובפורמט שלו.",
    excerptEn: "The short version of 'Being an Ashtromist' wasn't an afterthought — it was part of the plan from day one. Here's how to build a distribution system that reaches every audience on their terms.",
    readingTime: 5,
    bodyHe: `## כשגרסה "קצרה" היא לא פשרה — היא אסטרטגיה

רוב הארגונים מגיעים לחדר עריכה עם שאלה אחת: "כמה קצר אנחנו חייבים לעשות את זה?" זו השאלה הלא נכונה.

השאלה הנכונה: **לאיזה קהל, באיזה פלטפורמה, ובאיזה שלב של המשפך?**

כשעבדנו עם קבוצת אשטרום על קמפיין "להיות אשטרומיסט", תכננו מהיום הראשון שתי גרסאות עם מטרות שונות לחלוטין — לא שתי ערכות חיתוך של אותו סרט.

[IMAGE]

## הגרסה הארוכה: נרטיב לגיוס ברצינות

הגרסה הארוכה נועדה לקהל שכבר שוקל להגיש מועמדות לאשטרום — או שמתלבט. היא עונה לשאלות: **מי אשטרום? מה ה-DNA? למה זה לא עוד עבודה?**

הפורמט: ריאיונות מעמיקים עם עובדים מכל שכבות הארגון, שילוב צילומי רחפן הנותנים פרספקטיבה על הפריסה הארצית, ועריכה שמאפשרת לכל דובר סיפור מלא בלי לפצל.

**הפלטפורמות:** עמוד קריירות, מצגות גיוס, לינקדאין בפוסט מסודר.

## הגרסה הקצרה: עצירת גלילה להנעת פעולה

45 שניות. עריכת "פינג-פונג" — חיתוך בין דוברים *בתוך* משפט. לוקיישן חדש כל 3-4 שניות. טיפוגרפיה עם ה-+ המותגי בכל מעבר.

**המטרה:** לא לספר סיפור — להדליק סקרנות. מי שצפה בשלמות מגיע לגרסה הארוכה. מי שרק גלל — נחשף לשם.

**הפלטפורמות:** Instagram Reels, LinkedIn Stories, פרסום ממומן לגיל/תחום.

## למה "צלם פעם אחת, חתוך פעמים רבות" עובד

**עלות:** יום צילום אחד. שתי גרסאות שיכולות להצדיק כל אחת בנפרד את עלות ההפקה.

**עקביות:** אותם עובדים, אותה אסתטיקה ויזואלית, אותו DNA — אבל אורז שונה לפלטפורמה שונה.

**מדידה:** ניתן להשוות ביצועים: מה גרסת הרחפן עשתה לעומת הראיון האישי? הנתונים האלה שייכים לך לפרויקט הבא.

## ארבעת ערוצי ההפצה לכל קמפיין מיתוג מעסיק

### 1. גיוס חיצוני (External Recruitment)
**מה:** גרסה ארוכה + גרסה קצרה לפרסום
**איפה:** LinkedIn Ads, מצגת HR, דף קריירות
**מטרה:** המרת מועמד פסיבי למועמד אקטיבי

### 2. גיוס פנימי (Internal Mobility)
**מה:** גרסה ארוכה + קטעים ספציפיים לפי מחלקה
**איפה:** אינטרא-נט, אסיפות עובדים, Slack/Teams
**מטרה:** עידוד ניידות פנימית, חיזוק שייכות

### 3. פרסום מותג מעסיק (Employer Brand Awareness)
**מה:** גרסה קצרה ל-Reels/TikTok, נכסי Story
**איפה:** כל הפלטפורמות, פרסום ממומן
**מטרה:** בניית מודעות שנים לפני שמועמד מחפש עבודה

### 4. ייצוג B2B (Business Identity)
**מה:** גרסה ארוכה + ציטוטים לתדמית עסקית
**איפה:** About Us, מצגות לשותפים, אירועי תעשייה
**מטרה:** "אנחנו לא רק חברה, אנחנו תרבות"

## התכנון מתחיל לפני ההפקה — לא אחריה

הטעות הכי נפוצה: צולמה הפקה מלאה, אחר כך שואלים "האם יש משהו לחתוך לרשתות?" בשלב הזה — כמעט תמיד התשובה היא לא. כי לא צולמו Reaction shots מהירים, לא צולמו takes עם קצב פינג-פונג, לא תוכנן Timeline שמאפשר קיצור.

**המערך ההיברידי בנוי מהסטוריבורד. לא מחדר העריכה.**

---

ב-The Video Shop כל פרויקט מיתוג מעסיק מתחיל בשאלה: מה הערוצים שלך ומה המסר לכל קהל? רק אחרי שיש תשובה ברורה — מגיעים לסט.`,
    bodyEn: `## When a "Short" Version Isn't a Compromise — It's a Strategy

Most organizations arrive at the editing room with one question: "How short do we have to make this?" That's the wrong question.

The right question: **Which audience, on which platform, at which funnel stage?**

When we worked with Ashtrom Group on the "Being an Ashtromist" campaign, we planned from day one for two versions with completely different goals — not two cut-down versions of the same film.

[IMAGE]

## The Long Version: Narrative for Serious Candidates

The long version is designed for an audience already considering applying to Ashtrom — or wavering. It answers: **Who is Ashtrom? What's the DNA? Why is this not just another job?**

The format: in-depth interviews with employees from across the organization, drone footage providing perspective on the national footprint, and editing that gives each speaker a complete story without splitting it.

**Platforms:** careers page, HR presentations, LinkedIn long-form post.

## The Short Version: Scroll-Stopping Action Trigger

45 seconds. "Ping-pong" editing — cutting between speakers *mid-sentence*. New location every 3-4 seconds. Brand "+" typography on every transition.

**The goal:** not to tell a story — to ignite curiosity. Those who watch in full arrive at the long version. Those who just scrolled — got exposed to the name.

**Platforms:** Instagram Reels, LinkedIn Stories, paid advertising by age/field.

## Why "Film Once, Cut Many Times" Works

**Cost:** one filming day. Two versions that can each individually justify the production cost.

**Consistency:** same employees, same visual aesthetic, same DNA — but different packaging for different platforms.

**Measurement:** performance comparison is possible: what did the drone version achieve vs. the personal interview? That data belongs to you for the next project.

## Four Distribution Channels for Every Employer Branding Campaign

### 1. External Recruitment
**What:** long version + short version for advertising
**Where:** LinkedIn Ads, HR presentation, careers page
**Goal:** convert passive candidate to active candidate

### 2. Internal Mobility
**What:** long version + segments by department
**Where:** intranet, all-hands meetings, Slack/Teams
**Goal:** encourage internal mobility, reinforce belonging

### 3. Employer Brand Awareness
**What:** short version for Reels/TikTok, Story assets
**Where:** all platforms, paid advertising
**Goal:** build awareness years before a candidate job-hunts

### 4. B2B Representation
**What:** long version + quotes for corporate identity
**Where:** About Us, partner presentations, industry events
**Goal:** "We're not just a company — we're a culture"

## Planning Starts Before Production — Not After

The most common mistake: a full production is filmed, then someone asks "Is there anything to cut for social?" At that stage — almost always the answer is no. Because fast reaction shots weren't filmed, ping-pong paced takes weren't done, no timeline was designed that allows shortening.

**The hybrid system is built from the storyboard. Not from the editing room.**

---

At The Video Shop, every employer branding project starts with a question: what are your channels and what's the message for each audience? Only once there's a clear answer — do we arrive on set.`,
    date: "2023-07-10",
    tags: ["Employer Branding", "Strategy", "Distribution"],
    relatedYoutubeId: "loW4i8ZOLNA",
    relatedServiceHref: "/services/recruitment",
    relatedServiceLabelHe: "סרטי Employer Branding",
    relatedServiceLabelEn: "Employer Branding Videos",
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
