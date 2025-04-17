// components/SeoHead.tsx
// import { Helmet } from 'react-helmet-async';
// import helmetAsync from 'react-helmet-async';
// const { Helmet } = helmetAsync;

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
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {url && <link rel="canonical" href={url} />}


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
