import { getGuestbook } from '@apis';
import { formatShowDate } from '@guesung/utils';
import { Card, CardBody } from '@nextui-org/react';
import Image from 'next/image';

export default async function GuestbookList() {
  const { data: guestbookList } = await getGuestbook();

  return (
    <div className="gap-8pxr flex flex-col">
      {guestbookList.map(({ imageFile, name, message, created_at }) => (
        <Card>
          <CardBody className="px-24pxr gap-24pxr flex-row items-center">
            <div>
              <Image
                src={imageFile}
                width={40}
                height={40}
                className="rounded-full"
                alt="profile"
              />
            </div>
            <div className="gap-4pxr flex flex-col">
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
