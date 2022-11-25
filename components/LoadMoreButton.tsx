import React, {
  MouseEventHandler,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';

interface LoadMoreButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function LoadMoreButton({
  onClick,
}: LoadMoreButtonProps) {
  return (
    <button type="button" onClick={onClick} className="inline-flex items-center text-slate-800 dark:text-slate-200 hover:underline hover:decoration-1 hover:underline-offset-4">
      <span className="mr-2">
        Load more
      </span>
      <FontAwesomeIcon icon={faArrowDown} className="w-3 text-slate-800 dark:text-slate-200" />
    </button>
  );
}
