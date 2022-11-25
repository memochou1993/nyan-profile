import React from 'react';
import ThemeSwitch from './ThemeSwitch';
import {
  useAnchors,
} from '../hooks';

interface Props {
  enabled: boolean;
  components: {
    themeSwitch: {
      enabled: boolean;
    }
  };
}

export default function Header({
  enabled,
  components,
}: Props) {
  const anchors = useAnchors();
  return enabled ? (
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
      <ThemeSwitch {...components.themeSwitch} />
    </nav>
  ) : <template />;
}
