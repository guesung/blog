'use client';

import React, { PropsWithChildren, useState } from 'react';

export default function DragAndDrop() {
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    item: string
  ) => {
    setDraggedItem(item);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) =>
    e.preventDefault();

  return (
    <div className="flex gap-20">
      <Container onDragOver={handleDrop} onDragOverCapture={handleDragOver}>
        <div
          className="rounded-16 h-80 w-80 bg-slate-200"
          onDragStart={e => handleDragStart(e, 'A박스')}
          draggable
        />
      </Container>
      <Container
        onDragOver={handleDrop}
        onDragOverCapture={handleDragOver}
      ></Container>
    </div>
  );
}

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

function Container({ children, ...props }: PropsWithChildren<ContainerProps>) {
  return (
    <div
      className="p-30 rounded-16 flex-1 border border-solid border-black"
      {...props}
    >
      {children}
    </div>
  );
}
