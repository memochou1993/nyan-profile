import React, {
  useEffect,
  useRef,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import {
  useAnchors,
} from 'hooks';

const OFFSET = 4 * 12 + 28;

interface SidebarProps {
  enabled: boolean;
}

export default function Sidebar({
  enabled,
}: SidebarProps) {
  const mounted = useRef(false);
  const element = useRef(null);
  const visible = useRef(false);
  const anchors = useAnchors();
  useEffect(() => {
    const target = element.current as HTMLElement | null;
    if (mounted.current) return;
    document.addEventListener('scroll', () => {
      if (window.pageYOffset > OFFSET && !visible.current) {
        target?.classList.add('opacity-100');
        target?.classList.remove('opacity-0');
        visible.current = true;
      }
      if (window.pageYOffset <= OFFSET && visible.current) {
        target?.classList.add('opacity-0');
        target?.classList.remove('opacity-100');
        visible.current = false;
      }
    });
    mounted.current = true;
  }, []);
  return enabled ? (
    <div ref={element} className="absolute transition opacity-0 fade-in-out delay-250">
      <div className="fixed invisible text-right bottom-12 right-12 sm:visible text-slate-700 dark:text-slate-300">
        <div className="flex items-center justify-end">
          <button
            type="button"
            onClick={() => {
              window.scrollTo({ top: 0 });
              window.history.replaceState(null, '', '/');
            }}
          >
            <FontAwesomeIcon icon={faArrowUp} className="w-3" />
          </button>
        </div>
        <nav>
          {anchors.map((text) => (
            <div key={text} className="mt-2">
              <a href={`#${String(text).toLowerCase()}`}>
                <span className="hover:underline hover:decoration-1 hover:underline-offset-4">
                  {text}
                </span>
              </a>
            </div>
          ))}
        </nav>
      </div>
    </div>
  ) : <template />;
}
