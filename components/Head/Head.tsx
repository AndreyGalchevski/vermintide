import NextHead from 'next/head';

interface Props {
  path: string;
  pageTitle: string;
  pageDescription: string;
}

export default function Head({ path, pageTitle, pageDescription }: Props) {
  return (
    <NextHead>
      <title>{pageTitle}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={`https://vermintide.band${path}`} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={pageDescription} />

      <meta name="og:url" content={`https://vermintide.band${path}`} />
      <meta name="og:type" content="website" />
      <meta name="og:site_name" content="Vermintide" />
      <meta name="og:title" content={pageTitle} />
      <meta name="og:description" content={pageDescription} />
      <meta
        name="og:image"
        content="https://res.cloudinary.com/dqvimfd8b/image/upload/v1708280760/vermintide/IMG_20230923_190457_469_4.jpg"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
    </NextHead>
  );
}
