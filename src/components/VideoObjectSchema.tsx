interface Props {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl?: string;
  embedUrl?: string;
  duration?: string; // ISO 8601, e.g. "PT1M30S"
}

export default function VideoObjectSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  contentUrl,
  embedUrl,
  duration,
}: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl,
    uploadDate,
    ...(contentUrl && { contentUrl }),
    ...(embedUrl && { embedUrl }),
    ...(duration && { duration }),
    publisher: {
      "@type": "Organization",
      name: "The Video Shop",
      url: "https://thevideoshop.co.il",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
