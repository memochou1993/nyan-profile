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

const {
  mode,
  dark,
  light,
} = config.theme;

export default function Document() {
  return (
    <Html style={{ background: mode === MODE_DARK ? dark.background : light.background }}>
      <Head>
        <GoogleFonts {...config.components.googleFonts} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
