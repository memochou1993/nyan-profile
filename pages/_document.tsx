import React from 'react';
import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import {
  GoogleFonts,
} from '@/components';
import {
  MODE_DARK,
} from '../constants';
import config from '../nyan.config.json';

export default function Document() {
  return (
    <Html className={config.theme.mode}>
      <Head>
        <GoogleFonts {...config.components.googleFonts} />
      </Head>
      <body className={config.theme.mode === MODE_DARK ? 'bg-dark-bg' : 'bg-light-bg'}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
