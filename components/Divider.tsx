import React from 'react';

interface Props {
  anchor?: string;
}

export default function Divider({
  anchor,
}: Props) {
  return (
    <hr id={String(anchor).toLowerCase()} className="h-px my-8 border-0 bg-slate-500 sm:my-10 md:my-12" />
  );
}
