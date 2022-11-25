import React, {
  useState,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';
import {
  MODE_DARK,
} from '../constants';
import config from '../nyan.config.json';

interface ThemeSwitchProps {
  enabled: boolean;
}

export default function ThemeSwitch({
  enabled,
}: ThemeSwitchProps) {
  const [mode, setMode] = useState(config.theme.mode);
  const handleClick = () => {
    document.documentElement.classList.toggle(MODE_DARK);
    document.body.classList.toggle('bg-dark-bg');
    document.body.classList.toggle('bg-light-bg');
    setMode(mode === MODE_DARK ? 'light' : 'dark');
  };
  return enabled ? (
    <button type="button" onClick={handleClick}>
      <FontAwesomeIcon icon={mode === MODE_DARK ? faSun : faMoon} className="w-6 h-6 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100" />
    </button>
  ) : <template />;
}
