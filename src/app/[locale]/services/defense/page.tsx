import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isHe = locale === "he";
  return {
    title: isHe ? "ביטחוני וטכנולוגי AI | The Video Shop" : "Defense & AI Tech | The Video Shop",
    description: isHe
      ? "הפקות וידאו לתעשיית הביטחון, רחפנים ואוטונומציה — סרטי פיצ' מורכבים עם AI לגיוס הון בינלאומי."
      : "Video productions for the defense industry, drones and autonomy — complex pitch films with AI for international fundraising.",
  };
}

export default async function DefensePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isHe = locale === "he";

  const content = {
    he: {
      h1: "ביטחוני, טכנולוגי ו-AI",
      subtitle: "סרטי פיצ' מורכבים לתעשיית הביטחון, הרחפנים והאוטונומציה — עם ויזואליזציות פוטוריאליסטיות שמגייסות הון בינלאומי.",
      body1: "תעשיית הביטחון והטכנולוגיה הביטחונית דורשת רמת סודיות, דיוק ויזואלי ומשקל נרטיבי שלא כל סטודיו מסוגל לסיים. פיתחנו מתודולוגיה ייחודית לסרטי פיצ' בתחום זה, שמשלבת סטוריבורד קולנועי עם ויזואליזציות מבוססות AI — כולל Midjourney, Kling ו-Runway Gen-3 Alpha — לפרויקטים כמו \"Iron Bullet\" עבור Airobotics/Ondas Group.",
      body2: "הסרטים שאנחנו מפיקים לתחום הביטחוני נועדו לדלת אחת: חדרי הדירקטוריון וועדות ה-DHS של ממשלות ה-US. הם חייבים להיות מדויקים טכנית, מרשימים ויזואלית ומשכנעים עסקית — בבת אחת.",
      features: [
        "סרטי Investor Pitch לתחום הביטחוני",
        "ויזואליזציות רחפנים פוטוריאליסטיות",
        "AI Storyboarding עם Midjourney",
        "Kling + Runway Gen-3 Alpha",
        "סרטי B2B לגיוס הון בינלאומי",
        "הפקות Dual-Use Tech",
        "תסריטים טכניים ומורכבים",
        "עבודה עם NDAs ורגישות מלאה",
      ],
      cta: "מוכנים ליצור את הפיצ' שלכם?",
    },
    en: {
      h1: "Defense, Tech & AI",
      subtitle: "Complex pitch films for the defense, drone, and autonomy industry — with photorealistic AI visualizations that raise international capital.",
      body1: "The defense and defense-tech industry requires a level of confidentiality, visual precision, and narrative weight that not every studio can deliver. We've developed a unique methodology for pitch films in this field, combining cinematic storyboarding with AI-based visualizations — including Midjourney, Kling, and Runway Gen-3 Alpha — for projects like 'Iron Bullet' for Airobotics/Ondas Group.",
      body2: "The films we produce for the defense sector are aimed at one door: boardrooms and US government DHS committees. They must be technically precise, visually impressive, and business-convincing — all at once.",
      features: [
        "Defense Sector Investor Pitch Films",
        "Photorealistic Drone Visualizations",
        "AI Storyboarding with Midjourney",
        "Kling + Runway Gen-3 Alpha",
        "B2B Films for International Fundraising",
        "Dual-Use Tech Productions",
        "Complex Technical Scripts",
        "Full NDA & Confidentiality Compliance",
      ],
      cta: "Ready to create your pitch?",
    },
  };

  const c = isHe ? content.he : content.en;

  return (
    <ServicePage
      h1={c.h1}
      subtitle={c.subtitle}
      body1={c.body1}
      body2={c.body2}
      features={c.features}
      ctaText={c.cta}
      badge="Defense & AI Tech"
    />
  );
}
