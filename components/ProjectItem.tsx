import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

interface ProjectItemProps {
  name: string;
  link: string;
  image: string;
  tags: Array<string>;
  button: {
    text: string;
  };
}

export default function ProjectItem({
  name,
  link,
  image,
  tags,
  button,
}: ProjectItemProps) {
  return (
    <div className="max-w-sm border rounded-xl border-slate-500 bg-slate-200 dark:bg-slate-800">
      <Image alt={name} src={image} width="3000" height="2000" className="rounded-t-xl aspect-[3/2]" />
      <hr className="h-px border-0 bg-slate-500" />
      <div className="p-6">
        <div className="mb-2">
          <a href={link} target="_blank" rel="noreferrer">
            <span className="text-2xl font-bold tracking-tighter text-slate-800 sm:tracking-tight md:tracking-normal dark:text-slate-200 hover:underline hover:decoration-1 hover:underline-offset-4">
              {name}
            </span>
          </a>
        </div>
        <p className="mb-6 font-thin text-slate-700 dark:text-slate-300">
          {tags.map((tag, i) => (
            <span key={tag}>
              {`#${tag}`}
              {i < tags.length - 1 ? ' ' : ''}
            </span>
          ))}
        </p>
        <div className="flex justify-end">
          <a href={link} target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white rounded-xl ring-slate-400 hover:ring-1 bg-gradient-to-br from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-500 active:from-blue-900 active:to-blue-500">
            <span className="mr-2">
              {button.text}
            </span>
            <FontAwesomeIcon icon={faArrowRight} className="w-3 text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
