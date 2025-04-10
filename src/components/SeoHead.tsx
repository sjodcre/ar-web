// components/SeoHead.tsx
import { Helmet } from 'react-helmet-async';

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
  image = 'https://ar-web_arlink.arweave.net/arweave-light-seal-1200x630.png',
  url = '',
  twitterHandle = '@Dev4L4fe',
}: SeoProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

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
    </Helmet>
  );
}
