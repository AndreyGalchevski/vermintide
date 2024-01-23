import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const structuredData = {
  '@context': 'http://schema.org',
  '@type': 'MusicGroup',
  '@id': 'https://musicbrainz.org/artist/455707a4-a273-4b12-a26f-fcd41abef63a',
  name: 'Vermintide',
  description: 'Israeli DeathGrind',
  logo: {
    '@type': 'ImageObject',
    url: 'https://res.cloudinary.com/dqvimfd8b/image/upload/v1618120314/vermintide/fb-logo.png',
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://res.cloudinary.com/dqvimfd8b/image/upload/v1682075200/vermintide/og_image.png',
  },
  url: 'https://vermintide.band',
  genre: ['Death Metal', 'Grindcore'],
  sameAs: [
    'https://vermintide.bandcamp.com',
    'https://www.facebook.com/vermintide.band',
    'https://www.instagram.com/vermintide.band',
    'https://www.youtube.com/channel/UCgJ586vhsKUFASCBA5RrDLw',
    'https://soundcloud.com/vermintide_band',
  ],
  album: [
    {
      '@type': 'MusicAlbum',
      name: 'Meaningless Convulsions',
      '@id': 'https://musicbrainz.org/release-group/700a41d7-150b-48e2-a6fc-75a6df92f48d',
      datePublished: '2021',
    },
    {
      '@type': 'MusicAlbum',
      name: 'Ashamed Of My Species',
      '@id': 'https://musicbrainz.org/release-group/a821b9fd-e769-4cdf-a3e4-7536d30d5d82',
      datePublished: '2023',
    },
  ],
  member: [
    {
      '@type': 'OrganizationRole',
      member: {
        '@type': 'Person',
        name: 'Andrey Galchevski',
      },
      roleName: 'lead vocals',
    },
    {
      '@type': 'OrganizationRole',
      member: {
        '@type': 'Person',
        name: 'Yaniv Alkalay',
      },
      roleName: 'guitar',
    },
    {
      '@type': 'OrganizationRole',
      member: {
        '@type': 'Person',
        name: 'Dima Medvednik',
      },
      roleName: 'bass',
    },
  ],
};

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
