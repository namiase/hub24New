import { titleFont } from '@/config/fonts';
import Link from 'next/link';
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5';

export const TopMenu = () => {
  return (
    <nav className="flex px-5 justify-between items-center w-full pt-2">
      {/*Logo*/}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Teslo
          </span>
        </Link>
      </div>

      {/* CenterMenu */}
      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href={'/category/men'}
        >
          Hombre
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href={'/category/woman'}
        >
          Mujer
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href={'/category/kids'}
        >
          Niños
        </Link>
      </div>

      {/* search, Cart, Menu */}
      <div className="flex items-center">
        <Link href={'/search'} className="mx-2">
          <IoSearchOutline className="w-5 h-5"></IoSearchOutline>
        </Link>
        <Link href={'/cart'} className="mx-2">
          <div className="relative">
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">
              3
            </span>
            <IoCartOutline className="w-5 h-5"></IoCartOutline>
          </div>
        </Link>
        <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
          Menú
        </button>
      </div>
    </nav>
  );
};
