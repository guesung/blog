export const formatShowDate = (date: Date | string) => {
  if (typeof date === 'string') date = new Date(date);

  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
};

export const formatDate = (date: Date | string) => {
  if (typeof date === 'string') date = new Date(date);

  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
};
