import React from 'react';
import config from '../assets/config.json';

export default function Footer() {
  return (
    <footer className="text-sm font-thin text-center dark:text-slate-300">
      {`© ${(new Date()).getFullYear()} ${config.meta.author}`}
    </footer>
  );
}
