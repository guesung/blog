export async function copyToClipboard(text: string): Promise<void> {
  if (!navigator) return;
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error('클립보드에 복사하는 중 오류 발생: ', err);
  }
}
