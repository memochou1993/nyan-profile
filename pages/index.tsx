import React from 'react';
import Head from 'next/head';
import {
  About,
  Footer,
  GoogleAnalytics,
  Header,
  Profile,
  ProjectList,
  Sidebar,
} from '@/components';
import config from '../nyan.config.json';

export default function Home() {
  return (
    <div id="app" className={config.theme.mode}>
      <Head>
        <link rel="icon" href="favicon.png" />
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
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg">
        <div className="container px-16 py-12 mx-auto sm:px-24 md:px-32">
          <Header {...config.components.header} />
          <Sidebar {...config.components.sidebar} />
          <main className="my-12">
            <Profile {...config.components.profile} />
            <About {...config.components.about} />
            <ProjectList {...config.components.projectList} />
          </main>
          <Footer {...config.components.footer} />
        </div>
      </div>
      <GoogleAnalytics {...config.components.googleAnalytics} />
    </div>
  );
}
