import React, {
  useMemo,
  useState,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';
import config from '../assets/config.json';

export default function ThemeSwitch() {
  const [mode, setMode] = useState(config.theme.mode);
  const isDark = useMemo(() => mode === 'dark', [mode]);
  const handleClick = () => {
    document.documentElement.style.setProperty('background-color', isDark ? config.theme.light.background : config.theme.dark.background);
    document.getElementById('app')?.classList.toggle('dark');
    setMode(isDark ? 'light' : 'dark');
  };
  return (
    <button type="button" onClick={handleClick}>
      <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="w-6 h-6 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100" />
    </button>
  );
}
