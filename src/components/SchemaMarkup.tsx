export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VideoProductionService",
        "@id": "https://www.the-videoshop.com/#business",
        name: "videoshop",
        description:
          "סטודיו בוטיק להפקות וידאו ו-AI לחברות המובילות במשק. מעל 20 שנות ניסיון בבימוי והפקה.",
        url: "https://www.the-videoshop.com",
        sameAs: ["https://www.youtube.com/@romangor"],
        areaServed: { "@type": "Country", name: "Israel" },
        knowsAbout: [
          "Video Production",
          "AI Video",
          "Real Estate Video",
          "Corporate Video",
          "Investor Pitch Video",
          "Drone Videography",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Video Production Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "High-Tech & Startup Video" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Real Estate Video" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Video Production" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Video" } },
          ],
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.the-videoshop.com/#local",
        name: "videoshop",
        image: "https://www.the-videoshop.com/og-image.jpg",
        address: { "@type": "PostalAddress", addressCountry: "IL" },
        email: "roman@the-videoshop.com",
        url: "https://www.the-videoshop.com",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
