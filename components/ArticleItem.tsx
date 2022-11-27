import React from 'react';

interface ArticleItemProps {
  title: string,
  link: string,
  published: string,
}

export default function ArticleItem({
  title,
  link,
  published,
}: ArticleItemProps) {
  return (
    <div className="px-2 py-4 text-slate-800 dark:text-slate-200">
      {published && (
        <span className="mr-4">
          {published.slice(0, 10)}
        </span>
      )}
      <a href={link} target="_blank" rel="noreferrer">
        <span className="hover:underline hover:decoration-1 hover:underline-offset-4">
          {title}
        </span>
      </a>
    </div>
  );
}
