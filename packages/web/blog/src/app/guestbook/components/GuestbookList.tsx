import { GuestbookType } from '@apis';
import { SquareBox } from '@components';
import Image from 'next/image';

interface GuestbookListProps {
  guestbookList: GuestbookType[];
}

export default function GuestbookList({ guestbookList }: GuestbookListProps) {
  console.log(guestbookList);
  return (
    <div className="flex flex-col gap-8">
      {guestbookList.map(({ image, name, message, created_at }) => (
        <SquareBox className="flex items-center gap-24">
          <div>
            <Image
              src={image}
              width={40}
              height={40}
              className="rounded-full"
              alt="profile"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>{name}</div>
            <div className="text-caption text-gray-3">{created_at}</div>
            <div>{message}</div>
          </div>
        </SquareBox>
      ))}
    </div>
  );
}
