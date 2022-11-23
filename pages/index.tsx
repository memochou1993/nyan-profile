import React, {
  useEffect,
} from 'react';
import Head from 'next/head';
import Script from 'next/script';
import colors from 'tailwindcss/colors';
import {
  About,
  Divider,
  Footer,
  Header,
  Heading,
  Profile,
  Sidebar,
} from '@/components';
import config from '../assets/config.json';

export default function Home() {
  useEffect(() => {
    document.documentElement.style.setProperty('background-color', colors.slate[config.theme.dark ? 900 : 300]);
  }, []);
  return (
    <div id="app" className={`${config.theme.dark ? 'dark' : ''}`}>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>{config.meta.title}</title>
        <meta name="author" content={config.meta.author} />
        <meta name="description" content={config.meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={config.meta.title} />
        <meta property="og:description" content={config.meta.description} />
        <meta property="og:image" content={config.meta.image} />
        <meta property="og:image:alt" content={config.meta.title} />
        <meta property="og:image:type" content="image/png" />
      </Head>
      <div className="min-h-screen bg-slate-300 dark:bg-slate-900">
        <div className="container px-16 py-12 mx-auto sm:px-24 md:px-32">
          { config.layout.header.enabled && <Header /> }
          <main className="my-12">
            <Profile />
            <Divider id="about" />
            <Heading text="About" />
            <About />
          </main>
          { config.layout.sidebar.enabled && <Sidebar /> }
          { config.layout.footer.enabled && <Footer /> }
        </div>
      </div>
      {config.googleAnalytics.enabled && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalytics.id}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', ${config.googleAnalytics.id});
            `}
          </Script>
        </>
      )}
    </div>
  );
}
