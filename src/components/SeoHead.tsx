// components/SeoHead.tsx
import { Helmet } from 'react-helmet-async';
// import helmetAsync from 'react-helmet-async';
// const { Helmet } = helmetAsync;
import { lastUpdated } from "@/constants/meta";


interface SeoProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  twitterHandle?: string;
}

export function SeoHead({
  title,
  description,
  image = 'https://sjodcre-ar-web_arlink.arweave.net/images-webp/arweave-light-seal-1200x630.webp',
  url = '',
  twitterHandle = '@Dev4L4fe',
}: SeoProps) {

  const canonicalUrl = url.endsWith('/') ? url.slice(0, -1) : url;

  const authorName = "Arweave AO Fanatic"
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": title,
    "description": description,
    "url": canonicalUrl,
    "dateModified": lastUpdated,
    "author": {
      "@type": "Organization",
      "name": authorName,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Arweave",
      "logo": {
        "@type": "ImageObject",
        "url": image,
      }
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* {url && <link rel="canonical" href={url} />} */}
      <link rel="canonical" href={canonicalUrl} />



      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={twitterHandle} />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
