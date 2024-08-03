export default function setLocalStorage(key: string, value: string | null) {
  localStorage.setItem(key, value || '');
}
