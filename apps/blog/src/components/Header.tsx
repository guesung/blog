import Link from 'next/link';

export default function Header() {
  return (
    <header className="text-title2 max-w-1000 mx-auto flex h-80 w-screen items-center justify-between py-5">
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
