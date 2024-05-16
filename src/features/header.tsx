import Link from 'next/link';

export function Header() {
  return (
    <div className="border-b border-gray-300 ">
      <div className="max-w-[1450px]  mx-auto px-6 py-4 flex gap-10 items-center">
        <div className="font-black ">CARDSHOP</div>
        <nav className="flex gap-4 ">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900"
          >
            Каталог
          </Link>

          <Link
            href="/about"
            className="text-gray-600 hover:text-gray-900"
          >
            О нас
          </Link>
        </nav>
      </div>
    </div>
  );
}
