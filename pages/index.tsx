import React from 'react';
import Head from 'next/head';
import {
  ArticleList,
  About,
  Footer,
  Header,
  Profile,
  ProjectList,
  Sidebar,
} from '@/components';
import config from '../nyan.config.json';

export default function Home() {
  return (
    <>
      <Head>
        <title>{config.meta.title}</title>
      </Head>
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg">
        <div className="container px-16 py-8 mx-auto sm:px-24 sm:py-10 md:px-32 md:py-12">
          <Header {...config.components.header} />
          <Sidebar {...config.components.sidebar} />
          <main className="my-12">
            <Profile {...config.components.profile} />
            <About {...config.components.about} />
            <ProjectList {...config.components.projectList} />
            <ArticleList {...config.components.articleList} />
          </main>
          <Footer {...config.components.footer} />
        </div>
      </div>
    </>
  );
}
