import NextHead from 'next/head';

interface Props {
  path: string;
  pageTitle: string;
  pageDescription: string;
}

export default function Head({ path, pageTitle, pageDescription }: Props): JSX.Element {
  return (
    <NextHead>
      <title>{pageTitle}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={pageDescription} />

      <meta name="og:url" content={`http://vermintide.herokuapp.com${path}`} />
      <meta name="og:type" content="website" />
      <meta name="og:site_name" content="Vermintide - Official Website" />
      <meta name="og:title" content={pageTitle} />
      <meta name="og:description" content={pageDescription} />
      {/* <meta name="og:image" content="" />
      <meta name="og:image:height" content="720" />
      <meta name="og:image:width" content="1280" /> */}

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
    </NextHead>
  );
}
