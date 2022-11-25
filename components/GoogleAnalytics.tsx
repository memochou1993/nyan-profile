import React from 'react';
import Script from 'next/script';

interface Props {
  enabled: boolean;
  id: string;
}

export default function GoogleAnalytics({
  enabled,
  id,
}: Props) {
  return enabled ? (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${id}');
        `}
      </Script>
    </>
  ) : <template />;
}
