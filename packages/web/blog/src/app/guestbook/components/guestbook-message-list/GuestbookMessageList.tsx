import { getGuestbook } from '@apis';
import { formatShowDate } from '@guesung/utils';
import { Card, CardBody } from '@nextui-org/react';
import Image from 'next/image';

export default async function GuestbookList() {
  const { data: guestbookList } = await getGuestbook();

  return (
    <div className="flex flex-col gap-8pxr">
      {guestbookList.map(({ image, name, message, created_at }) => (
        <Card >
          <CardBody className="flex-row items-center px-24pxr gap-24pxr">
          <div>
            <Image
              src={image}
              width={40}
              height={40}
              className="rounded-full"
              alt="profile"
            />
          </div>
          <div className="flex flex-col gap-4pxr">
            <div>{name}</div>
            <div className="text-caption text-gray-3">
              {formatShowDate(created_at)}
            </div>
            <div>{message}</div>
          </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
