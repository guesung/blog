export const getCookie = (key: string) => {
  if (typeof document === 'undefined') return;

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${key}=`);

  return parts.pop()?.split(';').shift();
};

export const setCookie = (
  key: string,
  value: string,
  options?: { expires?: Date }
) => {
  if (typeof document === 'undefined') return;
  document.cookie = `${key}=${value}; path=/; ${
    options?.expires ? `expires=${options.expires.toUTCString()}` : ''
  }`;
};

export const removeCookie = (key: string) => {
  if (typeof document === 'undefined') return;
  document.cookie = `${key}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
};
