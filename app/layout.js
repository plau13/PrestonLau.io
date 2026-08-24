import { Instrument_Serif, DM_Sans } from 'next/font/google';
import StyledComponentsRegistry from '@/components/registry/StyledComponentsRegistry';
import { ThemeProvider } from 'styled-components';
import './globals.css';
import theme from '@/styles/theme';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';
import { siteConfig } from '@/lib/config';

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-instrument-serif',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | Preston Lau`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: 'Preston Lau',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/og.png'],
  },
  icons: {
    icon: '/favicon-32x32.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${dmSans.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <a className="skip-to-content" href="#content">
              Skip to Content
            </a>
            <Nav />
            <div id="content">{children}</div>
            <Footer />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
