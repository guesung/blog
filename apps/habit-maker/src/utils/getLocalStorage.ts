export default function getLocalStorage(key: string) {
  const value = localStorage.getItem(key);
  return value;
}
