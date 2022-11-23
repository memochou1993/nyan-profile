import React, {
  useState,
} from 'react';
import colors from 'tailwindcss/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';
import config from '../assets/config.json';

export default function ThemeSwitch() {
  const [isDark, setIsDark] = useState(config.theme.dark);
  const handleClick = () => {
    document.documentElement.style.setProperty('background-color', colors.slate[isDark ? 300 : 900]);
    document.getElementById('app')?.classList.toggle('dark');
    setIsDark(!isDark);
  };
  return (
    <button type="button" onClick={handleClick}>
      <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="w-6 h-6 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100" />
    </button>
  );
}
