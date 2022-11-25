import React from 'react';
import Divider from './Divider';

interface Props {
  enabled: boolean;
}

export default function Footer({
  enabled,
}: Props) {
  return enabled ? (
    <>
      <Divider />
      <footer className="text-sm font-light text-center dark:text-slate-300">
        Powered by
        {' '}
        <a href="https://github.com/memochou1993/nyan-profile" target="_blank" rel="noreferrer">
          <span className="hover:underline hover:decoration-1 hover:underline-offset-4">
            Nyan Profile
          </span>
        </a>
      </footer>
    </>
  ) : <template />;
}
