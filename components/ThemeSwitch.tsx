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

const {
  mode,
  dark,
  light,
} = config.theme;

interface Props {
  enabled: boolean;
}

export default function ThemeSwitch({
  enabled,
}: Props) {
  const [isDark, setIsDark] = useState(mode === MODE_DARK);
  const handleClick = () => {
    document.documentElement.style.setProperty('background-color', isDark ? light.background : dark.background);
    document.getElementById('app')?.classList.toggle(MODE_DARK);
    setIsDark(!isDark);
  };
  return enabled ? (
    <button type="button" onClick={handleClick}>
      <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="w-6 h-6 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100" />
    </button>
  ) : <template />;
}
