import { Notification } from 'electron';

type ShowNotificationType = {
  title: string;
  body: string;
};

export default function showNotification({
  title,
  body,
}: ShowNotificationType) {
  new Notification({
    title,
    body,
  }).show();
}
