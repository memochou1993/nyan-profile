import React from 'react';

interface GoogleFontsProps {
  enabled: boolean;
  family: string;
}

export default function GoogleFonts({
  enabled,
  family,
}: GoogleFontsProps) {
  return enabled ? (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="stylesheet" href={`https://fonts.googleapis.com/css2?family=${family}:wght@100;300;400;500;700;900&display=swap`} />
    </>
  ) : <template />;
}
