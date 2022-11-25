import React from 'react';
import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
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
        {config.googleFonts.family && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href={`https://fonts.googleapis.com/css2?family=${config.googleFonts.family}:wght@100;300;400;500;700;900&display=swap`} rel="stylesheet" />
          </>
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
