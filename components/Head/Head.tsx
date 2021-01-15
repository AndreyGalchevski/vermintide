import NextHead from 'next/head';

interface Props {
  pageTitle: string;
}

export default function Head({ pageTitle }: Props): JSX.Element {
  return (
    <NextHead>
      <title>{pageTitle}</title>
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}
