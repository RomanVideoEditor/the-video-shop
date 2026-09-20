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
    id: "ashtromist-flagship-short",
    youtubeId: "8RbqUaMR9_c",
    titleHe: "להיות אשטרומיסט זה קודם כל אופי | פרויקט הדגל — גרסה קצרה",
    titleEn: "Being an Ashtromist Is First of All Character | Flagship Campaign — Short Version",
    challengeHe: "לקחת קונצרן בנייה ותשתיות עצום עם אלפי עובדים בעשרות אתרים ולזקק את כולם לזהות ארגונית אחת שמניעה גאווה, שייכות וגיוס. הקמפיין כולו נבנה סביב שאלה אחת: מה עושה אדם לאשטרומיסט?",
    challengeEn: "Take a massive construction and infrastructure conglomerate with thousands of employees across dozens of sites and distill them into one organizational identity that drives pride, belonging, and recruitment. The entire campaign was built around one question: what makes a person an Ashtromist?",
    solutionHe: "מסע צילומים ארצי אינטנסיבי: אתרי בנייה פעילים, משרדים, חמ\"לים ותשתיות בכל רחבי ישראל. בימוי non-actors שהוציא גאווה ואותנטיות אמיתית. עריכת 'פינג-פונג' קצבית עם מעברים בין דוברים תוך משפט, שינויי לוקיישן תכופים וצילומי רחפן של מגדלי LYFE. מאותה הפקה: גרסה ארוכה לקמפיין, גרסה קצרה לרשתות, ועשרות נגזרות לפייסבוק, גוגל ודיספליי. 'אשטרומיסט' הפך לזהות — לא לסיסמה.",
    solutionEn: "An intensive nationwide filming journey: active construction sites, offices, command centers, and infrastructure across Israel. Non-actor directing that brought out real pride and authenticity. Rhythmic 'ping-pong' editing with cuts between speakers mid-sentence, frequent location changes, and drone footage of the LYFE towers. From the same production: a long campaign version, a short social version, and dozens of derivatives for Facebook, Google, and display ads. 'Ashtromist' became an identity — not a slogan.",
    category: "recruitment",
    client: "Ashtrom Group",
    duration: "0:45",
    date: "2024-06-01",
  },
  {
    id: "airobotics-developer-program",
    youtubeId: "URDNpEwabCc",
    titleHe: "Airobotics Developer Program: סרט תדמית והכרזה לפלטפורמת רחפנים תעשייתיים",
    titleEn: "Airobotics Developer Program: Brand & Announcement Film for Industrial Drone Platform",
    challengeHe: "להכריז על תוכנית מפתחים חדשה לפלטפורמת רחפנים אוטונומיים תעשייתיים — קהל מפתחי תוכנה ב-B2B — ולהסביר טכנולוגיה מורכבת (API, מכונה וירטואלית, Payload, Airbase) בצורה ויזואלית ברורה ומשכנעת.",
    challengeEn: "Announce a new developer program for an industrial autonomous drone platform — targeting B2B software developers — and explain complex technology (API, virtual machine, payload, Airbase) in a visually clear and compelling way.",
    solutionHe: "מבנה Host-driven עם מנחה אחת (סיוון אברהמי) שמובילה את כל הסרטון — ממשרדי הפיתוח דרך מתקן הניסויים ועד לקריאה לפעולה. שפה ויזואלית תעשייתית נקייה בפלטת שחור-אפור-כתום. שילוב VFX ו-UI integration אורגני על גבי חומרי וידאו אמיתיים. צילומי שטח של המראה אוטונומית מ-Airbase תחת רשתות הגנה. עריכה שמאזנת קצב דינמי עם מסרים טכניים מורכבים.",
    solutionEn: "Host-driven structure with a single presenter (Sivan Abrami) guiding the entire film — from the development offices through the test facility to the CTA. Clean industrial visual language in black-gray-orange palette. Organic VFX and UI integration layered on real video footage. Field shots of autonomous launches from Airbase under protective nets. Editing that balances dynamic pacing with complex technical messaging.",
    category: "hightech",
    client: "Airobotics",
    duration: "3:28",
    date: "2024-04-01",
  },
  {
    id: "iron-drone-airobotics",
    youtubeId: "N4iNxvFGA34",
    titleHe: "IRON DRONE: סרט שגייס שפה ויזואלית לחברה בורסאית | Airobotics / Ondas Group",
    titleEn: "IRON DRONE: The Film That Defined a Public Company's Visual Language | Airobotics / Ondas Group",
    challengeHe: "להפיק סרט מוצר לטכנולוגיה ביטחונית מתקדמת, בלי Brand Book, בלי שפת אינפוגרפיקה קיימת, ולצאת עם זהות מותגית שתאמץ כסטנדרט הרשמי.",
    challengeEn: "Produce a product film for advanced defense technology, without a Brand Book, without existing infographic language, and emerge with a brand identity adopted as the official standard.",
    solutionHe: "בניית Visual DNA מאפס: פלטת צבעים, טיפוגרפיה טכנולוגית, HUD/UI שמשדר סמכות מבצעית. Speed Ramps שמאיטים ברגעי הליבה הטכנולוגיים (שיגור, נעילת מטרה, יירוט) ומאיצים בתנועת מרדף. Drone-to-Drone Tracking אוויריים וסאונד-דיזיין כירורגי שיושב על הביט. התוצאה: הגרפיקה שפותחה לסרט הפכה לסטנדרט העיצובי הרשמי של ONDS.",
    solutionEn: "Built Visual DNA from scratch: color palette, tech typography, HUD/UI conveying operational authority. Speed Ramps that slow at core technical moments (launch, target lock, intercept) and accelerate in pursuit motion. Aerial Drone-to-Drone tracking and surgical sound design sitting on the beat. Result: the graphics developed for the film became ONDS's official design standard.",
    category: "ai",
    client: "Airobotics / Ondas Group",
    duration: "2:20",
    date: "2023-12-01",
  },
  {
    id: "airobotics-optimus-faa-certification",
    youtubeId: "mqVFjv-gPS4",
    titleHe: "Airobotics Optimus: הכרזת FAA Type Certification — הרחפן האוטונומי הראשון מעל אנשים",
    titleEn: "Airobotics Optimus: FAA Type Certification Announcement — The First Autonomous Drone Over People",
    challengeHe: "להעביר מסר רגולטורי מורכב (FAA Type Certification היסטורי) בצורה ויזואלית מרגשת ויוקרתית — לקהל משקיעים, לקוחות B2B ורגולטורים בינלאומיים — עבור חברה נסחרת בנאסד\"ק (ONDS).",
    challengeEn: "Convey a complex regulatory message (historic FAA Type Certification) in a visually exciting and prestigious way — to an audience of investors, B2B clients, and international regulators — for a NASDAQ-listed company (ONDS).",
    solutionHe: "שילוב Keynote תאגידית (אריק ברוק, מנכ\"ל Ondas Holdings) עם לוקיישן לילי יוקרתי — עמדת עגינה על גג בניין על רקע קו רקיע מואר. תקריבי מאקרו של הזרוע הרובוטית (Robotic Arm) והחלפת סוללה אוטונומית בקפסולה. צילומי אוויר ואקשן מעל ערים, מפעלים ואתרי חירום. טיפוגרפיה בולטת ('TYPE CERTIFICATION', '24/7', 'HIGHEST LEVEL') ופסקול אלקטרוני קצבי שמגיע לשיא בהמראת הרחפן.",
    solutionEn: "Combined corporate Keynote (Eric Brock, CEO of Ondas Holdings) with a premium night location — docking station on a rooftop against an illuminated skyline. Macro close-ups of the Robotic Arm and autonomous battery swap inside the capsule. Aerial and action shots over cities, industrial plants, and emergency sites. Bold typography ('TYPE CERTIFICATION', '24/7', 'HIGHEST LEVEL') and a rhythmic electronic score building to a climax at the drone's launch.",
    category: "ai",
    client: "Airobotics / Ondas Holdings",
    duration: "2:00",
    date: "2024-09-01",
  },
  {
    id: "buildots-green-screen",
    youtubeId: "nFaOyZwj2PY",
    titleHe: "Buildots: הפקת מסך ירוק ואולפן — שליטה מוחלטת על מציאות הצילום",
    titleEn: "Buildots: Green Screen & Studio Production — Full Control Over the Filming Reality",
    challengeHe: "להציג את טכנולוגיית ניהול הבנייה של Buildots בצורה ויזואלית עוצמתית, מבלי לגרור צוותי הפקה לאתרי בנייה פעילים ומסוכנים לימי צילום ארוכים. הסרט נדרש להכיל טאלנט, סביבות עבודה מורכבות, ממשקי תוכנה (UI) ולשמור על קצב קומי-דינמי לאורך כולו.",
    challengeEn: "Present Buildots' construction management technology in a visually powerful way, without dragging production crews to active, dangerous construction sites for long filming days. The film needed to feature talent, complex work environments, software UIs, and maintain a dynamic comic pace throughout.",
    solutionHe: "הפקת Green Screen מוקפדת באולפן: הטאלנט צולם על רקע ירוק ונתפר בדיוק לסביבות בנייה, משרדים ולוקיישנים מורכבים. תאורת אולפן שמשקפת בדיוק את תאורת הרקע — ליצירת חיבור אורגני מושלם. שילוב VFX ו-UI Integration של ממשקי Buildots כך שנראים טבעיים לחלוטין בתוך הסצנה. בימוי קצבי ודרמתי-קומי שמעביר מסר תוכנתי מורכב (ניהול פרויקטים ובנייה) בצורה סוחפת.",
    solutionEn: "Meticulous Green Screen studio production: talent filmed against green screen and seamlessly composited into construction environments, offices, and complex locations. Studio lighting that precisely mirrors background lighting — creating a perfectly organic integration. VFX and UI Integration of Buildots interfaces designed to look completely natural within the scene. Rhythmic dramatic-comic direction that delivers a complex software message (construction project management) in a compelling way.",
    category: "hightech",
    client: "Buildots",
    duration: "2:15",
    date: "2023-09-01",
  },
  {
    id: "ludeo-gaming-concept",
    youtubeId: "3mxQZMC9ZpI",
    titleHe: "Ludeo: סרט קונספט לפלטפורמת הגיימינג שמהפכת את צפייה לשחייה",
    titleEn: "Ludeo: Concept Film for the Gaming Platform That Turns Watching Into Playing",
    challengeHe: "להסביר טכנולוגיה גיימינג חדשה לגמרי — מושג שגיימרים מעולם לא ראו — בדקה וחצי. הסרט נדרש לעבוד על שני קהלים בו-זמנית: גיימרים שרוצים להרגיש את ה-wow ומשקיעים/מפתחים שצריכים להבין את ה-how.",
    challengeEn: "Explain a completely new gaming technology — a concept gamers have never seen — in a minute and a half. The film needed to work for two audiences simultaneously: gamers who want to feel the wow, and investors/developers who need to understand the how.",
    solutionHe: "מבנה דו-שכבתי: Live-Action ריאליסטי בחדר גיימינג (תאורת RGB סגולה-כחולה) לעולם הגיימר, ולצדו עולמות אנימציה תלת-ממדיים עתידניים שמסבירים את הטכנולוגיה מאחורי הקלעים. דמויות אנימציה אבסטרקטיות ב'מעבדת Ludeo' מדגימות כיצד המערכת חותכת אוטומטית רגעי שיא, מגדירה יעדים ויוצרת קובץ משחק ניתן לשיתוף. סגיר בסלוגן 'Redefine how players discover and engage with your game'.",
    solutionEn: "Dual-layer structure: realistic Live-Action in a gaming room (purple-blue RGB lighting) for the gamer world, alongside futuristic 3D animated worlds explaining the technology behind the scenes. Abstract animated characters in the 'Ludeo Lab' demonstrate how the system automatically clips epic moments, defines objectives, and creates a shareable playable file. Closing with the tagline 'Redefine how players discover and engage with your game'.",
    category: "hightech",
    client: "Ludeo",
    duration: "1:18",
    date: "2023-06-01",
  },
  {
    id: "big-fashion-giliot-launch",
    youtubeId: "yDJ5shdbFMw",
    titleHe: "BIG FASHION גלילות: השקה בקמפיין חוצות ואווירי | תיעוד רחפן ועריכה קצבית",
    titleEn: "BIG FASHION Gililot: Grand Opening Out-of-Home Campaign | Aerial Drone & Rhythmic Editing",
    challengeHe: "לתעד ולהגביר את הנוכחות המותגית הענקית של השקת BIG FASHION גלילות במרחב הציבורי — עשרות שלטי חוצות, גשרי פרסום ושלטי ענק על גורדי שחקים לאורך ציר איילון — וליצור ממנה נכס שיווקי שמשדר דחיפות וציפייה.",
    challengeEn: "Document and amplify the massive brand presence of the BIG FASHION Gililot launch in public space — dozens of out-of-home placements, advertising bridges, and giant building wraps along Ayalon — and create a marketing asset that conveys urgency and anticipation.",
    solutionHe: "צילומי רחפן אוויריים בהיקף רחב מעל צירי תנועה מרכזיים, מגדלי עסקים ומטרופולין תוסס — מנקודת מבט שאי אפשר להשיג בצילום רגיל. עריכה קצבית מהירה מסונכרנת למוזיקה עם מעברים חדים בין יום ללילה שמדגישים את השלטים בתנאי תאורה שונים. התוצאה: תיעוד קמפיין OOH שמוכיח נוכחות בלתי אפשרית להתעלם ממנה.",
    solutionEn: "Wide-scale aerial drone footage above central traffic arteries, business towers, and a vibrant metropolis — from a vantage point impossible to achieve with ground shooting. Fast rhythmic editing synced to music with sharp day-to-night transitions that highlight the signage in different lighting conditions. Result: an OOH campaign documentation that proves a presence impossible to ignore.",
    category: "commercial",
    client: "BIG Fashion",
    duration: "0:45",
    date: "2025-02-27",
  },
  {
    id: "ashtrom-properties-brand",
    youtubeId: "ome2LtSiFWQ",
    titleHe: "אשטרום נכסים: סרט תדמית קורפורייט — 60 נכסים מניבים, ותק של עשרות שנים",
    titleEn: "Ashtrom Properties: Corporate Brand Film — 60 Income-Producing Assets, Decades of Legacy",
    challengeHe: "להציג פורטפוליו נדל\"ן עסקי ענק (700+ אלף מ\"ר, פעילות בגרמניה ואנגליה) בצורה שמשדרת גם עוצמה כלכלית וגם חמימות אנושית — ולדבר בו-זמנית לחברות הייטק, שותפים עסקיים וציבור הרחב.",
    challengeEn: "Present a massive commercial real estate portfolio (700K+ sqm, operations in Germany and England) in a way that conveys both financial power and human warmth — while speaking simultaneously to high-tech companies, business partners, and the general public.",
    solutionHe: "צילומי רחפן קולנועיים המציגים את קנה המידה האמיתי של הפרויקטים מפריסה ארצית רחבה. שילוב חכם בין לייב-אקשן לארכיון היסטורי עם גרפיקת טיים-ליין שמעצים את תחושת הוותק והאמינות. שילוב הדמיות CGI חלק עם צילומים אמיתיים לפרויקטים בשלבי פיתוח. שפה ויזואלית עקבית בצבעי המותג עם אדריכלות, אנשים ומרחבים — שמעניקה נשמה לפורטפוליו נדל\"ני.",
    solutionEn: "Cinematic drone footage presenting the true scale of projects across a wide national spread. Smart integration of live-action with historical archive footage and timeline graphics that reinforce the sense of longevity and credibility. Seamless CGI visualization blended with real footage for projects in development stages. Consistent brand-color visual language combining architecture, people, and spaces — giving soul to a real estate portfolio.",
    category: "realestate",
    client: "Ashtrom Properties",
    duration: "3:00",
    date: "2024-03-01",
  },
  {
    id: "vertica-medtech-onboarding",
    youtubeId: "7vCj49e42Ow",
    titleHe: "Vertica: סרט Onboarding לגאדג'ט רפואי אינטימי — CGI רפואי, אולפן ו-How-To",
    titleEn: "Vertica: Onboarding Film for an Intimate Medical Device — Medical CGI, Studio & How-To",
    challengeHe: "ליצור סרט הדרכה מלא למוצר MedTech אינטימי ורגיש (טיפול ב-RF) — בלי ליצור מבוכה — שיסביר פתיחת קופסה, חיבור מגנטי, ג'ל, ניקוי ומנגנון הטיפול עצמו, בסטנדרט גלובלי מוכן לפלטפורמות US/EU.",
    challengeEn: "Create a complete instructional film for a sensitive, intimate MedTech product (RF treatment) — without creating embarrassment — explaining unboxing, magnetic connection, gel, cleaning, and the treatment mechanism itself, to a global standard ready for US/EU platforms.",
    solutionHe: "בימוי אולפן עם High-key lighting נקי ושחקן בלבוש ניטרלי, קצב עריכה מכוון לאוכלוסיית יעד מבוגרת. שילוב CGI רפואי (Blue Mesh תלת-ממד) שמסביר את מיקום האלקטרודות והזרמים האלקטרומגנטיים — ללא צילום אינטימי. צילומי Overhead ו-Extreme Close-up מסונכרנים לזווית ה-CGI. סצנת ניקוי אמיתית בכיור לאמינות מלאה. תוצאה: סרטון שמוריד פניות שירות לקוחות, החזרות מוצר ושימושים שגויים.",
    solutionEn: "Clean High-key studio direction with neutral wardrobe, editing pace calibrated for an older target audience. Medical CGI (3D Blue Mesh) explaining electrode placement and electromagnetic currents — without intimate filming. Overhead and Extreme Close-up shots synchronized to CGI angle. Real sink-cleaning scene for full credibility. Result: a film that reduces customer support calls, product returns, and misuse.",
    category: "product",
    client: "Vertica",
    duration: "4:00",
    date: "2023-11-01",
  },
  {
    id: "startup-nation-connect2innovate",
    youtubeId: "Fmd3fB5Pb-M",
    titleHe: "Connect 2 Innovate | Startup Nation Central: דיפלומטיה דרך חדשנות — ישראל × מרוקו",
    titleEn: "Connect 2 Innovate | Startup Nation Central: Innovation Diplomacy in Action — Israel × Morocco",
    challengeHe: "לתעד ולהמחיש שיתוף פעולה טכנולוגי ואסטרטגי בין-מדינתי (ישראל-מרוקו) בסרט אחד — בלי ליפול לקלישאות תאגידיות — ולייצר כלי דיפלומטי שמניע השקעות ושותפויות B2B בינלאומיות.",
    challengeEn: "Document and convey a strategic tech collaboration between Israel and Morocco in a single film — without falling into corporate clichés — and create a diplomatic tool that drives international B2B investments and partnerships.",
    solutionHe: "מבנה נרטיבי שמתחיל ברגש ('In a region where borders often divide, innovation builds bridges') ועובר ממרחק לחיבור אנושי. שילוב בין צילומי שטח תעשייתיים (מפעלי מים, טכניון) לסצנות תרבות מקומית חמות (ארוחה מרוקאית, נגינה). תקריבי Close-up על לחיצות ידיים וחיוכים לצד שוטי רחפן רחבים. Kinetic Typography בכתב יד שמבטא אנושיות. פסקול אתני-מודרני שמלווה הדרגתית מאווירה שקטה לאנרגיה.",
    solutionEn: "Narrative structure opening with emotion ('In a region where borders often divide, innovation builds bridges') transitioning from distance to human connection. Combining industrial field shots (water plants, Technion) with warm local culture scenes (Moroccan meal, music). Close-ups on handshakes and smiles alongside wide drone shots. Handwritten Kinetic Typography expressing humanity. Ethnic-modern soundtrack gradually building from quiet atmosphere to energy.",
    category: "hightech",
    client: "Startup Nation Central",
    duration: "3:10",
    date: "2024-01-01",
  },
  {
    id: "intel-fab28-emergency-drill",
    youtubeId: "d2Bckns6JTA",
    titleHe: "Intel Fab 28: תרגיל חירום קולנועי — הפקת ענק רב-זירתית בסטנדרט בינלאומי",
    titleEn: "Intel Fab 28: Cinematic Emergency Drill — Large-Scale Multi-Zone Production to International Standard",
    challengeHe: "לתעד תרגיל חירום מלא במפעל שבבים מהמתקדמים בעולם — 5 זירות מקבילות (Hazmat, שריפה, חילוץ מגובה, סריקת הריסות, מפקדה) — בזמן אמת, ללא הפרעה לייצור, עם סנכרון מלא מול מד\"א, כבאות והצלה וצוות ERT הפנימי.",
    challengeEn: "Document a full emergency drill at one of the world's most advanced semiconductor plants — 5 simultaneous scenarios (Hazmat, fire, height rescue, debris search, command center) — in real-time, without disrupting production, with full synchronization across Magen David Adom, fire & rescue, and internal ERT teams.",
    solutionHe: "ניהול multi-camera בזמן אמת על 5 זירות נפרדות: צילומי רחפן FPV לסקירת זירות פינוי המוני, צילומי כתף דינמיים עוקבים אחר צוותי Hazmat בחליפות מגן, ותקריבי חבלים מגובה. גרפיקה טקטית (Radar overlays, Target points, Lower thirds) שמאפיינת כל צוות וזירה בזמן אמת. סאונד-דיזיין עם אזעקות, רשתות קשר וסירנות על פסקול דרמטי. תוצאה: מסמך ויזואלי שמשדר מוכנות שיא ומשמש להכשרת עובדים, הצגה מול רגולטורים וחיזוק מנהיגות בטיחותית.",
    solutionEn: "Real-time multi-camera management across 5 separate zones: FPV drone shots surveying mass evacuation zones, dynamic shoulder-rig shots tracking Hazmat teams in protective suits, and high-angle rope rescue close-ups. Tactical graphics (Radar overlays, Target points, Lower thirds) identifying each team and zone in real-time. Sound design with alarms, radio comms, and sirens over a dramatic score. Result: a visual document conveying peak readiness, used for employee training, regulatory presentations, and safety leadership reinforcement.",
    category: "hightech",
    client: "Intel Israel",
    duration: "5:00",
    date: "2023-05-01",
  },
  {
    id: "intel-fab28-kgat-2025",
    youtubeId: "coZNfEng59g",
    titleHe: "Intel Fab 28 קרית גת: תרגיל חירום 2025 — 4 זירות, חפ\"ק אחוד וסנכרון לאומי",
    titleEn: "Intel Fab 28 Kiryat Gat: Emergency Drill 2025 — 4 Scenes, Unified Command & National Sync",
    challengeHe: "לתעד תרגיל חירום רב-זירתי במפעל השבבים של Intel Fab 28 קרית גת — 4 זירות במקביל (שריפה, דליפת אמוניה, חילוץ מבור/גובה, זירת הרס Search & Rescue) — בזמן אמת, ללא הפרעה לייצור, עם סנכרון מלא בין צוות ERT הפנימי, מד\"א, כבאות ומשרד הסביבה.",
    challengeEn: "Document a multi-zone emergency drill at Intel Fab 28 Kiryat Gat — 4 simultaneous zones (fire, ammonia leak, pit/height rescue, Search & Rescue crash site) — in real-time, without disrupting production, with full synchronization between the internal ERT team, Magen David Adom, fire & rescue, and the Ministry of Environment.",
    solutionHe: "כיסוי רב-קמרה על 4 זירות: שריפה במבנה CUB עם צוותי כיבוי בציוד נושם, חליפות Hazmat לדליפת אמוניה, חילוץ חבלים (Rope Rescue) מבור, וחילוץ 8 לכודים מהריסות עם ציוד הידראולי כבד. רחפן לתצלומי קמפוס רחבים וסקירת פריסת הציוד. עריכת HUD עם מפת לוויין של המתחם שמסמנת 5 זירות ומפקדה חיצונית בזמן אמת. סיכום מנהל התרגיל (Emergency Manager) כסגירה נרטיבית.",
    solutionEn: "Multi-camera coverage across 4 zones: building fire with SCBA-equipped firefighters, Hazmat suits for ammonia leak, Rope Rescue from a pit, and extraction of 8 trapped people from debris with heavy hydraulic equipment. Drone for wide campus aerials and equipment deployment overviews. HUD editing with satellite map pinpointing 5 zones and an external command post in real-time. Emergency Manager summary as narrative closure.",
    category: "hightech",
    client: "Intel Israel",
    duration: "5:39",
    date: "2025-05-01",
  },
  {
    id: "intel-haifa-idc-emergency-drill",
    youtubeId: "jAU89DS0oig",
    titleHe: "Intel IDC חיפה: תרגיל חירום 2025 — 3,000 עובדים, 6 זירות, מפה אחת",
    titleEn: "Intel IDC Haifa: Emergency Drill 2025 — 3,000 Employees, 6 Scenes, One Map",
    challengeHe: "לתעד תרגיל חירום של 3,000 עובדים ב-IDC חיפה — 6 זירות בו-זמניות (דליפת חומצה, חילוץ מגובה, אירוע Hazmat, סריקת בניינים, זירת הרס ומפקדה) — תוך שמירה על הצופה מסונכרן עם מה שקורה בכל רחבי הקמפוס הענק.",
    challengeEn: "Document a 3,000-employee emergency drill at Intel IDC Haifa — 6 simultaneous scenes (acid leak, height rescue, Hazmat, building sweeps, crash site, and command center) — while keeping the viewer synced with what's happening across the vast campus.",
    solutionHe: "כיסוי רב-קמרה על 6 זירות נפרדות: צילומי רחפן אווירים לתמונה הכוללת של הקמפוס, מצלמות כתף דינמיות עוקבות אחר צוותי ERT ו-Hazmat בזמן אמת, ותקריבי חילוץ דרמטיים. פוסט-פרודקשן עם מפה דיגיטלית אינטראקטיבית (HUD Display 3D) שמסמנת כל זירה בזמן אמת על גבי תמונות אוויר של הקמפוס — הפתרון לאתגר הנרטיבי של 6 חזיתות מקבילות. תוצאה: מסמך ויזואלי שמשמש להכשרה, להצגת מנהיגות בטיחותית בפני רגולטורים ולמיתוג מעסיק ברמה בינלאומית.",
    solutionEn: "Multi-camera coverage across 6 separate zones: aerial drone shots for the overall campus picture, dynamic shoulder-rig cameras tracking ERT and Hazmat teams in real-time, and dramatic rescue close-ups. Post-production with an interactive digital map (3D HUD Display) pinpointing each scene in real-time over aerial campus imagery — the solution to the narrative challenge of 6 parallel fronts. Result: a visual document used for training, presenting safety leadership to regulators, and employer branding at an international level.",
    category: "hightech",
    client: "Intel Israel",
    duration: "4:30",
    date: "2025-03-01",
  },
  {
    id: "ashtromist-flagship-long",
    youtubeId: "3wO3R6Xr8bU",
    titleHe: "להיות אשטרומיסט זה קודם כל אופי | פרויקט הדגל — גרסה ארוכה",
    titleEn: "Being an Ashtromist Is First of All Character | Flagship Campaign — Full Version",
    challengeHe: "לייצר סרט Employer Branding מקיף שיעבוד גם כנכס גיוסי ארוך-טווח, גם כסרט תדמית ארגוני לכנסים וישיבות הנהלה, וגם כבסיס לכל נגזרות הקמפיין הדיגיטלי.",
    challengeEn: "Create a comprehensive Employer Branding film that would serve as a long-term recruitment asset, an organizational brand film for conferences and board meetings, and the production foundation for all digital campaign derivatives.",
    solutionHe: "שבוע הפקה מלא בכל רחבי הארץ. כל עובד בגובה עיניים — מטכנאים ועד מנכ\"ל — עם Sound Design קצבי שמתכתב עם פעימות התעשייה. צילומי רחפן מרשימים של פרויקטים מרכזיים כולל מגדלי LYFE. אינטגרציה מדויקת בין הבריף האסטרטגי של אשטרום לחומרי הגלם מהשטח. הסרט הפך לסטנדרט ה-Employer Branding הרשמי של הקבוצה.",
    solutionEn: "A full production week across Israel. Every employee at eye level — from technicians to CEO — with rhythmic sound design echoing the industry's pulse. Impressive drone footage of flagship projects including LYFE towers. Precise integration between Ashtrom's strategic brief and the raw field footage. The film became the Group's official Employer Branding standard.",
    category: "recruitment",
    client: "Ashtrom Group",
    duration: "2:10",
    date: "2024-06-01",
  },
  {
    id: "levi-strauss-celebrity-event",
    youtubeId: "94W9SfZcx-Y",
    titleHe: "לוי שטרק: אירוע חברה עם דודו ארז | Branded Entertainment",
    titleEn: "Levi Strauss: Corporate Event with Dudu Erez | Branded Entertainment",
    challengeHe: "ליצור לעובדי לוי שטרק מזכרת בלתי נשכחת מאירוע חברה, שתהיה גם נכס שיווקי שהעובדים ישתפו ברצון, וגם תוכן Employer Branding שמדבר אמת.",
    challengeEn: "Create an unforgettable memento for Levi Strauss employees from a corporate event, that is also a marketing asset employees will willingly share, and Employer Branding content that speaks authentically.",
    solutionHe: "שילוב טאלנט (דודו ארז) עם ניהול הפקה אינטגרלי מלא: כתיבת תסריט קריאייטיבי מותאם לסגנון הטאלנט, ניהול מול הלקוח ומול הטאלנט, צילום קצבי דינמי שמשחזר את אנרגיית האירוע, עריכה מהודקת. תוצאה: המזכרת הפכה לתוכן ויראלי פנים-ארגוני.",
    solutionEn: "Celebrity talent integration (Dudu Erez) with full integral production management: creative scriptwriting tailored to the talent's style, client and talent coordination, dynamic rhythmic filming that recreates the event's energy, tight editing. Result: the memento became internal viral content.",
    category: "recruitment",
    client: "Levi Strauss",
    duration: "2:00",
    date: "2023-07-01",
  },
  {
    id: "medical-leadership-program-recap",
    youtubeId: "VsiMUos3_58",
    titleHe: "סיכום תוכנית מנהיגות רפואית-טכנולוגית | הפקה ממוקסמת מאירוע",
    titleEn: "Medical-Tech Leadership Program Recap | Maximized Production from Event Footage",
    challengeHe: "לקוח שרצה סרט תדמית מלא אך תקציב מוגבל. הפתרון: ניצול חומרי האירוע עצמו. להפוך תיעוד אירוע לנכס שיווקי שמבסס סמכות, יוצר FOMO ומניע הצטרפות לתוכנית הבאה.",
    challengeEn: "A client who wanted a full brand film with limited budget. The solution: maximizing the event footage itself. Turning event documentation into a marketing asset that builds authority, creates FOMO, and drives enrollment in the next program.",
    solutionHe: "סינכרון מספר ראשים מדברים (רופאים, יזמים, מנהלי תוכנית) עם קו נרטיבי רציף, כתוביות בסגנון כתב יד שמחברות בין המסרים, נתוני השפעה על המסך (11 בתי חולים, 20+ מוסדות), תאורה טבעית שמשדרת אותנטיות עסקית. תוצאה: סרט תדמית מלא, מחומרי אירוע בלבד.",
    solutionEn: "Synchronized multiple talking heads (doctors, entrepreneurs, program managers) with a continuous narrative thread, handwritten-style subtitles connecting messages, on-screen impact numbers (11 hospitals, 20+ institutions), natural lighting that radiates business authenticity. Result: a full brand film, from event footage alone.",
    category: "hightech",
    client: "Nucleai",
    duration: "2:30",
    date: "2023-05-01",
  },
  {
    id: "vertica-lifestyle-ad",
    youtubeId: "rixmoZ4Y4Uk",
    titleHe: "Vertica: פרסומת לייף-סטייל | כשבימוי פוגש אסטרטגיה",
    titleEn: "Vertica: Lifestyle Ad | When Direction Meets Strategy",
    challengeHe: "לנפץ את מחסום המבוכה סביב מכשיר HealthTech ולמכור חוויה, לא מפרט טכני. לגרום לצופה להרגיש מה המוצר מאפשר, לא רק להבין מה הוא עושה.",
    challengeEn: "Break the embarrassment barrier around a HealthTech device and sell an experience, not a spec sheet. Make the viewer feel what the product enables, not just understand what it does.",
    solutionHe: "קריאייטיב נועז: ריקוד, קצב ואנרגיה מתפרצת שמפרקים מבוכה ומנגישים את הפתרון בגובה עיניים. בימוי שחקנים מדויק, כוריאוגרפיה שמעבירה מסר, פוסט-פרודקשן ברמה עולמית. הסרט שמוכיח שקריאייטיב נועז הוא הכלי החזק ביותר של מותג.",
    solutionEn: "Bold creative: dance, rhythm, and explosive energy that dissolve embarrassment and make the solution relatable. Precise actor direction, message-carrying choreography, world-class post-production. The film that proves bold creative is a brand's most powerful tool.",
    category: "commercial",
    client: "Vertica",
    duration: "1:00",
    date: "2023-09-01",
  },
  {
    id: "vertica-instructional",
    youtubeId: "9uIA1nRaWqc",
    titleHe: "Vertica: סרטון הדרכה עם הדמיות תלת-מימד רפואיות",
    titleEn: "Vertica: Instructional Video with Medical 3D Visualization",
    challengeHe: "להפוך הוראות שימוש טכניות של מכשיר HealthTech לסרטון הדרכה שמפיג חרדה, מוכיח בטיחות ומאפשר ללקוח להגיע מ-Unboxing לשימוש עצמאי, בלי שיחת תמיכה.",
    challengeEn: "Turn a HealthTech device's technical instructions into an instructional video that reduces anxiety, proves safety, and lets the customer go from unboxing to independent use, without a support call.",
    solutionHe: "פתיחת Unboxing להפגת חרדה, צילום Top-Down לדיוק ויזואלי, הדמיות תלת-מימד רפואיות להסבר אופן פעולת גלי הרדיו על הרקמות, כתוביות ואייקונים למאפשרים צפייה ללא סאונד.",
    solutionEn: "Unboxing opening to reduce anxiety, Top-Down filming for visual precision, medical 3D visualization to explain radio wave action on tissue, subtitles and icons enabling silent viewing.",
    category: "product",
    client: "Vertica",
    duration: "3:00",
    date: "2023-09-01",
  },
  {
    id: "vertica-myth-busting",
    youtubeId: "fXThM6hPzSM",
    titleHe: "Vertica: הפרכת מיתוסים | שלב השיקול במסע הלקוח",
    titleEn: "Vertica: Myth Busting | Consideration Stage in the Customer Journey",
    challengeHe: "לטפל בהתנגדויות וחששות נפוצים סביב מכשיר HealthTech לפני שהלקוח מגיע לנקודת הרכישה, בלי להישמע כמו פרסומת.",
    challengeEn: "Address common objections around a HealthTech device before the customer reaches the purchase point, without sounding like an advertisement.",
    solutionHe: "פורמט 'הפרכת מיתוסים' ישיר מול מצלמה: שאלות אמיתיות, תשובות כנות, הדגמות חיות. ממוקם בשלב השיקול של מסע הלקוח ומטפל בחסמי קנייה לפני שהם עוצרים את הרכישה.",
    solutionEn: "Direct-to-camera myth busting: real questions, honest answers, live demonstrations. Positioned at the consideration stage to handle purchase barriers before they stop the sale.",
    category: "product",
    client: "Vertica",
    duration: "2:30",
    date: "2023-09-01",
  },
  {
    id: "lyfe-social-content",
    youtubeId: "d2xNLprySKQ",
    titleHe: "LYFE: בנק תוכן סושיאל מיום צילום אחד | קבוצת אשטרום",
    titleEn: "LYFE: Social Content Bank from One Filming Day | Ashtrom Group",
    challengeHe: "לייצר נכסים דיגיטליים רבים לרשתות החברתיות עבור מתחם LYFE, בלי להכפיל ימי צילום ותקציבים.",
    challengeEn: "Generate multiple social media digital assets for the LYFE complex, without multiplying filming days and budgets.",
    solutionHe: "Max ROI Production: יום צילום מרוכז אחד עם אסטרטגיית תוכן מקיפה. צילום מודולרי (רחפן, גוף ראשון, אווירה) סביב עוגן ויזואלי מרכזי: הכדורים המטאליים בלובי. בפוסט: עריכה קצבית, Motion Overlays ו-Beat-matching לעשרות גרסאות.",
    solutionEn: "Max ROI Production: one concentrated filming day with a comprehensive content strategy. Modular shooting (drone, POV, atmosphere) around a central visual anchor: the metallic orbs in the lobby. In post: rhythmic editing, motion overlays, and beat-matching to produce dozens of versions.",
    category: "commercial",
    client: "Ashtrom Group / LYFE",
    duration: "0:30",
    date: "2024-01-01",
    vertical: true,
  },
  {
    id: "regev-gutman-10-questions",
    youtubeId: "gE-8-eOtQg0",
    titleHe: "10 שאלות: פורמט תוכן שעובד לכל עסק | רגב גוטמן",
    titleEn: "10 Questions: A Content Format That Works for Any Business | Regev Gutman",
    challengeHe: "לייצר תוכן שיווקי לרגב גוטמן, מוסד לימודי לסטודנטים במתמטיקה, כלכלה והנהלת חשבונות, שיהיה כיפי, אינפורמטיבי ויבנה אמון מול קהל של סטודנטים.",
    challengeEn: "Create marketing content for Regev Gutman, an educational institution helping students succeed in mathematics, economics, and accounting, that's fun, informative, and builds trust with a student audience.",
    solutionHe: "פורמט '10 שאלות': צילום באולפן, פרזנטור שמנוסה מול מצלמה, שאלות מגוונות שמשלבות מידע מקצועי עם אנרגיה קלה וכיפית. כתיבה פשוטה ותהליך צילום קצר, פרויקט שהלקוח מבין מהרגע הראשון. התוצר: סרטון שאפשר לפרק לעשרות קטעי Micro-Content לכל המדיות.",
    solutionEn: "The '10 Questions' format: studio filming, a camera-experienced presenter, varied questions combining professional information with light and fun energy. Simple writing and a short filming process, a project the client understands from day one. The output: one video that can be cut into dozens of micro-content clips for all platforms.",
    category: "commercial",
    client: "Regev Gutman",
    duration: "4:30",
    date: "2024-08-01",
  },
  {
    id: "green-wall-hero",
    youtubeId: "GoX5983yoQg",
    titleHe: "Green Wall: חבילת שיווק שלמה מ-2 ימי צילום | Hero Video",
    titleEn: "Green Wall: Full Marketing Package from 2 Filming Days | Hero Video",
    challengeHe: "לבנות תשתית שיווקית דיגיטלית מלאה לחברת Green Wall: Hero Video, סרטי אווירה, Testimonials, עם מינימום ימי צילום ומקסימום נכסים.",
    challengeEn: "Build a complete digital marketing infrastructure for Green Wall: Hero Video, atmosphere shorts, testimonials, with minimum filming days and maximum assets.",
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
    titleHe: "100 שנה לאקרשטיין: מיתוג מחדש של מותג היסטורי לעתיד סינמטי",
    titleEn: "100 Years of Akerstein: Rebranding a Historic Brand for a Cinematic Future",
    challengeHe: "לחגוג 100 שנות היסטוריה של מותג תעשייתי כבד, עם ארכיון מתקופות שונות, מנהלים שמרנים ודיביזיות רבות, ולהוציא סרט אחד קצבי שמכבד את העבר ומביט קדימה.",
    challengeEn: "Celebrate 100 years of a heavy industrial brand, with multi-era archives, conservative management, and many divisions, and produce one rhythmic film that honors the past and looks forward.",
    solutionHe: "ארכיטקטורת תסריט אחודה שמחברת 100 שנות היסטוריה עם שפת מותג חדשנית. שילוב חומרי ארכיון (פילם, שחור-לבן, אנלוגי) בתוך צילומי 4K מודרניים ללא נפילת קצב. ימי צילום רחפן מרובים באתרי ייצור ופרויקטים ארציים, עם מעברים חדים מאוויר לקלוז-אפ. תוצאה: סרט דגל שמשמש פתיחת כנסים, ישיבות דירקטוריון ומיתוג מעסיק, במקביל.",
    solutionEn: "A unified script architecture connecting 100 years of history with an innovative brand language. Archival footage (film, black-and-white, analog) integrated into modern 4K without losing pace. Multiple drone filming days across production sites and national projects, with sharp aerial-to-closeup transitions. Result: a flagship film serving as a conference opener, board meeting asset, and employer branding, simultaneously.",
    category: "hightech",
    client: "Akerstein",
    duration: "3:20",
    date: "2023-10-01",
  },
  {
    id: "maccabi-corporate-event",
    youtubeId: "M0EhoVJsxJM",
    titleHe: "תיעוד אירוע עסקי: אשטרום נכסים | מנכס חד-פעמי לנכס שיווקי",
    titleEn: "Corporate Event Documentation: Ashtrom Properties | From One-Time Event to Marketing Asset",
    challengeHe: "להפוך כנס חברה חד-פעמי לתוכן שממשיך לעבוד חודשים קדימה, מבלי להפריע למהלך האירוע ולאנרגיה שלו.",
    challengeEn: "Turn a one-time corporate conference into content that keeps working months ahead, without disrupting the event's flow and energy.",
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
    titleHe: "סרט תדמית | אשטרום נכסים: נדל\"ן מניב, היקף ארצי",
    titleEn: "Brand Film | Ashtrom Properties: Income-Producing Real Estate at National Scale",
    challengeHe: "להפגין גודל, יציבות ותחכום תאגידי בפחות מדקה וחצי, תוך הצגת פורטפוליו רחב של פרויקטים, ערים וטכנולוגיה לדיירים ומשקיעים.",
    challengeEn: "Demonstrate scale, stability, and corporate sophistication in under 90 seconds, while presenting a broad portfolio of projects, cities, and technology to tenants and investors.",
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
    titleHe: "להיות אשטרומיסט: גרסה קצרה לרשתות | קבוצת אשטרום",
    titleEn: "Being an Ashtromist: Short Version for Social Media | Ashtrom Group",
    challengeHe: "לדחוס את נשמת מיתוג המעסיק של קבוצת אשטרום, ה-DNA, הגאווה, הפריסה הארצית, לפורמט קצר שתופס קשב תוך 3 שניות.",
    challengeEn: "Compress the soul of Ashtrom Group's employer branding, the DNA, the pride, the national footprint, into a short format that captures attention within 3 seconds.",
    solutionHe: "עריכת 'פינג-פונג' קצבית: מעברים בין דוברים בתוך משפט, שינויי לוקיישן תכופים מהשטח למטה. צילומי רחפן ארוכים שמראים סקייל לצד פרופיל אישי בגובה עיניים. טיפוגרפיה עם + המותג בכל חיתוך. תוצאה: הגרסה הארוכה שומרת על נרטיב מלא, הגרסה הקצרה מניעה קמפיינים דיגיטליים, שתיהן מאותה הפקה אחת.",
    solutionEn: "Rhythmic 'ping-pong' editing: cuts between speakers mid-sentence, frequent location changes from field to HQ. Long drone shots showing scale alongside eye-level personal profiles. Brand '+' typography on every cut. Result: the long version holds the full narrative, the short version drives digital campaigns, both from the same production.",
    category: "recruitment",
    client: "Ashtrom Group",
    duration: "0:45",
    date: "2023-06-01",
  },
  {
    id: "ashtrom-sorry-for-asking",
    youtubeId: "cbqFpHi5gHE",
    titleHe: "סליחה על השאלה: Format-Driven Employer Branding | קבוצת אשטרום",
    titleEn: "Sorry for Asking: Format-Driven Employer Branding | Ashtrom Group",
    challengeHe: "לייצר תוכן מיתוג מעסיק שמחזיק צופה 15 דקות תמימות, ומרגיש כמו בחירה, לא כמו חובה.",
    challengeEn: "Create employer branding content that holds a viewer for 15 full minutes, and feels like a choice, not an obligation.",
    solutionHe: "פורמט 'סליחה על השאלה' מוסב לעולם הארגוני: תחקיר מעמיק, ליהוק עובדים מכל אתרי אשטרום ברחבי הארץ, בימוי non-actors תחת תנאי שטח אמיתיים (אתרי בנייה, מפעלים, משרדים). עריכה סיפורית שמאזנת הומור, גאווה מקצועית ורגעים אנושיים, ויוצרת כלי גיוס ויום כיף פנים-ארגוני בהפקה אחת.",
    solutionEn: "The 'Sorry for Asking' format adapted for the corporate world: deep research, casting employees across all Ashtrom sites nationwide, directing non-actors in real field conditions (construction sites, factories, offices). Narrative editing that balances humor, professional pride, and human moments, creating both a recruitment tool and an internal team-building experience in one production.",
    category: "recruitment",
    client: "Ashtrom Group",
    duration: "15:00",
    date: "2023-09-01",
  },
  {
    id: "ashtrom-employer-branding",
    youtubeId: "3wO3R6Xr8bU",
    titleHe: "להיות אשטרומיסט: מיתוג מעסיק | קבוצת אשטרום",
    titleEn: "Being an Ashtromist: Employer Branding | Ashtrom Group",
    challengeHe: "לקחת קונצרן בנייה ותשתית עצום עם אלפי עובדים בעשרות מוקדים ולזקק אותו לזהות ארגונית אחת שכולם, מצוות השטח ועד ההנהלה, מזדהים איתה.",
    challengeEn: "Take a massive construction and infrastructure conglomerate with thousands of employees across dozens of sites and distill it into one organizational identity that everyone, from field crews to management, identifies with.",
    solutionHe: "שבוע הפקה אחד, עשרות לוקיישנים ברחבי הארץ. שילוב צילומי רחפן, שטח ומשרדים עם Sound Design קצבי שמתכתב עם פעימות התעשייה. בימוי non-actors שהוציא גאווה ואותנטיות אמיתית. תוצאה: המונח 'אשטרומיסט' הפך לזהות, לא לסיסמה.",
    solutionEn: "One production week, dozens of locations across the country. Drone, field, and office footage combined with rhythmic sound design that echoes the industry's pulse. Non-actor directing that brought out real pride and authenticity. Result: 'Ashtromist' became an identity, not a slogan.",
    category: "recruitment",
    client: "Ashtrom Group",
    duration: "2:10",
    date: "2023-06-01",
  },
  {
    id: "iron-arrow-airobotics",
    youtubeId: "iMfsWqluFpo",
    titleHe: "IRON ARROW: מערכת יירוט אוטונומית | Airobotics / Ondas Group",
    titleEn: "IRON ARROW: Autonomous Mass Interception System | Airobotics / Ondas Group",
    challengeHe: "להמחיש בפני ממשלות, צבאות ומשקיעים מערכת יירוט אוטונומית שלא ניתן לצלם, בצורה שתשדר עליונות טכנולוגית ואמינות מבצעית.",
    challengeEn: "Visualize an autonomous interception system for governments, militaries, and investors, in a way that conveys technological superiority and operational credibility.",
    solutionHe: "סרט קונספט AI פוטוריאליסטי מלא: עקביות מכנית קפדנית של סיבי פחמן ורכיבי מל\"ט, סימולציה דינמית של VTOL ונחיל יירוט, HUD overlays טכניים, ועיצוב סאונד תעשייתי. כל פריים: Midjourney. כל תנועה: Kling.",
    solutionEn: "Full photorealistic AI concept film: meticulous hard-surface consistency of carbon fiber and UAV components, dynamic VTOL and swarm simulation, technical HUD overlays, and industrial sound design. Every frame: Midjourney. Every motion: Kling.",
    category: "ai",
    client: "Airobotics / Ondas Group",
    duration: "2:30",
    date: "2025-05-01",
  },
  {
    id: "safe-ground-ai",
    youtubeId: "8c9gf7cM8hk",
    titleHe: "Safe Ground Program: AI Concept Film",
    titleEn: "Safe Ground Program: AI Concept Film",
    challengeHe: "להמחיש בפני ממשלות ומשקיעים בינלאומיים סיכון תפעולי נסתר בפרויקט שיקום מורכב, בלי לצלם כלום, בלי שחקנים, בלי לוקיישן.",
    challengeEn: "Visualize a hidden operational risk in a complex reconstruction project for international governments and investors, without filming anything, no actors, no location.",
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
    titleHe: "Dride 4K: סרט קיקסטארטר שגייס 1.1 מיליון דולר",
    titleEn: "Dride 4K: Kickstarter Film That Raised $1.1 Million",
    challengeHe: "להפוך מצלמת רכב בשלב פיתוח מתקדם לקמפיין גיוס המונים שיגייס מעל מיליון דולר מ-3,748 תומכים, בלי מוצר מוגמר על המדף.",
    challengeEn: "Turn an advanced-stage dashcam into a crowdfunding campaign that raises over $1M from 3,748 backers, without a finished product on the shelf.",
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
    titleHe: "Bright Data: כשה-AI שלך רעב לדאטה | Motion Graphics & Tech Storytelling",
    titleEn: "Bright Data: When Your AI Is Hungry for Data | Motion Graphics & Tech Storytelling",
    challengeHe: "להסביר תשתית דאטה מורכבת לקהל של CTOs ומנהלי מוצר AI, בפחות מ-60 שניות, בלי להאבד בטכני ובלי לאבד את האנרגיה.",
    challengeEn: "Explain a complex data infrastructure to an audience of CTOs and AI product managers, in under 60 seconds, without getting lost in technical details or losing energy.",
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
    titleHe: "Iron Bullet: Airobotics / Ondas Group",
    titleEn: "Iron Bullet: Airobotics / Ondas Group",
    challengeHe: "לגייס הון ממשקיעים בינלאומיים ורגולטורים ממשלתיים עבור מערכת רחפני יירוט אוטונומית, עם מידע רגיש ומגבלות חשיפה קשות.",
    challengeEn: "Raise capital from international investors and government regulators for an autonomous interception drone system, with sensitive information and strict exposure limitations.",
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
    challengeHe: "לגייס מפתחים מוכשרים בשוק תחרותי מאוד, בלי להישמע כמו כולם.",
    challengeEn: "Recruit talented developers in a highly competitive market, without sounding like everyone else.",
    solutionHe: "הפכנו את הקונבנציה על ראשה: סרט שמודע לעצמו ומלגלג על סרטי הגיוס הקלישאתיים, ובדיוק בגלל זה בלט ועבד.",
    solutionEn: "We flipped the convention: a self-aware film that mocks clichéd recruitment videos, and that's exactly why it stood out and worked.",
    category: "recruitment",
    client: "Palo Alto Networks",
    duration: "1:23",
  },
  {
    id: "ashtrom-port",
    vimeoId: "TODO_ashtrom",
    titleHe: "Ashtrom Port – Where Work Feels Good",
    titleEn: "Ashtrom Port – Where Work Feels Good",
    challengeHe: "השקת מרחב קו-וורקינג חדש של אשטרום, ליצור אווירה שמוכרת חוויה, לא רק שטח.",
    challengeEn: "Launching Ashtrom's new coworking space, creating an atmosphere that sells an experience, not just space.",
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
    solutionHe: "קומדיה קולנועית: שודדים במוזיאון שהציוד שלהם גווע מסוללה, אבל ה-Humavox POD פועל בשלמות.",
    solutionEn: "Cinematic comedy: museum robbers whose equipment dies from dead batteries, but the Humavox POD works perfectly.",
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
    challengeHe: "השקת פרויקט מגורים יוקרתי בגבעתיים, לייצר סרט שמצדיק את מחיר הפרמיום.",
    challengeEn: "Launch of a luxury residential project in Givatayim, creating a film that justifies the premium price.",
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
  coverImage?: string; // path under /public, e.g. "/vlogimg/ai-cover.jpg"
  sectionImages?: string[]; // additional images for [IMAGE] placeholders in body
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
    id: "ashtromist-employer-branding-case-study",
    relatedYoutubeId: "8RbqUaMR9_c",
    titleHe: "איך הפכנו 'אשטרומיסט' מסיסמה לזהות: מאחורי הקלעים של קמפיין Employer Branding דגל",
    titleEn: "How We Turned 'Ashtromist' from a Slogan into an Identity: Behind the Scenes of a Flagship Employer Branding Campaign",
    excerptHe: "קבוצת אשטרום, אחת מקבוצות הבנייה והתשתיות הגדולות בישראל, הגיעה אלינו עם שאלה אחת: איך גורמים לאלפי עובדים שונים, בעשרות אתרים, להרגיש שהם חלק ממשהו אחד? מסע הפקה ארצי, ימי צילום אינטנסיביים באתרי בנייה, ועריכה שהפכה 'אשטרומיסט' לזהות.",
    excerptEn: "Ashtrom Group, one of Israel's largest construction and infrastructure conglomerates, came to us with one question: how do you make thousands of different employees, across dozens of sites, feel they're part of one thing? A national production journey, intensive filming days at construction sites, and editing that turned 'Ashtromist' into an identity.",
    readingTime: 7,
    tags: ["employer branding", "אשטרום", "HR", "גיוס", "non-actor directing", "פרויקט דגל"],
    relatedServiceHref: "/services/corporate",
    relatedServiceLabelHe: "Employer Branding וגיוס",
    relatedServiceLabelEn: "Employer Branding & Recruitment",
    date: "2024-06-15",
    bodyHe: `## הקמפיין שנולד מתוך שאלה אחת

כשקבוצת אשטרום הגיעה אלינו, לא חיפשו סרט תדמית רגיל. הם חיפשו תשובה לשאלה קשה: **כיצד גורמים לאלפי עובדים שונים — מטכנאי שטח ועד מנהל פרויקטים בכיר, ממהנדס ועד פקידת קבלה — להרגיש שהם חלק מאותו DNA ארגוני?**

הבריף היה ברור: לבנות זהות ולא פרסומת. הסלוגן שהם הביאו אתם, "להיות אשטרומיסט זה קודם כל אופי", היה הנקודת פתיחה. תפקידנו היה להפוך אותו לאמת שאנשים מרגישים — לא לסיסמה שהם קוראים.

## מסע צילומים ארצי: להגיע לכל אשטרומיסט במקומו

החלטנו מהרגע הראשון שהסרט הזה לא ייצולם באולפן. הוא יצולם **בשטח, בגובה עיניים, בתנאים האמיתיים** שבהם אשטרומיסטים עובדים מדי יום.

זה אומר: ירידה לאתרי בנייה פעילים עם אפודים זוהרים וקסדות ביטחון. כניסה לחמ"לים של ניהול תשתיות. צילום ישיבות צוות בהפסקות קפה. עבודה עם מהנדסים שמסתכלים על תכניות בנייה בשמש הצהרים.

**הלוגיסטיקה לבדה הייתה פרויקט בתוך פרויקט:** תיאומים מול עשרות מיקומים ברחבי הארץ, ניהול מול גורמי בטיחות באתרים, לו"ז שנבנה סביב שיפטים ודרישות תפעוליות — ולא סביב שעות הפקה נוחות.

[IMAGE]

## הכישרון האמיתי: לא שחקנים, אשטרומיסטים אמיתיים

הדבר הכי קשה ב-Employer Branding הוא לצלם **עובדים אמיתיים** שמרגישים טבעיים מול מצלמה. אנשים שרגילים להרים פטיש או לנהל ישיבות תקציב — לא לתת עדות מצולמת.

כאן נכנסת מיומנות ה-**non-actor directing**: היכולת ליצור תנאים שבהם אדם רגיל מרגיש מספיק בנוח להגיד את הדבר האמיתי שהוא חושב. לא לקרוא מטלפרומפטר. לא לחזור על משפטים שמישהו כתב לו. לספר **מה הוא מרגיש לעמוד מול הפרויקט שלו**.

תהליך העבודה שלנו: שיחות מקדימות ארוכות עם כל עובד לפני הצילום, הבנת הסיפור האישי שלהם, ויצירת אינטראקציה שמרגישה כמו שיחה ולא כמו ראיון.

**התוצאה מדברת בעד עצמה:** הרגעים החזקים ביותר בסרט — שנבחרו בעריכה — הם הרגעים שבהם עובד פשוט, מי שלא "אמור" להיות הכוכב, אומר משהו שמגיע מהבטן.

## אסטרטגיית העריכה: סיפור אחד, עשרות גרסאות

אחת ההחלטות האסטרטגיות החשובות ביותר בפרויקט הייתה **לתכנן מראש את ריבוי הנגזרות**.

מהפקה אחת, מאותם ימי צילום, יצאנו עם:

**הסרט הראשי (2:10):** הנרטיב המלא של הקמפיין — מה המשמעות של להיות אשטרומיסט, מראשית ועד סוף. מיועד לכנסים, ישיבות הנהלה, ועמודי נחיתה.

**הגרסה הקצרה (0:45):** "פינג-פונג" עריכה קצבית שתופסת תשומת לב תוך 3 שניות. מיועדת לפרסום ממומן ברשתות החברתיות.

**עשרות נגזרות לקמפיין הדיגיטלי:** רזולוציות שונות לפייסבוק, אינסטגרם, גוגל דיספליי, יוטיוב פרה-רול. גרסאות עם כיתובים שונים, קריאות לפעולה, ומיקוד על סגמנטים שונים של מועמדים.

**הכלל שמנחה אותנו:** כל שוט שנכנס ליום הצילום צריך לשרת לפחות 3 נגזרות שונות. זה מה שמגדיל ROI מהותי על תקציב ההפקה.

[IMAGE]

## הצילומי רחפן: כשהסקייל הופך לטיעון

אחד האלמנטים הויזואליים החזקים ביותר בסרט הם **צילומי הרחפן של מגדלי LYFE** ושאר פרויקטי הקבוצה.

לצילומי רחפן בפרויקט כזה יש שתי מטרות שונות:

**ראיית הפיל:** להראות לצופה את גודל הארגון שהוא שוקל להצטרף אליו. כשאתה רואה ממעוף הציפור מגדלים שאשטרומיסטים בנו, **אתה מבין שאתה מצטרף למשהו גדול**.

**הקשר ויזואלי:** מעבר חד מצילום רחפן של מגדל לצילום קלוז-אפ על פניו של מהנדס שבנה אותו — הוא הברק הסינמטי שמחבר סקייל לאנושיות.

## מה שלמדנו על Employer Branding שעובד

אחרי שנים של עבודה בתחום, הפרויקט הזה חידד כמה עקרונות שאנחנו מאמינים בהם עמוקות:

**עובדים אמיתיים > שחקנים:** האותנטיות שעובד אמיתי מביא לפריים לא ניתנת לסימולציה. הלקוח הפוטנציאלי מזהה אותה מיד.

**זהות > מסרים:** "אשטרומיסט זה אופי" עובד כי הוא לא מוכר תנאי עבודה — הוא מוכר **שייכות**. המועמד הנכון שואל את עצמו: "האם אני אשטרומיסט?" לפני שהוא שואל "כמה משלמים?"

**גרסה אחת לא מספיקה:** קמפיין Employer Branding מודרני דורש מספר נגזרות לאותם פלטפורמות שונות. תקצוב נכון של הפקה מתחשב בזה מראש.

**הבריף הוא שיחה, לא מסמך:** עבדנו בשיתוף פעולה צמוד עם מחלקת HR ומחלקת השיווק של אשטרום לאורך כל התהליך. כל שינוי קטן בתסריט, כל דיוק בניסוח — נוצר יחד.

## התוצאה: כשסרט הופך לרכיב ב-DNA הארגוני

בסוף התהליך, "אשטרומיסט" הפך ממילה לזהות. לא כי כתבנו תסריט טוב. אלא כי הצלחנו לתפוס משהו שכבר היה קיים אצל העובדים — ולתת לו מסגרת ויזואלית וסאונד.

**זו ההגדרה שלנו ל-Employer Branding שעובד:** לא לבנות משהו מדומיין מבחוץ. לגלות את מה שקיים מבפנים, ולגרום לו להיראות כמו שהוא מרגיש.`,
    bodyEn: `## The Campaign Born from One Question

When Ashtrom Group came to us, they weren't looking for a regular brand film. They were looking for an answer to a hard question: **how do you make thousands of different employees — from field technicians to senior project managers, from engineers to receptionists — feel like they're all part of the same organizational DNA?**

The brief was clear: build an identity, not an advertisement. The slogan they brought, "Being an Ashtromist is first of all character," was the starting point. Our job was to turn it into something people feel — not a slogan they read.

## A National Filming Journey: Meeting Every Ashtromist Where They Are

From the very first moment we decided this film would not be shot in a studio. It would be shot **in the field, at eye level, in the real conditions** where Ashtromists work every day.

That means: descending into active construction sites with high-visibility vests and safety helmets. Entering infrastructure management command centers. Shooting team meetings during coffee breaks. Working with engineers looking at blueprints in the midday sun.

**The logistics alone were a project within a project:** coordinating with dozens of locations across the country, managing site safety officers, building a schedule around shifts and operational requirements — not around convenient production hours.

[IMAGE]

## The Real Talent: Not Actors, Real Ashtromists

The hardest thing in Employer Branding is filming **real employees** who feel natural in front of a camera. People used to swinging a hammer or managing budget meetings — not to giving filmed testimony.

This is where **non-actor directing** comes in: the ability to create conditions where an ordinary person feels comfortable enough to say the real thing they actually think. Not reading from a teleprompter. Not repeating lines someone wrote for them. Telling **what they feel standing in front of their project**.

Our process: long pre-shoot conversations with every employee before filming, understanding their personal story, and creating an interaction that feels like a conversation, not an interview.

**The result speaks for itself:** the strongest moments in the film — selected in editing — are the moments when a regular employee, someone who "shouldn't" be the star, says something that comes from the gut.

## The Editing Strategy: One Story, Dozens of Versions

One of the most important strategic decisions in the project was **planning the derivatives upfront**.

From one production, from the same filming days, we came out with:

**The Main Film (2:10):** The full campaign narrative — what it means to be an Ashtromist, beginning to end. Intended for conferences, board meetings, and landing pages.

**The Short Version (0:45):** Rhythmic "ping-pong" editing that grabs attention within 3 seconds. Intended for paid social media advertising.

**Dozens of Digital Campaign Derivatives:** Different resolutions for Facebook, Instagram, Google Display, YouTube pre-roll. Versions with different captions, calls to action, and focus on different candidate segments.

**The rule that guides us:** every shot that enters a filming day needs to serve at least 3 different derivatives. That's what materially increases ROI on the production budget.

[IMAGE]

## The Drone Shots: When Scale Becomes an Argument

One of the visually strongest elements in the film is the **drone footage of the LYFE towers** and other Group projects.

Drone shots in this kind of project serve two different purposes:

**Seeing the elephant:** showing the viewer the size of the organization they're considering joining. When you see from a bird's eye view the towers that Ashtromists built, **you understand you're joining something big**.

**Visual connection:** a sharp cut from a drone shot of a tower to a close-up of the engineer's face who built it — that's the cinematic flash that connects scale to humanity.

## What We Learned About Employer Branding That Works

After years of work in this field, this project crystallized several principles we believe in deeply:

**Real employees > actors:** The authenticity a real employee brings to the frame cannot be simulated. The potential hire identifies it immediately.

**Identity > messages:** "Ashtromist is character" works because it doesn't sell working conditions — it sells **belonging**. The right candidate asks themselves: "Am I an Ashtromist?" before they ask "What does it pay?"

**One version isn't enough:** A modern Employer Branding campaign requires multiple derivatives for different platforms. Proper production budgeting accounts for this upfront.

**The brief is a conversation, not a document:** We worked in close collaboration with Ashtrom's HR and marketing departments throughout the process. Every small script change, every phrasing refinement — created together.

## The Result: When a Film Becomes Part of Organizational DNA

At the end of the process, "Ashtromist" went from a word to an identity. Not because we wrote a good script. But because we managed to capture something that already existed in the employees — and gave it a visual framework and sound.

**That's our definition of Employer Branding that works:** not building something imagined from outside. Discovering what exists inside, and making it look the way it feels.`,
  },
  {
    id: "video-to-brand-identity",
    coverImage: "/vlogimg/video-to-brand-cover.jpg",
    sectionImages: ["/vlogimg/video-to-brand-s1.jpg", "/vlogimg/video-to-brand-s2.jpg"],
    titleHe: "מוידאו למותג: הדרך החכמה לייצר שפה ויזואלית מנצחת לחברות טכנולוגיה",
    titleEn: "From Video to Brand: The Smart Way to Build a Winning Visual Language for Tech Companies",
    excerptHe: "חברות טכנולוגיה מוציאות הון על ספרי מותג סטטיים שלא מתרגמים למסך. בפרויקט IRON DRONE בנינו שפה ויזואלית מלאה מתוך הסרט עצמו, והיא הפכה לסטנדרט הרשמי של חברה בורסאית.",
    excerptEn: "Tech companies spend fortunes on static brand books that don't translate to screen. In the IRON DRONE project we built a complete visual language out of the film itself, and it became a public company's official design standard.",
    readingTime: 6,
    bodyHe: `## הבעיה עם ספרי מותג סטטיים

תהליך מיתוג של חברות טכנולוגיה, תשתיות וביטחון דורש לעיתים קרובות תקציבי עתק המועברים למשרדי פרסום עבור יצירת "ספר מותג" סטטי. הבעיה מתחילה כשהמותג פוגש את המסך.

אותם עיצובים סטטיים, הצבע, הטיפוגרפיה, הגריד, לא מתרגמים היטב לעולמות הווידאו, האנימציה והדיגיטל הדינמי. יוצרים מחדש ממקום ה-וידאו, ושם מוצאים שהחוקים שונים לחלוטין.

**השפה הוויזואלית של מותג מודרני צריכה להיוולד מתוך תנועה.**

[IMAGE]

## IRON DRONE: כשסרט מוצר הפך לזהות חברה

בפרויקט שהפקנו עבור מערכת IRON DRONE מבית Airobotics / Ondas Group, ניגשנו לאתגר ייחודי: החברה הגיעה ללא Brand Book מסודר ובלי שפת אינפוגרפיקה שמתאימה למוצר ביטחוני מתקדם.

במקום לחכות לסוכנות מיתוג, בנינו את השפה בעצמנו, ישירות מתוך עולם הסרט.

## שלב 1: Visual DNA מאפס

מחלקת הארט פיתחה קונספט ויזואלי מלא:

**פלטת צבעים:** כחול-מתכת עמוק, ירוק HUD צבאי, שחור תפעולי. כל צבע נבחר כדי לשדר שני דברים בו-זמנית: טכנולוגיה מתקדמת + אמינות מבצעית.

**טיפוגרפיה:** פונטים טכנולוגיים עם ריווח מדוד שמדמה ממשק cockpit. כל מספר, כל מפרט טכני נראה כאילו הוא חלק מממשק אמיתי של מערכת נשק.

**HUD/UI Elements:** ממשקי מסך שנבנו מאפס: נעילות מטרה, טווחי זיהוי, אינדיקטורי גובה ומהירות. כל אלמנט תוכנן כך שהמדהים בו הוא **שהוא נראה אמיתי**.

## שלב 2: האתגר הקולנועי: מהירות פוגשת דיוק

לסרט יש שני מצבי עריכה שצריכים לדור בשלום:

**Speed Ramp מהיר:** רגעי מרדף, טיסה, תנועת נחיל. הצופה חייב להרגיש אדרנלין, מהירות, כוח תפעולי. Drone-to-Drone Tracking אוויריים, זוויות Low-angle שמגדילות את האגרסיביות.

**Speed Ramp איטי:** רגעי הליבה הטכנולוגיים: שיגור, נעילת מטרה, יירוט. פה הסרט מאט. הצופה צריך לראות, להבין, ולהאמין. בדיוק בנקודה הזו נכנסות שכבות ה-HUD שמסבירות את המכניקה.

**סאונד-דיזיין כירורגי:** כל הופעה של גרפיקה "מקבעת" על צליל, בין אם זה ping של מכ"ם, buzz של מנוע חשמלי, או click של נעילה. הסנכרון בין עריכה לסאונד הוא מה שהופך סרט מוצר אינפורמטיבי לחוויה קולנועית.

## התוצאה: השפה הפכה לסטנדרט

מה שהתחיל כסרט מוצר הפך לתשתית מותגית: **הגרפיקה, האנימציה וה-HUD שפיתחנו לסרט אומצו על ידי ONDS כסטנדרט הרשמי** לכלל מערך השיווק שלהם.

**ROI כפול:** הלקוח הגיע לסרט, יצא עם זהות מותגית. ללא תוספת תקציב. ללא משרד פרסום.

זו לא עבודת סוכנות. זו שותפות אסטרטגית.`,
    bodyEn: `## The Problem with Static Brand Books

Branding processes for technology, infrastructure, and defense companies often require enormous budgets transferred to ad agencies for creating a static "brand book." The problem starts when the brand meets the screen.

Those static designs, color, typography, grid, don't translate well to the worlds of video, animation, and dynamic digital. You recreate from the video side, and there you find the rules are completely different.

**A modern brand's visual language needs to be born from motion.**

[IMAGE]

## IRON DRONE: When a Product Film Became a Company's Identity

In the project we produced for the IRON DRONE system by Airobotics / Ondas Group, we faced a unique challenge: the company arrived without an organized Brand Book and without an infographic language suited to an advanced defense product.

Instead of waiting for a branding agency, we built the language ourselves, directly from within the film's world.

## Stage 1: Visual DNA from Scratch

The art department developed a complete visual concept:

**Color palette:** Deep metal blue, military HUD green, operational black. Each color chosen to communicate two things simultaneously: advanced technology + operational reliability.

**Typography:** Technical fonts with measured spacing simulating a cockpit interface. Every number, every technical spec looks as if it's part of a real weapons system interface.

**HUD/UI Elements:** Screen interfaces built from scratch: target locks, detection ranges, altitude and speed indicators. Every element designed so the remarkable thing about it is **that it looks real**.

## Stage 2: The Cinematic Challenge: Speed Meets Precision

The film has two editing modes that need to coexist:

**Fast Speed Ramp:** chase moments, flight, swarm motion. The viewer must feel adrenaline, speed, operational power. Aerial Drone-to-Drone Tracking, Low-angle shots that increase aggression.

**Slow Speed Ramp:** core technical moments: launch, target lock, intercept. Here the film slows. The viewer needs to see, understand, and believe. Exactly at this point the HUD layers enter to explain the mechanics.

**Surgical Sound Design:** Every graphic appearance "locks" on a sound, whether a radar ping, an electric motor buzz, or a lock click. The sync between editing and sound is what turns an informative product film into a cinematic experience.

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
    id: "airobotics-developer-program-blog",
    relatedYoutubeId: "URDNpEwabCc",
    titleHe: "איך מסבירים לעולם טכנולוגיה שמעולם לא ראה: ניתוח סרט ה-Developer Program של Airobotics",
    titleEn: "How to Explain Technology the World Has Never Seen: Analyzing the Airobotics Developer Program Film",
    excerptHe: "כשהמוצר הוא פלטפורמת רחפנים אוטונומיים תעשייתיים עם API, מכונות וירטואליות ועגינה אוטומטית — איך מסבירים את זה לקהל מפתחים ב-3 דקות? מאחורי הקלעים של פרויקט הכרזה מורכב.",
    excerptEn: "When the product is an industrial autonomous drone platform with APIs, virtual machines, and automatic docking — how do you explain it to a developer audience in 3 minutes? Behind the scenes of a complex announcement project.",
    readingTime: 5,
    date: "2024-04-15",
    tags: ["High-Tech", "B2B Video", "Drone Tech", "Developer Marketing", "Host-driven"],
    relatedServiceHref: "/services/hightech",
    relatedServiceLabelHe: "הייטק וסטארטאפ",
    relatedServiceLabelEn: "High-Tech & Startup Video",
    bodyHe: `## כשהמוצר קשה להסבר — הסרט הוא ה-UX של המותג

יש קטגוריה שלמה של חברות שהמוצר שלהן פשוט קשה להסביר. לא בגלל שהן לא טובות בשיווק. אלא כי מה שהן עשו לא ממש קיים עדיין בדמיון הציבורי.

Airobotics בנתה פלטפורמת רחפנים אוטונומיים תעשייתיים — Airbase שמחליף סוללות בעצמו, Optimus שממריא ונוחת ללא מפעיל, ממשקי API שמאפשרים למפתחים לבנות יישומים מעל הנתונים האוויריים. המוצר מרשים. אבל איך מסבירים אותו?

**הסרט הוא ה-UX של המותג.** כשאין אנלוגיה קיימת — הצגה ויזואלית טובה היא הדרך היחידה.

## הבחירה הנרטיבית: Host-Driven על פני B-Roll גנרי

הדיון הראשוני היה בין שתי גישות:

**גישה א' — B-Roll heavy:** הרבה צילומי שטח, טכנולוגיה בפעולה, מוזיקה, כיתובים גרפיים. ויזואלי ומרשים, אבל מסתכן בכך שהצופה יצא מרוצה ולא מבין.

**גישה ב' — Host-driven:** מנחה אחת שמובילה את כל הסרטון, מייצרת אמון אישי ומבטיחה שהצופה מבין כל שלב לפני שעוברים לשלב הבא.

בחרנו גישה ב'. הסיבה: הקהל הוא **מפתחי תוכנה ב-B2B**. הם לא צריכים להתרגש — הם צריכים להבין ולהחליט. Host-driven מדבר שפתם.

[IMAGE]

## צילום ב-2 עולמות: משרד ושטח

הסרטון נע בין שני מוקדים שצולמו בשני ימים:

**המשרד:** חלל העבודה של Airobotics — מפתחים מול מחשבים, לוחות זרימה, צוות. זה נותן אמינות ארגונית: "אנחנו חברה אמיתית עם אנשים אמיתיים."

**מתקן הניסויים החיצוני:** ה-Airbase האמיתי, עם רחפנים שממריאים אוטונומית מתחת לרשתות הגנה. זה נותן את ה-wow moment — ההוכחה שזה קיים.

המעבר בין השניים לא אקראי. בנינו מסלול נרטיבי שמתחיל בהסבר, ממשיך להדגמה, וחוזר לפרטים הטכניים — כך שהצופה רואה את הטכנולוגיה בדיוק כשהוא מוכן להאמין בה.

## שילוב UI ו-VFX: כשהנתונים נראים אמיתיים

האתגר הגרפי: איך מסבירים ממשקי API, מכונות וירטואליות וחלוקת נתונים — בלי להראות slide presentation?

הפתרון: **שילוב UI Integration אורגני.** צילומי מסך ממשיים של ממשק התוכנה, overlay על גבי צילומי השטח, animation קל שמבהיר זרימת מידע.

**הכלל שהנחה אותנו:** כל אלמנט גרפי חייב לענות על שאלה שהצופה שואל באותו רגע. לא דקורציה — תשובה.

## ניהול המנחה: "לא לקרוא, לדבר"

סיוון אברהמי, המנחה, לא הגיעה עם ניסיון של ממש מול מצלמה. הפרויקט הצריך אותה לדבר על תוכן טכני מורכב תוך כדי הובלה ויזואלית של הצופה — בלי שיראה שהיא קוראת.

שיטת העבודה שלנו: **חזרות ארוכות על התוכן עד שהוא הפך לשיח טבעי, לא לשינון.** ביום הצילום עצמו, הטלפרומפטר היה רשת ביטחון בלבד — לא מקרא.

התוצאה: ביצוע שמרגיש כמו שיחה, לא מצגת.

## מה זה אומר לחברות טכנולוגיה בישראל

כשחברה יוצאת עם תוכנית מפתחים, הסרטון הוא כרטיס הכניסה שלה לקהילה. מפתחים סקפטיים מטבעם — הם מזהים מיד את ההבדל בין שיווק ריק לתוכן אמיתי.

**הדברים שעבדו כאן:**
- מנחה שמבינה את הנושא (לא דוגמנית)
- הדגמה אמיתית, לא אנימציה
- הסבר שלב-אחר-שלב שמכבד את האינטליגנציה של הקהל
- CTA ברור שמוביל לדף מידע ספציפי

**הדבר שהכי קשה:** לדעת מה לא לשים. הסרטון הזה יכל להיות 8 דקות. הוא 3.5 דקות. כל דקה שגזרנו — שיפרנו את ה-completion rate.`,
    bodyEn: `## When the Product Is Hard to Explain — the Film Is the Brand's UX

There's a whole category of companies whose product is simply hard to explain. Not because they're bad at marketing. But because what they built doesn't really exist yet in the public imagination.

Airobotics built an industrial autonomous drone platform — an Airbase that replaces batteries itself, an Optimus drone that takes off and lands without an operator, API interfaces that let developers build applications on top of aerial data. The product is impressive. But how do you explain it?

**The film is the brand's UX.** When there's no existing analogy — good visual presentation is the only way.

## The Narrative Choice: Host-Driven over Generic B-Roll

The initial discussion was between two approaches:

**Approach A — B-Roll heavy:** lots of field footage, technology in action, music, graphic captions. Visual and impressive, but risks the viewer leaving satisfied and confused.

**Approach B — Host-driven:** one presenter leading the entire film, building personal trust and ensuring the viewer understands each step before moving to the next.

We chose approach B. The reason: the audience is **B2B software developers**. They don't need to be excited — they need to understand and decide. Host-driven speaks their language.

[IMAGE]

## Filming in 2 Worlds: Office and Field

The film moves between two focal points shot over two days:

**The office:** Airobotics' workspace — developers at computers, flow charts, team. This gives organizational credibility: "We're a real company with real people."

**The external test facility:** the real Airbase, with drones launching autonomously under protective nets. This delivers the wow moment — proof that it exists.

The transition between the two isn't random. We built a narrative path that starts with explanation, moves to demonstration, and returns to technical details — so the viewer sees the technology exactly when they're ready to believe in it.

## UI and VFX Integration: When Data Looks Real

The graphic challenge: how do you explain APIs, virtual machines, and data sharing — without showing a slide presentation?

The solution: **organic UI integration.** Real screenshots of the software interface, overlay on top of field footage, light animation that clarifies data flow.

**The rule that guided us:** every graphic element must answer a question the viewer is asking at that moment. Not decoration — an answer.

## Managing the Presenter: "Don't Read, Talk"

Sivan Abrami, the presenter, didn't arrive with much camera experience. The project required her to speak on complex technical content while visually guiding the viewer — without it looking like she was reading.

Our method: **long rehearsals on the content until it became natural conversation, not memorization.** On the actual shoot day, the teleprompter was a safety net only — not a reading device.

The result: a performance that feels like a conversation, not a presentation.

## What This Means for Israeli Tech Companies

When a company launches a developer program, the film is its entry ticket to the community. Developers are naturally skeptical — they immediately spot the difference between empty marketing and real content.

**What worked here:**
- A presenter who understands the subject (not a model)
- Real demonstration, not animation
- Step-by-step explanation that respects the audience's intelligence
- A clear CTA leading to a specific information page

**The hardest thing:** knowing what not to include. This film could have been 8 minutes. It's 3.5 minutes. Every minute we cut — we improved the completion rate.`,
  },
  {
    id: "airobotics-optimus-faa-blog",
    relatedYoutubeId: "mqVFjv-gPS4",
    titleHe: "מהפכת הרחפנים האוטונומיים: מאחורי הקלעים של סרטון ההכרזה הבינלאומי של Airobotics Optimus",
    titleEn: "The Autonomous Drone Revolution: Behind the Scenes of Airobotics Optimus's International Announcement Film",
    excerptHe: "FAA Type Certification להמראה מעל אנשים וכבישים — ההכרזה הרגולטורית שמפיחה חיים בשוק הרחפנים האוטונומיים. איך מתרגמים אישור טכני/רגולטורי מורכב לסרט הכרזה שמדרבן משקיעים, לקוחות ורגולטורים בינלאומיים כאחד.",
    excerptEn: "FAA Type Certification for flight over people and roads — the regulatory announcement that breathes life into the autonomous drone market. How to translate a complex technical/regulatory approval into an announcement film that galvanizes investors, clients, and international regulators alike.",
    readingTime: 6,
    date: "2024-09-15",
    tags: ["Drone Tech", "FAA", "Defense", "Corporate Announcement", "High-Tech", "Airobotics", "Ondas Holdings"],
    relatedServiceHref: "/services/defense",
    relatedServiceLabelHe: "ביטחוני וטכנולוגי",
    relatedServiceLabelEn: "Defense & Tech Video",
    bodyHe: `## הרגע ההיסטורי שאי אפשר לאבד בפוסט

חברות רבות משיגות אבני דרך רגולטוריות ומחרימות אותן להודעה לעיתונות קרה.

Airobotics ו-Ondas Holdings בחרו אחרת.

ה-FAA Type Certification לרחפן Optimus הוא לא "עוד אישור" — זה ההכרזה שמאפשרת לרחפן אוטונומי לטוס מעל אנשים, כבישים ואזורים מאוכלסים (BVLOS) **ללא הגבלה ובאופן קבוע** — מה שמאות מיזמי רחפנים בעולם עדיין מנסים להשיג. הם הבינו שרגע כזה צריך סרט שיוודא שאף משקיע ואף לקוח B2B לא יפספס את עוצמתו.

**האתגר:** "FAA Type Certification" הוא מושג טכני יבש. הצופה הממוצע — גם B2B — לא מבין מה המשמעות. הסרט צריך לתרגם אישור ביורוקרטי לרגש.

## הפתרון שהפך רגולציה לסרט הכרזה

### 1. מנכ"ל מול לוקיישן — לא מול מצלמה

אריק ברוק (CEO, Ondas Holdings) צולם **בלוקיישן לילי יוקרתי** — עמדת העגינה של ה-Optimus על גג בניין, עם קו הרקיע המואר ברקע.

**למה זה עובד:**
מנכ"ל מול מצלמה ריקה = סרט שיווקי. מנכ"ל מול הטכנולוגיה שלו בלילה = Keynote. הלוקיישן הפך את ההכרזה הפורמלית לחוויה ויזואלית.

### 2. תקריבי מאקרו של הרובוטיקה

אחד מה-USPs המרכזיים של Optimus הוא **החלפת סוללה וחיישנים אוטונומית לחלוטין** — הזרוע הרובוטית שעושה את כל הפעולה בתוך הקפסולה.

בלי תקריב מאקרו מפורט של הזרוע בפעולה — הקהל לא מאמין שזה אמיתי. עם התקריב — הוא רואה את הדיוק ומאמין.

[IMAGE]

### 3. טיפוגרפיה כנרטיב

"TYPE CERTIFICATION" / "24/7" / "HIGHEST LEVEL OF CERTIFICATION" — לא כותרות דקורטיביות. **הן מבנה הנרטיב.**

כל כותרת שמופיעה מחזקת נקודת מכירה (USP) ספציפית בו-זמנית עם הוויזואל. הצופה רואה ושמע ב-2 ערוצים — וזה מכפיל שימור.

### 4. הבנייה המוזיקלית לשיא אחד

הפסקול האלקטרוני מתחיל ב-Tension בינוני ועולה באופן עקבי — לא ב"קפיצות" — עד לרגע שבו הרחפן ממריא. **ממריאה = השחרור הרגשי** שכל הסרט בנה לכיוון אליו.

## האמת על ה-Type Certification — ולמה זה משנה לשיווק

FAA Type Certification מאפשר:
- **BVLOS** (Beyond Visual Line of Sight) — טיסה מחוץ לשדה הראייה
- **טיסה מעל אנשים ובניינים** — ללא אישור מיוחד לכל טיסה
- **שימוש 24/7** — כולל בלילה ובתנאי מזג אוויר משתנים

**בשפת שיווק:** זה ההבדל בין "פיילוט ניסיוני" ל"מוצר שפועל."

הסרט מתרגם את זה לשפה רגשית: לא "קיבלנו אישור" — אלא "אנחנו הראשונים שיכולים."

## מה לומדים מהפרויקט הזה לסרטי הכרזה B2B

**1. הרגולציה היא הסיפור, לא הרקע:**
אל תקבר את ה-Type Certification בכיתוב קטן. הפוך אותו לכותרת הראשונה, לנרטיב המרכזי. הצופה צריך להבין "למה עכשיו" תוך 10 שניות.

**2. בנה את השיא:**
כל סרט הכרזה צריך רגע אחד שלשמו הכל מוביל. ב-Optimus זה ההמראה. בסרטי B2B אחרים זה יכול להיות השקת מוצר, גיוס עובדים ראשון, כניסה לשוק חדש.

**3. Keynote + Product + Action:**
השילוש הזה — מנכ"ל, תקריב הטכנולוגיה, שימוש בפועל — עובד לרוב חברות B2B טכנולוגיות. הוא מספק: מי אחראי, מה הטכנולוגיה, ואיך היא נראית בשטח.`,
    bodyEn: `## The Historic Moment You Can't Lose in Post

Many companies achieve regulatory milestones and bury them in a cold press release.

Airobotics and Ondas Holdings chose differently.

The FAA Type Certification for the Optimus drone isn't "just another approval" — it's the announcement that allows an autonomous drone to fly over people, roads, and populated areas (BVLOS) **permanently and without limitation** — something hundreds of drone ventures worldwide are still trying to achieve. They understood that a moment like this needs a film that ensures no investor or B2B client misses its power.

**The challenge:** "FAA Type Certification" is dry technical jargon. The average viewer — even B2B — doesn't understand the significance. The film needs to translate a bureaucratic approval into emotion.

## The Solution That Turned Regulation Into an Announcement Film

### 1. CEO Facing a Location — Not a Camera

Eric Brock (CEO, Ondas Holdings) was filmed at a **premium night location** — the Optimus docking station on a building rooftop, with the illuminated skyline in the background.

**Why this works:**
CEO facing an empty camera = marketing film. CEO facing his technology at night = Keynote. The location turned the formal announcement into a visual experience.

### 2. Macro Close-ups of the Robotics

One of Optimus's key USPs is **fully autonomous battery and sensor swapping** — the robotic arm performing the entire operation inside the capsule.

Without a detailed macro close-up of the arm in action — the audience doesn't believe it's real. With the close-up — they see the precision and they believe.

[IMAGE]

### 3. Typography as Narrative

"TYPE CERTIFICATION" / "24/7" / "HIGHEST LEVEL OF CERTIFICATION" — these aren't decorative titles. **They are the structure of the narrative.**

Every title that appears reinforces a specific selling point (USP) simultaneously with the visual. The viewer sees and hears in 2 channels — and this doubles retention.

### 4. Building the Musical Arc to One Peak

The electronic score starts at medium tension and rises consistently — not in "jumps" — until the moment the drone launches. **Launch = the emotional release** that the entire film has been building toward.

## The Truth About Type Certification — and Why It Matters for Marketing

FAA Type Certification enables:
- **BVLOS** (Beyond Visual Line of Sight) — flight outside the field of view
- **Flight over people and buildings** — without special approval for each flight
- **24/7 operation** — including at night and in varying weather conditions

**In marketing language:** this is the difference between a "pilot program" and "a product that works."

The film translates this into emotional language: not "we received approval" — but "we're the first who can."

## What This Project Teaches for B2B Announcement Films

**1. The regulation is the story, not the background:**
Don't bury the Type Certification in small print. Make it the first headline, the central narrative. The viewer needs to understand "why now" within 10 seconds.

**2. Build the peak:**
Every announcement film needs one moment that everything leads toward. For Optimus it's the launch. For other B2B films it could be a product launch, first hire, or entry into a new market.

**3. Keynote + Product + Action:**
This trio — CEO, technology close-up, real-world use — works for most B2B tech companies. It delivers: who's responsible, what the technology is, and how it looks in the field.`,
  },
  {
    id: "buildots-green-screen-blog",
    relatedYoutubeId: "nFaOyZwj2PY",
    titleHe: "מסך ירוק כפתרון הפקה אסטרטגי: ניתוח הפרויקט של Buildots",
    titleEn: "Green Screen as a Strategic Production Solution: The Buildots Project Analysis",
    excerptHe: "כשאתרי הבנייה מסוכנים, הלוחות זמנים לחוצים והצוות לא יכול להיות בעשרה מקומות בו-זמנית — מסך ירוק הופך מטכניקה ל-Decision. ניתוח מה מאחורי הסרט של Buildots.",
    excerptEn: "When construction sites are dangerous, schedules are tight, and the crew can't be in ten places at once — green screen stops being a technique and becomes a Decision. An analysis of what's behind the Buildots film.",
    readingTime: 5,
    date: "2023-09-20",
    tags: ["High-Tech", "Green Screen", "Compositing", "Studio Production", "VFX"],
    relatedServiceHref: "/services/hightech",
    relatedServiceLabelHe: "הייטק וסטארטאפ",
    relatedServiceLabelEn: "High-Tech & Startup Video",
    bodyHe: `## המגבלה שהפכה לפתרון

יש רגע בכל הפקה שבו מישהו שואל את השאלה: "אנחנו באמת צריכים ללכת לשם?"

בפרויקט של Buildots — חברת טכנולוגיה שמפחיתה את הכאוס באתרי בנייה — "שם" היה כמה אתרי בנייה פעילים, משרדים עמוסים, ועוד לוקיישנים שכל אחד מהם היה מצריך צוות הפקה, ביטוחים, תיאומים ביטחוניים ולוגיסטיקה מורכבת.

**הסיכון הלוגיסטי הפך להחלטה אמנותית.**

במקום לרדת לשטח, הבאנו את השטח לאולפן.

## מה זה בכלל אומר "Green Screen כאסטרטגיה הפקתית"?

Green Screen (מסך ירוק) לרוב נחשב לכלי CGI — דרך לשים אנשים בחלל הפקות יקרות שבחיים לא תוכל לאסוף צוות אליהן.

אבל בפרויקט Buildots השתמשנו בו באופן אחר לגמרי: **ככלי שמאפשר שליטה מוחלטת על מה שלרוב לא ניתן לשלוט בו.**

כשאתה מצלם על מסך ירוק באולפן:
- אתה שולט על התאורה במאה אחוז (לא תלוי בשמש, בענן, בשעה)
- אתה שולט על ביצועי הטאלנט (אפשר לעשות 20 טייקים בלי לאבד את שעת הזהב)
- אתה שולט על הרצף הנרטיבי (מרכיבים את הסצנות בדיוק בסדר שנרצה)
- אתה מגן על הצוות (אין סכנות שטח, אין חיתוכים בלוח הזמנים)

[IMAGE]

## האתגר הטכני: גרום לזה שייראה אמיתי

מסך ירוק שנראה כמו מסך ירוק — זה כישלון הפקה. **ההצלחה האמיתית היא כשהצופה לא שואל את השאלה.**

שלושה עקרונות הנחו את ההפקה של Buildots:

**עקרון 1 — ההתאמה של האור**

כל קליפ רקע שהשתמשנו בו — אתר בנייה, משרד, חדר ישיבות — נותח לגבי הכיוון, הצבע והעוצמה של האור. לאחר מכן, תאורת האולפן שוחזרה לדייק עם הרקע: אור שמש מימין? Light from right, same color temp. תאורה סטרלינג צהבהבה? Tungsten key.

בלי זה — הטאלנט נראה "פסטד" לתוך הסצנה. עם זה — הוא פשוט שם.

**עקרון 2 — ה-UI חייב להיות רגל של הסצנה**

Buildots היא חברת תוכנה. הממשק שלה הוא המוצר. בסרט, הממשק לא מוצג כהדגמה — הוא חלק מהמרחב הפיזי שהטאלנט חי בו.

UI Integration טוב הוא כזה שהצופה לא שם לב שהוסף בפוסט. אנחנו השגנו זאת דרך scale מדויק, perspective matching, ותאורת reflection שנראית כאילו המסך מאיר את הפנים.

**עקרון 3 — הקצב מסתיר את התפרים**

בימוי קצבי-קומי, מעברים חדים ומשחק פרספקטיבה — כל אלה עובדים לטובתנו. הצופה עסוק בלהיות מרותק — לא בלבחון את ה-compositing.

## הבימוי: בין סרט תדמית לסקיץ' קומי

אחד האתגרים הייחודיים של פרויקט Buildots היה ה-Tone. מדובר בחברת B2B שמוכרת לקבלנים ולמנהלי פרויקטים — קהל שמוכר-מדי לשיווק גנרי ולשוק לשיחה.

הפתרון: **קצב דרמתי-קומי שמכבד את האינטליגנציה של הקהל.**

הסצנות בנויות עם setup-payoff ברור. הטאלנט לא "מציג" — הוא חי בסיטואציה. הקומדיה נובעת מהמצב, לא מ-punchlines.

## מה זה אומר עבורך

כשאתה שוקל Green Screen לפרויקט שלך — השאלה היא לא "האם יש לנו תקציב VFX?" אלא "מה אנחנו מרוויחים בשליטה לעומת מה שאנחנו מפסידים בספונטניות?"

בפרויקטים כמו Buildots, התשובה ברורה: **שליטה שווה יותר.**

מסך ירוק מאפשר להגיד ללקוח: "אנחנו לא מוגבלים על ידי מה שקיים. אנחנו בוחרים מה ייראה."`,
    bodyEn: `## The Constraint That Became the Solution

There's a moment in every production when someone asks the question: "Do we actually need to go there?"

In the Buildots project — a tech company that reduces chaos on construction sites — "there" was several active construction sites, busy offices, and additional locations, each of which would require a production crew, insurance, security clearances, and complex logistics.

**The logistical risk became an artistic decision.**

Instead of going into the field, we brought the field into the studio.

## What Does "Green Screen as a Production Strategy" Even Mean?

Green Screen is usually thought of as a CGI tool — a way to put people in expensive production spaces that you could never actually gather a crew to access.

But in the Buildots project, we used it in a completely different way: **as a tool that enables total control over what's usually uncontrollable.**

When you shoot on green screen in a studio:
- You control lighting one hundred percent (no dependency on sun, clouds, or time of day)
- You control talent performance (you can do 20 takes without losing the golden hour)
- You control the narrative sequence (scenes are assembled in exactly the order you want)
- You protect the crew (no field hazards, no schedule disruptions)

[IMAGE]

## The Technical Challenge: Make It Look Real

A green screen that looks like a green screen — that's a production failure. **True success is when the viewer never even asks the question.**

Three principles guided the Buildots production:

**Principle 1 — Light Matching**

Every background clip we used — a construction site, office, conference room — was analyzed for direction, color, and intensity of light. Studio lighting was then reconstructed to precisely match the background: sunlight from the right? Light from right, same color temp. Warm tungsten office glow? Tungsten key.

Without this — talent looks "pasted" into the scene. With it — they're simply there.

**Principle 2 — UI Must Be a Leg of the Scene**

Buildots is a software company. Their interface is the product. In the film, the interface isn't shown as a demo — it's part of the physical space the talent inhabits.

Good UI Integration is when the viewer doesn't notice it was added in post. We achieved this through precise scale, perspective matching, and reflection lighting that makes the screen appear to illuminate the face.

**Principle 3 — Pace Hides the Seams**

Rhythmic-comic direction, sharp cuts, and perspective play — all of these work in our favor. The viewer is busy being engaged — not examining the compositing.

## The Direction: Between Brand Film and Corporate Sketch

One of Buildots' unique challenges was Tone. This is a B2B company selling to contractors and project managers — an audience too familiar with generic marketing and sales pitches.

The solution: **dramatic-comic pacing that respects the audience's intelligence.**

Scenes are built with clear setup-payoff. Talent doesn't "present" — they inhabit the situation. Comedy emerges from the scenario, not from punchlines.

## What This Means for You

When you're considering Green Screen for your project — the question isn't "Do we have a VFX budget?" but "What do we gain in control versus what do we lose in spontaneity?"

In projects like Buildots, the answer is clear: **control is worth more.**

Green Screen lets you tell the client: "We're not limited by what exists. We choose what will be seen."`,
  },
  {
    id: "ludeo-gaming-blog",
    relatedYoutubeId: "3mxQZMC9ZpI",
    titleHe: "Live-Action + אנימציה תלת-ממד: איך מסבירים לגיימרים טכנולוגיה שמעולם לא ראו | Ludeo",
    titleEn: "Live-Action + 3D Animation: How to Explain Technology Gamers Have Never Seen | Ludeo",
    excerptHe: "כשהמוצר הוא מושג חדש לגמרי — לא שיפור של משהו קיים — הסרט חייב לעשות שני דברים בו-זמנית: לגרום לגיימר להרגיש את ה-wow וגם לגרום למשקיע להבין את ה-how. ניתוח הפתרון ב-Ludeo.",
    excerptEn: "When the product is a completely new concept — not an improvement on something existing — the film must do two things simultaneously: make the gamer feel the wow and make the investor understand the how. An analysis of the solution at Ludeo.",
    readingTime: 5,
    date: "2023-06-20",
    tags: ["Gaming", "High-Tech", "3D Animation", "VFX", "Concept Film", "Live-Action"],
    relatedServiceHref: "/services/hightech",
    relatedServiceLabelHe: "הייטק וסטארטאפ",
    relatedServiceLabelEn: "High-Tech & Startup Video",
    bodyHe: `## הבעיה: לשכנע מישהו שהוא רוצה משהו שמעולם לא שמע עליו

כשהמוצר הוא שיפור של משהו קיים — קל יחסית לספר עליו. "יותר מהיר, יותר זול, יותר פשוט." הצופה מבין את הבסיס.

אבל כשהמוצר הוא מושג חדש לגמרי — הסרט חייב קודם כל ליצור את הצורך, ורק אחר כך להציג את הפתרון.

Ludeo בנתה טכנולוגיה שמאפשרת לגיימר לקחת קליפ YouTube של שחקן אחר, להיכנס ישירות לנקודת הזמן המדויקת שבה קרה הרגע האפי — ולשחק אותו בעצמו. להתחרות. לנצח. לשתף.

מושג כזה לא קיים בשפה הנוכחית של הגיימינג. **הסרט נדרש להיות ה-tutorial לחוויה.**

## שני קהלים, סרט אחד

הבריף של Ludeo הגיע עם אתגר ייחודי: הסרט צריך לעבוד לשני קהלים שונים לגמרי.

**קהל א' — הגיימר:**
רוצה להרגיש. לא להבין. אם אתה מסביר לו יותר מדי — איבדת אותו. הוא צריך לראות את ה-wow ולחשוב "רגע — אני יכול לעשות את זה?!"

**קהל ב' — המשקיע/מפתח המשחק:**
רוצה להבין. לא רק להרגיש. הוא שואל: איך הטכנולוגיה עובדת? מה זה אומר למונטיזציה? איך זה משתלב בפלטפורמות קיימות?

הפתרון שמצאנו: **שכבות נרטיביות מקבילות.**

[IMAGE]

## הפתרון הויזואלי: שני עולמות, שיחה אחת

בנינו מבנה נרטיבי דו-שכבתי:

**שכבה 1 — Live-Action ריאליסטי**

חדר גיימינג אמיתי. גיימר אמיתי. מסכים, תאורת RGB סגולה-כחולה, אווירת לילה. הכל מוכר, הכל אותנטי. זאת השפה שהגיימר מדבר.

בשכבה הזאת, הסרט מתחיל בתסכול — גיימר שצופה בסרטוני גיימפליי מהצד, יודע שהוא יכול להכות את השיא, אבל לא יכול להיכנס. ואז — ה-Ludeo מגיע.

**שכבה 2 — אנימציה תלת-ממדית עתידנית**

מה שקורה "מאחורי הקלעים" — ב"מעבדת Ludeo" — מוצג כעולם תלת-ממד מופשט: דמויות כחולות-אבסטרקטיות שמנהלות את הטכנולוגיה. הן חותכות רגעי שיא. מגדירות יעדים. יוצרות קובץ שחקן-יחיד.

**למה הפרדה כזאת?** כי לאנימציה יש יכולת לתרגם תהליך טכני לוויזואל ישיר בלי להפריע לזרימה הנרטיבית. הגיימר ממשיך לראות "סיפור" — המשקיע מבין "מה".

## בניית ה-VFX: גרום לטכנולוגיה להיראות חלקה

השלב הטכנית-קריאייטיבי המורכב ביותר: **UI/UX Integration — איך ממשק המשתמש נראה כחלק אינטגרלי מהסצנה, לא כ-overlay גנרי.**

הכלל שהנחה אותנו: **ה-UI הוא שחקן בסצנה — לא כיתוב.**

לוח המובילים (Leaderboard) לא מוצג כ-screenshot. הוא מופיע ומגיב לפעולות הגיימר בזמן אמת — עולה, מסמן ניצחון, מאפשר שיתוף.

ממשק הבחירה של הרגע האפי לא מוסבר — הוא מוצג: הגיימר לוחץ, העולם נשאב.

## הבימוי: אנרגיה של גיימינג, לא מצגת

גיימרים מפתחים radar חד לתוכן מזויף. כשחברת גיימינג מפיקה תוכן שנראה כמו מצגת שיווקית — הם עוזבים תוך שניות.

הבימוי של Ludeo נבנה על קצב שמשקף ישירות את אנרגיית הגיימינג עצמו: **מהיר, ריגושי, עם payoff ברורים.**

Setup: תסכול → Discovery → המהפך → ניצחון → שיתוף.

כל שלב מרגיש כמו פרוגרסיה במשחק עצמו. הצופה לא רואה סרט — הוא חי ב-gameplay loop.

## מה זה אומר לחברות טכנולוגיה שמסבירות מושגים חדשים

**הדבר שלמדנו מ-Ludeo:** כשהמוצר הוא innovation אמיתי — אי אפשר לסמוך על ה-product לדבר בעד עצמו. הסרט חייב ליצור את ה-mental model לפני שהוא מציג את ה-product.

שלושה שלבים שעובדים:
1. **צור את הכאב** — הראה את מה שקיים עכשיו ולמה הוא לא מספיק
2. **הראה את הפתרון** — ויזואלי, מוחשי, מהיר
3. **תן לצופה לדמיין את עצמו שם** — לא "המוצר עושה X" אלא "אתה יכול לעשות X"

זה ההבדל בין סרט שמסביר לסרט שמוכר.`,
    bodyEn: `## The Problem: Convincing Someone They Want Something They've Never Heard Of

When the product is an improvement on something existing — it's relatively easy to talk about. "Faster, cheaper, simpler." The viewer understands the foundation.

But when the product is a completely new concept — the film must first create the need, and only then present the solution.

Ludeo built technology that lets a gamer take a YouTube clip of another player, enter directly at the precise moment the epic moment happened — and play it themselves. Compete. Win. Share.

A concept like this doesn't exist in the current language of gaming. **The film needed to be the tutorial for the experience.**

## Two Audiences, One Film

Ludeo's brief came with a unique challenge: the film needs to work for two completely different audiences.

**Audience A — The Gamer:**
Wants to feel. Not understand. If you explain too much — you've lost them. They need to see the wow and think "wait — can I do this?!"

**Audience B — The Investor/Game Developer:**
Wants to understand. Not just feel. They ask: how does the technology work? What does this mean for monetization? How does it integrate with existing platforms?

The solution we found: **parallel narrative layers.**

[IMAGE]

## The Visual Solution: Two Worlds, One Conversation

We built a dual-layer narrative structure:

**Layer 1 — Realistic Live-Action**

A real gaming room. A real gamer. Screens, purple-blue RGB lighting, night atmosphere. All familiar, all authentic. This is the language the gamer speaks.

In this layer, the film begins with frustration — a gamer watching gameplay videos from the sidelines, knowing they can beat the record, but unable to enter. And then — Ludeo arrives.

**Layer 2 — Futuristic 3D Animation**

What happens "behind the scenes" — in the "Ludeo Lab" — is presented as an abstract 3D world: abstract blue figures managing the technology. They clip epic moments. Define objectives. Create a single-player shareable file.

**Why this separation?** Because animation has the ability to translate a technical process into direct visual without disrupting the narrative flow. The gamer continues seeing a "story" — the investor understands the "what."

## Building the VFX: Make Technology Look Seamless

The most complex technical-creative phase: **UI/UX Integration — making the user interface appear as an integral part of the scene, not a generic overlay.**

The rule that guided us: **The UI is a character in the scene — not a caption.**

The Leaderboard isn't shown as a screenshot. It appears and responds to the gamer's actions in real-time — rises, marks victory, enables sharing.

The epic moment selection interface isn't explained — it's shown: the gamer clicks, the world is sucked in.

## The Direction: Gaming Energy, Not a Presentation

Gamers develop sharp radar for fake content. When a gaming company produces content that looks like a marketing presentation — they leave within seconds.

Ludeo's direction was built on a pace that directly mirrors gaming energy itself: **fast, visceral, with clear payoffs.**

Setup: Frustration → Discovery → The Turning Point → Victory → Sharing.

Every step feels like progression in the game itself. The viewer doesn't watch a film — they live the gameplay loop.

## What This Means for Tech Companies Explaining New Concepts

**What we learned from Ludeo:** When the product is real innovation — you can't rely on the product to speak for itself. The film must create the mental model before it presents the product.

Three steps that work:
1. **Create the pain** — show what exists now and why it's not enough
2. **Show the solution** — visual, tangible, fast
3. **Let the viewer imagine themselves there** — not "the product does X" but "you can do X"

That's the difference between a film that explains and a film that sells.`,
  },
  {
    id: "big-fashion-giliot-blog",
    relatedYoutubeId: "yDJ5shdbFMw",
    titleHe: "רחפן ו-OOH: כשצילום אווירי הופך קמפיין חוצות לנכס וידאו | BIG FASHION גלילות",
    titleEn: "Drone & OOH: When Aerial Cinematography Turns an Out-of-Home Campaign Into a Video Asset | BIG FASHION Gililot",
    excerptHe: "קמפיין חוצות עם עשרות שלטים ברחבי גוש דן הוא השקעה ענקית. אבל מי רואה את כולם יחד? רחפן. ניתוח הפרויקט שיצר נכס שיווקי מקמפיין OOH של BIG FASHION גלילות.",
    excerptEn: "An out-of-home campaign with dozens of billboards across greater Tel Aviv is a massive investment. But who sees them all together? A drone. An analysis of the project that created a marketing asset from BIG FASHION Gililot's OOH campaign.",
    readingTime: 4,
    date: "2025-03-05",
    tags: ["Commercial", "Drone", "OOH", "Retail", "Aerial Cinematography"],
    relatedServiceHref: "/services/commercial",
    relatedServiceLabelHe: "מסחרי ואירועים",
    relatedServiceLabelEn: "Commercial & Events",
    bodyHe: `## הבעיה הנסתרת של קמפיין OOH

קמפיין חוצות מוצלח הוא אחד מהצעדים השיווקיים הכי עוצמתיים שיש. כשאתה רואה שלט ענק על גורד שחקים בציר איילון, גשר פרסום, ועוד שלושים שלטים ברחבי גוש דן — אתה מרגיש שהמותג הזה *נמצא*.

אבל יש בעיה: **אף אחד לא רואה את כולם.**

הנהג שעובר על איילון רואה שלט אחד. הולך הרגל ברמת השרון רואה שני שלטים. האדם ברחוב לעולם לא חווה את הנפח הכולל של הקמפיין.

**רחפן פותר את זה.**

## BIG FASHION גלילות: הכנות להשקה גדולה

לקראת פתיחת BIG FASHION גלילות — מתחם קניות ואופנה חדש ברמת השרון — הושקה מערכת פרסום חוצות מסיבית: שלטי ענק על מגדלי עסקים, גשרי פרסום, שלטי תחנות אוטובוס, ופריסה מלאה לאורך ציר המרכזי.

ההשקה — 27.02, יום חמישי — הצריכה לייצר מקסימום ציפייה בפרק זמן קצר.

המשימה שקיבלנו: **לתעד את כל הנוכחות הזאת בנכס וידאו אחד שמשדר עוצמה ודחיפות.**

[IMAGE]

## הפתרון: רחפן כ"עד" הקמפיין

צילום רחפן אווירי נותן לצופה את מה שאי אפשר לראות מהאדמה: **הנפח הכולל.**

כשהמצלמה עולה ומתרחקת, פתאום רואים שלושה שלטים בפריים אחד. ממשיכים עולים — ורואים ריכוז של נוכחות מותגית שאי אפשר להכחיש.

הגישה שלנו בפרויקט:

**שכבת יום + שכבת לילה**

שלטי חוצות נראים שונה לגמרי ביום ובלילה. בסרטון שילבנו את שתי השכבות: צילומים בשעות שיא היום שמדגישים את הגודל, וצילומי לילה שבהם התאורה הפנימית של השלטים יוצרת נוכחות חזקה יותר ממה שאפשר לצפות.

העריכה קצבית שמחליפה בין יום ללילה לא רק מציגה שתי תמונות — היא יוצרת תחושה שהקמפיין "שם" 24/7.

**מעל לתנועה, לא מתוכה**

הנקודת מבט האווירית של הרחפן נותנת קונטקסט שצילום רגיל לא יכול לתת: אנחנו רואים את השלט *ואת* העורק המרכזי שמולו. מאות אלפי מכוניות ביום עוברות שם. הרחפן מדגים את זה בלי לאמר מילה.

## עריכה קצבית: ליצור דחיפות

הסרטון נבנה על לוגיקה של ספירה לאחור. כל כמה שניות — שלט חדש, זווית חדשה, נקודת מבט חדשה. הקצב האנרגטי המסונכרן למוזיקה עובד על שני מישורים:

**מישור רגשי:** תחושה שהאירוע קרוב, שיש עוצמה, שמשהו גדול עומד לקרות.

**מישור מידעי:** הצופה רואה נוכחות מותגית אחרי נוכחות — מצטבר רושם של קמפיין מבוצע על הצד הטוב ביותר.

## מה זה אומר לקמפיין OOH שלך

כל קמפיין חוצות ראוי לנכס וידאו מלווה. הסיבות:

**1. הנצחה ושיתוף:** שלט חוצות נמחק ביום שאחרי הקמפיין. סרטון רחפן שלו — נשאר, מופץ, מוכיח ROI.

**2. מדיה דיגיטלית מנכס פיזי:** הסרטון פועל ברשתות החברתיות, בפרסום דיגיטלי, בהצגות למשקיעים — בכל ערוץ שבו השלטים הפיזיים לא יכולים להגיע.

**3. הוכחת נוכחות:** ללקוח, לשותפים, למדיה — "הנה הקמפיין שלנו בשטח" הוא דבר אחד. "הנה הווידאו שמראה את הקמפיין שלנו בשטח" — זה הרבה יותר עוצמתי.

**4. תוכן שיווקי לתקופות עתידיות:** הסרטון משמש גם כ-Case Study להשקות עתידיות, גם כחומר PR, וגם כנכס להצגות לשוכרים ושותפים עסקיים.

הרחפן לא רק מתעד את הקמפיין — הוא *מגביר* אותו.`,
    bodyEn: `## The Hidden Problem with OOH Campaigns

A successful out-of-home campaign is one of the most powerful marketing moves there is. When you see a massive billboard on a high-rise along Ayalon, an advertising bridge, and thirty more signs across greater Tel Aviv — you feel that brand *is there*.

But there's a problem: **no one sees them all.**

The driver on Ayalon sees one sign. The pedestrian in Ramat HaSharon sees two. The person on the street never experiences the full volume of the campaign.

**A drone solves this.**

## BIG FASHION Gililot: Preparing for a Major Launch

In anticipation of the opening of BIG FASHION Gililot — a new fashion and retail complex in Ramat HaSharon — a massive out-of-home advertising system launched: giant signs on business towers, advertising bridges, bus stop placements, and full coverage along the main artery.

The launch — 27.02, Thursday — needed to generate maximum anticipation in a short timeframe.

Our assignment: **document all of this presence in one video asset that conveys power and urgency.**

[IMAGE]

## The Solution: Drone as the Campaign's "Witness"

Aerial drone footage gives the viewer what's impossible to see from the ground: **the total volume.**

When the camera rises and pulls back, you suddenly see three signs in one frame. Keep rising — and you see a concentration of brand presence that's undeniable.

Our approach in the project:

**Day Layer + Night Layer**

Out-of-home signs look completely different by day and by night. In the film we combined both layers: daytime shots during peak hours that emphasize scale, and night shots where the signs' internal illumination creates a stronger presence than you'd expect.

The rhythmic editing switching between day and night doesn't just present two pictures — it creates the feeling that the campaign is "there" 24/7.

**Above the Traffic, Not Within It**

The drone's aerial perspective provides context that ground-level shooting cannot: we see the sign *and* the major artery in front of it. Hundreds of thousands of cars pass there daily. The drone demonstrates this without saying a word.

## Rhythmic Editing: Creating Urgency

The film was built on a countdown logic. Every few seconds — a new sign, a new angle, a new perspective. The energetic pace synced to music works on two levels:

**Emotional level:** the feeling that the event is near, that there's power, that something big is about to happen.

**Informational level:** the viewer sees brand presence after brand presence — accumulating an impression of a campaign executed at the highest level.

## What This Means for Your OOH Campaign

Every out-of-home campaign deserves a companion video asset. The reasons:

**1. Preservation and sharing:** a billboard disappears the day after the campaign ends. A drone film of it — stays, circulates, proves ROI.

**2. Digital media from a physical asset:** the film works on social media, digital advertising, investor presentations — every channel the physical signs can't reach.

**3. Proof of presence:** to clients, partners, media — "here's our campaign in the field" is one thing. "Here's the video showing our campaign in the field" — that's far more powerful.

**4. Marketing content for future periods:** the film also serves as a Case Study for future launches, PR material, and an asset for presentations to tenants and business partners.

The drone doesn't just document the campaign — it *amplifies* it.`,
  },
  {
    id: "ashtrom-properties-blog",
    relatedYoutubeId: "ome2LtSiFWQ",
    titleHe: "כשהנדל\"ן מרגיש: ניתוח סרט התדמית של אשטרום נכסים",
    titleEn: "When Real Estate Feels Human: Analyzing the Ashtrom Properties Brand Film",
    excerptHe: "700 אלף מ\"ר, 60 נכסים מניבים, ועשרות שנות היסטוריה — איך מספרים את הסיפור הזה בצורה שמרגשת ולא רק מרשימה? מאחורי הקלעים של הפקה נדל\"נית קורפורייטית בסקאלה ארצית.",
    excerptEn: "700,000 sqm, 60 income-producing assets, and decades of history — how do you tell that story in a way that moves, not just impresses? Behind the scenes of a nationwide corporate real estate production.",
    readingTime: 5,
    date: "2024-03-15",
    tags: ["Real Estate", "Corporate", "Drone", "CGI", "Brand Film", "B2B"],
    relatedServiceHref: "/services/realestate",
    relatedServiceLabelHe: "נדל\"ן ואדריכלות",
    relatedServiceLabelEn: "Real Estate & Architecture",
    bodyHe: `## הבעיה עם סרטי נדל"ן

סרטי נדל"ן מייגעים. לא בגלל הנכסים — בגלל הגישה.

טסים עם רחפן, מציגים מגדל, מוסיפים מוזיקת אמביאנט, כותבים "איכות שאין שניה לה" — ויוצאים עם סרט שנראה כמו כל שאר סרטי הנדל"ן.

הבעיה: **נדל"ן עסקי הוא מוצר שנרכש ברציו, אבל מוצע לרגש.** אנשים חותמים על חוזי שכירות ב-20 מיליון שקל על סמך תחושת ביטחון, ותק ועתיד.

**הסרט של אשטרום נכסים נבנה להפעיל את הרגש הזה — בשפה קורפורייטית.**

## הכלל הראשון: ותק אינו מספרים — הוא תמונות

כשמסרים כמו "60 שנות ניסיון" נאמרים בוויס-אובר — הם נשמעים כמו מודעת דרושים. כשאתה *רואה* עשורים של היסטוריה מתפתחים לפניך בצילומי ארכיון, עם גרפיקת טיים-ליין שמחברת עבר להווה — אתה *מאמין* לוותק.

בסרט של אשטרום נכסים, שילבנו חומרי ארכיון היסטוריים עם צילומי עכשיו — ואת החיבור ביניהם עשינו ויזואלי ולא מילולי. הצופה עושה את החיבור בעצמו. **זה הרבה יותר עוצמתי ממה שספיקר יאמר לו.**

[IMAGE]

## הכלל השני: ארכיטקטורה + אנשים = נשמה

הבדיחה המקצועית בתעשייה: "נכסים נראים טוב יותר בלי אנשים."

מבחינה טכנית — נכון. מבחינה שיווקית — הרסני.

חברת נדל"ן עסקית שמוכרת *חלל* אינה מוכרת מ"ר. היא מוכרת את מה שקורה *בתוך* המ"ר: ישיבות שמשנות החלטות, חברות שצומחות, קהילות עסקיות שמתפתחות.

בסרט, כל שוט ארכיטקטוני קיבל *מקביל* של אנשים בפעולה — בפגישה, בהליכה, בשיחה ספונטנית במסדרון. **הבניין שוקל כמה שיקול. האנשים בתוכו — זה המותג.**

## הכלל השלישי: CGI כגשר בין הווה לעתיד

אשטרום נכסים יש פרויקטים שעדיין בפיתוח. איך מציגים נכס שעדיין לא קיים?

שתי גישות שגויות:
- רנדרים בלבד — קרים, מנוכרים, לא מאמינים
- להסתיר — החמצת הזדמנות שיווקית

**הגישה שלנו: שילוב חלק של CGI בתוך חומרי הלייב-אקשן.**

כשה-CGI מתחיל ממקום שאתה מכיר — אותה עיר, אותו ציר, אותה אסתטיקת מותג — הקפיצה מ"מה שיש" ל"מה שיהיה" מרגישה אמינה. הצופה לא צריך לנחש את ההבדל.

## ניהול הפקה בסקאלה ארצית

הפקה מהסוג הזה דורשת לוגיסטיקה שרוב חברות ההפקה לא מנוסות בה:

**מה זה אומר בפועל:**
- תיאום צילומים בעשרות לוקיישנים בכל הארץ (תל אביב, בני ברק, ירושלים, צפון) — כל אחד עם הרשאות שונות, שוכרים פעילים ואילוצי שעות
- צוות רחפן מוסמך עם היתרי טיסה בשטחים עירוניים סגורים
- ניהול גישה לנכסים פעילים מבלי להפריע לשוכרים
- גיוס ארכיון היסטורי מהתיקים הפנימיים של הלקוח ועיבוד שלו לפורמט HD
- סינכרון בין יחידת ה-CGI לצוות הצילום — שתי שפות הפקה שונות שחייבות לדבר אחת עם השניה

**האמת:** הלוגיסטיקה של סרט כזה מורכבת יותר מהלוגיסטיקה של עסקה נדל"נית ממוצעת.

## מה מביאים לשיחת הבריף

כשחברת נדל"ן עסקית מגיעה לשיחת בריף עם חברת הפקות, היא לרוב מגיעה עם שלושה נכסים שהיא הכי גאה בהם ורשימה של "מסרים".

מה שאנחנו עושים: **בונים נרטיב לפני שאנחנו בונים שאטליסט.**

מי הקהל? מה הוא כבר יודע? מה הוא צריך להרגיש? מה הפעולה שאנחנו רוצים שיעשה אחרי שראה את הסרט?

רק אחרי שיש תשובות לאלה — נבנה את מפת הצילומים.`,
    bodyEn: `## The Problem with Real Estate Films

Real estate films are boring. Not because of the properties — because of the approach.

Fly with a drone, show a tower, add ambient music, write "unparalleled quality" — and you emerge with a film that looks like every other real estate film.

The problem: **commercial real estate is a product purchased through reason, but offered to emotion.** People sign rental contracts for 20 million shekels based on a feeling of security, longevity, and future.

**The Ashtrom Properties film was built to activate that emotion — in a corporate language.**

## Rule One: Legacy Isn't Numbers — It's Images

When messages like "60 years of experience" are delivered in voiceover — they sound like a job posting. When you *see* decades of history unfolding before you in archival footage, with timeline graphics connecting past to present — you *believe* the legacy.

In the Ashtrom Properties film, we integrated historical archival material with current footage — and we made the connection between them visual, not verbal. The viewer makes the connection themselves. **That's far more powerful than what any speaker can tell them.**

[IMAGE]

## Rule Two: Architecture + People = Soul

The industry's professional joke: "properties look better without people."

Technically — correct. Strategically — disastrous.

A commercial real estate company selling *space* isn't selling square meters. It's selling what happens *inside* the square meters: meetings that change decisions, companies that grow, business communities that develop.

In the film, every architectural shot received a *parallel* of people in action — in a meeting, walking, in a spontaneous hallway conversation. **The building weighs as much as it weighs. The people inside it — that's the brand.**

## Rule Three: CGI as a Bridge Between Present and Future

Ashtrom Properties has projects still in development. How do you present an asset that doesn't yet exist?

Two wrong approaches:
- Renders only — cold, alienating, unconvincing
- Hide them — missed marketing opportunity

**Our approach: seamless integration of CGI within live-action material.**

When the CGI starts from a place you recognize — the same city, the same artery, the same brand aesthetic — the jump from "what exists" to "what will be" feels credible. The viewer doesn't need to guess the difference.

## Managing a Nationwide Production

A production of this kind requires logistics that most production companies aren't experienced with:

**What this means in practice:**
- Coordinating shoots at dozens of locations nationwide (Tel Aviv, Bnei Brak, Jerusalem, the North) — each with different permits, active tenants, and time constraints
- A certified drone crew with flight permits in closed urban areas
- Managing access to active properties without disrupting tenants
- Sourcing historical archives from the client's internal files and processing them to HD format
- Synchronizing the CGI unit with the filming crew — two different production languages that must speak to each other

**The truth:** the logistics of a film like this are more complex than the logistics of an average real estate deal.

## What to Bring to the Brief Meeting

When a commercial real estate company arrives for a brief meeting with a production company, they usually bring three properties they're most proud of and a list of "messages."

What we do: **build a narrative before we build a shot list.**

Who's the audience? What do they already know? What do they need to feel? What action do we want them to take after watching the film?

Only after there are answers to these — do we build the shot map.`,
  },
  {
    id: "vertica-medtech-blog",
    relatedYoutubeId: "7vCj49e42Ow",
    titleHe: "איך מוכרים מוצר שאי אפשר לדבר עליו: הפקת Onboarding לטכנולוגיה רפואית אינטימית | Vertica",
    titleEn: "How to Sell a Product You Can't Talk About: Onboarding Production for Intimate Medical Technology | Vertica",
    excerptHe: "מוצרי MedTech אינטימיים הם אחת מהאתגרות הגדולות בתקשורת שיווקית. הם נדרשים להיות מדויקים רפואית, נגישים רגשית, ולא יוצרים מבוכה — בו-זמנית. ניתוח ההחלטות מאחורי סרט ה-Onboarding של Vertica.",
    excerptEn: "Intimate MedTech products are one of the biggest challenges in marketing communication. They need to be medically precise, emotionally accessible, and non-embarrassing — simultaneously. An analysis of the decisions behind the Vertica onboarding film.",
    readingTime: 5,
    date: "2023-11-15",
    tags: ["MedTech", "Onboarding", "Medical CGI", "Product Film", "How-To"],
    relatedServiceHref: "/services/hightech",
    relatedServiceLabelHe: "הייטק וסטארטאפ",
    relatedServiceLabelEn: "High-Tech & Startup Video",
    bodyHe: `## הבעיה שאי אפשר להתעלם ממנה

כשחברת MedTech מגיעה עם מוצר אינטימי — טיפול רפואי שקשור לאזורים שאנשים לא מדברים עליהם בגלוי — מחלקת השיווק נכנסת למשבר.

איך מסבירים מוצר כזה?
- יותר מדי טכני → מבהיל
- יותר מדי "נחמד" → לא אמין
- יותר מדי ישיר → מביך
- יותר מדי עקיף → מבולבל

הפרויקט של Vertica — מכשיר RF לטיפול באי-אונות — הגיע עם כל האתגרים האלה בבת אחת.

**המטרה שהגדרנו:** סרט Onboarding שצופה ראשון-בו לא ירגיש אפילו רגע אחד של אי נוחות.

## ההחלטה הראשונה: טון לפני תסריט

לפני שכתבנו מילה אחת בתסריט, הגדרנו את הטון. זה השלב שרוב הלקוחות מדלגים עליו — ומשלמים על כך מאוחר יותר.

**הטון שבחרנו: "הסבר של רופא שאתה סומך עליו."**

לא טלשופינג. לא אנפורמרשיל. לא קמפיין עם מוזיקה דרמתית. רופא שיושב מולך, מסביר, מדגים, ועושה שהכל מרגיש פשוט.

זה הנחה את כל ההחלטות שאחריה:
- בגדים: נקיים, ניטרליים, לא מינוכרים ולא צבעוניים
- תאורה: High-key רכה, לא צבעונית, לא דרמתית
- קצב: איטי ומכוון, לא מהיר ואנרגטי
- שחקן: ישיר לעין, ביטחון עצמי, לא מופתע מכלום

[IMAGE]

## ה-CGI הרפואי: להסביר מה שאי אפשר לצלם

הרגע הטכנית-קריאייטיבי המורכב ביותר: **איך מסבירים מנגנון פיזיולוגי אינטימי — ויזואלית — בלי לצלם מה שאי אפשר לצלם?**

הפתרון: **Blue Medical Mesh — דמות אנושית שקופה בתלת-ממד.**

טכנולוגית ה-RF עובדת על ידי אלקטרומגנטיזם שחודר לרקמות ומגרה מחדש את מחזור הדם. כדי להסביר את זה ויזואלית, יצרנו:

1. **מודל תלת-ממד** של הגוף האנושי (mesh כחול שקוף) שמציג את מיקום המכשיר ביחס לאנטומיה
2. **אנימציית זרמים** שמדגימה את חדירת ה-RF לרקמות
3. **הצגה של אזורי הטיפול** ללא כל צילום ישיר

ה-CGI פתר את הבעיה מבלי להוריד את הרמה המקצועית — נהפוך הוא, הוא הוסיף אמינות רפואית שצילום רגיל לא היה מאפשר.

## הסנכרון בין אולפן ל-CGI

הרגע הטכני שדרש הכי הרבה תכנון: **כדי שה-CGI ייראה מסונכרן עם השחקן, גם הזווית וגם הסקאלה חייבות להיות זהות.**

תכנון שקדם לצילום:
- הגדרה מדויקת של זווית הצילום של השחקן (שיתאים לזווית המודל התלת-ממדי)
- מיקום ידי השחקן תוכנן כך שיתכתב עם מיקום ה-CGI
- לייב-אקשן צולם קודם, CGI הוסף לאחר מכן בהתאמה מדויקת

ללא תכנון זה ב-preproduction — ה-CGI היה מרגיש "פסטד" ולא אינטגרלי.

## צילומי Close-up ו-Overhead: הדיוק שבונה אמון

מוצר טכני שדורש הפעלה מדויקת — טעינה מגנטית, ג'ל, כפתורים, LED — לא יכול להיות מוצג בלבד בשוטים רחבים.

הכנסנו שני סוגי צילום שבדרך כלל לא מופיעים יחד:

**Overhead (מלמעלה):** מאפשר לצופה לראות בדיוק מה הידיים עושות — פתיחת הקופסה, הוצאת הרכיבים, חיבור מגנטי — כאילו הוא עצמו עושה את זה.

**Extreme Close-up:** נוריות ה-LED, הקליק המגנטי, ניקוי — הדברים שצופה חייב לראות בגדול כדי לזכור אותם.

העריכה בין שניהם יצרה זרימה שמרגישה כמו הדרכה אישית, לא מדריך כתוב.

## סצנת הניקוי: למה לא לדלג על זה

לקוחות רבים רוצים לדלג על סצנות ניקוי ותחזוקה. "זה לא מסקרן. הצופה יקפוץ."

**הטעות הגדולה.**

לצרכן שקונה מוצר MedTech אינטימי, הניקוי הוא אחד מחסמי הרכישה הגדולים ביותר. "כמה זה מסובך? האם זה מעייף? האם זה היגייני?"

סצנת הניקוי בכיור — פשוטה, מהירה, ישירה — מורידה חסם ענקי: **"אה, זה פשוט בדיוק כמו כל מוצר אחר שיש לי בבית."**

אמינות מגיעה מהפרטים הקטנים שמותגים בדרך כלל מתביישים להראות.

## מה הסרט הזה מוכיח עבורך

ללקוח שמחפש חברת הפקות לפרויקט MedTech או מוצר טכני מורכב:

**הסרט של Vertica מדגים:**
- יכולת לעבוד עם נושאים רגישים מבלי לפגוע בנראות ובאמינות
- שילוב CGI רפואי בתוך הפקת לייב-אקשן
- הפקה בסטנדרט גלובלי (אנגלית, מוכן ל-US/EU platforms)
- ROI מדיד: פחות פניות שירות, פחות החזרות, יותר שביעות רצון

וידאו Onboarding טוב לא מסביר את המוצר. **הוא גורם ללקוח שלך לרצות להשתמש בו.**`,
    bodyEn: `## The Problem You Can't Ignore

When a MedTech company arrives with an intimate product — medical treatment related to areas people don't discuss openly — the marketing department goes into crisis.

How do you explain a product like this?
- Too technical → frightening
- Too "nice" → not credible
- Too direct → embarrassing
- Too indirect → confusing

The Vertica project — an RF device for treating erectile dysfunction — arrived with all of these challenges at once.

**The goal we defined:** an Onboarding film where a first-time viewer won't feel a single moment of discomfort.

## The First Decision: Tone Before Script

Before we wrote a single word of script, we defined the tone. This is the stage most clients skip — and pay for later.

**The tone we chose: "an explanation from a doctor you trust."**

Not telemarketing. Not an infomercial. Not a campaign with dramatic music. A doctor sitting across from you, explaining, demonstrating, making everything feel simple.

This guided every decision that followed:
- Wardrobe: clean, neutral, neither clinical nor colorful
- Lighting: soft High-key, not colorful, not dramatic
- Pace: slow and deliberate, not fast and energetic
- Talent: direct eye contact, self-assured, unsurprised by anything

[IMAGE]

## Medical CGI: Explaining What You Can't Film

The most complex technical-creative moment: **how do you explain an intimate physiological mechanism — visually — without filming what can't be filmed?**

The solution: **Blue Medical Mesh — a transparent 3D human figure.**

RF technology works through electromagnetism that penetrates tissue and re-stimulates blood circulation. To explain this visually, we created:

1. **A 3D model** of the human body (transparent blue mesh) showing the device's position relative to anatomy
2. **Current animation** demonstrating RF penetration into tissue
3. **Treatment zone display** without any direct filming

The CGI solved the problem without lowering professional standards — on the contrary, it added medical credibility that regular filming wouldn't have allowed.

## Syncing Studio with CGI

The technical moment requiring the most planning: **for the CGI to appear synchronized with the talent, both the angle and scale must be identical.**

Pre-production planning:
- Precise definition of talent filming angle (to match the 3D model angle)
- Talent hand placement planned to correspond with CGI positioning
- Live-action filmed first, CGI added afterward in precise alignment

Without this preproduction planning — the CGI would feel "pasted" rather than integral.

## Close-up and Overhead Shots: The Precision That Builds Trust

A technical product requiring precise operation — magnetic charging, gel, buttons, LED — cannot be shown only in wide shots.

We introduced two types of filming that don't usually appear together:

**Overhead (top-down):** lets the viewer see exactly what the hands are doing — unboxing, extracting components, magnetic connection — as if they're doing it themselves.

**Extreme Close-up:** the LED indicators, the magnetic click, cleaning — the things a viewer must see large to remember.

The editing between the two created a flow that feels like personal instruction, not a written manual.

## The Cleaning Scene: Why You Don't Skip This

Many clients want to skip cleaning and maintenance scenes. "It's not exciting. Viewers will skip ahead."

**The big mistake.**

For a consumer buying an intimate MedTech product, cleaning is one of the biggest purchase barriers. "How complicated is it? Is it tiring? Is it hygienic?"

The sink-cleaning scene — simple, quick, direct — removes a massive barrier: **"Oh, this is just as straightforward as any other product I have at home."**

Credibility comes from the small details that brands are usually too embarrassed to show.

## What This Film Proves for You

For a client looking for a production company for a MedTech or complex technical product project:

**The Vertica film demonstrates:**
- Ability to work with sensitive subjects without compromising appearance and credibility
- Medical CGI integration within live-action production
- Production to global standard (English, ready for US/EU platforms)
- Measurable ROI: fewer support calls, fewer returns, higher satisfaction

A good Onboarding video doesn't explain your product. **It makes your customer want to use it.**`,
  },
  {
    id: "startup-nation-connect2innovate-blog",
    relatedYoutubeId: "Fmd3fB5Pb-M",
    titleHe: "סרט שפותח גבולות: מאחורי הקלעים של Connect 2 Innovate | Startup Nation Central",
    titleEn: "A Film That Opens Borders: Behind the Scenes of Connect 2 Innovate | Startup Nation Central",
    excerptHe: "איך מצלמים שיתוף פעולה בין-מדינתי רגיש (ישראל ומרוקו) בלי לעשות אותו נראה כמו PR ממשלתי? ניתוח ההחלטות הקריאייטיביות מאחורי הסרט שהפך דיפלומטיה לרגש.",
    excerptEn: "How do you film a sensitive international collaboration (Israel and Morocco) without making it look like government PR? An analysis of the creative decisions behind the film that turned diplomacy into emotion.",
    readingTime: 5,
    date: "2024-01-20",
    tags: ["B2B Video", "Corporate Storytelling", "International", "Innovation", "Startup Nation"],
    relatedServiceHref: "/services/hightech",
    relatedServiceLabelHe: "הייטק וסטארטאפ",
    relatedServiceLabelEn: "High-Tech & Startup Video",
    bodyHe: `## הנושא שקשה מאוד לצלם

יש פרויקטים שמגיעים עם אתגר שאי אפשר לפתור רק עם ציוד טוב.

"Connect 2 Innovate" של Startup Nation Central לא בא לתעד כנס עסקי. הוא בא לתעד **משהו שקשה הרבה יותר:** את האמון שנבנה בין אנשים ממדינות שהדיפלומטיה ביניהן עדיין חדשה.

ישראלים ומרוקאים, יזמים וממשלות, טכנולוגיה ותרבות — כולם בסרט אחד. ובלי שזה ייראה כמו PR תעמולתי.

**האתגר:** איך מצלמים שיתוף פעולה בין-מדינתי בלי שהוא ייראה מבוים?

## ההחלטה הראשונה: "אל תסביר — תראה"

ברמת הבריף, Startup Nation Central הגיעו עם הרבה "מסרים" ו"נקודות שיוצרות ערך". הדבר הטבעי היה לבנות סרט שמסביר את התוכנית, את הארגון, את המטרות.

**בחרנו ללכת לכיוון ההפוך.**

הפתיחה של הסרט: לא לוגו, לא כותרת, לא מצגת. משפט אחד: *"In a region where borders often divide, innovation builds bridges."*

ואז — נוף. אנשים. חיוכים. לחיצות ידיים. שיחות.

הצופה מרגיש לפני שהוא מבין. **ברגע שהוא מרגיש — הוא כבר שלנו.**

[IMAGE]

## הניגוד הגדול: מפעל התפלה לצד שולחן אוכל מרוקאי

ההחלטה הקריאייטיבית שעשתה הכי הרבה עבודה: **שילוב בין ה"קשיח" ל"רך".**

**הצד הקשיח:** מפעלי מים, מתקני טכנולוגיה, חדרי ישיבות בטכניון. קנה מידה, תעשייה, רצינות. אנחנו מראים שזה ביזנס אמיתי.

**הצד הרך:** שולחן אוכל ערבי-מרוקאי מסורתי, נגינה בסביבה, חיוכים בין אנשים שרגע היו זרים. אנחנו מראים שזה קשר אנושי אמיתי.

הניגוד הזה אינו אקראי. הוא **מגדיר את המהות של Innovation Diplomacy:** לא מסמכים ולא הסכמים — אנשים שמחליטים לסמוך אחד על השני.

## הטיפוגרפיה בכתב יד: למה להפסיק ולא להוסיף

מרבית הלקוחות בסרטי קורפורייט רוצים גרפיקה נקייה, ברורה, תאגידית. Helvetica, לבן על שחור, ואנימציה חלקה.

בסרט הזה הלכנו לכיוון אחר: **טיפוגרפיה בכתב יד, כמו רשימות ורעיונות.**

הסיבה: כתב יד מבטא מחשבה בפעולה. Startup. Sketch. Idea. הוא מנוגד לכל אסתטיקת ה"כנס הרשמי" ויוצר תחושה שהדברים עדיין נבנים, עדיין חיים, עדיין מתפתחים.

**אלמנט גרפי אחד יכול לשנות את כל הטון של הסרט.**

## הפסקול: מאטמוספרה לאנרגיה

הפסקול של הסרט נבנה כמסע:

**שלב 1 — כניסה שקטה:** צלילים אטמוספריים, כמעט ambient. אנחנו לא "מכריזים" — אנחנו מזמינים.

**שלב 2 — בניית מתח:** כלי הקשה קלים, לחן שמתפתח. הצופה מרגיש שמשהו מתרחש.

**שלב 3 — שחרור:** מקצב אלקטרוני-אתני מודרני שמחבר בין עולם ה-Tech לבין הצלילים התרבותיים של מרוקו ושל ישראל.

הפסקול לא "מציג" — הוא **מנהל את האנרגיה הרגשית של הצופה לאורך כל הסרט.**

## קומפוזיציה: Close-up לצד Drone

בחרנו במכוון לעבוד בשני קצוות של הסקאלה הקינמטית:

**Drone Shots רחבים:** מראים קנה מידה — מפעלים, ערים, פרויקטים. "הנה כמה גדול מה שקורה כאן."

**Extreme Close-ups:** לחיצת יד, מבט, חיוך, אצבע שמצביעה על מפה. "הנה כמה אנושי מה שקורה כאן."

הפינג-פונג בין השתיים יוצר דינמיקה שהצופה מרגיש בלי להגדיר אותה: **גדול ואישי בו-זמנית.**

## מה לומדים מ-Connect 2 Innovate לפרויקט שלך

ארגונים בינלאומיים, גופי חדשנות, קרנות וממשלות — כולם צריכים סרטים שמניעים פעולה מצד שותפים, משקיעים ומדינות.

**מה שעובד בסרטים האלה:**
- פתיחה רגשית לפני הסבר תאגידי
- ניגוד בין ה"גדול" (קנה מידה, תעשייה) ל"קטן" (אדם, חיוך, רגע)
- פסקול שמנהל את האנרגיה — לא רק מרפד
- גרפיקה שמביעה ערכים, לא רק מידע
- מסר שצופה יכול לחזור עליו: "חדשנות בונה גשרים"

**מה שלא עובד:**
- פתיחה עם לוגו וסיסמה
- סרט שמסביר לפני שהוא מרגיש
- גרפיקה שמנסה להיות "מקצועית" על חשבון אנושיות

סרט B2B טוב לא מסביר מה הארגון עושה. הוא גורם לצופה לרצות להיות חלק ממנו.`,
    bodyEn: `## The Subject That's Very Hard to Film

Some projects arrive with a challenge that can't be solved with good equipment alone.

Startup Nation Central's "Connect 2 Innovate" didn't come to document a business conference. It came to document **something much harder:** the trust being built between people from countries whose diplomacy is still new.

Israelis and Moroccans, entrepreneurs and governments, technology and culture — all in one film. Without it looking like propaganda PR.

**The challenge:** how do you film international cooperation without it looking staged?

## The First Decision: "Don't Explain — Show"

At the brief level, Startup Nation Central arrived with many "messages" and "value-creating points." The natural thing was to build a film explaining the program, the organization, the goals.

**We chose to go the opposite direction.**

The film's opening: no logo, no title, no presentation. One sentence: *"In a region where borders often divide, innovation builds bridges."*

Then — landscape. People. Smiles. Handshakes. Conversations.

The viewer feels before they understand. **Once they feel — they're already ours.**

[IMAGE]

## The Great Contrast: Desalination Plant Next to a Moroccan Dinner Table

The creative decision that did the most work: **combining the "hard" with the "soft."**

**The hard side:** water plants, technology facilities, conference rooms at the Technion. Scale, industry, seriousness. We show this is real business.

**The soft side:** a traditional Moroccan dinner table, music in an intimate setting, smiles between people who were strangers moments ago. We show this is real human connection.

This contrast isn't random. It **defines the essence of Innovation Diplomacy:** not documents and not agreements — people deciding to trust each other.

## Handwritten Typography: Why to Break, Not Add

Most clients in corporate films want clean, clear, corporate graphics. Helvetica, white on black, smooth animation.

In this film, we went a different direction: **handwritten typography, like notes and ideas.**

The reason: handwriting expresses thought in action. Startup. Sketch. Idea. It contrasts with all the "official conference" aesthetic and creates a feeling that things are still being built, still alive, still developing.

**A single graphic element can change the entire tone of a film.**

## The Soundtrack: From Atmosphere to Energy

The film's soundtrack was built as a journey:

**Phase 1 — Quiet entry:** atmospheric sounds, almost ambient. We're not "announcing" — we're inviting.

**Phase 2 — Building tension:** light percussion, a developing melody. The viewer feels something is happening.

**Phase 3 — Release:** modern ethnic-electronic rhythm connecting the world of Tech with the cultural sounds of Morocco and Israel.

The soundtrack doesn't "present" — it **manages the viewer's emotional energy throughout the entire film.**

## Composition: Close-up Alongside Drone

We deliberately chose to work at both ends of the cinematic scale:

**Wide Drone Shots:** show scale — plants, cities, projects. "Here's how big what's happening here is."

**Extreme Close-ups:** a handshake, a gaze, a smile, a finger pointing to a map. "Here's how human what's happening here is."

The ping-pong between the two creates a dynamic the viewer feels without defining: **large and personal simultaneously.**

## What Connect 2 Innovate Teaches for Your Project

International organizations, innovation bodies, funds, and governments — all need films that drive action from partners, investors, and countries.

**What works in these films:**
- Emotional opening before corporate explanation
- Contrast between the "large" (scale, industry) and the "small" (person, smile, moment)
- Soundtrack that manages energy — doesn't just pad
- Graphics that express values, not just information
- A message a viewer can repeat: "innovation builds bridges"

**What doesn't work:**
- Opening with a logo and tagline
- A film that explains before it feels
- Graphics trying to be "professional" at the expense of humanity

A good B2B film doesn't explain what the organization does. It makes the viewer want to be part of it.`,
  },
  {
    id: "intel-fab28-blog",
    relatedYoutubeId: "d2Bckns6JTA",
    titleHe: "איך הופכים תרגיל חירום תאגידי לסרט אקשן קולנועי: הפקת הענק של Intel Fab 28",
    titleEn: "How to Turn a Corporate Emergency Drill Into a Cinematic Action Film: The Intel Fab 28 Large-Scale Production",
    excerptHe: "תרגיל חירום הוא אחד הצילומים המורכבים שיש: אין לוח זמנים קבוע, יש חמש זירות במקביל, ואי אפשר לעצור את הייצור. ניתוח ניהול הפקה רב-זירתית בזמן אמת עם Intel.",
    excerptEn: "An emergency drill is one of the most complex shoots there is: no fixed schedule, five simultaneous zones, and you can't stop production. An analysis of real-time multi-zone production management with Intel.",
    readingTime: 6,
    date: "2023-05-20",
    tags: ["Corporate", "Safety Video", "Multi-Camera", "Drone", "Industrial", "Intel"],
    relatedServiceHref: "/services/hightech",
    relatedServiceLabelHe: "הייטק וסטארטאפ",
    relatedServiceLabelEn: "High-Tech & Startup Video",
    bodyHe: `## הצילום שאי אפשר לחזור עליו

יש שני סוגים של פרויקטי וידאו מבחינת הסיכון ההפקתי.

**סוג א':** אתה יכול לחזור. הטאלנט חזר לאולפן, הלוקיישן נפתח שוב, הסצנה צולמה מחדש.

**סוג ב':** אין חזרה. הרגע קורה פעם אחת, בזמן אמת, ואתה תועד אותו — או שלא.

תרגיל החירום של Intel Fab 28 הוא סוג ב' — ועוד עם מכפיל קושי: לא רגע אחד, אלא **חמישה רגעים בו-זמנית ב-5 זירות שונות בפני המפעל.**

## מה זה אומר בפועל: לוגיסטיקה לפני קריאייטיב

בפרויקטים של Event ותיעוד בזמן אמת, הלוגיסטיקה קודמת לכל. **מי עומד איפה, מי מכסה מה, ומה קורה אם שני דברים קורים בו-זמנית בשני מקומות?**

לפני יום הצילום, בנינו מפת כיסוי:

- **זירה 1 — Hazmat ואמוניה:** צוות צילום כתף עוקב אחר צוות ERT לבוש חליפות. זווית מזורית שמראה את מורכבות הלבישה.
- **זירה 2 — שריפה בבניין מרכזי:** רחפן FPV לשוטים אוויריים + צוות שני בגובה הקרקע.
- **זירה 3 — חילוץ מגובה:** צלם אחד מוקדש לתקריבי חבלים ולפנים של המחלצים.
- **זירה 4 — סריקת הריסות:** צילום כתף דינמי שעוקב אחר הצוות ב-real-time.
- **זירה 5 — מפקדה (חפ"ק):** רחפן רחב לסקירת הפריסה הכוללת + פנימה לצוות הפיקוד.

**כל צלם קיבל briefing מפורט + תחנת רדיו לעדכונים בזמן אמת.**

[IMAGE]

## הרחפן FPV: כלי שמשנה הכל בתיעוד תעשייתי

בסרטי תיעוד תאגידי, רחפן רגיל נותן נקודת מבט יפה. **רחפן FPV נותן נקודת מבט שמרגישה כמו שחקן בתוך האירוע.**

ב-Fab 28 השתמשנו ב-FPV ליצירת שוטים שעוקבים אחר ההמונים בפינוי — נעים ביניהם, מגיחים מעל גג בניין, צוללים לתוך אזור ה-Hazmat.

**הצופה לא צופה באירוע — הוא בתוכו.**

## הגרפיקה הטקטית: בין מסמך להפקה קולנועית

ה-Lower thirds, ה-Radar overlays וה-Target points לא נוספו רק כ"מידע" — הם כלי נרטיבי.

בסרטי אקשן קולנועיים, גרפיקה טקטית מאותת לצופה: "אנחנו בזמן אמת, זה מבצע, יש תיאום." זה מגביר את תחושת הדחיפות.

**ביישום B2B זה עובד אחרת:** הגרפיקה גם מספקת מידע (שמות הצוותים, זירות) וגם משדרת ארגון ומקצועיות. הצופה ב-HR שצופה בסרט מרגיש: "החברה שלנו מאורגנת. אנחנו מוכנים."

זה לא טפסי בטיחות. **זה תוכן שמייצר גאווה ארגונית.**

## סאונד-דיזיין: להרגיש את הדחיפות

אפקט קולי אחד עשה את כל ההבדל: **רשת הקשר.**

הצרחות המשוברות, הביפים, הפקודות בין צוותים — הוסיפו מימד של אותנטיות שמוזיקה דרמטית לבד לא יכולה לתת. השמעת את זה אתה יודע שזה אמיתי.

שכבות הסאונד שבנינו:
1. מוזיקה דרמטית עם מקצב פועם — תחושת דחיפות כללית
2. אזעקות ממשיות שנקלטו בזמן הצילום — אותנטיות
3. פקודות רשת קשר — תחושת תיאום ושליטה
4. SFX של ציוד: חליפות הנסגרות, שסתומי חמצן, כבלים

**כשהסאונד עובד כמו שצריך, הצופה עוצר לנשום.**

## אימפקט עסקי: מה הסרט הזה שווה לאינטל

**שכבה 1 — הכשרה:** הסרט משמש כחומר הכשרה לעובדים חדשים. עדיף לראות את הצוות בפעולה פעם אחת מלקרוא 80 עמודי נוהל.

**שכבה 2 — רגולטורים:** חברות תעשייה כפופות לביקורות בטיחות קשות. סרט כזה מציג לרגולטור ביצועי ERT בפועל — לא תיאוריה.

**שכבה 3 — תדמית:** Intel משדרת: "אנחנו לא רק מייצרים שבבים. אנחנו מוסד שאנשים בו בטוחים."

**שכבה 4 — גיוס:** מהנדסים ואנשי טכנולוגיה שמחפשים מקום עבודה רואים שזאת לא רק חברה — זאת חברה שמשקיעה ברמה שאחרות לא מגיעות אליה.

## מה לומדים מ-Fab 28 לפרויקט שלך

אם יש לך תרגיל חירום, כנס ביטחון, יום שדה תעשייתי, או כל אירוע שקורה פעם אחת — **הוא שווה לצלם.**

לא כי "יהיה יפה לאתר". אלא כי:
- הוא מכשיר עובדים בצורה שמסמכים לא יכולים
- הוא מוכיח מוכנות לרגולטורים ולשותפים
- הוא בונה גאווה ארגונית שמשפרת שימור עובדים
- הוא נכס שיווקי ייחודי שאף מתחרה לא יכול לחקות

**תרגיל שלא צולם — לא קרה.**`,
    bodyEn: `## The Shoot You Can't Repeat

There are two types of video projects in terms of production risk.

**Type A:** You can go back. The talent returned to the studio, the location reopened, the scene was reshot.

**Type B:** No going back. The moment happens once, in real-time, and you documented it — or you didn't.

Intel Fab 28's emergency drill is Type B — with a difficulty multiplier: not one moment, but **five simultaneous moments across 5 different zones throughout the facility.**

## What This Means in Practice: Logistics Before Creative

In Event and real-time documentation projects, logistics come before everything. **Who stands where, who covers what, and what happens if two things happen simultaneously in two places?**

Before shoot day, we built a coverage map:

- **Zone 1 — Hazmat and Ammonia:** shoulder-rig crew tracking ERT team in protective suits. Close angle showing the complexity of suiting up.
- **Zone 2 — Building fire:** FPV drone for aerial shots + second ground-level crew.
- **Zone 3 — Height rescue:** one dedicated cinematographer for rope close-ups and rescuers' faces.
- **Zone 4 — Debris search:** dynamic shoulder-rig following the team in real-time.
- **Zone 5 — Command center (HQ):** wide drone for overall deployment overview + interior for command team.

**Every cinematographer received a detailed briefing + a radio station for real-time updates.**

[IMAGE]

## The FPV Drone: A Tool That Changes Everything in Industrial Documentation

In corporate documentary films, a regular drone gives a beautiful perspective. **An FPV drone gives a perspective that feels like being a player inside the event.**

At Fab 28 we used FPV to create shots that follow the crowds in evacuation — moving between them, emerging from above a building roof, diving into the Hazmat zone.

**The viewer isn't watching the event — they're inside it.**

## Tactical Graphics: Between Document and Cinematic Production

The Lower thirds, Radar overlays, and Target points weren't added just as "information" — they're a narrative tool.

In cinematic action films, tactical graphics signal to the viewer: "We're in real-time, this is an operation, there's coordination." This amplifies the sense of urgency.

**In B2B application it works differently:** the graphics both provide information (team names, zones) and convey organization and professionalism. The HR viewer watching the film feels: "Our company is organized. We're ready."

This isn't safety forms. **This is content that creates organizational pride.**

## Sound Design: Making You Feel the Urgency

One sound effect made all the difference: **the radio network.**

The broken fragments, the beeps, the commands between teams — added a dimension of authenticity that dramatic music alone can't provide. When you hear it, you know it's real.

The sound layers we built:
1. Dramatic music with a pulsing beat — general sense of urgency
2. Real alarms recorded during filming — authenticity
3. Radio network commands — sense of coordination and control
4. Equipment SFX: suits closing, oxygen valves, cables

**When sound works as it should, the viewer stops breathing.**

## Business Impact: What This Film Is Worth to Intel

**Layer 1 — Training:** the film serves as training material for new employees. Seeing the team in action once is better than reading 80 pages of procedure.

**Layer 2 — Regulators:** industrial companies are subject to strict safety inspections. A film like this presents real ERT performance to the regulator — not theory.

**Layer 3 — Brand image:** Intel signals: "We don't just manufacture chips. We're an institution where people are safe."

**Layer 4 — Recruitment:** engineers and tech professionals looking for a workplace see that this isn't just a company — it's a company that invests at a level others don't reach.

## What Fab 28 Teaches for Your Project

If you have an emergency drill, a safety conference, an industrial field day, or any event that happens once — **it's worth filming.**

Not because "it'll look good on the website." But because:
- It trains employees in ways documents cannot
- It proves readiness to regulators and partners
- It builds organizational pride that improves employee retention
- It's a unique marketing asset no competitor can replicate

**A drill that wasn't filmed — didn't happen.**`,
  },
  {
    id: "intel-fab28-kgat-blog",
    relatedYoutubeId: "coZNfEng59g",
    titleHe: "לצלם אקשן בזמן אמת: מאחורי הקלעים של תרגיל החירום ב-Intel Fab 28 קרית גת",
    titleEn: "Filming Action in Real Time: Behind the Scenes of Intel Fab 28 Kiryat Gat Emergency Drill",
    excerptHe: "מפעל שבבים פעיל, 4 זירות חירום בו-זמניות, ERT + מד\"א + כבאות + משרד הסביבה — כולם בזמן אמת. איך מתכננים, מצלמים ועורכים פרויקט שאין בו 'קאט שני'.",
    excerptEn: "An active semiconductor plant, 4 simultaneous emergency zones, ERT + MDA + fire rescue + Ministry of Environment — all in real time. How you plan, film, and edit a project with no second take.",
    readingTime: 6,
    date: "2025-05-20",
    tags: ["Corporate", "Safety Video", "Multi-Camera", "Drone", "Intel", "Industrial", "Emergency Drill"],
    relatedServiceHref: "/services/hightech",
    relatedServiceLabelHe: "הייטק וסטארטאפ",
    relatedServiceLabelEn: "High-Tech & Startup Video",
    bodyHe: `## הייצור לא עוצר. הצילום כן צריך לרוץ.

Intel Fab 28 בקרית גת הוא אחד ממפעלי השבבים המתקדמים בעולם. כשהם מקיימים תרגיל חירום — הם לא מדמים.

ארבע זירות אמיתיות, בו-זמנית, עם כוחות חירום לאומיים אמיתיים:

- **שריפה במבנה CUB** — כניסת צוותי כיבוי עם ציוד נושם, עשן סמיך, עובדים שנפגעו
- **דליפת אמוניה** — הפעלת מערכות מתזים (Dilution), עובדים מנוטרלים, FAB ERT HAZMAT בחליפות אטימה
- **חילוץ מבור/גובה (AWN 28)** — Rope Rescue לעובדת הלכודה בבור, 'יחידת להבה' בפעולה
- **זירת הרס — Search & Rescue** — חילוץ 8 לכודים מהריסות בטון וצינורות עם ציוד הידראולי כבד וכלי חיתוך

**אחת לכמה שנים, ואי אפשר לחזור עליו.**

## לפני הצילום: מפת כיסוי ולא רק ציוד

הטעות הנפוצה ביותר בצילומי אירועים: לחשוב שהצלחה תלויה בכמות הציוד.

ב-Fab 28, ההכנה הייתה מפת כיסוי מפורטת לפי דקות:

- **00:01–00:14** — שגרת יום, מוכנות: צלם כתף אחד בכל קומה מרכזית
- **00:15** — אזעקת רעידת אדמה: רחפן מוכן, מסקר את פריסת הפינוי
- **01:50** — שריפת CUB: צלם כתף עוקב אחר צוות הכיבוי
- **01:56** — Hazmat: צלם שני עם חליפת מגן נכנס לזירת האמוניה
- **02:00** — AWN 28: צלם שלישי ממוקם על ידי הבור, מוכן לחילוץ
- **02:06** — S&R: רחפן FPV לתצלום רחב + צלם קרקעי בין ההריסות

**כל שינוי בתכנון בזמן אמת — עדכון ברדיו, לא ריצה בשטח.**

[IMAGE]

## הגרפיקה שמפות כל הפקת חירום: HUD Display

הפתרון שהכי "מוכר" בפוסט-פרודקשן של סרטי תרגיל הוא **מפת HUD על גבי תצלום לוויין.**

ב-Fab 28 בנינו מפה שמציגה 5 נקודות:
**CRASH SITE / FIRE ALARM / AMMONIA LEAK / HEIGHT RESCUE / EXTERNAL JOINT (חפ"ק)**

המפה מופיעה בכל מעבר זירה (02:10, 02:56, 03:45, 05:13) — הצופה תמיד יודע איפה הוא.

**למה זה קריטי:** בפרויקטים עם 4 זירות ייכנס הצופה לאובדן עניין אם הוא לא מבין "מה הקשר בין מה שראיתי לפני לבין מה שאני רואה עכשיו." המפה פותרת את זה.

## הסגירה שמשנה את כל הסרט

הסרטון נחתם בדברי סיכום של **אדם מנסור, Emergency Manager** בחפ"ק החיצוני.

זה לא "ראש מדבר רנדומלי" — זה בחירה קריאייטיבית מכוונת.

כשמנהל החירום עומד בשטח ומסכם את התרחיש, הצופה מקבל שלושה דברים בבת אחת:
1. **הסבר** — מה היה מטרת התרגיל
2. **אישור** — "ה-ERT שלנו עבד. הצוות עבד."
3. **פנים** — אדם אחראי שניתן לסמוך עליו

בלי הסיכום, הסרט נגמר בפעולה ואין "נחיתה". עם הסיכום — יש תחושת השלמה.

## מה Fab 28 מלמד לכל צילום ארגוני אחד

שלושה עקרונות שאפשר להעביר לכל פרויקט corporate:

**1. זמן ההכנה = זמן הצילום:**
ב-Fab 28, הכנו כמה שעות ברצינות. ביום הצילום, לא היה אובדן — כי כל תרחיש כבר עבר בראש.

**2. מעברי HUD כ-"פסיק" נרטיבי:**
בכל נקודה שהצופה עלול לאבד את החוט, מפה מחזירה אותו. שיטה זו עובדת בכל סרט בעל יותר מ-2 לוקיישנים.

**3. הסגירה האנושית:**
לא משנה כמה האקשן מרשים — אם הסרט נגמר ב"רחפן מרחוק", אין חיבור. תמיד לחפש את הסגירה שנותנת **אדם, מסר ומשמעות.**`,
    bodyEn: `## Production Doesn't Stop. Filming Has to Keep Going.

Intel Fab 28 in Kiryat Gat is one of the most advanced semiconductor plants in the world. When they run an emergency drill — they don't simulate.

Four real zones, simultaneously, with real national emergency forces:

- **Building CUB Fire** — firefighters with breathing equipment entering, thick smoke, injured employees
- **Ammonia Leak** — dilution systems activated, employees neutralized on site, FAB ERT HAZMAT in sealed suits
- **Pit/Height Rescue (AWN 28)** — Rope Rescue for a trapped employee in a pit, 'Lahava Unit' in action
- **Crash Site — Search & Rescue** — extraction of 8 trapped people from concrete rubble and pipes with heavy hydraulic equipment and disc cutters

**Once every few years, and you can't repeat it.**

## Before Filming: A Coverage Map, Not Just Equipment

The most common mistake in event filming: thinking success depends on the amount of equipment.

At Fab 28, preparation was a detailed coverage map by minute:

- **00:01–00:14** — routine day, readiness: one shoulder-rig camera on each main floor
- **00:15** — earthquake alarm: drone ready, surveying evacuation deployment
- **01:50** — CUB fire: shoulder camera following the firefighting team
- **01:56** — Hazmat: second camera with protective suit entering the ammonia zone
- **02:00** — AWN 28: third camera positioned at the pit edge, ready for rescue
- **02:06** — S&R: FPV drone for wide shot + ground camera in the debris

**Any real-time change in plan — update over radio, not running across the site.**

[IMAGE]

## The Graphic That Maps Every Emergency Production: HUD Display

The solution that "sells" best in emergency drill post-production is **a HUD map over a satellite image.**

At Fab 28 we built a map showing 5 points:
**CRASH SITE / FIRE ALARM / AMMONIA LEAK / HEIGHT RESCUE / EXTERNAL JOINT (Command Post)**

The map appears at every scene transition (02:10, 02:56, 03:45, 05:13) — the viewer always knows where they are.

**Why this is critical:** in projects with 4 zones, the viewer will lose interest if they don't understand "what's the connection between what I just saw and what I'm seeing now." The map solves this.

## The Closure That Changes the Entire Film

The film ends with summary remarks by **Adam Mansour, Emergency Manager**, at the external command post.

This isn't a "random talking head" — it's a deliberate creative choice.

When the Emergency Manager stands in the field and summarizes the scenario, the viewer receives three things at once:
1. **Explanation** — what the drill's objective was
2. **Confirmation** — "our ERT worked. The team worked."
3. **A face** — a responsible person who can be trusted

Without the summary, the film ends in action with no "landing." With the summary — there's a sense of completion.

## What Fab 28 Teaches for Every Other Organizational Shoot

Three principles transferable to any corporate project:

**1. Prep time = shoot time:**
At Fab 28, we prepared seriously for several hours. On shoot day, there was no confusion — because every scenario had already run through our heads.

**2. HUD transitions as a narrative "comma":**
At every point where the viewer might lose the thread, a map brings them back. This method works for any film with more than 2 locations.

**3. The human closure:**
No matter how impressive the action — if the film ends on "a distant drone shot," there's no connection. Always look for the closure that gives **a person, a message, and meaning.**`,
  },
  {
    id: "intel-haifa-idc-blog",
    relatedYoutubeId: "jAU89DS0oig",
    titleHe: "3,000 עובדים, 6 זירות, מפה אחת: מה שמפיקים תרגיל חירום ב-Intel IDC חיפה",
    titleEn: "3,000 Employees, 6 Scenes, One Map: What Producing Intel IDC Haifa's Emergency Drill Teaches You",
    excerptHe: "כשיש לך שש זירות חירום בו-זמניות — Hazmat, חילוץ מגובה, דליפת חומצה, הריסות, סריקות בניינים ומפקדה — האתגר לא הצילום. האתגר הוא לגרום לצופה להבין מה קורה. הפתרון: מפה.",
    excerptEn: "When you have six simultaneous emergency scenes — Hazmat, height rescue, acid leak, crash site, building sweeps, and command center — the challenge isn't filming. The challenge is making the viewer understand what's happening. The solution: a map.",
    readingTime: 6,
    date: "2025-04-01",
    tags: ["Corporate", "Safety Video", "Multi-Camera", "Drone", "Intel", "Emergency Drill", "HUD Graphics"],
    relatedServiceHref: "/services/hightech",
    relatedServiceLabelHe: "הייטק וסטארטאפ",
    relatedServiceLabelEn: "High-Tech & Startup Video",
    bodyHe: `## הבעיה של 6 חזיתות במקביל

תרגיל חירום של 3,000 עובדים ב-Intel IDC חיפה — זה לא אירוע שצולמים ממקום אחד.

זה קמפוס ענק עם **שש זירות פעילות בו-זמנית:** דליפת חומצה, חילוץ מגובה (USAR), אירוע Hazmat, סריקת הריסות, פינוי המוני מבנים ומפקדה חיצונית שמנהלת הכל.

הבעיה הנרטיבית: אפשר לצלם את כל שש הזירות בנפרד ולקבל שישה קטעי וידאו מרשימים. אבל בסוף תקבל **סרט שהצופה לא יבין בו איפה הוא.**

האתגר האמיתי לא היה לוגיסטי — אלא נרטיבי.

## הפתרון: המפה שמחברת הכל

הדבר שהכי מרשים בפוסט-פרודקשן של IDC הוא **מפת ה-HUD הדינמית.**

לקחנו תצלום אוויר של הקמפוס וצוות הגרפיקה בנה עליו שכבת HUD (Heads-Up Display) תלת-ממדית — בדיוק כמו שרואים בסרטי טכנולוגיה ואקשן. כל זירה מסומנת, ממוספרת, ומוצגת על גבי הקמפוס האמיתי.

**מה זה עושה לצופה:**
- הוא יודע תמיד "איפה הוא" בתוך הקמפוס
- המעבר בין זירות מרגיש כמו מעבר בין פרקי מבצע — לא קפיצה אקראית
- תחושת ניהול ושליטה עוברת לצופה: "החברה יודעת מה היא עושה"

[IMAGE]

## צילום בזמן אמת: שישה צוותות, שישה בריפינגים

לפני יום הצילום, הכנו מפת כיסוי מפורטת:

- **זירה 1 — דליפת חומצה (Acid Leak):** צוות Hazmat עם חליפות אטימה ייעודיות. צלם כתף אחד עוקב מקרוב.
- **זירה 2 — חילוץ מגובה (USAR):** מנוף כיבוי לחילוץ לכוד ממרפסת קומה גבוהה. רחפן + צלם קרקעי.
- **זירה 3 — Hazmat כללי:** פינוי מסודר, לבישת ציוד מגן. תקריבים על ידיים, על פנים.
- **זירה 4 — זירת הרס:** חילוץ פצועים מסימולציית הריסות בטון. כתף דינמי.
- **זירה 5 — סריקת בניינים:** ERT סורק קומות ומקלטים בניין אחר בניין. רחפן + כתף.
- **זירה 6 — מפקדה (חפ"ק):** הרחפן מסקר את הפריסה הכוללת, אחר כך נכנס פנימה לצוות הפיקוד.

**כל צלם קיבל רדיו, מפה מודפסת ו-briefing של 20 דקות.**

## למה צילומי אוויר עושים הכל אחרת

בסרטי תרגיל חירום, הרחפן לא "רק מצלם מלמעלה". הוא פותר בעיה נרטיבית.

כשהמצלמה עולה ורואה 3,000 איש פונים ממתחמי הקמפוס — **קנה המידה עובר לצופה.** הוא מבין שזה לא תרגיל של 50 עובדים. זה מנגנון שלם שעובד.

בשילוב עם הגרפיקה, השוטים האוויריים הפכו לגשרים בין הזירות — כל פעם שעוברים זירה חדשה, רחפן עולה, המפה מציגה את הנקודה, ואנחנו צוללים פנימה.

**התוצאה: סרט שנראה כמו תיעוד מבצע — לא כנס בטיחות.**

## שלוש השכבות של האימפקט העסקי

כשלקוח שואל "למה שאצלם את תרגיל החירום שלי?" התשובה היא שלוש שכבות:

**שכבה 1 — הדרכה בפועל:**
90% מהנהלים לא יקראו מדריך בטיחות של 60 עמוד. הם ישמחו לצפות בסרט של 4 דקות שמראה להם **איך צוות ERT נוהג בפועל, לא בתיאוריה.**

**שכבה 2 — רגולטורים ושותפים:**
Intel מפיקה בארץ ובעולם. כשיש ביקורת בטיחות מ-OSHA או מרגולטור אירופאי, **סרט כזה מוכיח ביצועים בפועל** — לא הצהרות כוונות.

**שכבה 3 — מיתוג מעסיק:**
מהנדסים שמחפשים עבודה ב-Intel רואים את הסרט. הם לא רק רואים "חברה טכנולוגית". הם רואים **ארגון שמשקיע ברמת הכנה שחברות אחרות לא מגיעות אליה.**

זה לא נכס בטיחותי. **זה נכס גיוס.**

## מה לומדים מ-IDC חיפה לפרויקט שלך

אם יש לך אירוע ארגוני שקורה פעם אחת — תרגיל, כנס, יום שדה, פינוי — **הוא שווה לצלם.**

הנקודה הקריטית: **האורכסטרציה קודמת לצילום.** ב-IDC, השקענו יותר זמן בתכנון מאשר בצילום עצמו. מי עומד איפה, מי מכסה מה, מה קורה אם שתי זירות מתלהטות בו-זמנית.

כי בצילום כזה, **אין "קאט".**`,
    bodyEn: `## The Problem of 6 Simultaneous Fronts

An emergency drill involving 3,000 employees at Intel IDC Haifa is not an event you film from one spot.

This is a vast campus with **six active zones simultaneously:** acid leak, height rescue (USAR), Hazmat incident, debris search, mass building evacuation, and an external command center managing everything.

The narrative problem: you can film all six zones separately and get six impressive video clips. But in the end you get **a film where the viewer has no idea where they are.**

The real challenge wasn't logistical — it was narrative.

## The Solution: The Map That Connects Everything

The most impressive element of IDC's post-production is **the dynamic HUD map.**

We took an aerial photograph of the campus and the graphics team built a three-dimensional HUD (Heads-Up Display) layer over it — exactly like what you see in tech and action films. Each scene is marked, numbered, and displayed on top of the real campus.

**What this does for the viewer:**
- They always know "where they are" within the campus
- Transitions between zones feel like moving between phases of an operation — not random cuts
- A sense of management and control transfers to the viewer: "This company knows what it's doing"

[IMAGE]

## Real-Time Filming: Six Teams, Six Briefings

Before shoot day, we prepared a detailed coverage map:

- **Zone 1 — Acid Leak:** Hazmat team with specialized sealed suits. One shoulder-rig camera following close.
- **Zone 2 — Height Rescue (USAR):** Fire department crane for high-floor rescue from a balcony. Drone + ground camera.
- **Zone 3 — General Hazmat:** Organized evacuation, protective gear deployment. Close-ups on hands, faces.
- **Zone 4 — Crash Site:** Casualty extraction from simulated concrete debris. Dynamic shoulder rig.
- **Zone 5 — Building Sweeps:** ERT scanning floors and shelters building by building. Drone + shoulder.
- **Zone 6 — Command Center (HQ):** Drone surveys overall deployment, then enters interior for command team coverage.

**Every cinematographer received a radio, a printed map, and a 20-minute briefing.**

## Why Aerial Shots Change Everything

In emergency drill films, the drone doesn't just "shoot from above." It solves a narrative problem.

When the camera rises and shows 3,000 people evacuating campus facilities — **scale is transferred to the viewer.** They understand this isn't a 50-person drill. This is a complete mechanism functioning in real time.

Combined with the graphics, the aerial shots became bridges between zones — every time we move to a new scene, a drone rises, the map shows the location, and we dive in.

**The result: a film that looks like an operation documentary — not a safety conference.**

## The Three Layers of Business Impact

When a client asks "why should I film my emergency drill?" the answer has three layers:

**Layer 1 — Actual Training:**
90% of executives won't read a 60-page safety manual. They will happily watch a 4-minute film that shows them **how an ERT team actually operates, not in theory.**

**Layer 2 — Regulators and Partners:**
Intel operates in Israel and globally. When there's a safety inspection from OSHA or a European regulator, **a film like this proves actual performance** — not statements of intent.

**Layer 3 — Employer Branding:**
Engineers looking to work at Intel see the film. They don't just see "a tech company." They see **an organization that invests at a level of preparedness other companies don't reach.**

This is not a safety asset. **This is a recruitment asset.**

## What IDC Haifa Teaches for Your Project

If you have an organizational event that happens once — a drill, a conference, a field day, an evacuation — **it's worth filming.**

The critical point: **orchestration comes before filming.** At IDC, we invested more time in planning than in actual filming. Who stands where, who covers what, what happens if two zones heat up simultaneously.

Because in a shoot like this, **there's no "cut."**`,
  },
  {
    id: "myth-busting-format",
    coverImage: "/vlogimg/myth-busting-cover.jpg",
    sectionImages: ["/vlogimg/myth-busting-s1.jpg", "/vlogimg/myth-busting-s2.jpg"],
    titleHe: "להרוג את הפיל שבחדר: איך פורמט 'הפרכת מיתוסים' מגדיל המרות",
    titleEn: "Killing the Elephant in the Room: How the 'Myth Busting' Format Increases Conversions",
    excerptHe: "לכל מוצר יש חסמי קנייה. במקום להתעלם מהם, האסטרטגיה הטובה ביותר היא לשים אותם במרכז הפריים ולפרק אותם אחד אחד, ישירות מול המצלמה.",
    excerptEn: "Every product has purchase barriers. Instead of ignoring them, the best strategy is to put them center frame and dismantle them one by one, directly on camera.",
    readingTime: 4,
    bodyHe: `## הפחדים של הלקוח שלכם לא נעלמים: הם מתבטאים בחוסר רכישה

לכל מוצר ושירות יש חסמי קנייה. הלקוחות שלכם מלאים בחששות, שאלות וסטיגמות לפני שהם מוציאים את האשראי. רוב העסקים בוחרים להתעלם מזה ולשים בסרטונים שלהם רק את הצד הטוב.

הבעיה: הלקוח הפוטנציאלי עוצר בדיוק בגלל הדברים שלא אמרתם.

**האסטרטגיה הטובה ביותר היא לשים את ההתנגדויות במרכז הפריים, ולפרק אותן אחת אחת.**

[IMAGE]

## פורמט "הפרכת מיתוסים" בפעולה

בפרויקט שיצרנו עבור אתר הלימודים "רגב גוטמן", מוסד שעוזר לסטודנטים לעבור מבחני הסמכה בכלכלה, הנהלת חשבונות ושמאות מקרקעין, בחרנו לא לעשות סרט תדמית רגיל.

במקום להראות ממשקי פלטפורמה יפים ותלמידים מאושרים, הושבנו את שני המייסדים מול המצלמה ושאלנו אותם ישירות: **מה הפחדים הכי גדולים שסטודנטים מביאים אליכם?**

"האם זה רק שיעור זום?" תשובה. "האם החומר מעודכן למבחן של השנה?" תשובה. "האם זה מתאים למבחני מועצת רואי חשבון?" תשובה.

כל תשובה היא פינת קנייה שנפתחת.

## למה שני מנחים עובד טוב יותר מ"ראש מדבר" אחד

הפורמט של שני מייסדים זה לצד זה מייצר שתי תוצאות:

**דינמיקה טבעית:** כשיש שניים בפריים, הם מדברים אחד עם השני, לא "אל" המצלמה. זה מפחית את תחושת הנאום הפרסומי ומגדיל את תחושת השיחה האותנטית.

**סמכות כפולה:** שני מייסדים שיושבים יחד משדרים יציבות ארגונית. זה קריטי כשמוכרים מוצר חינוכי שדורש מהלקוח השקעה של זמן וכסף. הוא צריך לדעת שמי שמאחורי המוצר לא הולך לשום מקום.

## הנוסחה: כנות + דיוק + מינימום הסחות דעת

שימו לב לדברים שלא רואים בסרט הזה: אין B-roll מוגזם, אין גרפיקה שמסיחה דעת, אין מוזיקה שמנסה לרגש. הרקע חשוך מעט, התאורה רכה ואחידה על הפנים.

**זה לא עצלות. זה בחירה.**

כשהמטרה היא טיפול בהתנגדויות, כל אלמנט נוסף שמוסיפים מחליש את המסר. הלקוח צריך לשמוע ולהאמין. לא להתרשם.

הכתוביות (Burned-in subtitles) הן האלמנט הגרפי היחיד שנוסף, כי הן עוזרות לצפייה ללא סאונד ברשתות, ומדגישות את נקודות המפתח של כל תשובה.

## כשהשיווק הכי טוב הוא השיחה הכי כנה

סרטון "הפרכת מיתוסים" עובד בגלל פרדוקס: ככל שאתם מדברים יותר על הפחדים של הלקוח, כך הוא סומך עליכם יותר. כי הוא מרגיש שאתם מבינים אותו, לא מוכרים לו.

**המסר ללקוחות:** אם יש לכם מוצר שאנשים מהססים לקנות בגלל חסמים ספציפיים שידועים לכם, זה הפורמט שיפרק אותם.`,
    bodyEn: `## Your Client's Fears Don't Disappear: They Show Up as Non-Purchases

Every product and service has purchase barriers. Your clients are full of concerns, questions, and stigmas before they pull out their credit card. Most businesses choose to ignore this and only show the good side in their videos.

The problem: the potential client stops exactly because of the things you didn't say.

**The best strategy is to put the objections center frame, and dismantle them one by one.**

[IMAGE]

## The 'Myth Busting' Format in Action

In the project we created for "Regev Gutman", an institution that helps students pass certification exams in economics, accounting, and real estate appraisal, we chose not to make a regular brand film.

Instead of showing pretty platform interfaces and happy students, we sat both founders in front of the camera and asked them directly: **what are the biggest fears students bring to you?**

"Is it just a Zoom class?" Answered. "Is the material updated for this year's exam?" Answered. "Does it work for CPA board exams?" Answered.

Every answer is a purchase objection that gets opened up and resolved.

## Why Two Presenters Works Better Than One "Talking Head"

The format of two founders side by side produces two outcomes:

**Natural dynamics:** When there are two in frame, they talk to each other, not "at" the camera. This reduces the feeling of an advertising speech and increases the feeling of an authentic conversation.

**Double authority:** Two founders sitting together signal organizational stability. This is critical when selling an educational product that requires the client to invest time and money. They need to know the people behind the product aren't going anywhere.

## The Formula: Honesty + Precision + Minimum Distractions

Notice what's not in this film: no excessive B-roll, no distracting graphics, no music trying to move you emotionally. The background is slightly dark, the lighting is soft and even on the faces.

**This isn't laziness. It's a choice.**

When the goal is objection handling, every additional element you add weakens the message. The client needs to hear and believe. Not be impressed.

The burned-in subtitles are the only graphic element added, because they help viewing without sound on social media, and highlight the key points of each answer.

## When the Best Marketing Is the Most Honest Conversation

A "myth busting" video works because of a paradox: the more you talk about your client's fears, the more they trust you. Because they feel you understand them, not selling to them.

**The message to clients:** if you have a product that people hesitate to buy due to specific known barriers, this is the format that will dismantle them.`,
    date: "2024-10-01",
    tags: ["Content Strategy", "Objection Handling", "EdTech", "Conversion"],
    relatedServiceHref: "/services/corporate",
    relatedServiceLabelHe: "סרטי תוכן ופורמטים",
    relatedServiceLabelEn: "Content Films & Formats",
    relatedYoutubeId: "gE-8-eOtQg0",
  },
  {
    id: "10-questions-format",
    coverImage: "/vlogimg/10-questions-cover.jpg",
    sectionImages: ["/vlogimg/10-questions-s1.jpg", "/vlogimg/10-questions-s2.jpg"],
    titleHe: "פורמט '10 שאלות': הדרך הקצרה ביותר לבנות אמון, מודעות ותוכן לכל המדיות",
    titleEn: "The '10 Questions' Format: The Shortest Path to Building Trust, Awareness, and Content for All Platforms",
    excerptHe: "פורמט שכולם מבינים מהרגע הראשון, כיפי לצפייה, מתחלק ל-Micro-Content ועובד לשירות לקוחות, מיתוג עסקי ופרסום, מיום צילום אחד קצר.",
    excerptEn: "A format everyone understands from day one, fun to watch, splits into micro-content, and works for customer service, business branding, and advertising, from one short filming day.",
    readingTime: 4,
    bodyHe: `## למה הפורמט הזה עובד כל כך טוב

יש פורמטים שדורשים הסבר ארוך ללקוח. "10 שאלות" הוא לא אחד מהם.

ברגע שאתם אומרים "נצלם אתכם עונים על 10 שאלות", הלקוח מבין מיד לאן זה הולך. אין חרדת תסריט, אין ויכוחים על מסרים, אין פחד מ"מה יצא". הפורמט הוא הביטחון. וכשהלקוח בטוח, הוא נינוח. וכשהוא נינוח, הוא אותנטי.

זו הסיבה שפורמט "10 שאלות" מייצר את אחת מרמות האותנטיות הגבוהות ביותר שניתן להשיג בצילום.

[IMAGE]

## מה הפורמט עושה עבורכם

**בונה אמון מהיר:** הצופה רואה אדם אמיתי עונה על שאלות אמיתיות. לא שחקן, לא תסריט מלוטש. זה עובד במיוחד בעסקים שבהם האמון הוא הנכס הכי חשוב: חינוך, שירותים מקצועיים, בריאות.

**מעשיר במידע:** 10 שאלות = 10 הזדמנויות לתת ערך. כל תשובה יכולה לפצח שאלה שהלקוחות שלכם שואלים כל יום, לפרק מיתוס נפוץ, או לספר משהו שרוב האנשים לא יודעים על תחום העיסוק.

**גמיש בשימוש:** מהסרטון המלא אפשר להפיק:
- 10 קטעי Micro-Content קצרים (שאלה + תשובה = 30-60 שניות)
- Story Highlights לאינסטגרם
- פוסטים ב-LinkedIn עם ציטוטים
- FAQ מונפש לעמוד נחיתה

**הכתיבה היא שחרור:** לא צריך תסריט מורכב. כותבים 10 שאלות, מסדרים אותן מ"קלה ומפתיעה" ל"מקצועית ומעמיקה", וזהו. אפשר לסיים את כתיבת הפרויקט תוך שעה.

## מה שחשוב: הפרזנטור

הפורמט עובד, אבל הוא לא מחל על הצד האנושי. הפרזנטור (בין אם מישהו מהצוות של הלקוח או פרזנטור חיצוני) צריך להיות נוח מול מצלמה.

לא "שחקן", נוח. יש הבדל עצום.

מישהו שנוח מול מצלמה: מחייך ספונטנית, עונה בשפה הטבעית שלו, לא מרגיש שהוא "מצלם פרסומת". מישהו שלא נוח: תשובות רובוטיות, עיניים נעות, אנרגיה נוקשה שמרגישה על המסך בבירור.

**בפרויקט עבור רגב גוטמן**, מוסד לימודי לסטודנטים בכלכלה, הנהלת חשבונות ומתמטיקה, הפרזנטור הגיע עם אנרגיה טבעית ומנוסה. התוצאה: 10 שאלות שמרגישות כמו שיחה עם חבר שמקצוען בתחום שלו. בדיוק מה שסטודנט צריך לראות לפני שהוא בוחר מאיפה ללמוד.

## מתי להשתמש בפורמט הזה

- שירות לקוחות: "10 דברים שכולם שואלים על [המוצר שלנו]"
- מיתוג אישי: "10 שאלות ל[שם], [תפקיד]"
- פרסום: "10 סיבות למה [המוצר/השירות]"
- חינוך: "10 טעויות שסטודנטים עושים ב[תחום]"
- גיוס עובדים: "10 שאלות שתרצו לשאול לפני שאתם מגישים קורות חיים"

יום צילום אחד. עריכה קצרה. תוכן שעובד לחצי שנה.`,
    bodyEn: `## Why This Format Works So Well

Some formats require a long explanation to the client. "10 Questions" is not one of them.

The moment you say "we'll film you answering 10 questions", the client immediately understands where it's going. No script anxiety, no arguments about messaging, no fear of "what will come out." The format is the security. And when the client is secure, they're relaxed. And when they're relaxed, they're authentic.

This is why the "10 Questions" format produces one of the highest levels of authenticity achievable in filming.

[IMAGE]

## What the Format Does for You

**Builds trust fast:** The viewer sees a real person answering real questions. Not an actor, not a polished script. This works especially in businesses where trust is the most important asset: education, professional services, healthcare.

**Enriches with information:** 10 questions = 10 opportunities to provide value. Each answer can crack a question your clients ask every day, debunk a common myth, or tell something most people don't know about your field.

**Flexible in use:** From the full video you can produce:
- 10 short micro-content clips (question + answer = 30-60 seconds)
- Instagram Story Highlights
- LinkedIn posts with quotes
- Animated FAQ for a landing page

**Writing is liberation:** No complex script needed. Write 10 questions, arrange them from "light and surprising" to "professional and deep," and that's it. You can finish writing the project in an hour.

## What Matters: The Presenter

The format works, but it doesn't forgive the human side. The presenter (whether someone from the client's team or an external presenter) needs to be comfortable on camera.

Not "an actor", comfortable. There's a huge difference.

Someone comfortable on camera: smiles spontaneously, answers in their natural language, doesn't feel like they're "filming a commercial." Someone not comfortable: robotic answers, moving eyes, stiff energy that reads clearly on screen.

**In the project for Regev Gutman**, an educational institution for students in economics, accounting, and mathematics, the presenter arrived with natural, experienced energy. The result: 10 questions that feel like a conversation with a friend who's an expert in their field. Exactly what a student needs to see before choosing where to study.

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
    id: "content-package-raw-footage",
    coverImage: "/vlogimg/content-package-cover.jpg",
    sectionImages: ["/vlogimg/content-package-s1.jpg", "/vlogimg/content-package-s2.jpg"],
    titleHe: "מחומרי גלם לנכסים דיגיטליים: איך בונים קמפיין וידאו שלם מיומיים של צילום",
    titleEn: "From Raw Footage to Digital Assets: How to Build a Complete Video Campaign from Two Filming Days",
    excerptHe: "הטעות הנפוצה ביותר: לגשת להפקה עם מחשבה על תוצר אחד. אולפן הפקות מתקדם לא חושב על 'סרט', הוא חושב על 'מאגר נכסים'. ניתוח פרויקט Green Wall.",
    excerptEn: "The most common mistake: approaching production thinking about one output. An advanced production studio doesn't think 'film', it thinks 'asset bank'. A breakdown of the Green Wall project.",
    readingTime: 5,
    bodyHe: `## הטעות שמפסידה לכם כסף בכל הפקה

הטעות הנפוצה ביותר של מותגים וחברות היא לגשת להפקת וידאו מתוך מחשבה על תוצר סופי אחד. "אנחנו צריכים סרט תדמית", הם אומרים. "אחד. מלוטש. לאתר."

התוצאה: השקעה מלאה של זמן, תקציב ואנרגיה בנכס אחד שמתיישן מהרגע שהוא עולה לאוויר, בעוד הרשתות החברתיות דורשות נוכחות שוטפת ומגוונת לכל אורך השנה.

**אולפן הפקות מתקדם לא חושב על "סרט". הוא חושב על "מאגר נכסים".**

[IMAGE]

## הפרויקט: Green Wall, 2 ימי צילום, חבילה שלמה

בפרויקט של חברת Green Wall, חברת קירות ירוקים וגגות ירוקים, ניגשנו לצילומים עם תכנון אסטרטגי מראש.

**יום 1: ראיונות מרוכזים:** כל הדוברים, כל הלקוחות הממליצים, כל המנהלים, ליום אחד מאורגן. כל ראיון צולם בצורה שמאפשרת שני סוגי שימוש: חלק מהסרט המרכזי, **וגם** יחידה עצמאית עם חיתוך ראשון-אחרון.

**יום 2: שטח ורחפן:** לוקיישנים מרובים, צילומי אוויר, B-roll של המוצר בסביבות שונות. כל שוט מצולם עם שלוש מטרות: Hero Video, אווירה קצרה, קמפיין ממומן.

מאותם חומרי גלם, חדר העריכה הוציא:

## 3 שכבות תוכן, 3 נקודות במשפך

**שכבה 1: The Hero Video (סרט המותג המרכזי)**

סרט יוקרתי, צילום רחפן, סיפור מסגרת, Production Value גבוה. נועד לשבת בעמוד הבית, לפתוח פגישות עם לקוחות אסטרטגיים ומשקיעים. זו ה-Flagship, הכרטיס ביקור.

**שכבה 2: Visual Shorts (סרטי אווירה, Top of Funnel)**

גישת "Less is More": עריכה מינימליסטית, קצב נכון, טיפוגרפיה נקייה, בלי קריינות, בלי ראיונות. **המוצר כל כך ויזואלי** (קירות ירוקים, גגות, טבע בתוך עיר) שהוא מוכר את עצמו. הסרטים האלה עוצרים גלילה, מייצרים מודעות ועובדים מצוין בקמפיינים ממומנים קצרים.

**שכבה 3: Standalone Testimonials (הוכחה חברתית לטפטוף)**

3 סרטי המלצות עצמאיים מיום הראיונות, כל אחד מהם יחידת תוכן עצמאית. הלקוח מטפטף אותם לאורך הגאנט: פוסט LinkedIn השבוע, עמוד נחיתה לקמפיין הבא, שליחה ישירה ללידים מתלבטים.

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

The result: full investment of time, budget, and energy in one asset that ages from the moment it goes live, while social media demands ongoing, varied presence throughout the year.

**An advanced production studio doesn't think "film." It thinks "asset bank."**

[IMAGE]

## The Project: Green Wall, 2 Filming Days, Full Package

In the Green Wall project, a green walls and rooftop greenery company, we approached the filming with strategic planning upfront.

**Day 1: Concentrated interviews:** All speakers, all recommending clients, all managers, in one organized day. Every interview was filmed in a way that allows two types of use: part of the main film, **and also** a standalone unit with its own opening and close.

**Day 2: Field and drone:** Multiple locations, aerial footage, B-roll of the product in different environments. Every shot filmed with three purposes: Hero Video, short atmosphere, paid campaign.

From the same raw footage, the editing suite produced:

## 3 Content Layers, 3 Points in the Funnel

**Layer 1: The Hero Video (Central Brand Film)**

A premium film with drone cinematography, narrative framework, and high production value. Designed to sit on the homepage, open meetings with strategic clients and investors. This is the Flagship, the business card.

**Layer 2: Visual Shorts (Atmosphere Films, Top of Funnel)**

The "Less is More" approach: minimalist editing, the right rhythm, clean typography, no voiceover, no interviews. **The product is so visual** (green walls, rooftops, nature inside a city) that it sells itself. These films stop scrolling, generate awareness, and work well in short paid campaigns.

**Layer 3: Standalone Testimonials (Social Proof for Dripping)**

3 standalone testimonial films from the interview day, each an independent content unit. The client drips them across the calendar: a LinkedIn post this week, a landing page for the next campaign, a direct send to hesitant leads.

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
    coverImage: "/vlogimg/akerstein-100-cover.jpg",
    sectionImages: ["/vlogimg/akerstein-100-s1.jpg", "/vlogimg/akerstein-100-s2.jpg"],
    titleHe: "100 שנה לאקרשטיין: איך לוקחים מותג היסטורי ומותגים אותו מחדש לעתיד סינמטי",
    titleEn: "100 Years of Akerstein: How to Take a Historic Brand and Rebrand It for a Cinematic Future",
    excerptHe: "חברה בת 100 שנה עם ארכיון של דורות, מנהלים שמרנים ואין-ספור דיביזיות. האתגר: סרט אחד של 3 דקות שמחזיק את כולם, ואת הצופה. ניתוח מלא של מה שהפך את הפרויקט הזה לאחת העבודות המורכבות ביותר בתיק.",
    excerptEn: "A 100-year-old company with generational archives, conservative management, and countless divisions. The challenge: one 3-minute film that holds everyone, and the viewer. A full breakdown of what made this project one of the most complex in the portfolio.",
    readingTime: 7,
    bodyHe: `## כשהלקוח הוא מפלצת של מורכבות (המשמעות הטובה)

יש פרויקטים שבהם האתגר הגדול ביותר הוא לא הצילום ולא העריכה, אלא ההבנה מה הסרט הזה צריך לעשות, עבור מי, ואיך לרצות אנשים עם אג'נדות שונות בלי לאבד את הנשמה של הסיפור.

אקרשטיין היא חברה שמרנית, ותיקה, ועמוסה בהיסטוריה. 100 שנה, משפחות מייסדים, תעשייה כבדה, פרויקטים ארציים, ומנהלים לכל מחלקה שיש לכל אחד מהם דעה על מה הסרט "חייב להראות."

זה בדיוק הפרויקט שמוכיח עד כמה ניהול לקוח חכם שווה לפחות כמו ניהול ציוד.

[IMAGE]

## אתגר 1: ארכיון שמגיע מכמה מאות שנים

כשעובדים על סרט יובל למותג ותיק, מקבלים הרים של חומרים: **פילמים 8mm ו-16mm** ממייסדים, **תמונות שחור-לבן** שהוסרקו בנסיבות לא ברורות, **וידאו אנלוגי VHS** מהשמונים, ו-**צילומים דיגיטליים** מהעשור האחרון, כולם ביחסי מסך שונים ואיכויות שונות.

האתגר הוא לא "לנקות" אותם, זה בלתי אפשרי ולא רצוי. **האתגר הוא לכלול אותם בצורה שמרגישה כבחירה קולנועית, לא כמגבלה טכנית.**

הפתרון: להחליט מראש שחומרי הארכיון יהיו "חלון לזמן", לא ינסו להיות 4K. הם מוצגים עם גרעיניות, צבע חם ומסגרות שמאותתות "זיכרון", ואז נחתכים חדשות לבקרים לצילומי הרחפן המודרניים. המעבר בין העתיק לחדש הופך למוטיב הויזואלי המרכזי של הסרט.

## אתגר 2: לגרום לחברה עם 100 דעות להסכים על 100 שניות

בפרויקטים של תאגידים גדולים, כל סמנכ"ל רוצה שה"זרוע שלו" תקבל מספיק מסך-טיים. כל מחלקת שיווק רוצה את המסרים שלה. כל מנהל בכיר מחפש את עצמו בין הפריימים.

הפתרון: **אסטרטגיית תסריט שמאחדת מבפנים.** במקום לרשום "נראה מפעל, אחר כך נראה פרויקט, אחר כך נראה עובד", בנינו חוט סיפורי רגשי אחד: **החומרים שיוצרים את ישראל.** כל זרוע של אקרשטיין היא פרק בסיפור הזה, לא בגלל שהיא "חייבת להיכנס", אלא כי היא חלק מהנרטיב.

כשמנהלים שמרנים קיבלו את התסריט עם הלוגיקה הזו, הם הבינו שהסרט כבד עליהם **יותר** מאשר אם היו מגיעים עם דרישות. הם קיבלו בעלות על הנרטיב.

## אתגר 3: להחזיק 3 דקות קשב בלי לאבד קצב

שלוש דקות זה נצח בוידאו ברשת. הפתרון הוא לא "לקצר", הפתרון הוא **קצב עריכה שמשנה עצימות כל 20-30 שניות.**

הסרט בנוי כגלים: פתיחה רחבה (אוויר, מחוות, גדולה), אחר כך צלילה פנימה (קלוז-אפ על טקסטורה, חומר, ידיים), אחר כך שוב פתיחה. הקצב הזה מונע עייפות חזותית ומייצר תחושה של נשימה.

בנוסף, מוזיקת הרקע מאפשרת "עיגון קצבי", ובכל שינוי עצימות מוזיקלי, העריכה מחזירה קשב.

## מה שיוצא: נכס חברתי מולטי-פונקציונלי

הסרט הזה לא נועד רק ל-YouTube. הוא מוגש:

- **בפתיחת כנסים ואירועי יובל:** יצר "וואו מומנט" בפני קהל חיצוני ועובדים
- **בישיבות דירקטוריון ומשקיעים:** מיצב את אקרשטיין כמובילת שוק עם 100 שנות עמידה
- **כנכס Employer Branding:** עובדים ראו את עצמם כחלק מסיפור גדול מהם, וגאוות היחידה עלתה

**מיתוג מחדש לא אומר לזרוק את העבר. לפעמים זה אומר לגרום לעבר להיות הנכס הכי חזק שיש לך.**`,
    bodyEn: `## When the Client Is a Monster of Complexity (in the Best Way)

There are projects where the biggest challenge isn't the filming or the editing, it's understanding what the film needs to do, for whom, and how to satisfy people with different agendas without losing the soul of the story.

Akerstein is a conservative, veteran company loaded with history. 100 years, founding families, heavy industry, national projects, and managers in every department, each with opinions on what the film "must show."

This is exactly the project that proves how much smart client management is worth, at least as much as equipment management.

[IMAGE]

## Challenge 1: An Archive Spanning Several Eras

When you work on a legacy brand's anniversary film, you receive mountains of materials: **8mm and 16mm films** from founders, **black-and-white photos** scanned under unclear circumstances, **analog VHS video** from the eighties, and **digital footage** from the last decade, all in different aspect ratios and qualities.

The challenge isn't to "clean" them, that's impossible and undesirable. **The challenge is to include them in a way that feels like a cinematic choice, not a technical limitation.**

The solution: decide upfront that archive materials will be a "window in time", they won't try to be 4K. They're presented with grain, warm color, and framing that signals "memory," then cut sharply to modern drone footage. The transition between old and new becomes the film's central visual motif.

## Challenge 2: Getting a Company with 100 Opinions to Agree on 100 Seconds

In large corporate projects, every VP wants their "arm" to get enough screen time. Every marketing department wants its messages. Every senior manager looks for themselves between the frames.

The solution: **a script strategy that unifies from within.** Instead of writing "we'll show a factory, then a project, then an employee", we built one emotional narrative thread: **the materials that build Israel.** Every arm of Akerstein is a chapter in that story, not because it "has to fit in," but because it's part of the narrative.

When conservative managers received the script with this logic, they understood that the film honored them **more** than if they'd arrived with demands. They received ownership of the narrative.

## Challenge 3: Holding 3 Minutes of Attention Without Losing Pace

Three minutes is an eternity in online video. The solution isn't to "shorten", it's **editing rhythm that changes intensity every 20-30 seconds.**

The film is built in waves: wide opening (aerial, gestures, scale), then diving inward (closeup on texture, material, hands), then opening wide again. This rhythm prevents visual fatigue and creates a breathing feeling.

Additionally, the backing music allows "rhythmic anchoring", and with every musical intensity shift, editing recaptures attention.

## What Comes Out: A Multi-Functional Corporate Asset

This film wasn't designed just for YouTube. It's delivered:

- **At conference and anniversary event openings**: created a "wow moment" in front of external audiences and employees
- **At board and investor meetings**: positioned Akerstein as a market leader with 100 years of standing
- **As an Employer Branding asset**: employees saw themselves as part of a story bigger than themselves, and unit pride soared

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
    coverImage: "/vlogimg/corporate-event-cover.jpg",
    sectionImages: ["/vlogimg/corporate-event-s1.jpg", "/vlogimg/corporate-event-s2.jpg"],
    titleHe: "אל תתנו לאירוע שלכם להסתיים כשהאורות כבים: איך הופכים כנס חברה לנכס שיווקי מתמשך",
    titleEn: "Don't Let Your Event End When the Lights Go Out: How to Turn a Corporate Conference into a Lasting Marketing Asset",
    excerptHe: "חברות משקיעות חודשים בתכנון אירוע, ואז האורות כבים. בסביבה השיווקית המודרנית, זה פספוס אדיר. תיעוד אירועים עסקיים הוא כבר מזמן לא מזכרת, הוא מנוע תוכן.",
    excerptEn: "Companies spend months planning an event, then the lights go out. In today's marketing environment, that's a massive missed opportunity. Corporate event documentation is no longer a keepsake, it's a content engine.",
    readingTime: 5,
    bodyHe: `## הפספוס הכי יקר בשיווק ארגוני

חברות וארגונים משקיעים תקציבים עצומים וחודשים ארוכים של תכנון בהפקת אירועים עסקיים. כולם מגיעים, נהנים, ואז האורות כבים. והאירוע נשאר בעיקר כחשבוניות מהקייטרינג וזיכרון רחוק.

בסביבה העסקית המודרנית, זה פספוס שיווקי אדיר.

אם אתם כבר משקיעים בהפקת אירוע, התיעוד שלו הוא לא "בונוס נחמד". הוא חובה אסטרטגית שמאפשרת לכם לסחוט את המקסימום מהתקציב ולייצר חומרי שיווק שממשיכים לעבוד חודשים קדימה.

[IMAGE]

## מה שלרוב מפספסים

רוב החברות חושבות על תיעוד אירוע כסרטון אחד: "Recap מהכנס." זה טוב, אבל זה עשירית מהאפשרות האמיתית.

אירוע עסקי אחד הוא בעצם **מכרה תוכן** שמספק:

**סמכות מקצועית (Thought Leadership):** הרצאות, פאנלים, ראיונות מומחים, כל אלה, כשנערכים נכון, הופכים לסדרת תוכן ב-LinkedIn שמבססת את מומחיות החברה חודשים אחרי שהכנס הסתיים.

**Employer Branding חי:** אנרגיה קבוצתית אמיתית, עובדים שנהנים, מנהלים שנגישים, זה לא ניתן לבים. סרטון אירוע מלוטש שמראה שהחברה משקיעה בעובדים שלה הוא מגנט גיוס שעובד 24/7.

**Micro-Content לגאנט השיווקי:** מ-15 שניות לסטוריז ועד ציטוטים של נואמים בגרפיקה, אירוע אחד יכול לספק תוכן לחצי שנה שלמה.

## איך אנחנו עובדים באירועים

הגישה שלנו היא **Run-and-Gun Filming**: צוות קל, מנוסה ובלתי נראה שלוכד את האנרגיה האמיתית של האירוע, בלי לעצור אנשים, בלי להפריע לזרימה, בלי חצובות שחוסמות מעברים.

**סאונד מהמיקסר:** כשיש נואם על במה, הסאונד שלנו מגיע ישיר מהמיקסר של האירוע. תוצאה? הקלטות הרצאות שאפשר להשתמש בהן, לא רק ב-B-roll.

**תכנון מודולרי מראש:** לפני האירוע, אנחנו מגדירים יחד את ה"קוביות": מה צריך לסרטון הסיכום, מה לרשתות, מה להרצאות מלאות. כל שוט מצולם עם המטרה הסופית בראש.

**עריכה ב-3 רמות:** סרטון סיכום קצבי (2-3 דקות), גרסאות קצרות לרשתות (30-60 שניות), והרצאות מלאות עם עריכה נקייה וכותרות.

## התוצאה: המשכה מעבר לאולם

אירוע שתועד נכון ממשיך להניב ערך חודשים אחרי שהוא הסתיים:

- פוסטי LinkedIn עם ציטוטים ורגעי מפתח → Thought Leadership
- סרטוני Reel קצרים → מיתוג מעסיק ברשתות
- הרצאות מלאות ב-YouTube → שימור ידע ארגוני
- Story arcs של "מאחורי הקלעים" → אנושיות ותרבות ארגונית

**אל תשארו רק עם החשבוניות מהקייטרינג. תצאו מכל אירוע עם בנק תכנים שמציג את החברה שלכם בשיא תפארתה.**`,
    bodyEn: `## The Most Expensive Miss in Corporate Marketing

Companies and organizations invest enormous budgets and long months of planning into producing business events. Everyone shows up, has a great time, the lights go out. The event lives on mainly as catering invoices and a distant memory.

In today's business environment, that's a massive marketing miss.

If you're already investing in producing an event, documenting it isn't a "nice bonus." It's a strategic necessity that lets you maximize your budget and generate marketing content that keeps working months ahead.

[IMAGE]

## What Most Companies Miss

Most companies think about event documentation as one video: "A conference recap." That's fine, but it's a tenth of the real opportunity.

One business event is essentially a **content mine** that provides:

**Thought Leadership:** Lectures, panels, expert interviews, all of these, when edited correctly, become a LinkedIn content series that establishes the company's expertise months after the conference ended.

**Live Employer Branding:** Real group energy, employees enjoying themselves, accessible managers, this can't be faked. A polished event video showing the company invests in its people is a recruitment magnet working 24/7.

**Micro-Content for the Marketing Calendar:** From 15-second Stories to speaker quote graphics, one event can supply content for an entire half-year.

## How We Work at Events

Our approach is **Run-and-Gun Filming**: a light, experienced, near-invisible crew that captures the real energy of the event, without stopping people, disrupting flow, or blocking walkways with tripods.

**Sound from the mixer:** When there's a speaker on stage, our sound comes directly from the event's mixer. Result? Lecture recordings you can actually use, not just B-roll.

**Modular planning upfront:** Before the event, we define together the "building blocks": what's needed for the recap video, what for social media, what for full lectures. Every shot is filmed with the final purpose in mind.

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
    coverImage: "/vlogimg/format-driven-eb-cover.jpg",
    sectionImages: ["/vlogimg/format-driven-eb-s1.jpg", "/vlogimg/format-driven-eb-s2.jpg"],
    titleHe: "כשהפורמט עושה את העבודה: איך 'סליחה על השאלה' הפך לכלי Employer Branding מנצח",
    titleEn: "When the Format Does the Work: How 'Sorry for Asking' Became a Winning Employer Branding Tool",
    excerptHe: "לקחת פורמט טלוויזיוני מוכר ולהסב אותו לצרכים עסקיים, זו לא רק הברקה קריאטיבית. זו אסטרטגיית תוכן שמספקת שתי ציפורים במכה אחת: כלי גיוס אותנטי ויום כיף פנים-ארגוני.",
    excerptEn: "Taking a well-known TV format and adapting it for corporate use, that's not just creative brilliance. It's a content strategy that delivers two birds with one stone: an authentic recruitment tool and an internal team-building event.",
    readingTime: 6,
    bodyHe: `## הפורמט כגשר בין אנשים לחברה

יש טעות נפוצה שחברות גדולות עושות עם Employer Branding: הן מייצרות סרטים מלוטשים על "הערכים שלנו" ו"היתרונות שלנו", ולא מביאות אף עובד אמיתי לדבר בגובה העיניים.

התוצאה? תוכן שנראה טוב בסרגל המידות הטכני, אבל לא מצליח לגרום למועמד פוטנציאלי לחשוב "אני רוצה לעבוד שם."

בפרויקט שיצרנו עבור קבוצת אשטרום, ניגשנו לאתגר אחרת לחלוטין. במקום לבנות תסריט על החברה, לקחנו פורמט שאנשים כבר אוהבים ויודעים, והסבנו אותו.

[IMAGE]

## מדוע פורמט מוכר עובד ב-Employer Branding

הפורמט של "סליחה על השאלה", שאלות אישיות ישירות, תשובות ספונטניות, אווירה של כיף ואותנטיות, עושה משהו שסרטוני תדמית לא מצליחים לעשות: **הוא מוריד את המחסום.**

הצופה מגיע עם ציפיות פורמט: הוא יודע שזה הולך להיות מצחיק, קצת נוקב, ואמיתי. הוא לא מוכן לסרטון שיווקי, הוא מוכן לאנשים. ואז האנשים של אשטרום בדיוק מסיפרים לו מה זה בעצם לעבוד שם.

## האתגר האמיתי: 15 דקות מהצילומים

בניגוד לסרטון קצר, פרויקט בן 15 דקות דורש מגוון אתגרים:

**תחקיר וליהוק:** הלב של הפורמט הוא הצוות הנכון. עבדנו על זיהוי עובדים מכל מחלקה ואתר: כאלה שיביאו גיוון, אנרגיה, ויאמינו בתהליך. השאלות עצמן גם עברו עיצוב מדוקדק: האיזון בין שאלות שמצחיקות לבין כאלה שמביאות עומק אמיתי.

**בימוי non-actors בתנאי שטח:** ראיין עובדים אמיתיים בתנאי אתר בנייה, רעש, אבק, לוגיסטיקה, זה אתגר שונה לגמרי מסטודיו. היכולת לגרום לעובד להרגיש בנוח מספיק כדי לצחוק, להתרגש ולהיות כן מול מצלמה, זה עיקר העבודה.

**עריכה סיפורית לאורך:** 15 דקות לא מתחזקות את עצמן. העריכה קבעה את הקצב, בחרה את הרגעים שמחזיקים ומרגשים, שילבה B-roll מחיי החברה, ויצרה קשת שלמה, מהומור ועד גאווה מקצועית אמיתית.

## ערך כפול: פנים וחוץ ארגוני

מה שמייחד את הפרויקט הזה הוא שהוא מספק שתי תוצאות עסקיות שונות מהפקה אחת:

**פנים ארגוני:** יום הצילומים עצמו הפך לאירוע מגבש. העובדים שהשתתפו הרגישו שרואים אותם ומעריכים אותם. הסרט שעלה אחר כך עשה גאווה לכל מי שהופיע בו, וגם לאלה שלא.

**חוץ ארגוני:** מועמד שצופה ב-15 דקות של עובדים אמיתיים שמספרים על שגרת החיים של קבוצת אשטרום, הוא לא רק מבין את ה-DNA הארגוני, הוא כבר נמצא בתוכו.

## מה זה אומר עבורכם

אם יש לכם חברה עם סיפורים ייחודיים שעדיין לא סופרו, Format-Driven Content הוא הדרך להוציא אותם. הפורמט הנכון מוריד את ההתנגדות של הצופה, בונה אמינות מהיום הראשון ומייצר תוכן שאנשים בוחרים לצפות בו.

**הסרט הטוב ביותר הוא זה שהצופה שוכח שהוא מיתוג.**`,
    bodyEn: `## The Format as a Bridge Between People and Company

There's a common mistake large companies make with Employer Branding: they produce polished films about "our values" and "our benefits", without bringing a single real employee to speak eye-to-eye.

The result? Content that looks good on technical metrics, but fails to make a potential candidate think "I want to work there."

In the project we created for Ashtrom Group, we approached the challenge completely differently. Instead of building a script about the company, we took a format people already love and know, and adapted it.

[IMAGE]

## Why a Familiar Format Works in Employer Branding

The "Sorry for Asking" format, direct personal questions, spontaneous answers, an atmosphere of fun and authenticity, does something brand films can't: **it lowers the barrier.**

The viewer arrives with format expectations: they know it's going to be funny, a little pointed, and real. They're not prepared for a marketing video, they're prepared for people. And then Ashtrom's people tell them exactly what it's really like to work there.

## The Real Challenge: 15 Minutes Held Together

Unlike a short film, a 15-minute project demands a different range of challenges:

**Research and casting:** The heart of the format is the right team. We worked on identifying employees from every department and site: people who would bring diversity, energy, and believe in the process. The questions themselves were also carefully crafted: the balance between questions that make people laugh and ones that bring real depth.

**Directing non-actors in field conditions:** Interviewing real employees on a construction site, noise, dust, logistics, is a completely different challenge from a studio. The ability to make an employee comfortable enough to laugh, get emotional, and be honest on camera, that's the core of the work.

**Long-form narrative editing:** 15 minutes don't sustain themselves. Editing determined the pacing, chose the moments that hold and move, integrated B-roll from company life, and created a complete arc, from humor to genuine professional pride.

## Double Value: Internal and External

What distinguishes this project is that it delivers two different business outcomes from one production:

**Internal:** The filming day itself became a bonding event. The employees who participated felt seen and appreciated. The film that came out afterward created pride for everyone who appeared in it, and even those who didn't.

**External:** A candidate who watches 15 minutes of real employees describing the daily life of Ashtrom Group, they're not just understanding the organizational DNA, they're already inside it.

## What This Means for You

If you have a company with unique stories that haven't been told yet, Format-Driven Content is the way to bring them out. The right format lowers viewer resistance, builds credibility from day one, and creates content people choose to watch.

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
    sectionImages: ["/vlogimg/kickstarter-blueprint-s1.jpg"],
    coverImage: "/vlogimg/kickstarter-blueprint-cover.jpg",
    titleHe: "ה-Blueprint של סרט קיקסטארטר: איך הופכים ספקנים לתומכים משלמים",
    titleEn: "The Kickstarter Blueprint: How to Turn Skeptics into Paying Backers",
    excerptHe: "סרטון קיקסטארטר מוצלח פועל לפי חוקים שונים לחלוטין מסרטון תדמית. כשהמוצר עוד לא קיים, האמון הוא הכל. ניתוח הקמפיין של Dride 4K שגייס 1.1 מיליון דולר.",
    excerptEn: "A successful Kickstarter video plays by completely different rules than a brand film. When the product doesn't exist yet, trust is everything. Analysis of the Dride 4K campaign that raised $1.1 million.",
    readingTime: 6,
    bodyHe: `## קמפיין גיוס המונים ≠ סרטון תדמית

רוב חברות ההפקה מגיעות לקמפיין קיקסטארטר עם הכלים של סרטוני מותג: אסתטיקה יפה, מוזיקה מרגשת, מסרים ברמה גבוהה. התוצאה? סרטון מרשים שלא מוכר כלום.

בגיוס המונים, הצופה הוא לא לקוח שרוכש מוצר מוכח. הוא משקיע בחזון של מוצר שעוד לא קיים בשוק. הפחד מכשלון, מאיחור במשלוח, מבעיות ייצור, כל אלה עובדים נגדכם. הסרטון צריך לנטרל התנגדויות, לא רק לייצר התרגשות.

בפרויקט Dride 4K, מצלמת רכב 4K שפוצחה לקמפיין קיקסטארטר, בנינו כל שנייה של הסרטון סביב מבנה אחד מוכח.

[IMAGE]

## ה-Kickstarter Blueprint: חמישה שלבים

### שלב 1: ה-Hook הקולנועי (0–10 שניות)

החמש עד עשר שניות הראשונות הן הכל. הגולש בקיקסטארטר רואה עשרות פרויקטים. ה-Hook לא צריך להסביר, הוא צריך לעצור.

Dride 4K פתח עם המוצר בפעולה, רכב בתנועה, גימור מטאלי שמשדר "זה לא מוצר מוסכייה, זה טכנולוגיה רצינית." לפני שהצופה שמע מילה אחת, הוא כבר הבין שזה שונה.

### שלב 2: הצגת הכאב (The Problem)

אחרי ה-Hook, לא מציגים את המוצר, מציגים את הבעיה. **חום קיצוני** שמשבית מצלמות רגילות. **פגיעה ברכב חונה** ללא עדים ובלי ראיות. **קושי בשיתוף** חומרים עם ביטוח ומשטרה.

הצופה צריך לחשוב "זה בדיוק מה שקרה לי" לפני שהוא שומע על הפתרון. ברגע שיש זיהוי עם הבעיה, הפתרון כבר חצי מכור.

### שלב 3: גיבור המוצר (The Hero Reveal)

עכשיו, ורק עכשיו, מציגים את המוצר, עם תיאור נועז: **"The most rigid dashcam on the planet."** זה לא תיאור מפרט, זה הצהרת עמדה. זה מה שגורם לתומך לרצות לספר לחברים שלו.

### שלב 4: Feature Walkthrough שמתרגם ל-Benefits

כל פיצ'ר טכני מתרגם מיד לתועלת רגשית:

**"שלדת אלומיניום לפיזור חום"** → "לא תפסיק לעבוד כשהרכב עומד בשמש של ישראל."
**"חיישן מכ"ם Radar-based"** → "תדע שמישהו פגע ברכב שלך שניות לפני שזה קרה."
**"4G/5G עם ענן"** → "החומרים שמורים לפני שהגנב הספיק לברוח."

המפרט הטכני הוא הראיה. התועלת הרגשית היא הסיבה לקנות.

### שלב 5: נטרול ההתנגדות הגדולה

בקיקסטארטר, ההתנגדות הסמויה תמיד אותה: "זה ישלח בזמן? זה לא יעלם לי עם הכסף?" התשובה לא יכולה להיות "אנחנו אמינים." היא צריכה להיות **עדות קונקרטית**.

Dride 4K הציג בסרטון: "כבר רכשנו אלפי מעבדים מראש." זה משפט אחד שנטרל פחד של כל Backer שחשב פעמיים. לא הבטחות, עובדות.

## התוצאה: 3,748 תומכים, $1,191,083

הפרויקט גייס מעל 1.1 מיליון דולר. לא בגלל שהמוצר היה הכי טוב בשוק, אלא כי הסרטון בנה אמון, תרגם טכנולוגיה לרגש, ונתן לצופה סיבה לפעול **עכשיו**.

**סרטון קמפיין הוא המנוע העסקי המרכזי של הגיוס. הוא לא "חלק מהקמפיין", הוא הקמפיין.**`,
    bodyEn: `## Crowdfunding Video ≠ Brand Film

Most production companies come to a Kickstarter campaign with brand film tools: beautiful aesthetics, moving music, high-level messaging. The result? An impressive video that sells nothing.

In crowdfunding, the viewer isn't a customer buying a proven product. They're investing in the vision of a product that doesn't exist in the market yet. Fear of failure, late delivery, production issues, all working against you. The video needs to neutralize objections, not just generate excitement.

In the Dride 4K project, a 4K dashcam cracked for a Kickstarter campaign, we built every second of the video around one proven structure.

[IMAGE]

## The Kickstarter Blueprint: Five Stages

### Stage 1: The Cinematic Hook (0–10 seconds)

The first five to ten seconds are everything. A Kickstarter browser sees dozens of projects. The hook doesn't need to explain, it needs to stop.

Dride 4K opened with the product in action, a car in motion, metallic finish that communicates "this isn't a garage product, this is serious technology." Before the viewer heard a single word, they already understood this was different.

### Stage 2: The Pain Presentation

After the hook, don't present the product, present the problem. **Extreme heat** that disables regular cameras. **Parking hits** with no witnesses and no evidence. **Difficulty sharing** footage with insurance and police.

The viewer needs to think "that's exactly what happened to me" before they hear about the solution. Once there's identification with the problem, the solution is already half sold.

### Stage 3: The Hero Reveal

Now, and only now, present the product, with a bold declaration: **"The most rigid dashcam on the planet."** This isn't a spec description, it's a position statement. This is what makes a backer want to tell their friends.

### Stage 4: Feature Walkthrough That Translates to Benefits

Every technical feature immediately translates to an emotional benefit:

**"Aluminum chassis for heat dissipation"** → "It won't stop working when your car sits in the Israeli sun."
**"Radar-based sensor"** → "You'll know someone hit your car seconds before it happened."
**"4G/5G with cloud"** → "Footage is saved before the thief had time to escape."

The technical spec is the proof. The emotional benefit is the reason to buy.

### Stage 5: Neutralizing the Big Objection

In Kickstarter, the hidden objection is always the same: "Will it ship on time? Will my money disappear?" The answer can't be "we're trustworthy." It needs to be **concrete evidence**.

Dride 4K showed in the video: "We've already purchased thousands of processors in advance." One sentence that neutralized the fear of every backer who thought twice. Not promises. Facts.

## The Result: 3,748 Backers, $1,191,083

The project raised over $1.1 million. Not because the product was the best on the market, but because the video built trust, translated technology into emotion, and gave the viewer a reason to act **now**.

**A campaign video is the primary business engine of the fundraise. It's not "part of the campaign", it is the campaign.**`,
    date: "2025-04-01",
    tags: ["Crowdfunding", "Kickstarter", "Product Launch", "Direct Response"],
    relatedServiceHref: "/services/hightech",
    relatedServiceLabelHe: "סרטי מוצר והשקות",
    relatedServiceLabelEn: "Product & Launch Films",
    relatedYoutubeId: "JncBv6FbkRc",
  },
  {
    id: "tech-product-video-60sec",
    coverImage: "/vlogimg/tech-product-video-cover.jpg",
    sectionImages: ["/vlogimg/tech-product-video-s1.jpg", "/vlogimg/tech-product-video-s2.jpg"],
    titleHe: "איך להסביר טכנולוגיה מורכבת ב-60 שניות? האמנות של סרטי מוצר לעולם ה-AI והדאטה",
    titleEn: "How to Explain Complex Technology in 60 Seconds? The Art of Product Films for the AI and Data World",
    excerptHe: "האתגר הגדול של חברות הייטק ו-SaaS הוא לא הפיתוח, אלא היכולת להסביר מה המוצר שלהן עושה ב-60 שניות. שלושת החוקים לסרטון מוצר טכנולוגי שממיר צופים ללידים.",
    excerptEn: "The biggest challenge for high-tech and SaaS companies isn't development, it's explaining what their product does in 60 seconds. Three laws of a technology product film that converts viewers to leads.",
    readingTime: 5,
    bodyHe: `## האתגר שכל חברת הייטק מכירה

האתגר הגדול ביותר של חברות הייטק וסטארטאפים בתחום ה-AI וה-Deep Tech הוא לא הפיתוח עצמו, אלא היכולת להסביר ללקוחות ולמשקיעים מה המוצר שלהם באמת עושה, ואיך הוא פותר להם את הבעיה בצורה פשוטה ומהירה. כשהמוצר שלכם מבוסס על אלגוריתמים, תשתית נתונים או חיבורי API, אי אפשר פשוט "לצלם אותו בשטח".

כאן נכנס לתמונה השילוב בין קריאטיב חכם, Motion Graphics מתקדם וסיפור סיפורים טכנולוגי.

בפרויקט שיצרנו עבור Bright Data, המטרה הייתה לפצח את האופן שבו תשתית הדאטה שלהם מניעה ומזינה מודלים של בינה מלאכותית. במקום להשתמש בהסברים טקסטואליים ארוכים, תרגמנו את הארכיטקטורה המורכבת לשפה חזותית קולנועית ודינמית.

[IMAGE]

## חוק 1: להתחיל מהכאב, לא מהפיצ'ר

הלקוח שלכם לא קונה טכנולוגיה, הוא קונה פתרון לבעיה. הסרטון נפתח בחרדה הגדולה ביותר של מפתחי AI, מודלים שנשארים מאחור ומאבדים את היתרון התחרותי שלהם בגלל חוסר במידע עדכני. ברגע שהגדרתם את הכאב בשניות הראשונות, הקהל שלכם קשוב לפתרון.

**רוב חברות הטכנולוגיה עושות את הטעות ההפוכה:** הן מתחילות בפיצ'רים, ב"מה יש לנו", ב-USPs. הצופה עוד לא יודע למה לו אכפת. תנו לו סיבה לצפות, אז תציגו את הפתרון.

## חוק 2: מטפורות ויזואליות שמייצגות מה שלא ניתן לצלם

דאטה הוא לא דבר מוחשי. כדי להראות זרימה, נפח ומהירות של מידע, השתמשנו במערכות חלקיקים תלת-ממדיות ובגרפיקה בתנועה המדמה רשתות עצביות וזרימת קוד.

שלושה כלים שעושים את זה נכון:

**Particle Systems:** כדורים, נקודות ונתיבים שזורמים בחלל, מדמים את הכמות העצומה של נתונים שעוברים דרך המערכת. הצופה מרגיש "סקייל" בלי להבין מספרים.

**UI Simulation:** ממשקי מסך אמיתיים עם שגיאות קוד מוכרות (404, 502, timeout errors), הצופה הטכני מזהה אותם מיד ומזדהה עם הכאב. זה לא עיצוב גנרי, זה שפה משותפת.

**Beat-matching:** כל תנועה גרפית מסונכרנת עם הביט של הפסקול. זה לא מקרי, זה מה שגורם לסרטון להרגיש "חי" ואנרגטי גם כשאין בו שחקן אחד.

## חוק 3: לדבר בשפה של מקבלי ההחלטות

מנהלי מוצר, CTOs וסמנכ"לי טכנולוגיה מחפשים אמינות. שילוב של מונחים מקצועיים נכונים (LLMs, MCP, A2A, Petabyte scale), תצוגות ממשק מוכרות ונתונים השוואתיים מול מתחרים, מעניקים לסרטון את הסמכותיות הדרושה.

**הגרף ההשוואתי הוא כלי שיווקי עוצמתי:** הוא הופך שאלה של "האם לקנות" לשאלה של "למה לא לקנות". מקבל ההחלטות רואה את הנתונים, מבין את הפער, ועובר לשלב הבא.

## מה זה שווה בפועל

סרטון מוצר חכם הוא לא רק חלון ראווה יפה. הוא זרוע המכירות והשיווק הדיגיטלית של החברה שלכם. הוא מסוגל לקחת את הטכנולוגיה המורכבת ביותר ולתרגם אותה לערך עסקי ברור, בין אם על דף הנחיתה, בהצגה למשקיעים, או ב-LinkedIn.

**60 שניות שנעשות נכון שוות יותר מ-6 עמודי מצגת.**`,
    bodyEn: `## The Challenge Every High-Tech Company Knows

The biggest challenge for high-tech companies and startups in AI and Deep Tech isn't the development itself, it's the ability to explain to clients and investors what the product actually does, and how it solves their problem simply and quickly. When your product is based on algorithms, data infrastructure, or API connections, you simply can't "film it in the field."

This is where the combination of smart creative, advanced Motion Graphics, and Tech Storytelling comes in.

In the project we created for Bright Data, the goal was to crack the way their data infrastructure powers and feeds AI models. Instead of using long textual explanations, we translated the complex architecture into a cinematic, dynamic visual language.

[IMAGE]

## Law 1: Start with the Pain, Not the Feature

Your client isn't buying technology, they're buying a solution to a problem. The video opens with the biggest anxiety of AI developers, models falling behind and losing their competitive advantage due to a lack of current data. Once you define the pain in the first seconds, your audience is listening for the solution.

**Most tech companies make the opposite mistake:** they start with features, with "what we have," with USPs. The viewer doesn't yet know why they should care. Give them a reason to watch, then present the solution.

## Law 2: Visual Metaphors That Represent the Unfilmable

Data isn't a tangible thing. To show the flow, volume, and speed of information, we used 3D particle systems and motion graphics simulating neural networks and code flow.

Three tools that do this right:

**Particle Systems:** spheres, points, and paths flowing through space, simulating the enormous volume of data passing through the system. The viewer feels "scale" without understanding numbers.

**UI Simulation:** real screen interfaces with familiar error codes (404, 502, timeout errors), the technical viewer recognizes them immediately and identifies with the pain. This isn't generic design, it's a shared language.

**Beat-matching:** every graphic movement is synchronized with the soundtrack's beat. This isn't accidental, it's what makes the video feel "alive" and energetic even without a single actor.

## Law 3: Speak the Language of Decision-Makers

Product managers, CTOs, and technology VPs look for credibility. Combining the right professional terminology (LLMs, MCP, A2A, Petabyte scale), familiar interface displays, and comparative data against competitors, gives the video the authority it needs.

**The comparison graph is a powerful sales tool:** it turns the question of "whether to buy" into "why not to buy." The decision-maker sees the data, understands the gap, and moves to the next stage.

## What This Is Worth in Practice

A smart product film isn't just a pretty showpiece. It's your company's digital sales and marketing arm. It can take the most complex technology and translate it into clear business value, whether on a landing page, in an investor presentation, or on LinkedIn.

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
    coverImage: "/vlogimg/social-content-cover.jpg",
    sectionImages: ["/vlogimg/social-content-s1.jpg", "/vlogimg/social-content-s2.jpg"],
    titleHe: "פיצוח ה-ROI של הסושיאל: איך הופכים יום צילום אחד לעשרות סרטוני תוכן מנצחים",
    titleEn: "Cracking Social ROI: How One Filming Day Becomes Dozens of Winning Content Videos",
    excerptHe: "הרשתות רעבות לתוכן כל יום. תקציבי ההפקה מוגבלים. הפתרון לא נמצא בעוד ימי צילום, הוא נמצא בתכנון חכם יותר.",
    excerptEn: "Social media is hungry for content every day. Production budgets are limited. The solution isn't more filming days, it's smarter planning.",
    readingTime: 5,
    bodyHe: `## הבעיה שמנהלי שיווק לא אוהבים לדבר עליה

מנהלי שיווק ודיגיטל בחברות גדולות מכירים את התסכול: הרשתות צריכות תוכן כל יום, אבל ימי צילום עולים כסף. כל Reel, כל Short, כל Story, אם מייצרים אותם בנפרד, העלות מתפוצצת. הפתרון הנפוץ? להתפשר על איכות. להשתמש בחומרים ישנים. לעלות פחות.

זו טעות.

**יש גישה אחרת.** היא לא דורשת יותר ימי צילום, היא דורשת תכנון שונה לחלוטין לפני שמגיעים לסט.

## Max ROI Production: עיקרון אחד, עשרות תוצאות

הגישה שלנו מבוססת על פירוק יום הצילום לרכיבים, מה שאנחנו קוראים **"צילום מודולרי"**. במקום להגיע עם תסריט אחד ולצלם אותו קדימה-אחורה, אנחנו מגיעים עם מפת תוכן: רשימת "קוביות" שכל אחת מהן עובדת לבד, וגם יחד עם האחרות.

בפרויקט LYFE של קבוצת אשטרום, המטרה הייתה לייצר נכסים דיגיטליים לרשתות החברתיות לאירועי השנה החדשה. יכולנו להגיע, לצלם סרטון אחד ולהסתיים.

במקום זה, הגענו עם אסטרטגיית תוכן מלאה ליום אחד.

[IMAGE]

## שלב 1: פיצוח ה"עוגן הויזואלי"

לפני שאנחנו נוגעים במצלמה, אנחנו מחפשים את **ה-Scroll-stopper**: האלמנט שיעצור אצבע בגלילה תוך שנייה.

בLYFE, הכדורים המטאליים הענקיים בלובי היו התשובה. השתקפויות, צבעים, אינטראקציה עם אנשים, הם הפכו ל"עוגן" שמחבר בין כל הסרטונים ומייצר זיהוי מיידי של המקום.

כל פרויקט יש לו עוגן כזה. לא תמיד הוא ברור מיד, זה חלק מעבודת הפרה-פרודקשן.

## שלב 2: צילום מודולרי בשטח

**רחפן:** פתיחות, סקייל, כניסות דרמטיות למרחב.
**גוף ראשון (POV):** תחושת "אתה שם". הצופה נכנס למרחב.
**זוויות נמוכות:** מייצרות גובה ויוקרה.
**אווירה ואנשים:** הרגעים האנושיים האמיתיים: חיוכים, תנועה, אנרגיה.

כל "קובייה" מצולמת בטייקים קצרים, מכמה זוויות. בסוף היום, בנק חומרים עשיר שניתן לחתוך אותו בדרכים שונות.

## שלב 3: פוסט-פרודקשן מותאם פלטפורמה

כאן קורה הקסם. אותם חומרים גלם עוברים:

**Beat-matching:** עריכה שמסונכרנת עם הביט של המוזיקה, יוצרת תחושת אנרגיה גבוהה גם בסרטון של 15 שניות.

**Motion Overlays:** שכבות גרפיות שמעניקות לוידאו את הלוק הטרנדי, בלי לאבד את היוקרה של המותג.

**חיתוך לפלטפורמות:** אותו יום צילום → 9:16 לReels ו-TikTok, 16:9 ליוטיוב, 1:1 לפיד. גרסאות לחגים, לקמפיינים עונתיים, לפוסטים שוטפים.

## מה יוצא בסוף

מיום צילום אחד מתוכנן נכון, חברות מקבלות:
- 8-15 סרטוני Reels/Shorts מוכנים לעלייה
- חומר גלם ל-20-30 גרסאות עתידיות
- נכסים ויזואליים לשימוש חוזר לאורך כל השנה

**אתם לא צריכים יותר ימי צילום. אתם צריכים ימי צילום חכמים יותר.**

videoshop מביאה את האסטרטגיה, את הצוות ואת המתודולוגיה. אתם מביאים את הסיפור שרוצים לספר.`,
    bodyEn: `## The Problem Marketing Managers Don't Like Talking About

Marketing and digital managers at large companies know the frustration: social media needs content every day, but filming days cost money. Every Reel, every Short, every Story, if produced separately, costs explode. The common solution? Compromise on quality. Use old materials. Post less.

That's a mistake.

**There's another approach.** It doesn't require more filming days, it requires completely different planning before arriving on set.

## Max ROI Production: One Principle, Dozens of Results

Our approach is based on breaking down the filming day into components, what we call **"modular shooting."** Instead of arriving with one script and filming it front to back, we arrive with a content map: a list of "building blocks" where each one works alone, and also with the others.

In the LYFE project for Ashtrom Group, the goal was to create digital assets for social media for New Year events. We could have arrived, filmed one video, and left.

Instead, we arrived with a complete content strategy for one day.

[IMAGE]

## Stage 1: Identifying the Visual Anchor

Before we touch a camera, we look for **the scroll-stopper**: the element that will stop a scrolling finger within a second.

At LYFE, the giant metallic orbs in the lobby were the answer. Reflections, colors, interaction with people, they became the "anchor" connecting all the videos and creating immediate recognition of the location.

Every project has such an anchor. It's not always immediately obvious, that's part of the pre-production work.

## Stage 2: Modular Shooting on Location

**Drone:** openings, scale, dramatic entrances into the space.
**POV (point of view):** the feeling of "you're there." The viewer enters the space.
**Low angles:** create height and luxury.
**Atmosphere and people:** the real human moments: smiles, movement, energy.

Each "building block" is filmed in short takes, from multiple angles. At the end of the day, a rich footage bank that can be cut in different ways.

## Stage 3: Platform-Tailored Post-Production

This is where the magic happens. The same raw footage goes through:

**Beat-matching:** editing synchronized to the music beat, creates a high-energy feeling even in a 15-second video.

**Motion Overlays:** graphic layers that give the video a trending look, without losing the brand's luxury feel.

**Platform cutting:** same filming day → 9:16 for Reels and TikTok, 16:9 for YouTube, 1:1 for feed. Versions for holidays, seasonal campaigns, ongoing posts.

## What Comes Out in the End

From one well-planned filming day, companies receive:
- 8-15 Reels/Shorts ready to post
- Raw material for 20-30 future versions
- Visual assets for reuse throughout the year

**You don't need more filming days. You need smarter filming days.**

videoshop brings the strategy, the crew, and the methodology. You bring the story you want to tell.`,
    date: "2025-02-15",
    tags: ["Social Media", "ROI", "Content Strategy", "Behind the Scenes"],
    relatedServiceHref: "/services/corporate",
    relatedServiceLabelHe: "מיתוג מעסיק וסרטי גיוס",
    relatedServiceLabelEn: "Employer Branding & Recruitment",
    relatedYoutubeId: "d2xNLprySKQ",
  },
  {
    id: "ai-storyboard-workflow",
    coverImage: "/vlogimg/ai-storyboard-cover.jpg",
    sectionImages: ["/vlogimg/ai-storyboard-s1.jpg", "/vlogimg/ai-storyboard-s2.jpg"],
    titleHe: "איך מייצרים סרט AI שנראה כמו הפקה של מיליון דולר: מהסטוריבורד ועד המסירה",
    titleEn: "How to Produce an AI Film That Looks Like a Million-Dollar Production: From Storyboard to Delivery",
    excerptHe: "הסוד לא נמצא בכלי. הוא נמצא בתהליך. אחרי עשרות פרויקטי AI, הנה המתודולוגיה המלאה שלנו, שלב אחרי שלב.",
    excerptEn: "The secret isn't in the tool. It's in the process. After dozens of AI projects, here's our complete methodology, step by step.",
    readingTime: 8,
    bodyHe: `## הנחת היסוד הלא נכונה

רוב האנשים שמגיעים אלינו עם בקשה לסרט AI חושבים שהתהליך נראה כך: כותבים פרומפט → מקבלים סרט → מסיימים.

הם מגלים שזה לא עובד ככה. ואנחנו לא מפתיעים אותם, אנחנו מסבירים למה.

**הפקת AI מקצועית עוברת אותם שלבים בדיוק כמו הפקה קלאסית.** ה-AI הוא לא קיצור דרך, הוא כלי ייצור חדש. כמו שמצלמת ARRI לא מצלמת בעצמה, Kling לא מפיק בעצמו. מישהו צריך לדעת מה לבקש ממנה, ומה לעשות עם מה שיוצא.

הנה התהליך המלא שלנו, כפי שהוא מתרחש בפועל.

## שלב 1: הבריף: לא "מה אתם רוצים" אלא "מה אתם רוצים שיקרה"

הפגישה הראשונה שלנו עם לקוח AI אף פעם לא מתחילה בשאלה "איזה סרט תרצו?". היא מתחילה בשאלה: **"מה הצופה צריך לחשוב, להרגיש ולעשות שלוש שניות אחרי שהסרט מסתיים?"**

ההבדל הזה קריטי.

לקוח שמגיע ואומר "אנחנו רוצים סרט שמציג את הטכנולוגיה שלנו" עדיין לא יודע מה הוא רוצה. לקוח שמגיע ואומר "אנחנו רוצים שמנמ"ר של תאגיד בנייה בינלאומי יצלצל אלינו אחרי הצפייה", זה בריף שאפשר לעבוד איתו.

הבריף הנכון מגדיר:
- **קהל יעד ספציפי:** לא "עסקים" אלא "VP Operations בחברת קבלנות בינלאומית שמשתתף בדיון תקציב"
- **פעולה מוגדרת:** לא "מודעות" אלא "בקשת פגישה / שליחת RFP"
- **חסם אחד שצריך לפרוץ:** מה מונע מהצופה לפעול כרגע? אי-אמון? חוסר ידע? לא מבין את הדחיפות?

[IMAGE]

## שלב 2: ארכיטקטורת הנרטיב

אחרי הבריף אנחנו כותבים מסמך של שני עמודים לפני שנוגעים באיזה כלי שהוא:

**The Story Spine:**
- **Act 1: הסטטוס קוו:** העולם כפי שהוא נראה בלי הפתרון
- **Act 2: הבעיה הנסתרת:** הסיכון שהצופה לא ידע עליו (ולכן לא פעל)
- **Act 3: ה-turning point:** הרגע שבו הפתרון מוכנס
- **Act 4: העולם החדש:** מה נראה אחרי

המבנה הזה עובד בכל סרט, B2B, הומניטרי, טכנולוגי, נדל"ן. אנושות לא השתנתה. אנחנו עדיין מחוברים לסיפורים שנבנו ככה.

לאחר מכן: **תסריט מלא.** כל שניה מחושבת. VO, תיאור ויזואלי, גרפיקה, מוזיקה, הכל כתוב על הנייר לפני שפותחים Midjourney.

## שלב 3: הסטוריבורד עם AI

**זה הצעד שרוב הלקוחות לא מצפים לו, וזה הצעד שמכריע את כל הפרויקט.**

אנחנו לא יוצרים סטוריבורד "על הדרך". אנחנו מוציאים שלושה עד חמישה ימים **רק** על הסטוריבורד.

הסטוריבורד ב-Midjourney מגדיר:
- **כל angle:** שוט מהצדדים? מלמעלה? POV?
- **לוק ויזואלי:** טון, פלטת צבעים, depth of field, lighting direction
- **ה-art direction של הדמויות:** מה הם לובשים? איפה הם עומדים? מה הם עושים?
- **ה-environment:** איפה מתרחשת כל סצנה? איזה שעה ביום?

כל frame ב-Midjourney עובר לפחות 8-12 iterations לפני שאנחנו מרוצים ממנו. כל שוט שיישמע כמו "קרוב מספיק", יהפוך לבעיה בשלב הגנרציה.

**הסטוריבורד הוא גם כלי ניהול לקוח.** לפני שאנחנו מייצרים שנייה אחת של וידאו, הלקוח מאשר כל frame. זה מונע את אחת הבעיות הגדולות ביותר בהפקות AI: "זה לא מה שחשבתי שיצא".

## שלב 4: אישור הלקוח

לפני הגנרציה, הלקוח מקבל:
1. תסריט עם טיימינג מדויק
2. Storyboard מלא (20-40 frames)
3. Mood board: reference של לוק וטון

הלקוח מאשר את שלושת המסמכים. **רק אז** מתחילה העבודה האמיתית.

זה לוקח עוד שבוע. אבל זה חוסך שלושה שבועות של iterations אחרי הגנרציה.

[IMAGE]

## שלב 5: גנרציית התנועה

עכשיו, לבסוף, נכנסים Kling ו-Runway Gen-3 Alpha לתמונה.

**ב-Kling:** כל frame מה-Midjourney הופך ל-seed לגנרציית תנועה. אנחנו מגדירים: כיוון תנועת המצלמה, מהירות, תנועת הדמויות, ואת ה-motion style הכולל. לכל שניה אחת שתיכנס לסרט הסופי, מייצרים 8-15 variants ובוחרים אחת.

**ב-Runway:** בעיקר עבור shots שדורשים שליטה מדויקת יותר בתנועת המצלמה, או לצמצם inconsistency בין frames.

**ה-consistency challenge:** זו הבעיה מספר אחת ב-AI. כל frame שנוצר בנפרד עלול לא לשבת עם הקודם. אנחנו פותרים אותה עם:
- Visual style guide קפדני שנמסר לכל פרומפט
- Reference image עקבי לכל דמות/לוקיישן
- Color correction בפוסט שמאחד את הכל

## שלב 6: פוסט-פרודקשן

**עריכה:** כל ה-clips עולים ל-DaVinci Resolve. בונים את הסרט לפי התסריט והסטוריבורד המאושרים. זה לא "שיחקנו" ב-AI, זה עריכה רצינית עם תשומת לב לקצב, tension, ו-breathing.

**HUD & Motion Graphics:** ב-After Effects, כל אלמנט גרפי שאנחנו מוסיפים (UI overlays, גרפים, כותרות, annotations) מעוצב לפי שפה ויזואלית מותאמת לסרט. לא template. לא Canva.

**Color Grading:** כל clip עובר grading ב-DaVinci כדי לאחד את הלוק. AI מייצר inconsistencies בצבע, grading מקצועי מוחק אותן.

**Sound Design ו-Mix:** קריינות, מוזיקה, Foley, הכל מעוצב ומיוצב. הסרט הסופי מגיע עם LUFS מנורמלים לכל הפלטפורמות.

## מה זה עולה בזמן

לקוחות מצפים שסרט AI ייקח שבוע. סרט AI מקצועי לוקח **אותו הזמן כמו הפקה קלאסית**, בין 4 ל-8 שבועות.

הפירוט:
- בריף ואישור כיוון: שבוע
- תסריט + סטוריבורד + אישור לקוח: שבוע וחצי
- גנרציה: שבועיים
- פוסט-פרודקשן + פידבק: שבועיים

ה"קסם" של AI לא מקצר את הזמן, הוא מרחיב את מה שאפשר ליצור. בתקציב שבעבר ייצר פרומו פשוט, היום אפשר לייצר עולם.

## מה AI יכול, ומה הוא לא יכול

**AI מנצח כשצריך לצלם את הלא-ניתן לצילום:**
- עולמות עתידיים
- מערכות שסווגות או לא נגישות
- Scale שאין לו תקציב: שמיים, הרס, המונים
- מדינות או אזורים שאי אפשר לנסוע אליהם

**AI מפסיד כשנדרש הרגע האנושי האמיתי:**
- עדות של לקוח
- CEO מסביר חזון
- עובד מדבר על מה שהוא אוהב בחברה

לכן ב-Hybrid productions שלנו, תמיד יש שניות של live action אמיתי. הן מה שנותנות לסרט את ה"אמת" שהמוח האנושי מחפש.

videoshop לא מוכרים "סרטי AI". אנחנו מפיקים **סרטים שמשתמשים בכלי הנכון לכל רגע.** לפעמים זה מצלמה. לפעמים זה Kling. תמיד זה תסריט.`,
    bodyEn: `## The Wrong Assumption

Most people who come to us with an AI film request think the process looks like this: write a prompt → get a film → done.

They discover that's not how it works. And we don't surprise them, we explain why.

**Professional AI production goes through the exact same stages as classical production.** AI is not a shortcut, it's a new production tool. Just as an ARRI camera doesn't film itself, Kling doesn't produce itself. Someone needs to know what to ask of it, and what to do with what comes out.

Here's our complete process, as it actually happens.

## Stage 1: The Brief: Not "What Do You Want" But "What Do You Want to Happen"

Our first meeting with an AI client never starts with "what film do you want?" It starts with: **"What should the viewer think, feel, and do three seconds after the film ends?"**

This difference is critical.

A client who comes and says "we want a film that shows our technology" doesn't yet know what they want. A client who comes and says "we want the COO of an international construction corporation to call us after watching", that's a brief you can work with.

The right brief defines:
- **Specific target audience:** not "businesses" but "VP Operations at an international contracting company attending a budget meeting"
- **Defined action:** not "awareness" but "request a meeting / send an RFP"
- **One barrier to break:** what's preventing the viewer from acting right now? Mistrust? Lack of knowledge? Not understanding the urgency?

[IMAGE]

## Stage 2: Narrative Architecture

After the brief we write a two-page document before touching any tool:

**The Story Spine:**
- **Act 1: Status quo:** The world as it looks without the solution
- **Act 2: The hidden problem:** The risk the viewer didn't know about (and therefore didn't act)
- **Act 3: The turning point:** The moment the solution is introduced
- **Act 4: The new world:** What it looks like after

This structure works in every film, B2B, humanitarian, technological, real estate. Humanity hasn't changed. We're still wired to connect to stories built this way.

Then: **a full script.** Every second calculated. VO, visual description, graphics, music, everything written on paper before opening Midjourney.

## Stage 3: AI Storyboarding

**This is the step most clients don't expect, and it's the step that decides the entire project.**

We don't create a storyboard "on the way." We spend three to five days **only** on the storyboard.

The Midjourney storyboard defines:
- **Every angle:** side shot? overhead? POV?
- **Visual look:** tone, color palette, depth of field, lighting direction
- **Art direction of characters:** what are they wearing? where are they standing? what are they doing?
- **The environment:** where does each scene take place? what time of day?

Every Midjourney frame goes through at least 8-12 iterations before we're satisfied. Every shot that sounds "close enough", will become a problem in the generation stage.

**The storyboard is also a client management tool.** Before we generate a single second of video, the client approves every frame. This prevents one of the biggest problems in AI productions: "that's not what I thought would come out."

## Stage 4: Client Approval

Before generation, the client receives:
1. Script with precise timing
2. Complete storyboard (20-40 frames)
3. Mood board: look and tone reference

The client approves all three documents. **Only then** does the real work begin.

This takes another week. But it saves three weeks of iterations after generation.

[IMAGE]

## Stage 5: Motion Generation

Now, finally, Kling and Runway Gen-3 Alpha enter the picture.

**In Kling:** every frame from Midjourney becomes a seed for motion generation. We define: camera movement direction, speed, character movement, and overall motion style. For every second that will go into the final film, we generate 8-15 variants and choose one.

**In Runway:** primarily for shots requiring more precise camera movement control, or to reduce inconsistency between frames.

**The consistency challenge:** this is the number one problem in AI. Every separately generated frame may not sit with the previous one. We solve it with:
- A strict visual style guide passed to every prompt
- Consistent reference image for every character/location
- Color correction in post that unifies everything

## Stage 6: Post-Production

**Editing:** all clips go into DaVinci Resolve. We build the film according to the approved script and storyboard. This isn't "playing with AI", it's serious editing with attention to rhythm, tension, and breathing.

**HUD & Motion Graphics:** in After Effects, every graphic element we add (UI overlays, graphs, titles, annotations) is designed according to a visual language tailored to the film. Not a template. Not Canva.

**Color Grading:** every clip goes through grading in DaVinci to unify the look. AI generates inconsistencies in color, professional grading erases them.

**Sound Design & Mix:** voiceover, music, Foley, all designed and balanced. The final film arrives with LUFS normalized for every platform.

## What This Costs in Time

Clients expect an AI film to take a week. A professional AI film takes **the same time as a classical production**, between 4 and 8 weeks.

The breakdown:
- Brief and direction approval: one week
- Script + storyboard + client approval: one and a half weeks
- Generation: two weeks
- Post-production + feedback: two weeks

The AI "magic" doesn't shorten the time, it expands what's possible. With a budget that previously produced a simple promo, today you can produce a world.

## What AI Can Do, And What It Can't

**AI wins when you need to film the unfilmable:**
- Future worlds
- Classified or inaccessible systems
- Scale with no budget: skies, destruction, crowds
- Countries or regions you can't travel to

**AI loses when a genuine human moment is required:**
- Client testimony
- CEO explaining a vision
- Employee talking about what they love about the company

That's why in our hybrid productions, there are always seconds of real live action. They're what give the film the "truth" the human brain is looking for.

videoshop doesn't sell "AI films." We produce **films that use the right tool for every moment.** Sometimes that's a camera. Sometimes that's Kling. Always that's a script.`,
    date: "2025-04-10",
    tags: ["AI", "Workflow", "Storyboard", "Behind the Scenes"],
    relatedServiceHref: "/services/ai",
    relatedServiceLabelHe: "הפקות וידאו AI",
    relatedServiceLabelEn: "AI Video Production",
    relatedYoutubeId: "iMfsWqluFpo",
  },
  {
    id: "ai-video-2024",
    coverImage: "/vlogimg/ai-production-cover.jpg",
    sectionImages: ["/vlogimg/ai-production-s1.jpg", "/vlogimg/ai-production-s2.jpg"],
    titleHe: "למה רוב סרטי ה-AI נראים מזויפים, ומה קורה כשבמאי אמיתי מחזיק בהגה",
    titleEn: "Why Most AI Films Look Fake, and What Happens When a Real Director Takes the Wheel",
    excerptHe: "כולם יכולים ללחוץ על כפתור ב-Kling. לא כולם יודעים מה לעשות עם מה שיוצא. אחרי עשרות פרויקטי AI, הנה מה שלמדנו.",
    excerptEn: "Anyone can click a button in Kling. Not everyone knows what to do with what comes out. After dozens of AI projects, here's what we learned.",
    readingTime: 6,
    bodyHe: `בשנתיים האחרונות, כל אחד עם מחשב נייד יכול ליצור וידאו "מקצועי" בכמה קליקים. Kling, Runway Gen-3 Alpha, Midjourney, הכלים נגישים, זולים, ומרשימים. ובדיוק בגלל זה, רוב מה שנוצר בהם נראה אותו דבר: זוהר, ריק מתוכן, ובלי נשמה.

אנחנו ב-videoshop מגיעים מרקע שונה לגמרי. 20 שנה של בימוי קלאסי. מצלמות, תאורה, שחקנים, מיקים. כשה-AI הגיע, ניסינו להתחמק ממנו. עד שהבנו שזאת לא השאלה הנכונה.

## הטעות שכולם עושים

הטעות הגדולה ביותר שאנחנו רואים? להתחיל מה-AI. לכתוב פרומפט, לקבל תמונה יפה, ולבנות סביבה הפקה.

זה הפוך לחלוטין ממה שצריך לקרות.

**הכלי לא קובע את הסיפור, הסיפור קובע את הכלי.** בדיוק כמו שבמאי טוב לא בוחר לנצ' לפני שיש קונספט, אנחנו לא פותחים Midjourney לפני שיש פסקת מטרה ברורה. מה רוצים שהצופה ירגיש? מה פעולה שרוצים שיעשה? רק אז מתחילים.

[IMAGE]

## מה שינה לנו: פרויקט שגרם לנו להפסיק לפחד

הפרויקט הראשון שבו שילבנו AI היה סרט B2B לחברת טכנולוגיה ביטחונית שרצתה להמחיש מערכת אוטונומית בפעולה. הבעיה: לא ניתן לצלם את המערכת. לא ניתן לחשוף אותה. הצוות שלה קטן. התקציב, לא בסדר גודל של הוליווד.

השתמשנו ב-Midjourney לפיתוח ה-art direction של כל סצנה, ב-Kling לגנרציית התנועה, ועטפנו הכל בצילומי live action של האנשים האמיתיים בחברה. שבועות של עבודה, לא שעות. כמות iterations בלתי נסבלת. בדיקות, שיפורים, ביטולים מחדש.

התוצאה? לקוח שהפך את הסרט לנכס השיווקי המרכזי שלו לשנה שלמה. לא כי הוא "נראה טכנולוגי", אלא כי הוא **סיפר סיפור שהוא לא יכול היה לספר אחרת.**

## למה סרטי AI רוב הזמן נכשלים

**חוסר עקביות ויזואלית.** AI מייצר frames יפים בנפרד שלא יושבים יחד. לא מאותה מצלמה, לא מאותה תאורה, לא מאותו עולם. רואים את זה מיד. התיקון? Art direction קפדני: פלטת צבעים מוגדרת, reference מדויק, ו-10 iterations לכל שנייה מוצגת.

**תנועת מצלמה לא-טבעית.** AI אוהב תנועות שאף פעם לא תצולמנה במציאות. הצופה לא מזהה את זה בצורה מודעת, הוא פשוט מרגיש שמשהו לא בסדר. כבמאים, אנחנו עורכים כל תנועה לפי כללי הקולנוע הקלאסי, גם בעולם הדיגיטלי.

**אין רגע אנושי.** הבעיה העמוקה ביותר: AI טוב ב"נראה". הוא לא טוב ב"מרגיש". לכן ב-Hybrid productions שלנו, תמיד יש רגעים של צילום live action אמיתי, אדם, מבט, רגע, שמחזירים את הצופה למציאות.

## הדבר שלקוחות לא מצפים לו: הזמן

לקוחות חושבים שסרט AI לוקח שבוע. אנחנו עובדים בדיוק ההפך, הפקת AI שלנו לוקחת **לפחות כמו הפקה רגילה**, ולפעמים יותר.

זה לא כישלון של הטכנולוגיה. זה ההצלחה שלה. **כשתוצר לוקח פחות זמן מהנדרש, זה נראה.** הלקוחות שמגיעים אלינו מחפשים משהו שיעמוד לאורך זמן. נכס שישרת אותם שנה, שנתיים, שלוש, לא קליפ שנראה טוב עד שמישהו אחר יעשה אחד בשבוע הבא.

הגישה שלנו היא להתחייב לפרויקט בדיוק כמו שהייתה זו הפקה קולנועית: תסריט, storyboard, art direction, עריכה, פידבק, שיפור. שוב ושוב עד שזה נכון.

## מה צריך להיות שונה בבריף שלכם

אם אתם שוקלים הפקת AI לחברה שלכם, שאלו את עצמכם:

**1. מה הסיפור?** לא "אנחנו רוצים סרט AI", אלא "מה אנחנו רוצים שהצופה יחשוב, ירגיש ויעשה אחרי שיסיים לצפות?"

**2. מה לא ניתן לצלם?** זה המקום האמיתי שבו AI זורח: עתיד, עולמות דמיוניים, סקייל שאין תקציב לו. לא כתחליף לצילום רגיל.

**3. האם יש אדם בסרט?** אנחנו ממליצים כמעט תמיד לשלב Live Action, גם בהיקף קטן. זה מה שמבדיל בין "עוד סרט AI" לבין סרט שנזכרים בו.

videoshop לא מוכרים "סרטי AI". אנחנו מפיקים **סרטי B2B שמשתמשים ב-AI בחוכמה**. ההבדל הזה שווה הכל.`,
    bodyEn: `In the last two years, anyone with a laptop can create "professional" video in a few clicks. Kling, Runway Gen-3 Alpha, Midjourney, the tools are accessible, cheap, and impressive. And that's exactly why most of what gets made with them looks the same: shiny, empty, and soulless.

At videoshop, we come from a completely different background. 20 years of classical directing. Cameras, lighting, actors, mics. When AI arrived, we tried to avoid it. Until we understood that was the wrong question.

## The Mistake Everyone Makes

The biggest mistake we see? Starting with the AI. Writing a prompt, getting a beautiful image, and building a production around it.

That's completely backwards from what should happen.

**The tool doesn't determine the story, the story determines the tool.** Just like a good director doesn't choose a lens before there's a concept, we don't open Midjourney before there's a clear objective paragraph. What do you want the viewer to feel? What action do you want them to take? Only then do you start.

[IMAGE]

## What Changed for Us: The Project That Made Us Stop Being Afraid

The first project where we integrated AI was a B2B film for a defense tech company that wanted to depict an autonomous system in action. The problem: you can't film the system. You can't expose it. Their team is small. The budget, not Hollywood scale.

We used Midjourney for the art direction of every scene, Kling for motion generation, and wrapped everything in live action footage of the company's real people. Weeks of work, not hours. An unbearable amount of iterations. Testing, improving, scrapping and starting over.

The result? A client who turned the film into their primary marketing asset for an entire year. Not because it "looked technological", but because it **told a story they couldn't have told any other way.**

## Why AI Films Usually Fail

**Visual inconsistency.** AI generates beautiful frames separately that don't sit together. Not from the same camera, not from the same lighting, not from the same world. You see it immediately. The fix? Careful art direction: defined color palette, precise reference, 10 iterations per second shown.

**Unnatural camera movement.** AI loves movements that would never be filmed in reality. The viewer doesn't consciously identify this, they just feel something is off. As directors, we edit every movement according to classical cinema rules, even in the digital world.

**No human moment.** The deepest problem: AI is good at "looks like." It's not good at "feels like." That's why in our hybrid productions, there are always live action moments, a person, a look, a moment, that bring the viewer back to reality.

## The Thing Clients Don't Expect: Time

Clients think an AI film takes a week. We work exactly the opposite, our AI production takes **at least as long as a regular production**, and sometimes longer.

This isn't a failure of the technology. It's its success. **When a deliverable takes less time than required, it shows.** The clients who come to us are looking for something that will last. An asset that will serve them for a year, two years, three, not a clip that looks good until someone else makes one next week.

Our approach is to commit to the project just like it was a cinematic production: script, storyboard, art direction, editing, feedback, improvement. Again and again until it's right.

## What Should Be Different in Your Brief

If you're considering an AI production for your company, ask yourself:

**1. What's the story?** Not "we want an AI film", but "what do we want the viewer to think, feel, and do after they finish watching?"

**2. What can't be filmed?** That's the real place AI shines: the future, imaginary worlds, scale that no budget can achieve. Not as a replacement for regular filming.

**3. Is there a person in the film?** We almost always recommend including live action, even in a small scope. That's what differentiates "another AI film" from a film people remember.

videoshop doesn't sell "AI films." We produce **B2B films that use AI intelligently.** That difference is worth everything.`,
    date: "2024-11-15",
    tags: ["AI", "B2B", "Kling", "Runway"],
    relatedServiceHref: "/services/ai",
    relatedServiceLabelHe: "הפקות וידאו AI",
    relatedServiceLabelEn: "AI Video Production",
    relatedYoutubeId: "8c9gf7cM8hk",
  },
  {
    id: "real-estate-drone",
    coverImage: "/vlogimg/drone-realestate-cover.jpg",
    sectionImages: ["/vlogimg/drone-realestate-s1.jpg", "/vlogimg/drone-realestate-s2.jpg"],
    titleHe: "צילום רחפן לנדל\"ן: המדריך שהיזמים לא מקבלים מהמפיקים שלהם",
    titleEn: "Drone Filming for Real Estate: The Guide Developers Never Get From Their Producers",
    excerptHe: "80% מהעבודה ביום צילום רחפן לא קורה באוויר. ומה שקורה לפני ההמראה קובע אם הפרויקט שלכם ייראה כמו Ashtrom, או כמו כולם.",
    excerptEn: "80% of the work on a drone filming day doesn't happen in the air. And what happens before takeoff determines whether your project looks like Ashtrom, or like everyone else.",
    readingTime: 5,
    bodyHe: `יום צילום רחפן טוב לא מתחיל בהמראה. הוא מתחיל שבוע לפני, עם תכנון של כיוון האור, תחזית רוח, מסלולי טיסה, ואישורים רגולטוריים. מי שמגיע לאתר בלי כל זה, מגיע לגמבל. ואנחנו לא מגמבלים עם הפרויקטים של הלקוחות שלנו.

## מה ההבדל בין "צלם רחפן" לבין הפקת אוויר מקצועית

ישנם בישראל מאות מפעילי רחפן עם רישיון תעופה. פחות ממאה מהם מבינים סינמטוגרפיה. ועוד פחות יודעים לספר את **הסיפור של המיקום**, לא רק לצלם אותו מלמעלה.

כשאנחנו עובדים על פרויקט נדל"ן, אנחנו לא שואלים "מאיפה לצלם?" אנחנו שואלים "מה צריך הרוכש הפוטנציאלי להבין ולהרגיש?" ומשם בונים את כל מסלול הטיסה.

**הקשר מוכר לפני שהנכס מוכר.** תחבורה, ירק, שכנות, נוף: כל אלה צריכים להיות בסרט. לא בתור "רקע", אלא בתור חלק מהנרטיב.

[IMAGE]

## הציוד שאנחנו עובדים איתו: ולמה זה משנה

אנחנו מפעילים DJI Inspire 3 לצילומים שדורשים quality מקסימלי. זה הרחפן שמשמש הפקות קולנועיות. Zenmuse X9, 8K RAW, שליטה עצמאית על ה-gimbal. לא כי אנחנו אוהבים ציוד יקר, אלא כי **בפוסט-פרודקשן, כל פיקסל שווה כסף.**

לצילומים שדורשים גמישות, כניסה לשטחים מוגבלים, צילום בין מבנים, shots שצריכים תגובה מהירה, אנחנו מפעילים DJI Mini 4 Pro. קטן, שקט, נראה פחות "מאיים" לצוות השטח.

שני הרחפנים עובדים ב-4K RAW לפחות, עם Log profile שמשאיר מרחב עריכה מקסימלי בגוון הצבע.

## מה הלקוחות לא יודעים (ומה המתחרים שלכם לא יגידו לכם)

**80% מהעבודה היא בעריכה.** ביום צילום, אנחנו מצלמים פי 10 ממה שישמש בסרט הסופי. כל קדר, כל תנועה, נבחרים בקפידה בפוסט. קצב חתכים, מעברים, בחירת הרגע המדויק, זה מה שעושה את ההבדל בין "רחפן שצילם" לבין "סרט נדל"ן".

**תאורת הזהב שווה הכל.** "Golden hour": שעה אחרי זריחה ושעה לפני שקיעה, היא לא "עוד אפשרות". עבור נדל"ן פרימיום, היא לרוב **ההבדל בין פרויקט שמוכר את עצמו לבין פרויקט שנמכר בהנחה.** לכן אנחנו מגיעים לאתר לפני שהצוות שלכם עולה על מיטות.

**רגולציה היא לא בירוקרטיה. היא הגנה עליכם.** אנחנו מסדירים אישורי רשות התעופה האזרחית לכל פרויקט, מתאמים עם גורמי ביטחון במידת הצורך, ומגיעים עם ביטוח מלא. פרויקט נדל"ן עם צילום לא מאושר, גם אם הוא יפה, יכול לייצר בעיות משפטיות שאין טעם לקחת.

## מה מייחד הפקת וידאו נדל"ן שנבנית לאורך זמן

הלקוחות שהכי מרוצים מאיתנו הם אלה שעבדו איתנו על יותר מפרויקט אחד. כי הם מבינים שסרט נדל"ן טוב הוא **נכס לשנים**, לא תמונה שמחליפים בכל קמפיין.

חברות כמו אשטרום עובדות עם הפקות שיחזיקו 3-5 שנים. הן לא מחפשות "צלם רחפן זול". הן מחפשות **שותף שיבין את הפרויקט מהמבט הראשון ועד הסרט הסופי.** אנחנו מגיעים לסט של אשטרום בדיוק כמו שמגיעים לכל לקוח, עם הקשב המלא, הציוד הטוב ביותר, והמחויבות לתוצאה.`,
    bodyEn: `A good drone filming day doesn't start at takeoff. It starts a week before, with planning for light direction, wind forecast, flight paths, and regulatory approvals. Anyone who arrives at the site without all that is gambling. And we don't gamble with our clients' projects.

## The Difference Between a "Drone Pilot" and Professional Aerial Production

There are hundreds of licensed drone operators in Israel. Fewer than a hundred understand cinematography. And even fewer know how to tell **the story of the location**, not just film it from above.

When we work on a real estate project, we don't ask "where should we film from?" We ask "what does the potential buyer need to understand and feel?" And from there we build the entire flight path.

**Context sells before the property sells.** Transportation, greenery, neighborhood, views: all of these need to be in the film. Not as "background", but as part of the narrative.

[IMAGE]

## The Equipment We Work With: And Why It Matters

We operate the DJI Inspire 3 for shoots requiring maximum quality. This is the drone used in cinematic productions. Zenmuse X9, 8K RAW, independent gimbal control. Not because we love expensive equipment, but because **in post-production, every pixel is worth money.**

For shoots requiring flexibility, entering restricted areas, filming between buildings, shots that need quick response, we operate the DJI Mini 4 Pro. Small, quiet, less "threatening" to the site crew.

Both drones work in 4K RAW minimum, with a Log profile that leaves maximum color grading room.

## What Clients Don't Know (And What Your Competitors Won't Tell You)

**80% of the work is in editing.** On filming day, we shoot 10 times more than will be used in the final film. Every frame, every movement, chosen carefully in post. Cut rhythm, transitions, choosing the precise moment, that's what makes the difference between "a drone that filmed" and "a real estate film."

**Golden light is worth everything.** The "golden hour": one hour after sunrise and one hour before sunset, isn't "just another option." For premium real estate, it's often **the difference between a project that sells itself and a project sold at a discount.** That's why we arrive at the site before your team gets out of bed.

**Regulation isn't bureaucracy. It's protection for you.** We arrange Civil Aviation Authority approvals for every project, coordinate with security bodies when needed, and arrive with full insurance. A real estate project with unauthorized filming, even if beautiful, can create legal problems not worth taking.

## What Distinguishes Real Estate Video Production Built to Last

The clients most satisfied with us are those who've worked with us on more than one project. Because they understand that a good real estate film is **an asset for years**, not an image you replace with every campaign.

Companies like Ashtrom work with productions that will hold for 3-5 years. They're not looking for a "cheap drone pilot". They're looking for **a partner who understands the project from the first look to the final film.** We arrive at an Ashtrom set exactly as we arrive to every client, with full attention, the best equipment, and a commitment to the result.`,
    date: "2024-10-03",
    tags: ["Real Estate", "Drone", "Behind the Scenes"],
    relatedServiceHref: "/services/realestate",
    relatedServiceLabelHe: "וידאו נדל\"ן ואדריכלות",
    relatedServiceLabelEn: "Real Estate Video",
  },
  {
    id: "investor-pitch-tips",
    coverImage: "/vlogimg/investor-pitch-cover.jpg",
    sectionImages: ["/vlogimg/investor-pitch-s1.jpg", "/vlogimg/investor-pitch-s2.jpg"],
    titleHe: "5 הטעויות שהפכו סרטי Investor Pitch מוצלחים לשכחים: וכיצד לא ליפול בהן",
    titleEn: "5 Mistakes That Turn Good Investor Pitch Films Forgettable: And How to Avoid Them",
    excerptHe: "הפקנו עשרות סרטי Investor Pitch. הטעויות האלה חוזרות על עצמן שוב ושוב, ולא כי הלקוחות טיפשים, אלא כי אף אחד לא אמר להם את האמת.",
    excerptEn: "We've produced dozens of Investor Pitch films. These mistakes repeat themselves again and again, not because clients are foolish, but because nobody told them the truth.",
    readingTime: 5,
    bodyHe: `לאחר 20 שנה בתעשייה ועשרות סרטי Investor Pitch שהפקנו, ראינו את אותן הטעויות חוזרות שוב ושוב. ולא כי הלקוחות אינם מקצועיים. אלא כי בתעשייה שלנו, יותר מדי אנשים אומרים "כן" לכל מה שהלקוח רוצה, במקום לומר לו את מה שהוא צריך לשמוע.

אנחנו לא עושים את זה.

## 1. יותר מדי מידע בפחות מדי זמן

Investor Pitch טוב מספר סיפור **אחד** בצורה ברורה. לא שלושה סיפורים. לא "בואו נכניס גם את ה-roadmap". לא "בואו נסביר גם את הטכנולוגיה".

המשקיעים שיושבים מולכם ראו מאות פיצ'ים. **אם הם לא מבינים את הערך הבסיסי בתוך 30 שניות, איבדתם אותם.** כל מסר נוסף שנכנס אחרי הרגע ההוא הוא רעש. לא מידע.

הפתרון: כתבו את הסרט כמו שכותבים הדלקת אש: מה הניצוץ, מה הדלק, מה הלהבה. סיפור אחד. ישר. חזק.

[IMAGE]

## 2. להתמקד בטכנולוגיה ולא בבעיה

משקיעים לא קונים טכנולוגיה. **הם קונים פתרון לבעיה גדולה שהם מאמינים שהיא אמיתית.** חברה שמתחילה בסרט שלה ב"הפלטפורמה שלנו מבוססת על ארכיטקטורה distributed של X עם שכבת Y", כבר איבדה את החדר.

התחילו עם הבעיה. הגדירו אותה בצורה שמישהו מחוץ לתחום יכול להרגיש. תנו לה לנשום שנייה. רק אז, ורק לאחר שהצופה כבר "בפנים", הציגו את הפתרון.

## 3. תאורה ואודיו גרועים: הרוצח הכי שקט

לא משנה כמה הסיפור טוב. **אם ה-CEO נראה כמו שצילמו אותו בחדר ישיבות עם לייטינג ניאון ו-echo, המשקיע שם לב.** הוא אולי לא יגיד את זה בקול. אבל זה יחלחל לאופן שבו הוא מעריך את הרצינות של הפרויקט.

אנחנו מסרבים לצלם ראיונות בחדרי ישיבות. לא כי אנחנו קשוחים, אלא כי אנחנו יודעים שמנהל קרן שמסתכל על פיצ' שנראה "בית ספר" לא יוכל להפריד בין האיכות החזותית לבין האיכות הנתפסת של הפרויקט. התאורה היא חלק מהמותג.

## 4. אין רגע של אמת אנושי

כולם מספרים על ה-TAM שלהם. על ה-ARR שלהם. על ה-moat שלהם. **מי שנזכרים בהם לאחר 10 פיצ'ים ביום אחד הם אלה שסיפרו סיפור שאי אפשר לשכוח.**

זה יכול להיות עובד שמדבר על למה הוא בא לעבוד בחברה. לקוח שמתאר את החיים לפני ואחרי. מייסד שמספר את הרגע שבו הבין שיש פה משהו. רגע אחד של אמת שווה יותר מ-40 סלייד של מצגת.

## 5. הפיצ' ארוך מדי: וסיים בלי CTA

Investor Pitch: **עד 2 דקות.** חתכו בחוסר רחמים. כל מה שאפשר לחתוך, תחתכו. אם אתם מתווכחים עם עצמכם אם לכלול משהו, אל תכלילו אותו.

ואז הטעות השנייה: הסרט נגמר, הצופה אמור לעשות משהו, **ואין שום הנחיה.** CTA ברור בסוף הוא לא "מכירתיות זולה", הוא כבוד לזמן הצופה. "בואו נדבר", "השאירו פרטים", "קבעו פגישה", אחד מהם. ישיר.

---

בvideoshop, אנחנו עובדים על כל פיצ' כמו שעובדים על סרט. שבועות, לא ימים. פידבק, עריכות, שוב פידבק. לא כי אנחנו מסובכים, אלא כי **הפיצ' שמגייס הון הוא כזה שעבדו עליו עד שכבר לא ניתן לשפר אותו יותר.** רק אז הוא מוכן.`,
    bodyEn: `After 20 years in the industry and dozens of Investor Pitch films we've produced, we've seen the same mistakes repeat themselves again and again. Not because clients are unprofessional. But because in our industry, too many people say "yes" to everything the client wants, instead of telling them what they need to hear.

We don't do that.

## 1. Too Much Information in Too Little Time

A good Investor Pitch tells **one** story clearly. Not three stories. Not "let's add the roadmap too." Not "let's explain the technology too."

The investors sitting across from you have seen hundreds of pitches. **If they don't understand the core value within 30 seconds, you've lost them.** Every additional message that comes after that moment is noise. Not information.

The solution: write the film like you're lighting a fire: what's the spark, what's the fuel, what's the flame. One story. Straight. Strong.

[IMAGE]

## 2. Focusing on Technology, Not the Problem

Investors don't buy technology. **They buy a solution to a big problem they believe is real.** A company that starts its film with "Our platform is based on a distributed architecture of X with Y layer", has already lost the room.

Start with the problem. Define it in a way someone outside the field can feel. Let it breathe for a second. Only then, and only after the viewer is already "inside", present the solution.

## 3. Bad Lighting and Audio: The Quietest Killer

No matter how good the story is. **If the CEO looks like they were filmed in a conference room with neon lighting and echo, the investor notices.** They may not say it out loud. But it will seep into how they evaluate the seriousness of the project.

We refuse to film interviews in conference rooms. Not because we're difficult, but because we know that a fund manager looking at a pitch that looks "amateur" won't be able to separate the visual quality from the perceived quality of the project. Lighting is part of the brand.

## 4. No Moment of Human Truth

Everyone talks about their TAM. Their ARR. Their moat. **The ones remembered after 10 pitches in one day are those who told a story that couldn't be forgotten.**

This could be an employee talking about why they came to work at the company. A customer describing life before and after. A founder sharing the moment they realized there was something here. One moment of truth is worth more than 40 slides of a presentation.

## 5. The Pitch Is Too Long: And Ended Without a CTA

Investor Pitch: **up to 2 minutes.** Cut mercilessly. Everything that can be cut, cut it. If you're arguing with yourself about whether to include something, don't include it.

And then the second mistake: the film ends, the viewer is supposed to do something, **and there's no direction.** A clear CTA at the end isn't "cheap salesmanship", it's respect for the viewer's time. "Let's talk," "Leave your details," "Schedule a meeting", one of them. Direct.

---

At videoshop, we work on every pitch like we work on a film. Weeks, not days. Feedback, edits, more feedback. Not because we're complicated, but because **the pitch that raises capital is one that was worked on until it could no longer be improved.** Only then is it ready.`,
    date: "2024-09-20",
    tags: ["Hightech", "Investor Pitch", "Tips"],
    relatedServiceHref: "/services/hightech",
    relatedServiceLabelHe: "סרטי הייטק וסטארטאפים",
    relatedServiceLabelEn: "High-Tech & Startup Videos",
  },
  {
    id: "corporate-business-card-film",
    coverImage: "/vlogimg/corporate-business-card-cover.jpg",
    sectionImages: ["/vlogimg/corporate-business-card-s1.jpg", "/vlogimg/corporate-business-card-s2.jpg"],
    titleHe: "סרט 'כרטיס הביקור' התאגידי: מתי הפורמט הקלאסי הוא הבחירה הנכונה",
    titleEn: "The Corporate 'Business Card' Film: When the Classic Format Is the Right Choice",
    excerptHe: "לא כל סרט חייב להיות פורץ דרך. כשהמטרה היא להוכיח גודל, יציבות וסמכות, ה'כרטיס ביקור' התאגידי הוא הכלי החד ביותר בארסנל.",
    excerptEn: "Not every film has to be groundbreaking. When the goal is to prove scale, stability, and authority, the corporate 'business card' is the sharpest tool in the arsenal.",
    readingTime: 5,
    bodyHe: `## הפרדוקס של הפורמט ה"שמרני"

בתעשיית הווידאו יש נטייה לרומנטיזציה: כולם רוצים "פורמט פורץ דרך", "נרטיב בלתי צפוי", "מהלך קריאייטיבי מפתיע". זה הגיוני כשמדובר בסרטוני ויראליות, קמפיינים לצרכן הסופי, או מיתוג מעסיק.

אבל יש לקוחות שונים לחלוטין: **חברות נדל"ן מניב, קרנות תשתית, תאגידים פיננסיים.** הלקוח שלהם, משקיע, בנק, שוכר עוגן, לא מחפש יצירתיות. הוא מחפש ביטחון.

לסרט כזה יש שם: **"כרטיס ביקור" תאגידי.** ולפורמט הזה יש תפקיד ספציפי מאוד.

[IMAGE]

## מה המסר האמיתי שסרט תדמית תאגידי מעביר

כשאשטרום נכסים, חברת נדל"ן מניב עם פורטפוליו של מגדלי משרדים, פארקים לוגיסטיים ומרכזי מסחר ברחבי ישראל, יצאה להפיק סרט תדמית, הם לא ביקשו "שיר אהבה למשרדים שלהם". הם ביקשו ויזיטקארטה שתענה על שאלה אחת:

**"למה אנחנו כדאיים לך כשותף, כשוכר, כמשקיע?"**

התשובה לשאלה הזו בנויה מארבעה אלמנטים:

### 1. ותק + היסטוריה = ביטחון
"הוקמה ב-1990" זה לא רק תאריך, זה "אנחנו שרדנו משבר 2008, קורונה, ועוד." חברה שפועלת 30+ שנה בנדל"ן מסחרי ישראלי עברה מחזורי שוק. זה מה שמשקיע רוצה לדעת.

### 2. פריסה ארצית = סקייל
רשימת הערים: תל אביב, הרצליה, חיפה, ירושלים, באר שבע, היא לא שיווק. זו הוכחה שלחברה יש **גב לוגיסטי** ולא רק פרויקט מקומי אחד.

### 3. PropTech = שדרוג תפיסתי
הצגת AshtromHost, האפליקציה לניהול הנכס, היא "טוויסט" שהופך חברת נדל"ן "אפורה" לחברת **PropTech**. עבור שוכרים צעירים, חברות טכנולוגיה, ושותפים בינלאומיים: זה הפרש בין "מוציא שכירות" לבין "ספק חווית עבודה".

### 4. ESG = כניסה לשיחה הגלובלית
LEED Gold ופאנלים סולאריים אינם נחמדות. בשוק הנדל"ן העסקי של 2024, **חברות Enterprise גדולות מחויבות לדיווח ESG.** הן לא יכולות להיכנס לבניין שאינו עומד בתקנים. כלומר, לנכס ירוק יש שוק שכירים שבניין "רגיל" לא ניגש אליו.

## למה רחפן הוא הכלי הכי חסכוני להוכחת גודל

בנדל"ן מסחרי, רחפן הוא לא "טרנד", הוא **הפתרון ההנדסי** לבעיה ספציפית: איך מראים בניין של 50,000 מ"ר, מגרש בנייה פעיל, ופארק שלם, בלי להוציא מאות אלפים על תשתיות צילום?

תשובה: טיסת רחפן אחת + עורך טוב = אמינות ויזואלית שעולה על כל שחזור גרפי.

המעבר בין **אתר בנייה פעיל** → **מגדל גמור ומאוכלס** בסרט אחד עושה משהו שמצגות פאוורפוינט לא מצליחות: **הוא מוכיח שהחברה מסיימת פרויקטים.**

## מבנה ה"כרטיס ביקור" התאגידי: תבנית עבודה

**פתיחה (0:00–0:15):** הצהרת זהות. שם + נתון מרכזי (שנת ייסוד / מ"ר / ערים).

**גוף (0:15–1:00):** פאזות פעילות: פרויקטים → שירותים → טכנולוגיה → קיימות. כל פאזה 10-15 שניות, ויזואל ספציפי, טקסט מינימלי.

**סיכום (1:00–1:30):** Call to Action מרוסן. לא "התקשרו עכשיו!" אלא "זאת אשטרום." הרושם הוא הפנייה לפעולה.

## מתי **לא** לבחור בפורמט הזה

סרט "כרטיס ביקור" תאגידי הוא הבחירה הלא נכונה כש:

- **הקהל הוא צרכן סופי:** הם רוצים רגש, לא נתונים
- **המוצר חדש ולא מוכר:** צריך הסבר, לא הפגנת גודל
- **המטרה היא ויראליות:** הפורמט הזה לא מיועד לשיתוף ברשתות
- **הקמפיין הוא גיוס המונים:** שם הרגש הוא הכל

אבל כשמדובר ב-**B2B ארגוני, שוק נדל"ן, תשתיות, פיננסים**, הפורמט הזה לא "ישן". הוא **מדויק**.

---

ב-videoshop אנחנו יודעים לזהות מתי הפרויקט דורש "פרץ קריאייטיבי" ומתי הוא דורש **ביצוע מקצועי ומדויק של פורמט מנוסה.** שתי היכולות האלה שוות בדיוק אותו דבר.`,
    bodyEn: `## The Paradox of the "Conservative" Format

There's a tendency in video production to romanticize: everyone wants a "groundbreaking format," "unexpected narrative," "surprising creative move." That makes sense for viral content, B2C campaigns, or employer branding.

But there are completely different clients: **commercial real estate companies, infrastructure funds, financial corporations.** Their customer, investor, bank, anchor tenant, isn't looking for creativity. They're looking for confidence.

This type of film has a name: the corporate **"business card."** And this format has a very specific role.

[IMAGE]

## What a Corporate Brand Film Really Communicates

When Ashtrom Properties, a commercial real estate company with a portfolio of office towers, logistics parks, and commercial centers across Israel, set out to produce a brand film, they weren't asking for a "love letter to their offices." They were asking for a calling card that answers one question:

**"Why are we worth it: as a partner, as a tenant, as an investor?"**

The answer to that question is built from four elements:

### 1. Longevity + History = Confidence
"Founded in 1990" isn't just a date, it's "we survived 2008, COVID, and more." A company operating 30+ years in Israeli commercial real estate has been through market cycles. That's what an investor wants to know.

### 2. National Footprint = Scale
The list of cities: Tel Aviv, Herzliya, Haifa, Jerusalem, Beer Sheva, isn't marketing. It's proof the company has **logistical backbone** and not just one local project.

### 3. PropTech = Perceptual Upgrade
Showcasing AshtromHost, the property management app, is a "twist" that turns a "gray" real estate company into a **PropTech** company. For younger tenants, tech companies, and international partners: this is the difference between "landlord" and "work experience provider."

### 4. ESG = Entry into the Global Conversation
LEED Gold and solar panels aren't nice-to-haves. In the 2024 commercial real estate market, **large enterprise companies are committed to ESG reporting.** They can't enter a building that doesn't meet standards. Meaning, a green asset has a tenant market that a "regular" building simply can't access.

## Why Drone Footage Is the Most Cost-Efficient Way to Prove Scale

In commercial real estate, drone footage isn't a "trend", it's the **engineering solution** to a specific problem: how do you show a 50,000 sqm building, an active construction site, and an entire park, without spending hundreds of thousands on camera infrastructure?

Answer: one drone flight + a good editor = visual credibility that surpasses any graphic reconstruction.

The cut from **active construction site** → **finished, occupied tower** in one film does something PowerPoint presentations cannot: **it proves the company finishes projects.**

## The Corporate "Business Card" Structure: A Working Template

**Opening (0:00–0:15):** Identity statement. Name + core metric (founding year / sqm / cities).

**Body (0:15–1:00):** Activity phases: projects → services → technology → sustainability. Each phase 10-15 seconds, specific visual, minimal text.

**Close (1:00–1:30):** Restrained call to action. Not "Call now!" but "This is Ashtrom." The impression *is* the call to action.

## When **Not** to Choose This Format

The corporate "business card" film is the wrong choice when:

- **The audience is the end consumer:** they want emotion, not data
- **The product is new and unknown:** it needs explanation, not a show of force
- **The goal is virality:** this format isn't designed for social sharing
- **The campaign is crowdfunding:** there, emotion is everything

But when it comes to **B2B enterprise, real estate, infrastructure, finance**, this format isn't "old." It's **precise**.

---

At videoshop, we know how to identify when a project demands a "creative leap" and when it demands **professional, precise execution of a proven format.** Both capabilities are worth exactly the same thing.`,
    date: "2023-04-15",
    tags: ["Real Estate", "Corporate", "Strategy", "B2B"],
    relatedYoutubeId: "ome2LtSiFWQ",
  },
  {
    id: "celebrity-event-employer-branding",
    coverImage: "/vlogimg/celebrity-event-cover.jpg",
    sectionImages: ["/vlogimg/celebrity-event-s1.jpg", "/vlogimg/celebrity-event-s2.jpg"],
    titleHe: "מעבר לתמונה הקבוצתית: כך הופכים אירוע חברה לנכס שיווקי מרגש",
    titleEn: "Beyond the Group Photo: How to Turn a Corporate Event into an Emotional Marketing Asset",
    excerptHe: "אירועי חברה הם ההזדמנות הכי מוזלת ליצור תוכן Employer Branding אמיתי. כשמוסיפים טאלנט נכון, הם הופכים לתוכן שהעובדים משתפים מעצמם.",
    excerptEn: "Corporate events are the most cost-effective opportunity to create real Employer Branding content. Add the right talent, and they become content employees share on their own.",
    readingTime: 5,
    bodyHe: `## אירוע חברה: ההשקעה הכי מוזלת בתוכן Employer Branding

חברות מוציאות עשרות אלפי שקלים על אירוע חברה. קייטרינג, מקום, ציוד, הסעות, מרצים, תקציב אמיתי. ואז האירוע מסתיים. ומה נשאר?

תמונה קבוצתית. כמה סטורי שנעלמו בחצות.

**הגישה שלנו שונה:** האירוע הוא לא ה"אירוע", האירוע הוא **חומר הגלם** להפקה.

בפרויקט שהפקנו עבור חברת לוי שטרק, הגענו לאירוע חברה כמו שמגיעים לסט קולנוע: עם תסריט, עם כוונה, ועם ידיעה ברורה מה אנחנו מוציאים ממנו.

[IMAGE]

## הנוסחה: אנרגיה × טאלנט × עריכה = תוכן שחי

### למה טאלנט משנה הכל

שאלה פשוטה: מה גורם לעובד לצפות בסרטון אירוע חברה שנית, לשלוח לחבר, לפרסם בסטורי שלו?

**תשובה: כי קורה בו משהו בלתי צפוי שהוא לא ראה לפני כן.**

דודו ארז הוא לא רק "פרזנטור", הוא **מכפיל ערך**. הנוכחות שלו הופכת כל אינטראקציה עם עובד לרגע שאפשר לצלם. כל תגובה ספונטנית הופכת לתוכן. האנרגיה שלו מוציאה את האנשים מה"מוד מנוחה" ומכניסה אותם ל"מוד השתתפות".

וזה בדיוק מה שצריך כדי לצלם.

### ניהול הפקה עם טאלנט: מה זה אומר בפועל

עבודה עם טאלנטים מוכרים לא מסתיימת ב"בואו נצלם ביחד". זה תהליך:

**כתיבת תסריט מותאם:** לכל טאלנט יש שפה, קצב וסגנון הומור. תסריט "גנרי" יישמע מאולץ. כתבנו חומר שנכתב *עבור* דודו ארז, לא חומר שדודו ארז אמור לומר.

**ניהול לוח זמנים:** טאלנטים מגיעים לחלון זמן מוגדר. כל דקה שאתה מבזבז על "אולי ננסה עוד פעם", נעלמת. הגענו מוכנים: רשימת סצנות מסודרת לפי סדר עדיפויות, כל לוקיישן מסומן מראש.

**הנחיית הספונטניות:** אחד הפרדוקסים של הפקה עם קומיקאים: הרגעים הכי טובים הם ה"בלתי צפויים", אבל הם קורים רק כשהתנאים מאפשרים אותם. יצרנו סיטואציות שבהן הספונטניות *יכלה* לקרות, ואז הנחנו את עצמנו מהדרך.

### עריכה שמשחזרת אנרגיה, לא מתעדת אירוע

הבדל מהותי: **תיעוד מראה מה קרה. עריכה מרגישה מה היה שם.**

סרטון recap רגיל עובר בסדר כרונולוגי: פתיחה, הרצאות, אוכל, ריקודים, להתראות. זה נכון. זה גם משעמם.

הגישה שלנו: **עריכה לפי שיא האנרגיה.** פתיחה בשיא, "נשימה" עם רגעים אנושיים יפים, שיא שני, הרמת כוסית קצרה שמותירה רגש. הצופה לא יודע כמה זמן האירוע ארך, הוא מרגיש שהיה שם.

## מה העובדים מקבלים שלא ציפו לו

### המזכרת שחיה לנצח

תמונה קבוצתית נשמרת בגוגל פוטוס ונשכחת. סרטון שדודו ארז מפרגן לך בו אישית, **נשלח לאמא**.

זה ההבדל בין מזכרת לבין **נכס רגשי**. האחת יוצרת זיכרון. השני יוצר קשר.

### האפקט הויראלי הפנים-ארגוני

כשעובד משתף סרטון אירוע חברה ברצון, זה לא "עוד תוכן". זה Employer Branding ב-100% ממשק אורגני, בלי שקל פרסום.

חשבו מה קורה כשמחצית מעובדי חברה של 200 אנשים מעלים את הסרטון לסטורי שלהם ביום שאחרי האירוע. **כמה אנשים רואים שם עובדים מאושרים, צוחקים, מחוברים לחברה שלהם?**

זה הפרסום הכי אמין שיש.

## שלושה נכסים מהפקה אחת

**1. הסרטון הראשי (2-3 דקות):** לאינטרא-נט, ל-YouTube, למצגות גיוס.

**2. קליפים קצרים (15-30 שניות):** לכל רגע שיא עם הטאלנט, פרפקט לסטורי ולרילס.

**3. ריאיונות עובדים:** "מה אמרתם לחברים שעבדתם עם דודו ארז?" תוכן Testimonial שמוכר את החברה לקנדידטים.

## למי זה מתאים?

✅ חברות בגיוס אקטיבי שרוצות להראות "איך זה לעבוד אצלנו"
✅ ארגונים עם עובדים ותיקים שצריכים "ריענון קשר" אחרי תקופות קשות
✅ חברות שמארגנות אירועים ממילא ורוצות להפיק מהם יותר
✅ מנהלי HR שנמאס להם מתוכן Employer Branding גנרי ומשעמם

---

אם האירוע הבא שלכם כבר מתוכנן, אתם כבר בחצי הדרך להפקה. [בואו נדבר](/contact) לפני שהאורות נדלקים.`,
    bodyEn: `## Corporate Events: The Most Underpriced Employer Branding Content

Companies spend tens of thousands on a corporate event. Catering, venue, equipment, transportation, speakers, real budget. And then the event ends. What remains?

A group photo. A few Stories that disappeared at midnight.

**Our approach is different:** the event isn't the "event", the event is the **raw material** for production.

In the project we produced for Levi Strauss, we arrived at the corporate event like you arrive at a film set: with a script, with intention, and with clear knowledge of what we're taking out of it.

[IMAGE]

## The Formula: Energy × Talent × Editing = Content That Lives

### Why Talent Changes Everything

A simple question: what makes an employee watch a corporate event video twice, send it to a friend, post it to their Story?

**Answer: because something unexpected happens in it that they haven't seen before.**

Dudu Erez isn't just a "presenter", he's a **value multiplier.** His presence turns every interaction with an employee into a filmable moment. Every spontaneous reaction becomes content. His energy pulls people out of "relaxation mode" and into "participation mode."

And that's exactly what you need to film.

### Talent Production Management: What It Means in Practice

Working with recognized talent doesn't end at "let's film together." It's a process:

**Tailored scriptwriting:** every talent has a language, rhythm, and comedy style. A "generic" script sounds forced. We wrote material created *for* Dudu Erez, not material Dudu Erez is supposed to say.

**Schedule management:** talent arrives for a defined time window. Every minute wasted on "maybe we'll try again" disappears. We arrived prepared: a scenes list ordered by priority, every location marked in advance.

**Directing the spontaneous:** one paradox of producing with comedians: the best moments are the "unexpected" ones, but they only happen when conditions allow them. We created situations where spontaneity *could* happen, then got out of the way.

### Editing That Recreates Energy, Not Documents an Event

A fundamental difference: **documentation shows what happened. Editing makes you feel what was there.**

A standard recap video goes chronologically: opening, talks, food, dancing, goodbye. Accurate. Also boring.

Our approach: **edit by energy peak.** Open at the peak, "breathe" with beautiful human moments, second peak, a short toast that leaves emotion. The viewer doesn't know how long the event ran, they feel like they were there.

## What Employees Get That They Didn't Expect

### The Memento That Lives Forever

A group photo gets saved to Google Photos and forgotten. A video where Dudu Erez personally cheers you on, **gets sent to your mother.**

That's the difference between a memento and an **emotional asset.** One creates a memory. The other creates a bond.

### The Internal Viral Effect

When an employee willingly shares a corporate event video, it's not "more content." It's Employer Branding at 100% organic reach, without a single shekel in advertising.

Think about what happens when half of a 200-person company's employees post the video to their Stories the day after the event. **How many people see happy employees, laughing, connected to their company?**

That's the most credible advertising there is.

## Three Assets from One Production

**1. Main film (2-3 minutes):** for the intranet, YouTube, recruitment presentations.

**2. Short clips (15-30 seconds):** every peak moment with talent, perfect for Stories and Reels.

**3. Employee interviews:** "What did you tell friends about working with Dudu Erez?" Testimonial content that sells the company to candidates.

## Who Is This Right For?

✅ Companies in active recruitment who want to show "what it's like to work here"
✅ Organizations with long-term employees who need a "reconnection" after hard periods
✅ Companies already organizing events who want to extract more from them
✅ HR managers tired of generic, boring Employer Branding content

---

If your next event is already planned, you're already halfway to a production. [Let's talk](/contact) before the lights go on.`,
    date: "2023-08-01",
    tags: ["Employer Branding", "Event Recap", "Celebrity", "Case Study"],
    relatedYoutubeId: "94W9SfZcx-Y",
    relatedServiceHref: "/services/recruitment",
    relatedServiceLabelHe: "סרטי Employer Branding",
    relatedServiceLabelEn: "Employer Branding Videos",
  },
  {
    id: "event-recap-brand-asset",
    coverImage: "/vlogimg/event-recap-cover.jpg",
    sectionImages: ["/vlogimg/event-recap-s1.jpg", "/vlogimg/event-recap-s2.jpg"],
    titleHe: "סיכום אירוע כנכס מותגי: איך הופכים תיעוד לסרט תדמית",
    titleEn: "Event Recap as Brand Asset: How to Turn Documentation into a Brand Film",
    excerptHe: "כשהתקציב מוגבל, הפתרון לא תמיד הוא לדחות את ההפקה. לפעמים האירוע שכבר קורה הוא חומר הגלם שמחכה לעורך נכון.",
    excerptEn: "When the budget is limited, the solution isn't always to postpone production. Sometimes the event that's already happening is the raw material waiting for the right editor.",
    readingTime: 5,
    bodyHe: `## ניצול הזדמנויות: הגישה שחוסכת תקציב ומייצרת ערך

יש לקוחות שמגיעים עם פער: הם צריכים סרט תדמית, אבל אין להם תקציב להפקה מאפס. עבור רוב הסטודיואים, זו שיחה קצרה: "תחזרו כשתהיה תקציב".

עבורנו, זו שאלה אחרת: **"מה כבר קיים שאפשר להפיק ממנו?"**

כשגישנו לפרויקט תוכנית המנהיגות הרפואית-טכנולוגית של Nucleai, ארגון שמחבר בין רופאים לחברות AI בהיירטק הרפואי, לא הגענו עם ציוד לצילום יום מלא. הגענו לאירוע. ויצאנו עם סרט תדמית.

[IMAGE]

## מה הופך אירוע ל"חומר גלם" לסרט תדמית?

לא כל אירוע שווה להפיק. שלושה תנאים הכרחיים:

**1. דוברים שמספרים סיפורים אמיתיים**
בכנסים עסקיים, הדוברים לא "משחקים", הם מדברים על מה שחשוב להם. אבי וידמן מ-Nucleai שאומר "אנחנו צריכים רופאים שידריכו אותנו", זה לא שורה כתובה. זה האמת של המיזם. וזה מה שהמצלמה קולטת ולא יכולה לשחזר.

**2. ויזואל שמראה קהילה**
חדר מלא רופאים ויזמים שמדברים, מתייעצים, מחייכים, זה לא "תיעוד". זה **ראיה**. הצופה רואה שהדבר קיים, שהוא גדול, שיש בו חיים. שום Zoom call לא יוצר את האפקט הזה.

**3. נתונים שמכמתים גודל**
"11 בתי חולים", "20+ מוסדות רפואיים", מספרים על מסך לא עולים כסף. אבל הם עושים משהו שהסיפור לבד לא עושה: הם נותנים קנה מידה.

## הטכניקה: מריבוי קולות לנרטיב אחד

האתגר הטכני של סרטון Talking Heads עם מספר דוברים: **איך שומרים על קו נרטיבי רציף?**

### שיטת ה"פאזל הנרטיבי"
אנחנו לא חותכים לפי סדר הדיבור, אנחנו חותכים לפי **פאזות המסר**:

- **פאזה 1: הבעיה:** "לרפואה ולטכנולוגיה יש פער שצריך לגשר עליו."
- **פאזה 2: הפתרון:** "התוכנית הזו מביאה אותם לאותו שולחן."
- **פאזה 3: ההוכחה:** מספרים, קהילה, ראיות.
- **פאזה 4: ה-FOMO:** "הצטרפו אלינו."

כל דובר מקדם פאזה, לא "מספר את הסיפור שלו".

### כתוביות בסגנון כתב יד: לא קישוט
הכתוביות בסגנון handwritten ממלאות תפקיד ספציפי: הן יוצרות **המשכיות ויזואלית** בין שני דוברים שאין בינהם קשר ויזואלי. הצופה עובר מרופאה בחדר ישיבות ליזם בכנס, והכתובית שמופיעה מחברת ביניהם.

### תאורה טבעית: אמינות שאין לה מחיר

כאן ניגוד לוגיסטי יוצר יתרון: **תאורת סטודיו נראית כמו פרסומת. תאורה טבעית נראית כמו עדות.**

לפרויקט שמוכר "אמינות מקצועית" ו"ידע אמיתי", האסתטיקה הטבעית של אירוע עובדת *בשביל* המסר, לא *נגדו*.

## מה הלקוח מקבל שהוא לא ציפה לו

כשמגיעים לאירוע ומפיקים ממנו, הלקוח מקבל שלושה נכסים:

**1. סרט תדמית:** 2-3 דקות שמסכמים את התוכנית, ההשפעה והקהילה.

**2. קטעי LinkedIn:** מהחומר הגולמי, 3-5 קליפים קצרים לפוסטים, כל דובר מקבל "הבזק" משלו.

**3. ארכיון תיעוד:** כל האירוע מתועד לשימוש עתידי: Case Studies, דוחות, מצגות.

**השקעה אחת = שלושה נכסי שיווק.**

## מתי הגישה הזו מתאימה

✅ **תוכניות חינוך וליווי:** הביצוע הוא הנכס הכי חזק.
✅ **כנסי תעשייה:** הקהל, הדוברים והאנרגיה לא ניתנים ל"שחזור".
✅ **קהילות מקצועיות:** FOMO עובד רק כשרואים את הקהל שהחמצת.
✅ **לקוחות עם תקציב מוגבל:** ROI מקסימלי מהשקעה בצילום יום אחד.

❌ **לא מתאים:** השקות מוצר, פרסומות מסחריות, סרטים שדורשים שליטה מוחלטת בסביבה.

---

ב-videoshop אנחנו מאמינים שהגדרת "הפקה" לא מתחילה עם "מה נצלם", היא מתחילה עם **"מה כבר קורה שאפשר לצלם."** כשחושבים כך, כל אירוע הוא הזדמנות הפקה.`,
    bodyEn: `## Opportunity Capture: The Approach That Saves Budget and Creates Value

Some clients arrive with a gap: they need a brand film, but don't have a budget for production from scratch. For most studios, it's a short conversation: "Come back when you have a budget."

For us, it's a different question: **"What already exists that we can produce from?"**

When we approached the Nucleai medical-tech leadership program project, an organization that connects doctors with AI companies in medical hightech, we didn't arrive with equipment for a full filming day. We arrived at an event. And left with a brand film.

[IMAGE]

## What Turns an Event into Raw Material for a Brand Film?

Not every event is worth producing from. Three necessary conditions:

**1. Speakers who tell real stories**
At business conferences, speakers aren't "performing", they're talking about what matters to them. Avi Widman from Nucleai saying "we need doctors to guide us": that's not a written line. That's the venture's truth. And that's what the camera captures and cannot recreate.

**2. Visuals that show a community**
A room full of doctors and entrepreneurs talking, consulting, smiling, that's not "documentation." That's **evidence.** The viewer sees that the thing exists, that it's large, that it has life. No Zoom call creates this effect.

**3. Numbers that quantify scale**
"11 hospitals," "20+ medical institutions", numbers on screen cost nothing. But they do something the story alone doesn't: they give scale.

## The Technique: From Multiple Voices to One Narrative

The technical challenge of a Talking Heads video with multiple speakers: **how do you maintain a continuous narrative thread?**

### The "Narrative Puzzle" Method
We don't cut in order of speaking, we cut by **message phases:**

- **Phase 1: The problem:** "Medicine and technology have a gap that needs bridging."
- **Phase 2: The solution:** "This program brings them to the same table."
- **Phase 3: The proof:** numbers, community, evidence.
- **Phase 4: The FOMO:** "Join us."

Each speaker advances a phase, they don't "tell their story."

### Handwritten-Style Subtitles: Not Decoration
The handwritten-style subtitles serve a specific role: they create **visual continuity** between two speakers with no visual connection. The viewer moves from a doctor in a conference room to an entrepreneur at a conference, and the subtitle appearing between them creates the bridge.

### Natural Lighting: Credibility That Has No Price

Here a logistical constraint creates an advantage: **studio lighting looks like advertising. Natural lighting looks like testimony.**

For a project selling "professional credibility" and "real knowledge", the natural aesthetic of an event works *for* the message, not *against* it.

## What the Client Gets That They Didn't Expect

When you arrive at an event and produce from it, the client gets three assets:

**1. Brand film:** 2-3 minutes summarizing the program, impact, and community.

**2. LinkedIn clips:** from the raw material, 3-5 short clips for posts, each speaker gets their own "flash."

**3. Documentation archive:** the entire event documented for future use: case studies, reports, presentations.

**One investment = three marketing assets.**

## When This Approach Is Right

✅ **Education and mentorship programs:** the execution is the most powerful asset.
✅ **Industry conferences:** the audience, speakers, and energy can't be "recreated."
✅ **Professional communities:** FOMO only works when you see the audience you missed.
✅ **Clients with limited budget:** maximum ROI from a single day's filming investment.

❌ **Not suitable for:** product launches, commercial ads, films requiring full environment control.

---

At videoshop, we believe the definition of "production" doesn't begin with "what do we film", it begins with **"what is already happening that we can film."** When you think this way, every event is a production opportunity.`,
    date: "2023-06-01",
    tags: ["HealthTech", "Event Recap", "Strategy", "Tips"],
    relatedYoutubeId: "VsiMUos3_58",
    relatedServiceHref: "/services/hightech",
    relatedServiceLabelHe: "סרטי הייטק וסטארטאפים",
    relatedServiceLabelEn: "High-Tech & Startup Videos",
  },
  {
    id: "vertica-flagship-case-study",
    coverImage: "/vlogimg/vertica-flagship-cover.jpg",
    sectionImages: ["/vlogimg/vertica-flagship-s1.jpg", "/vlogimg/vertica-flagship-s2.jpg"],
    titleHe: "כשבימוי פוגש אסטרטגיה: ה-Case Study של Vertica Lifestyle Ad",
    titleEn: "When Direction Meets Strategy: The Vertica Lifestyle Ad Case Study",
    excerptHe: "ב-HealthTech רוב החברות נופלות למלכודת ה'רצינות יתר'. הן מוכרות פתרונות, לא חוויות. הפרויקט של Vertica הוא הדגמה מלאה של ה-DNA שלנו: מהרעיון הראשוני ועד ל-Final Cut, ליווי אסטרטגי שהופך מוצר טכני לשיחת סלון.",
    excerptEn: "In HealthTech, most companies fall into the 'over-seriousness' trap. They sell solutions, not experiences. The Vertica project is a full demonstration of our DNA: from first idea to final cut, strategic partnership that turns a technical product into a cultural conversation.",
    readingTime: 6,
    bodyHe: `## למה הבחרנו בסרט הזה כסרט הדגל שלנו

סרט דגל לא נבחר בגלל שהוא היפה ביותר. הוא נבחר כי הוא מספר הכי טוב מה אנחנו.

הפרסומת שיצרנו עבור Vertica, מכשיר HealthTech, עשתה דבר שרוב החברות בתחום לא מעזות לעשות: **היא הפכה נושא רגיש לשמחה.** בריאות, גוף, מוגבלות, אלה נושאים שהמיינסטרים מטפל בהם בכפפות לבנות, בנימה חינוכית, בזהירות יתר. אנחנו בחרנו בריקוד.

[IMAGE]

## האתגר: HealthTech ומחסום המבוכה

בעולם ה-HealthTech, החברות מוכרות "פתרונות". הן מסבירות מנגנונים. הן מדגימות תוצאות. אבל לעתים נדירות הן שואלות: **מה הלקוח מרגיש לפני שהוא קונה?**

התשובה, ברוב המקרים: **מבוכה.** הכאב שהמוצר פותר הוא אישי. להודות בו זה חשיפה. לקנות מכשיר שפותר אותו זה צעד עם מחסום רגשי.

כשניגשנו לפרויקט Vertica, לא שאלנו "איך נסביר את המוצר". שאלנו: **"איך מוחקים את מחסום המבוכה?"**

### הפיצוח הקריאייטיבי: ריקוד כשפה

הפתרון הגיע מכיוון לא צפוי: **קצב ואנרגיה.** כשאדם רוקד, הוא לא מתנצל על גופו. הוא מציג אותו. הריקוד הפך את הנרטיב מ"מישהו שסובל" ל"מישהו שחי בגוף שלו".

זה לא רק קריאייטיב, זו **הצהרת עמדה מותגית.** Vertica לא מתייחסת לגוף כלבעיה שצריך לתקן. היא מתייחסת אליו כלכוח שצריך לשחרר.

## האנטומיה של ההפקה

### בימוי שחקנים: דיוק בכל תנועה
בסרטים שמשתמשים בריקוד כאמצעי, הסכנה היא לאבד את המסר בתוך ה"מחזמר". כל תנועה בפרסומת הזו עוצבה כדי לשדר ספציפיקה של פעולה, לא לבצע. כל הבעה, לא לשחק תפקיד.

הבימוי עבד על ניגוד: אנרגיה מבחוץ, כנות מבפנים. הצופה צריך להרגיש גם "זה מהנה" וגם "זה אמיתי".

### כוריאוגרפיה ממוקדת מסר
הכוריאוגרפיה לא הגיעה מאסטרטיב לריקוד. היא הגיעה מהשאלה: **"מה גוף שמרגיש חופשי נראה כמוהו?"** הרגעים שבהם השחקן עוצר בין תנועות לתנועות, הם הרגעים שמוכרים. כי שם הצופה מזהה את עצמו.

### פוסט-פרודקשן: לשמור על האותנטי
הסכנה בפוסט של סרטי "אנרגיה" היא לצבוע הכל בפילטרים שהופכים אותם ל-Instagram Reel עוד אחד. העיבוד השמיר על בהירות ויזואלית, צבע עור אמיתי, ותאורה שנראית כמו אור יום, לא כמו מאחורה צבועה.

## מה הסרט הזה מוכיח על videoshop

הסרט הזה הוא שלושה דברים בו-זמנית:

**1. יכולת קריאייטיבית:** אנחנו לא רק מצלמים מה שנאמר לנו. אנחנו מביאים אסטרטגיה ופיצוח קריאייטיבי שמגיעים *לפני* הצילום.

**2. בימוי מדויק:** מחוות, הבעות, קצב, אנחנו עובדים ברמה של שחקנים ולא רק "אנשים שמשתמשים במוצר".

**3. ליווי מלא:** Vertica קיבל מאתנו שלושה סרטים שמכסים את מסע הלקוח כולו:
- **פרסומת Lifestyle:** מודעות ורגש
- **סרטון הפרכת מיתוסים:** שיקול והסרת חסמים
- **סרטון הדרכה + 3D:** שימוש ואמון

זו לא "חבילת הפקה". זו **אסטרטגיית תוכן ביצוע.**

## הלקח לכל מותג HealthTech ו-EdTech

אם המוצר שלכם פותר בעיה אמיתית, אתם כבר מחצית מהדרך. אבל אם הפרסומת שלכם לא גורמת לאנשים להרגיש שהם *יכולים* להחזיק בפתרון הזה, אתם מאבדים לקוחות לא בגלל המוצר, אלא בגלל שהמסר לא הגיע.

**הקריאייטיב הוא לא "עטיפה". הוא המוצר.**

---

הפרויקט הזה זמין לצפייה מלאה בפורטפוליו. ליצירת קשר לגבי פרויקט דומה, [דף יצירת קשר](/contact).`,
    bodyEn: `## Why We Chose This Film as Our Flagship

A flagship film isn't chosen because it's the most beautiful. It's chosen because it best explains who we are.

The commercial we created for Vertica, a HealthTech device, did something most companies in the field don't dare to do: **it turned a sensitive subject into joy.** Health, body, limitation, topics the mainstream handles with white gloves, educational tone, excessive caution. We chose dance.

[IMAGE]

## The Challenge: HealthTech and the Embarrassment Barrier

In HealthTech, companies sell "solutions." They explain mechanisms. They demonstrate results. But they rarely ask: **what does the customer feel before they buy?**

The answer, in most cases: **embarrassment.** The pain the product solves is personal. Admitting it is exposure. Buying a device that solves it carries an emotional barrier.

When we approached the Vertica project, we didn't ask "how do we explain the product?" We asked: **"how do we erase the embarrassment barrier?"**

### The Creative Breakthrough: Dance as Language

The solution came from an unexpected direction: **rhythm and energy.** When a person dances, they don't apologize for their body. They present it. Dance shifted the narrative from "someone who suffers" to "someone who lives in their body."

This isn't just creative, it's a **brand positioning statement.** Vertica doesn't treat the body as a problem to fix. It treats it as a force to release.

## The Anatomy of the Production

### Actor Direction: Precision in Every Movement
In films that use dance as a medium, the danger is losing the message inside the "musical." Every movement in this ad was designed to convey action specificity, not to perform. Every expression, not to play a role.

Direction worked on contrast: energy on the outside, honesty on the inside. The viewer needs to feel both "this is fun" and "this is real."

### Message-Driven Choreography
The choreography didn't come from a dance aesthetic. It came from the question: **"what does a body that feels free look like?"** The moments where the actor pauses between movements, those are the selling moments. Because that's where the viewer recognizes themselves.

### Post-Production: Protecting the Authentic
The danger in post for "energy" films is painting everything with filters that turn them into another Instagram Reel. The processing preserved visual clarity, real skin tone, and lighting that looks like daylight, not a painted backdrop.

## What This Film Proves About videoshop

This film is three things simultaneously:

**1. Creative capability:** we don't just film what we're told. We bring strategy and creative breakthroughs that arrive *before* filming.

**2. Precise direction:** gestures, expressions, rhythm, we work at the level of actors, not "people using a product."

**3. Full-service partnership:** Vertica received three films covering the complete customer journey:
- **Lifestyle Ad:** awareness and emotion
- **Myth Busting:** consideration and barrier removal
- **Instructional + 3D:** use and trust

This isn't a "production package." It's a **content strategy in execution.**

## The Lesson for Every HealthTech and EdTech Brand

If your product solves a real problem, you're already halfway there. But if your advertising doesn't make people feel they *can* hold that solution, you're losing customers not because of the product, but because the message didn't land.

**Creative is not the "packaging." It's the product.**

---

This project is available for full viewing in the portfolio. To discuss a similar project, [contact us](/contact).`,
    date: "2023-09-15",
    tags: ["HealthTech", "Commercial", "Case Study", "Strategy"],
    relatedYoutubeId: "rixmoZ4Y4Uk",
    relatedServiceHref: "/services/corporate",
    relatedServiceLabelHe: "סרטי תדמית ומסחריים",
    relatedServiceLabelEn: "Brand & Commercial Films",
  },
  {
    id: "instructional-video-customer-journey",
    coverImage: "/vlogimg/instructional-video-cover.jpg",
    sectionImages: ["/vlogimg/instructional-video-s1.jpg", "/vlogimg/instructional-video-s2.jpg"],
    titleHe: "מסע הלקוח בווידאו: למה סרטון ההדרכה הוא הסגירה שאף אחד לא מכין",
    titleEn: "The Video Customer Journey: Why the Instructional Video Is the Close Nobody Prepares",
    excerptHe: "כולם משקיעים בסרט התדמית. מעטים מכינים סרטון הדרכה. אבל הלקוח שמחפש 'איך זה עובד' לפני שהוא קונה, הוא הלקוח הכי קרוב לסגירה.",
    excerptEn: "Everyone invests in the brand film. Few prepare an instructional video. But the customer searching 'how does this work' before buying, is the closest customer to closing.",
    readingTime: 5,
    bodyHe: `## שלושה סרטונים, שלושה שלבים: אחד שכולם מדלגים עליו

כשחברה מחליטה להשקיע בווידאו, היא בדרך כלל שואלת: "איזה סרט אנחנו מכינים?" השאלה הנכונה היא: **"באיזה שלב של מסע הלקוח אנחנו נמצאים?"**

מסע לקוח קלאסי מכיל שלושה שלבים שלכל אחד מהם יש פורמט וידאו מתאים:

**שלב 1: מודעות (Awareness):** סרט תדמית. מראה מי אתם, מה אתם מייצרים ולמה כדאי לשים לב. הוא לא מוכר, הוא מכיר.

**שלב 2: שיקול (Consideration):** "הפרכת מיתוסים" / השוואה / שאלות ותשובות. הלקוח כבר יודע שאתם קיימים. עכשיו הוא שואל: *"למה דווקא אתם?"*

**שלב 3: רכישה ושימוש (Purchase & Use):** סרטון הדרכה. הלקוח כמעט החליט. הוא מחפש ביטחון אחרון: *"האם אצליח להשתמש בזה?"*

**רוב החברות מכינות שלב 1. כמה מכינות שלב 2. כמעט אף אחד לא מכין שלב 3.**

[IMAGE]

## מה קורה כשאין סרטון הדרכה

הלקוח מחפש ב-YouTube "איך מפעילים את [מוצר]". הוא מוצא:
- סרטון חובבני שצילם לקוח אחר ושמציג את המוצר בצורה גרועה
- פורום עם תגובות לא עדכניות
- כלום

אחת משלוש התוצאות: הוא לא קונה, הוא קונה ומתקשר לשירות לקוחות, או שהוא קונה ומחזיר כי "הוא לא הצליח להבין איך עובד".

**סרטון הדרכה טוב מבטל את שלושתן.**

## האנטומיה של סרטון הדרכה שעובד: ניתוח מקרה

בפרויקט שהפקנו עבור מכשיר Medical, האתגר היה לגרום ללקוחות להרגיש ביטחון מול מכשיר שמשתמש בגלי רדיו, טכנולוגיה שנשמעת מורכבת ואפילו מפחידה מעט עבור הדיוט.

### א. Unboxing כהפגת חרדה

הסרטון פותח בפריסת כל חלקי המארז על המשטח. זה לא "אסתטיקה", זו **פסיכולוגיה**. הלקוח רואה שאין הפתעות. הכל מולו, הכל מסודר, הכל הגיוני.

כל מוצר מורכב שמגיע בקופסה צריך את הסצנה הזו.

### ב. Top-Down: הזווית שמבטלת בלבול

צילום מלמעלה למטה (Bird's Eye / Top-Down) הוא הסטנדרט לסרטוני הדרכה מסיבה פשוטה: הוא משחזר את נקודת המבט של הלקוח. כשהמוצר מונח על שולחן, ה-Top-Down מקביל בדיוק לאיך הלקוח עצמו יסתכל על המוצר.

כל זווית אחרת יוצרת דיסוריינטציה: "אם אני מסתכל מהצד, איפה הכפתור הזה נמצא אצלי?"

### ג. הדמיות תלת-מימד רפואיות: הפיכת הבלתי-נראה לנראה

**זה ה-differentiator האמיתי** שהופך סרטון הדרכה בינוני לסרטון הדרכה מעולה.

גלי רדיו על רקמות, אי-אפשר לצלם את זה. אפשר להסביר בטקסט, אבל הלקוח לא ייזכר. הדמיית תלת-מימד רפואית בכחול, שמראה בדיוק מה קורה מתחת לעור, עושה שלושה דברים:

1. **מסבירה:** הלקוח מבין מנגנון, לא רק הוראות
2. **מהימנה:** "רפואי" + תלת-מימד = "מדעי" = "בטוח"
3. **מבדלת:** מוצרים מתחרים עם הוראות שימוש מודפסות לא יכולים להתחרות בזה

### ד. כתוביות ואייקונים: לא אביזר, תשתית

נתון: 85% מהצפייה בסרטונים ברשתות החברתיות היא ללא סאונד.

סרטון הדרכה שדורש אודיו כדי להבין, **לא עובד**. כתוביות ואייקונים שמופיעים בתזמון מדויק הופכים את הסרטון לנגיש בכל מצב: ברכבת, בחנות, בלילה.

## ה-ROI של סרטון הדרכה: מה אפשר למדוד

**הפחתת פניות לשירות לקוחות:** ניתן לבדוק כמה פניות "איך מפעילים" יש לפני ואחרי פרסום הסרטון.

**הגדלת שיעור המרה בדף המוצר:** סרטון הדרכה שמוטמע בדף מוצר מגדיל המרות. הלקוח רואה שזה פשוט, הוא קונה.

**הפחתת החזרות:** לקוח שמבין את המוצר לפני הרכישה, מחזיר פחות.

**Social Proof עקיף:** צופה שמחפש מידע ורואה שהחברה "כבר חשבה על זה", רוכש יותר אמון.

## מסקנה: הסרטון שלא נראה ה"מרשים" הוא לעתים הכי חשוב

בפגישה עם לקוח, לא פעם שומעים: "אנחנו רוצים סרט תדמית מרהיב." נדיר ששומעים: "אנחנו רוצים סרטון הדרכה מעולה."

אבל כשאנחנו שואלים לקוחות מה מונע מהלקוחות שלהם לסגור, לעתים קרובות התשובה היא: "הם לא בטוחים שיצליחו להשתמש בזה."

**זו בדיוק הבעיה שסרטון ההדרכה פותר.**`,
    bodyEn: `## Three Videos, Three Stages: One That Everyone Skips

When a company decides to invest in video, it usually asks: "What film are we making?" The right question is: **"At what stage of the customer journey are we?"**

A classic customer journey has three stages, each with an appropriate video format:

**Stage 1: Awareness:** Brand film. Shows who you are, what you make, and why it's worth attention. It doesn't sell, it introduces.

**Stage 2: Consideration:** Myth busting / comparison / Q&A. The customer already knows you exist. Now they ask: *"Why specifically you?"*

**Stage 3: Purchase & Use:** Instructional video. The customer has almost decided. They're seeking one final reassurance: *"Will I be able to use this?"*

**Most companies prepare Stage 1. A few prepare Stage 2. Almost no one prepares Stage 3.**

[IMAGE]

## What Happens When There's No Instructional Video

The customer searches YouTube for "how to use [product]." They find:
- An amateur video shot by another customer presenting the product poorly
- An outdated forum thread
- Nothing

One of three outcomes: they don't buy, they buy and call customer service, or they buy and return it because "they couldn't figure out how it worked."

**A good instructional video eliminates all three.**

## The Anatomy of an Instructional Video That Works: Case Study

In a project we produced for a medical device, the challenge was making customers feel confident about a device that uses radio waves, technology that sounds complex and even slightly intimidating to a layperson.

### A. Unboxing as Anxiety Reduction

The video opens by spreading all kit components on the surface. This isn't "aesthetics", it's **psychology**. The customer sees there are no surprises. Everything is in front of them, organized, logical.

Every complex product that arrives in a box needs this scene.

### B. Top-Down: The Angle That Eliminates Confusion

Bird's Eye / Top-Down filming is the industry standard for instructional videos for a simple reason: it replicates the customer's viewpoint. When the product is on a table, Top-Down exactly matches how the customer themselves will look at the product.

Any other angle creates disorientation: "if I'm looking from the side, where is that button on mine?"

### C. Medical 3D Visualization: Making the Invisible Visible

**This is the real differentiator** that turns a mediocre instructional video into an excellent one.

Radio waves on tissue, you can't film that. You can explain in text, but the customer won't remember. A medical 3D visualization in blue, showing exactly what happens under the skin, does three things:

1. **Explains:** the customer understands a mechanism, not just instructions
2. **Builds trust:** "medical" + 3D = "scientific" = "safe"
3. **Differentiates:** competing products with printed instructions can't compete with this

### D. Subtitles and Icons: Not an Accessory, Infrastructure

Fact: 85% of social media video viewing happens without sound.

An instructional video that requires audio to understand, **doesn't work**. Subtitles and icons appearing at precise timing make the video accessible in any situation: on the train, in a store, at night.

## The ROI of an Instructional Video: What You Can Measure

**Reduction in customer service inquiries:** you can track how many "how to use" contacts exist before and after publishing the video.

**Increased conversion rate on the product page:** an embedded instructional video increases conversions. The customer sees it's simple, they buy.

**Reduced returns:** a customer who understands the product before purchase, returns less.

**Indirect social proof:** a viewer searching for information who sees the company "already thought of this", builds more trust.

## Conclusion: The Film That Doesn't Look "Impressive" Is Often the Most Important

In client meetings, we often hear: "We want a stunning brand film." We rarely hear: "We want an excellent instructional video."

But when we ask clients what prevents their customers from closing, the answer is often: "They're not sure they'll be able to use it."

**That's exactly the problem the instructional video solves.**`,
    date: "2023-11-05",
    tags: ["Product", "Strategy", "Customer Journey", "Tips"],
    relatedYoutubeId: "9uIA1nRaWqc",
    relatedServiceHref: "/services/hightech",
    relatedServiceLabelHe: "סרטי מוצר וטכנולוגיה",
    relatedServiceLabelEn: "Product & Technology Videos",
  },
  {
    id: "hybrid-distribution-employer-branding",
    coverImage: "/vlogimg/hybrid-distribution-cover.jpg",
    sectionImages: ["/vlogimg/hybrid-distribution-s1.jpg", "/vlogimg/hybrid-distribution-s2.jpg"],
    titleHe: "הפקה אחת, ארבעה ערוצים: המדריך למערך ההפצה ההיברידי של מיתוג מעסיק",
    titleEn: "One Production, Four Channels: The Guide to Hybrid Distribution for Employer Branding",
    excerptHe: "הגרסה הקצרה של 'להיות אשטרומיסט' לא הייתה אחרי-מחשבה, היא הייתה חלק מהתכנון מהיום הראשון. כך בונים מערך הפצה שמגיע לכל קהל ביומו ובפורמט שלו.",
    excerptEn: "The short version of 'Being an Ashtromist' wasn't an afterthought, it was part of the plan from day one. Here's how to build a distribution system that reaches every audience on their terms.",
    readingTime: 5,
    bodyHe: `## כשגרסה "קצרה" היא לא פשרה, היא אסטרטגיה

רוב הארגונים מגיעים לחדר עריכה עם שאלה אחת: "כמה קצר אנחנו חייבים לעשות את זה?" זו השאלה הלא נכונה.

השאלה הנכונה: **לאיזה קהל, באיזה פלטפורמה, ובאיזה שלב של המשפך?**

כשעבדנו עם קבוצת אשטרום על קמפיין "להיות אשטרומיסט", תכננו מהיום הראשון שתי גרסאות עם מטרות שונות לחלוטין, לא שתי ערכות חיתוך של אותו סרט.

[IMAGE]

## הגרסה הארוכה: נרטיב לגיוס ברצינות

הגרסה הארוכה נועדה לקהל שכבר שוקל להגיש מועמדות לאשטרום, או שמתלבט. היא עונה לשאלות: **מי אשטרום? מה ה-DNA? למה זה לא עוד עבודה?**

הפורמט: ריאיונות מעמיקים עם עובדים מכל שכבות הארגון, שילוב צילומי רחפן הנותנים פרספקטיבה על הפריסה הארצית, ועריכה שמאפשרת לכל דובר סיפור מלא בלי לפצל.

**הפלטפורמות:** עמוד קריירות, מצגות גיוס, לינקדאין בפוסט מסודר.

## הגרסה הקצרה: עצירת גלילה להנעת פעולה

45 שניות. עריכת "פינג-פונג": חיתוך בין דוברים *בתוך* משפט. לוקיישן חדש כל 3-4 שניות. טיפוגרפיה עם ה-+ המותגי בכל מעבר.

**המטרה:** לא לספר סיפור, אלא להדליק סקרנות. מי שצפה בשלמות מגיע לגרסה הארוכה. מי שרק גלל, נחשף לשם.

**הפלטפורמות:** Instagram Reels, LinkedIn Stories, פרסום ממומן לגיל/תחום.

## למה "צלם פעם אחת, חתוך פעמים רבות" עובד

**עלות:** יום צילום אחד. שתי גרסאות שיכולות להצדיק כל אחת בנפרד את עלות ההפקה.

**עקביות:** אותם עובדים, אותה אסתטיקה ויזואלית, אותו DNA, אבל אורז שונה לפלטפורמה שונה.

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

## התכנון מתחיל לפני ההפקה, לא אחריה

הטעות הכי נפוצה: צולמה הפקה מלאה, אחר כך שואלים "האם יש משהו לחתוך לרשתות?" בשלב הזה, כמעט תמיד התשובה היא לא. כי לא צולמו Reaction shots מהירים, לא צולמו takes עם קצב פינג-פונג, לא תוכנן Timeline שמאפשר קיצור.

**המערך ההיברידי בנוי מהסטוריבורד. לא מחדר העריכה.**

---

ב-videoshop כל פרויקט מיתוג מעסיק מתחיל בשאלה: מה הערוצים שלך ומה המסר לכל קהל? רק אחרי שיש תשובה ברורה, מגיעים לסט.`,
    bodyEn: `## When a "Short" Version Isn't a Compromise, It's a Strategy

Most organizations arrive at the editing room with one question: "How short do we have to make this?" That's the wrong question.

The right question: **Which audience, on which platform, at which funnel stage?**

When we worked with Ashtrom Group on the "Being an Ashtromist" campaign, we planned from day one for two versions with completely different goals, not two cut-down versions of the same film.

[IMAGE]

## The Long Version: Narrative for Serious Candidates

The long version is designed for an audience already considering applying to Ashtrom, or wavering. It answers: **Who is Ashtrom? What's the DNA? Why is this not just another job?**

The format: in-depth interviews with employees from across the organization, drone footage providing perspective on the national footprint, and editing that gives each speaker a complete story without splitting it.

**Platforms:** careers page, HR presentations, LinkedIn long-form post.

## The Short Version: Scroll-Stopping Action Trigger

45 seconds. "Ping-pong" editing, cutting between speakers *mid-sentence*. New location every 3-4 seconds. Brand "+" typography on every transition.

**The goal:** not to tell a story, but to ignite curiosity. Those who watch in full arrive at the long version. Those who just scrolled, got exposed to the name.

**Platforms:** Instagram Reels, LinkedIn Stories, paid advertising by age/field.

## Why "Film Once, Cut Many Times" Works

**Cost:** one filming day. Two versions that can each individually justify the production cost.

**Consistency:** same employees, same visual aesthetic, same DNA, but different packaging for different platforms.

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
**Goal:** "We're not just a company, we're a culture"

## Planning Starts Before Production, Not After

The most common mistake: a full production is filmed, then someone asks "Is there anything to cut for social?" At that stage, almost always the answer is no. Because fast reaction shots weren't filmed, ping-pong paced takes weren't done, no timeline was designed that allows shortening.

**The hybrid system is built from the storyboard. Not from the editing room.**

---

At videoshop, every employer branding project starts with a question: what are your channels and what's the message for each audience? Only once there's a clear answer, do we arrive on set.`,
    date: "2023-07-10",
    tags: ["Employer Branding", "Strategy", "Distribution"],
    relatedYoutubeId: "loW4i8ZOLNA",
    relatedServiceHref: "/services/recruitment",
    relatedServiceLabelHe: "סרטי Employer Branding",
    relatedServiceLabelEn: "Employer Branding Videos",
  },
  {
    id: "kama-ole-seret-tadmit",
    sectionImages: ["/vlogimg/kama-ole-seret-tadmit-s1.jpg"],
    coverImage: "/vlogimg/kama-ole-seret-tadmit-cover.jpg",
    titleHe: "כמה עולה סרט תדמית? מדריך מחירים אמיתי לשנת 2025",
    titleEn: "How Much Does a Brand Film Cost? An Honest Pricing Guide for 2025",
    excerptHe: "מה באמת קובע את המחיר של סרט תדמית? מדריך שקוף שמסביר את הפרמטרים — בלי בלוף.",
    excerptEn: "What really determines the price of a brand film? A transparent breakdown of all the factors — no fluff.",
    date: "2025-01-15",
    readingTime: 7,
    tags: ["מחירים", "סרט תדמית", "תקציב"],
    relatedServiceHref: "/services/corporate",
    relatedServiceLabelHe: "סרטי תדמית לעסקים",
    relatedServiceLabelEn: "Corporate Brand Films",
    bodyHe: `## כמה עולה סרט תדמית? מדריך מחירים אמיתי

זו השאלה שכל בעל עסק שואל — וכמעט אף חברת הפקה לא עונה עליה ישירות. אז בוא נדבר בגלוי.

**הטווח הריאלי בשוק הישראלי:**

- **עד ₪10,000** — סרטון קצר בסגנון ראיון, יום צילום אחד, עריכה בסיסית. מתאים לעסקים קטנים שצריכים נוכחות. לא מתאים אם רוצים משהו שייראה premium.
- **₪10,000–₪25,000** — שני ימי צילום, תסריט, גרפיקה, מוזיקה מורשית. זה הטווח הנפוץ ביותר עבור SMB בישראל.
- **₪25,000–₪60,000** — מספר ימי הפקה, צוות גדול, אנימציה, לוקיישנים מרובים. מתאים לחברות שמציגות את עצמן למשקיעים, רשתות גדולות, ואנשי מוצר.
- **₪60,000+** — הפקות פרסומת מלאות, שחקנים, סאונד-דיזיין מורכב, עריכות רבות. מדיה ארצית.

[IMAGE]

## מה בדיוק משפיע על המחיר?

### 1. ימי צילום

יום צילום כולל: צוות (במאי, צלם, עוזר, תאורה), ציוד, לוקיישן ואחרים. יום אחד = בערך ₪8,000–₪15,000 בלי עריכה. אי אפשר "לחסוך" כאן בלי שזה ייראה.

### 2. כתיבת תסריט ופרה-פרודקשן

תסריט טוב חוסך ימי צילום. שעות של תכנון = פחות ימי עריכה. זה לא הוצאה — זה השקעה.

### 3. עריכה ופוסט-פרודקשן

צבע, גרפיקה, מוזיקה, כתוביות, תרגום — כל אלה נספרים. סרטון בן 2 דקות עשוי לקחת 30–60 שעות עריכה.

### 4. גרסאות ורציות

אחת מהלקות הנפוצות: "נוכל לקבל גרסה ל-Instagram?" אחרי ההפקה, זה כרוך בעוד שעות עריכה. מראש — זה זול יותר.

## מה שלא אומרים לכם

כשאחד מציע לכם סרט תדמית ב-₪3,000 — שאלו: כמה ימי צילום? מה כולל הצוות? מי עורך? מי כותב? לרוב מדובר בסרטון מוצלח מבחינה טכנית, אבל חסר את הסיפור, המסר, האסטרטגיה.

## כיצד להגדיר תקציב נכון?

במקום לשאול "כמה עולה סרט" — שאלו: **"מה הסרט הזה אמור להחזיר לי?"**

אם הסרט מביא לידים ב-₪500 כל אחד ומחיר עסקה ממוצעת הוא ₪15,000 — כמה לידים צריך הסרט להביא כדי להחזיר ₪25,000?

**שניים. בלבד.**

זה השיח שאנחנו אוהבים לנהל עם לקוחות לפני שבוחרים תקציב.

---

רוצים הצעת מחיר שקופה ומפורטת? מלאו את השאלון הקצר — ניצור קשר תוך יום.`,
    bodyEn: `## How Much Does a Brand Film Cost? An Honest Guide

This is the question every business owner asks — and almost no production company answers directly. So let's talk openly.

**Realistic ranges in the Israeli market:**

- **Under ₪10,000** — Short interview-style video, one shoot day, basic edit. Good for small businesses that need presence. Not suitable if you want something premium.
- **₪10,000–₪25,000** — Two shoot days, script, graphics, licensed music. The most common range for Israeli SMBs.
- **₪25,000–₪60,000** — Multiple production days, larger crew, animation, multiple locations. Suitable for companies presenting to investors, retail chains, and product teams.
- **₪60,000+** — Full commercial productions, actors, complex sound design, many revision rounds. National media scale.

[IMAGE]

## What Actually Affects the Price?

### 1. Shoot Days

A shoot day includes: director, camera operator, assistant, lighting, equipment, location and more. One day ≈ ₪8,000–₪15,000 before editing. You can't "save" here without it showing.

### 2. Scripting and Pre-Production

A good script saves shoot days. Hours of planning = fewer editing days. This isn't an expense — it's an investment.

### 3. Editing and Post-Production

Color grading, graphics, music, subtitles, translation — all add up. A 2-minute video can take 30–60 hours of editing.

### 4. Versions and Cuts

One of the most common surprises: "Can we get an Instagram version?" After production, that means more editing hours. Plan ahead — it's cheaper.

## What They Don't Tell You

When someone offers you a brand film for ₪3,000 — ask: how many shoot days? What's the crew? Who edits? Who writes? Usually it's technically fine, but lacks story, message, and strategy.

## How to Set the Right Budget?

Instead of asking "how much does a video cost" — ask: **"What should this video return for me?"**

If the video brings leads at ₪500 each and your average deal is ₪15,000 — how many leads does the video need to bring to recover ₪25,000?

**Two. That's it.**

That's the conversation we love having with clients before choosing a budget.

---

Want a transparent, itemized quote? Fill out our short quiz — we'll be in touch within a day.`,
  },
  {
    id: "seret-giyus-hon-startup",
    sectionImages: ["/vlogimg/seret-giyus-hon-startup-s1.jpg"],
    coverImage: "/vlogimg/seret-giyus-hon-startup-cover.jpg",
    titleHe: "סרט גיוס הון לסטארטאפ: איך עושים אותו נכון",
    titleEn: "Startup Fundraising Video: How to Do It Right",
    excerptHe: "משקיעים רואים אלפי מצגות. סרט שמספר את הסיפור נכון — יכול לשנות החלטות. כל מה שצריך לדעת לפני ההפקה.",
    excerptEn: "Investors see thousands of pitches. A video that tells the story right can change decisions. Everything you need to know before production.",
    date: "2025-03-20",
    readingTime: 8,
    tags: ["סטארטאפ", "גיוס הון", "משקיעים"],
    relatedServiceHref: "/services/corporate",
    relatedServiceLabelHe: "סרטי תדמית לעסקים",
    relatedServiceLabelEn: "Corporate Brand Films",
    bodyHe: `## סרט גיוס הון לסטארטאפ: המדריך המלא

משקיע ממוצע מקבל מאות פניות בשנה. המצגת שלכם היא דלת — הסרט הוא מה שקובע אם הוא נפתחת.

## למה סרט ולא סתם מצגת?

**מצגת** מספרת עובדות.
**סרט** יוצר אמון.

משקיע שצופה בסרטון של שתי דקות רואה: צוות אמיתי, ביטחון עצמי, תרבות ארגונית, דרך תקשורת. הוא מרגיש את האנרגיה לפני שהוא קרא מספר אחד בדוחות.

[IMAGE]

## מה צריך להיות בסרט גיוס הון?

### 1. הבעיה — 20 שניות

לא "אנחנו פותרים בעיה בשוק ה-X" — אלא רגע אנושי. מישהו מתוסכל. משהו שבור. הצופה אמור להרגיש: "כן, זו בעיה."

### 2. הפתרון — 30 שניות

הדגמה של המוצר, לא הסבר עליו. הצג אחד ואחת שמשתמשים — לא אנימציה גנרית.

### 3. הסיפור שמאחורי — 20 שניות

למה אתם? מה גרם לכם להקים את זה? לא קורות חיים — רגע מכונן.

### 4. הנתונים — 15 שניות

משתמשים, הכנסות, צמיחה. מספרים בצורה ויזואלית, לא טקסט על מסך.

### 5. הקריאה לפעולה — 10 שניות

מה אתם מחפשים? כמה? לאיזה שלב? היו ספציפיים.

## שגיאות נפוצות

**הסבר יותר מדי** — המשקיע לא צריך להבין את המוצר. הוא צריך להבין שאתם תפתרו בעיה שאנשים שמשלמים עליה.

**צוות לא נראה** — אם הסרט הוא רק אנימציה עם קריין, פספסתם. המשקיע קונה אנשים, לא רעיון.

**מוסיקה מלחיצה** — סרטי גיוס הון ישראלים אוהבים מוסיקה "עוצמתית". הבעיה: היא מפריעה לתהליך החשיבה של הצופה.

## כמה צריך להיות?

**1.5–3 דקות.** לא פחות (אין מספיק ביסוס), לא יותר (לא יצפו עד הסוף).

## כמה זה עולה?

סרט גיוס הון מקצועי עולה בדרך כלל **₪18,000–₪45,000** — תלוי ברמת ההפקה, מיקום, גרסאות שפה, ואנימציה.

זה לא הוצאה. זה כלי שנועד לסגור round.

---

נשמח לשמוע על הסטארטאפ שלכם ולהציע מה מתאים. ממלאים את השאלון — ומתחילים לדבר.`,
    bodyEn: `## Startup Fundraising Video: The Complete Guide

The average investor receives hundreds of pitches a year. Your deck is the door — the video is what decides if it opens.

## Why a Video and Not Just a Deck?

**A deck** conveys facts.
**A video** builds trust.

An investor watching a two-minute video sees: a real team, confidence, company culture, communication style. They feel the energy before reading a single number in the financials.

[IMAGE]

## What Belongs in a Fundraising Video?

### 1. The Problem — 20 seconds

Not "we solve a problem in market X" — a human moment. Someone frustrated. Something broken. The viewer should feel: "Yes, that's a real problem."

### 2. The Solution — 30 seconds

A demo of the product, not an explanation of it. Show a real user — not generic animation.

### 3. The Founding Story — 20 seconds

Why you? What made you build this? Not a CV — a defining moment.

### 4. The Numbers — 15 seconds

Users, revenue, growth. Numbers visually displayed, not text on a slide.

### 5. The Ask — 10 seconds

What are you looking for? How much? For which stage? Be specific.

## Common Mistakes

**Over-explaining** — the investor doesn't need to understand your product. They need to understand you'll solve a problem people pay for.

**Invisible team** — if the video is only animation with a voiceover, you've missed the point. Investors buy people, not ideas.

**Intense music** — Israeli fundraising videos often use "powerful" music. The problem: it disrupts the viewer's thought process.

## How Long Should It Be?

**1.5–3 minutes.** Not shorter (not enough grounding), not longer (they won't watch to the end).

## How Much Does It Cost?

A professional fundraising video typically costs **₪18,000–₪45,000** — depending on production level, location, language versions, and animation.

This isn't an expense. It's a tool built to close a round.

---

We'd love to hear about your startup and suggest what fits. Fill out the quiz and let's talk.`,
  },
  {
    id: "employer-branding-video-israel",
    sectionImages: ["/vlogimg/employer-branding-video-s1.jpg"],
    coverImage: "/vlogimg/employer-branding-video-cover.jpg",
    titleHe: "Employer Branding וידאו בישראל: המדריך המלא לגיוס עובדים עם תוכן",
    titleEn: "Employer Branding Video in Israel: Complete Guide to Recruiting with Content",
    excerptHe: "חברות ישראליות מאבדות מועמדים טובים לטובת חברות שמספרות סיפור טוב יותר. כך עושים employer branding שבאמת עובד.",
    excerptEn: "Israeli companies lose great candidates to companies that tell a better story. Here's how to do employer branding that actually works.",
    date: "2025-05-10",
    readingTime: 9,
    tags: ["Employer Branding", "גיוס עובדים", "HR", "תוכן"],
    relatedServiceHref: "/services/recruitment",
    relatedServiceLabelHe: "סרטי Employer Branding",
    relatedServiceLabelEn: "Employer Branding Videos",
    bodyHe: `## Employer Branding וידאו: למה זה קריטי לחברות ישראליות ב-2025

שוק התעסוקה הישראלי הפך. מועמדים טובים מוצפים בהצעות — ואם הם לא יודעים מי אתם לפני שהם מגיעים לראיון, הם כבר שם עם נטייה לדחות.

**סרט employer branding** הוא לא סרטוניק חמוד לעמוד ה-LinkedIn שלכם. הוא כלי גיוס אסטרטגי.

[IMAGE]

## מה ההבדל בין סרט תדמית לסרט employer branding?

**סרט תדמית** מדבר ללקוחות: "הנה מה שאנחנו עושים ולמה כדאי לקנות מאיתנו."

**סרט employer branding** מדבר לעובדים עתידיים: "הנה מה שחיים כאן כל יום, ולמה אנשים בוחרים להישאר."

הקהל שונה. המסר שונה. הפורמט שונה.

## מה עובד — ומה לא

### עובד:
- **עובדים אמיתיים מדברים בשמם עצמם** — לא תסריט שכתבתם, אלא מה שהם חושבים
- **יום רגיל בחיי עובד** — מה קורה ב-9:00? איך נראה ה-stand-up? מה אוכלים?
- **מנהלים שמסבירים איך הם מגדלים אנשים** — ולא רק "אנחנו משפחה"
- **ספציפיות** — "צמחתי מ-Junior ל-Team Lead ב-14 חודש" עדיף על "כאן יש הזדמנויות"

### לא עובד:
- מוסיקה "אנרגטית" ועריכה מהירה שמסתירה שאין מה להגיד
- ראיונות שנראים כמו קטלוג מוצרים: "אנחנו חברה מובילה עם ערכים חזקים"
- ביצועים מאולצים מעובדים שברור שמשחקים תפקיד
- הסתרת מגרעות — מועמד טוב ידע לזהות חברה שמוכרת אשליות

## כמה גרסאות צריך?

סרט employer branding אחד לא מספיק. הנה המינימום:

| גרסה | אורך | שימוש |
|------|------|--------|
| ראשית | 2–3 דקות | דף קריירות, YouTube |
| קצרה | 60 שניות | LinkedIn, הצגות |
| Reels/Shorts | 15–30 שניות | Instagram, TikTok |

## כמה זה עולה?

תלוי בהיקף, אבל טווח מציאותי:

- **סרט בסיסי (גרסה אחת, יום צילום):** ₪12,000–₪22,000
- **סרט מלא עם מספר גרסאות:** ₪25,000–₪50,000
- **קמפיין employer branding שלם:** ₪50,000+

## ROI אמיתי

חברה שמוציאה ₪30,000 על סרט employer branding ובאה לחסוך **יום עבודה אחד** של HR-מנהלת שעוסקת בסינון מועמדים לא מתאימים — כבר מחזירה חלק מהעלות בשנה הראשונה.

המדד האמיתי: **איכות מועמדים**, לא כמות. פחות קורות חיים של מי שלא מתאים, יותר מגע ממי שכבר "קנה" את החברה לפני הראיון.

---

רוצים לדבר על employer branding לחברה שלכם? השאירו פרטים — נחזור אליכם.`,
    bodyEn: `## Employer Branding Video: Why It's Critical for Israeli Companies in 2025

The Israeli job market has flipped. Good candidates are flooded with offers — and if they don't know who you are before the interview, they're already leaning toward declining.

An **employer branding video** isn't a cute clip for your LinkedIn page. It's a strategic recruitment tool.

[IMAGE]

## What's the Difference Between a Brand Film and an Employer Branding Video?

**A brand film** speaks to customers: "Here's what we do and why you should buy from us."

**An employer branding video** speaks to future employees: "Here's what life here looks like every day, and why people choose to stay."

Different audience. Different message. Different format.

## What Works — and What Doesn't

### Works:
- **Real employees speaking in their own words** — not a script you wrote, but what they actually think
- **A regular day in an employee's life** — what happens at 9:00? What does the stand-up look like? What do people eat?
- **Managers explaining how they develop people** — not just "we're a family"
- **Specificity** — "I grew from Junior to Team Lead in 14 months" beats "there are opportunities here"

### Doesn't Work:
- "Energetic" music and fast cuts hiding that there's nothing to say
- Interviews that sound like product catalogs: "We're a leading company with strong values"
- Awkward performances from employees who are clearly playing a role
- Hiding flaws — good candidates can spot a company selling illusions

## How Many Versions Do You Need?

One employer branding video isn't enough. Here's the minimum:

| Version | Length | Use |
|---------|--------|-----|
| Main | 2–3 minutes | Careers page, YouTube |
| Short | 60 seconds | LinkedIn, presentations |
| Reels/Shorts | 15–30 seconds | Instagram, TikTok |

## How Much Does It Cost?

Depends on scope, but a realistic range:

- **Basic video (one version, one shoot day):** ₪12,000–₪22,000
- **Full video with multiple versions:** ₪25,000–₪50,000
- **Complete employer branding campaign:** ₪50,000+

## Real ROI

A company spending ₪30,000 on an employer branding video that saves **one work day** of an HR manager filtering unsuitable candidates — already recovers part of the cost in the first year.

The real metric: **candidate quality**, not quantity. Fewer CVs from people who don't fit, more contact from people who've already "bought into" the company before the interview.

---

Want to talk employer branding for your company? Leave your details — we'll be in touch.`,
  },
  {
    id: "kama-ole-seret-tadmit-2026",
    coverImage: "/vlogimg/hafakat-video-b2b-cover.jpg",
    titleHe: "כמה עולה סרט תדמית ב-2026 — פירוט מחירים לפי סוג הפקה",
    titleEn: "How Much Does a Corporate Brand Film Cost in 2026 — Price Breakdown by Production Type",
    excerptHe: "מה מחיר סרט תדמית לחברה בישראל? פירוט ריאלי של עלויות לפי סוג ואורך, כולל AI, אנימציה והפקות מלאות.",
    excerptEn: "What does a corporate brand film cost in Israel? A realistic breakdown of costs by type and length, including AI, animation, and full productions.",
    date: "2026-09-01",
    readingTime: 6,
    tags: ["מחירים", "סרט תדמית", "הפקת וידאו", "B2B"],
    relatedServiceHref: "/pricing",
    relatedServiceLabelHe: "מחירון הפקות",
    relatedServiceLabelEn: "Production Pricing",
    bodyHe: `## כמה עולה סרט תדמית לחברה ב-2026?

זו השאלה שכל מנהל שיווק שואל לפני שהוא מתחיל לחפש סטודיו. התשובה הקצרה: תלוי. אבל יש מספרים ריאליים שאפשר להסתמך עליהם.

## טווחי מחירים לפי סוג הפקה

**סרטון קצר (עד 60 שניות)**
- יום צילום אחד
- עריכה בסיסית + מוזיקה
- **מחיר: 9,000–18,000 ש"ח**

**סרט תדמית סטנדרטי (90–120 שניות)**
- 2 ימי צילום, מוגרפיקה, עיצוב צליל
- מתאים לעמוד הבית, לינקדאין, כנסים
- **מחיר: 18,000–45,000 ש"ח**

**הפקה פרמיום (2–4 דקות)**
- תסריט, 3+ ימי צילום, אנימציה, AI, ספריית גרסאות
- לחברות שמציגות לדירקטוריון ולמשקיעים
- **מחיר: 35,000–90,000 ש"ח ומעלה**

**הפקת AI (ללא צילום)**
- Midjourney + Kling + Runway Gen-3
- אידיאלי לסטארטאפים טרום-מוצר וחברות ביטחוניות
- **מחיר: 15,000–40,000 ש"ח**

**סרטון אנימציה Explainer**
- 60–90 שניות, 2D/מוגרפיקה
- **מחיר: 12,000–50,000 ש"ח לפי מורכבות**

## מה משפיע הכי הרבה על המחיר?

1. **מספר ימי צילום** — כל יום צילום עולה כסף: צוות, ציוד, לוקיישן
2. **רמת הפוסט-פרודקשן** — מוגרפיקה, AI, VFX, מוזיקה מקורית
3. **מורכבות הסקריפט** — כמה לוקיישנים, כמה אנשים, כמה גרסאות
4. **סבבי תיקונים** — יותר סבבים = יותר עלויות עריכה

## מה לא כלול בדרך כלל

- שחקנים או דוברים חיצוניים
- תרגומים ותמלול
- הפצה (מדיה ממומנת)
- מוזיקה מקורית (לרוב מגיעים עם ספרייה)

## איך לבחור נכון לפי תקציב

אם התקציב מוגבל — עדיף סרט קצר אחד מצוין מאשר שני סרטים בינוניים. השקעה בסקריפט ובבימוי חוזרת עליה עצמה. מה שלקוחות מרגישים בסרט זה לא כמה ימי צילום היו — אלא כמה טוב הסרט מייצג אותם.

---

רוצים הצעת מחיר ספציפית לפרויקט שלכם? שיחת הכרה ראשונה היא תמיד חינמית.`,
    bodyEn: `## How Much Does a Corporate Brand Film Cost in 2026?

This is the question every marketing manager asks before they start looking for a studio. The short answer: it depends. But there are realistic numbers you can rely on.

## Price Ranges by Production Type

**Short video (up to 60 seconds)**
- One shoot day
- Basic editing + music
- **Price: ₪9,000–18,000**

**Standard brand film (90–120 seconds)**
- 2 shoot days, motion graphics, sound design
- Suitable for homepage, LinkedIn, conferences
- **Price: ₪18,000–45,000**

**Premium production (2–4 minutes)**
- Script, 3+ shoot days, animation, AI, version library
- For companies presenting to boards and investors
- **Price: ₪35,000–90,000+**

**AI production (no filming)**
- Midjourney + Kling + Runway Gen-3
- Ideal for pre-product startups and defense companies
- **Price: ₪15,000–40,000**

**Animated explainer video**
- 60–90 seconds, 2D/motion graphics
- **Price: ₪12,000–50,000 depending on complexity**

## What Affects the Price Most?

1. **Number of shoot days** — every shoot day costs money: crew, equipment, location
2. **Post-production level** — motion graphics, AI, VFX, original music
3. **Script complexity** — how many locations, people, versions
4. **Revision rounds** — more rounds = more editing costs

## What's Usually Not Included

- External actors or speakers
- Translation and transcription
- Distribution (paid media)
- Original music (usually comes with a library)

## How to Choose Right for Your Budget

If the budget is limited — one excellent short film is better than two mediocre films. Investment in script and direction pays for itself. What clients feel in a film isn't how many shoot days there were — but how well the film represents them.

---

Want a specific quote for your project? The first introductory call is always free.`,
  },
  {
    id: "7-sheelot-livchir-studio-video",
    coverImage: "/vlogimg/hafakat-video-b2b-cover.jpg",
    titleHe: "7 שאלות שחייבים לשאול לפני שבוחרים סטודיו הפקת וידאו",
    titleEn: "7 Questions You Must Ask Before Choosing a Video Production Studio",
    excerptHe: "לא כל הסטודיואים שווים. הנה 7 שאלות שיחסכו לכם כסף, זמן ואכזבות.",
    excerptEn: "Not all studios are equal. Here are 7 questions that will save you money, time, and disappointment.",
    date: "2026-08-01",
    readingTime: 5,
    tags: ["הפקת וידאו", "טיפים", "B2B", "סטודיו"],
    relatedServiceHref: "/services/corporate",
    relatedServiceLabelHe: "סרטי תדמית וקורפורייט",
    relatedServiceLabelEn: "Corporate Brand Films",
    bodyHe: `## 7 שאלות שחייבים לשאול לפני שבוחרים סטודיו הפקת וידאו

בחירת סטודיו וידאו זה לא כמו להזמין מוצר מאמזון. אתם בוחרים שותף יצירתי לפרויקט שייצג את החברה שלכם לשנים. הנה 7 שאלות שיעזרו לכם לבחור נכון.

## שאלה 1: מי יבים את הפרויקט בפועל?

סטודיואים גדולים מוכרים ומאאוטסורסים לפרילנסרים. תשאלו: מי הבמאי שיישב איתי בחדר? אם התשובה היא "אחד מהצוות שלנו" — תבקשו לפגוש אותו לפני חתימה.

## שאלה 2: יש דוגמה מהתחום שלי?

פורטפוליו יפה מלא בסרטי אוכל לא יכין אתכם לסרט B2B טכנולוגי. תשאלו ספציפית: יש לכם ניסיון עם חברות הייטק / נדל"ן / ביטחוני?

## שאלה 3: מה כלול במחיר?

מחיר "החל מ-X" לרוב לא כולל: שחקנים, מוזיקה מקורית, גרסאות נוספות, שינויים מחוץ לסקופ. תבקשו פירוט מלא.

## שאלה 4: כמה סבבי תיקונים כלולים?

2-3 סבבים זה תקין. פחות מזה — תנסו להרוויח על חשבונכם. יותר מ-5 — כנראה שאין תהליך עבודה ברור.

## שאלה 5: מה קורה אם לא אהבתי?

תשאלו ישירות: מה קורה אם אחרי הסרט הגמר לא אהבתי את הכיוון? האם יש נקודת עצירה בתהליך שבה ניתן לשנות כיוון? סטודיו טוב יאמר לכם כן — ויסביר איך.

## שאלה 6: יש ביטוח הפקה?

ביטוח הפקה הוא חובה. תאונות קורות בסט. אם אין ביטוח — הנזק הפוטנציאלי יכול ליפול עליכם.

## שאלה 7: "יש כימיה"?

זה נשמע רגשי, אבל זה קריטי. אתם הולכים לבלות ימי צילום אינטנסיביים עם הצוות הזה. תקשורת ישירה, נוחות לומר "לא אהבתי", יכולת לדבר על תקציב בפתיחות — אלה מרכיבים של שותפות מוצלחת.

---

רוצים לראות איך זה נראה בפועל? צפו בתיק העבודות שלנו וצרו קשר לשיחת הכרה.`,
    bodyEn: `## 7 Questions You Must Ask Before Choosing a Video Production Studio

Choosing a video studio isn't like ordering a product from Amazon. You're choosing a creative partner for a project that will represent your company for years. Here are 7 questions to help you choose correctly.

## Question 1: Who Will Actually Direct the Project?

Large studios sell and outsource to freelancers. Ask: who is the director who will sit with me in the room? If the answer is "one of our team" — ask to meet them before signing.

## Question 2: Do You Have Examples from My Industry?

A beautiful portfolio full of food films won't prepare you for a technical B2B film. Ask specifically: do you have experience with high-tech / real estate / defense companies?

## Question 3: What's Included in the Price?

A price "starting from X" usually doesn't include: actors, original music, additional versions, changes outside scope. Ask for a full breakdown.

## Question 4: How Many Revision Rounds Are Included?

2-3 rounds is standard. Less than that — they're trying to profit at your expense. More than 5 — there's probably no clear work process.

## Question 5: What Happens If I Don't Like It?

Ask directly: what happens if after the final film I didn't like the direction? Is there a stopping point in the process where the direction can be changed? A good studio will say yes — and explain how.

## Question 6: Do They Have Insurance?

Production insurance is mandatory. Accidents happen on set. If the company has no insurance — the potential damage could fall on you.

## Question 7: Is There "Chemistry"?

This sounds emotional, but it's critical. You're going to spend intensive shoot days with this team. Direct communication, comfort saying "I didn't like it," and the ability to talk about budget openly — these are components of a successful partnership.

---

Want to see what this looks like in practice? View our portfolio and contact us for a getting-to-know-you conversation.`,
  },
  {
    id: "ai-video-production-2026",
    coverImage: "/vlogimg/hafakat-video-b2b-cover.jpg",
    titleHe: "איך AI משנה את הפקת הוידאו התאגידי ב-2026",
    titleEn: "How AI Is Changing Corporate Video Production in 2026",
    excerptHe: "Kling, Runway Gen-3, Midjourney — לא עוד כלים ניסיוניים. הנה איך AI הופך להפקות אמיתיות עם לקוחות אמיתיים.",
    excerptEn: "Kling, Runway Gen-3, Midjourney — no longer experimental tools. Here's how AI is turning into real productions with real clients.",
    date: "2026-07-01",
    readingTime: 7,
    tags: ["AI", "וידאו AI", "הפקת וידאו", "טכנולוגיה"],
    relatedServiceHref: "/services/ai",
    relatedServiceLabelHe: "הפקות וידאו AI",
    relatedServiceLabelEn: "AI Video Productions",
    bodyHe: `## איך AI משנה את הפקת הוידאו התאגידי ב-2026

לפני שנתיים, כשהצגנו ל-CMO של חברת הייטק סרטון שהופק עם Midjourney ו-Runway, הוא שאל "זה אמיתי?". היום הוא שואל "כמה זה עולה פחות מצילום רגיל?"

## מה השתנה — ובמה

**Midjourney V7** — תמונות פוטוריאליסטיות שניתן לבנות עליהן עולמות ויזואליים שלמים. בוחרים מחר, ולמחרת יש 50 פריימים מוכנים.

**Kling 2.0** — וידאו מתמונה ב-4K. תנועה טבעית, פרזיסיה ויזואלית שלא הייתה אפשרית לפני שנה. משתמשים בו כשהציוד מסווג, הפרויקט לא קיים עדיין, או כשנדרשים ויזואלים שאי אפשר לצלם.

**Runway Gen-3 Alpha** — שיפורים ופעולות מורכבות. כשיש קטע מצולם שצריך להפוך לסינמטי.

**ElevenLabs** — קריין AI ב-30+ שפות, כולל עברית. מקצר את הפוסט-פרודקשן בשבוע שלם.

## מה AI לא יכול לעשות (עדיין)

- בימוי: להחליט מה אומר לקהל הזה
- נרטיב: לבנות סיפור שמשכנע ועובד ב-90 שניות
- לקוח: לשאול שאלה נכונה בפגישת הקיק-אוף
- תחושת בטן: לדעת שהפריים הזה עובד ושה הזה לא

AI הוא כלי מונמן על ידי במאי. בלי הבמאי — זה נראה כמו תרגיל טכנולוגי.

## מתי כדאי לבחור הפקת AI?

- **מוצר שעדיין לא קיים** — סטארטאפ בשלב ה-seed, גיוס הון לפני MVP
- **ציוד מסווג** — חברות ביטחוניות שלא יכולות לחשוף את המוצר
- **ויזואלים עתידיים** — בינוי, תכנון עירוני, פרויקטי נדל"ן טרום-בנייה
- **תקציב מוגבל עם שאיפות גדולות** — Hybrid production חוסך 40-60%

## עלויות: כמה חוסכים עם AI?

הפקה רגילה של 3 ימי צילום + פוסט מלא = 60,000-120,000 ש"ח.
אותה רמת ויזואלית עם AI = 20,000-45,000 ש"ח.

הפרש? 40-60%. שווה לחשוב על זה.

---

עובדים עם AI בכל פרויקט שני שלנו. רוצים לראות דוגמאות? צרו קשר.`,
    bodyEn: `## How AI Is Changing Corporate Video Production in 2026

Two years ago, when we showed a CMO of a high-tech company a video produced with Midjourney and Runway, he asked "is this real?". Today he asks "how much less does this cost than regular filming?"

## What Changed — and In What

**Midjourney V7** — photorealistic images on which you can build entire visual worlds. Choose today, and tomorrow you have 50 ready frames.

**Kling 2.0** — video from image in 4K. Natural movement, visual precision that wasn't possible a year ago. Used when equipment is classified, the project doesn't yet exist, or when visuals that can't be filmed are needed.

**Runway Gen-3 Alpha** — improvements and complex actions. When there's filmed footage that needs to become cinematic.

**ElevenLabs** — AI voiceover in 30+ languages, including Hebrew. Shortens post-production by a full week.

## What AI Can't Do (Yet)

- Direction: deciding what tells this audience something
- Narrative: building a story that convinces and works in 90 seconds
- Client: asking the right question in the kickoff meeting
- Gut feeling: knowing this frame works and that one doesn't

AI is a tool operated by a director. Without the director — it looks like a technological exercise.

## When Should You Choose AI Production?

- **Product that doesn't yet exist** — seed-stage startup, fundraising before MVP
- **Classified equipment** — defense companies that can't expose their product
- **Future visuals** — construction, urban planning, pre-construction real estate
- **Limited budget with big ambitions** — Hybrid production saves 40-60%

## Costs: How Much Do You Save with AI?

Regular production of 3 shoot days + full post = ₪60,000-120,000.
Same visual level with AI = ₪20,000-45,000.

Difference? 40-60%. Worth thinking about.

---

We use AI in every other project we work on. Want to see examples? Get in touch.`,
  },
  {
    id: "hafakat-video-b2b",
    sectionImages: ["/vlogimg/hafakat-video-b2b-s1.jpg"],
    coverImage: "/vlogimg/hafakat-video-b2b-cover.jpg",
    titleHe: "הפקת וידאו B2B: למה עסקים שמוכרים לעסקים צריכים סרט שונה לגמרי",
    titleEn: "B2B Video Production: Why Businesses Selling to Businesses Need a Completely Different Film",
    excerptHe: "סרט B2B שנראה כמו פרסומת B2C — לא עובד. הנה מה שבאמת משכנע קונים מוסדיים.",
    excerptEn: "A B2B video that looks like a B2C ad doesn't work. Here's what actually convinces institutional buyers.",
    date: "2025-07-01",
    readingTime: 7,
    tags: ["B2B", "שיווק", "הפקת וידאו", "תוכן"],
    relatedServiceHref: "/services/corporate",
    relatedServiceLabelHe: "סרטי תדמית לעסקים",
    relatedServiceLabelEn: "Corporate Brand Films",
    bodyHe: `## הפקת וידאו B2B: הכל שונה כשמוכרים לעסק

כשאתם מוכרים לצרכן פרטי — רגש הוא הכל. כשמוכרים לחברה — רגש חשוב, אבל הוא צריך להיות מגובה בלוגיקה.

קונה B2B לא מקבל החלטה לבד. הוא מציג לוועדה. הוועדה שואלת שאלות שהוא צריך לדעת לענות עליהן. הסרט שלכם צריך לתת לו את הכלים לעשות את זה.

[IMAGE]

## מה ההבדל בין סרט B2C לסרט B2B?

| נושא | B2C | B2B |
|------|-----|-----|
| קהל | אדם אחד, החלטה מיידית | ועדה, תהליך ממושך |
| מניע | רגש, שאיפה, פחד | ROI, אמינות, יכולת |
| אורך | 15–60 שניות | 1.5–4 דקות |
| שפה | פשוטה, ויזואלית | מדויקת, מקצועית |
| קריאה לפעולה | "קנה עכשיו" | "בואו נדבר / קבע פגישה" |

## מה חייב להיות בסרט B2B?

### הבעיה שאתם פותרים — בשפה של הלקוח

לא "אנחנו מספקים פתרונות חדשניים" — אלא "מנהלי רכש מתמודדים עם X, וזה גורם ל-Y. אנחנו פותרים את זה על ידי Z."

### לקוח מרוצה שמדבר בעצמו (Case Study)

**זה הנשק הכי חזק בסרט B2B.** לקוח שמסביר את הבעיה שהייתה לו, מה השתנה, ומה התוצאות — מוכר יותר מכל קריין מקצועי.

### יכולת ותהליך — לא רק תוצרים

קונים B2B רוצים להבין: מי מאחורי זה? מה תהליך העבודה? אם משהו ישתבש — מי אחראי?

### נתונים ספציפיים

"חסכנו 30% בעלויות לוגיסטיקה" עדיף מ"שיפרנו את היעילות". ספציפיות בונה אמינות.

## הטעות הנפוצה ביותר

להשקיע בסרט שמרשים — אבל לא מסביר כלום. הרבה חברות B2B מייצרות סרטים יפים שנראים טוב ב-showreel של חברת ההפקה, אבל לא ממירים בפגישות מכירה.

**שאלה טובה לפני ההפקה:** "אם מנהל רכש ירצה להציג את הסרט לוועדה של 5 אנשים — האם הוא נותן להם מספיק מידע לאשר?"

## כמה זה עולה?

סרט B2B מקצועי בישראל:

- **סרט תדמית + Case Study אחד:** ₪20,000–₪40,000
- **סרט מוצר עם הדגמה חיה:** ₪15,000–₪30,000
- **סדרת Case Studies (3 לקוחות):** ₪35,000–₪65,000

## מתי הסרט כבר מחזיר את עצמו?

עסקה B2B ממוצעת בישראל עומדת על מאות אלפי שקלים. אם הסרט עוזר לסגור **עסקה אחת נוספת בשנה** — הוא כבר החזיר את עצמו פי כמה.

הסרט לא מחליף את אנשי המכירות — הוא מכין את הקרקע לפני שהם מגיעים.

---

רוצים לדבר על אסטרטגיית וידאו B2B לחברה שלכם? ממלאים שאלון — ומתחילים.`,
    bodyEn: `## B2B Video Production: Everything Is Different When You Sell to Businesses

When you sell to consumers — emotion is everything. When you sell to companies — emotion matters, but it needs to be backed by logic.

A B2B buyer doesn't make decisions alone. They present to a committee. The committee asks questions they need to be able to answer. Your video needs to give them the tools to do that.

[IMAGE]

## What's the Difference Between a B2C and B2B Video?

| Topic | B2C | B2B |
|-------|-----|-----|
| Audience | One person, immediate decision | Committee, extended process |
| Driver | Emotion, aspiration, fear | ROI, credibility, capability |
| Length | 15–60 seconds | 1.5–4 minutes |
| Language | Simple, visual | Precise, professional |
| CTA | "Buy now" | "Let's talk / Schedule a meeting" |

## What Must Be in a B2B Video?

### The Problem You Solve — in the Client's Language

Not "we provide innovative solutions" — but "procurement managers face X, which causes Y. We solve this through Z."

### A Happy Client Speaking for Themselves (Case Study)

**This is the most powerful weapon in a B2B video.** A client who explains the problem they had, what changed, and what the results were — sells more than any professional narrator.

### Capability and Process — Not Just Deliverables

B2B buyers want to understand: who's behind this? What's the workflow? If something goes wrong — who's responsible?

### Specific Data

"We saved 30% in logistics costs" beats "we improved efficiency." Specificity builds credibility.

## The Most Common Mistake

Investing in an impressive video that explains nothing. Many B2B companies produce beautiful videos that look great on a production company's showreel but don't convert in sales meetings.

**A good question before production:** "If a procurement manager wants to show this video to a committee of 5 people — does it give them enough information to approve?"

## How Much Does It Cost?

A professional B2B video in Israel:

- **Brand film + one Case Study:** ₪20,000–₪40,000
- **Product video with live demo:** ₪15,000–₪30,000
- **Case Study series (3 clients):** ₪35,000–₪65,000

## When Does the Video Pay for Itself?

The average B2B deal in Israel is worth hundreds of thousands of shekels. If the video helps close **one additional deal per year** — it's already paid for itself many times over.

The video doesn't replace salespeople — it prepares the ground before they arrive.

---

Want to talk B2B video strategy for your company? Fill out the quiz — let's get started.`,
  },
  {
    id: "כמה-עולה-סרט-תדמית",
    coverImage: "/vlogimg/madrich-michir-cover.jpg",
    sectionImages: ["/vlogimg/kama-ole-seret-tadmit-s1.jpg"],
    titleHe: "כמה עולה סרט תדמית? המדריך המלא לתמחור הפקת וידאו בישראל 2025",
    titleEn: "How Much Does a Brand Film Cost? The Complete Guide to Video Production Pricing in Israel 2025",
    excerptHe: "התשובה האמיתית לשאלה שכולם שואלים: כמה עולה סרט תדמית לחברה בישראל? מחירים, גורמים, ומתי ההשקעה שתמכרת לכם.",
    excerptEn: "The real answer to the question everyone asks: how much does a brand film cost in Israel? Prices, factors, and when the investment pays off.",
    readingTime: 6,
    tags: ["תמחור", "סרט תדמית", "הפקת וידאו"],
    date: "2025-04-10",
    relatedServiceHref: "/services/hightech",
    relatedServiceLabelHe: "הפקת וידאו לחברות הייטק",
    relatedServiceLabelEn: "High-Tech Video Production",
    bodyHe: `## השאלה שכולם שואלים ואף אחד לא עונה עליה ישר

"כמה עולה סרט תדמית?" — זו השאלה הראשונה שכל לקוח שואל, ולרוב הוא מקבל תשובה מתחמקת: "תלוי בסקופ".

זה נכון, אבל לא מועיל. במאמר הזה נשבור את השקיפות ונספר בדיוק מה משפיע על המחיר, מה טווחי המחירים הריאליים בישראל, ואיך לדעת אם ההצעה שקיבלתם הגיונית.

[IMAGE]

## מה קובע את מחיר סרט התדמית?

### 1. ימי צילום

יום צילום בישראל עם צוות מקצועי עולה בין **₪8,000 ל-₪18,000**, תלוי בגודל הצוות והציוד. סרט תדמית ממוצע דורש 1-3 ימי צילום.

### 2. לוקיישנים

צילום בסטודיו פנימי זול בהרבה מצילום חיצוני עם פרמיטים, אבטחה ולוגיסטיקה. לוקיישן ייחודי יכול להוסיף ₪5,000-₪15,000.

### 3. שחקנים ומוקרינים

שחקן מקצועי לפנייה מול מצלמה: ₪2,000-₪8,000 ליום. ווייס אובר מקצועי: ₪1,500-₪4,000.

### 4. פוסט-פרודקשן

עריכה, צביעה (Color Grading), מוזיקה ועיצוב סאונד הם לפחות 30%-40% מהתקציב הכולל. מוגרפיקה ואנימציה מוסיפים עוד.

### 5. תסריט וקריאייטיב

לקוחות רבים מזלזלים בשלב הזה. תסריט טוב הוא ההבדל בין סרט שמוכר לסרט שמשחית זמן של הצופה.

## טווחי מחירים ריאליים בישראל (2025)

| סוג סרט | טווח מחיר | מה כולל |
|---------|-----------|---------|
| סרט תדמית קצר (60-90 שניות) | ₪15,000–₪35,000 | יום צילום, עריכה, מוזיקה |
| סרט Employer Branding | ₪25,000–₪55,000 | 2 ימי צילום, ראיונות, עריכה מורכבת |
| סרט הייטק / Explainer | ₪18,000–₪45,000 | תסריט, אנימציה, ווייס אובר |
| סרט אירוע קורפורייט | ₪12,000–₪28,000 | כיסוי אירוע, עריכה, מוזיקה |
| סדרת Case Study (3 לקוחות) | ₪35,000–₪70,000 | 3 ימי צילום, עריכות נפרדות |

## מה ההבדל בין ₪15,000 ל-₪60,000?

לא בהכרח האיכות. ההבדל בין הצעה של ₪15,000 להצעה של ₪60,000 לאותו סרט יכול לנבוע מ:

**גורמים לגיטימיים שמעלים מחיר:**
- גודל צוות (1 איש vs. 5 אנשים)
- ציוד (מצלמה אחת vs. מולטי-קאם, דרון, רכבת תאורה)
- שחקנים מקצועיים vs. עובדי החברה
- מוגרפיקה ואנימציה מותאמת

**גורמים שלא מצדיקים מחיר גבוה:**
- שם גדול של סטודיו שמייצר בפועל פחות
- ציוד שלא צריך לסרט שלכם
- תפקידים כפולים בצוות

## מתי ההשקעה משתלמת?

חשבו על זה כך: אם הסרט עוזר לסגור עסקה אחת נוספת בשנה, או לגייס מועמד מצוין שהייתם מפסידים — הוא כבר החזיר את עצמו.

**לקוחות B2B:** עסקה ממוצעת בישראל שווה עשרות עד מאות אלפי שקלים. סרט שמסייע בשלב ה-Consideration הוא אחד ה-ROI הגבוהים בכלים השיווקיים.

**גיוס עובדים:** עלות גיוס עובד כוללת שבועות של Human Resources, דמי גיוס (10%-20% ממשכורת שנתית), והדרכה. סרט Employer Branding שמקטין זמן גיוס ב-20% שווה הרבה יותר מהעלות שלו.

## שאלות שכדאי לשאול לפני שחותמים

1. מה כולל בדיוק ה-Scope? (מספר ימי צילום, ימי עריכה, כמה תיקונים)
2. מי מוביל את הפרויקט — המנהל שפגשתם, או פרילנסר שלא הכרתם?
3. מה קורה אם מכסת התיקונים נגמרת?
4. האם יש אפשרות לגרסאות קצרות לרשתות חברתיות?

---

רוצים הצעת מחיר שקופה בלי הפתעות? אנחנו עונים תוך 24 שעות.`,
    bodyEn: `## The Question Everyone Asks But Nobody Answers Directly

"How much does a brand film cost?" — that's the first question every client asks, and they usually get an evasive answer: "It depends on the scope."

That's true, but not helpful. In this article we'll break the silence and tell you exactly what influences the price, what the realistic price ranges in Israel are, and how to know if the quote you received makes sense.

[IMAGE]

## What Determines the Price of a Brand Film?

### 1. Shoot Days

A professional shoot day in Israel with a full crew costs between **₪8,000 and ₪18,000**, depending on crew size and equipment. An average brand film requires 1-3 shoot days.

### 2. Locations

Shooting in an internal studio is much cheaper than exterior shooting with permits, security, and logistics. A unique location can add ₪5,000-₪15,000.

### 3. Actors and On-Camera Talent

A professional on-camera actor: ₪2,000-₪8,000 per day. Professional voice over: ₪1,500-₪4,000.

### 4. Post-Production

Editing, color grading, music and sound design account for at least 30%-40% of the total budget. Motion graphics and animation add more.

### 5. Script and Creative

Many clients underestimate this stage. A good script is the difference between a film that sells and one that wastes the viewer's time.

## Realistic Price Ranges in Israel (2025)

| Film Type | Price Range | What's Included |
|-----------|-------------|-----------------|
| Short brand film (60-90 sec) | ₪15,000–₪35,000 | One shoot day, editing, music |
| Employer Branding film | ₪25,000–₪55,000 | 2 shoot days, interviews, complex editing |
| High-tech / Explainer film | ₪18,000–₪45,000 | Script, animation, voice over |
| Corporate event film | ₪12,000–₪28,000 | Event coverage, editing, music |
| Case Study series (3 clients) | ₪35,000–₪70,000 | 3 shoot days, separate edits |

## When Does the Investment Pay Off?

Think of it this way: if the film helps close one additional deal per year, or recruit an excellent candidate you would have lost — it's already paid for itself.

**B2B clients:** An average deal in Israel is worth tens to hundreds of thousands of shekels. A film that aids the Consideration stage has one of the highest ROIs among marketing tools.

**Recruitment:** The cost of hiring an employee includes weeks of HR time, agency fees (10%-20% of annual salary), and training. An Employer Branding film that reduces hiring time by 20% is worth far more than its cost.

---

Want a transparent quote with no surprises? We respond within 24 hours.`,
  },
  {
    id: "איך-לבחור-חברת-הפקת-וידאו",
    coverImage: "/vlogimg/hafakat-video-b2b-cover.jpg",
    sectionImages: ["/vlogimg/hafakat-video-b2b-s1.jpg"],
    titleHe: "איך לבחור חברת הפקת וידאו? 7 שאלות שחייבים לשאול לפני שחותמים",
    titleEn: "How to Choose a Video Production Company? 7 Questions You Must Ask Before Signing",
    excerptHe: "לא כל חברות הפקת הוידאו שוות. המדריך המעשי לבחירת הספק הנכון — בלי להתחרט.",
    excerptEn: "Not all video production companies are equal. The practical guide to choosing the right vendor — without regret.",
    readingTime: 5,
    tags: ["מדריך", "בחירת ספק", "הפקת וידאו"],
    date: "2025-05-15",
    relatedServiceHref: "/services",
    relatedServiceLabelHe: "כל שירותי הוידאו שלנו",
    relatedServiceLabelEn: "All Our Video Services",
    bodyHe: `## הבעיה עם חיפוש חברת הפקת וידאו

כשמחפשים "הפקת וידאו ישראל" בגוגל, מקבלים עשרות תוצאות. איך מבדילים בין חברה שתייצר תוצאה מדהימה לבין אחת שתבזבז לכם את התקציב?

7 השאלות האלה יעשו לכם את ההבדל.

[IMAGE]

## שאלה 1: מי יוביל את הפרויקט בפועל?

זו השאלה הכי חשובה. בחברות גדולות רבות, מי שמגיע לפגישה המכירה (מנהל, סניור) הוא לא מי שמצלם בפועל. בקשו לפגוש את הצלם/במאי שיעבוד על הפרויקט שלכם לפני שאתם חותמים.

**סימן אזהרה:** "נשלח את הצוות הכי מתאים" בלי להציג אנשים ספציפיים.

## שאלה 2: האם יש להם ניסיון בתחום שלכם?

סרט לחברת הייטק שונה לחלוטין מסרט נדל"ן. שאלו לראות דוגמאות ספציפיות לתחום שלכם, לא רק את הסרטים הכי יפים שהם עשו.

## שאלה 3: מה כולל בדיוק ה-Scope?

בקשו פירוט כתוב של:
- מספר ימי צילום
- מספר ימי עריכה
- כמה גרסאות עריכה כלולות
- כמה סבבי תיקונים מותרים
- מה קורה אם עוברים את המכסה

**סימן אזהרה:** הצעת מחיר שלא מפרטת את אלה.

## שאלה 4: מה לוח הזמנים הריאלי?

הבטחה של "שבועיים" לסרט תדמית מלא היא לרוב לא ריאלית. שאלו:
- כמה זמן לשלב הקריאייטיב?
- מתי מגישים את העריכה הראשונה?
- כמה זמן לתיקונים?

## שאלה 5: מי מחזיק בזכויות?

חשוב: בחלק מהחוזים, חברת ההפקה שומרת על זכויות לשימוש בסרט לתיק העבודות שלהם, אנשים מסוימים, או אפילו לפרסום. ודאו שאתם מקבלים זכויות מלאות.

## שאלה 6: האם יש להם ביטוח?

ביטוח צילומים הוא חובה. תאונות על סט קורות. אם לחברה אין ביטוח — הנזק הפוטנציאלי עלול ליפול עליכם.

## שאלה 7: האם אתם "חברים"?

זה נשמע רגשי, אבל הוא קריטי. אתם הולכים לבלות ימי צילום אינטנסיביים עם הצוות הזה. שיח ישיר, נוחות לאמר "לא אהבתי", ויכולת לדבר על תקציב בפתיחות — אלה מרכיבים של שותפות מוצלחת.

## הסימנים שאומרים "זאת החברה הנכונה"

- מראים לכם דוגמאות מהתחום שלכם בלי שביקשתם
- שואלים שאלות על העסק שלכם לפני שמציעים פתרון
- נותנים לכם הצעה מפורטת עם שורות ספציפיות
- מספרים מה *לא* עובד, לא רק מה כן
- מציגים לקוחות שאפשר לפנות אליהם

---

רוצים לראות איך זה נראה בפועל? צפו בתיק העבודות שלנו וצרו קשר לשיחת הכרה.`,
    bodyEn: `## The Problem with Searching for a Video Production Company

When you search "video production Israel" on Google, you get dozens of results. How do you distinguish between a company that will produce an amazing result and one that will waste your budget?

These 7 questions will make all the difference.

[IMAGE]

## Question 1: Who Will Actually Lead the Project?

This is the most important question. At many large companies, the person who comes to the sales meeting (manager, senior) is not the one who actually films. Ask to meet the cinematographer/director who will work on your project before you sign.

**Red flag:** "We'll send the most suitable team" without presenting specific people.

## Question 2: Do They Have Experience in Your Industry?

A film for a high-tech company is completely different from a real estate film. Ask to see specific examples from your industry, not just their most beautiful films.

## Question 3: What Exactly Is the Scope?

Request written detail of:
- Number of shoot days
- Number of editing days
- How many editing versions are included
- How many revision rounds are allowed
- What happens if you exceed the quota

**Red flag:** A quote that doesn't detail these.

## Question 4: What's the Realistic Timeline?

A promise of "two weeks" for a full brand film is usually not realistic. Ask:
- How long for the creative phase?
- When will the first edit be delivered?
- How long for revisions?

## Question 5: Who Owns the Rights?

Important: in some contracts, the production company retains rights to use the film in their portfolio, for certain people, or even for publication. Make sure you receive full rights.

## Question 6: Do They Have Insurance?

Production insurance is mandatory. Accidents happen on set. If the company has no insurance — the potential damage could fall on you.

## Question 7: Are You "Friends"?

This sounds emotional, but it's critical. You're going to spend intensive shoot days with this team. Direct communication, comfort saying "I didn't like it," and the ability to talk about budget openly — these are components of a successful partnership.

---

Want to see what this looks like in practice? View our portfolio and contact us for a getting-to-know-you conversation.`,
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
    answerHe: "אנחנו עובדים עם סטארטאפים בשלב ה-seed ועם חברות ציבוריות גדולות, השיקול שלנו הוא לא גודל החברה אלא איכות הפרויקט והתאמה קריאייטיבית. עבדנו עם חברות כמו Palo Alto Networks, Humavox, Ashtrom ו-CROPX לצד סטארטאפים בשלביהם הראשונים.",
    answerEn: "We work with seed-stage startups and large public companies alike, our consideration is not company size but project quality and creative fit. We've worked with companies like Palo Alto Networks, Humavox, Ashtrom, and CROPX alongside early-stage startups.",
  },
  {
    questionHe: "מה ההבדל בין הפקת AI לבין הפקה רגילה?",
    questionEn: "What is the difference between AI production and regular production?",
    answerHe: "הפקת AI משלבת כלים כמו Kling, Runway Gen-3 Alpha ו-Midjourney כדי ליצור ויזואלים שלא ניתן לצלם בצורה רגילה: עולמות דיגיטליים, אנימציות, הדמיות, בתקציב נגיש. ב-Hybrid productions אנחנו משלבים AI עם צילומי live action לתוצאה שנראית כמו הפקת ענק.",
    answerEn: "AI production integrates tools like Kling, Runway Gen-3 Alpha, and Midjourney to create visuals that cannot be filmed conventionally: digital worlds, animations, visualizations, at accessible budgets. In hybrid productions, we combine AI with live action footage for a result that looks like a major production.",
  },
  {
    questionHe: "האם אתם מספקים גם את המוזיקה והסאונד?",
    questionEn: "Do you also provide the music and sound?",
    answerHe: "כן. אנחנו מגיעים עם ספריית מוזיקה מורשית מלאה, ובפרויקטים מתאימים עובדים עם מלחינים ומוזיקאים ליצירת מוזיקה מקורית. עיצוב הסאונד, מיקס ומאסטרינג, הכל כלול בחבילה.",
    answerEn: "Yes. We come with a full licensed music library, and for suitable projects we work with composers and musicians to create original music. Sound design, mixing, and mastering, all included in the package.",
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
  {
    questionHe: "כמה עולה סרטון אנימציה לחברה?",
    questionEn: "How much does an animated explainer video cost?",
    answerHe: "סרטון אנימציה לחברה עולה בדרך כלל בין 15,000 ל-80,000 ש\"ח, תלוי באורך, סגנון (2D, מוגרפיקה, תלת-ממד) ומורכבות הכתיבה. סרטוני Explainer קצרים (60-90 שניות) הם הפופולריים ביותר לחברות הייטק ו-SaaS — הם מסבירים מוצר מורכב בצורה ברורה ומהירה.",
    answerEn: "An animated explainer video for a company typically costs between $4,000 and $20,000 USD, depending on length, style (2D, motion graphics, 3D) and script complexity. Short explainer videos (60-90 seconds) are most popular for high-tech and SaaS companies — they explain complex products clearly and quickly.",
  },
  {
    questionHe: "מה ההבדל בין סרט תדמית לסרט חברה?",
    questionEn: "What is the difference between a brand film and a corporate video?",
    answerHe: "סרט תדמית מספר את הסיפור של החברה — הערכים, האנשים, החזון — ומיועד לבנות תדמית ואמון לאורך זמן. סרט חברה (corporate video) הוא מונח כללי יותר שכולל גם סרטי גיוס, אירועים, הדרכות ומצגות לדירקטוריון. אצלנו כל הסוגים האלה עוברים את אותה רמת קריאטיב ואיכות הפקה.",
    answerEn: "A brand film tells the company's story — values, people, vision — and is designed to build image and trust over time. A corporate video is a broader term that includes recruitment films, events, training, and board presentations. At our studio, all these types go through the same level of creative direction and production quality.",
  },
  {
    questionHe: "האם אפשר להפיק סרט וידאו עם AI בלי לצלם בכלל?",
    questionEn: "Can you produce a video with AI without any filming?",
    answerHe: "כן, ולפעמים זו הבחירה הנכונה. עבור מוצרים שעדיין לא קיימים, סביבות בלתי ניתנות לצילום (מפעלים סודיים, תרחישי עתיד, אנימציות טכניות), אנחנו בונים את הסרט כולו עם Midjourney, Kling ו-Runway Gen-3. התוצאה נראית כמו הפקה של מיליון דולר ועולה שבריר מכך.",
    answerEn: "Yes, and sometimes it's the right choice. For products that don't exist yet, environments impossible to film (classified facilities, future scenarios, technical animations), we build the entire film with Midjourney, Kling, and Runway Gen-3. The result looks like a million-dollar production and costs a fraction of that.",
  },
  {
    questionHe: "האם אתם מבצעים גם ימי צילום בלבד (ללא עריכה)?",
    questionEn: "Do you offer filming-only days (without editing)?",
    answerHe: "כן. אנחנו מציעים ימי צילום עצמאיים עם צוות מלא: במאי, צלם, תאורה וציוד. הגורמים הנפוצים: כנסים ואירועים, ראיונות לחברה, תיעוד תהליכים, ו-B-roll לצוות הפנימי. ניתן גם להוסיף עריכה בסיסית בתוספת עלות.",
    answerEn: "Yes. We offer standalone filming days with a full crew: director, cinematographer, lighting, and equipment. Common uses: conferences and events, company interviews, process documentation, and B-roll for in-house teams. Basic editing can be added at an additional cost.",
  },
];
