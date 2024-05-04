import Link from 'next/link';

export default function Header() {
  return (
    <header className="text-title2 flex justify-between py-5 w-screen max-w-1000 mx-auto h-80 items-center">
      <div className="">
        <Link href="/">Guesung.</Link>
      </div>
      {/* <div className="flex gap-10">
        <span>Note</span>
        <span>About</span>
        <span>달</span>
      </div> */}
    </header>
  );
}
