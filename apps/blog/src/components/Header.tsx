import Link from 'next/link';

export default function Header() {
  return (
    <header className="text-title2 fixed top-0 mx-auto flex h-80 w-screen items-center justify-between bg-white px-20 py-5">
      <div>
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

function HeaderMargin() {
  return <div className="h-80" />;
}

Header.Margin = HeaderMargin;