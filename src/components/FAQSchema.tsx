import { faqItems } from "@/lib/videos";

export default function FAQSchema({ locale }: { locale: string }) {
  const isHe = locale === "he";

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: isHe ? item.questionHe : item.questionEn,
      acceptedAnswer: {
        "@type": "Answer",
        text: isHe ? item.answerHe : item.answerEn,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
