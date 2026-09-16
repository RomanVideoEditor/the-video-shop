const BASE = "https://www.the-videoshop.com";

type Crumb = { name: string; path: string };

export default function BreadcrumbSchema({ locale, crumbs }: { locale: string; crumbs: Crumb[] }) {
  const prefix = locale === "he" ? "" : "/en";

  const itemListElement = [
    { "@type": "ListItem", position: 1, name: "videoshop", item: `${BASE}${prefix}` },
    ...crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 2,
      name: c.name,
      item: `${BASE}${prefix}${c.path}`,
    })),
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
