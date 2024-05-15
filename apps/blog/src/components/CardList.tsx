interface CardListProps<T> {
  items: T[];
  render: (item: T) => JSX.Element;
}

export default function CardList<T>({ items, render }: CardListProps<T>) {
  return (
    <div className="grid grid-cols-2 gap-x-16 gap-y-32">
      {items.map(render)}
    </div>
  );
}
