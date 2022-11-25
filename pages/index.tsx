import React from 'react';
import Head from 'next/head';
import {
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
    </>
  );
}
