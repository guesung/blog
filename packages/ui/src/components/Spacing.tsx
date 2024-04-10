import { DirectionEnum } from '@guesung/constants';

interface SpacingProps extends React.HTMLAttributes<HTMLDivElement> {
  size: number;
  direction?: DirectionEnum;
}

export default function Spacing({
  size,
  direction = DirectionEnum.vertical,
  ...props
}: SpacingProps) {
  return (
    <div
      style={{
        [direction === DirectionEnum.vertical ? 'height' : 'width']:
          size + 'px',
      }}
      {...props}
    />
  );
}
