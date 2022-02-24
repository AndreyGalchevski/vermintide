import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
} from 'next/document';
import Script from 'next/script';
import { ServerStyleSheet } from 'styled-components';

const structuredData = `
  '@context': 'http://schema.org',
  '@type': 'MusicGroup',
  '@id': 'https://musicbrainz.org/artist/455707a4-a273-4b12-a26f-fcd41abef63a',
  name: 'Vermintide',
  description: 'Slamming Deathgrind collective from Israel',
  logo: {
    '@type': 'ImageObject',
    url: 'https://res.cloudinary.com/dqvimfd8b/image/upload/v1618120314/vermintide/fb-logo.png',
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://res.cloudinary.com/dqvimfd8b/image/upload/v1645194062/vermintide/IMG_0086.png',
  },
  url: 'https://vermintide.band',
  genre: ['Death Metal', 'Grindcore'],
  sameAs: [
    'https://www.facebook.com/vermintide.band',
    'https://www.instagram.com/vermintide.band',
    'https://www.youtube.com/channel/UCgJ586vhsKUFASCBA5RrDLw',
    'https://soundcloud.com/vermintide_band',
  ],
  album: {
    '@type': 'MusicAlbum',
    name: 'Meaningless Convulsions',
    '@id': 'https://musicbrainz.org/release-group/700a41d7-150b-48e2-a6fc-75a6df92f48d',
    datePublished: '2011',
  },
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
        name: 'Ido Reuven',
        givenName: 'Real Name if different',
      },
      roleName: 'bass',
    },
    {
      '@type': 'OrganizationRole',
      member: {
        '@type': 'Person',
        name: 'Idan Lupo',
      },
      roleName: 'drums',
    },
  ],
`;

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          // eslint-disable-next-line react/jsx-props-no-spreading
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <Script
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: structuredData }}
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
