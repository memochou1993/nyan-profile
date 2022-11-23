import React from 'react';

interface Props {
  id: string;
}

export default function Divider({
  id,
}: Props) {
  return (
    <hr id={id} className="h-px my-8 border-0 bg-slate-500 sm:my-10 md:my-12" />
  );
}
