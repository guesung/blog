export default function Home() {
  return (
    <main className="flex justify-center flex-col text-center ">
      <h1 className="text-[20px]">Habit Maker</h1>
      <h2 className="text-20">당신의 습관을 책임져드립니다.</h2>
      <a
        href="https://guesung-bucket.s3.ap-northeast-2.amazonaws.com/Habit+Maker-4.6.0.dmg"
        download
        id="macDownload"
      >
        Mac용 다운로드
      </a>
      <a
        href="https://guesung-bucket.s3.ap-northeast-2.amazonaws.com/Habit+Maker-4.6.0-arm64.dmg"
        download
        id="macArm64Download"
      >
        Mac - arm64용 다운로드
      </a>
      <a
        href="https://guesung-bucket.s3.ap-northeast-2.amazonaws.com/Habit+Maker+Setup+4.6.0.exe"
        download
        id="macWindowDownload"
      >
        Window용 다운로드
      </a>
    </main>
  );
}
