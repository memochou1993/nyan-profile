import React from 'react';
import ThemeSwitch from './ThemeSwitch';
import config from '../assets/config.json';
import {
  useAnchors,
} from '../hooks';

export default function NavigationBar() {
  const anchors = useAnchors();
  return (
    <nav className="flex items-center justify-between text-slate-800 dark:text-slate-200">
      <div>
        {anchors.map((text) => (
          <a key={text} href={`#${String(text).toLowerCase()}`}>
            <span className="mr-4 text-lg sm:text-xl hover:underline hover:decoration-1 hover:underline-offset-4">
              {text}
            </span>
          </a>
        ))}
      </div>
      { config.layout.themeSwitch.enabled && <ThemeSwitch /> }
    </nav>
  );
}
