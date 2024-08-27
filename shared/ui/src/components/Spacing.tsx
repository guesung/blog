interface SpacingProps extends React.HTMLAttributes<HTMLDivElement> {
  size: number;
  direction?: 'vertical' | 'horizontal';
}

export default function Spacing({
  size,
  direction = 'vertical',
  ...props
}: SpacingProps) {
  return (
    <div
      style={{
        [direction === 'vertical' ? 'height' : 'width']: size + 'px',
      }}
      {...props}
    />
  );
}
